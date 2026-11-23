import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { ConsultationCategory, NavSectionId } from '../types';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  activeSection: NavSectionId;
  onNavigate: (section: NavSectionId) => void;
  onConsultKso: (category: ConsultationCategory) => void;
}

const NAV_ITEMS: { id: NavSectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'portofolio', label: 'Portofolio' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onConsultKso,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (section: NavSectionId) => {
    setMobileMenuOpen(false);
    onNavigate(section);
  };

  const handleKsoClick = () => {
    setMobileMenuOpen(false);
    onConsultKso('KSO Mesin Haemodialisa');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[70px] flex items-center justify-between gap-8">
        {/* Zone 1: Brand Lockup */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D63B8] rounded-md shrink-0"
          aria-label="Beranda FII Kidney Health"
        >
          <BrandLogo variant="header" tone="dark" />
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          aria-label="Navigasi utama"
          className="hidden md:flex items-center gap-7"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D63B8] ${
                  isActive
                    ? 'text-[#0B2C5F] font-semibold'
                    : 'text-[#475569] hover:text-[#0B2C5F]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-[#1D63B8] transition-all duration-200 ${
                    isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleKsoClick}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B2C5F] text-white text-sm font-semibold hover:bg-[#1D63B8] transition-colors duration-150 whitespace-nowrap shrink-0 shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2C5F]"
          >
            <span>Konsultasi KSO</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="md:hidden w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center text-[#0B2C5F] hover:bg-[#F8FAFC] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1 shadow-lg">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#EBF3FA] text-[#0B2C5F] font-semibold'
                    : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0B2C5F]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="text-xs font-semibold text-[#1D63B8]">Aktif</span>
                )}
              </a>
            );
          })}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleKsoClick}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0B2C5F] text-white text-sm font-semibold hover:bg-[#1D63B8] transition-colors"
            >
              <span>Konsultasi KSO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
