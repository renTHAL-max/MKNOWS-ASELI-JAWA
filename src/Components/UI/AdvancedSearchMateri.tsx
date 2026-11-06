"use client";

import { useEffect, useState } from "react";
import { Materi } from "@/Types/Materi";
import { SearchFilterType, FilterOption } from "@/Types/SearchFilter";
import { fetchData } from "@/Services/api_service";
import { useAdvancedFilter } from "@/hooks/useAdvancedFilter";
import AdvancedSearchForm from "../AdvancedSearchForm";
import ActiveFilters from "../ActiveFilters";
import CardMateri from "../CardMateri";
import CardMateriSkeleton from "../CardMateriSkeleton";
import Link from "next/link";

interface AdvancedSearchMateriProps {
  staticDataMateri: Materi[];
}

const AdvancedSearchMateri = ({
  staticDataMateri,
}: AdvancedSearchMateriProps) => {
  const [data, setData] = useState<Materi[]>(staticDataMateri);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState<SearchFilterType>({
    keyword: "",
    category: "",
    dateRange: "",
    priceRange: "",
    programType: "",
    sortBy: "",
  });

  // Fetch data from API
  useEffect(() => {
    const getDataMateri = async () => {
      setIsLoading(true);
      try {
        const res = await fetchData.get("/materi-training");
        const data = res.data;
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getDataMateri();
  }, []);

  // Apply filters
  const filteredMateri = useAdvancedFilter(data, filters);

  // Define filter options based on M-Knows categories
  const categories: FilterOption[] = [
    { value: "ai", label: "AI & Technology" },
    { value: "tech", label: "Tech Series" },
    { value: "bnsp", label: "BNSP Certification" },
    { value: "esg", label: "ESG Series" },
    { value: "finance", label: "Finance Series" },
    { value: "leadership", label: "Leadership Series" },
    { value: "sales", label: "Sales & Marketing" },
    { value: "hr", label: "HR & Training" },
    { value: "office", label: "Office Administration" },
  ];

  const dateRanges: FilterOption[] = [
    { value: "jan", label: "January 2027" },
    { value: "feb", label: "February 2027" },
    { value: "mar", label: "March 2027" },
    { value: "apr", label: "April 2027" },
    { value: "may", label: "May 2027" },
    { value: "jun", label: "June 2027" },
    { value: "jul", label: "July 2027" },
    { value: "aug", label: "August 2027" },
    { value: "sep", label: "September 2027" },
    { value: "oct", label: "October 2027" },
    { value: "nov", label: "November 2027" },
    { value: "dec", label: "December 2027" },
    { value: "q1", label: "Q1 (Jan-Mar)" },
    { value: "q2", label: "Q2 (Apr-Jun)" },
    { value: "q3", label: "Q3 (Jul-Sep)" },
    { value: "q4", label: "Q4 (Oct-Dec)" },
  ];

  const priceRanges: FilterOption[] = [
    { value: "0-3000000", label: "< 3 Juta" },
    { value: "3000000-5000000", label: "3 - 5 Juta" },
    { value: "5000000-7000000", label: "5 - 7 Juta" },
    { value: "7000000-10000000", label: "7 - 10 Juta" },
    { value: "10000000+", label: "> 10 Juta" },
  ];

  const programTypes: FilterOption[] = [
    { value: "public", label: "Public Training" },
    { value: "in-house", label: "In-House Training" },
    { value: "bootcamp", label: "Bootcamp Program" },
    { value: "certification", label: "Certification Program" },
    { value: "workshop", label: "Workshop" },
    { value: "online", label: "Online Training" },
    { value: "hybrid", label: "Hybrid Training" },
  ];

  const sortOptions: FilterOption[] = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "title-asc", label: "Title (A-Z)" },
    { value: "title-desc", label: "Title (Z-A)" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
  ];

  const handleFilterChange = (newFilters: SearchFilterType) => {
    setFilters(newFilters);
  };

  const handleRemoveFilter = (key: keyof SearchFilterType) => {
    const newFilters = { ...filters, [key]: "" };
    setFilters(newFilters);
  };

  const handleClearAllFilters = () => {
    const emptyFilters: SearchFilterType = {
      keyword: "",
      category: "",
      dateRange: "",
      priceRange: "",
      programType: "",
      sortBy: "",
    };
    setFilters(emptyFilters);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="flex flex-col justify-center items-center px-4 py-8">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center pt-32 pb-12 max-w-4xl text-center">
          <h1 className="capitalize font-montserrat font-bold text-3xl md:text-5xl lg:text-6xl text-[#02353C] mb-6">
            Public Training Tahun 2027
          </h1>
          <p className="font-montserrat text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl">
            Temukan program pelatihan yang sesuai dengan kebutuhan Anda
          </p>

          {/* Advanced Search Form */}
          <AdvancedSearchForm
            onSearch={handleFilterChange}
            categories={categories}
            dateRanges={dateRanges}
            priceRanges={priceRanges}
            programTypes={programTypes}
            sortOptions={sortOptions}
          />
        </div>

        {/* Active Filters */}
        <ActiveFilters
          filters={filters}
          onRemoveFilter={handleRemoveFilter}
          onClearAll={handleClearAllFilters}
        />

        {/* Results Count */}
        <div className="w-full max-w-7xl px-4 mb-6">
          <p className="font-montserrat text-gray-600">
            Menampilkan{" "}
            <span className="font-semibold text-[#70B946]">
              {filteredMateri.length}
            </span>{" "}
            program pelatihan
            {data.length > 0 && (
              <span className="text-gray-400"> dari {data.length} total</span>
            )}
          </p>
        </div>

        {/* Results Grid */}
        <div className="w-full flex justify-center pt-8 pb-12">
          <div className="grid gap-x-8 gap-y-10 place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {isLoading ? (
              // Loading skeletons
              Array.from({ length: 8 }).map((_, index) => (
                <CardMateriSkeleton key={`skeleton-${index}`} />
              ))
            ) : filteredMateri.length > 0 ? (
              filteredMateri.map((item, index) => {
                return (
                  <div
                    key={item.id || index}
                    className="flex items-center justify-center"
                  >
                    <CardMateri
                      imageSrc={item.imageSrc}
                      alt={item.alt}
                      title={item.title}
                      slug={item.slug}
                      buttonSrc={item.buttonSrc}
                    />
                  </div>
                );
              })
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-16">
                <div className="text-gray-400 mb-4">
                  <svg
                    className="w-24 h-24"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-center font-semibold text-gray-500 text-2xl md:text-3xl mb-2">
                  Data tidak ditemukan
                </p>
                <p className="text-center text-gray-400 text-sm md:text-base">
                  Coba sesuaikan filter pencarian Anda
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center items-center pt-8 pb-16">
          <Link href="/training/contact" className="no-underline">
            <button className="group relative overflow-hidden border bg-white px-8 py-4 text-center rounded-3xl bg-gradient-to-r from-[#70B946] to-[#5fa037] hover:from-[#5fa037] hover:to-[#4e8b2e] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <p className="font-montserrat font-semibold text-lg md:text-2xl lg:text-3xl text-white relative z-10">
                Download Jadwal Public Training Tahun 2027
              </p>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500"></div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearchMateri;
