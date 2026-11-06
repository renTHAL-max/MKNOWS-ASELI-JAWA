"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface TrainingProgramCardProps {
  id?: number;
  title: string;
  imageSrc: string;
  dates?: string[];
  category?: string;
  mode?: string; // Changed from level to mode (Online/Offline)
  duration?: string;
  slug?: string;
  index?: number;
  priceOnline?: number;
  priceOffline?: number;
}

const TrainingProgramCard: React.FC<TrainingProgramCardProps> = ({
  title,
  imageSrc,
  dates,
  category,
  mode, // Changed from level to mode
  duration,
  slug,
  index = 0,
  priceOnline,
  priceOffline,
}) => {
  // Format price to jt format (e.g., 2,9jt or 5,8jt)
  const formatPrice = (price?: number) => {
    if (!price) return null;
    const juta = price / 1000000;
    return `${juta.toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}jt`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
    >
      {/* Category Badge */}
      {category && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-[#70B946] text-white px-3 py-1 rounded-full text-xs font-montserrat font-semibold shadow-lg">
            {category}
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative w-full h-40 overflow-hidden bg-gradient-to-br from-[#02353C] to-[#0a5a66]">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            // Fallback to verified business meeting photo
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80";
          }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title with Tooltip */}
        <div className="relative group/title">
          <h3 className="font-montserrat font-bold text-lg md:text-xl text-[#02353C] mb-2 line-clamp-2 min-h-[3.5rem] group-hover/title:text-[#70B946] transition-colors duration-300 cursor-pointer">
            {title}
          </h3>
          
          {/* Tooltip - Shows full title on hover */}
          <div className="absolute left-0 top-full mt-2 w-full bg-[#02353C] text-white text-sm px-4 py-3 rounded-lg shadow-2xl opacity-0 invisible group-hover/title:opacity-100 group-hover/title:visible transition-all duration-300 z-50 pointer-events-none border border-[#70B946]/30">
            <div className="absolute -top-2 left-6 w-4 h-4 bg-[#02353C] transform rotate-45 border-l border-t border-[#70B946]/30"></div>
            <p className="relative z-10 leading-relaxed font-medium">{title}</p>
          </div>
        </div>

        {/* Mode (Online/Offline/Both) - Below Title */}
        {mode && (
          <div className="mb-3">
            <span className={`inline-flex items-center gap-1 text-sm font-semibold px-3 py-1.5 rounded-lg ${
              mode.toLowerCase() === 'online' 
                ? 'bg-[#70B946]/20 text-[#02353C]' 
                : mode.toLowerCase() === 'offline'
                ? 'bg-orange-100 text-orange-700'
                : 'bg-blue-100 text-blue-700'
            }`}>
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {mode.toLowerCase() === 'online' ? (
                  // Online icon - wifi/signal
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                ) : mode.toLowerCase() === 'offline' ? (
                  // Offline icon - location pin
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                ) : (
                  // Both icon - globe
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                )}
              </svg>
              {mode}
            </span>
          </div>
        )}

        {/* Meta Info - Duration only */}
        <div className="flex flex-wrap gap-2 mb-4">
          {duration && (
            <span className="inline-flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
              <svg
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              {duration}
            </span>
          )}
        </div>

        {/* Dates - Show All Schedules - Fixed height wrapper */}
        <div className="flex-grow">
          {dates && dates.length > 0 && (
            <div className="mb-4 min-h-[120px]">
              <p className="text-xs font-montserrat font-semibold text-gray-500 mb-2">
                Jadwal 2027:
              </p>
              <div className="flex flex-wrap gap-2">
                {dates.map((date, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#AEC9B6]/30 text-[#02353C] px-2 py-1 rounded font-medium"
                  >
                    {date}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Price Display */}
          {(priceOnline || priceOffline) && (
            <div className="mb-4 p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <p className="text-sm font-semibold text-blue-700 mb-2">
                Investasi:
              </p>
              <div className="flex flex-col gap-1.5">
                {priceOnline && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-blue-700">Online:</span>
                    <span className="text-sm font-semibold text-blue-700">
                      Rp {formatPrice(priceOnline)}
                    </span>
                  </div>
                )}
                {priceOffline && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-blue-700">Offline:</span>
                    <span className="text-sm font-semibold text-blue-700">
                      Rp {formatPrice(priceOffline)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* CTA Button - Always at bottom */}
        <Link
          href={`/training/preview-jadwal?title=${encodeURIComponent(title)}`}
          className="block w-full text-center bg-[#70B946] hover:bg-[#5fa037] text-white font-montserrat font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform group-hover:scale-105 mt-auto flex items-center justify-center gap-2"
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
          Download
        </Link>
      </div>

      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-[#70B946]/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-300"></div>
    </motion.div>
  );
};

export default TrainingProgramCard;
