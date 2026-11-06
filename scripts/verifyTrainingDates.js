import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// DAFTAR LENGKAP LIBUR NASIONAL 2027
const liburNasional2027 = [
  '2027-01-01', // Tahun Baru
  '2027-01-05', // Isra Mikraj
  '2027-02-06', // Tahun Baru Imlek
  '2027-03-08', // Nyepi
  '2027-03-10', // Idulfitri
  '2027-03-11', // Idulfitri
  '2027-03-26', // Wafat Yesus
  '2027-03-28', // Paskah
  '2027-05-01', // Hari Buruh
  '2027-05-06', // Kenaikan Yesus
  '2027-05-17', // Iduladha
  '2027-05-20', // Waisak
  '2027-06-01', // Hari Lahir Pancasila
  '2027-06-06', // Tahun Baru Islam
  '2027-08-15', // Maulid Nabi
  '2027-08-17', // Proklamasi
  '2027-12-25', // Natal
  '2027-12-26', // Isra Mikraj (tambahan di akhir tahun)
];

// DAFTAR CUTI BERSAMA 2027
const cutiBersama2027 = [
  '2027-02-05', // Cuti Tahun Baru Imlek
  '2027-03-09', // Cuti Idulfitri
  '2027-03-12', // Cuti Idulfitri
  '2027-03-15', // Cuti Idulfitri
  '2027-03-25', // Cuti Wafat Yesus
  '2027-05-18', // Cuti Iduladha
  '2027-05-19', // Cuti Waisak
  '2027-12-24', // Cuti Natal
];

const allHolidays = [...liburNasional2027, ...cutiBersama2027];

// Mapping bulan Indonesia
const monthMap = {
  'jan': 0, 'januari': 0,
  'feb': 1, 'februari': 1,
  'mar': 2, 'maret': 2,
  'apr': 3, 'april': 3,
  'mei': 4, 'may': 4,
  'jun': 5, 'juni': 5,
  'jul': 6, 'juli': 6,
  'agu': 7, 'agustus': 7, 'aug': 7,
  'sep': 8, 'september': 8,
  'okt': 9, 'oktober': 9, 'oct': 9,
  'nov': 10, 'november': 10,
  'des': 11, 'desember': 11, 'dec': 11,
};

const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

function parseTrainingDate(dateStr) {
  const parts = dateStr.toLowerCase().trim().split(/[\s-]+/);
  
  if (parts.length >= 3) {
    const day1 = parseInt(parts[0]);
    const day2 = parseInt(parts[1]);
    const monthStr = parts[2];
    const month = monthMap[monthStr];
    
    if (month !== undefined && !isNaN(day1) && !isNaN(day2)) {
      return { day1, day2, month, originalStr: dateStr };
    }
  }
  
  return null;
}

function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6; // Sunday or Saturday
}

function isHoliday(date) {
  const dateStr = date.toISOString().split('T')[0];
  return allHolidays.includes(dateStr);
}

function getHolidayName(date) {
  const dateStr = date.toISOString().split('T')[0];
  const holidayMap = {
    '2027-01-01': 'Tahun Baru',
    '2027-01-05': 'Isra Mikraj',
    '2027-02-05': 'Cuti Tahun Baru Imlek',
    '2027-02-06': 'Tahun Baru Imlek',
    '2027-03-08': 'Nyepi',
    '2027-03-09': 'Cuti Idulfitri',
    '2027-03-10': 'Idulfitri',
    '2027-03-11': 'Idulfitri',
    '2027-03-12': 'Cuti Idulfitri',
    '2027-03-15': 'Cuti Idulfitri',
    '2027-03-25': 'Cuti Wafat Yesus',
    '2027-03-26': 'Wafat Yesus',
    '2027-03-28': 'Paskah',
    '2027-05-01': 'Hari Buruh',
    '2027-05-06': 'Kenaikan Yesus',
    '2027-05-17': 'Iduladha',
    '2027-05-18': 'Cuti Iduladha',
    '2027-05-19': 'Cuti Waisak',
    '2027-05-20': 'Waisak',
    '2027-06-01': 'Hari Lahir Pancasila',
    '2027-06-06': 'Tahun Baru Islam',
    '2027-08-15': 'Maulid Nabi',
    '2027-08-17': 'Proklamasi',
    '2027-12-24': 'Cuti Natal',
    '2027-12-25': 'Natal',
    '2027-12-26': 'Isra Mikraj',
  };
  return holidayMap[dateStr] || 'Libur';
}

