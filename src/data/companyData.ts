import {
  ConsultationCategory,
  DirectorProfile,
  Language,
  LegalityItem,
  PortfolioItem,
  ServiceItem,
} from '../types';

export const COMPANY_CONFIG = {
  companyName: 'PT Foremed Indo Industri',
  brandName: 'FII Kidney Health',
  foundedYear: '2025',
  address:
    'Jl. Prof. Dr. Latumenten No.109 A, Angke, Kec. Tambora, Kota Jakarta Barat, DKI Jakarta, 11330',
  email: 'foremedindo@gmail.com',
  // Nomor WhatsApp resmi tim konsultasi & KSO PT Foremed Indo Industri.
  whatsappNumberRaw: '628999088800',
  whatsappNumberDisplay: '+62 899-9088-800',
  googleMapsEmbedUrl:
    'https://www.google.com/maps?q=Jl.+Prof.+Dr.+Latumenten+No.109+A,+Angke,+Tambora,+Jakarta+Barat+11330&output=embed',
  googleMapsDirectUrl:
    'https://www.google.com/maps/search/?api=1&query=Jl.+Prof.+Dr.+Latumenten+No.109+A,+Angke,+Tambora,+Jakarta+Barat,+11330',
  socials: {
    linkedin: 'https://www.linkedin.com/company/pt-foremed-indo-industri',
    instagram: 'https://www.instagram.com/fiikidneyhealth',
    youtube: 'https://www.youtube.com/@fiikidneyhealth',
  },
};

export const LOCAL_ASSETS = {
  heroDialysis: '/src/assets/images/hero_dialysis_suite_1795435008384.jpg',
  aboutHospital: '/src/assets/images/about_hospital_facility_1795435009242.jpg',
  portfolioHdWard: '/src/assets/images/portfolio_hd_ward_1795435009119.jpg',
  portfolioRadiology: '/src/assets/images/portfolio_radiology_suite_1795435009266.jpg',
  portfolioTraining: '/src/assets/images/portfolio_biomedical_training_1795435011165.jpg',
  portfolioRoSystem: '/src/assets/images/portfolio_ro_system_1795435010091.jpg',
  directorNicholas: '/src/assets/images/director_nicholas_1795435009027.jpg',
  directorLutfi: '/src/assets/images/director_lutfi_1795435009485.jpg',
  directorWilliam: '/src/assets/images/director_william_1795435028542.jpg',
  directorAndy: '/src/assets/images/director_andy_1795435008295.jpg',
};

