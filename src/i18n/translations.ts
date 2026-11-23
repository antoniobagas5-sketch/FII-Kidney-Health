import {
  ConsultationCategory,
  Language,
  NavSectionId,
  PortfolioCategory,
} from '../types';

export const TRANSLATIONS = {
  id: {
    metaTitle:
      'PT Foremed Indo Industri — FII Kidney Health | Solusi KSO Haemodialisa & Teknologi Medis',
    nav: {
      items: {
        home: 'Home',
        services: 'Services',
        portofolio: 'Portofolio',
        about: 'About',
        contact: 'Contact',
      } as Record<NavSectionId, string>,
      cta: 'Konsultasi KSO',
      activeLabel: 'Aktif',
      openMenu: 'Buka menu navigasi',
      closeMenu: 'Tutup menu navigasi',
      homeAria: 'Beranda FII Kidney Health',
      navAria: 'Navigasi utama',
      languageLabel: 'Bahasa',
    },
    hero: {
      eyebrow: 'MITRA TEKNOLOGI MEDIS & KSO RUMAH SAKIT',
      headlinePrefix: 'Solusi Terpadu KSO Haemodialisa & ',
      headlineAccent: 'Teknologi Medis.',
      subheadline:
        'PT Foremed Indo Industri hadir sebagai mitra strategis rumah sakit di seluruh Indonesia dalam penyediaan mesin haemodialisa, radiologi, BMHP, serta dukungan teknis berkelanjutan.',
      primaryCta: 'Jadwalkan Konsultasi',
      secondaryCta: 'Jelajahi Layanan',
      trustItems: [
        'Legalitas Resmi Terdaftar',
        'Layanan Purna Jual 24/7',
        'Kemitraan Rumah Sakit Nasional',
      ],
      imageAlt:
        'Ruang layanan haemodialisa modern PT Foremed Indo Industri bersama tim medis rumah sakit',
      imageFallback: 'Unit Haemodialisa Modern — FII Kidney Health',
      floatingTitle: 'KSO Revenue Sharing',
      floatingSubtitle: 'Tanpa Beban Investasi Awal RS',
    },
    services: {
      eyebrow: 'RUANG LINGKUP LAYANAN',
      title: 'Solusi Medis Komprehensif untuk Rumah Sakit',
      subtitle:
        'Kami menyediakan layanan terintegrasi mulai dari skema kemitraan KSO mesin haemodialisa, pengadaan alat kesehatan, pemeliharaan berkala, hingga peningkatan kompetensi tenaga klinis.',
      ksoEyebrow: 'TRANSPARANSI SKEMA KEMITRAAN',
      ksoTitle: 'Model Kerja Sama Operasional (KSO) — Revenue Sharing',
      ksoIntroBefore: 'PT Foremed Indo Industri menerapkan skema',
      ksoIntroHighlight: 'revenue sharing',
      ksoIntroAfter:
        'dari total pendapatan per tindakan medis. Model ini dirancang untuk menciptakan kemitraan yang adil, efisien, dan berkelanjutan tanpa membebani arus kas awal rumah sakit.',
      fiiSubtitle: 'Mitra Penyedia Teknologi',
      fiiTitle: 'Kewajiban PT Foremed Indo Industri (FII)',
      fiiFoot:
        'Fokus FII: Kesiapan teknologi medis, kontinuitas BHP, dan reliabilitas mesin.',
      rsSubtitle: 'Mitra Layanan Klinis',
      rsTitle: 'Kewajiban Pihak Rumah Sakit',
      rsFoot:
        'Fokus Rumah Sakit: Pelayanan klinis pasien dan tata kelola instalasi dialisis.',
      ksoNote:
        'Komposisi bagi hasil disesuaikan secara adaptif berdasarkan kapasitas unit dan proyeksi tindakan rumah sakit Anda.',
      ksoCta: 'Ajukan Proposal & Simulasi KSO',
    },
    portfolio: {
      eyebrow: 'PORTOFOLIO & DOKUMENTASI PROYEK',
      title: 'Rekam Jejak Instalasi & Kemitraan Medis',
      subtitle:
        'Dokumentasi pemasangan unit haemodialisa, fasilitas radiologi, serta pelatihan klinis di berbagai rumah sakit mitra di Indonesia.',
      adminBtn: 'Mode Admin (Tambah Portofolio)',
      filterAria: 'Filter kategori portofolio',
      filters: {
        Semua: 'Semua',
        'KSO Haemodialisa': 'KSO Haemodialisa',
        'Radiologi & Alkes': 'Radiologi & Alkes',
        'Pelatihan & Maintenance': 'Pelatihan & Maintenance',
      } as Record<PortfolioCategory, string>,
      showingCount: (count: number) => `Menampilkan ${count} proyek`,
      emptyTitle: 'Belum ada proyek pada kategori ini',
      emptySubtitle:
        'Pilih kategori lain atau tambahkan dokumentasi proyek melalui Mode Admin.',
      mediaVideo: 'Video',
      mediaPhoto: 'Foto',
      customTag: 'Tambahan Admin',
      viewDetailAria: (title: string) => `Lihat detail ${title}`,
      lightbox: {
        videoBadge: 'Video Dokumentasi',
        photoBadge: 'Foto Proyek',
        closeAria: 'Tutup pratinjau proyek',
        yearPrefix: 'Tahun',
        specsHeading: 'CAKUPAN TEKNIS PROYEK',
        closeBtn: 'Tutup',
        inquireBtn: 'Konsultasikan Kebutuhan Serupa',
      },
      videoPlayer: {
        unsupported: 'Peramban Anda tidak mendukung pemutar video HTML5.',
        playAria: 'Putar dokumentasi video',
        pauseAria: 'Jeda video',
        replayAria: 'Putar ulang video',
        unmuteAria: 'Aktifkan suara',
        muteAria: 'Bisukan suara',
        scrubberAria: 'Progres video dokumentasi',
        statusLabel: (percent: number) => `Dokumentasi Teknis (${percent}%)`,
      },
      admin: {
        title: 'Mode Admin — Tambah Portofolio Proyek',
        subtitle: 'Data baru otomatis tersimpan di peramban (localStorage).',
        closeAria: 'Tutup panel admin',
        nameLabel: 'Nama Proyek *',
        namePlaceholder: 'Contoh: Instalasi 10 Unit Mesin HD RS Kasih Ibu',
        categoryLabel: 'Kategori Proyek *',
        mediaTypeLabel: 'Tipe Media *',
        mediaPhotoOpt: 'Foto (IMAGE)',
        mediaVideoOpt: 'Video (VIDEO)',
        locationLabel: 'Institusi & Lokasi Rumah Sakit *',
        locationPlaceholder: 'Contoh: RSUD Dr. Soetomo — Surabaya',
        yearLabel: 'Tahun *',
        presetLabel: 'Pilih Aset Visual Lokal',
        uploadLabel: 'Atau Unggah Foto / Video (Opsional)',
        uploadReady: 'Berkas siap diunggah',
        uploadPick: 'Pilih Berkas Lokal',
        descLabel: 'Deskripsi Teknis Proyek *',
        descPlaceholder:
          'Jelaskan lingkup instalasi, jumlah unit, skema KSO, dan hasil operasionalnya...',
        specsLabel: 'Poin Spesifikasi (pisahkan dengan koma)',
        specsPlaceholder: 'Contoh: 10 Unit Mesin HD, Sistem RO, Pelatihan Perawat',
        cancelBtn: 'Batal',
        saveBtn: 'Simpan ke Portofolio',
        customListTitle: (count: number) => `Proyek Tambahan Anda (${count})`,
        resetBtn: 'Reset ke Data Bawaan',
        emptyCustom:
          'Belum ada proyek tambahan. Proyek yang Anda tambahkan akan tampil di galeri dan tersimpan otomatis.',
        deleteAria: (title: string) => `Hapus ${title}`,
        errors: {
          maxFile:
            'Ukuran berkas maksimal 4 MB agar dapat disimpan di penyimpanan peramban.',
          titleMin: 'Judul proyek minimal 5 karakter.',
          locationMin: 'Nama rumah sakit dan kota lokasi wajib diisi.',
          descMin: 'Deskripsi teknis proyek minimal 15 karakter.',
        },
        presets: [
          'Unit Ruang Haemodialisa',
          'Suite Dialisis & Tim Medis',
          'Ruang Radiologi Digital',
          'Pelatihan & Kalibrasi Biomedis',
          'Sistem Water Treatment RO',
        ],
      },
    },
    about: {
      facilityAlt: 'Fasilitas rumah sakit mitra modern PT Foremed Indo Industri',
      facilityFallback: 'Mitra Fasilitas Kesehatan Nasional',
      badgeTop: 'Komitmen Kesehatan Nasional',
      badgeMain: 'Didirikan 2025 — Mitra Strategis Kesehatan Nasional',
      eyebrow: 'TENTANG PERUSAHAAN',
      title: 'Profesionalisme & Inovasi dalam Kemitraan Kesehatan Indonesia',
      p1Before: 'PT Foremed Indo Industri',
      p1Middle:
        'didirikan pada tahun 2025 sebagai perusahaan nasional yang bergerak di bidang alat kesehatan, dengan fokus utama pada',
      p1Highlight: 'Kerja Sama Operasional (KSO) mesin haemodialisa',
      p1After:
        'serta penyediaan dan pengelolaan teknologi medis lainnya termasuk radiologi di seluruh Indonesia.',
      p2Before:
        'Kami menjunjung tinggi kolaborasi yang sehat, saling melengkapi, serta menghadirkan model',
      p2Highlight: 'Cost-Effective Solutions',
      p2After:
        'yang adaptif agar rumah sakit dapat meningkatkan mutu layanan klinis tanpa beban operasional berlebih.',
      visionTitle: 'Visi',
      visionText:
        'Menyediakan layanan kesehatan terbaik bagi masyarakat Indonesia melalui penyediaan teknologi medis yang berkualitas tinggi dan konsisten.',
      missionTitle: 'Misi',
      missionText:
        'Memberikan solusi layanan medis yang efisien dan berkelanjutan bagi pasien di seluruh Indonesia, serta mendukung rumah sakit dalam meningkatkan kualitas pelayanan kesehatan nasional.',
      mgmtEyebrow: 'STRUKTUR MANAJEMEN',
      mgmtTitle: 'Dipimpin oleh Tim Eksekutif Berpengalaman Global',
      mgmtSubtitle:
        'Kombinasi keahlian manajemen alat kesehatan internasional, operasional KSO haemodialisa, tata kelola keuangan, dan inovasi paten teknologi medis.',
      legalEyebrow: 'KEPATUHAN & TATA KELOLA',
      legalTitle: 'Legalitas Resmi Perusahaan',
      legalSubtitle:
        'Menjamin kepastian hukum dan kepatuhan regulasi dalam setiap kerja sama pengadaan dan KSO rumah sakit di Indonesia.',
    },
    contact: {
      bannerTitle:
        'Siap Meningkatkan Layanan Haemodialisa & Fasilitas Medis Rumah Sakit Anda?',
      bannerSubtitle:
        'Diskusikan skema Kerja Sama Operasional (KSO) yang adaptif dan menguntungkan bersama tim ahli PT Foremed Indo Industri.',
      bannerCta: 'Hubungi Tim Kami Sekarang',
      eyebrow: 'HUBUNGI KAMI',
      title: 'Konsultasi KSO & Pengadaan Alat Kesehatan',
      subtitle:
        'Sampaikan kebutuhan fasilitas medis rumah sakit Anda. Tim bisnis dan teknis kami siap menjadwalkan presentasi proposal serta simulasi KSO.',
      officeTitle: 'Informasi Kantor Pusat',
      addressLabel: 'Alamat Kantor',
      emailLabel: 'Email Resmi',
      waLabel: 'WhatsApp Konsultasi',
      waDirectBtn: 'Hubungi via WhatsApp',
      waDirectHint: 'Respon cepat tim kemitraan KSO & pengadaan alkes',
      waDirectPrefill: (company: string, brand: string, cat: string) =>
        `Halo Tim ${company} (${brand}), saya ingin berkonsultasi mengenai ${cat}. Mohon informasi lebih lanjut terkait kerja sama dan pengadaan alat kesehatan.`,
      socialTitle: 'Kanal Resmi PT Foremed Indo Industri',
      mapTitle: 'Lokasi Kantor PT Foremed Indo Industri Jakarta Barat',
      mapArea: 'Tambora, Jakarta Barat 11330',
      openMap: 'Buka Peta',
      formTitle: 'Formulir Pengajuan Proposal & Konsultasi',
      formSubtitle:
        'Lengkapi data di bawah ini untuk mendapatkan respon cepat dari tim spesialis KSO kami.',
      fields: {
        fullName: 'Nama Lengkap *',
        fullNamePlaceholder: 'Dr. Hendra Wijaya, MARS',
        roleAndHospital: 'Jabatan & Nama Rumah Sakit/Instansi *',
        rolePlaceholder: 'Direktur Utama — RS Harapan Sehat',
        email: 'Email *',
        emailPlaceholder: 'pengadaan@rumahsakit.co.id',
        phone: 'Nomor Telepon / WhatsApp *',
        phonePlaceholder: '0812-xxxx-xxxx',
        category: 'Kategori Kebutuhan *',
        message: 'Pesan Detail Kebutuhan *',
        messagePlaceholder:
          'Jelaskan rencana kapasitas unit mesin haemodialisa, lokasi rumah sakit, atau kebutuhan pengadaan alkes yang ingin didiskusikan...',
        charCount: (len: number) => `${len} / min. 20 karakter`,
      },
      categories: {
        'KSO Mesin Haemodialisa': 'KSO Mesin Haemodialisa',
        'Pengadaan Alkes & Radiologi': 'Pengadaan Alkes & Radiologi',
        'Maintenance & After-Sales': 'Maintenance & After-Sales',
        'Kemitraan Vendor/Prinsipal': 'Kemitraan Vendor/Prinsipal',
        Lainnya: 'Lainnya',
      } as Record<ConsultationCategory, string>,
      errors: {
        fullName: 'Nama lengkap wajib diisi (minimal 3 karakter).',
        roleAndHospital: 'Jabatan dan nama rumah sakit/instansi wajib diisi.',
        email: 'Masukkan format alamat email yang valid.',
        phone: 'Nomor telepon/WhatsApp minimal 9 digit angka.',
        message: (len: number) =>
          `Pesan detail minimal 20 karakter (saat ini ${len} karakter).`,
      },
      consentNote:
        'Dengan mengirim formulir ini, Anda menyetujui komunikasi tindak lanjut dari tim kemitraan PT Foremed Indo Industri.',
      submitBtn: 'Kirim Permintaan Konsultasi',
      successTitle: 'Permintaan Konsultasi Diterima',
      successBody: (name: string, categoryLabel: string) =>
        `Terima kasih, ${name}. Ringkasan pengajuan untuk kategori ${categoryLabel} telah tercatat dan siap ditindaklanjuti oleh tim kemitraan kami.`,
      summaryHospital: 'Instansi:',
      summaryEmail: 'Email:',
      summaryPhone: 'Telepon / WA:',
      waBtn: 'Lanjutkan via WhatsApp',
      resetFormBtn: 'Kirim Pertanyaan Lain',
      waGreeting: (
        company: string,
        brand: string,
        cat: string,
        name: string,
        role: string,
        email: string,
        phone: string,
        message: string
      ) =>
        [
          `Halo Tim ${company} (${brand}),`,
          '',
          `Saya ingin berkonsultasi terkait: *${cat}*`,
          `Nama: ${name}`,
          `Jabatan & Instansi: ${role}`,
          `Email: ${email}`,
          `No. Telepon/WA: ${phone}`,
          '',
          `Detail Kebutuhan:`,
          message,
        ].join('\n'),
    },
    footer: {
      summary:
        'Perusahaan nasional penyedia Kerja Sama Operasional (KSO) mesin haemodialisa, radiologi, dan teknologi alat kesehatan terpadu bagi rumah sakit di seluruh Indonesia.',
      navTitle: 'Navigasi Cepat',
      navLinks: {
        home: 'Home',
        services: 'Layanan & Skema KSO',
        portofolio: 'Portofolio Proyek',
        about: 'Profil & Manajemen',
        contact: 'Hubungi Kami',
      } as Record<NavSectionId, string>,
      contactTitle: 'Kontak Perusahaan',
      copyright: '© 2025–2026 PT Foremed Indo Industri. All Rights Reserved.',
      tagline: 'FII Kidney Health — Solusi Teknologi Medis Indonesia',
    },
  },
  en: {
    metaTitle:
      'PT Foremed Indo Industri — FII Kidney Health | Hemodialysis KSO & Medical Technology Solutions',
    nav: {
      items: {
        home: 'Home',
        services: 'Services',
        portofolio: 'Portfolio',
        about: 'About',
        contact: 'Contact',
      } as Record<NavSectionId, string>,
      cta: 'KSO Consultation',
      activeLabel: 'Active',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
      homeAria: 'FII Kidney Health Home',
      navAria: 'Primary navigation',
      languageLabel: 'Language',
    },
    hero: {
      eyebrow: 'MEDICAL TECHNOLOGY PARTNER & HOSPITAL KSO',
      headlinePrefix: 'Integrated Hemodialysis KSO & ',
      headlineAccent: 'Medical Technology.',
      subheadline:
        'PT Foremed Indo Industri serves as a strategic partner for hospitals across Indonesia in providing hemodialysis machines, radiology equipment, medical consumables (BMHP), and continuous technical support.',
      primaryCta: 'Schedule Consultation',
      secondaryCta: 'Explore Services',
      trustItems: [
        'Officially Registered Legality',
        '24/7 After-Sales Support',
        'Nationwide Hospital Partnerships',
      ],
      imageAlt:
        'Modern hemodialysis treatment suite by PT Foremed Indo Industri with hospital clinical team',
      imageFallback: 'Modern Hemodialysis Suite — FII Kidney Health',
      floatingTitle: 'KSO Revenue Sharing',
      floatingSubtitle: 'Zero Upfront Hospital CapEx',
    },
    services: {
      eyebrow: 'SCOPE OF SERVICES',
      title: 'Comprehensive Medical Solutions for Hospitals',
      subtitle:
        'We deliver end-to-end capabilities ranging from hemodialysis operational partnerships (KSO), medical equipment supply, preventive maintenance, to clinical staff training.',
      ksoEyebrow: 'PARTNERSHIP TRANSPARENCY',
      ksoTitle: 'Operational Cooperation Model (KSO) — Revenue Sharing',
      ksoIntroBefore: 'PT Foremed Indo Industri applies a',
      ksoIntroHighlight: 'revenue sharing',
      ksoIntroAfter:
        'model based on total revenue per medical procedure. This framework is built to create a fair, efficient, and sustainable partnership without straining hospital upfront capital.',
      fiiSubtitle: 'Technology Partner',
      fiiTitle: 'PT Foremed Indo Industri (FII) Obligations',
      fiiFoot:
        'FII Focus: Medical equipment readiness, consumables continuity, and machine reliability.',
      rsSubtitle: 'Clinical Care Partner',
      rsTitle: 'Partner Hospital Obligations',
      rsFoot:
        'Hospital Focus: Patient clinical care delivery and dialysis unit operations.',
      ksoNote:
        'Revenue-sharing ratios are tailored adaptively based on unit capacity and your hospital procedure volume projections.',
      ksoCta: 'Request Proposal & KSO Simulation',
    },
    portfolio: {
      eyebrow: 'PORTFOLIO & PROJECT DOCUMENTATION',
      title: 'Track Record of Medical Installations & Partnerships',
      subtitle:
        'Documentation of hemodialysis unit deployments, radiology suites, and clinical training across partner hospitals in Indonesia.',
      adminBtn: 'Admin Mode (Add Portfolio)',
      filterAria: 'Filter portfolio categories',
      filters: {
        Semua: 'All Projects',
        'KSO Haemodialisa': 'Hemodialysis KSO',
        'Radiologi & Alkes': 'Radiology & Devices',
        'Pelatihan & Maintenance': 'Training & Maintenance',
      } as Record<PortfolioCategory, string>,
      showingCount: (count: number) => `Showing ${count} projects`,
      emptyTitle: 'No projects in this category yet',
      emptySubtitle:
        'Select another category or add new project documentation via Admin Mode.',
      mediaVideo: 'Video',
      mediaPhoto: 'Photo',
      customTag: 'Admin Entry',
      viewDetailAria: (title: string) => `View details for ${title}`,
      lightbox: {
        videoBadge: 'Video Documentation',
        photoBadge: 'Project Photo',
        closeAria: 'Close project preview',
        yearPrefix: 'Year',
        specsHeading: 'PROJECT TECHNICAL SCOPE',
        closeBtn: 'Close',
        inquireBtn: 'Consult Similar Project',
      },
      videoPlayer: {
        unsupported: 'Your browser does not support HTML5 video playback.',
        playAria: 'Play video documentation',
        pauseAria: 'Pause video',
        replayAria: 'Replay video',
        unmuteAria: 'Unmute audio',
        muteAria: 'Mute audio',
        scrubberAria: 'Video documentation timeline',
        statusLabel: (percent: number) => `Technical Briefing (${percent}%)`,
      },
      admin: {
        title: 'Admin Mode — Add Project Portfolio',
        subtitle: 'New entries are automatically persisted in your browser (localStorage).',
        closeAria: 'Close admin panel',
        nameLabel: 'Project Name *',
        namePlaceholder: 'Example: 10-Unit HD Installation at Kasih Ibu Hospital',
        categoryLabel: 'Project Category *',
        mediaTypeLabel: 'Media Type *',
        mediaPhotoOpt: 'Photo (IMAGE)',
        mediaVideoOpt: 'Video (VIDEO)',
        locationLabel: 'Hospital Institution & City *',
        locationPlaceholder: 'Example: Dr. Soetomo General Hospital — Surabaya',
        yearLabel: 'Year *',
        presetLabel: 'Choose Local Visual Asset',
        uploadLabel: 'Or Upload Photo / Video (Optional)',
        uploadReady: 'File ready to attach',
        uploadPick: 'Choose Local File',
        descLabel: 'Technical Project Description *',
        descPlaceholder:
          'Describe installation scope, unit count, KSO model, and operational outcomes...',
        specsLabel: 'Technical Highlights (comma-separated)',
        specsPlaceholder: 'Example: 10 HD Units, RO Water System, Nurse Training',
        cancelBtn: 'Cancel',
        saveBtn: 'Save to Portfolio',
        customListTitle: (count: number) => `Your Added Projects (${count})`,
        resetBtn: 'Reset to Default Data',
        emptyCustom:
          'No custom projects added yet. Projects you create will appear in the gallery and persist automatically.',
        deleteAria: (title: string) => `Delete ${title}`,
        errors: {
          maxFile:
            'Maximum file size is 4 MB for browser local storage compatibility.',
          titleMin: 'Project title must be at least 5 characters.',
          locationMin: 'Hospital institution and city are required.',
          descMin: 'Technical description must be at least 15 characters.',
        },
        presets: [
          'Hemodialysis Ward Units',
          'Dialysis Suite & Clinical Team',
          'Digital Radiology Suite',
          'Biomedical Training & Calibration',
          'RO Medical Water System',
        ],
      },
    },
    about: {
      facilityAlt: 'Modern partner hospital facility of PT Foremed Indo Industri',
      facilityFallback: 'National Healthcare Facility Partner',
      badgeTop: 'National Healthcare Commitment',
      badgeMain: 'Established 2025 — National Healthcare Strategic Partner',
      eyebrow: 'ABOUT THE COMPANY',
      title: 'Professionalism & Innovation in Indonesian Healthcare Partnerships',
      p1Before: 'PT Foremed Indo Industri',
      p1Middle:
        'was established in 2025 as a national medical device enterprise with a primary focus on',
      p1Highlight: 'Operational Cooperation (KSO) for hemodialysis machines',
      p1After:
        'as well as the procurement and management of advanced medical technologies including radiology across Indonesia.',
      p2Before:
        'We uphold healthy, mutually complementary collaboration and deliver adaptive',
      p2Highlight: 'Cost-Effective Solutions',
      p2After:
        'so partner hospitals can elevate clinical service quality without excessive operational burden.',
      visionTitle: 'Vision',
      visionText:
        'To provide the best healthcare services for the people of Indonesia through the consistent supply of high-quality medical technology.',
      missionTitle: 'Mission',
      missionText:
        'To deliver efficient and sustainable medical service solutions for patients across Indonesia, while supporting hospitals in elevating national healthcare standards.',
      mgmtEyebrow: 'MANAGEMENT STRUCTURE',
      mgmtTitle: 'Led by Executives with Global Industry Experience',
      mgmtSubtitle:
        'Combining international medical device management, end-to-end hemodialysis KSO execution, global financial governance, and patented medical device innovation.',
      legalEyebrow: 'COMPLIANCE & GOVERNANCE',
      legalTitle: 'Official Corporate Legality',
      legalSubtitle:
        'Ensuring full regulatory compliance and legal certainty across every hospital procurement and KSO partnership in Indonesia.',
    },
    contact: {
      bannerTitle:
        'Ready to Upgrade Your Hospital Hemodialysis & Medical Facilities?',
      bannerSubtitle:
        'Discuss an adaptive and mutually beneficial Operational Cooperation (KSO) scheme with PT Foremed Indo Industri specialists.',
      bannerCta: 'Contact Our Team Now',
      eyebrow: 'CONTACT US',
      title: 'KSO & Medical Equipment Consultation',
      subtitle:
        'Share your hospital facility requirements. Our commercial and technical specialists are ready to schedule a proposal presentation and KSO simulation.',
      officeTitle: 'Head Office Information',
      addressLabel: 'Office Address',
      emailLabel: 'Official Email',
      waLabel: 'WhatsApp Consultation',
      waDirectBtn: 'Contact via WhatsApp',
      waDirectHint: 'Direct response from our KSO & medical device team',
      waDirectPrefill: (company: string, brand: string, cat: string) =>
        `Hello ${company} (${brand}) Team, I would like to consult regarding ${cat}. Please share more details about partnership and medical equipment solutions.`,
      socialTitle: 'Official Channels of PT Foremed Indo Industri',
      mapTitle: 'PT Foremed Indo Industri West Jakarta Office Location',
      mapArea: 'Tambora, West Jakarta 11330',
      openMap: 'Open Map',
      formTitle: 'Proposal & Consultation Request Form',
      formSubtitle:
        'Complete the form below to receive a prompt response from our KSO partnership team.',
      fields: {
        fullName: 'Full Name *',
        fullNamePlaceholder: 'Dr. Hendra Wijaya, MARS',
        roleAndHospital: 'Role & Hospital / Institution Name *',
        rolePlaceholder: 'Hospital Director — Harapan Sehat Hospital',
        email: 'Email *',
        emailPlaceholder: 'procurement@hospital.co.id',
        phone: 'Phone / WhatsApp Number *',
        phonePlaceholder: '0812-xxxx-xxxx',
        category: 'Inquiry Category *',
        message: 'Detailed Requirements *',
        messagePlaceholder:
          'Describe your planned hemodialysis machine capacity, hospital location, or medical equipment procurement needs...',
        charCount: (len: number) => `${len} / min. 20 characters`,
      },
      categories: {
        'KSO Mesin Haemodialisa': 'Hemodialysis Machine KSO',
        'Pengadaan Alkes & Radiologi': 'Medical Devices & Radiology Procurement',
        'Maintenance & After-Sales': 'Maintenance & After-Sales Support',
        'Kemitraan Vendor/Prinsipal': 'Vendor / Principal Partnership',
        Lainnya: 'Others',
      } as Record<ConsultationCategory, string>,
      errors: {
        fullName: 'Full name is required (minimum 3 characters).',
        roleAndHospital: 'Role and hospital/institution name are required.',
        email: 'Please enter a valid email address.',
        phone: 'Phone/WhatsApp number must contain at least 9 digits.',
        message: (len: number) =>
          `Detailed message must be at least 20 characters (currently ${len}).`,
      },
      consentNote:
        'By submitting this form, you agree to follow-up communication from the PT Foremed Indo Industri partnership team.',
      submitBtn: 'Submit Consultation Request',
      successTitle: 'Consultation Request Received',
      successBody: (name: string, categoryLabel: string) =>
        `Thank you, ${name}. Your inquiry under ${categoryLabel} has been recorded and is ready for follow-up by our partnership team.`,
      summaryHospital: 'Institution:',
      summaryEmail: 'Email:',
      summaryPhone: 'Phone / WA:',
      waBtn: 'Continue via WhatsApp',
      resetFormBtn: 'Send Another Inquiry',
      waGreeting: (
        company: string,
        brand: string,
        cat: string,
        name: string,
        role: string,
        email: string,
        phone: string,
        message: string
      ) =>
        [
          `Hello ${company} (${brand}) Team,`,
          '',
          `I would like to consult regarding: *${cat}*`,
          `Name: ${name}`,
          `Role & Institution: ${role}`,
          `Email: ${email}`,
          `Phone/WA: ${phone}`,
          '',
          `Requirement Details:`,
          message,
        ].join('\n'),
    },
    footer: {
      summary:
        'A national medical technology company providing Operational Cooperation (KSO) for hemodialysis machines, radiology systems, and integrated healthcare equipment for hospitals across Indonesia.',
      navTitle: 'Quick Links',
      navLinks: {
        home: 'Home',
        services: 'Services & KSO Model',
        portofolio: 'Project Portfolio',
        about: 'About & Leadership',
        contact: 'Contact Us',
      } as Record<NavSectionId, string>,
      contactTitle: 'Corporate Contact',
      copyright: '© 2025–2026 PT Foremed Indo Industri. All Rights Reserved.',
      tagline: 'FII Kidney Health — Indonesian Medical Technology Solutions',
    },
  },
} as const;

export function getTranslations(lang: Language) {
  return TRANSLATIONS[lang];
}
