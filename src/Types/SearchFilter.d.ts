export type SearchFilterType = {
  keyword: string;
  category: string;
  dateRange: string;
  priceRange: string;
  programType: string;
  sortBy: string;
};

export type FilterOption = {
  value: string;
  label: string;
};

export type SearchFilterProps = {
  onFilterChange: (filters: SearchFilterType) => void;
  categories?: FilterOption[];
  dateRanges?: FilterOption[];
  priceRanges?: FilterOption[];
  programTypes?: FilterOption[];
  sortOptions?: FilterOption[];
};
