export type NavSectionId = 'home' | 'services' | 'portofolio' | 'about' | 'contact';

export type ConsultationCategory =
  | 'KSO Mesin Haemodialisa'
  | 'Pengadaan Alkes & Radiologi'
  | 'Maintenance & After-Sales'
  | 'Kemitraan Vendor/Prinsipal'
  | 'Lainnya';

export type PortfolioCategory =
  | 'Semua'
  | 'KSO Haemodialisa'
  | 'Radiologi & Alkes'
  | 'Pelatihan & Maintenance';

export type PortfolioProjectCategory = Exclude<PortfolioCategory, 'Semua'>;

export type PortfolioMediaType = 'IMAGE' | 'VIDEO';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioProjectCategory;
  mediaType: PortfolioMediaType;
  thumbnailUrl: string;
  mediaUrl: string;
  location: string;
  year: string;
  description: string;
  specs: string[];
  videoHighlights?: string[];
  isCustom?: boolean;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  highlights: string[];
  iconName: 'Activity' | 'Stethoscope' | 'Wrench' | 'GraduationCap';
}

export interface DirectorProfile {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  initials: string;
}

export interface LegalityItem {
  id: string;
  document: string;
  code: string;
  status: 'Terdaftar' | 'Dalam Proses';
  detail: string;
}
