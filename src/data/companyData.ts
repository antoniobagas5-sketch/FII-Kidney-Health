import {
  ConsultationCategory,
  DirectorProfile,
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
    title: 'Kerja Sama Operasional (KSO) Mesin Haemodialisa',
    description:
      'Penyediaan sistem mesin haemodialisa modern beserta Barang Habis Pakai (BHP) dengan skema bagi hasil yang kompetitif tanpa membebani belanja modal awal rumah sakit.',
    highlights: ['Skema Revenue Sharing Transparan', 'Termasuk Pasokan BHP Rutin'],
    iconName: 'Activity',
  },
  {
    number: '02',
    title: 'Penyediaan & Distribusi Alat Kesehatan',
    description:
      'Pengadaan dan distribusi teknologi medis terkini meliputi perangkat radiologi diagnostik serta Bahan Medis Habis Pakai (BMHP) berstandar klinis untuk rumah sakit.',
    highlights: ['Perangkat Radiologi Modern', 'Ketersediaan BMHP Terjamin'],
    iconName: 'Stethoscope',
  },
  {
    number: '03',
    title: 'Maintenance & Layanan Purna Jual',
    description:
      'Pemeliharaan berkala, kalibrasi presisi, serta dukungan teknis cepat (after-sales service) yang terintegrasi untuk menjamin kelancaran operasional ruang layanan klinis.',
    highlights: ['Preventive Maintenance Berkala', 'Respon Teknis Terjadwal'],
    iconName: 'Wrench',
  },
  {
    number: '04',
    title: 'Edukasi & Pelatihan SDM Rumah Sakit',
    description:
      'Program pelatihan dan pendampingan teknis komprehensif bagi dokter serta perawat mengenai pengoperasian, keselamatan pasien, dan pengelolaan alat kesehatan terkini.',
    highlights: ['Pelatihan Dokter & Perawat HD', 'Transfer Teknologi Global'],
    iconName: 'GraduationCap',
  },
];

export const KSO_OBLIGATIONS = {
  fii: [
    'Penyediaan sistem mesin haemodialisa modern siap operasional',
    'Penyediaan barang medis pendukung & Barang Habis Pakai (BHP)',
    'Dukungan teknis, kalibrasi, & pemeliharaan alat berkala',
    'Pelatihan tenaga medis rumah sakit (dokter & perawat)',
  ],
  hospital: [
    'Penyediaan fasilitas dan ruang layanan haemodialisa',
    'Penyediaan tenaga medis bersertifikat (dokter & perawat)',
    'Infrastruktur pendukung utama (listrik dan instalasi air/RO)',
  ],
};

export const INITIAL_PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'proj-hd-mitra-husada',
    title: 'Instalasi Unit Haemodialisa Terpadu (12 Station)',
    category: 'KSO Haemodialisa',
    mediaType: 'IMAGE',
    thumbnailUrl: LOCAL_ASSETS.portfolioHdWard,
    mediaUrl: LOCAL_ASSETS.portfolioHdWard,
    location: 'RS Mitra Husada — Jakarta',
    year: '2025',
    description:
      'Implementasi penuh unit haemodialisa berbasis KSO Revenue Sharing meliputi penataan 12 unit mesin dialisis generasi terbaru, jalur utilitas klinis, serta suplai BHP terjadwal.',
    specs: ['12 Unit Mesin HD', 'Skema Revenue Sharing', 'Suplai BHP Terpadu'],
  },
  {
    id: 'proj-hd-sentra-medika-vid',
    title: 'Video Commissioning Unit Dialisis & Integrasi Ruang Pasien',
    category: 'KSO Haemodialisa',
    mediaType: 'VIDEO',
    thumbnailUrl: LOCAL_ASSETS.heroDialysis,
    mediaUrl: LOCAL_ASSETS.heroDialysis,
    location: 'RSUD Sentra Medika — Jawa Barat',
    year: '2026',
    description:
      'Dokumentasi uji fungsi menyeluruh, verifikasi tekanan aliran dialisat, serta serah terima operasional ruang layanan haemodialisa bersama tim manajemen rumah sakit.',
    specs: ['Uji Fungsi 100% Lolos', 'Monitoring Real-Time', 'Siap Layanan BPJS'],
    videoHighlights: [
      '00:00 — Inspeksi tata letak 10 bay pasien & panel listrik medis',
      '00:12 — Kalibrasi mesin haemodialisa & verifikasi kualitas air RO',
      '00:24 — Briefing operasional klinis bersama kepala instalasi dialisis',
    ],
  },
  {
    id: 'proj-rad-harapan-bangsa',
    title: 'Pengadaan & Integrasi Ruang Radiologi Diagnostik Digital',
    category: 'Radiologi & Alkes',
    mediaType: 'IMAGE',
    thumbnailUrl: LOCAL_ASSETS.portfolioRadiology,
    mediaUrl: LOCAL_ASSETS.portfolioRadiology,
    location: 'RS Harapan Bangsa — Surabaya',
    year: '2025',
    description:
      'Pengadaan perangkat pencitraan radiologi resolusi tinggi lengkap dengan ruang kendali berpelindung timbal serta sistem kalibrasi dosis radiasi standar nasional.',
    specs: ['Digital Imaging Suite', 'Ruang Kontrol Terintegrasi', 'Garansi Purna Jual'],
  },
  {
    id: 'proj-train-bhakti-mulia-vid',
    title: 'Video Pelatihan Klinis & Kalibrasi Perawat Haemodialisa',
    category: 'Pelatihan & Maintenance',
    mediaType: 'VIDEO',
    thumbnailUrl: LOCAL_ASSETS.portfolioTraining,
    mediaUrl: LOCAL_ASSETS.portfolioTraining,
    location: 'RSU Bhakti Mulia — Tangerang',
    year: '2026',
    description:
      'Sesi transfer pengetahuan teknis dari tim engineering biomedis PT Foremed Indo Industri kepada perawat dan dokter penanggung jawab unit dialisis.',
    specs: ['Sertifikasi Operasional', 'Simulasi Penanganan Alarm', 'Modul SOP Lengkap'],
    videoHighlights: [
      '00:00 — Pengenalan antarmuka kontrol ultrafiltrasi & keamanan pasien',
      '00:14 — Simulasi prosedur priming sirkuit ekstrakorporeal',
      '00:26 — Evaluasi kompetensi tim keperawatan dan uji kalibrasi harian',
    ],
  },
  {
    id: 'proj-ro-ginjal-sejahtera',
    title: 'Instalasi Sistem Water Treatment Reverse Osmosis (RO) Medis',
    category: 'KSO Haemodialisa',
    mediaType: 'IMAGE',
    thumbnailUrl: LOCAL_ASSETS.portfolioRoSystem,
    mediaUrl: LOCAL_ASSETS.portfolioRoSystem,
    location: 'Klinik Utama Ginjal Sejahtera — Bandung',
    year: '2025',
    description:
      'Pembangunan sistem pemurnian air medis berstandar AAMI dengan pemipaan stainless steel higienis guna menjamin kemurnian air dialisat untuk keselamatan pasien.',
    specs: ['Standar Kualitas AAMI', 'Pipa Stainless Medical Grade', 'Monitoring Konduktivitas'],
  },
  {
    id: 'proj-maint-graha-medika',
    title: 'Program Preventive Maintenance & Kalibrasi Alat Kesehatan',
    category: 'Pelatihan & Maintenance',
    mediaType: 'IMAGE',
    thumbnailUrl: LOCAL_ASSETS.portfolioTraining,
    mediaUrl: LOCAL_ASSETS.portfolioTraining,
    location: 'RS Graha Medika Nusantara — Semarang',
    year: '2026',
    description:
      'Layanan pemeliharaan terencana triwulanan mencakup penggantian komponen aus, pengecekan akurasi sensor tekanan, serta dokumentasi laik pakai alat kesehatan.',
    specs: ['Audit Kesiapan 99,8%', 'Log Kalibrasi Resmi', 'Dukungan Suku Cadang'],
  },
];

