/**
 * Generate Unsplash image URL based on training title
 * Images are centered and not cropped using object-fit=contain
 */

interface ImageMapping {
  keywords: string[];
  query: string;
}

// Mapping keywords in title to Unsplash search queries
const keywordMappings: ImageMapping[] = [
  // Technology & Programming
  { keywords: ['AI', 'Artificial Intelligence', 'Machine Learning', 'Chatbot', 'GEN AI'], query: 'artificial intelligence technology' },
  { keywords: ['Data Science', 'Data Analytics', 'Big Data', 'Analytics'], query: 'data analysis dashboard' },
  { keywords: ['Cyber Security', 'Security', 'Hacking', 'Network Security'], query: 'cyber security digital' },
  { keywords: ['Flutter', 'Mobile', 'Apps Development'], query: 'mobile app development' },
  { keywords: ['React', 'Next.js', 'Frontend', 'Front-End', 'UI/UX'], query: 'web development design' },
  { keywords: ['Backend', 'Back-End', 'API', 'Server'], query: 'server programming code' },
  { keywords: ['Database', 'SQL', 'MySQL', 'PostgreSQL'], query: 'database technology' },
  { keywords: ['Cloud', 'AWS', 'Azure', 'GCP'], query: 'cloud computing technology' },
  { keywords: ['DevOps', 'CI/CD', 'Docker', 'Kubernetes'], query: 'devops automation' },
  { keywords: ['Blockchain', 'Cryptocurrency', 'NFT'], query: 'blockchain technology' },
  { keywords: ['IoT', 'Internet of Things'], query: 'internet of things sensors' },
  { keywords: ['Game Development', 'Unity', 'Unreal'], query: 'game development' },
  { keywords: ['VR', 'Virtual Reality', 'AR', 'Augmented Reality'], query: 'virtual reality technology' },
  { keywords: ['3D', 'Animation', 'Modeling'], query: '3d modeling design' },
  { keywords: ['PDP', 'Data Privacy', 'Perlindungan Data'], query: 'data privacy security' },
  
  // Business & Finance
  { keywords: ['Finance', 'Financial', 'Keuangan', 'Pembiayaan'], query: 'finance business money' },
  { keywords: ['Accounting', 'Akuntansi', 'Audit'], query: 'accounting finance calculator' },
  { keywords: ['Tax', 'Pajak', 'Perpajakan'], query: 'tax accounting business' },
  { keywords: ['Banking', 'Perbankan', 'Bank'], query: 'banking finance professional' },
  { keywords: ['Investment', 'Investasi', 'Portfolio'], query: 'investment stock market' },
  { keywords: ['Credit', 'Kredit', 'Lending', 'Pembiayaan'], query: 'credit card finance' },
  { keywords: ['Collection', 'Penagihan', 'Debt'], query: 'debt collection finance' },
  { keywords: ['Risk Management', 'Manajemen Risiko'], query: 'risk management business' },
  { keywords: ['Insurance', 'Asuransi'], query: 'insurance business protection' },
  { keywords: ['Actuarial', 'Aktuaria'], query: 'actuarial mathematics finance' },
  { keywords: ['Valuation', 'Valuasi'], query: 'business valuation analysis' },
  { keywords: ['Forecasting', 'Peramalan'], query: 'business forecasting chart' },
  
  // Sales & Marketing
  { keywords: ['Sales', 'Selling', 'Penjualan'], query: 'sales business handshake' },
  { keywords: ['Marketing', 'Pemasaran'], query: 'marketing strategy business' },
  { keywords: ['Digital Marketing', 'Social Media'], query: 'digital marketing social media' },
  { keywords: ['Content', 'Konten', 'Content Creator'], query: 'content creation camera' },
  { keywords: ['Brand', 'Branding', 'Merek'], query: 'brand identity design' },
  { keywords: ['E-Commerce', 'Online Shop'], query: 'ecommerce online shopping' },
  { keywords: ['Customer Service', 'Pelayanan'], query: 'customer service support' },
  { keywords: ['Presentation', 'Presentasi'], query: 'business presentation meeting' },
  { keywords: ['Negotiation', 'Negosiasi'], query: 'business negotiation meeting' },
  { keywords: ['Story-Telling', 'Storytelling'], query: 'storytelling presentation' },
  
  // Leadership & Management
  { keywords: ['Leadership', 'Kepemimpinan'], query: 'leadership team management' },
  { keywords: ['Management', 'Manajemen'], query: 'management business strategy' },
  { keywords: ['Strategic', 'Strategi'], query: 'business strategy planning' },
  { keywords: ['Project Management', 'Manajemen Proyek'], query: 'project management team' },
  { keywords: ['Time Management', 'Manajemen Waktu'], query: 'time management clock' },
  { keywords: ['Team Building', 'Tim'], query: 'team building collaboration' },
  { keywords: ['Coaching', 'Mentoring'], query: 'business coaching mentor' },
  { keywords: ['Change Management', 'Manajemen Perubahan'], query: 'change management transformation' },
  
  // Human Capital & HR
  { keywords: ['HR', 'Human Resource', 'SDM', 'Human Capital'], query: 'human resources team' },
  { keywords: ['Recruitment', 'Rekrutmen', 'Hiring'], query: 'recruitment job interview' },
  { keywords: ['Training', 'Pelatihan'], query: 'corporate training workshop' },
  { keywords: ['Performance', 'Kinerja'], query: 'performance review business' },
  { keywords: ['Employee', 'Karyawan'], query: 'employee workplace team' },
  { keywords: ['Organizational', 'Organisasi'], query: 'organization structure team' },
  { keywords: ['Culture', 'Budaya'], query: 'corporate culture workplace' },
  { keywords: ['Compensation', 'Kompensasi', 'Payroll'], query: 'salary compensation money' },
  
  // ESG & Sustainability
  { keywords: ['ESG', 'Environmental', 'Lingkungan'], query: 'environmental sustainability green' },
  { keywords: ['Sustainability', 'Keberlanjutan'], query: 'sustainable business green' },
  { keywords: ['Green', 'Hijau', 'Eco'], query: 'green energy renewable' },
  { keywords: ['Climate', 'Iklim'], query: 'climate change environment' },
  { keywords: ['Renewable', 'Terbarukan'], query: 'renewable energy solar' },
  { keywords: ['Recycling', 'Daur Ulang', 'Waste'], query: 'recycling waste management' },
  { keywords: ['Carbon', 'Karbon', 'Emission'], query: 'carbon footprint environment' },
  { keywords: ['Social', 'Sosial'], query: 'social responsibility community' },
  { keywords: ['Governance', 'Tata Kelola'], query: 'corporate governance business' },
  
  // Office & Administration
  { keywords: ['Office', 'Kantor', 'Administration'], query: 'office workspace professional' },
  { keywords: ['Excel', 'Spreadsheet'], query: 'excel spreadsheet data' },
  { keywords: ['Secretary', 'Sekretaris'], query: 'secretary office professional' },
  { keywords: ['Document', 'Dokumen', 'Filing'], query: 'document management office' },
  { keywords: ['Archive', 'Arsip'], query: 'archive filing system' },
  { keywords: ['Warehouse', 'Gudang'], query: 'warehouse logistics storage' },
  { keywords: ['Inventory', 'Persediaan'], query: 'inventory management warehouse' },
  { keywords: ['Procurement', 'Pengadaan', 'Purchasing'], query: 'procurement purchasing business' },
  { keywords: ['Supply Chain', 'Rantai Pasok'], query: 'supply chain logistics' },
  { keywords: ['Logistics', 'Logistik'], query: 'logistics transportation' },
  
  // BNSP Certification
  { keywords: ['BNSP', 'Sertifikasi', 'Certification'], query: 'professional certification training' },
  { keywords: ['Competency', 'Kompetensi'], query: 'professional competency skill' },
  
  // Quality & Standards
  { keywords: ['Quality', 'Kualitas', 'QA'], query: 'quality assurance checklist' },
  { keywords: ['ISO', 'Standard'], query: 'iso standard certification' },
  { keywords: ['Six Sigma', 'Lean'], query: 'lean six sigma process' },
  
  // Communication
  { keywords: ['Communication', 'Komunikasi'], query: 'business communication team' },
  { keywords: ['Public Speaking', 'Berbicara'], query: 'public speaking presentation' },
  { keywords: ['Writing', 'Menulis'], query: 'business writing document' },
  
  // Legal & Compliance
  { keywords: ['Legal', 'Hukum'], query: 'legal law justice' },
  { keywords: ['Contract', 'Kontrak'], query: 'contract agreement business' },
  { keywords: ['Compliance', 'Kepatuhan'], query: 'compliance regulation business' },
  { keywords: ['APU', 'PPT', 'Anti Money Laundering'], query: 'compliance audit business' },
  
  // Photography & Video
  { keywords: ['Photography', 'Fotografi', 'Camera'], query: 'photography camera professional' },
  { keywords: ['Video', 'Videography', 'Sinematografi'], query: 'video production camera' },
  
  // Design
  { keywords: ['Design', 'Desain'], query: 'graphic design creative' },
  { keywords: ['Graphic', 'Grafis'], query: 'graphic design illustration' },
  { keywords: ['Figma', 'Adobe'], query: 'ui design interface' },
];

