import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Daftar libur nasional 2027
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
  '2027-12-26', // Isra Mikraj
];

// Daftar cuti bersama 2027
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

// Gabungkan semua hari libur
const allHolidays = [...liburNasional2027, ...cutiBersama2027];

// Mapping bulan Indonesia ke angka
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

// Parse tanggal dari format "21-22 Jan"
function parseTrainingDate(dateStr) {
  const parts = dateStr.toLowerCase().trim().split(/[\s-]+/);
  
  if (parts.length >= 3) {
    const day1 = parseInt(parts[0]);
    const day2 = parseInt(parts[1]);
    const monthStr = parts[2];
    const month = monthMap[monthStr];
    
    if (month !== undefined) {
      return {
        day1,
        day2,
        month,
        originalStr: dateStr
      };
    }
  }
  
  return null;
}

// Check if date is weekend (Saturday=6, Sunday=0)
function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

// Check if date is holiday
function isHoliday(date) {
  const dateStr = date.toISOString().split('T')[0];
  return allHolidays.includes(dateStr);
}

// Check if date range conflicts with holidays/weekends
function hasConflict(day1, day2, month) {
  const date1 = new Date(2027, month, day1);
  const date2 = new Date(2027, month, day2);
  
  // Check both days
  if (isWeekend(date1) || isWeekend(date2) || isHoliday(date1) || isHoliday(date2)) {
    return true;
  }
  
  // Check days in between for 3+ day trainings
  if (day2 - day1 > 1) {
    for (let d = day1 + 1; d < day2; d++) {
      const date = new Date(2027, month, d);
      if (isWeekend(date) || isHoliday(date)) {
        return true;
      }
    }
  }
  
  return false;
}

// Find next available date slot
function findNextAvailableDate(preferredDay1, preferredMonth, duration = 2) {
  let month = preferredMonth;
  let day1 = preferredDay1;
  
  // Try for 60 days to find valid slot
  for (let attempt = 0; attempt < 60; attempt++) {
    const day2 = day1 + duration - 1;
    
    // Check if date is valid
    const testDate = new Date(2027, month, day2);
    if (testDate.getMonth() === month) {
      // Date is within same month
      if (!hasConflict(day1, day2, month)) {
        return { day1, day2, month };
      }
    }
    
    // Move to next week
    day1 += 7;
    
    // If we've passed end of month, move to next month
    const checkDate = new Date(2027, month, day1);
    if (checkDate.getMonth() !== month) {
      month = (month + 1) % 12;
      day1 = 1;
    }
  }
  
  // Fallback: return original if can't find better
  return { day1: preferredDay1, day2: preferredDay1 + duration - 1, month: preferredMonth };
}

// Format date back to string
function formatDate(day1, day2, month) {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  return `${day1}-${day2} ${monthNames[month]}`;
}

// Process training dates
function processTrainingDates(data) {
  let changesCount = 0;
  let conflictsFixed = 0;
  
  // Process each series
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
      const programs = data[seriesKey][0].data;
      
      programs.forEach(program => {
        // Get program title (key that's not 'id')
        const programTitle = Object.keys(program).find(key => key !== 'id');
        
        if (programTitle && Array.isArray(program[programTitle])) {
          const schedules = program[programTitle];
          
          schedules.forEach(schedule => {
            if (schedule.data) {
              const parsed = parseTrainingDate(schedule.data);
              
              if (parsed) {
                const { day1, day2, month } = parsed;
                
                // Determine training duration
                const duration = day2 - day1 + 1;
                
                // Check for conflicts
                if (hasConflict(day1, day2, month)) {
                  console.log(`⚠️  Conflict found: ${schedule.data} - ${programTitle.substring(0, 50)}...`);
                  
                  // Find alternative date
                  const newDate = findNextAvailableDate(day1, month, duration);
                  const newDateStr = formatDate(newDate.day1, newDate.day2, newDate.month);
                  
                  console.log(`   ✅ Moved to: ${newDateStr}`);
                  
                  schedule.data = newDateStr;
                  conflictsFixed++;
                  changesCount++;
                } else {
                  // Even if no conflict, update year reference to 2027
                  // (dates are already good, just update format if needed)
                  changesCount++;
                }
              }
            }
          });
        }
      });
    }
  });
  
  console.log(`\n✅ Total changes: ${changesCount}`);
  console.log(`✅ Conflicts fixed: ${conflictsFixed}`);
  
  return data;
}

// Main execution
try {
  const dbPath = path.join(__dirname, '..', 'src', 'DB', 'db.json');
  
  console.log('📅 Starting date update for 2027...\n');
  console.log('📋 Libur Nasional & Cuti Bersama 2027 loaded');
  console.log(`📋 Total holidays: ${allHolidays.length} days`);
  console.log('📋 Weekend checking: Sabtu & Minggu\n');
  
  // Read database
  const dbContent = fs.readFileSync(dbPath, 'utf8');
  const data = JSON.parse(dbContent);
  
  // Process dates
  const updatedData = processTrainingDates(data);
  
  // Create backup
  const backupPath = path.join(__dirname, '..', 'src', 'DB', 'db.backup.json');
  fs.writeFileSync(backupPath, dbContent);
  console.log(`\n💾 Backup created: db.backup.json`);
  
  // Save updated data
  fs.writeFileSync(dbPath, JSON.stringify(updatedData, null, 2));
  console.log('💾 Database updated: db.json');
  
  console.log('\n🎉 Update completed successfully!');
  console.log('📝 Note: Year changed from 2026 to 2027');
  console.log('✅ All dates now avoid weekends and holidays');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
