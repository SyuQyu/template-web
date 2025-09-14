import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations: Record<Language, Record<string, string>> = {
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.about': 'Tentang Kami',
    'nav.services': 'Layanan',
    'nav.fleet': 'Armada / Peralatan',
    'nav.projects': 'Proyek / Track Record',
    'nav.news': 'Berita',
    'nav.contact': 'Kontak',
    
    // Hero Section
    'hero.title': 'Heavy Equipment Rental & Construction Support',
    'hero.subtitle': 'Partner terpercaya untuk proyek konstruksi besar dengan 200+ unit heavy equipment dan 15+ tahun pengalaman',
    'hero.cta.consultation': 'Konsultasi Gratis',
    'hero.cta.fleet': 'Lihat Armada',
    
    // Core Strengths
    'strengths.title': 'Mengapa Memilih PT. Mitra Kawan Bersama',
    'strengths.overtitle': 'Kekuatan Inti Kami',
    'strengths.experience.title': '15+ Tahun Pengalaman',
    'strengths.experience.desc': 'Pengalaman lebih dari 15 tahun dalam heavy equipment rental dan construction support untuk major projects.',
    'strengths.fleet.title': 'Armada Premium Equipment',
    'strengths.fleet.desc': '200+ unit heavy equipment dari brand terkemuka: Liebherr, Manitowoc, Demag, Grove dengan capacity hingga 2300 ton.',
    'strengths.safety.title': '99.8% Safety Record',
    'strengths.safety.desc': 'Track record keselamatan yang outstanding dengan zero accident selama 24 bulan berturut-turut.',
    'strengths.trusted.title': 'Dipercaya Industry Leaders',
    'strengths.trusted.desc': 'Dipercaya oleh 50+ major clients termasuk BP, PLN, Pertamina, Chevron, ExxonMobil untuk proyek-proyek strategis.',
    
    // Key Projects
    'projects.title': 'Pencapaian Proyek Unggulan',
    'projects.overtitle': 'Proyek Kunci',
    'projects.cta': 'Lihat Semua Proyek',
    
    // Quick Contact
    'contact.title': 'Siap Memulai Proyek Anda?',
    'contact.subtitle': 'Hubungi tim expert kami untuk consultation dan quotation. Kami siap memberikan solusi heavy equipment rental terbaik untuk project Anda.',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.call': 'Telepon',
    'contact.cta': 'Konsultasi Gratis',
    
    // About Page
    'about.title': 'Tentang PT. Mitra Kawan Bersama',
    'about.subtitle': 'Partner terpercaya untuk solusi heavy equipment rental dan construction support di Indonesia sejak 2010',
    'about.vision.title': 'Visi',
    'about.vision.content': 'Menjadi perusahaan heavy equipment rental terdepan di Asia Tenggara yang memberikan nilai tambah optimal kepada stakeholders.',
    'about.mission.title': 'Misi',
    'about.mission.content': 'Menyediakan layanan heavy equipment rental berkualitas tinggi dengan standar keselamatan internasional untuk mendukung pembangunan infrastruktur Indonesia.',
    'about.management.title': 'Tim Manajemen',
    'about.partners.title': 'Mitra Strategis',
    
    // Services Page
    'services.title': 'Layanan Kami',
    'services.subtitle': 'Solusi lengkap heavy equipment rental dan construction support untuk berbagai kebutuhan industri',
    'services.rental.title': 'Heavy Equipment Rental',
    'services.rental.desc': 'Sewa crane, excavator, bulldozer, dan heavy equipment lainnya dengan operator berpengalaman.',
    'services.heavylift.title': 'Heavy Lift Operations',
    'services.heavylift.desc': 'Operasi angkat berat untuk proyek konstruksi, oil & gas, dan power plant dengan capacity hingga 2300 ton.',
    'services.rigging.title': 'Rigging & Erection',
    'services.rigging.desc': 'Layanan rigging dan erection untuk structural steel, pressure vessel, dan industrial equipment.',
    'services.transportation.title': 'Heavy Transport',
    'services.transportation.desc': 'Transportasi barang berat dengan lowbed trailer dan specialized transport equipment.',
    'services.maintenance.title': 'Equipment Maintenance',
    'services.maintenance.desc': 'Maintenance dan repair services untuk heavy equipment dengan teknisi bersertifikat.',
    'services.engineering.title': 'Engineering Support',
    'services.engineering.desc': 'Konsultasi teknis dan engineering support untuk optimalisasi operasi construction.',
    
    // Fleet Page
    'fleet.title': 'Armada / Peralatan',
    'fleet.subtitle': '200+ unit heavy equipment modern dari brand terkemuka dunia dengan maintenance berkala dan operator bersertifikat',
    'fleet.cranes.title': 'Mobile & Crawler Cranes',
    'fleet.earthmoving.title': 'Earthmoving Equipment',
    'fleet.specialized.title': 'Specialized Equipment',
    'fleet.transport.title': 'Transport Equipment',
    
    // Projects Page
    'projects.page.title': 'Proyek / Track Record',
    'projects.page.subtitle': 'Track record proyek PT. Mitra Kawan Bersama: 150+ completed projects untuk klien major dengan 99.8% safety record',
    'projects.stats.completed': 'Proyek Selesai',
    'projects.stats.clients': 'Klien Major',
    'projects.stats.experience': 'Tahun Pengalaman',
    'projects.stats.safety': 'Safety Record',
    'projects.featured.title': 'Proyek Unggulan',
    
    // News Page
    'news.title': 'Berita & Update',
    'news.subtitle': 'Berita terbaru, update proyek, dan insights industri dari PT. Mitra Kawan Bersama',
    'news.featured': 'Berita Utama',
    'news.recent': 'Berita Terbaru',
    'news.readmore': 'Baca Selengkapnya',
    'news.subscribe.title': 'Tetap Update',
    'news.subscribe.subtitle': 'Subscribe newsletter kami untuk mendapatkan update terbaru tentang project news, industry insights, dan company announcements.',
    'news.subscribe.cta': 'Subscribe',
    
    // News Posts
    'news.post1.title': 'PT. MKB Raih Penghargaan Best Safety Performance 2023',
    'news.post1.excerpt': 'PT. Mitra Kawan Bersama meraih penghargaan Best Safety Performance dari Indonesian Construction Safety Association untuk pencapaian zero accident selama 24 bulan berturut-turut.',
    'news.post2.title': 'Ekspansi Fleet: Tambahan 5 Unit Crawler Crane Terbaru',
    'news.post2.excerpt': 'Untuk mendukung proyek-proyek besar tahun 2024, PT. MKB menambah armada dengan 5 unit crawler crane berkapasitas 750-2300 ton dari Liebherr dan Manitowoc.',
    'news.post3.title': 'Kemitraan Strategis dengan Principal Internasional',
    'news.post3.excerpt': 'PT. MKB menandatangani kerjasama dengan 3 principal ternama dari Eropa untuk memperkuat portfolio heavy equipment dan expand market coverage.',
    
    // News Categories
    'news.category.all': 'Semua Berita',
    'news.category.company': 'Berita Perusahaan',
    'news.category.project': 'Update Proyek',
    'news.category.industry': 'Insights Industri',
    'news.category.safety': 'Keselamatan & Kepatuhan',
    
    // Contact Page
    'contact.page.title': 'Hubungi Kami',
    'contact.page.subtitle': 'Tim expert kami siap membantu Anda menemukan solusi heavy equipment rental yang tepat untuk project Anda.',
    'contact.location': 'Lokasi Kami',
    'contact.offices': 'Kantor Regional',
    'contact.emergency.title': 'Dukungan Darurat 24/7',
    'contact.emergency.subtitle': 'Untuk kebutuhan darurat atau breakdown equipment, tim support 24/7 kami siap membantu.',
    'contact.get.touch': 'Hubungi Tim Kami',
    'contact.map.address': 'Jl. Industri Raya No. 15, Kawasan Industri Pulo Gadung, Jakarta Timur 13920, Indonesia',
    
    // Partnership Page
    'partnership.page.title': 'Kemitraan',
    'partnership.page.subtitle': 'PT. Mitra Kawan Bersama menjalin kemitraan dengan berbagai principal dan supplier terkemuka, baik domestik maupun internasional, untuk memastikan ketersediaan produk berkualitas dengan harga kompetitif.',
    'partnership.global.title': 'Jaringan Kemitraan Global',
    'partnership.global.subtitle': 'Kami bermitra dengan manufacturer dan supplier terkemuka dari berbagai negara untuk menghadirkan teknologi dan produk terdepan bagi industri Indonesia.',
    'partnership.strategic.title': 'Kemitraan Strategis',
    'partnership.list.principals': 'Principal dari Eropa, Amerika, dan Asia',
    'partnership.list.manufacturers': 'Manufacturer dengan sertifikasi internasional',
    'partnership.list.suppliers': 'Supplier dengan track record yang terpercaya',
    'partnership.list.technology': 'Technology partners untuk solusi inovatif',
    'partnership.list.distributors': 'Authorized distributor untuk brand ternama',
    
    // Footer
    'footer.about': 'PT. Mitra Kawan Bersama adalah perusahaan heavy equipment rental terpercaya dengan 15+ tahun pengalaman melayani industri oil & gas, power plant, dan konstruksi di Indonesia.',
    'footer.quicklinks': 'Tautan Cepat',
    'footer.services': 'Layanan',
    'footer.contact': 'Kontak',
    'footer.followus': 'Ikuti Kami',
    'footer.copyright': '© 2024 PT. Mitra Kawan Bersama. All rights reserved.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.fleet': 'Fleet / Equipment',
    'nav.projects': 'Projects / Track Record',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Heavy Equipment Rental & Construction Support',
    'hero.subtitle': 'Your trusted partner for major construction projects with 200+ heavy equipment units and 15+ years of experience',
    'hero.cta.consultation': 'Free Consultation',
    'hero.cta.fleet': 'View Fleet',
    
    // Core Strengths
    'strengths.title': 'Why Choose PT. Mitra Kawan Bersama',
    'strengths.overtitle': 'Our Core Strengths',
    'strengths.experience.title': '15+ Years Experience',
    'strengths.experience.desc': 'Over 15 years of experience in heavy equipment rental and construction support for major projects.',
    'strengths.fleet.title': 'Premium Equipment Fleet',
    'strengths.fleet.desc': '200+ heavy equipment units from leading brands: Liebherr, Manitowoc, Demag, Grove with capacity up to 2300 tons.',
    'strengths.safety.title': '99.8% Safety Record',
    'strengths.safety.desc': 'Outstanding safety track record with zero accidents for 24 consecutive months.',
    'strengths.trusted.title': 'Trusted by Industry Leaders',
    'strengths.trusted.desc': 'Trusted by 50+ major clients including BP, PLN, Pertamina, Chevron, ExxonMobil for strategic projects.',
    
    // Key Projects
    'projects.title': 'Featured Project Achievements',
    'projects.overtitle': 'Key Projects',
    'projects.cta': 'View All Projects',
    
    // Quick Contact
    'contact.title': 'Ready to Start Your Project?',
    'contact.subtitle': 'Contact our expert team for consultation and quotation. We are ready to provide the best heavy equipment rental solutions for your project.',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.call': 'Call Us',
    'contact.cta': 'Free Consultation',
    
    // About Page
    'about.title': 'About PT. Mitra Kawan Bersama',
    'about.subtitle': 'Your trusted partner for heavy equipment rental and construction support solutions in Indonesia since 2010',
    'about.vision.title': 'Vision',
    'about.vision.content': 'To become the leading heavy equipment rental company in Southeast Asia that provides optimal added value to stakeholders.',
    'about.mission.title': 'Mission',
    'about.mission.content': 'Providing high-quality heavy equipment rental services with international safety standards to support Indonesia\'s infrastructure development.',
    'about.management.title': 'Management Team',
    'about.partners.title': 'Strategic Partners',
    
    // Services Page
    'services.title': 'Our Services',
    'services.subtitle': 'Complete heavy equipment rental and construction support solutions for various industrial needs',
    'services.rental.title': 'Heavy Equipment Rental',
    'services.rental.desc': 'Rent cranes, excavators, bulldozers, and other heavy equipment with experienced operators.',
    'services.heavylift.title': 'Heavy Lift Operations',
    'services.heavylift.desc': 'Heavy lifting operations for construction, oil & gas, and power plant projects with capacity up to 2300 tons.',
    'services.rigging.title': 'Rigging & Erection',
    'services.rigging.desc': 'Rigging and erection services for structural steel, pressure vessels, and industrial equipment.',
    'services.transportation.title': 'Heavy Transport',
    'services.transportation.desc': 'Heavy cargo transportation with lowbed trailers and specialized transport equipment.',
    'services.maintenance.title': 'Equipment Maintenance',
    'services.maintenance.desc': 'Maintenance and repair services for heavy equipment with certified technicians.',
    'services.engineering.title': 'Engineering Support',
    'services.engineering.desc': 'Technical consultation and engineering support for construction operation optimization.',
    
    // Fleet Page
    'fleet.title': 'Fleet / Equipment',
    'fleet.subtitle': '200+ modern heavy equipment units from world-renowned brands with regular maintenance and certified operators',
    'fleet.cranes.title': 'Mobile & Crawler Cranes',
    'fleet.earthmoving.title': 'Earthmoving Equipment',
    'fleet.specialized.title': 'Specialized Equipment',
    'fleet.transport.title': 'Transport Equipment',
    
    // Projects Page
    'projects.page.title': 'Projects / Track Record',
    'projects.page.subtitle': 'PT. Mitra Kawan Bersama track record: 150+ completed projects for major clients with 99.8% safety record',
    'projects.stats.completed': 'Completed Projects',
    'projects.stats.clients': 'Major Clients',
    'projects.stats.experience': 'Years Experience',
    'projects.stats.safety': 'Safety Record',
    'projects.featured.title': 'Featured Projects',
    
    // News Page
    'news.title': 'News & Updates',
    'news.subtitle': 'Latest news, project updates, and industry insights from PT. Mitra Kawan Bersama',
    'news.featured': 'Featured News',
    'news.recent': 'Recent News',
    'news.readmore': 'Read More',
    'news.subscribe.title': 'Stay Updated',
    'news.subscribe.subtitle': 'Subscribe to our newsletter to get the latest updates on project news, industry insights, and company announcements.',
    'news.subscribe.cta': 'Subscribe',
    
    // News Posts
    'news.post1.title': 'PT. MKB Wins Best Safety Performance Award 2023',
    'news.post1.excerpt': 'PT. Mitra Kawan Bersama received the Best Safety Performance award from Indonesian Construction Safety Association for achieving zero accidents for 24 consecutive months.',
    'news.post2.title': 'Fleet Expansion: Addition of 5 Latest Crawler Crane Units',
    'news.post2.excerpt': 'To support major projects in 2024, PT. MKB adds fleet with 5 crawler crane units with capacity of 750-2300 tons from Liebherr and Manitowoc.',
    'news.post3.title': 'Strategic Partnership with International Principals',
    'news.post3.excerpt': 'PT. MKB signs cooperation with 3 renowned European principals to strengthen heavy equipment portfolio and expand market coverage.',
    
    // News Categories
    'news.category.all': 'All News',
    'news.category.company': 'Company News',
    'news.category.project': 'Project Updates',
    'news.category.industry': 'Industry Insights',
    'news.category.safety': 'Safety & Compliance',
    
    // Contact Page
    'contact.page.title': 'Contact Us',
    'contact.page.subtitle': 'Our expert team is ready to help you find the right heavy equipment rental solutions for your project.',
    'contact.location': 'Our Location',
    'contact.offices': 'Regional Offices',
    'contact.emergency.title': '24/7 Emergency Support',
    'contact.emergency.subtitle': 'For urgent equipment breakdown or emergency rental needs, our 24/7 support team is ready to assist you.',
    
    // Partnership Page
    'partnership.page.title': 'Partnership',
    'partnership.page.subtitle': 'PT. Mitra Kawan Bersama establishes partnerships with various leading principals and suppliers, both domestic and international, to ensure the availability of quality products at competitive prices.',
    'partnership.global.title': 'Global Partnership Network',
    'partnership.global.subtitle': 'We partner with leading manufacturers and suppliers from various countries to bring cutting-edge technology and products to Indonesian industry.',
    'partnership.strategic.title': 'Strategic Partnership',
    'partnership.list.principals': 'Principals from Europe, America, and Asia',
    'partnership.list.manufacturers': 'Manufacturers with international certification',
    'partnership.list.suppliers': 'Suppliers with proven track record',
    'partnership.list.technology': 'Technology partners for innovative solutions',
    'partnership.list.distributors': 'Authorized distributors for renowned brands',
    
    // Contact Page Additional
    'contact.get.touch': 'Get in Touch with Our Team',
    'contact.map.address': 'Jl. Industri Raya No. 15, Kawasan Industri Pulo Gadung, Jakarta Timur 13920, Indonesia',
    
    // Footer
    'footer.about': 'PT. Mitra Kawan Bersama is a trusted heavy equipment rental company with 15+ years of experience serving the oil & gas, power plant, and construction industries in Indonesia.',
    'footer.quicklinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.followus': 'Follow Us',
    'footer.copyright': '© 2024 PT. Mitra Kawan Bersama. All rights reserved.',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('id');

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'id' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
