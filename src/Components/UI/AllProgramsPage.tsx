"use client";

import { useEffect, useState } from "react";
import TrainingProgramCard from "../TrainingProgramCard";
import { motion } from "framer-motion";
import { fetchData } from "@/Services/api_service";

import { fuzzyMatch } from "@/Utils/fuzzySearch";

interface TrainingProgram {
  id: number;
  title: string;
  dates: string[];
  category: string;
  series: string;
  level: string;
  duration: string;
  imageSrc: string;
  priceOnline?: number;
  priceOffline?: number;
}

interface AllProgramsPageProps {
  initialPrograms: TrainingProgram[];
}

const AllProgramsPage: React.FC<AllProgramsPageProps> = ({
  initialPrograms,
}) => {
  const [programs, setPrograms] = useState<TrainingProgram[]>(initialPrograms);
  const [filteredPrograms, setFilteredPrograms] =
    useState<TrainingProgram[]>(initialPrograms);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDateRange, setSelectedDateRange] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20); // Dynamic items per page

  // Back to top button visibility
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Detect scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Extract unique categories
  const categories = Array.from(
    new Set(programs.map((p) => p.category))
  ).sort();

  // Date ranges
  const dateRanges = [
    { value: "jan", label: "Januari" },
    { value: "feb", label: "Februari" },
    { value: "mar", label: "Maret" },
    { value: "apr", label: "April" },
    { value: "mei", label: "Mei" },
    { value: "jun", label: "Juni" },
    { value: "jul", label: "Juli" },
    { value: "aug", label: "Agustus" },
    { value: "sep", label: "September" },
    { value: "okt", label: "Oktober" },
    { value: "nov", label: "November" },
    { value: "des", label: "Desember" },
    { value: "q1", label: "Q1 (Jan-Mar)" },
    { value: "q2", label: "Q2 (Apr-Jun)" },
    { value: "q3", label: "Q3 (Jul-Sep)" },
    { value: "q4", label: "Q4 (Okt-Des)" },
  ];

  const sortOptions = [
    { value: "price-high", label: "Price: Highest" },
    { value: "price-low", label: "Price: Lowest" },
    { value: "newest", label: "Newest" },
  ];

  // Apply filters
  useEffect(() => {
    let filtered = [...programs];

    // Search filter with fuzzy matching (tolerates typos)
    if (searchTerm) {
      filtered = filtered.filter((p) =>
        fuzzyMatch(searchTerm, p.title, 0.65) // 65% similarity threshold
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Date range filter
    if (selectedDateRange) {
      filtered = filtered.filter((p) => {
        const hasMatchingDate = p.dates.some((date) => {
          const dateLower = date.toLowerCase();
          
          // Handle Quarter filtering
          if (selectedDateRange === 'q1') {
            return dateLower.includes('jan') || dateLower.includes('feb') || dateLower.includes('mar');
          } else if (selectedDateRange === 'q2') {
            return dateLower.includes('apr') || dateLower.includes('mei') || dateLower.includes('jun');
          } else if (selectedDateRange === 'q3') {
            return dateLower.includes('jul') || dateLower.includes('aug') || dateLower.includes('sep');
          } else if (selectedDateRange === 'q4') {
            return dateLower.includes('okt') || dateLower.includes('nov') || dateLower.includes('des');
          }
          
          // Handle month filtering
          return dateLower.includes(selectedDateRange.toLowerCase());
        });
        return hasMatchingDate;
      });
    }

    // Sort
    if (sortBy === "price-high") {
      filtered.sort((a, b) => (b.priceOffline || 0) - (a.priceOffline || 0));
    } else if (sortBy === "price-low") {
      filtered.sort((a, b) => (a.priceOnline || 0) - (b.priceOnline || 0));
    } else if (sortBy === "newest") {
      filtered.sort((a, b) => b.id - a.id);
    }

    setFilteredPrograms(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [
    searchTerm,
    selectedCategory,
    selectedDateRange,
    sortBy,
    programs,
  ]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPrograms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPrograms = itemsPerPage >= filteredPrograms.length 
    ? filteredPrograms 
    : filteredPrograms.slice(startIndex, endIndex);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#02353C] to-[#0a5a66] pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4"
          >
            All Training Programs 2027
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-montserrat text-xl md:text-2xl text-gray-200"
          >
            Temukan program pelatihan yang tepat untuk meningkatkan kompetensi
            Anda
          </motion.p>
        </div>
      </div>

      {/* Search & Filters - Scroll with content */}
      <div className="bg-white shadow-lg border-b relative">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Search Bar */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari program pelatihan..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pr-14 rounded-xl border-2 border-gray-200 focus:border-[#70B946] focus:outline-none focus:ring-2 focus:ring-[#70B946]/20 transition-all duration-200 font-montserrat"
              />
              <svg
                className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Filter Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Category */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 rounded-lg border-2 border-[#70B946]/30 bg-[#70B946]/5 focus:border-[#70B946] focus:outline-none focus:ring-2 focus:ring-[#70B946]/20 font-montserrat text-sm cursor-pointer text-[#02353C] font-semibold"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Date Range */}
            <select
              value={selectedDateRange}
              onChange={(e) => setSelectedDateRange(e.target.value)}
              className="px-4 py-3 rounded-lg border-2 border-[#70B946]/30 bg-[#70B946]/5 focus:border-[#70B946] focus:outline-none focus:ring-2 focus:ring-[#70B946]/20 font-montserrat text-sm cursor-pointer text-[#02353C] font-semibold"
            >
              <option value="">Range date</option>
              {dateRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 rounded-lg border-2 border-[#70B946]/30 bg-[#70B946]/5 focus:border-[#70B946] focus:outline-none focus:ring-2 focus:ring-[#70B946]/20 font-montserrat text-sm cursor-pointer text-[#02353C] font-semibold"
            >
              <option value="">Sort price</option>
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Results Count & Items Per Page Selector */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="font-montserrat text-gray-600">
            Showing{" "}
            <span className="font-semibold text-[#02353C]">
              {startIndex + 1} - {Math.min(endIndex, filteredPrograms.length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-[#70B946]">
              {filteredPrograms.length}
            </span>{" "}
            Classes
          </p>
          
          {/* Items Per Page Selector */}
          <div className="flex items-center gap-2">
            <label className="font-montserrat text-gray-600 text-sm font-semibold">
              Show:
            </label>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1); // Reset to first page
              }}
              className="px-3 py-2 rounded-lg border-2 border-[#70B946]/30 bg-[#70B946]/5 focus:border-[#70B946] focus:outline-none focus:ring-2 focus:ring-[#70B946]/20 font-montserrat text-sm cursor-pointer text-[#02353C] font-semibold"
            >
              <option value={filteredPrograms.length}>All</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
              <option value={50}>50</option>
            </select>
            <span className="font-montserrat text-gray-600 text-sm font-semibold">
              per page
            </span>
          </div>
        </div>

        {/* Programs Grid */}
        {currentPrograms.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentPrograms.map((program, index) => (
                <TrainingProgramCard
                  key={`${program.id}-${program.title}`}
                  id={program.id}
                  title={program.title}
                  imageSrc={program.imageSrc || `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%2302353C'/%3E%3C/svg%3E`}
                  dates={program.dates}
                  category={program.category}
                  mode={program.level} 
                  duration={program.duration}
                  priceOnline={program.priceOnline}
                  priceOffline={program.priceOffline}
                  slug={`/training/program/${program.id}`}
                  index={startIndex + index}
                />
              ))}
            </div>

            {/* Pagination & Download Button - Same Row */}
            {totalPages > 1 && (
              <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 mb-12">
                  {/* Download Button - Left Side */}
                  <a
                    href="/training/contact"
                    className="inline-flex items-center gap-3 bg-[#70B946] hover:bg-[#5fa037] text-white font-montserrat font-bold text-base md:text-lg px-6 md:px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="hidden sm:inline">Download Jadwal Public Training Tahun 2027</span>
                    <span className="sm:hidden">Download Jadwal 2027</span>
                  </a>

                  {/* Pagination - Right Side */}
                  <div className="flex items-center gap-2">
                    {/* Previous Button */}
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`p-2 rounded-lg transition-all duration-200 ${
                        currentPage === 1
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-[#70B946] text-white hover:bg-[#5fa037] shadow-md'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    {/* Page Numbers */}
                    {getPageNumbers().map((page, index) => (
                      <div key={index}>
                        {page === '...' ? (
                          <span className="px-3 py-2 text-gray-400 font-montserrat">...</span>
                        ) : (
                          <button
                            onClick={() => handlePageChange(page as number)}
                            className={`min-w-[40px] h-[40px] rounded-lg font-montserrat font-semibold transition-all duration-200 ${
                              currentPage === page
                                ? 'bg-[#70B946] text-white shadow-lg scale-105'
                                : 'bg-white text-gray-700 hover:bg-[#70B946] hover:text-white hover:shadow-lg hover:scale-105 shadow-md'
                            }`}
                          >
                            {page}
                          </button>
                        )}
                      </div>
                    ))}

                    {/* Next Button */}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`p-2 rounded-lg transition-all duration-200 ${
                        currentPage === totalPages
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-[#70B946] text-white hover:bg-[#5fa037] shadow-md'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <svg
              className="w-24 h-24 mx-auto text-gray-300 mb-4"
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
            <h3 className="font-montserrat text-2xl font-semibold text-gray-500 mb-2">
              Tidak ada program ditemukan
            </h3>
            <p className="font-montserrat text-gray-400">
              Coba sesuaikan filter pencarian Anda
            </p>
          </div>
        )}
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-[#70B946] hover:bg-[#5fa037] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AllProgramsPage;