function verifyTrainingDates(data) {
  let totalSchedules = 0;
  let conflictCount = 0;
  const conflicts = [];
  
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
  
  console.log('🔍 MEMULAI VERIFIKASI TANGGAL TRAINING 2027\n');
  console.log('=' .repeat(80));
  console.log(`📋 Total Hari Libur yang Dihindari: ${allHolidays.length} hari`);
  console.log(`   - Libur Nasional: ${liburNasional2027.length} hari`);
  console.log(`   - Cuti Bersama: ${cutiBersama2027.length} hari`);
  console.log(`   - Weekend: Setiap Sabtu & Minggu`);
  console.log('=' .repeat(80));
  console.log('');
  
  seriesToProcess.forEach((seriesKey, idx) => {
    if (data[seriesKey] && data[seriesKey][0] && data[seriesKey][0].data) {
      const seriesName = seriesKey.replace('-series', '').replace('new-training-2026', 'new-training').toUpperCase();
      const programs = data[seriesKey][0].data;
      
      console.log(`\n${idx + 1}. Series: ${seriesName} (${programs.length} programs)`);
      console.log('-'.repeat(80));
      
      programs.forEach((program, pIdx) => {
        const programTitle = Object.keys(program).find(key => key !== 'id');
        
        if (programTitle && Array.isArray(program[programTitle])) {
          const schedules = program[programTitle];
          
          schedules.forEach((schedule, sIdx) => {
            if (schedule.data) {
              totalSchedules++;
              const parsed = parseTrainingDate(schedule.data);
              
              if (parsed) {
                const { day1, day2, month } = parsed;
                let hasConflict = false;
                const conflictDetails = [];
                
                // Check all days in the range
                for (let d = day1; d <= day2; d++) {
                  const date = new Date(2027, month, d);
                  
                  // Validate date exists
                  if (date.getMonth() !== month) {
                    hasConflict = true;
                    conflictDetails.push(`❌ Tanggal ${d} tidak valid di ${monthNames[month]}`);
                    continue;
                  }
                  
                  if (isWeekend(date)) {
                    hasConflict = true;
                    const dayName = dayNames[date.getDay()];
                    conflictDetails.push(`❌ ${d} ${monthNames[month]} = ${dayName} (WEEKEND)`);
                  }
                  
                  if (isHoliday(date)) {
                    hasConflict = true;
                    const holidayName = getHolidayName(date);
                    conflictDetails.push(`❌ ${d} ${monthNames[month]} = ${holidayName} (LIBUR)`);
                  }
                }
                
                if (hasConflict) {
                  conflictCount++;
                  const shortTitle = programTitle.length > 60 ? programTitle.substring(0, 57) + '...' : programTitle;
                  
                  console.log(`\n   ⚠️  BENTROK #${conflictCount}:`);
                  console.log(`       Program: ${shortTitle}`);
                  console.log(`       Jadwal: ${schedule.data}`);
                  conflictDetails.forEach(detail => console.log(`       ${detail}`));
                  
                  conflicts.push({
                    series: seriesName,
                    program: programTitle,
                    schedule: schedule.data,
                    conflicts: conflictDetails
                  });
                }
              } else {
                console.log(`   ⚠️  Format tidak valid: "${schedule.data}" - ${programTitle.substring(0, 50)}`);
              }
            }
          });
        }
      });
      
      if (conflicts.filter(c => c.series === seriesName).length === 0) {
        console.log(`   ✅ Semua jadwal OK`);
      }
    }
  });
  
  // Summary
  console.log('\n');
  console.log('=' .repeat(80));
  console.log('📊 HASIL VERIFIKASI');
  console.log('=' .repeat(80));
  console.log(`Total Jadwal Diperiksa: ${totalSchedules}`);
  console.log(`Bentrok Ditemukan: ${conflictCount}`);
  console.log('');
  
  if (conflictCount === 0) {
    console.log('✅✅✅ SEMPURNA! TIDAK ADA BENTROK! ✅✅✅');
    console.log('');
    console.log('Semua jadwal training sudah:');
    console.log('  ✓ Menghindari 18 hari libur nasional');
    console.log('  ✓ Menghindari 8 hari cuti bersama');
    console.log('  ✓ Menghindari Sabtu & Minggu');
    console.log('  ✓ Hanya di hari kerja yang valid');
  } else {
    console.log('❌ DITEMUKAN BENTROK! PERLU DIPERBAIKI!');
    console.log('');
    console.log('Daftar bentrok:');
    conflicts.forEach((conflict, idx) => {
      console.log(`\n${idx + 1}. [${conflict.series}] ${conflict.program}`);
      console.log(`   Jadwal: ${conflict.schedule}`);
      conflict.conflicts.forEach(c => console.log(`   ${c}`));
    });
  }
  
  console.log('=' .repeat(80));
  
  return { totalSchedules, conflictCount, conflicts };
}

// Execute
try {
  const dbPath = path.join(__dirname, '..', 'src', 'DB', 'db.json');
  const dbContent = fs.readFileSync(dbPath, 'utf8');
  const data = JSON.parse(dbContent);
  
  const result = verifyTrainingDates(data);
  
  // Save report
  const reportPath = path.join(__dirname, 'verification-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(result, null, 2));
  console.log(`\n📄 Laporan lengkap disimpan di: verification-report.json`);
  
  process.exit(result.conflictCount > 0 ? 1 : 0);
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