export const DIRECTORS_LIST: DirectorProfile[] = [
  {
    id: 'dir-nicholas',
    name: 'Nicholas Vincent',
    role: 'Direktur Utama',
    bio: 'Berpengalaman lebih dari 5 tahun dalam manajemen perusahaan alat kesehatan secara global.',
    imageUrl: LOCAL_ASSETS.directorNicholas,
    initials: 'NV',
  },
  {
    id: 'dir-lutfi',
    name: 'M. Lutfi Supriatna',
    role: 'Direktur Operasional',
    bio: 'Memiliki pengalaman lebih dari 5 tahun dalam sistem KSO haemodialisa, mulai dari perencanaan hingga pelaksanaan operasional.',
    imageUrl: LOCAL_ASSETS.directorLutfi,
    initials: 'ML',
  },
  {
    id: 'dir-william',
    name: 'William Lim',
    role: 'Direktur Keuangan',
    bio: 'Berpengalaman lebih dari 30 tahun di bidang manajemen keuangan dan operasional perusahaan secara global.',
    imageUrl: LOCAL_ASSETS.directorWilliam,
    initials: 'WL',
  },
  {
    id: 'dir-andy',
    name: 'Andy Luo',
    role: 'Overseas Director',
    bio: 'Memiliki pengetahuan luas mengenai teknologi alat kesehatan terkini secara global, serta memegang berbagai paten dalam pengembangan alat kesehatan.',
    imageUrl: LOCAL_ASSETS.directorAndy,
    initials: 'AL',
  },
];

export const LEGALITY_ITEMS: LegalityItem[] = [
  {
    id: 'leg-akta',
    document: 'Akta Pendirian Perusahaan',
    code: 'Akta Notaris Resmi',
    status: 'Terdaftar',
    detail: 'Pengesahan badan hukum perseroan terbatas berstandar regulasi nasional.',
  },
  {
    id: 'leg-nib',
    document: 'Nomor Induk Berusaha (NIB)',
    code: 'Sistem OSS RBA',
    status: 'Terdaftar',
    detail: 'Izin berusaha terintegrasi untuk sektor perdagangan & KSO alat kesehatan.',
  },
  {
    id: 'leg-npwp',
    document: 'NPWP Perusahaan',
    code: 'Wajib Pajak Badan',
    status: 'Terdaftar',
    detail: 'Kepatuhan administrasi perpajakan penuh untuk transaksi B2B rumah sakit.',
  },
  {
    id: 'leg-idak',
    document: 'Izin Distribusi Alat Kesehatan (IDAK)',
    code: 'Kementerian Kesehatan RI',
    status: 'Dalam Proses',
    detail: 'Sedang dalam tahap finalisasi sertifikasi distribusi alat kesehatan resmi.',
  },
];
