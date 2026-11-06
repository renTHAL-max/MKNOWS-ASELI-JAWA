# Advanced Search Feature - M-Knows Training

## Overview
Fitur pencarian dan filtering yang advanced dan progressive untuk platform pelatihan M-Knows. Fitur ini memungkinkan pengguna untuk mencari dan memfilter program pelatihan berdasarkan berbagai kriteria.

## Features

### 1. **Search Bar**
- Pencarian real-time berdasarkan keyword
- Search di title, description, dan alt text
- Auto-update hasil ketika mengetik

### 2. **Category Filter**
Filter berdasarkan kategori pelatihan:
- AI & Technology
- Tech Series
- BNSP Certification
- ESG Series
- Finance Series
- Leadership Series
- Sales & Marketing
- HR & Training
- Office Administration

### 3. **Date Range Filter**
Filter berdasarkan waktu pelaksanaan:
- By Month (January - December 2026)
- By Quarter (Q1, Q2, Q3, Q4)

### 4. **Price Range Filter**
Filter berdasarkan range harga:
- < 3 Juta
- 3 - 5 Juta
- 5 - 7 Juta
- 7 - 10 Juta
- > 10 Juta

### 5. **Program Type Filter**
Filter berdasarkan tipe program:
- Public Training
- In-House Training
- Bootcamp Program
- Certification Program
- Workshop
- Online Training
- Hybrid Training

### 6. **Sort Options**
Sorting hasil pencarian:
- Newest First
- Oldest First
- Title (A-Z)
- Title (Z-A)
- Price: Low to High
- Price: High to Low

## File Structure

```
src/
├── Components/
│   ├── AdvancedSearchForm.tsx          # Main search form component
│   └── UI/
│       └── AdvancedSearchMateri.tsx    # Page wrapper with filters
├── Types/
│   └── SearchFilter.d.ts               # Type definitions
├── hooks/
│   └── useAdvancedFilter.ts            # Custom hook for filtering logic
├── Props/
│   └── advancedSearchMateri.tsx        # Data fetching functions
└── app/
    └── training/
        ├── search-training/
        │   └── page.tsx                # Main search page
        └── advanced-search/
            └── page.tsx                # Alternative search page
```

## Usage

### Access the Feature
Navigate to: `/training/search-training` or `/training/advanced-search`

### Using the Search
1. Type keywords in the search bar
2. Select filters from dropdowns
3. Results update automatically
4. Clear filters by selecting default options

## Technical Details

### Components

#### AdvancedSearchForm
```typescript
<AdvancedSearchForm
  onSearch={handleFilterChange}
  categories={categories}
  dateRanges={dateRanges}
  priceRanges={priceRanges}
  programTypes={programTypes}
  sortOptions={sortOptions}
/>
```

#### AdvancedSearchMateri
```typescript
<AdvancedSearchMateri
  staticDataMateri={staticDataMateri}
/>
```

### Custom Hook
```typescript
const filteredResults = useAdvancedFilter(data, filters);
```

### Filter State Type
```typescript
type SearchFilterType = {
  keyword: string;
  category: string;
  dateRange: string;
  priceRange: string;
  programType: string;
  sortBy: string;
};
```

## Styling
- Menggunakan Tailwind CSS
- Responsive design (mobile, tablet, desktop)
- Smooth transitions dan hover effects
- Custom dropdowns dengan icons
- Color scheme sesuai brand M-Knows (#70B946)

## Performance Optimization
- React useMemo untuk filtering
- Debounced search input (dapat ditambahkan)
- Lazy loading untuk images (via Next.js Image)
- Server-side rendering untuk initial data

## Future Enhancements
1. Add debouncing untuk search input
2. Add loading states dan skeletons
3. Add pagination atau infinite scroll
4. Add filter tags untuk menampilkan active filters
5. Add clear all filters button
6. Add advanced date picker
7. Add price slider input
8. Add search history/suggestions
9. Add export results to PDF/Excel
10. Add bookmark/favorite functionality

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies
- React 19.2.0
- Next.js 16.0.0
- Tailwind CSS 4.1.16
- React Icons 5.5.0
- Axios 1.13.1

## API Endpoints
```
GET /materi-training - Fetch all training materials
```

## Testing
```bash
# Run development server
npm run dev

# Access at
http://localhost:3000/training/search-training
http://localhost:3000/training/advanced-search
```

## Notes
- Pastikan JSON Server berjalan di port 5000
- Environment variable NEXT_PUBLIC_DB_URL harus diset
- Data filtering dilakukan di client-side untuk performance
- Filter options dapat dikustomisasi sesuai kebutuhan

## Credits
Developed for M-Knows Consulting