export const CONSULTATION_CATEGORIES: ConsultationCategory[] = [
  'KSO Mesin Haemodialisa',
  'Pengadaan Alkes & Radiologi',
  'Maintenance & After-Sales',
  'Kemitraan Vendor/Prinsipal',
  'Lainnya',
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    number: '01',
    title: {
      id: 'Kerja Sama Operasional (KSO) Mesin Haemodialisa',
      en: 'Hemodialysis Machine Operational Cooperation (KSO)',
    },
    description: {
      id: 'Penyediaan sistem mesin haemodialisa modern beserta Barang Habis Pakai (BHP) dengan skema bagi hasil yang kompetitif tanpa membebani belanja modal awal rumah sakit.',
      en: 'Provision of modern hemodialysis machine systems along with medical consumables (BHP) under a competitive revenue-sharing scheme with zero upfront hospital CapEx burden.',
    },
    highlights: {
      id: ['Skema Revenue Sharing Transparan', 'Termasuk Pasokan BHP Rutin'],
      en: ['Transparent Revenue Sharing', 'Routine Consumables Included'],
    },
    iconName: 'Activity',
  },
  {
    number: '02',
    title: {
      id: 'Penyediaan & Distribusi Alat Kesehatan',
      en: 'Medical Device & Consumables Supply',
    },
    description: {
      id: 'Pengadaan dan distribusi teknologi medis terkini meliputi perangkat radiologi diagnostik serta Bahan Medis Habis Pakai (BMHP) berstandar klinis untuk rumah sakit.',
      en: 'Procurement and nationwide distribution of modern medical technologies including diagnostic radiology systems and clinical-grade hospital consumables (BMHP).',
    },
    highlights: {
      id: ['Perangkat Radiologi Modern', 'Ketersediaan BMHP Terjamin'],
      en: ['Modern Radiology Systems', 'Guaranteed BMHP Availability'],
    },
    iconName: 'Stethoscope',
  },
  {
    number: '03',
    title: {
      id: 'Maintenance & Layanan Purna Jual',
      en: 'Preventive Maintenance & After-Sales Support',
    },
    description: {
      id: 'Pemeliharaan berkala, kalibrasi presisi, serta dukungan teknis cepat (after-sales service) yang terintegrasi untuk menjamin kelancaran operasional ruang layanan klinis.',
      en: 'Scheduled preventive maintenance, precision calibration, and rapid integrated technical after-sales support to guarantee uninterrupted clinical unit operations.',
    },
    highlights: {
      id: ['Preventive Maintenance Berkala', 'Respon Teknis Terjadwal'],
      en: ['Scheduled Preventive Maintenance', 'Dedicated Technical Response'],
    },
    iconName: 'Wrench',
  },
  {
    number: '04',
    title: {
      id: 'Edukasi & Pelatihan SDM Rumah Sakit',
      en: 'Hospital Clinical Staff Education & Training',
    },
    description: {
      id: 'Program pelatihan dan pendampingan teknis komprehensif bagi dokter serta perawat mengenai pengoperasian, keselamatan pasien, dan pengelolaan alat kesehatan terkini.',
      en: 'Comprehensive hands-on technical training and mentoring for physicians and nurses covering equipment operation, patient safety, and medical device management.',
    },
    highlights: {
      id: ['Pelatihan Dokter & Perawat HD', 'Transfer Teknologi Global'],
      en: ['Physician & Dialysis Nurse Training', 'Global Technology Transfer'],
    },
    iconName: 'GraduationCap',
  },
];

export const KSO_OBLIGATIONS: Record<
  'fii' | 'hospital',
  Record<Language, string[]>
> = {
  fii: {
    id: [
      'Penyediaan sistem mesin haemodialisa modern siap operasional',
      'Penyediaan barang medis pendukung & Barang Habis Pakai (BHP)',
      'Dukungan teknis, kalibrasi, & pemeliharaan alat berkala',
      'Pelatihan tenaga medis rumah sakit (dokter & perawat)',
    ],
    en: [
      'Provision of operational-ready modern hemodialysis machine systems',
      'Continuous supply of supporting medical consumables (BHP)',
      'Dedicated technical support, calibration, & scheduled maintenance',
      'Comprehensive training for hospital medical staff (physicians & nurses)',
    ],
  },
  hospital: {
    id: [
      'Penyediaan fasilitas dan ruang layanan haemodialisa',
      'Penyediaan tenaga medis bersertifikat (dokter & perawat)',
      'Infrastruktur pendukung utama (listrik dan instalasi air/RO)',
    ],
    en: [
      'Provision of clinical facility and dedicated hemodialysis treatment room',
      'Provision of certified medical personnel (physicians & nurses)',
      'Core utility infrastructure (electrical power & water/RO installation)',
    ],
  },
};