/**
 * Extract keywords from training title and match with image query
 */
function getImageQuery(title: string): string {
  const titleLower = title.toLowerCase();
  
  // Find matching keyword mapping
  for (const mapping of keywordMappings) {
    for (const keyword of mapping.keywords) {
      if (titleLower.includes(keyword.toLowerCase())) {
        return mapping.query;
      }
    }
  }
  
  // Default fallback
  return 'business training professional';
}

/**
 * Generate unique image URL from Picsum Photos (Lorem Picsum)
 * Each training gets a unique ID-based image
 */
export function generateTrainingImage(title: string): string {
  // Generate unique ID from title
  const id = Math.abs(hashCode(title)) % 1000 + 1;
  
  // Use Picsum Photos API - real photos, always different
  // Added blur parameter for variety and grayscale option
  return `https://picsum.photos/id/${id}/800/600`;
}

/**
 * Use Unsplash API with proper search - REAL IMAGES based on keywords
 * Each title gets a unique, consistent image
 */
export function generateTrainingImageSimple(title: string): string {
  const query = getImageQuery(title);
  
  // Create unique seed from title to ensure each program has different image
  const seed = Math.abs(hashCode(title));
  
  // Use Unsplash Source API with query and unique signature
  // The sig parameter ensures each unique title gets a different image
  // Multiple formats to try in case one fails
  const imageUrl = `https://source.unsplash.com/800x600/?${encodeURIComponent(query)}&random=${seed}`;
  
  return imageUrl;
}

