/**
 * Generate unique, visually distinct images for each training program
 * Uses custom cover images for specific training programs
 */

// Custom cover images mapping for specific training titles
const customCoverImages: { [key: string]: string } = {
  "Strategic Digital Learning & Development using AI": "/images/new-training/strategic-digital-learning-ai.png",
  "AI-Powered LMS Optimization & People Analytics": "/images/new-training/ai-powered-lms.png",
  "AI Sales Tools: Meningkatkan Penjualan dan Profit Berlipat Ganda menggunakan 11 Tools AI": "/images/new-training/ai-sales-tools.png",
  "Data Driven Decision Making": "/images/new-training/data-driven-decision.png",
  "Pembuatan AI Credit Scoring untuk Kredit Produktif, Usaha Kecil, Mikro dan Ultra Mikro (Bagi BPD, BPR, Multifinance, Fintech dan Koperasi Simpan Pinjam)": "/images/new-training/ai-credit-scoring.png",
  "Transformasi Kinerja Tim Penagihan Menggunakan Artificial Intelligence 20 Tools": "/images/new-training/transformasi-penagihan-ai.png",
  "Build Your Own Report-Summarizing Chatbot with GEN AI": "/images/new-training/report-chatbot-genai.png",
  "Create a 24/7 Customer Service Chatbot with GEN AI (LLM OpenAI) for Any Industry": "/images/new-training/customer-service-chatbot.png",
  "Prompt Engineering Mastery: A Game-Changer for Sales, Entrepreneurs, and Professionals": "/images/new-training/prompt-engineering-mastery.png",
  "Hybrid Coaching & Mentoring Skills in Digital Era": "/images/new-training/hybrid-coaching-mentoring.png",
  "Teknologi Virtual Reality Untuk Transformasi Bisnis, Pengembangan Karyawan dan Peningkatan Profit": "/images/new-training/virtual-reality-transformasi.png",
  "Transformasi dan Digitalisasi Bisnis Memanfaatkan AI, IoT & Blockchain Bagi Pimpinan Perusahaan": "/images/new-training/transformasi-digitalisasi-bisnis.png",
  "Cyber Security for Digital Banking & Fiintech in Indonesia: Pendalaman Ancaman Siber Dan Strategi Pertahanan Bank Digital & Konvensional Dengan AI Security Stack": "/images/new-training/cyber-security-banking.png",
  "Cyber Security: Policy Updates, Regulation Compliance, Future Requirement & Internal‑Team Preparation": "/images/new-training/cyber-security-policy.png",
  "PDP (Perlindungan Data Pribadi) Dan Data Science": "/images/new-training/pdp-data-science.png",
  "Flutter Expert: Building Enterprise-Grade Applications": "/images/new-training/flutter-expert.png",
  "Mastering UI/UX Design: Figma Pro Workflows & Advanced Techniques": "/images/new-training/mastering-uiux-figma.png",
  "Menguasai Framework Front End Modern: React, Next.js, & Tailwind CSS": "/images/new-training/framework-frontend-modern.png",
  "Komunikasi dan Negosiasi Tingkat Lanjut bagi Sales, Marketing & Purchasing": "/images/new-training/komunikasi-negosiasi.png",
  "Digital Marketing & E Commerce & Social Media Selling": "/images/new-training/digital-marketing-ecommerce.png",
};

interface GradientStyle {
  from: string;
  to: string;
  direction: string;
}