export const INITIAL_PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'proj-hd-mitra-husada',
    title: 'Instalasi Unit Haemodialisa Terpadu (12 Station)',
    titleEn: 'Integrated Hemodialysis Unit Installation (12 Stations)',
    category: 'KSO Haemodialisa',
    mediaType: 'IMAGE',
    thumbnailUrl: LOCAL_ASSETS.portfolioHdWard,
    mediaUrl: LOCAL_ASSETS.portfolioHdWard,
    location: 'RS Mitra Husada — Jakarta',
    locationEn: 'RS Mitra Husada — Jakarta',
    year: '2025',
    description:
      'Implementasi penuh unit haemodialisa berbasis KSO Revenue Sharing meliputi penataan 12 unit mesin dialisis generasi terbaru, jalur utilitas klinis, serta suplai BHP terjadwal.',
    descriptionEn:
      'Full deployment of a revenue-sharing KSO hemodialysis unit covering 12 latest-generation dialysis stations, clinical utility routing, and scheduled consumables replenishment.',
    specs: ['12 Unit Mesin HD', 'Skema Revenue Sharing', 'Suplai BHP Terpadu'],
    specsEn: ['12 HD Machine Units', 'Revenue Sharing Model', 'Integrated BHP Supply'],
  },
  {
    id: 'proj-hd-sentra-medika-vid',
    title: 'Video Commissioning Unit Dialisis & Integrasi Ruang Pasien',
    titleEn: 'Dialysis Unit Commissioning & Patient Bay Integration Video',
    category: 'KSO Haemodialisa',
    mediaType: 'VIDEO',
    thumbnailUrl: LOCAL_ASSETS.heroDialysis,
    mediaUrl: LOCAL_ASSETS.heroDialysis,
    location: 'RSUD Sentra Medika — Jawa Barat',
    locationEn: 'RSUD Sentra Medika — West Java',
    year: '2026',
    description:
      'Dokumentasi uji fungsi menyeluruh, verifikasi tekanan aliran dialisat, serta serah terima operasional ruang layanan haemodialisa bersama tim manajemen rumah sakit.',
    descriptionEn:
      'Documentation of end-to-end functional commissioning, dialysate flow pressure verification, and operational handover of the hemodialysis suite with hospital leadership.',
    specs: ['Uji Fungsi 100% Lolos', 'Monitoring Real-Time', 'Siap Layanan BPJS'],
    specsEn: ['100% Commissioning Passed', 'Real-Time Monitoring', 'BPJS Care Ready'],
    videoHighlights: [
      '00:00 — Inspeksi tata letak 10 bay pasien & panel listrik medis',
      '00:12 — Kalibrasi mesin haemodialisa & verifikasi kualitas air RO',
      '00:24 — Briefing operasional klinis bersama kepala instalasi dialisis',
    ],
    videoHighlightsEn: [
      '00:00 — Inspection of 10-bay patient layout & medical power panels',
      '00:12 — Hemodialysis machine calibration & RO water purity verification',
      '00:24 — Clinical operational briefing with the dialysis unit head',
    ],
  },
  {
    id: 'proj-rad-harapan-bangsa',
    title: 'Pengadaan & Integrasi Ruang Radiologi Diagnostik Digital',
    titleEn: 'Digital Diagnostic Radiology Suite Procurement & Integration',
    category: 'Radiologi & Alkes',
    mediaType: 'IMAGE',
    thumbnailUrl: LOCAL_ASSETS.portfolioRadiology,
    mediaUrl: LOCAL_ASSETS.portfolioRadiology,
    location: 'RS Harapan Bangsa — Surabaya',
    locationEn: 'RS Harapan Bangsa — Surabaya',
    year: '2025',
    description:
      'Pengadaan perangkat pencitraan radiologi resolusi tinggi lengkap dengan ruang kendali berpelindung timbal serta sistem kalibrasi dosis radiasi standar nasional.',
    descriptionEn:
      'Supply and setup of high-resolution digital radiology imaging equipment complete with lead-shielded control room and national-standard radiation dose calibration.',
    specs: ['Digital Imaging Suite', 'Ruang Kontrol Terintegrasi', 'Garansi Purna Jual'],
    specsEn: ['Digital Imaging Suite', 'Integrated Control Room', 'After-Sales Warranty'],
  },
  {
    id: 'proj-train-bhakti-mulia-vid',
    title: 'Video Pelatihan Klinis & Kalibrasi Perawat Haemodialisa',
    titleEn: 'Clinical Training & Calibration Video for Dialysis Nurses',
    category: 'Pelatihan & Maintenance',
    mediaType: 'VIDEO',
    thumbnailUrl: LOCAL_ASSETS.portfolioTraining,
    mediaUrl: LOCAL_ASSETS.portfolioTraining,
    location: 'RSU Bhakti Mulia — Tangerang',
    locationEn: 'RSU Bhakti Mulia — Tangerang',
    year: '2026',
    description:
      'Sesi transfer pengetahuan teknis dari tim engineering biomedis PT Foremed Indo Industri kepada perawat dan dokter penanggung jawab unit dialisis.',
    descriptionEn:
      'Technical knowledge-transfer session conducted by PT Foremed Indo Industri biomedical engineers for dialysis nurses and supervising physicians.',
    specs: ['Sertifikasi Operasional', 'Simulasi Penanganan Alarm', 'Modul SOP Lengkap'],
    specsEn: ['Operational Certification', 'Alarm Handling Drill', 'Complete SOP Modules'],
    videoHighlights: [
      '00:00 — Pengenalan antarmuka kontrol ultrafiltrasi & keamanan pasien',
      '00:14 — Simulasi prosedur priming sirkuit ekstrakorporeal',
      '00:26 — Evaluasi kompetensi tim keperawatan dan uji kalibrasi harian',
    ],
    videoHighlightsEn: [
      '00:00 — Introduction to ultrafiltration control UI & patient safety',
      '00:14 — Hands-on extracorporeal circuit priming simulation',
      '00:26 — Nursing team competency evaluation & daily calibration check',
    ],
  },
  {
    id: 'proj-ro-ginjal-sejahtera',
    title: 'Instalasi Sistem Water Treatment Reverse Osmosis (RO) Medis',
    titleEn: 'Medical Reverse Osmosis (RO) Water Treatment Installation',
    category: 'KSO Haemodialisa',
    mediaType: 'IMAGE',
    thumbnailUrl: LOCAL_ASSETS.portfolioRoSystem,
    mediaUrl: LOCAL_ASSETS.portfolioRoSystem,
    location: 'Klinik Utama Ginjal Sejahtera — Bandung',
    locationEn: 'Klinik Utama Ginjal Sejahtera — Bandung',
    year: '2025',
    description:
      'Pembangunan sistem pemurnian air medis berstandar AAMI dengan pemipaan stainless steel higienis guna menjamin kemurnian air dialisat untuk keselamatan pasien.',
    descriptionEn:
      'Construction of an AAMI-compliant medical water purification system with hygienic stainless-steel piping to ensure ultra-pure dialysate water for patient safety.',
    specs: ['Standar Kualitas AAMI', 'Pipa Stainless Medical Grade', 'Monitoring Konduktivitas'],
    specsEn: ['AAMI Water Standard', 'Medical-Grade Stainless Piping', 'Conductivity Telemetry'],
  },
  {
    id: 'proj-maint-graha-medika',
    title: 'Program Preventive Maintenance & Kalibrasi Alat Kesehatan',
    titleEn: 'Preventive Maintenance & Medical Device Calibration Program',
    category: 'Pelatihan & Maintenance',
    mediaType: 'IMAGE',
    thumbnailUrl: LOCAL_ASSETS.portfolioTraining,
    mediaUrl: LOCAL_ASSETS.portfolioTraining,
    location: 'RS Graha Medika Nusantara — Semarang',
    locationEn: 'RS Graha Medika Nusantara — Semarang',
    year: '2026',
    description:
      'Layanan pemeliharaan terencana triwulanan mencakup penggantian komponen aus, pengecekan akurasi sensor tekanan, serta dokumentasi laik pakai alat kesehatan.',
    descriptionEn:
      'Quarterly scheduled preventive maintenance covering wear-part replacement, pressure sensor accuracy verification, and official medical device compliance certification.',
    specs: ['Audit Kesiapan 99,8%', 'Log Kalibrasi Resmi', 'Dukungan Suku Cadang'],
    specsEn: ['99.8% Uptime Audit', 'Official Calibration Logs', 'Spare-Part Support'],
  },
];

