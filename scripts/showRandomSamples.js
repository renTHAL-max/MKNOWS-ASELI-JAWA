import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// DAFTAR LIBUR
const liburNasional2027 = [
  { date: '2027-01-01', name: 'Tahun Baru' },
  { date: '2027-01-05', name: 'Isra Mikraj' },
  { date: '2027-02-06', name: 'Tahun Baru Imlek' },
  { date: '2027-03-08', name: 'Nyepi' },
  { date: '2027-03-10', name: 'Idulfitri' },
  { date: '2027-03-11', name: 'Idulfitri' },
  { date: '2027-03-26', name: 'Wafat Yesus' },
  { date: '2027-03-28', name: 'Paskah' },
  { date: '2027-05-01', name: 'Hari Buruh' },
  { date: '2027-05-06', name: 'Kenaikan Yesus' },
  { date: '2027-05-17', name: 'Iduladha' },
  { date: '2027-05-20', name: 'Waisak' },
  { date: '2027-06-01', name: 'Hari Lahir Pancasila' },
  { date: '2027-06-06', name: 'Tahun Baru Islam' },
  { date: '2027-08-15', name: 'Maulid Nabi' },
  { date: '2027-08-17', name: 'Proklamasi' },
  { date: '2027-12-25', name: 'Natal' },
  { date: '2027-12-26', name: 'Isra Mikraj' }
];

const cutiBersama2027 = [
  { date: '2027-02-05', name: 'Cuti Tahun Baru Imlek' },
  { date: '2027-03-09', name: 'Cuti Idulfitri' },
  { date: '2027-03-12', name: 'Cuti Idulfitri' },
  { date: '2027-03-15', name: 'Cuti Idulfitri' },
  { date: '2027-03-25', name: 'Cuti Wafat Yesus' },
  { date: '2027-05-18', name: 'Cuti Iduladha' },
  { date: '2027-05-19', name: 'Cuti Waisak' },
  { date: '2027-12-24', name: 'Cuti Natal' }
];

const allHolidays = [...liburNasional2027, ...cutiBersama2027];
const holidayDates = allHolidays.map(h => h.date);

const monthMap = {
  'jan': 0, 'feb': 1, 'mar': 2, 'apr': 3, 'mei': 4, 'jun': 5,
  'jul': 6, 'agu': 7, 'sep': 8, 'okt': 9, 'nov': 10, 'des': 11
};

const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

function parseDate(dateStr) {
  const parts = dateStr.toLowerCase().trim().split(/[\s-]+/);
  if (parts.length === 3) {
    const day1 = parseInt(parts[0]);
    const day2 = parseInt(parts[1]);
    const month = monthMap[parts[2]];
    if (!isNaN(day1) && !isNaN(day2) && month !== undefined) {
      return { day1, day2, month };
    }
  }
  return null;
}

function getDayInfo(day, month) {
  const date = new Date(2027, month, day);
  const dayName = dayNames[date.getDay()];
  const isWeekend = date.getDay() === 0 || date.getDay() === 6;
  const dateStr = date.toISOString().split('T')[0];
  const holiday = allHolidays.find(h => h.date === dateStr);
  
  return { date, dayName, isWeekend, holiday, dateStr };
}

function collectAllSchedules(data) {
  const allSchedules = [];
  
  const seriesToProcess = [
    'new-training-2026',
    'tech-series',
    'bnsp-series',
    'esg-series',
    'finance-series',
    'leadership-series',
    'sales-marketing-series',
    'hc-training-series',
    'office-adm-series',
    'credit-collection-series'
  ];
  
  seriesToProcess.forEach(seriesKey => {
    if (data[seriesKey] && data[seriesKey][0] && data[seriesKey][0].data) {
      const seriesName = seriesKey.replace('-series', '').toUpperCase();
      const programs = data[seriesKey][0].data;
      
      programs.forEach(program => {
        const programTitle = Object.keys(program).find(key => key !== 'id');
        
        if (programTitle && Array.isArray(program[programTitle])) {
          program[programTitle].forEach(schedule => {
            if (schedule.data) {
              allSchedules.push({
                series: seriesName,
                program: programTitle,
                schedule: schedule.data
              });
            }
          });
        }
      });
    }
  });
  
  return allSchedules;
}

try {
  const dbPath = path.join(__dirname, '..', 'src', 'DB', 'db.json');
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  
  const allSchedules = collectAllSchedules(data);
  
  console.log('📅 SAMPLE RANDOM JADWAL TRAINING 2027');
  console.log('=' .repeat(90));
  console.log(`Total Jadwal: ${allSchedules.length}`);
  console.log('=' .repeat(90));
  console.log('');
  
  // Ambil 15 sample random
  const samples = [];
  const usedIndices = new Set();
  
  while (samples.length < 15 && samples.length < allSchedules.length) {
    const randomIdx = Math.floor(Math.random() * allSchedules.length);
    if (!usedIndices.has(randomIdx)) {
      usedIndices.add(randomIdx);
      samples.push(allSchedules[randomIdx]);
    }
  }
  
  samples.forEach((item, idx) => {
    const parsed = parseDate(item.schedule);
    
    if (parsed) {
      const { day1, day2, month } = parsed;
      const info1 = getDayInfo(day1, month);
      const info2 = getDayInfo(day2, month);
      
      console.log(`${idx + 1}. [${item.series}] ${item.program.substring(0, 60)}${item.program.length > 60 ? '...' : ''}`);
      console.log(`   Jadwal: ${item.schedule}`);
      console.log(`   📍 ${day1} ${monthNames[month]} = ${info1.dayName} ${info1.isWeekend ? '⚠️ WEEKEND' : '✅'} ${info1.holiday ? `⚠️ ${info1.holiday.name}` : ''}`);
      console.log(`   📍 ${day2} ${monthNames[month]} = ${info2.dayName} ${info2.isWeekend ? '⚠️ WEEKEND' : '✅'} ${info2.holiday ? `⚠️ ${info2.holiday.name}` : ''}`);
      
      // Check days in between
      if (day2 - day1 > 1) {
        for (let d = day1 + 1; d < day2; d++) {
          const infoMid = getDayInfo(d, month);
          console.log(`   📍 ${d} ${monthNames[month]} = ${infoMid.dayName} ${infoMid.isWeekend ? '⚠️ WEEKEND' : '✅'} ${infoMid.holiday ? `⚠️ ${infoMid.holiday.name}` : ''}`);
        }
      }
      
      console.log('');
    }
  });
  
  console.log('=' .repeat(90));
  console.log('📋 DAFTAR HARI LIBUR 2027 (26 hari)');
  console.log('=' .repeat(90));
  
  console.log('\n🔴 LIBUR NASIONAL (18 hari):');
  liburNasional2027.forEach((h, idx) => {
    const date = new Date(h.date);
    const day = dayNames[date.getDay()];
    console.log(`   ${idx + 1}. ${date.getDate()} ${monthNames[date.getMonth()]} (${day}) - ${h.name}`);
  });
  
  console.log('\n🟡 CUTI BERSAMA (8 hari):');
  cutiBersama2027.forEach((h, idx) => {
    const date = new Date(h.date);
    const day = dayNames[date.getDay()];
    console.log(`   ${idx + 1}. ${date.getDate()} ${monthNames[date.getMonth()]} (${day}) - ${h.name}`);
  });
  
  console.log('\n🟢 WEEKEND: Setiap Sabtu & Minggu sepanjang 2027');
  console.log('=' .repeat(90));
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