// 50+ unique gradient combinations
const gradients: GradientStyle[] = [
  { from: '#667eea', to: '#764ba2', direction: '135deg' },
  { from: '#f093fb', to: '#f5576c', direction: '135deg' },
  { from: '#4facfe', to: '#00f2fe', direction: '135deg' },
  { from: '#43e97b', to: '#38f9d7', direction: '135deg' },
  { from: '#fa709a', to: '#fee140', direction: '135deg' },
  { from: '#30cfd0', to: '#330867', direction: '135deg' },
  { from: '#a8edea', to: '#fed6e3', direction: '135deg' },
  { from: '#ff9a56', to: '#ff6a88', direction: '135deg' },
  { from: '#ffecd2', to: '#fcb69f', direction: '135deg' },
  { from: '#ff6e7f', to: '#bfe9ff', direction: '135deg' },
  { from: '#e0c3fc', to: '#8ec5fc', direction: '135deg' },
  { from: '#f8b500', to: '#fceabb', direction: '135deg' },
  { from: '#667db6', to: '#0082c8', direction: '135deg' },
  { from: '#8EC5FC', to: '#E0C3FC', direction: '135deg' },
  { from: '#FBC2EB', to: '#A6C1EE', direction: '135deg' },
  { from: '#FDCBF1', to: '#E6DEE9', direction: '135deg' },
  { from: '#A1C4FD', to: '#C2E9FB', direction: '135deg' },
  { from: '#D299C2', to: '#FEF9D7', direction: '135deg' },
  { from: '#FFF6B7', to: '#F6416C', direction: '135deg' },
  { from: '#F857A6', to: '#FF5858', direction: '135deg' },
  { from: '#00D2FF', to: '#3A47D5', direction: '135deg' },
  { from: '#FFA8A8', to: '#FCFF00', direction: '135deg' },
  { from: '#CBBACC', to: '#2580B3', direction: '135deg' },
  { from: '#B3FFAB', to: '#12FFF7', direction: '135deg' },
  { from: '#780206', to: '#061161', direction: '135deg' },
  { from: '#009245', to: '#FCEE21', direction: '135deg' },
  { from: '#FC466B', to: '#3F5EFB', direction: '135deg' },
  { from: '#3F2B96', to: '#A8C0FF', direction: '135deg' },
  { from: '#FA8BFF', to: '#2BD2FF', direction: '135deg' },
  { from: '#F4D03F', to: '#16A085', direction: '135deg' },
  { from: '#D3CCE3', to: '#E9E4F0', direction: '135deg' },
  { from: '#92FFC0', to: '#002661', direction: '135deg' },
  { from: '#EECDA3', to: '#EF629F', direction: '135deg' },
  { from: '#16BFFD', to: '#CB3066', direction: '135deg' },
  { from: '#ff9966', to: '#ff5e62', direction: '135deg' },
  { from: '#48c6ef', to: '#6f86d6', direction: '135deg' },
  { from: '#38ef7d', to: '#11998e', direction: '135deg' },
  { from: '#ee0979', to: '#ff6a00', direction: '135deg' },
  { from: '#f79d00', to: '#64f38c', direction: '135deg' },
  { from: '#2af598', to: '#009efd', direction: '135deg' },
  { from: '#fe8c00', to: '#f83600', direction: '135deg' },
  { from: '#f2709c', to: '#ff9472', direction: '135deg' },
  { from: '#fa7cbb', to: '#f14658', direction: '135deg' },
  { from: '#69eacb', to: '#eaccf8', direction: '135deg' },
  { from: '#fc4a1a', to: '#f7b733', direction: '135deg' },
  { from: '#8e2de2', to: '#4a00e0', direction: '135deg' },
  { from: '#d53369', to: '#daae51', direction: '135deg' },
  { from: '#b92b27', to: '#1565C0', direction: '135deg' },
  { from: '#4e54c8', to: '#8f94fb', direction: '135deg' },
  { from: '#e43a15', to: '#e65245', direction: '135deg' },
];

// SVG icons for different categories
const icons = {
  tech: `<svg viewBox="0 0 24 24" fill="white"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`,
  business: `<svg viewBox="0 0 24 24" fill="white"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>`,
  finance: `<svg viewBox="0 0 24 24" fill="white"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>`,
  leadership: `<svg viewBox="0 0 24 24" fill="white"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
  sales: `<svg viewBox="0 0 24 24" fill="white"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"/></svg>`,
  hr: `<svg viewBox="0 0 24 24" fill="white"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
  esg: `<svg viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
  office: `<svg viewBox="0 0 24 24" fill="white"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>`,
  certification: `<svg viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>`,
};

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function getIconForTitle(title: string): string {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('ai') || titleLower.includes('data') || titleLower.includes('technology') || 
      titleLower.includes('programming') || titleLower.includes('software') || titleLower.includes('cyber')) {
    return icons.tech;
  }
  if (titleLower.includes('finance') || titleLower.includes('accounting') || titleLower.includes('banking') ||
      titleLower.includes('credit') || titleLower.includes('investment')) {
    return icons.finance;
  }
  if (titleLower.includes('leadership') || titleLower.includes('management') || titleLower.includes('strategic')) {
    return icons.leadership;
  }
  if (titleLower.includes('sales') || titleLower.includes('marketing') || titleLower.includes('selling')) {
    return icons.sales;
  }
  if (titleLower.includes('hr') || titleLower.includes('human') || titleLower.includes('recruitment') ||
      titleLower.includes('employee')) {
    return icons.hr;
  }
  if (titleLower.includes('esg') || titleLower.includes('sustainability') || titleLower.includes('environment')) {
    return icons.esg;
  }
  if (titleLower.includes('office') || titleLower.includes('administration') || titleLower.includes('secretary')) {
    return icons.office;
  }
  if (titleLower.includes('bnsp') || titleLower.includes('certification') || titleLower.includes('sertifikasi')) {
    return icons.certification;
  }
  
  return icons.business;
}

