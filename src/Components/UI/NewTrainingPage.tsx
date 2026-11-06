"use client";

import { useState } from "react";
import TrainingProgramCard from "../TrainingProgramCard";
import { motion } from "framer-motion";

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

interface NewTrainingPageProps {
  programs: TrainingProgram[];
}

const NewTrainingPage: React.FC<NewTrainingPageProps> = ({ programs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  // Calculate pagination
  const totalPages = Math.ceil(programs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPrograms = itemsPerPage >= programs.length 
    ? programs 
    : programs.slice(startIndex, endIndex);

  // Generate page numbers
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
            New Topics 2026
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-montserrat text-xl md:text-2xl text-gray-200"
          >
            Program pelatihan terbaru dengan teknologi AI dan Digital Transformation
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Results Count & Items Per Page */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="font-montserrat text-gray-600">
            Showing{" "}
            <span className="font-semibold text-[#02353C]">
              {startIndex + 1} - {Math.min(endIndex, programs.length)}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-[#70B946]">
              {programs.length}
            </span>{" "}
            Programs
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
                setCurrentPage(1);
              }}
              className="px-3 py-2 rounded-lg border-2 border-[#70B946]/30 bg-[#70B946]/5 focus:border-[#70B946] focus:outline-none focus:ring-2 focus:ring-[#70B946]/20 font-montserrat text-sm cursor-pointer text-[#02353C] font-semibold"
            >
              <option value={programs.length}>All</option>
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
                  imageSrc={program.imageSrc}
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="flex justify-center items-center gap-2">
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
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <h3 className="font-montserrat text-2xl font-semibold text-gray-500 mb-2">
              Tidak ada program ditemukan
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewTrainingPage;
