import {
  SeriesData,
  TrainingProgramData,
  ProcessedProgram,
} from "@/Types/SeriesData";

/**
 * Process series data from API format to component-friendly format
 */
export function processSeriesData(seriesData: SeriesData[]): ProcessedProgram[] {
  if (!seriesData || seriesData.length === 0) return [];

  const firstSeries = seriesData[0];
  const programs: ProcessedProgram[] = [];

  firstSeries.data.forEach((programData: TrainingProgramData) => {
    // Extract program title (it's the key that's not 'id')
    const programTitle = Object.keys(programData).find((key) => key !== "id");

    if (programTitle && Array.isArray(programData[programTitle])) {
      const schedules = programData[programTitle] as any[];

      // Extract dates from schedules
      const dates = schedules
        .filter((schedule) => schedule.data)
        .map((schedule) => schedule.data);

      programs.push({
        id: programData.id,
        title: programTitle,
        dates: dates,
      });
    }
  });

  return programs;
}

/**
 * Generate image URL for training program
 * In production, this would fetch from AI image generation service
 */
export function generateProgramImage(title: string, id: number): string {
  // For now, return placeholder
  // TODO: Integrate with AI image generation service (e.g., DALL-E, Midjourney API)

  const encodedTitle = encodeURIComponent(title.substring(0, 40));

  // Use different color schemes based on category
  const colorSchemes = [
    { primary: "%2370B946", secondary: "%2302353C" }, // Green to Dark Teal
    { primary: "%233B82F6", secondary: "%231E40AF" }, // Blue
    { primary: "%238B5CF6", secondary: "%235B21B6" }, // Purple
    { primary: "%2306B6D4", secondary: "%230E7490" }, // Cyan
    { primary: "%23F59E0B", secondary: "%23B45309" }, // Amber
    { primary: "%23EF4444", secondary: "%23B91C1C" }, // Red
    { primary: "%2310B981", secondary: "%23047857" }, // Emerald
    { primary: "%23F97316", secondary: "%23C2410C" }, // Orange
  ];

  const scheme = colorSchemes[id % colorSchemes.length];

  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='grad${id}' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:${scheme.primary};stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:${scheme.secondary};stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad${id})'/%3E%3Ccircle cx='80' cy='80' r='40' fill='white' opacity='0.1'/%3E%3Ccircle cx='320' cy='220' r='60' fill='white' opacity='0.1'/%3E%3Ctext x='50%25' y='45%25' font-size='14' fill='white' text-anchor='middle' font-family='Arial, sans-serif' font-weight='600'%3E${encodedTitle}%3C/text%3E%3Ctext x='50%25' y='60%25' font-size='12' fill='white' text-anchor='middle' opacity='0.8' font-family='Arial, sans-serif'%3ETraining Program 2026%3C/text%3E%3C/svg%3E`;
}

/**
 * Get series metadata
 */
export function getSeriesMetadata(seriesSlug: string): {
  name: string;
  title: string;
  description: string;
  color: string;
} {
  const metadata: Record<
    string,
    { name: string; title: string; description: string; color: string }
  > = {
    "tech-series": {
      name: "Tech Series",
      title: "Technology & Innovation Training Series",
      description:
        "Program pelatihan teknologi terkini meliputi AI, development, UI/UX, dan digital skills untuk meningkatkan kompetensi profesional di era digital.",
      color: "#3B82F6",
    },
    "bnsp-series": {
      name: "BNSP Certification",
      title: "BNSP Certification Series",
      description:
        "Program pelatihan dan sertifikasi BNSP untuk meningkatkan kompetensi profesional dengan standar nasional yang diakui secara resmi.",
      color: "#F59E0B",
    },
    "esg-series": {
      name: "ESG Series",
      title: "Environmental, Social, and Governance Series",
      description:
        "Program pelatihan ESG untuk membangun bisnis berkelanjutan dengan fokus pada lingkungan, sosial, dan tata kelola perusahaan yang baik.",
      color: "#10B981",
    },
    "finance-series": {
      name: "Finance Series",
      title: "Finance & Banking Training Series",
      description:
        "Program pelatihan keuangan dan perbankan untuk meningkatkan keahlian dalam manajemen keuangan, analisis, dan strategi investasi.",
      color: "#8B5CF6",
    },
    "leadership-series": {
      name: "Leadership Series",
      title: "Leadership & Management Series",
      description:
        "Program pelatihan kepemimpinan dan manajemen untuk mengembangkan keterampilan memimpin tim dan organisasi secara efektif.",
      color: "#EF4444",
    },
    "sales-marketing-series": {
      name: "Sales & Marketing",
      title: "Sales & Marketing Excellence Series",
      description:
        "Program pelatihan sales dan marketing untuk meningkatkan kemampuan penjualan, branding, dan strategi pemasaran modern.",
      color: "#F97316",
    },
    "hc-training-series": {
      name: "HC Training",
      title: "Human Capital Training Series",
      description:
        "Program pelatihan pengembangan SDM untuk meningkatkan kompetensi HR dalam rekrutmen, training, dan employee engagement.",
      color: "#06B6D4",
    },
    "office-adm-series": {
      name: "Office Administration",
      title: "Office Administration Series",
      description:
        "Program pelatihan administrasi perkantoran untuk meningkatkan efisiensi dan profesionalisme dalam pengelolaan administrasi.",
      color: "#70B946",
    },
  };

  return (
    metadata[seriesSlug] || {
      name: "Training Series",
      title: "Professional Training Series",
      description: "Program pelatihan profesional untuk meningkatkan kompetensi Anda.",
      color: "#70B946",
    }
  );
}