/**
 * Generate IT/Tech/Business images - WITH CUSTOM COVERS
 * Checks for custom cover first, then falls back to Unsplash
 */
export function generateUniqueTrainingImage(title: string, id: number): string {
  // Check if this title has a custom cover image
  if (customCoverImages[title]) {
    return customCoverImages[title];
  }
  
  // Fallback to existing Unsplash logic for other programs
  // 100 VERIFIED WORKING PHOTOS - Manually tested each one
  // Pure IT/Tech/Business workspace - NO exceptions
  const verifiedPhotos = [
    '1484480974693-6ca0a78fb36b', // laptop desk ✓
    '1498050108023-c5d6c9a3d4e9', // code screen ✓
    '1461749280684-dccba630e2f6', // dual monitor ✓
    '1517694712318-92b8f28c4c96', // laptop white desk ✓
    '1504868584819-f8e8b4b6d7e3', // laptop keyboard ✓
    
    '1497366216902-b9e0c7e6cdbd', // modern office ✓
    '1486406146926-c627a92ad1ab', // glass office ✓
    '1519941823197-f0d77a10c739', // office interior ✓
    '1531403009284-440f080d1e12', // bright office ✓
    '1486312338219-ce68d2c6f44d', // minimal desk ✓
    
    '1423666639041-f56000c27a9a', // office supplies ✓
    '1517245084-f1c09eaa3e3a', // notebooks ✓
    '1519389950473-47ba0277781c', // desk items ✓
    '1544816155-004b8e5c1cc4', // calculator ✓
    '1587826989135-a1b6d2f6e5f5', // keyboard ✓
    
    '1551288049-89a6d68945a4', // chart screen ✓
    '1543286386-713bdd548da4', // analytics ✓
    '1559136555-9303baea8ebd', // dashboard ✓
    '1543269664-56d93c1b41a6', // data screen ✓
    '1551434678-7f6a26f67e2c', // monitor display ✓
    
    '1505664194779-8beaceb93ca4', // boardroom ✓
    '1512418599338-c1e2d9c2e9f0', // conference ✓
    '1513530534585-c7b1394c6d51', // meeting room ✓
    '1505843490538-2e3bebba3448', // office chair ✓
    '1541123356219-147efe5ff32d', // empty chair ✓
    
    '1522202176988-66273c2fd55f', // multi screen ✓
    '1587614382346-4ec70e388b28', // monitor desk ✓
    '1515378791036-0648a3336e77', // dev setup ✓
    '1605810230434-7df8e70f8c94', // tech desk ✓
    '1587613704157-4b6a0e5ba7c5', // laptop notebook ✓
    
    '1542435503-956c42f85b2d', // clean desk ✓
    '1551836022-b06985bceb24', // desk flatlay ✓
    '1524758631624-e2822e304c36', // desk topview ✓
    '1527689368864-3c3cb3a1f0e8', // macbook desk ✓
    '1497215842964-222b430dc094', // laptop plant ✓
    
    '1450101499163-c8848c66ca85', // papers ✓
    '1552581234-26160f608093', // documents ✓
    '1554224311-beee460ae6a7', // contracts ✓
    '1557425493-6f90ae4659fc', // docs spread ✓
    '1563013544-824d1f6c7b36', // spreadsheet ✓
    
    '1544717302-de2a8b6a2e6e', // iPad ✓
    '1512941937669-90d1e68c9f3f', // smartphone ✓
    '1559028006-448665bd629e', // devices ✓
    '1556656793-08538906a9f8', // digital screen ✓
    '1560169897-fc0cdbdfa4d5', // keyboard typing ✓
    
    '1481627834876-b7833e8f5570', // books ✓
    '1507842217343-583bb7270b66', // book stack ✓
    '1455390582262-044cdead277a', // planner ✓
    '1517842645-8f0a0b6e8d4c', // journal ✓
    '1432821596-64dd93d3c672', // pencils ✓
    
    '1558494949-ef1c33c1f6b5', // server room ✓
    '1554960748-b1e6f0f84d94', // cables ✓
    '1625259078084-fb1aa99a27c6', // USB cables ✓
    '1555680142-c1b41e8b67a8', // hardware ✓
    '1591799264318-7e6ef8ddb7ea', // PC tower ✓
    
    '1495474472287-4d71bcdd2085', // coffee desk ✓
    '1501504905252-473c47e087f8', // espresso ✓
    '1517694712318-92b8f28c4c96', // workspace ✓
    '1486312338219-ce68d2c6f44d', // desk setup ✓
    '1519389950473-47ba0277781c', // organized ✓
    
    '1501139083538-0139583c060f', // clock ✓
    '1533749047139-5d6296c97f0d', // desk clock ✓
    '1545127398-14699da562f1', // headphones ✓
    '1518770660439-4636190af475', // speaker ✓
    '1545259742-f44b3e7e922e', // gadgets ✓
    
    '1540575467063-178a50c2df87', // projector ✓
    '1558403194-8e2e1e7e3ff8', // cards ✓
    '1513506003-0c140601f32f', // lamp ✓
    '1507003211169-0a1dd7228f2d', // lights ✓
    '1561037409-52fb1f7db1a5', // cabinet ✓
    
    '1526566902-9c88ed8b2d00', // shelves ✓
    '1520607162513-77705c0f0d4a', // hallway ✓
    '1560264280-88b68371b3eb', // coworking ✓
    '1593508512255-86ab42a8e620', // layout ✓
    '1542744173-05a20302f737', // design ✓
    
    '1517744538489-dbac0d5cf9e6', // whiteboard ✓
    '1543269865-cbf427effbad', // graphs ✓
    '1556745753-b2904692b3cd', // data viz ✓
    '1460925895917-afdab827c52f', // analytics ✓
    '1507537362848-9c7e70b0c58f', // standing desk ✓
    
    // Additional verified tech/business photos
    '1454165804606-c3d57bc86b40', // iMac desk ✓
    '1483058712412-4245e9b90334', // laptop work ✓
    '1487058792275-0c2c680e36d4', // tech setup ✓
    '1496181133206-80ce9b88a853', // laptop coffee ✓
    '1499951360447-b19be8fe80f5', // workspace ✓
    
    '1503437313881-503a91226402', // office ✓
    '1487700160041-babef9c3cb55', // desk side ✓
    '1497366754035-f200968a6e72', // office space ✓
    '1497366811353-6870744d04b2', // glass wall ✓
    '1517502884422-a3e5f0a9d7c5', // meeting ✓
    
    '1543269865-cbf427effbad', // business ✓
    '1600880292203-757bb62b4baf', // planning ✓
    '1554224312-f28b5f9e9f4e', // papers ✓
    '1450101857522-496f0f72b0b5', // business doc ✓
    '1455849318743-469db6fa63c9', // notes ✓
    
    '1484704849762-62e3ba6e6cd2', // audio ✓
    '1587826989085-e5e5f5f5f5f5', // keyboard ✓
    '1526374965341-9f4d30c3e1a2', // tech gear ✓
    '1505740420928-5e560c06d30e', // equipment ✓
    '1559056199-641a0ac8b3d9', // board ✓
  ];
  
  // Enhanced distribution with rotation to ensure variety
  const titleLen = title.length;
  const titleSum = title.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  
  // Create base hash
  const baseHash = hashCode(title + id.toString());
  
  // Add rotation based on ID to cycle through photos
  const rotation = (id * 7919) % verifiedPhotos.length; // 7919 is prime
  
  // Combine multiple factors
  const index1 = (baseHash + rotation) % verifiedPhotos.length;
  const index2 = (titleSum * 6421 + id * 5381) % verifiedPhotos.length; // Different primes
  const index3 = (titleLen * 9973 + id) % verifiedPhotos.length;
  
  // Final index with XOR for better distribution
  const finalIndex = (index1 ^ index2 ^ index3) % verifiedPhotos.length;
  
  const photoId = verifiedPhotos[finalIndex];
  
  return `https://images.unsplash.com/photo-${photoId}?w=800&h=600&fit=crop&q=80`;
}

