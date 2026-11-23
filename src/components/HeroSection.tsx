import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { LOCAL_ASSETS } from '../data/companyData';
import { getTranslations } from '../i18n/translations';
import { ConsultationCategory, Language, NavSectionId } from '../types';
import { LanguageToggle } from './LanguageToggle';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onConsultKso: (category: ConsultationCategory) => void;
  onNavigate: (section: NavSectionId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onLanguageChange,
  onConsultKso,
  onNavigate,
}) => {
  const t = getTranslations(language).hero;

  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-white via-[#F8FAFC]/60 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        {/* Top Utility Row inside Hero: Language Switcher (ID / EN) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#1D63B8]">
            {t.eyebrow}
          </p>
          <LanguageToggle
            language={language}
            onChange={onLanguageChange}
            variant="light"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#0F172A] leading-[1.12] text-balance">
              {t.headlinePrefix}
              <span className="text-[#1D63B8]">{t.headlineAccent}</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl">
              {t.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onConsultKso('KSO Mesin Haemodialisa')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0B2C5F] text-white text-sm sm:text-base font-semibold hover:bg-[#1D63B8] transition-colors duration-150 whitespace-nowrap shrink-0 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2C5F]"
              >
                <span>{t.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-slate-300 bg-white text-[#0B2C5F] text-sm sm:text-base font-semibold hover:border-[#1D63B8] hover:bg-[#EBF3FA]/60 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D63B8]"
              >
                {t.secondaryCta}
              </button>
            </div>

            {/* Trust Bar */}
            <div className="mt-10 pt-6 border-t border-slate-200/90 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-[#475569]">
              {t.trustItems.map((item, idx) => (
                <React.Fragment key={item}>
                  <span className="font-medium text-[#0B2C5F]">{item}</span>
                  {idx < t.trustItems.length - 1 && (
                    <span aria-hidden="true" className="text-slate-300">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Column: Organic Curved Hospital Suite Visual + Floating Highlight */}
          <div className="lg:col-span-6 relative flex items-stretch">
            <div className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[470px]">
              <div className="w-full h-full rounded-tl-[72px] sm:rounded-tl-[96px] rounded-bl-[24px] rounded-tr-2xl rounded-br-2xl overflow-hidden border border-slate-200/80 shadow-md bg-[#EBF3FA]">
                <ResilientImage
                  src={LOCAL_ASSETS.heroDialysis}
                  alt={t.imageAlt}
                  className="w-full h-full object-cover"
                  fallbackLabel={t.imageFallback}
                />
              </div>

              {/* Floating Highlight Card */}
              <div className="sm:absolute sm:-bottom-5 sm:left-6 mt-4 sm:mt-0 bg-white rounded-2xl border border-slate-200/90 shadow-lg p-4 sm:p-5 max-w-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3FA] text-[#1D63B8] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-[#0B2C5F] leading-snug">
                      {t.floatingTitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#475569] mt-0.5 leading-snug">
                      {t.floatingSubtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
