"use client";

import { useState } from "react";
import TrainingProgramCard from "../TrainingProgramCard";
import { motion } from "framer-motion";
import { generateUniqueTrainingImage } from "@/Utils/uniqueImageGenerator";
import { fuzzyMatch } from "@/Utils/fuzzySearch";
import { fuzzyMatch } from "@/Utils/fuzzySearch";

interface SeriesProgram {
  id: number;
  title: string;
  dates: string[];
}

interface SeriesDetailPageProps {
  seriesName: string;
  seriesTitle: string;
  seriesDescription?: string;
  programs: SeriesProgram[];
  categoryColor?: string;
}

// Function to generate image URL based on title
const generateImageForProgram = (title: string, id: number): string => {
  return generateUniqueTrainingImage(title, id);
};

const SeriesDetailPage: React.FC<SeriesDetailPageProps> = ({
  seriesName,
  seriesTitle,
  seriesDescription,
  programs,
  categoryColor = "#70B946",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPrograms, setFilteredPrograms] = useState(programs);

  // Handle search with fuzzy matching (tolerates typos)
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    if (value.trim() === "") {
      setFilteredPrograms(programs);
    } else {
      const filtered = programs.filter((program) =>
        fuzzyMatch(value, program.title, 0.65) // 65% similarity threshold
      );
      setFilteredPrograms(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#02353C] via-[#0a5a66] to-gray-50">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 md:px-8 lg:px-16 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#70B946] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#AEC9B6] rounded-full opacity-10 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-gray-300 mb-6"
          >
            <a
              href="/"
              className="hover:text-[#70B946] transition-colors duration-200"
            >
              Home
            </a>
            <span>/</span>
            <a
              href="/training/search-training"
              className="hover:text-[#70B946] transition-colors duration-200"
            >
              Public Training 2027
            </a>
            <span>/</span>
            <span className="text-[#70B946] font-semibold">{seriesName}</span>
          </motion.nav>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            {seriesTitle}
          </motion.h1>

          {/* Description */}
          {seriesDescription && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-montserrat text-lg md:text-xl text-gray-200 max-w-4xl mb-8"
            >
              {seriesDescription}
            </motion.p>
          )}

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-6 items-center"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <svg
                className="w-6 h-6 text-[#70B946]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-montserrat text-white font-semibold">
                {programs.length} Program Pelatihan
              </span>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <svg
                className="w-6 h-6 text-[#70B946]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-montserrat text-white font-semibold">
                Tersedia Tahun 2027
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Cari program pelatihan..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-6 py-4 pr-14 rounded-2xl border-2 border-gray-200 focus:border-[#70B946] focus:outline-none focus:ring-2 focus:ring-[#70B946]/20 transition-all duration-200 font-montserrat text-lg"
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
          </motion.div>

          {/* Programs Grid */}
          {filteredPrograms.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredPrograms.map((program, index) => (
                <TrainingProgramCard
                  key={program.id}
                  id={program.id}
                  title={program.title}
                  imageSrc={generateImageForProgram(program.title, program.id)}
                  dates={program.dates}
                  category={seriesName}
                  level="Professional"
                  duration="2 Days"
                  slug={`/training/program/${program.id}`}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
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
                Coba kata kunci pencarian yang berbeda
              </p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#02353C] to-[#0a5a66] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white mb-6">
            Tertarik dengan Program Kami?
          </h2>
          <p className="font-montserrat text-lg text-gray-200 mb-8">
            Dapatkan jadwal lengkap dan informasi lebih lanjut tentang program
            pelatihan kami
          </p>
          <a
            href="/training/contact"
            className="inline-block bg-[#70B946] hover:bg-[#5fa037] text-white font-montserrat font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Download Jadwal Lengkap
          </a>
        </div>
      </div>
    </div>
  );
};

export default SeriesDetailPage;
