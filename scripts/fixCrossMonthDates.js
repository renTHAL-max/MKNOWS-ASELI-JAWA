import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  'jan': 0, 'feb': 1, 'mar': 2, 'apr': 3, 'mei': 4, 'jun': 5,
  'jul': 6, 'agu': 7, 'sep': 8, 'okt': 9, 'nov': 10, 'des': 11
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

function findNextAvailableDate(preferredDay, preferredMonth, duration = 2) {
  let month = preferredMonth;
  let day1 = preferredDay;
  
  for (let attempt = 0; attempt < 120; attempt++) {
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
  
  return null;
}

function formatDate(day1, day2, month) {
  return `${day1}-${day2} ${monthNames[month]}`;
}

function fixCrossMonthDates(data) {
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
  
  console.log('🔧 Memperbaiki tanggal lintas bulan...\n');
  
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
              
              // Check for cross-month pattern like "30-1 Okt" (Sept 30 - Oct 1)
              const parts = original.toLowerCase().trim().split(/[\s-]+/);
              
              if (parts.length === 3) {
                const day1 = parseInt(parts[0]);
                const day2 = parseInt(parts[1]);
                const monthStr = parts[2];
                const month = monthMap[monthStr];
                
                if (!isNaN(day1) && !isNaN(day2) && month !== undefined) {
                  // Check if this is invalid (day1 > day2 suggests cross-month)
                  if (day1 > day2) {
                    // "30-1 Okt" means Sept 30 - Oct 1
                    // Change to same-month valid dates
                    const result = findNextAvailableDate(1, month, 2);
                    
                    if (result) {
                      const fixed = formatDate(result.day1, result.day2, result.month);
                      console.log(`✅ ${original} → ${fixed}`);
                      console.log(`   [${programTitle.substring(0, 60)}...]`);
                      console.log(`   Alasan: Lintas bulan, dipindah ke tanggal valid\n`);
                      schedule.data = fixed;
                      fixedCount++;
                    }
                  } else {
                    // Normal format, but check if dates are invalid
                    const date1 = new Date(2027, month, day1);
                    const date2 = new Date(2027, month, day2);
                    
                    // If date rolls over to next month, it's invalid
                    if (date1.getMonth() !== month || date2.getMonth() !== month) {
                      const result = findNextAvailableDate(day1 > 28 ? 1 : day1, month, day2 - day1 + 1);
                      
                      if (result) {
                        const fixed = formatDate(result.day1, result.day2, result.month);
                        console.log(`✅ ${original} → ${fixed}`);
                        console.log(`   [${programTitle.substring(0, 60)}...]`);
                        console.log(`   Alasan: Tanggal tidak valid di bulan tersebut\n`);
                        schedule.data = fixed;
                        fixedCount++;
                      }
                    }
                  }
                }
              }
            }
          });
        }
      });
    }
  });
  
  console.log(`📊 Total diperbaiki: ${fixedCount} jadwal\n`);
  return data;
}

try {
  const dbPath = path.join(__dirname, '..', 'src', 'DB', 'db.json');
  
  console.log('📅 Memperbaiki tanggal lintas bulan dan tidak valid...\n');
  
  const dbContent = fs.readFileSync(dbPath, 'utf8');
  const data = JSON.parse(dbContent);
  
  const updatedData = fixCrossMonthDates(data);
  
  // Backup
  const backupPath = path.join(__dirname, '..', 'src', 'DB', 'db.backup3.json');
  fs.writeFileSync(backupPath, dbContent);
  console.log(`💾 Backup: db.backup3.json`);
  
  // Save
  fs.writeFileSync(dbPath, JSON.stringify(updatedData, null, 2));
  console.log('💾 Updated: db.json\n');
  
  console.log('✅ Selesai! Jalankan verifyTrainingDates.js untuk verifikasi final.');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