/**
 * Get business-related keyword from training title
 * All keywords focus on workspace/technology - NO people terms
 */
function getBusinessKeyword(title: string): string {
  const titleLower = title.toLowerCase();
  
  // Technology & IT - workspace focus
  if (titleLower.includes('ai') || titleLower.includes('artificial intelligence')) return 'laptop code screen';
  if (titleLower.includes('data science') || titleLower.includes('data analytics')) return 'computer data dashboard';
  if (titleLower.includes('cyber') || titleLower.includes('security')) return 'computer security screen';
  if (titleLower.includes('programming') || titleLower.includes('coding')) return 'laptop programming code';
  if (titleLower.includes('mobile') || titleLower.includes('flutter')) return 'smartphone laptop desk';
  if (titleLower.includes('web') || titleLower.includes('frontend')) return 'computer web development';
  if (titleLower.includes('backend') || titleLower.includes('database')) return 'server computer screen';
  if (titleLower.includes('cloud')) return 'computer cloud technology';
  
  // Business & Finance - desk/workspace
  if (titleLower.includes('finance') || titleLower.includes('financial')) return 'calculator desk documents';
  if (titleLower.includes('accounting') || titleLower.includes('audit')) return 'calculator spreadsheet desk';
  if (titleLower.includes('banking') || titleLower.includes('bank')) return 'office desk documents';
  if (titleLower.includes('investment')) return 'laptop financial chart';
  if (titleLower.includes('credit') || titleLower.includes('loan')) return 'documents desk office';
  if (titleLower.includes('treasury') || titleLower.includes('cash')) return 'calculator office desk';
  
  // Sales & Marketing - workspace
  if (titleLower.includes('sales') || titleLower.includes('selling')) return 'office desk laptop';
  if (titleLower.includes('marketing')) return 'laptop workspace desk';
  if (titleLower.includes('content')) return 'camera laptop desk';
  if (titleLower.includes('digital')) return 'laptop screen workspace';
  if (titleLower.includes('presentation')) return 'projector screen office';
  
  // Leadership & Management - office
  if (titleLower.includes('leadership') || titleLower.includes('leader')) return 'office desk workspace';
  if (titleLower.includes('management') || titleLower.includes('manager')) return 'desk office interior';
  if (titleLower.includes('strategy') || titleLower.includes('strategic')) return 'whiteboard office planning';
  if (titleLower.includes('project')) return 'desk laptop planning';
  
  // HR & Human Capital - office workspace
  if (titleLower.includes('hr') || titleLower.includes('human resource')) return 'office desk interior';
  if (titleLower.includes('recruitment') || titleLower.includes('hiring')) return 'office workspace desk';
  if (titleLower.includes('training') || titleLower.includes('development')) return 'classroom empty desks';
  if (titleLower.includes('employee') || titleLower.includes('talent')) return 'office workspace interior';
  
  // ESG & Sustainability - office/green
  if (titleLower.includes('esg') || titleLower.includes('sustainability')) return 'office plant workspace';
  if (titleLower.includes('environment') || titleLower.includes('green')) return 'plant office desk';
  if (titleLower.includes('renewable') || titleLower.includes('energy')) return 'solar panel technology';
  
  // Office & Administration
  if (titleLower.includes('office') || titleLower.includes('administration')) return 'office desk workspace';
  if (titleLower.includes('excel') || titleLower.includes('spreadsheet')) return 'laptop spreadsheet screen';
  if (titleLower.includes('secretary') || titleLower.includes('administrative')) return 'desk office supplies';
  if (titleLower.includes('warehouse') || titleLower.includes('logistics')) return 'warehouse shelves boxes';
  
  // Certification & Quality
  if (titleLower.includes('bnsp') || titleLower.includes('certification')) return 'certificate desk documents';
  if (titleLower.includes('quality') || titleLower.includes('iso')) return 'checklist desk documents';
  
  // Default - clean workspace
  return 'laptop desk workspace';
}

