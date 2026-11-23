import React from 'react';
import { Instagram, Linkedin, Mail, MapPin, Youtube } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyData';
import { getTranslations } from '../i18n/translations';
import { Language, NavSectionId } from '../types';
import { BrandLogo } from './BrandLogo';
import { LanguageToggle } from './LanguageToggle';

interface FooterProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigate: (section: NavSectionId) => void;
}

const LINK_IDS: NavSectionId[] = [
  'home',
  'services',
  'portofolio',
  'about',
  'contact',
];

export const Footer: React.FC<FooterProps> = ({
  language,
  onLanguageChange,
  onNavigate,
}) => {
  const t = getTranslations(language).footer;

  return (
    <footer className="bg-[#0B2C5F] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Column 1: Brand Summary */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo variant="footer" tone="light" />
            <p className="text-sm text-blue-100/90 leading-relaxed max-w-md">
              {t.summary}
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={COMPANY_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn PT Foremed Indo Industri"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1D63B8] flex items-center justify-center text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram FII Kidney Health"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1D63B8] flex items-center justify-center text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube FII Kidney Health"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1D63B8] flex items-center justify-center text-white transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-bold text-white tracking-wide mb-4">
              {t.navTitle}
            </h3>
            <ul className="space-y-2.5 text-sm text-blue-100/90">
              {LINK_IDS.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(id);
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {t.navLinks[id]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Office Contact */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-display text-sm font-bold text-white tracking-wide mb-4">
              {t.contactTitle}
            </h3>
            <div className="flex items-start gap-2.5 text-sm text-blue-100/90">
              <MapPin className="w-4 h-4 text-blue-300 shrink-0 mt-1" />
              <p className="leading-relaxed">{COMPANY_CONFIG.address}</p>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-blue-100/90">
              <Mail className="w-4 h-4 text-blue-300 shrink-0" />
              <a
                href={`mailto:${COMPANY_CONFIG.email}`}
                className="hover:text-white transition-colors"
              >
                {COMPANY_CONFIG.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Language Selector Line */}
        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/80">
          <p>{t.copyright}</p>
          <div className="flex items-center gap-4">
            <p className="hidden md:block">{t.tagline}</p>
            <LanguageToggle
              language={language}
              onChange={onLanguageChange}
              variant="dark"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
