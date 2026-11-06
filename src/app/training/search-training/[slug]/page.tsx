import SeriesDetailPage from "@/Components/UI/SeriesDetailPage";
import { fetchData } from "@/Services/api_service";
import {
  processSeriesData,
  getSeriesMetadata,
} from "@/Utils/seriesDataProcessor";
import { SeriesData } from "@/Types/SeriesData";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getSeriesData(slug: string) {
  try {
    const res = await fetchData.get(`/${slug}`);
    const seriesData: SeriesData[] = res.data;

    if (!seriesData || seriesData.length === 0) {
      return null;
    }

    const programs = processSeriesData(seriesData);
    const metadata = getSeriesMetadata(slug);

    return {
      programs,
      metadata,
    };
  } catch (error) {
    console.error(`Error fetching ${slug} data:`, error);
    return null;
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const data = await getSeriesData(slug);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Series Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The training series you are looking for does not exist.
          </p>
          <a
            href="/training/search-training"
            className="bg-[#70B946] text-white px-6 py-3 rounded-lg hover:bg-[#5fa037] transition-colors"
          >
            Back to Training List
          </a>
        </div>
      </div>
    );
  }

  const { programs, metadata } = data;

  return (
    <SeriesDetailPage
      seriesName={metadata.name}
      seriesTitle={metadata.title}
      seriesDescription={metadata.description}
      programs={programs}
      categoryColor={metadata.color}
    />
  );
}

// Generate static params for all series
export async function generateStaticParams() {
  return [
    { slug: "tech-series" },
    { slug: "bnsp-series" },
    { slug: "esg-series" },
    { slug: "finance-series" },
    { slug: "leadership-series" },
    { slug: "sales-marketing-series" },
    { slug: "hc-training-series" },
    { slug: "office-adm-series" },
    { slug: "credit-collection-series" },
  ];
}
