"use client";

import React, { useState } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { SearchFilterType, FilterOption } from "@/Types/SearchFilter";

interface AdvancedSearchFormProps {
  onSearch: (filters: SearchFilterType) => void;
  categories?: FilterOption[];
  dateRanges?: FilterOption[];
  priceRanges?: FilterOption[];
  programTypes?: FilterOption[];
  sortOptions?: FilterOption[];
}

const AdvancedSearchForm: React.FC<AdvancedSearchFormProps> = ({
  onSearch,
  categories = [],
  dateRanges = [],
  priceRanges = [],
  programTypes = [],
  sortOptions = [],
}) => {
  const [filters, setFilters] = useState<SearchFilterType>({
    keyword: "",
    category: "",
    dateRange: "",
    priceRange: "",
    programType: "",
    sortBy: "",
  });

  const handleInputChange = (
    field: keyof SearchFilterType,
    value: string
  ) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    onSearch(newFilters);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Search Input */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="What do you want to learn?"
            value={filters.keyword}
            onChange={(e) => handleInputChange("keyword", e.target.value)}
            className="w-full px-6 py-4 pr-14 text-base md:text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#70B946] focus:border-transparent placeholder:text-gray-400 transition-all duration-200"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#70B946] hover:bg-[#5fa037] text-white p-3 rounded-lg transition-colors duration-200"
            aria-label="Search"
          >
            <FaSearch className="w-5 h-5" />
          </button>
        </div>

        {/* Filters Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Category Filter */}
          {categories.length > 0 && (
            <div className="relative">
              <select
                value={filters.category}
                onChange={(e) => handleInputChange("category", e.target.value)}
                className="w-full px-4 py-3 pr-10 text-sm md:text-base border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#70B946] focus:border-transparent cursor-pointer transition-all duration-200 text-gray-700"
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          )}

          {/* Date Range Filter */}
          {dateRanges.length > 0 && (
            <div className="relative">
              <select
                value={filters.dateRange}
                onChange={(e) => handleInputChange("dateRange", e.target.value)}
                className="w-full px-4 py-3 pr-10 text-sm md:text-base border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#70B946] focus:border-transparent cursor-pointer transition-all duration-200 text-gray-700"
              >
                <option value="">Range date</option>
                {dateRanges.map((date) => (
                  <option key={date.value} value={date.value}>
                    {date.label}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          )}

          {/* Price Range Filter */}
          {priceRanges.length > 0 && (
            <div className="relative">
              <select
                value={filters.priceRange}
                onChange={(e) =>
                  handleInputChange("priceRange", e.target.value)
                }
                className="w-full px-4 py-3 pr-10 text-sm md:text-base border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#70B946] focus:border-transparent cursor-pointer transition-all duration-200 text-gray-700"
              >
                <option value="">Range price</option>
                {priceRanges.map((price) => (
                  <option key={price.value} value={price.value}>
                    {price.label}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          )}

          {/* Program Type Filter */}
          {programTypes.length > 0 && (
            <div className="relative">
              <select
                value={filters.programType}
                onChange={(e) =>
                  handleInputChange("programType", e.target.value)
                }
                className="w-full px-4 py-3 pr-10 text-sm md:text-base border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#70B946] focus:border-transparent cursor-pointer transition-all duration-200 text-gray-700"
              >
                <option value="">All program & class</option>
                {programTypes.map((program) => (
                  <option key={program.value} value={program.value}>
                    {program.label}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          )}

          {/* Sort By Filter */}
          {sortOptions.length > 0 && (
            <div className="relative">
              <select
                value={filters.sortBy}
                onChange={(e) => handleInputChange("sortBy", e.target.value)}
                className="w-full px-4 py-3 pr-10 text-sm md:text-base border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#70B946] focus:border-transparent cursor-pointer transition-all duration-200 text-gray-700"
              >
                <option value="">Sort price</option>
                {sortOptions.map((sort) => (
                  <option key={sort.value} value={sort.value}>
                    {sort.label}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AdvancedSearchForm;
