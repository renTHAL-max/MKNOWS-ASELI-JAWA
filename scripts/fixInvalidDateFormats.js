import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// DAFTAR LENGKAP LIBUR 2027
const liburNasional2027 = [
  '2027-01-01', '2027-01-05', '2027-02-06', '2027-03-08', '2027-03-10',
  '2027-03-11', '2027-03-26', '2027-03-28', '2027-05-01', '2027-05-06',
  '2027-05-17', '2027-05-20', '2027-06-01', '2027-06-06', '2027-08-15',
  '2027-08-17', '2027-12-25', '2027-12-26'
];

const cutiBersama2027 = [
  '2027-02-05', '2027-03-09', '2027-03-12', '2027-03-15', '2027-03-25',
  '2027-05-18', '2027-05-19', '2027-12-24'
];

const allHolidays = [...liburNasional2027, ...cutiBersama2027];

const monthMap = {
  'jan': 0, 'januari': 0,
  'feb': 1, 'februari': 1,
  'mar': 2, 'maret': 2,
  'apr': 3, 'april': 3,
  'mei': 4, 'may': 4,
  'jun': 5, 'juni': 5,
  'jul': 6, 'juli': 6,
  'agu': 7, 'agustus': 7, 'agt': 7, 'aug': 7,
  'sep': 8, 'september': 8,
  'okt': 9, 'oktober': 9, 'oct': 9,
  'nov': 10, 'november': 10,
  'des': 11, 'desember': 11, 'dec': 11,
};

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function isHoliday(date) {
  const dateStr = date.toISOString().split('T')[0];
  return allHolidays.includes(dateStr);
}

function hasConflict(day1, day2, month) {
  for (let d = day1; d <= day2; d++) {
    const date = new Date(2027, month, d);
    if (date.getMonth() !== month) return true; // Invalid date
    if (isWeekend(date) || isHoliday(date)) return true;
  }
  return false;
}

function findNextAvailableDate(preferredDay1, preferredMonth, duration = 2) {
  let month = preferredMonth;
  let day1 = preferredDay1;
  
  for (let attempt = 0; attempt < 90; attempt++) {
    const day2 = day1 + duration - 1;
    const testDate = new Date(2027, month, day2);
    
    if (testDate.getMonth() === month && !hasConflict(day1, day2, month)) {
      return { day1, day2, month };
    }
    
    day1++;
    const checkDate = new Date(2027, month, day1);
    if (checkDate.getMonth() !== month) {
      month = (month + 1) % 12;
      day1 = 1;
    }
  }
  
  return { day1: preferredDay1, day2: preferredDay1 + duration - 1, month: preferredMonth };
}

function formatDate(day1, day2, month) {
  return `${day1}-${day2} ${monthNames[month]}`;
}

function fixDateFormat(dateStr) {
  // Normalize: replace em-dash, en-dash with regular dash
  let normalized = dateStr
    .replace(/–/g, '-')  // en-dash
    .replace(/—/g, '-')  // em-dash
    .replace(/\s+/g, ' ') // normalize spaces
    .trim();
  
  // Parse different formats
  const parts = normalized.toLowerCase().split(/[\s-]+/);
  
  // Case 1: "22 Jan" (single day) -> convert to 2-day: "22-23 Jan"
  if (parts.length === 2) {
    const day1 = parseInt(parts[0]);
    const monthStr = parts[1];
    const month = monthMap[monthStr];
    
    if (month !== undefined && !isNaN(day1)) {
      const duration = 2;
      const result = findNextAvailableDate(day1, month, duration);
      return formatDate(result.day1, result.day2, result.month);
    }
  }
  
  // Case 2: "6-7 Agt" or "22-23 Jan" (standard format)
  if (parts.length === 3) {
    const day1 = parseInt(parts[0]);
    const day2 = parseInt(parts[1]);
    const monthStr = parts[2];
    const month = monthMap[monthStr];
    
    if (month !== undefined && !isNaN(day1) && !isNaN(day2)) {
      const duration = day2 - day1 + 1;
      
      // Check if current dates have conflict
      if (hasConflict(day1, day2, month)) {
        const result = findNextAvailableDate(day1, month, duration);
        return formatDate(result.day1, result.day2, result.month);
      }
      
      // Already valid, just normalize format
      return formatDate(day1, day2, month);
    }
  }
  
  return null;
}

function fixAllDates(data) {
  let fixedCount = 0;
  
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
  
  console.log('🔧 Memperbaiki format tanggal yang tidak valid...\n');
  
  seriesToProcess.forEach(seriesKey => {
    if (data[seriesKey] && data[seriesKey][0] && data[seriesKey][0].data) {
      const programs = data[seriesKey][0].data;
      
      programs.forEach(program => {
        const programTitle = Object.keys(program).find(key => key !== 'id');
        
        if (programTitle && Array.isArray(program[programTitle])) {
          const schedules = program[programTitle];
          
          schedules.forEach(schedule => {
            if (schedule.data) {
              const original = schedule.data;
              const fixed = fixDateFormat(original);
              
              if (fixed && fixed !== original) {
                console.log(`✅ ${original} → ${fixed}`);
                console.log(`   [${programTitle.substring(0, 60)}...]`);
                schedule.data = fixed;
                fixedCount++;
              }
            }
          });
        }
      });
    }
  });
  
  console.log(`\n📊 Total diperbaiki: ${fixedCount} jadwal`);
  return data;
}

try {
  const dbPath = path.join(__dirname, '..', 'src', 'DB', 'db.json');
  
  console.log('📅 Memperbaiki format tanggal tidak valid...\n');
  
  const dbContent = fs.readFileSync(dbPath, 'utf8');
  const data = JSON.parse(dbContent);
  
  const updatedData = fixAllDates(data);
  
  // Backup
  const backupPath = path.join(__dirname, '..', 'src', 'DB', 'db.backup2.json');
  fs.writeFileSync(backupPath, dbContent);
  console.log(`\n💾 Backup: db.backup2.json`);
  
  // Save
  fs.writeFileSync(dbPath, JSON.stringify(updatedData, null, 2));
  console.log('💾 Updated: db.json');
  
  console.log('\n✅ Selesai! Jalankan verifyTrainingDates.js untuk cek ulang.');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
