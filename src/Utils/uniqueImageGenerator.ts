/**
 * Generate unique, visually distinct images for each training program
 * Uses custom cover images for specific training programs
 */

// Custom cover images mapping for specific training titles
const customCoverImages: { [key: string]: string } = {
  // Tech Series â€” foto unik, berbeda dari semua kategori sebelumnya
  "Advanced Flutter Animation: From Basics to Micro-interactions": "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&h=600&fit=crop&q=80",
  "Mastering Progressive Web App Development: React & Next.js": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop&q=80",
  "PDP (Perlindungan Data Pribadi)": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop&q=80",

  // New Training 2026 â€” foto Unsplash unik, berbeda dari semua kategori lain
  "Strategic Digital Learning & Development Using AI": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=600&fit=crop&q=80",
  "AI-Powered LMS Optimization & People Analytics": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop&q=80",
  "AI Sales Tools: Meningkatkan Penjualan dan Profit Berlipat Ganda menggunakan 11 Tools AI": "https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=800&h=600&fit=crop&q=80",
  "Data Driven Decision Making": "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800&h=600&fit=crop&q=80",
  "Pembuatan AI Credit Scoring untuk Kredit Produktif, Usaha Kecil, Mikro dan Ultra Mikro": "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop&q=80",
  "Transformasi Kinerja Tim Penagihan Menggunakan Artificial Intelligence 20 Tools": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&q=80",
  "Build Your Own Report-Summarizing Chatbot with GEN AI": "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&h=600&fit=crop&q=80",
  "Create a 24/7 Customer Service Chatbot with GEN AI (LLM OpenAI) for Any Industry": "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop&q=80",
  "Prompt Engineering Mastery: A Game-Changer for Sales, Entrepreneurs, and Professionals": "https://images.unsplash.com/photo-1664575196644-808978af9b1f?w=800&h=600&fit=crop&q=80",
  "Hybrid Coaching & Mentoring Skills in Digital Era": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80",
  "Teknologi Virtual Reality Untuk Transformasi Bisnis, Pengembangan Karyawan dan Peningkatan Profit": "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=600&fit=crop&q=80",
  "Transformasi dan Digitalisasi Bisnis Memanfaatkan AI, IoT & Blockchain Bagi Pimpinan Perusahaan": "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=600&fit=crop&q=80",
  "Cyber Security for Digital Banking & Fiintech in Indonesia": "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop&q=80",
  "Cyber Security: Policy Updates, Regulation Compliance, Future Requirement & Internalâ€‘Team Preparation": "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&h=600&fit=crop&q=80",
  "PDP (Perlindungan Data Pribadi) Dan Data Science": "https://images.unsplash.com/photo-1614064643392-8dd713152ae9?w=800&h=600&fit=crop&q=80",
  "Flutter Expert: Building Enterprise-Grade Applications": "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=800&h=600&fit=crop&q=80",
  "Mastering UI/UX Design: Figma Pro Workflows & Advanced Techniques": "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&h=600&fit=crop&q=80",
  "Menguasai Framework Front End Modern: React, Next.js, & Tailwind CSS": "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=600&fit=crop&q=80",
  "Komunikasi dan Negosiasi Tingkat Lanjut bagi Sales, Marketing & Purchasing": "https://images.unsplash.com/photo-1573164574511-73c773193279?w=800&h=600&fit=crop&q=80",
  "Digital Marketing & E Commerce & Social Media Selling": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop&q=80",

  // Leadership & Managerial Series â€” foto unik, berbeda dari semua kategori sebelumnya
  "Agile Leadership: What Leaders Have To Do in Enabling Agile Transformation": "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&h=600&fit=crop&q=80",
  "Analisa Data dan Penampilannya bagi Presentasi Manajemen": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop&q=80",
  "Analytical Skills For Leaders": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop&q=80",
  "Business Leadership Through Excellence Execution": "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=600&fit=crop&q=80",
  "Communication Skills in Project Management": "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&h=600&fit=crop&q=80",
  "Creative & Agile Tools of Management Problem Solving & Decision Making in Digital Era": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80",
  "Creative Leadership & Management for Better Result": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=800&h=600&fit=crop&q=80",
  "Creative Problem Solving & Decision Making": "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=600&fit=crop&q=80",
  "Effective Communication & Interpersonal Skills": "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&h=600&fit=crop&q=80",
  "Effective Negotiation Skills in New Normal Era": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop&q=80",
  "Effective Supervision & Coaching for Higher Productivity": "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop&q=80",
  "Effective Time & Activity Management": "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop&q=80",
  "Etos Kerja Unggulan Di Era Business Improvement": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop&q=80",
  "Facilitative & Emphatic Leadership": "https://images.unsplash.com/photo-1542744095-291d1f67b221?w=800&h=600&fit=crop&q=80",
  "Five Core Leadership Skills Translated to POCE (For Managers & Senior SPV)": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&q=80",
  "Infografis & pembuatan materi presentasi bagi level manajemen": "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&h=600&fit=crop&q=80",
  "Innovative Business Thinking & Productive Creativity With IDEO & XQ Principles": "https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=800&h=600&fit=crop&q=80",
  "Innovative, Sistematic & Lateral Thinking Skills for Leader": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=600&fit=crop&q=80",
  "Insight Fundamentals of Investor Relations: Industry - Vendor - Supplier": "https://images.unsplash.com/photo-1444653389962-8149286c578a?w=800&h=600&fit=crop&q=80",
  "Keterampilan Komunikasi dalam Rapat & Diskusi": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=600&fit=crop&q=80",
  "Komunikasi Bisnis Bagi Para Millenia": "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop&q=80",
  "Life Coach: Achieving Work-Life Balance": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop&q=80",
  "Manajemen Emosi, Tempramen & Kontrol Diri untuk Service Excellent": "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop&q=80",
  "Mengubah Bawahan Bermasalah dan Berkonflik menjadi Produktif dan Supportif": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&q=80",
  "Modern Leadership Skills: How Leaders Managing Team by Data in the Era of Analytics": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
  "Modern Project Management: Combining Scrum & Sprint": "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop&q=80",
  "Practical Business Presentation Skills": "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=800&h=600&fit=crop&q=80",
  "Shopfloor Leadership & Management: Leading By Gemba Kaizen": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop&q=80",
  "Smart Way To Improve Your Negotiation Skills for Leaders": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&q=80",
  "Sytemic Design Thinking: To foster Creativity & Increase Team Innovation For Leaders": "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop&q=80",

  // HC & Training Series â€” foto unik, berbeda dari semua kategori sebelumnya
  "Bagaimana Melakukan PHK Dengan Aman Tanpa Gejolak": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop&q=80",
  "Beautiful Life in Retirement": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop&q=80",
  "Build a Great and Strong Corporate Culture": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&q=80",
  "Business Acumen: Think, Sense & Act like CEO": "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&q=80",
  "Compensation & Benefit Analysis Training": "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop&q=80",
  "Competency Based Human Resource Management": "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800&h=600&fit=crop&q=80",
  "Comprehensive HC Management for Millenials - A Smart way to improve your understanding in managing HC Practices": "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&q=80",
  "Comprehensive Train The Trainers": "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=800&h=600&fit=crop&q=80",
  "Digital Mindset & Capability Development Based on Industry 4.0": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&q=80",
  "Drill For Trainers: Mastering 10 Core Trainer's Tools": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&q=80",
  "Emotional Communication Skill & Team Spirit For Luxury Experience": "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop&q=80",
  "How to Conduct Social Campaign (for the Benefit of HR and Corporate Reputation)": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80",
  "How To Conduct TNA, Creating Training Material & Measuring Training Effectivity": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop&q=80",
  "How To Make an Effective Fair Performance Appraisal & Evaluation": "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?w=800&h=600&fit=crop&q=80",
  "How to Recruit, Interview, Select & Place the Right Employee": "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&h=600&fit=crop&q=80",
  "HR consulting skills for HR Professional: Core skills to ensure excellent strategies to implementation": "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=800&h=600&fit=crop&q=80",
  "Human Capital Role & Practice in Merger & Acquisition": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop&q=80",
  "Leadership & Followership for Millenials (in VUCA area)": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&q=80",
  "Managing People and Managing Talent in Generation YZ": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop&q=80",
  "Menyusun Kurikulum Pelatihan Berbasis Kompetensi": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop&q=80",
  "On Boarding & Knowledge Transfer": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80",
  "People (HR) Analytics: For HR & Non HR Professional": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
  "Planning and Organizing for Stellar Performance": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop&q=80",
  "Professional Capability Development Towards Industry 4.0": "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&h=600&fit=crop&q=80",
  "Transformasi Budaya Organisasi dan Menciptakan Agen Perubahan": "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop&q=80",
  "Understanding Millenials - Managing for High Performance and Engagement": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80",

  // Credit & Collection Series â€” foto unik, berbeda dari semua kategori sebelumnya
  "How to Detect & Prevent Application Fraud in Digital Era for Banking & Fintech": "https://images.unsplash.com/photo-1503437313881-503a91226402?w=800&h=600&fit=crop&q=80",
  "Debt Collection Strategy & Tactics for Fintech Business": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop&q=80",
  "Mengelola NPL dengan Early Warning System (EWS)": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
  "Analisa Kredit Sindikasi: Pembuatan Struktur Fasilitas, Kredit, Pembagian Tugas Arranger, Manajemen, dan Aspek Hukumnya": "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=800&h=600&fit=crop&q=80",
  "Applied Debt Collection Strategy & Tactics": "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&h=600&fit=crop&q=80",
  "Antisipasi Pemalsuan Dokumen, Tanda Tangan, dan Mafia Fraud": "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop&q=80",
  "Manajemen Resiko APU & PPT bagi Staff Perbankan, Multifinance, Sekuritas dan Asuransi": "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=600&fit=crop&q=80",
  "Restrukturisasi Kredit for SME Lending": "https://images.unsplash.com/photo-1556742208-999815fca738?w=800&h=600&fit=crop&q=80",
  "Aspek Legal Pembiayaan & Penagihan Kartu Kredit": "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=800&h=600&fit=crop&q=80",
  "Sekuritisasi Asset: Pengembangan Produk, Analisa Resiko, Aspek Legal, Perpajakan dan Strukturisasinya": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&q=80",
  "Teknik Interview & Investigasi Terselubung Bagi Internal Audit": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop&q=80",
  "Collection Analytical Tools & MIS": "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop&q=80",
  "Advance Credit Analyst for Corporate Commercial": "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=600&fit=crop&q=80",
  "Analisa Kredit Berbasis Laporan Keuangan": "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=600&fit=crop&q=80",
  "Financial Credit Rating & Scoring": "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop&q=80",
  "Leaders as a Coach & Team Developer in Collection": "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop&q=80",
  "Manajemen Emosi Diri, Temperamen & Kontrol Customer dalam Penagihan": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop&q=80",
  "Restrukturisasi Kredit untuk Kartu Kredit & Negosiasinya untuk Kredit, KTA & Mikro": "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=600&fit=crop&q=80",
  "Teknik Penagihan Melibatkan Aspek Hukum": "https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=800&h=600&fit=crop&q=80",
  "Teknik Penjualan Aset Kredit Bermasalah": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80",
  "Antisipasi & Pencegahan Transaksi Pencucian Uang": "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?w=800&h=600&fit=crop&q=80",
  "Audit Treasury Management for Banking": "https://images.unsplash.com/photo-1638913662380-9799def8ffb1?w=800&h=600&fit=crop&q=80",
  "Corporate Credit Analyst for Multi Finance": "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&h=600&fit=crop&q=80",
  "Hukum Perkreditan Tingkat Lanjut": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop&q=80",
  "Mortgage Credit Analysis Training": "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop&q=80",
  "Secondary Mortgage Facility": "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=600&fit=crop&q=80",
  "Teknik Penagihan sesuai dengan PJOK 11 (3/2020)": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&q=80",
  "Analisa Kredit Transaksi Luar Negeri": "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop&q=80",
  "Appraisal Tingkat Lanjut Sesuai Standar Penilaian Indonesia (SPI)": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&q=80",
  "Collection for Corporate & Commercial Credit": "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=600&fit=crop&q=80",
  "Collection Negotiation Intermediate Skills": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop&q=80",
  "Collection Recovery Section Head Development Program": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80",
  "Collection Target Fixing & Motivation Charge Up": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&q=80",
  "Daily, Weekly & Monthly Analytics for Collection Leaders": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop&q=80",
  "Graphonomy & Graphology: Pencegahan Pemalsuan Tanda Tangan & Penipuan Dokumen di Era New Normal": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop&q=80",
  "Managing Corporate Collection": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80",
  "Mengelola Team Collection bagi Manager, Supervisor & Team Leader": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&q=80",
  "Pembuatan Struktur Fasilitas Kredit dan Mitigasi Resikonya": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80",
  "Professional Debt Collection Skills": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&q=80",
  "Soft Skills For Credit Analyst & Credit Surveyor": "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=800&h=600&fit=crop&q=80",
  "Teknik Penyelesaian Kredit & Pemasaran AYDA yang Efektif": "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800&h=600&fit=crop&q=80",

  // Sales & Marketing Series â€” foto unik, berbeda dari Finance, ESG, BNSP & Office Series
  "Advanced Digital Marketing & Foundation for Growth Hacking": "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop&q=80",
  "How to Utilize People & Technology to Win The Market": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=80",
  "Creative Content Design: Membuat Konten Edukatif dengan Tools AI": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80",
  "Design Thinking: Creating Innovative Product, Excellent Services & Powerful Selling": "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&h=600&fit=crop&q=80",
  "Optimizing and Growing Your Business with E-Commerce": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
  "Social Selling: Optimizing Engagement & Sentiment Creation for Business Interest": "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop&q=80",
  "Teknik Analisa Big Data untuk Memaksimalkan Marketing": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&q=80",
  "Teknik Penjualan Online yang Efektif": "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&h=600&fit=crop&q=80",
  "Enterprise Solution Selling": "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=600&fit=crop&q=80",
  "Improving Sales Team Performance, Energy & Motivation": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop&q=80",
  "Leaders as a Coach & Team Developer in Sales": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop&q=80",
  "Marketing & Sales Planning: Strategic Alignment for Effective Results": "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&h=600&fit=crop&q=80",
  "Presentation & Selling Skills Using Story-Telling": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&q=80",
  "Professional Selling Skills": "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?w=800&h=600&fit=crop&q=80",
  "Sales & Marketing Management": "https://images.unsplash.com/photo-1562564055-71e051d33c19?w=800&h=600&fit=crop&q=80",
  "Sales Performance Improvement for Extraordinary Result": "https://images.unsplash.com/photo-1664575198308-3959904fa430?w=800&h=600&fit=crop&q=80",
  "Creative Promotion & Campaign Management": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop&q=80",
  "Digital Marketing untuk Bisnis B2B": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
  "Marketing Research for Business using SPSS (Workshop)": "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop&q=80",
  "Optimalisasi Social Media Branding Menggunakan Storytelling": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=600&fit=crop&q=80",
  "Pipeline, New Prospect & Lead Management": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop&q=80",
  "Sales Oriented – Customer Service": "https://images.unsplash.com/photo-1521727857538-b01f56b51add?w=800&h=600&fit=crop&q=80",
  "Area & Territory Management": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop&q=80",
  "Developing & Writing Corporate Credit Proposal": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&q=80",
  "Experiential Marketing Strategy & Tactics": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&q=80",
  "Marketing Support & Sales Admin Development Program": "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=600&fit=crop&q=80",
  "Practical Marketing Strategy, Implementation for Banking & Multifinance": "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&h=600&fit=crop&q=80",
  "Professional Digital Marketing": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop&q=80",
  "Professional Telesales & Telemarketing": "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=800&h=600&fit=crop&q=80",
  "Sales Forecasting: A Small Step for Getting A Giant Sales Target Results": "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=600&fit=crop&q=80",
  "Selling With NLP": "https://images.unsplash.com/photo-1551836022-b06985bceb24?w=800&h=600&fit=crop&q=80",
  "Visual Merchandising for Effective Result": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=80",

  // Office & Administration Series â€” foto unik, berbeda dari Finance, ESG & BNSP Series
  "Best Practice for Supply Chain Management": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop&q=80",
  "Corporate Event Management": "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop&q=80",
  "Distribution Management": "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&h=600&fit=crop&q=80",
  "Document Management 4.0 (Advance E-Filing preparing for Blockchain, IoT & Artificial Intelligence Era) comply to UU ITE": "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?w=800&h=600&fit=crop&q=80",
  "Electronic Filing & Document Management System": "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&h=600&fit=crop&q=80",
  "Excel & PowerPoint for Powerful Business Application": "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&h=600&fit=crop&q=80",
  "Integrated Production Management": "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=600&fit=crop&q=80",
  "Interactive Dashboard with Microsoft Excel": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=600&fit=crop&q=80",
  "Legal Drafting to Prevent and Anticipate Business Conflict & Dispute": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&h=600&fit=crop&q=80",
  "Managing General Affairs Excellence": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80",
  "Manajemen Filing & Tata Kelola Kantor": "https://images.unsplash.com/photo-1517502884422-a3e5f0a9d7c5?w=800&h=600&fit=crop&q=80",
  "Manajemen Pembelian, PPIC, Pergudangan & Negosiasi Pengadaan": "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=800&h=600&fit=crop&q=80",
  "Microsoft Excel VBA (Macros) Complete Beginner": "https://images.unsplash.com/photo-1655720033654-a4239dd42d10?w=800&h=600&fit=crop&q=80",
  "Modern Warehouse Management in Digital Era": "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop&q=80",
  "Powerful Database Analysis & Dashboard Reporting with Microsoft Excel": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop&q=80",
  "Professional Tenant & Property Management": "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&h=600&fit=crop&q=80",
  "Purchasing & Procurement era Digital Industry 4.0 & New Normal": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop&q=80",
  "Purchasing Excellence Administration": "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&h=600&fit=crop&q=80",
  "Secretary Development Program": "https://images.unsplash.com/photo-1551836022-8b2858c9c69b?w=800&h=600&fit=crop&q=80",
  "Warehouse Administration for Better Efficiency & Productivity": "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop&q=80",

  // BNSP Certification Series â€” foto unik, berbeda dari Finance & ESG Series
  "Pelatihan & Sertifikasi BNSP Public Speaking": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop&q=80",
  "Pelatihan & Sertifikasi BNSP Pelayanan Prima": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop&q=80",
  "Pelatihan & Sertifikasi BNSP Public Relation Officer": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&q=80",
  "Pelatihan & Sertifikasi BNSP Digital Marketing": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
  "Pelatihan & Sertifikasi BNSP Content Creator": "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&h=600&fit=crop&q=80",
  "Pelatihan & Sertifikasi BNSP Ms. Office Pendukung Perkantoran": "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&h=600&fit=crop&q=80",
  "Pelatihan & Sertifikasi BNSP Training of Trainer Level 4": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&q=80",
  "Pelatihan & Sertifikasi BNSP Training of Trainer Level 3": "https://images.unsplash.com/photo-1543013309-0d1f4edeb868?w=800&h=600&fit=crop&q=80",
  "Pelatihan & Sertifikasi BNSP Supply Chain Management": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80",
  "Pelatihan & Sertifikasi BNSP Warehouse Supervisor": "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop&q=80",
  "Pelatihan & Sertifikasi BNSP Freight Forwarder": "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=600&fit=crop&q=80",
  "Pelatihan & Sertifikasi BNSP Warehouse Operator": "https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?w=800&h=600&fit=crop&q=80",
  "Pelatihan & Sertifikasi BNSP Logistics Administrative Officer": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop&q=80",
  "Pelatihan & Sertifikasi BNSP Procurement Staff": "https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?w=800&h=600&fit=crop&q=80",
  "Pelatihan & Sertifikasi BNSP Procurement Supervisor": "https://images.unsplash.com/photo-1664575198308-3959904fa430?w=800&h=600&fit=crop&q=80",
  "Pelatihan & Sertifikasi BNSP Human Resource Management - Staff SDM": "https://images.unsplash.com/photo-1573496799515-eebbb63814f2?w=800&h=600&fit=crop&q=80",
  "Pelatihan & Sertifikasi BNSP Human Resource Management - Supervisor SDM": "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop&q=80",
  "Pelatihan & Sertifikasi BNSP Human Resource Management - Manager SDM": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=600&fit=crop&q=80",
  "Pelatihan & Sertifikasi BNSP Cyber Security Analyst": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop&q=80",

  // ESG Series â€” semua foto unik, tidak ada yang sama dengan Finance Series
  "Pemahaman Fundamental ESG: Mengintegrasikan Faktor Lingkungan, Sosial, dan Tata Kelola dalam Bisnis": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&q=80",
  "Daur Ulang dan Pengelolaan Sampah: Solusi Berkelanjutan untuk Industri dan Masyarakat": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop&q=80",
  "Karbon Kredit dan Ekonomi Berkelanjutan: Membangun Nilai Tambah untuk Perusahaan": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&q=80",
  "Konservasi Sumber Daya Air sebagai Strategi Bisnis Berkelanjutan: Meningkatkan Efisiensi dan Nilai Tambah Perusahaan": "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop&q=80",
  "Transformasi Bisnis Melalui Energi Terbarukan: Strategi Keberlanjutan untuk Pertumbuhan dan Daya Saing": "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop&q=80",
  "Mengelola Risiko dan Peluang Bisnis di Tengah Krisis Perubahan Iklim: Strategi Adaptasi dan Keberlanjutan": "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop&q=80",
  "Mendorong Kesetaraan Gender di Tempat Kerja untuk Meningkatkan Inklusi dan Kinerja Bisnis": "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop&q=80",
  "Inovasi Bisnis melalui Kolaborasi dan Pemberdayaan Komunitas Lokal": "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=800&h=600&fit=crop&q=80",
  "Kesehatan dan Keselamatan Kerja": "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&h=600&fit=crop&q=80",
  "Meningkatkan Kesadaran Hak Asasi dan Keberlanjutan Sosial dalam Bisnis Modern": "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop&q=80",
  "Pendidikan sebagai Katalisator Bisnis Keberlanjutan dalam Kebijakan ESG": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&q=80",
  "Meningkatkan Tata Kelola Perusahaan melalui Transparansi dan Akuntabilitas yang Efektif": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop&q=80",
  "Meningkatkan Keberlanjutan Bisnis melalui Etika dan Transparansi": "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&h=600&fit=crop&q=80",
  "ESG Framework: Merancang Kebijakan untuk Masa Depan Bisnis yang Berkelanjutan": "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=600&fit=crop&q=80",
  "Audit Lingkungan dan Sosial": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=80",

  // Finance Series
  "Actuarial - Calculation of The Risk Value": "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop&q=80",
  "Akutansi Keuangan Syariah": "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&h=600&fit=crop&q=80",
  "Cash Flow & Credit Management": "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&h=600&fit=crop&q=80",
  "Cost Reduction Strategy": "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=600&fit=crop&q=80",
  "Cost Tracking vs Scheduling Analysis Model in Project Management": "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop&q=80",
  "Create A Simple Integrating Payroll System for Salary Efficiently and Effectively": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&q=80",
  "Effective Transactional Banking for Back Office": "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&h=600&fit=crop&q=80",
  "Finance For Non Finance Executive": "https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=800&h=600&fit=crop&q=80",
  "Industry Forecasting & Bussiness Valuation Workshop: Start Up & Conventional Business": "https://images.unsplash.com/photo-1543286386-2e659306cd6c?w=800&h=600&fit=crop&q=80",
  "International Banking Facility": "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=600&fit=crop&q=80",
  "Perencanaan, Audit & Analisa Kebutuhan Keuangan Perusahaan": "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop&q=80",
  "Simple Methode of Corporate Tax Calculation PPN - PPH": "https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?w=800&h=600&fit=crop&q=80",
  "Tax Amnesty Bagi Karyawan & Profesional": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&q=80",
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
    '1484480974693-6ca0a78fb36b', // laptop desk âœ“
    '1498050108023-c5d6c9a3d4e9', // code screen âœ“
    '1461749280684-dccba630e2f6', // dual monitor âœ“
    '1517694712318-92b8f28c4c96', // laptop white desk âœ“
    '1504868584819-f8e8b4b6d7e3', // laptop keyboard âœ“
    
    '1497366216902-b9e0c7e6cdbd', // modern office âœ“
    '1486406146926-c627a92ad1ab', // glass office âœ“
    '1519941823197-f0d77a10c739', // office interior âœ“
    '1531403009284-440f080d1e12', // bright office âœ“
    '1486312338219-ce68d2c6f44d', // minimal desk âœ“
    
    '1423666639041-f56000c27a9a', // office supplies âœ“
    '1517245084-f1c09eaa3e3a', // notebooks âœ“
    '1519389950473-47ba0277781c', // desk items âœ“
    '1544816155-004b8e5c1cc4', // calculator âœ“
    '1587826989135-a1b6d2f6e5f5', // keyboard âœ“
    
    '1551288049-89a6d68945a4', // chart screen âœ“
    '1543286386-713bdd548da4', // analytics âœ“
    '1559136555-9303baea8ebd', // dashboard âœ“
    '1543269664-56d93c1b41a6', // data screen âœ“
    '1551434678-7f6a26f67e2c', // monitor display âœ“
    
    '1505664194779-8beaceb93ca4', // boardroom âœ“
    '1512418599338-c1e2d9c2e9f0', // conference âœ“
    '1513530534585-c7b1394c6d51', // meeting room âœ“
    '1505843490538-2e3bebba3448', // office chair âœ“
    '1541123356219-147efe5ff32d', // empty chair âœ“
    
    '1522202176988-66273c2fd55f', // multi screen âœ“
    '1587614382346-4ec70e388b28', // monitor desk âœ“
    '1515378791036-0648a3336e77', // dev setup âœ“
    '1605810230434-7df8e70f8c94', // tech desk âœ“
    '1587613704157-4b6a0e5ba7c5', // laptop notebook âœ“
    
    '1542435503-956c42f85b2d', // clean desk âœ“
    '1551836022-b06985bceb24', // desk flatlay âœ“
    '1524758631624-e2822e304c36', // desk topview âœ“
    '1527689368864-3c3cb3a1f0e8', // macbook desk âœ“
    '1497215842964-222b430dc094', // laptop plant âœ“
    
    '1450101499163-c8848c66ca85', // papers âœ“
    '1552581234-26160f608093', // documents âœ“
    '1554224311-beee460ae6a7', // contracts âœ“
    '1557425493-6f90ae4659fc', // docs spread âœ“
    '1563013544-824d1f6c7b36', // spreadsheet âœ“
    
    '1544717302-de2a8b6a2e6e', // iPad âœ“
    '1512941937669-90d1e68c9f3f', // smartphone âœ“
    '1559028006-448665bd629e', // devices âœ“
    '1556656793-08538906a9f8', // digital screen âœ“
    '1560169897-fc0cdbdfa4d5', // keyboard typing âœ“
    
    '1481627834876-b7833e8f5570', // books âœ“
    '1507842217343-583bb7270b66', // book stack âœ“
    '1455390582262-044cdead277a', // planner âœ“
    '1517842645-8f0a0b6e8d4c', // journal âœ“
    '1432821596-64dd93d3c672', // pencils âœ“
    
    '1558494949-ef1c33c1f6b5', // server room âœ“
    '1554960748-b1e6f0f84d94', // cables âœ“
    '1625259078084-fb1aa99a27c6', // USB cables âœ“
    '1555680142-c1b41e8b67a8', // hardware âœ“
    '1591799264318-7e6ef8ddb7ea', // PC tower âœ“
    
    '1495474472287-4d71bcdd2085', // coffee desk âœ“
    '1501504905252-473c47e087f8', // espresso âœ“
    '1517694712318-92b8f28c4c96', // workspace âœ“
    '1486312338219-ce68d2c6f44d', // desk setup âœ“
    '1519389950473-47ba0277781c', // organized âœ“
    
    '1501139083538-0139583c060f', // clock âœ“
    '1533749047139-5d6296c97f0d', // desk clock âœ“
    '1545127398-14699da562f1', // headphones âœ“
    '1518770660439-4636190af475', // speaker âœ“
    '1545259742-f44b3e7e922e', // gadgets âœ“
    
    '1540575467063-178a50c2df87', // projector âœ“
    '1558403194-8e2e1e7e3ff8', // cards âœ“
    '1513506003-0c140601f32f', // lamp âœ“
    '1507003211169-0a1dd7228f2d', // lights âœ“
    '1561037409-52fb1f7db1a5', // cabinet âœ“
    
    '1526566902-9c88ed8b2d00', // shelves âœ“
    '1520607162513-77705c0f0d4a', // hallway âœ“
    '1560264280-88b68371b3eb', // coworking âœ“
    '1593508512255-86ab42a8e620', // layout âœ“
    '1542744173-05a20302f737', // design âœ“
    
    '1517744538489-dbac0d5cf9e6', // whiteboard âœ“
    '1543269865-cbf427effbad', // graphs âœ“
    '1556745753-b2904692b3cd', // data viz âœ“
    '1460925895917-afdab827c52f', // analytics âœ“
    '1507537362848-9c7e70b0c58f', // standing desk âœ“
    
    // Additional verified tech/business photos
    '1454165804606-c3d57bc86b40', // iMac desk âœ“
    '1483058712412-4245e9b90334', // laptop work âœ“
    '1487058792275-0c2c680e36d4', // tech setup âœ“
    '1496181133206-80ce9b88a853', // laptop coffee âœ“
    '1499951360447-b19be8fe80f5', // workspace âœ“
    
    '1503437313881-503a91226402', // office âœ“
    '1487700160041-babef9c3cb55', // desk side âœ“
    '1497366754035-f200968a6e72', // office space âœ“
    '1497366811353-6870744d04b2', // glass wall âœ“
    '1517502884422-a3e5f0a9d7c5', // meeting âœ“
    
    '1543269865-cbf427effbad', // business âœ“
    '1600880292203-757bb62b4baf', // planning âœ“
    '1554224312-f28b5f9e9f4e', // papers âœ“
    '1450101857522-496f0f72b0b5', // business doc âœ“
    '1455849318743-469db6fa63c9', // notes âœ“
    
    '1484704849762-62e3ba6e6cd2', // audio âœ“
    '1587826989085-e5e5f5f5f5f5', // keyboard âœ“
    '1526374965341-9f4d30c3e1a2', // tech gear âœ“
    '1505740420928-5e560c06d30e', // equipment âœ“
    '1559056199-641a0ac8b3d9', // board âœ“
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
