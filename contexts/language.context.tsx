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
    'nav.projects': 'Sertifikat & Pencapaian',
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
    'projects.title': 'Proyek Kami',
    'projects.overtitle': 'Pencapaian Utama',
    'projects.cta': 'Lihat Semua Pencapaian',
    
    // Quick Contact
    'contact.title': 'Siap Memulai Proyek Anda?',
    'contact.subtitle': 'Hubungi tim expert kami untuk consultation dan quotation. Kami siap memberikan solusi heavy equipment rental terbaik untuk project Anda.',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.call': 'Telepon',
    'contact.cta': 'Konsultasi Gratis',
    // CTA
    'cta.title': 'Siap untuk berkembang bersama mitra terpercaya? Hubungi kami sekarang!',
    'cta.contact': 'Hubungi Kami',
    'cta.about': 'Tentang Kami',
    
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
    'services.header.title': 'Layanan Peralatan Berat',
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

    // Services: Field Operations & Manpower
    'services.fieldops.title': '1. Field Operation Support',
    'services.fieldops.intro': 'MKB menawarkan solusi dukungan lapangan terintegrasi yang disesuaikan dengan kebutuhan unik industri migas. Dengan pengalaman operasional yang mendalam dan kapabilitas manajemen proyek yang terbukti, tim kami memastikan koordinasi yang mulus antara logistik, peralatan, dan personel di setiap tahap siklus proyek.',
    'services.fieldops.scopeTitle': 'Ruang lingkup dukungan kami meliputi:',
    'services.fieldops.item1': 'Mobilisasi rig dan lokasi – mengoordinasikan logistik dan pergerakan alat berat ke lokasi terpencil maupun offshore.',
    'services.fieldops.item2': 'Koordinasi operasional – menyediakan dukungan administratif dan teknis di lokasi untuk memastikan aktivitas harian memenuhi standar dan timeline klien.',
    'services.fieldops.item3': 'Perawatan dan inspeksi – melakukan preventive maintenance dan pemeriksaan operasional untuk menjamin keandalan peralatan dan kepatuhan keselamatan.',
    'services.fieldops.item4': 'Implementasi HSE – memperkuat praktik terbaik K3L di seluruh operasi lokasi sesuai ISO 45001 dan kebijakan perusahaan.',

    'services.manpower.title': '2. Manpower Supply',
    'services.manpower.desc': 'MKB menyediakan dukungan lapangan terintegrasi untuk kebutuhan industri migas, pertambangan, dan konstruksi. Dengan pengalaman operasional serta kapabilitas manajemen proyek yang kuat, kami memastikan koordinasi yang lancar antara logistik, peralatan, dan personel di seluruh tahapan proyek.',
    'services.manpower.scopeTitle': 'Ruang lingkup dukungan kami meliputi:',
    'services.manpower.item1': 'Mobilisasi rig dan lokasi – mengoordinasikan logistik dan pergerakan alat berat ke lokasi terpencil maupun offshore.',
    'services.manpower.item2': 'Koordinasi operasional – menyediakan dukungan administratif dan teknis di lokasi untuk memastikan aktivitas harian memenuhi standar dan timeline klien.',
    'services.manpower.item3': 'Perawatan dan inspeksi – melakukan preventive maintenance dan pemeriksaan operasional untuk menjamin keandalan peralatan dan kepatuhan keselamatan.',
    'services.manpower.item4': 'Implementasi HSE – memperkuat praktik terbaik K3L sesuai ISO 45001 dan kebijakan perusahaan.',

    // Services: Additional sections
    'services.lightvehicle.title': 'Dukungan Operasi Rental Kendaraan Ringan',
    'services.lightvehicle.desc': 'Kami menyediakan pilihan kendaraan ringan berkualitas untuk mendukung berbagai kebutuhan proyek, termasuk Double Cabin, Mini Bus, dan Elf Bus. Seluruh kendaraan dirawat sesuai standar tinggi untuk memastikan keandalan, kenyamanan, dan keselamatan selama operasional.',

    'services.mobilization.title': 'Mobilisasi dan De‑Mobilisasi Rig Moving',
    'services.mobilization.desc': 'Kami menyediakan layanan mobilisasi dan de‑mobilisasi yang efisien untuk memastikan pemindahan peralatan, kendaraan, dan personel ke dan dari lokasi proyek dengan aman dan tepat waktu.',
    'services.mobilization.item1.title': 'Respon Cepat',
    'services.mobilization.item1.desc': 'Perencanaan rute dan perizinan',
    'services.mobilization.item2.title': 'Penanganan Alat Berat',
    'services.mobilization.item2.desc': 'Transportasi alat berat dan ringan',
    'services.mobilization.item3.title': 'Dukungan Operasional',
    'services.mobilization.item3.desc': 'Koordinasi setup dan pembongkaran lokasi',
    'services.mobilization.item4.title': 'Manajemen Proyek',
    'services.mobilization.item4.desc': 'Kepatuhan keselamatan dan dukumentasi',
    
    // Service Page Examples
    'services.rental.title3': 'Lattice Crawler Cranes',
    'services.rental.title4': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',

    // Per-equipment (ID localized)
    'services.rental.lattice.brands': 'Merek: XCMG, Zoomlion, Sany, Shantui, dll',
    'services.rental.lattice.desc': 'Lattice Crawler Crane kami dirancang untuk performa pengangkatan maksimum pada proyek konstruksi skala besar dan operasi rig. Dibangun untuk stabilitas dan kapasitas tinggi, crane ini memberikan daya angkat dan presisi yang luar biasa di medan menantang, memastikan performa optimal untuk pengangkatan berat dan pekerjaan instalasi.',

    'services.rental.telescopic.brands': 'Merek: XCMG, Zoomlion, Shantui, dll',
    'services.rental.telescopic.desc': 'Telescopic Crawler Crane MKB menggabungkan mobilitas sistem crawler dengan fleksibilitas boom teleskopik. Dirancang untuk setup cepat dan operasi yang mulus, ideal untuk area terbatas dan lingkungan proyek dinamis yang menuntut tenaga dan fleksibilitas.',

    'services.rental.mobile.brands': 'Merek: SANY, XCMG, dll',
    'services.rental.mobile.desc': 'Mobile Crane kami dari SANY, XCMG, dll merupakan solusi pengangkatan yang efisien dan dapat berjalan di jalan raya, menawarkan mobilisasi cepat dan kemampuan angkat yang kuat. Cocok untuk proyek onshore maupun industri, memberikan operasi yang aman, andal, dan fleksibel untuk beragam kebutuhan.',

    'services.rental.bulldozer.brands': 'Merek: Caterpillar, Komatsu, Shantui, HOWO, dll',
    'services.rental.bulldozer.desc': 'Dilengkapi untuk pekerjaan pemindahan tanah dan persiapan lahan, Bulldozer MKB memberikan daya dan traksi yang unggul. Didukung merek terkemuka seperti Caterpillar, Komatsu, Shantui, dll, armada kami memastikan performa optimal untuk grading, clearing, dan material handling di berbagai medan.',

    'services.rental.foco.brands': 'Merek: HOWO, FAW, Sinotruck, dll',
    'services.rental.foco.desc': 'FOCO Truck kami dilengkapi crane hidrolik pemuat, memberikan solusi pengangkatan dan transportasi yang efisien. Sempurna untuk logistik di lokasi, mobilisasi peralatan, dan penanganan material, menawarkan fleksibilitas dan keselamatan untuk kebutuhan operasional harian.',

    'services.rental.lowbed.brands': 'Merek: FAW, Volvo, HOWO, Sinotruck, dll',
    'services.rental.lowbed.desc': 'Lowbed Truck MKB dirancang untuk transportasi yang aman dan efisien bagi alat berat dan muatan berukuran besar. Dengan kualitas konstruksi yang tangguh dan penggerak andal dari FAW dan Volvo, truk ini memastikan mobilitas yang mulus dan pengiriman peralatan berat yang aman.',

    'services.rental.highbed.brands': 'Merek: Volvo, Sinotruck, HOWO, dll',
    'services.rental.highbed.desc': 'Highbed Truck kami menyediakan kemampuan angkut yang kuat untuk material curah dan kargo umum. Didukung teknologi Volvo, Sino, dll, unit ini menawarkan durabilitas, stabilitas, dan adaptabilitas untuk berbagai operasi logistik lapangan.',

    'services.rental.vacuum.brands': 'Merek: Howo, Mitsubishi, Isuzu, FAW, Sinotruck, dll',
    'services.rental.vacuum.desc': 'Vacuum Truck dalam armada MKB terspesialisasi untuk pembersihan industri, penanganan limbah, dan penghisapan fluida. Didukung mesin yang andal dan sistem vakum yang kuat, unit ini memastikan operasi yang efisien dan ramah lingkungan di area onshore maupun lokasi terpencil.',

    'services.rental.cargo.brands': 'Merek: Isuzu, Mitsubishi, Sinotruck, SANY, dll',
    'services.rental.cargo.desc': 'Cargo Truck kami merupakan solusi transportasi serbaguna untuk material, peralatan, dan logistik umum. Dibangun dengan performa andal dan efisiensi bahan bakar, truk ini mendukung kelancaran operasional harian di berbagai lokasi proyek.',

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
    'nav.projects': 'Certifications & Achievements',
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
    

    // Core Strengths
    'strengthsachievment.title': 'Why Choose PT Mitra Kawan Bersama',
    'strengthsachievment.overtitle': 'Our Core Strengths',
    'strengthsachievment.experience.title': 'Remote Operations Expertise',
    'strengthsachievment.experience.desc': 'Proven expertise in remote field operations and logistics coordination.',
    'strengthsachievment.fleet.title': 'Certified Manpower',
    'strengthsachievment.fleet.desc': 'Access to a large pool of certified and experienced manpower.',
    'strengthsachievment.safety.title': 'Safety & Compliance',
    'strengthsachievment.safety.desc': 'Strong emphasis on safety, quality, and compliance.',
    'strengthsachievment.trusted.title': 'Fleet & Equipment Resources',
    'strengthsachievment.trusted.desc': 'Backed by comprehensive in-house equipment and fleet resources.',

    // Key Projects
    'projects.title': 'Our Projects',
    'projects.overtitle': 'Key Achievements',
    'projects.cta': 'View All Achievements',

    // Quick Contact
    'contact.title': 'Ready to Start Your Project?',
    'contact.subtitle': 'Contact our expert team for consultation and quotation. We are ready to provide the best heavy equipment rental solutions for your project.',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.call': 'Call Us',
    'contact.cta': 'Free Consultation',
    // CTA
    'cta.title': 'Ready to grow with a trusted partner? Contact us today!',
    'cta.contact': 'Contact Us',
    'cta.about': 'About Us',
    
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
    'services.header.title': 'Heavy Duty Equipment Services',
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

    // Services: Field Operations & Manpower
    'services.fieldops.title': 'Field Operation Support',
    'services.fieldops.intro': 'MKB offers integrated field support solutions tailored to meet the unique demands of the oil and gas industries. With deep operational experience and proven project management capability, our team ensures smooth coordination between logistics, equipment, and personnel at every stage of the project lifecycle.',
    'services.fieldops.scopeTitle': 'Our scope of support includes:',
    'services.fieldops.item1': 'Rig and site mobilization – coordinating logistics and heavy equipment movement to remote and offshore locations.',
    'services.fieldops.item2': 'Operational coordination – providing on-site administrative and technical support to ensure daily activities meet client standards and timelines.',
    'services.fieldops.item3': 'Maintenance and inspection – conducting preventive maintenance and operational checks to guarantee equipment reliability and safety compliance.',
    'services.fieldops.item4': 'HSE implementation – reinforcing Health, Safety, and Environmental (HSE) best practices across all site operations in accordance with ISO 45001 and company policies.',

    'services.manpower.title': 'Manpower Supply',
    'services.manpower.desc': 'MKB offers integrated field support solutions tailored to meet the unique demands of the oil and gas, mining, and construction industries. With deep operational experience and proven project management capability, our team ensures smooth coordination between logistics, equipment, and personnel at every stage of the project lifecycle.',
    'services.manpower.scopeTitle': 'Our scope of support includes:',
    'services.manpower.item1': 'Rig and site mobilization – coordinating logistics and heavy equipment movement to remote and offshore locations.',
    'services.manpower.item2': 'Operational coordination – providing on-site administrative and technical support to ensure daily activities meet client standards and timelines.',
    'services.manpower.item3': 'Maintenance and inspection – conducting preventive maintenance and operational checks to guarantee equipment reliability and safety compliance.',
    'services.manpower.item4': 'HSE implementation – reinforcing Health, Safety, and Environmental (HSE) best practices across all site operations in accordance with ISO 45001 and company policies.',

    'services.manpowerachivement.title': 'Manpower Supply',
    'services.manpowerachivement.desc': 'MKB provides qualified, trained, and certified personnel to meet diverse project requirements. Our manpower solutions are built around flexibility, compliance, and performance, ensuring that each deployment enhances productivity while maintaining strict adherence to safety and operational excellence.',
    'services.manpowerachivement.scopeTitle': 'Our manpower categories include:',
    'services.manpowerachivement.item1': 'Skilled technical workers (mechanics, operators, riggers, electricians, welders)',
    'services.manpowerachivement.item2': 'Professional and administrative staff (supervisors, logistics coordinators, HSE officers, project administrators)',
    'services.manpowerachivement.item3': 'Support personnel (drivers, helpers, camp crew, and other general support staff). We maintain a continuously updated database of experienced personnel, ready for both short-term project-based and long-term contract deployments across Indonesia',

    // Services: Additional sections
    'services.lightvehicle.title': 'Light Vehicle Rental Operation Support',
    'services.lightvehicle.desc': 'We offer a comprehensive selection of high-quality light vehicles to support a wide range of project requirements, including Double Cabins, Mini Buses, and Elf Buses. All vehicles are maintained to the highest standards to ensure reliability, comfort, and safety on the job.',

    'services.mobilization.title': 'Mobilization and De‑Mobilization Rig Moving',
    'services.mobilization.desc': 'We provide efficient mobilization and de‑mobilization services to ensure the timely and safe transfer of equipment, vehicles, and personnel to and from project sites.',
    'services.mobilization.item1.title': 'Rapid Response',
    'services.mobilization.item1.desc': 'Route and permit planning',
    'services.mobilization.item2.title': 'Heavy Equipment Handling',
    'services.mobilization.item2.desc': 'Transportation of heavy and light equipment',
    'services.mobilization.item3.title': 'Operational Support',
    'services.mobilization.item3.desc': 'Site setup and dismantling coordination',
    'services.mobilization.item4.title': 'Project Management',
    'services.mobilization.item4.desc': 'Safety compliance and documentation support',

    'services.achievment.title': 'Field Operations Support & Manpower Supply',
    'services.achievment.desc': 'At PT Mitra Kawan Bersama (MKB), we understand that the success of every project depends not only on equipment performance but also on the efficiency, expertise, and dedication of the people behind it. Our Field Operations Support & Manpower Supply services are designed to provide end-to-end operational assistance, ensuring that every aspect of site activity runs seamlessly, safely, and on schedule.',

    // Service Page Examples
    'services.rental.title3': 'Lattice Crawler Cranes',
    'services.rental.title4': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',

    // Per-equipment (EN shown for both languages until localized)
    'services.rental.lattice.brands': 'Brands: XCMG, Zoomlion, Sany, Shantui, etc',
    'services.rental.lattice.desc': 'Our Lattice Crawler Cranes are engineered for maximum lifting performance in large-scale construction and rig operations. Built for stability and high capacity, these cranes deliver exceptional lifting power and precision in challenging terrains, ensuring optimal performance for heavy lifting and installation projects.',

    'services.rental.telescopic.brands': 'Brands: XCMG, Zoomlion, Shantui, etc',
    'services.rental.telescopic.desc': 'MKB’s Telescopic Crawler Cranes combine the mobility of a crawler system with the versatility of a telescopic boom. Designed for rapid setup and smooth operation, they are ideal for confined spaces and dynamic project environments that demand both power and flexibility.',

    'services.rental.mobile.brands': 'Brands: Sany, XCMG, etc',
    'services.rental.mobile.desc': 'Our Mobile Cranes from SANY, XCMG, etc are highly efficient, roadable lifting solutions that offer rapid deployment and strong lifting capabilities. Suitable for both onshore and industrial projects, they provide safe, reliable, and flexible operations to meet diverse project needs.',

    'services.rental.bulldozer.brands': 'Brands: Caterpillar, Komatsu, Shantui, HOWO, etc',
    'services.rental.bulldozer.desc': 'Equipped for earthmoving and site preparation, MKB’s Bulldozers deliver superior power and traction. Supported by industry-leading brands like Caterpillar, Komatsu, Shantui, etc our fleet ensures optimal performance in grading, clearing, and material handling across various terrains.',

    'services.rental.foco.brands': 'Brands: HOWO, FAW, Sinotruck, etc',
    'services.rental.foco.desc': 'Our FOCO Trucks are equipped with hydraulic loading cranes, providing efficient lifting and transport solutions. Perfect for on-site logistics, equipment mobilization, and material handling, they offer versatility and safety for daily operational demands.',

    'services.rental.lowbed.brands': 'Brands: FAW, Volvo, HOWO, Sinotruck, etc',
    'services.rental.lowbed.desc': 'MKB’s Lowbed Trucks are designed for the safe and efficient transport of heavy machinery and oversized loads. With durable build quality and trusted powertrains from FAW and Volvo, these trucks ensure smooth mobility and secure delivery of heavy equipment.',

    'services.rental.highbed.brands': 'Brands: Volvo, Sinotruck, HOWO, etc',
    'services.rental.highbed.desc': 'Our Highbed Trucks provide strong hauling capabilities for bulk materials and general cargo. Supported by Volvo, Sino, etc technology, they offer durability, stability, and adaptability for a wide range of field logistics operations.',

    'services.rental.vacuum.brands': 'Brands: Howo, Mitsubishi, Isuzu, FAW, Sinotruck, etc',
    'services.rental.vacuum.desc': 'The Vacuum Trucks in MKB’s fleet are specialized for industrial cleaning, waste handling, and fluid removal. Backed by reliable engines and robust suction systems, these units ensure efficient and environmentally safe operations in both onshore and remote field sites.',

    'services.rental.cargo.brands': 'Brands: Isuzu, Mitsubishi, Sinotruck, SANY, etc',
    'services.rental.cargo.desc': 'Our Cargo Trucks are versatile transport solutions for materials, tools, and general logistics. Built with dependable performance and fuel efficiency in mind, these trucks support seamless day-to-day operations across project locations.',

    
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
    'contact.jakarta.title': 'Adresss Site',
    'contact.jakarta.address': 'Yard GWDC Duri, Jalan Lintas Duri–Dumai KM 14, Belakang Kantor Camat Bathin Solapan, Desa Sebangar, Kecamatan Bathin Solapan, Kabupaten Bengkalis, Provinsi Riau 28785',
    'contact.jakarta.phone': 'Semua email yg dikirim dari client dikirim ke info@mk.bersama.com *automatically cc ke darren@mk-bersama.com',
    // 'contact.jakarta.fax': '+62 21 4682 1235',
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
