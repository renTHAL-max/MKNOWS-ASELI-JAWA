"use client";

import React from "react";
import { IoClose } from "react-icons/io5";
import { SearchFilterType } from "@/Types/SearchFilter";

interface ActiveFiltersProps {
  filters: SearchFilterType;
  onRemoveFilter: (key: keyof SearchFilterType) => void;
  onClearAll: () => void;
}

const ActiveFilters: React.FC<ActiveFiltersProps> = ({
  filters,
  onRemoveFilter,
  onClearAll,
}) => {
  // Check if there are any active filters
  const hasActiveFilters = Object.values(filters).some((value) => value !== "");

  if (!hasActiveFilters) {
    return null;
  }

  const filterLabels: Record<keyof SearchFilterType, string> = {
    keyword: "Keyword",
    category: "Category",
    dateRange: "Date",
    priceRange: "Price",
    programType: "Program Type",
    sortBy: "Sort",
  };

  return (
    <div className="w-full max-w-7xl px-4 mb-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-montserrat text-sm text-gray-600">
          Active Filters:
        </span>

        {Object.entries(filters).map(([key, value]) => {
          if (!value) return null;

          return (
            <div
              key={key}
              className="flex items-center gap-2 bg-[#70B946] text-white px-4 py-2 rounded-full text-sm font-montserrat group hover:bg-[#5fa037] transition-colors duration-200"
            >
              <span className="font-medium">
                {filterLabels[key as keyof SearchFilterType]}:
              </span>
              <span className="max-w-[120px] truncate">{value}</span>
              <button
                onClick={() => onRemoveFilter(key as keyof SearchFilterType)}
                className="ml-1 hover:bg-white/20 rounded-full p-1 transition-colors duration-200"
                aria-label={`Remove ${key} filter`}
              >
                <IoClose className="w-4 h-4" />
              </button>
            </div>
          );
        })}

        {hasActiveFilters && (
          <button
            onClick={onClearAll}
            className="ml-2 px-4 py-2 text-sm font-montserrat text-red-600 hover:text-white hover:bg-red-600 border border-red-600 rounded-full transition-all duration-200"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default ActiveFilters;
