import NewTrainingPage from "@/Components/UI/NewTrainingPage";
import { getNewTrainingPrograms } from "@/Props/newTrainingPrograms";

export default async function Page() {
  const programs = await getNewTrainingPrograms();

  return <NewTrainingPage programs={programs} />;
}

export const metadata = {
  title: "New Topics 2026 | M-Knows Consulting",
  description:
    "Program pelatihan terbaru 2026 dari M-Knows Consulting dengan fokus pada AI, Digital Transformation, dan teknologi terkini untuk meningkatkan kompetensi profesional Anda.",
  keywords: "new training 2026, AI training, digital transformation, LMS optimization, cyber security, flutter, UI/UX design, prompt engineering",
};