export const DIRECTORS_LIST: DirectorProfile[] = [
  {
    id: 'dir-nicholas',
    name: 'Nicholas Vincent',
    role: {
      id: 'Direktur Utama',
      en: 'President Director',
    },
    bio: {
      id: 'Berpengalaman lebih dari 5 tahun dalam manajemen perusahaan alat kesehatan secara global.',
      en: 'Over 5 years of leadership experience in global medical device enterprise management.',
    },
    imageUrl: LOCAL_ASSETS.directorNicholas,
    initials: 'NV',
  },
  {
    id: 'dir-lutfi',
    name: 'M. Lutfi Supriatna',
    role: {
      id: 'Direktur Operasional',
      en: 'Operations Director',
    },
    bio: {
      id: 'Memiliki pengalaman lebih dari 5 tahun dalam sistem KSO haemodialisa, mulai dari perencanaan hingga pelaksanaan operasional.',
      en: 'Over 5 years of specialized experience in hemodialysis KSO systems, from feasibility planning to full operational execution.',
    },
    imageUrl: LOCAL_ASSETS.directorLutfi,
    initials: 'ML',
  },
  {
    id: 'dir-william',
    name: 'William Lim',
    role: {
      id: 'Direktur Keuangan',
      en: 'Finance Director',
    },
    bio: {
      id: 'Berpengalaman lebih dari 30 tahun di bidang manajemen keuangan dan operasional perusahaan secara global.',
      en: 'Over 30 years of executive experience in corporate financial management and global operations.',
    },
    imageUrl: LOCAL_ASSETS.directorWilliam,
    initials: 'WL',
  },
  {
    id: 'dir-andy',
    name: 'Andy Luo',
    role: {
      id: 'Overseas Director',
      en: 'Overseas Director',
    },
    bio: {
      id: 'Memiliki pengetahuan luas mengenai teknologi alat kesehatan terkini secara global, serta memegang berbagai paten dalam pengembangan alat kesehatan.',
      en: 'Deep expertise in cutting-edge global medical device technologies and holder of multiple patents in medical equipment engineering.',
    },
    imageUrl: LOCAL_ASSETS.directorAndy,
    initials: 'AL',
  },
];

