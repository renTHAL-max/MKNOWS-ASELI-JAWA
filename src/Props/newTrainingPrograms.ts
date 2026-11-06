import { getAllPrograms } from "./allPrograms";

/**
 * Get only New Training 2026 programs
 */
export async function getNewTrainingPrograms() {
  try {
    const allPrograms = await getAllPrograms();
    
    // Filter only "New Training" or "New Topics" category
    const newTrainingPrograms = allPrograms.filter(
      (program) => 
        program.category.toLowerCase().includes("new") ||
        program.series === "new-training-2026"
    );

    return newTrainingPrograms;
  } catch (error) {
    console.error("Error in getNewTrainingPrograms:", error);
    return [];
  }
}