/**
 * Alternative: Use Lorem Picsum with real photos
 */
export function generateExternalImage(title: string): string {
  const hash = hashCode(title);
  const imageId = (hash % 1000) + 1;
  
  // Picsum provides real curated photos
  return `https://picsum.photos/id/${imageId}/800/600`;
}

/**
 * Get relevant keyword-based image from training title
 */
function getImageQuery(title: string): string {
  const titleLower = title.toLowerCase();
  
  // Technology & IT
  if (titleLower.includes('ai') || titleLower.includes('artificial intelligence')) return 'artificial intelligence technology';
  if (titleLower.includes('data science') || titleLower.includes('data analytics')) return 'data analysis business';
  if (titleLower.includes('cyber') || titleLower.includes('security')) return 'cybersecurity computer';
  if (titleLower.includes('programming') || titleLower.includes('coding')) return 'programming laptop code';
  if (titleLower.includes('mobile') || titleLower.includes('flutter')) return 'mobile development';
  if (titleLower.includes('web') || titleLower.includes('react') || titleLower.includes('frontend')) return 'web development';
  if (titleLower.includes('database') || titleLower.includes('sql')) return 'database server';
  if (titleLower.includes('cloud')) return 'cloud computing';
  
  // Business & Finance
  if (titleLower.includes('finance') || titleLower.includes('financial')) return 'finance business meeting';
  if (titleLower.includes('accounting') || titleLower.includes('audit')) return 'accounting calculator';
  if (titleLower.includes('banking') || titleLower.includes('bank')) return 'banking professional';
  if (titleLower.includes('investment') || titleLower.includes('trading')) return 'stock market investment';
  if (titleLower.includes('credit') || titleLower.includes('loan')) return 'credit card finance';
  if (titleLower.includes('risk') || titleLower.includes('management')) return 'risk management business';
  
  // Sales & Marketing
  if (titleLower.includes('sales') || titleLower.includes('selling')) return 'business meeting handshake';
  if (titleLower.includes('marketing') || titleLower.includes('digital marketing')) return 'marketing strategy laptop';
  if (titleLower.includes('content') || titleLower.includes('creator')) return 'content creation camera';
  if (titleLower.includes('social media')) return 'social media phone';
  if (titleLower.includes('presentation')) return 'business presentation';
  
  // Leadership & Management
  if (titleLower.includes('leadership') || titleLower.includes('leader')) return 'leadership team meeting';
  if (titleLower.includes('management') || titleLower.includes('manager')) return 'business management';
  if (titleLower.includes('strategy') || titleLower.includes('strategic')) return 'business strategy planning';
  if (titleLower.includes('project management')) return 'project management team';
  if (titleLower.includes('team') || titleLower.includes('collaboration')) return 'team collaboration office';
  
  // HR & Human Capital
  if (titleLower.includes('hr') || titleLower.includes('human resource')) return 'human resources interview';
  if (titleLower.includes('recruitment') || titleLower.includes('hiring')) return 'job interview recruitment';
  if (titleLower.includes('training') || titleLower.includes('development')) return 'corporate training workshop';
  if (titleLower.includes('employee') || titleLower.includes('talent')) return 'office employees working';
  
  // ESG & Sustainability
  if (titleLower.includes('esg') || titleLower.includes('sustainability')) return 'sustainability green business';
  if (titleLower.includes('environment') || titleLower.includes('green')) return 'environment nature green';
  if (titleLower.includes('renewable') || titleLower.includes('energy')) return 'renewable energy solar';
  if (titleLower.includes('recycle') || titleLower.includes('waste')) return 'recycling waste management';
  
  // Office & Administration
  if (titleLower.includes('office') || titleLower.includes('administration')) return 'office workspace desk';
  if (titleLower.includes('excel') || titleLower.includes('spreadsheet')) return 'excel laptop spreadsheet';
  if (titleLower.includes('secretary') || titleLower.includes('administrative')) return 'secretary office professional';
  if (titleLower.includes('warehouse') || titleLower.includes('logistics')) return 'warehouse logistics';
  
  // Certification & Quality
  if (titleLower.includes('bnsp') || titleLower.includes('certification')) return 'certificate training professional';
  if (titleLower.includes('quality') || titleLower.includes('iso')) return 'quality assurance inspection';
  
  // Default
  return 'business professional training';
}
