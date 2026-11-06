import AllProgramsPage from "@/Components/UI/AllProgramsPage";
import { getAllPrograms } from "@/Props/allPrograms";

export default async function Page() {
  const programs = await getAllPrograms();

  return <AllProgramsPage initialPrograms={programs} />;
}

export const metadata = {
  title: "All Training Programs 2027 | M-Knows Consulting",
  description:
    "Browse all 207 training programs from M-Knows Consulting for 2027. Find the perfect training to enhance your professional skills in Sales, Marketing, Leadership, HR, Finance, Credit Collection, and more.",
  keywords: "training programs 2027, public training, corporate training, sales training, leadership training, HR training, finance training, credit analysis, digital marketing, M-Knows Consulting",
  openGraph: {
    title: "All Training Programs 2027 | M-Knows Consulting",
    description: "207 program pelatihan profesional untuk meningkatkan kompetensi tim Anda di tahun 2027",
    type: "website",
  },
};
