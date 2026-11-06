import { fetchData } from "@/Services/api_service";
import { generateUniqueTrainingImage } from "@/Utils/uniqueImageGenerator";

interface TrainingProgram {
  id: number;
  title: string;
  dates: string[];
  category: string;
  series: string;
  level: string;
  duration: string;
  imageSrc: string;
  priceOnline: number;
  priceOffline: number;
}

/**
 * Fetch and process all training programs from all series
 */
export async function getAllPrograms(): Promise<TrainingProgram[]> {
  try {
    const allPrograms: TrainingProgram[] = [];

    // List of all series endpoints
    const seriesEndpoints = [
      { endpoint: "new-training-2026", category: "New Training" },
      { endpoint: "tech-series", category: "Tech Series" },
      { endpoint: "bnsp-series", category: "BNSP Certification" },
      { endpoint: "esg-series", category: "ESG Series" },
      { endpoint: "finance-series", category: "Finance Series" },
      { endpoint: "leadership-series", category: "Leadership Series" },
      {
        endpoint: "sales-marketing-series",
        category: "Sales & Marketing",
      },
      { endpoint: "hc-training-series", category: "HC Training" },
      {
        endpoint: "office-adm-series",
        category: "Office Administration",
      },
      {
        endpoint: "credit-collection-series",
        category: "Credit & Collection",
      },
    ];

    let programId = 1;

    // Fetch data from each series
    for (const { endpoint, category } of seriesEndpoints) {
      try {
        const res = await fetchData.get(`/${endpoint}`);
        const seriesData = res.data;

        if (Array.isArray(seriesData) && seriesData.length > 0) {
          const firstSeries = seriesData[0];

          if (firstSeries.data && Array.isArray(firstSeries.data)) {
            firstSeries.data.forEach((programData: any) => {
              // Extract program title (the key that's not 'id')
              const programTitle = Object.keys(programData).find(
                (key) => key !== "id"
              );

              if (programTitle && Array.isArray(programData[programTitle])) {
                const schedules = programData[programTitle];

                // Extract dates and convert year from 2026 to 2027
                const dates = schedules
                  .filter((schedule: any) => schedule.data)
                  .map((schedule: any) => {
                    const dateStr = schedule.data;
                    // Replace year 2026 with 2027 for display
                    if (dateStr && dateStr.includes('2026')) {
                      return dateStr.replace('2026', '2027');
                    }
                    return dateStr;
                  });

                // Count total schedules to determine sesi tier
                const totalSchedules = schedules.length;
                
                // Determine pricing tiers based on Excel data:
                // Tier 1 (4 sesi): 1 Day - Online: Rp 2.100.000 | Offline: Rp 2.900.000
                // Tier 2 (8 sesi): 2 Days - Online: Rp 3.500.000 | Offline: Rp 5.800.000
                // Tier 3 (12 sesi): 3 Days - Online: Rp 4.900.000 | Offline: Rp 8.700.000
                
                let duration: string;
                let priceOnline: number;
                let priceOffline: number;
                
                // Determine tier based on schedule count
                if (totalSchedules >= 10) {
                  // Tier 3: 12 sesi programs (high complexity)
                  duration = "3 Days";
                  priceOnline = 4900000;  // Rp 4.900.000
                  priceOffline = 8700000; // Rp 8.700.000
                } else if (totalSchedules >= 6) {
                  // Tier 2: 8 sesi programs (medium complexity)
                  duration = "2 Days";
                  priceOnline = 3500000;  // Rp 3.500.000
                  priceOffline = 5800000; // Rp 5.800.000
                } else {
                  // Tier 1: 4 sesi programs (standard)
                  duration = "1 Day";
                  priceOnline = 2100000;  // Rp 2.100.000
                  priceOffline = 2900000; // Rp 2.900.000
                }
                
                // Override based on title keywords for accuracy
                const titleLower = programTitle.toLowerCase();
                if (titleLower.includes("3 hari") || titleLower.includes("3-hari")) {
                  duration = "3 Days";
                  priceOnline = 4900000;
                  priceOffline = 8700000;
                } else if (titleLower.includes("1 hari") || titleLower.includes("1-hari")) {
                  duration = "1 Day";
                  priceOnline = 2100000;
                  priceOffline = 2900000;
                }
                
                // ALL programs are available in both Online & Offline modes
                const mode = "Online & Offline";

                allPrograms.push({
                  id: programId++,
                  title: programTitle,
                  dates: dates,
                  category: category,
                  series: endpoint,
                  level: mode, // "Online", "Offline", or "Online & Offline"
                  duration: duration,
                  priceOnline: priceOnline,
                  priceOffline: priceOffline,
                  imageSrc: generateUniqueTrainingImage(programTitle, programId),
                });
              }
            });
          }
        }
      } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        // Continue with other series even if one fails
      }
    }

    return allPrograms;
  } catch (error) {
    console.error("Error in getAllPrograms:", error);
    return [];
  }
}