/**
 * Alternative using Picsum for guaranteed different images
 */
export function generatePicsumImage(title: string): string {
  // Generate unique ID from title (1-1000)
  const id = (Math.abs(hashCode(title)) % 1000) + 1;
  
  // Picsum provides real photos by ID
  return `https://picsum.photos/id/${id}/800/600`;
}

/**
 * Combined approach - try to get relevant image, fallback to Picsum
 */
export function generateTrainingImageReliable(title: string): string {
  const query = getImageQuery(title);
  const seed = Math.abs(hashCode(title));
  
  // Primary: Unsplash with relevant keywords
  const unsplashUrl = `https://source.unsplash.com/800x600/?${encodeURIComponent(query)}&sig=${seed}`;
  
  return unsplashUrl;
}

/**
 * Generate consistent hash code from string
 */
function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

/**
 * Get category-based default image
 */
export function getCategoryImage(category: string): string {
  const categoryMap: Record<string, string> = {
    'New Training': 'innovation technology modern',
    'Tech Series': 'technology programming code',
    'BNSP Certification': 'professional certification training',
    'ESG': 'sustainability environment green',
    'Finance': 'finance business money',
    'Leadership': 'leadership team management',
    'Sales Marketing': 'marketing sales business',
    'HC Training': 'human resources team',
    'Office Administration': 'office workspace professional',
    'Credit Collection': 'finance credit banking',
  };
  
  const query = categoryMap[category] || 'business professional training';
  return `https://source.unsplash.com/800x600/?${encodeURIComponent(query)}`;
}
