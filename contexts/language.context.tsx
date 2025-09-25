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
    'nav.projects': 'Klien kami & Pencapaian',
    'nav.news': 'Berita',
    'nav.contact': 'Kontak',
    
    // Hero Section
    'hero.title': 'Heavy Equipment Rental & Construction Support',
    'hero.subtitle': 'Partner terpercaya untuk proyek konstruksi besar dengan 200+ unit heavy equipment dan pengalaman',
    'hero.cta.consultation': 'Konsultasi Gratis',
    'hero.cta.fleet': 'Lihat Armada',
    
    // Core Strengths
    'strengths.title': 'Mengapa Memilih PT Mitra Kawan Bersama',
    'strengths.overtitle': 'Kekuatan Inti Kami',
    'strengths.experience.title': 'Pengalaman',
    'strengths.experience.desc': 'Berpengalaman dalam heavy duty equipment rental dan construction support untuk major projects.',
    'strengths.fleet.title': 'Armada Premium Equipment',
    'strengths.fleet.desc': 'Unit heavy equipment dari brand terkemuka: Liebherr, Manitowoc, Demag, Grove dengan capacity hingga 2300 ton.',
    'strengths.safety.title': 'Safety Record',
    'strengths.safety.desc': 'Track record keselamatan yang outstanding dengan zero accident selama 24 bulan berturut-turut.',
    'strengths.trusted.title': 'Dipercaya Industry Leaders',
    'strengths.trusted.desc': 'Dipercaya oleh major clients termasuk BP, PLN, Pertamina, Chevron, ExxonMobil untuk proyek-proyek strategis.',
    
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
    'about.title': 'Tentang PT Mitra Kawan Bersama',
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
    'services.rental.title2': 'Kami menyediakan berbagai peralatan berat berkualitas tinggi untuk mendukung kebutuhan proyek Anda, termasuk:',
    'services.rental.desc': 'lattice crawler cranes, telescopic crawler cranes, mobile cranes, bulldozers, foco trucks, lowbed trucks, highbed trucks, vacuum trucks, cargo',
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
    
    // Service Page Examples
    'services.rental.title3': 'Lattice Crawler Cranes',
    'services.rental.title4': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',

    // Fleet Page
    'fleet.title': 'Armada / Peralatan',
    'fleet.subtitle': '200+ unit heavy equipment modern dari brand terkemuka dunia dengan maintenance berkala dan operator bersertifikat',
    'fleet.cranes.title': 'Mobile & Crawler Cranes',
    'fleet.earthmoving.title': 'Earthmoving Equipment',
    'fleet.specialized.title': 'Specialized Equipment',
    'fleet.transport.title': 'Transport Equipment',
    
    // Projects Page
    'projects.page.title': 'Proyek / Track Record',
    'projects.page.subtitle': 'Track record proyek PT Mitra Kawan Bersama:  completed projects untuk klien major dengan safety record',
    'projects.stats.completed': 'Proyek Selesai',
    'projects.stats.clients': 'Klien Major',
    'projects.stats.experience': 'Tahun Pengalaman',
    'projects.stats.safety': 'Safety Record',
    'projects.featured.title': 'Proyek Unggulan',
    
    // News Page
    'news.title': 'Berita & Update',
    'news.subtitle': 'Berita terbaru, update proyek, dan insights industri dari PT Mitra Kawan Bersama',
    'news.featured': 'Berita Utama',
    'news.recent': 'Berita Terbaru',
    'news.readmore': 'Baca Selengkapnya',
    'news.subscribe.title': 'Tetap Update',
    'news.subscribe.subtitle': 'Subscribe newsletter kami untuk mendapatkan update terbaru tentang project news, industry insights, dan company announcements.',
    'news.subscribe.cta': 'Subscribe',
    
    // News Posts
    'news.post1.title': 'PT MKB Raih Penghargaan Best Safety Performance 2023',
    'news.post1.excerpt': 'PT Mitra Kawan Bersama meraih penghargaan Best Safety Performance dari Indonesian Construction Safety Association untuk pencapaian zero accident selama 24 bulan berturut-turut.',
    'news.post2.title': 'Ekspansi Fleet: Tambahan 5 Unit Crawler Crane Terbaru',
    'news.post2.excerpt': 'Untuk mendukung proyek-proyek besar tahun 2024, PT MKB menambah armada dengan 5 unit crawler crane berkapasitas 750-2300 ton dari Liebherr dan Manitowoc.',
    'news.post3.title': 'Kemitraan Strategis dengan Principal Internasional',
    'news.post3.excerpt': 'PT MKB menandatangani kerjasama dengan 3 principal ternama dari Eropa untuk memperkuat portfolio heavy equipment dan expand market coverage.',
    
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
    
    // Contact Information
    'contact.info.title': 'Informasi Kontak',
    'contact.jakarta.title': 'Kantor Pusat Jakarta',
    'contact.jakarta.address': 'The East Floor 35 Unit 3, Jalan Doktor Ide Anak Agung Gde Agung, Jl. Kuningan Barat Raya No.1, RT.5/RW.2, Kuningan, Kuningan Bar., Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950',
    'contact.jakarta.phone': '+62 21 4682 1234',
    'contact.jakarta.fax': '+62 21 4682 1235',
    'contact.duri.title': 'Duri Yard - Operational Base',
    'contact.duri.address': 'Jl. Lintas Timur KM 85, Duri, Bengkalis, Riau 28784, Indonesia',
    'contact.duri.phone': '+62 765 41234',
    'contact.duri.fax': '+62 765 41235',
    
    // Contact Persons
    'contact.persons.title': 'Tim Kontak',
    'contact.sales.title': 'Sales Manager',
    'contact.sales.name': 'Budi Santoso',
    'contact.sales.phone': '+62 812 3456 7890',
    'contact.sales.email': 'budi.santoso@mitrakawanbersama.co.id',
    'contact.operations.title': 'Operations Manager',
    'contact.operations.name': 'Sari Widiastuti',
    'contact.operations.phone': '+62 813 4567 8901',
    'contact.operations.email': 'sari.widiastuti@mitrakawanbersama.co.id',
    'contact.technical.title': 'Technical Support',
    'contact.technical.name': 'Agus Pratama',
    'contact.technical.phone': '+62 814 5678 9012',
    'contact.technical.email': 'agus.pratama@mitrakawanbersama.co.id',
    
    // Contact Form
    'contact.form.title': 'Form Inquiry Online',
    'contact.form.subtitle': 'Silakan isi form di bawah ini untuk mendapatkan quotation atau informasi lebih lanjut.',
    'contact.form.name': 'Nama Lengkap',
    'contact.form.company': 'Nama Perusahaan',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Nomor Telepon',
    'contact.form.project.type': 'Jenis Proyek',
    'contact.form.equipment.needed': 'Equipment yang Dibutuhkan',
    'contact.form.project.location': 'Lokasi Proyek',
    'contact.form.duration': 'Durasi Rental',
    'contact.form.message': 'Pesan/Detail Requirements',
    'contact.form.submit': 'Kirim Inquiry',
    'contact.form.reset': 'Reset Form',
    
    // Partnership Page
    'partnership.page.title': 'Kemitraan',
    'partnership.page.subtitle': 'PT Mitra Kawan Bersama menjalin kemitraan dengan berbagai principal dan supplier terkemuka, baik domestik maupun internasional, untuk memastikan ketersediaan produk berkualitas dengan harga kompetitif.',
    'partnership.global.title': 'Jaringan Kemitraan Global',
    'partnership.global.subtitle': 'Kami bermitra dengan manufacturer dan supplier terkemuka dari berbagai negara untuk menghadirkan teknologi dan produk terdepan bagi industri Indonesia.',
    'partnership.strategic.title': 'Kemitraan Strategis',
    'partnership.list.principals': 'Principal dari Eropa, Amerika, dan Asia',
    'partnership.list.manufacturers': 'Manufacturer dengan sertifikasi internasional',
    'partnership.list.suppliers': 'Supplier dengan track record yang terpercaya',
    'partnership.list.technology': 'Technology partners untuk solusi inovatif',
    'partnership.list.distributors': 'Authorized distributor untuk brand ternama',
    
    // Footer
    'footer.about': 'PT Mitra Kawan Bersama adalah perusahaan heavy equipment rental terpercaya dengan pengalaman melayani industri oil & gas, power plant, dan konstruksi di Indonesia.',
    'footer.quicklinks': 'Tautan Cepat',
    'footer.services': 'Layanan',
    'footer.contact': 'Kontak',
    'footer.followus': 'Ikuti Kami',
    'footer.copyright': '© 2024 PT Mitra Kawan Bersama. All rights reserved.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.fleet': 'Fleet / Equipment',
    'nav.projects': 'Our Clients & Achievements',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Heavy Equipment Rental & Construction Support',
    'hero.subtitle': 'Your trusted partner for major construction projects with 200+ heavy equipment units and of experience',
    'hero.cta.consultation': 'Free Consultation',
    'hero.cta.fleet': 'View Fleet',
    
    // Core Strengths
    'strengths.title': 'Why Choose PT Mitra Kawan Bersama',
    'strengths.overtitle': 'Our Core Strengths',
    'strengths.experience.title': 'Experience',
    'strengths.experience.desc': 'Experience in heavy equipment rental and construction support.',
    'strengths.fleet.title': 'Premium Equipment Fleet',
    'strengths.fleet.desc': '200+ heavy equipment units from leading brands: Liebherr, Manitowoc, Demag, Grove with capacity up to 2300 tons.',
    'strengths.safety.title': 'Safety Record',
    'strengths.safety.desc': 'Outstanding safety track record with zero accidents for 24 consecutive months.',
    'strengths.trusted.title': 'Trusted by Industry Leaders',
    'strengths.trusted.desc': 'Trusted by major clients including BP, PLN, Pertamina, Chevron, ExxonMobil for strategic projects.',
    
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
    'about.title': 'About PT Mitra Kawan Bersama',
    'about.subtitle': 'Established in 2021, Mitra Kawan Bersama Group is a company specializing in heavy-duty equipment, light vehicle and mini bus provider for drilling rig, workovers rig, rig services, recognized for its innovation in the oil field services. Built on a strong foundation of excellence and a deep commitment to customer satisfaction, these core values have played a key role in driving our growth and success. In addition to equipment services, we also provide mobilizations de-mobilizations and professional manpower solutions, offering highly skilled and experienced personnel to support various operational needs in the oil and gas industry.',
    'about.vision.title': 'Vision',
    'about.vision.content': 'Our vision is to set a new benchmark in the industry by continuously pushing boundaries—driven by innovation and a deep commitment to sustainability. We strive to lead with purpose, creating impactful solutions that shape the future of the oil and gas sector.',
    'about.mission.title': 'Mission',
    'about.mission.content': 'Our mission is to empower our clients through transformative, high-impact solutions while cultivating a culture of ongoing improvement and excellence. These principles guide every aspect of our daily operations, inspiring us to not only surpass client expectations but also make meaningful contributions to the communities we serve.',
    'about.management.title': 'Management Team',
    'about.partners.title': 'Strategic Partners',
    
    // Services Page
    'services.title': 'Our Services',
    'services.subtitle': 'Complete heavy equipment rental and construction support solutions for various industrial needs',
    'services.rental.title': 'Heavy Equipment Rental',
    'services.rental.title2': 'We provide a wide range of high-quality heavy equipment to support your project needs, including:',
    'services.rental.desc': 'lattice crawler cranes, telescopic crawler cranes, mobile cranes, bulldozers, foco trucks, lowbed trucks, highbed trucks, vacuum trucks, cargo',
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


    // Service Page Examples
    'services.rental.title3': 'Lattice Crawler Cranes',
    'services.rental.title4': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',

    
    // Fleet Page
    'fleet.title': 'Fleet / Equipment',
    'fleet.subtitle': '200+ modern heavy equipment units from world-renowned brands with regular maintenance and certified operators',
    'fleet.cranes.title': 'Mobile & Crawler Cranes',
    'fleet.earthmoving.title': 'Earthmoving Equipment',
    'fleet.specialized.title': 'Specialized Equipment',
    'fleet.transport.title': 'Transport Equipment',
    
    // Projects Page
    'projects.page.title': 'Projects / Track Record',
    'projects.page.subtitle': 'PT Mitra Kawan Bersama track record:  completed projects for major clients with safety record',
    'projects.stats.completed': 'Completed Projects',
    'projects.stats.clients': 'Major Clients',
    'projects.stats.experience': 'Years Experience',
    'projects.stats.safety': 'Safety Record',
    'projects.featured.title': 'Featured Projects',
    
    // News Page
    'news.title': 'News & Updates',
    'news.subtitle': 'Latest news, project updates, and industry insights from PT Mitra Kawan Bersama',
    'news.featured': 'Featured News',
    'news.recent': 'Recent News',
    'news.readmore': 'Read More',
    'news.subscribe.title': 'Stay Updated',
    'news.subscribe.subtitle': 'Subscribe to our newsletter to get the latest updates on project news, industry insights, and company announcements.',
    'news.subscribe.cta': 'Subscribe',
    
    // News Posts
    'news.post1.title': 'PT MKB Wins Best Safety Performance Award 2023',
    'news.post1.excerpt': 'PT Mitra Kawan Bersama received the Best Safety Performance award from Indonesian Construction Safety Association for achieving zero accidents for 24 consecutive months.',
    'news.post2.title': 'Fleet Expansion: Addition of 5 Latest Crawler Crane Units',
    'news.post2.excerpt': 'To support major projects in 2024, PT MKB adds fleet with 5 crawler crane units with capacity of 750-2300 tons from Liebherr and Manitowoc.',
    'news.post3.title': 'Strategic Partnership with International Principals',
    'news.post3.excerpt': 'PT MKB signs cooperation with 3 renowned European principals to strengthen heavy equipment portfolio and expand market coverage.',
    
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
    'contact.get.touch': 'Get In Touch',
    'contact.map.address': 'Jl. Raya Industri No. 123, Kawasan Industri Pulo Gadung, Jakarta Timur 13920, Indonesia',
    
    // Contact Information
    'contact.info.title': 'Contact Information',
    'contact.jakarta.title': 'Jakarta Head Office',
    'contact.jakarta.address': 'The East Floor 35 Unit 3, Jalan Doktor Ide Anak Agung Gde Agung, Jl. Kuningan Barat Raya No.1, RT.5/RW.2, Kuningan, Kuningan Bar., Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950',
    'contact.jakarta.phone': '+62 21 4682 1234',
    'contact.jakarta.fax': '+62 21 4682 1235',
    'contact.duri.title': 'Duri Yard - Operational Base',
    'contact.duri.address': 'Jl. Lintas Timur KM 85, Duri, Bengkalis, Riau 28784, Indonesia',
    'contact.duri.phone': '+62 765 41234',
    'contact.duri.fax': '+62 765 41235',
    
    // Contact Persons
    'contact.persons.title': 'Contact Team',
    'contact.sales.title': 'Sales Manager',
    'contact.sales.name': 'Budi Santoso',
    'contact.sales.phone': '+62 812 3456 7890',
    'contact.sales.email': 'budi.santoso@mitrakawanbersama.co.id',
    'contact.operations.title': 'Operations Manager',
    'contact.operations.name': 'Sari Widiastuti',
    'contact.operations.phone': '+62 813 4567 8901',
    'contact.operations.email': 'sari.widiastuti@mitrakawanbersama.co.id',
    'contact.technical.title': 'Technical Support',
    'contact.technical.name': 'Agus Pratama',
    'contact.technical.phone': '+62 814 5678 9012',
    'contact.technical.email': 'agus.pratama@mitrakawanbersama.co.id',
    
    // Contact Form
    'contact.form.title': 'Online Inquiry Form',
    'contact.form.subtitle': 'Please fill out the form below to get a quotation or more information.',
    'contact.form.name': 'Full Name',
    'contact.form.company': 'Company Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone Number',
    'contact.form.project.type': 'Project Type',
    'contact.form.equipment.needed': 'Equipment Needed',
    'contact.form.project.location': 'Project Location',
    'contact.form.duration': 'Rental Duration',
    'contact.form.message': 'Message/Detail Requirements',
    'contact.form.submit': 'Send Inquiry',
    'contact.form.reset': 'Reset Form',
    
    // SEO Meta Tags
    'seo.home.title': 'PT Mitra Kawan Bersama - Trusted Heavy Equipment Rental & Construction Support',
    'seo.home.description': 'PT Mitra Kawan Bersama is a trusted heavy equipment rental company with 200+ equipment units and  experience. Serving crane rental, heavy lift operations for oil & gas, power plant, and industrial projects.',
    'seo.home.keywords': 'heavy equipment rental, crane rental, construction equipment, oil gas equipment, power plant construction, industrial equipment, Jakarta Indonesia',
    
    'seo.fleet.title': 'Heavy Equipment Fleet - Crane, Excavator, Bulldozer | PT Mitra Kawan Bersama',
    'seo.fleet.description': 'Complete heavy equipment fleet of PT Mitra Kawan Bersama with 200+ premium equipment units including Liebherr cranes up to 2300 tons, excavators, bulldozers, and lowbed trucks for major construction projects.',
    'seo.fleet.keywords': 'heavy equipment fleet, Liebherr crane, excavator, bulldozer, lowbed truck, heavy equipment Jakarta, construction equipment rental',
    
    'seo.services.title': 'Heavy Equipment Rental & Construction Support Services | PT Mitra Kawan Bersama',
    'seo.services.description': 'Comprehensive services by PT Mitra Kawan Bersama: heavy equipment rental, crane operations, heavy lift services, rig move, project management for oil & gas, power plant, and industrial construction.',
    'seo.services.keywords': 'heavy equipment rental service, crane operations, heavy lift services, rig move, project management, oil gas services, power plant construction',
    
    'seo.projects.title': 'Projects & Track Record - LNG, Power Plant, Oil Refinery | PT Mitra Kawan Bersama',
    'seo.projects.description': 'Successful project track record of PT Mitra Kawan Bersama including LNG Plant Tangguh, PLTU Jawa-7, Oil Refinery Cilacap with total project value USD 500+ million. Trusted by BP, PLN, Pertamina.',
    'seo.projects.keywords': 'LNG projects, power plant construction, oil refinery, MKB track record, major projects Indonesia, BP Indonesia, PLN, Pertamina',
    
    'seo.about.title': 'About PT Mitra Kawan Bersama - Heavy Equipment Rental Expert Indonesia',
    'seo.about.description': 'PT Mitra Kawan Bersama established in 2008 as heavy equipment rental specialist. experience, 200+ equipment units, safety record, serving major clients in Indonesia.',
    'seo.about.keywords': 'about MKB, company profile, heavy equipment specialist, Jakarta equipment rental, oil gas contractor, industrial equipment',
    
    'seo.news.title': 'Latest News & Updates - Heavy Equipment Industry | PT Mitra Kawan Bersama',
    'seo.news.description': 'Latest news and heavy equipment industry updates from PT Mitra Kawan Bersama. Information on latest projects, equipment technology, and construction industry developments in Indonesia.',
    'seo.news.keywords': 'heavy equipment news, construction industry updates, MKB news, construction industry Indonesia, equipment technology news',
    
    'seo.contact.title': 'Contact PT Mitra Kawan Bersama - Heavy Equipment Rental Jakarta',
    'seo.contact.description': 'Contact PT Mitra Kawan Bersama for heavy equipment rental consultation. Jakarta office at The East Building Kuningan. Phone +62 21 5799 0701, Email info@mkb.co.id. Free consultation 24/7.',
    'seo.contact.keywords': 'contact MKB, heavy equipment rental Jakarta, equipment rental consultation, The East Building Kuningan, emergency support 24/7',
    
    // Partnership Page
    'partnership.page.title': 'Partnership',
    'partnership.page.subtitle': 'PT Mitra Kawan Bersama establishes partnerships with various leading principals and suppliers, both domestic and international, to ensure the availability of quality products at competitive prices.',
    'partnership.global.title': 'Global Partnership Network',
    'partnership.global.subtitle': 'We partner with leading manufacturers and suppliers from various countries to bring cutting-edge technology and products to Indonesian industry.',
    'partnership.strategic.title': 'Strategic Partnership',
    'partnership.list.principals': 'Principals from Europe, America, and Asia',
    'partnership.list.manufacturers': 'Manufacturers with international certification',
    'partnership.list.suppliers': 'Suppliers with proven track record',
    'partnership.list.technology': 'Technology partners for innovative solutions',
    'partnership.list.distributors': 'Authorized distributors for renowned brands',
    
    // Footer
    'footer.about': 'PT Mitra Kawan Bersama is a trusted heavy equipment rental company with  experience serving the oil & gas, power plant, and construction industries in Indonesia.',
    'footer.quicklinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.followus': 'Follow Us',
    'footer.copyright': '© 2024 PT Mitra Kawan Bersama. All rights reserved.',
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
