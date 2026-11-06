import { Materi } from "@/Types/Materi";

export async function getAdvancedSearchData(): Promise<Materi[]> {
  try {
    const data = process.env.NEXT_PUBLIC_DB_URL;
    const res = await fetch(`${data}/materi-training`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching advanced search data:", error);
    return [];
  }
}