export const LEGALITY_ITEMS: LegalityItem[] = [
  {
    id: 'leg-akta',
    document: {
      id: 'Akta Pendirian Perusahaan',
      en: 'Deed of Incorporation (Akta Pendirian)',
    },
    code: {
      id: 'Akta Notaris Resmi',
      en: 'Official Notarial Deed',
    },
    status: 'Terdaftar',
    statusLabel: {
      id: 'Terdaftar',
      en: 'Registered',
    },
    detail: {
      id: 'Pengesahan badan hukum perseroan terbatas berstandar regulasi nasional.',
      en: 'Legal establishment as a limited liability company compliant with national corporate law.',
    },
  },
  {
    id: 'leg-nib',
    document: {
      id: 'Nomor Induk Berusaha (NIB)',
      en: 'Business Identification Number (NIB)',
    },
    code: {
      id: 'Sistem OSS RBA',
      en: 'OSS RBA System',
    },
    status: 'Terdaftar',
    statusLabel: {
      id: 'Terdaftar',
      en: 'Registered',
    },
    detail: {
      id: 'Izin berusaha terintegrasi untuk sektor perdagangan & KSO alat kesehatan.',
      en: 'Integrated business licensing covering medical equipment distribution and hospital KSO.',
    },
  },
  {
    id: 'leg-npwp',
    document: {
      id: 'NPWP Perusahaan',
      en: 'Corporate Tax ID (NPWP)',
    },
    code: {
      id: 'Wajib Pajak Badan',
      en: 'Corporate Taxpayer',
    },
    status: 'Terdaftar',
    statusLabel: {
      id: 'Terdaftar',
      en: 'Registered',
    },
    detail: {
      id: 'Kepatuhan administrasi perpajakan penuh untuk transaksi B2B rumah sakit.',
      en: 'Full corporate tax compliance for B2B hospital procurement and partnership contracts.',
    },
  },
  {
    id: 'leg-idak',
    document: {
      id: 'Izin Distribusi Alat Kesehatan (IDAK)',
      en: 'Medical Device Distribution License (IDAK)',
    },
    code: {
      id: 'Kementerian Kesehatan RI',
      en: 'Ministry of Health RI',
    },
    status: 'Dalam Proses',
    statusLabel: {
      id: 'Dalam Proses',
      en: 'In Progress',
    },
    detail: {
      id: 'Sedang dalam tahap finalisasi sertifikasi distribusi alat kesehatan resmi.',
      en: 'Currently in the final certification stage for official medical device distribution.',
    },
  },
];
