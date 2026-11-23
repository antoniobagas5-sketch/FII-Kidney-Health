export type Language = 'id' | 'en';

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
  titleEn?: string;
  category: PortfolioProjectCategory;
  mediaType: PortfolioMediaType;
  thumbnailUrl: string;
  mediaUrl: string;
  location: string;
  locationEn?: string;
  year: string;
  description: string;
  descriptionEn?: string;
  specs: string[];
  specsEn?: string[];
  videoHighlights?: string[];
  videoHighlightsEn?: string[];
  isCustom?: boolean;
}

export interface ServiceItem {
  number: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  highlights: Record<Language, string[]>;
  iconName: 'Activity' | 'Stethoscope' | 'Wrench' | 'GraduationCap';
}

export interface DirectorProfile {
  id: string;
  name: string;
  role: Record<Language, string>;
  bio: Record<Language, string>;
  imageUrl: string;
  initials: string;
}

export interface LegalityItem {
  id: string;
  document: Record<Language, string>;
  code: Record<Language, string>;
  status: 'Terdaftar' | 'Dalam Proses';
  statusLabel: Record<Language, string>;
  detail: Record<Language, string>;
}
