# M-Knows Consulting Training Platform 2027

Platform pelatihan profesional untuk M-Knows Consulting dengan 207 program training untuk tahun 2027.

## 🚀 Features

- **207 Training Programs** - Lengkap dengan jadwal, harga, dan kategori
- **Advanced Search** - Fuzzy search dengan toleransi typo
- **Multiple Filters** - Category, date range, dan price sorting
- **Responsive Design** - Mobile-first dengan Tailwind CSS
- **PDF Preview** - Preview jadwal training sebelum download
- **Dynamic Pricing** - Online & Offline pricing (format Rp X,Xjt)
- **Custom Cover Images** - 20 program dengan banner custom design
- **Pagination** - Flexible items per page (20, 30, 40, 50, All)

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.0 (Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.16
- **Animation**: Framer Motion
- **UI Components**: Shadcn/ui
- **Backend**: JSON Server (mock API)
- **Icons**: React Icons

## 📂 Project Structure

```
ProjectMKnows/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── training/          # Training pages
│   │   ├── consulting/        # Consulting pages
│   │   └── page.tsx           # Homepage
│   ├── Components/
│   │   ├── UI/                # Page components
│   │   ├── TrainingProgramCard.tsx
│   │   ├── OurServices.tsx
│   │   └── ...
│   ├── Props/                 # Data props
│   │   └── allPrograms.tsx   # Main data fetching
│   ├── Utils/                 # Utility functions
│   │   ├── fuzzySearch.ts    # Fuzzy search algorithm
│   │   └── uniqueImageGenerator.ts
│   └── Services/
│       └── api_service.ts     # API configuration
├── public/
│   └── images/
│       ├── new-training/      # Custom cover images (20 programs)
│       └── ...
└── src/DB/
    └── db.json                # JSON Server database
```

## 🎯 Key Features Detail

### 1. Training Programs
- 207 programs across 10 categories
- Tech Series, Finance Series, Leadership, Sales & Marketing, HR, ESG, etc.
- Online & Offline mode dengan pricing berbeda
- Jadwal lengkap untuk tahun 2027

### 2. Search & Filter
- **Fuzzy Search**: Toleransi typo hingga 35% (Levenshtein Distance)
- **Category Filter**: Filter berdasarkan series
- **Date Range Filter**: Per bulan atau per quarter (Q1-Q4)
- **Price Sorting**: Highest, Lowest, Newest

### 3. Custom Cover Images
20 program dengan banner design khusus:
- Strategic Digital Learning & Development using AI
- AI-Powered LMS Optimization & People Analytics
- Cyber Security for Digital Banking
- Flutter Expert: Building Enterprise-Grade Applications
- Digital Marketing & E-Commerce & Social Media Selling
- Dan 15 lainnya...

### 4. Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface
- Smooth animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm atau yarn
- Git

### Installation

1. Clone repository
```bash
git clone <repository-url>
cd ProjectMKnows
```

2. Install dependencies
```bash
npm install
```

3. Run development servers

Terminal 1 - Next.js:
```bash
npm run dev
```

Terminal 2 - JSON Server:
```bash
npm run json-server
```

4. Open browser
```
http://localhost:3000
```

## 📝 Available Scripts

```bash
npm run dev          # Start Next.js dev server (port 3000)
npm run json-server  # Start JSON Server API (port 5000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## 🎨 Styling Guide

### Colors
- Primary: `#70B946` (Green)
- Secondary: `#4697CE` (Blue)
- Dark: `#02353C` (Teal Dark)
- Accent: `#B9F443` (Light Green)

### Typography
- Font Family: Montserrat (Primary), Poppins (Secondary)
- Headings: font-montserrat font-bold
- Body: font-poppins

## 📊 Data Structure

### Training Program
```typescript
interface TrainingProgram {
  id: number;
  title: string;
  dates: string[];
  category: string;
  series: string;
  level: string;          // "Online & Offline"
  duration: string;       // "1 Day", "2 Days", "3 Days"
  imageSrc: string;
  priceOnline: number;    // e.g., 2100000
  priceOffline: number;   // e.g., 2900000
}
```

### Price Tiers
- **Tier 1** (1 Day): Online Rp 2,1jt | Offline Rp 2,9jt
- **Tier 2** (2 Days): Online Rp 3,5jt | Offline Rp 5,8jt
- **Tier 3** (3 Days): Online Rp 4,9jt | Offline Rp 8,7jt

## 🔧 Configuration

### Environment Variables
Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### API Endpoints
- Base URL: `http://localhost:5000`
- Training Programs: `/new-training-2026`, `/tech-series`, etc.

## 📱 Pages

- **/** - Homepage dengan Our Services tabs
- **/training/all-programs** - All 207 programs dengan filters
- **/training/search-training** - Series navigation
- **/training/preview-jadwal** - PDF preview dengan dynamic title
- **/training/contact** - Contact form
- **/consulting/** - Consulting services pages

## 🎯 Recent Updates

### Latest Features (2027)
- ✅ Fuzzy search dengan Levenshtein Distance algorithm
- ✅ Dynamic title pada preview page
- ✅ Custom cover images untuk 20 program unggulan
- ✅ Price format: Rp X,Xjt (lebih compact)
- ✅ Search bar non-sticky (scroll dengan konten)
- ✅ Card spacing optimization
- ✅ Tooltip hanya muncul pada title hover

## 🤝 Contributing

Project ini dikembangkan untuk M-Knows Consulting. Untuk kontribusi atau pertanyaan, hubungi tim development.

## 📄 License

Proprietary - M-Knows Consulting © 2027

## 📞 Contact

**M-Knows Consulting**
- Website: m-knowsconsulting.com
- Email: learning@m-knowsconsulting.com
- Phone: 021-388-900-52

---

**Developed with ❤️ for M-Knows Consulting Training Platform**
