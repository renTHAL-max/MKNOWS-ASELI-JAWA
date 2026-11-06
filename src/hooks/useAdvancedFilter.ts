import { useMemo } from "react";
import { Materi } from "@/Types/Materi";
import { SearchFilterType } from "@/Types/SearchFilter";

export const useAdvancedFilter = (
  data: Materi[],
  filters: SearchFilterType
): Materi[] => {
  return useMemo(() => {
    let filtered = [...data];

    // Filter by keyword (search in title and description)
    if (filters.keyword.trim()) {
      const keyword = filters.keyword.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(keyword) ||
          item.description?.toLowerCase().includes(keyword) ||
          item.alt.toLowerCase().includes(keyword)
      );
    }

    // Filter by category
    if (filters.category) {
      filtered = filtered.filter((item) => {
        // Check if title or slug contains category
        const itemCategory = item.title.toLowerCase();
        const filterCategory = filters.category.toLowerCase();
        return itemCategory.includes(filterCategory);
      });
    }

    // Filter by date range
    if (filters.dateRange) {
      // Date filtering logic based on your data structure
      // This can be customized based on how dates are stored in your data
      filtered = filtered.filter((item) => {
        if (!item.data) return true;
        // Add your date filtering logic here
        return true;
      });
    }

    // Filter by price range
    if (filters.priceRange) {
      // Price filtering logic
      // This would require price data in your Materi type
      filtered = filtered.filter((item) => {
        // Add your price filtering logic here
        return true;
      });
    }

    // Filter by program type
    if (filters.programType) {
      filtered = filtered.filter((item) => {
        const programType = filters.programType.toLowerCase();
        return (
          item.title.toLowerCase().includes(programType) ||
          item.slug.toLowerCase().includes(programType)
        );
      });
    }

    // Sort results
    if (filters.sortBy) {
      switch (filters.sortBy) {
        case "title-asc":
          filtered.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "title-desc":
          filtered.sort((a, b) => b.title.localeCompare(a.title));
          break;
        case "newest":
          filtered.sort((a, b) => (b.id || 0) - (a.id || 0));
          break;
        case "oldest":
          filtered.sort((a, b) => (a.id || 0) - (b.id || 0));
          break;
        default:
          break;
      }
    }

    return filtered;
  }, [data, filters]);
};
