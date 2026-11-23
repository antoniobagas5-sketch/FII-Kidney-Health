import React from 'react';
import {
  Activity,
  ArrowRight,
  Building2,
  Check,
  GraduationCap,
  Handshake,
  Stethoscope,
  Wrench,
} from 'lucide-react';
import { KSO_OBLIGATIONS, SERVICES_LIST } from '../data/companyData';
import { getTranslations } from '../i18n/translations';
import { ConsultationCategory, Language, ServiceItem } from '../types';

interface ServicesSectionProps {
  language: Language;
  onConsultKso: (category: ConsultationCategory) => void;
}

const ICON_MAP: Record<ServiceItem['iconName'], React.ReactNode> = {
  Activity: <Activity className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  language,
  onConsultKso,
}) => {
  const t = getTranslations(language).services;

  return (
    <section
      id="services"
      className="py-20 lg:py-24 bg-[#F8FAFC] border-t border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#1D63B8] mb-3">
            {t.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] text-balance">
            {t.title}
          </h2>
          <p className="mt-4 text-base text-[#475569] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Core Service Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_LIST.map((service) => (
            <article
              key={service.number}
              className="group bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1D63B8]/40 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF3FA] text-[#1D63B8] flex items-center justify-center group-hover:bg-[#0B2C5F] group-hover:text-white transition-colors duration-200">
                    {ICON_MAP[service.iconName]}
                  </div>
                  <span className="font-display text-sm font-bold tabular-nums text-slate-400">
                    {service.number}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#0F172A] leading-snug">
                  {service.title[language]}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed">
                  {service.description[language]}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm font-medium text-[#0B2C5F]">
                {service.highlights[language].map((item, idx) => (
                  <React.Fragment key={item}>
                    <span>{item}</span>
                    {idx < service.highlights[language].length - 1 && (
                      <span aria-hidden="true" className="text-slate-300">
                        ·
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* KSO Revenue Sharing Transparency Block */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-xs">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#1D63B8] mb-2">
              {t.ksoEyebrow}
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A] text-balance">
              {t.ksoTitle}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed">
              {t.ksoIntroBefore}{' '}
              <span className="font-semibold text-[#0B2C5F]">
                {t.ksoIntroHighlight}
              </span>{' '}
              {t.ksoIntroAfter}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Column 1: PT Foremed Indo Industri */}
            <div className="rounded-2xl bg-[#0B2C5F] text-white p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/15 text-white flex items-center justify-center shrink-0">
                    <Handshake className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-blue-200">
                      {t.fiiSubtitle}
                    </p>
                    <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                      {t.fiiTitle}
                    </h4>
                  </div>
                </div>

                <ul className="space-y-3.5 mt-6">
                  {KSO_OBLIGATIONS.fii[language].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm sm:text-base text-slate-100"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#1D63B8] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-white/15 text-xs sm:text-sm text-blue-100">
                {t.fiiFoot}
              </div>
            </div>

            {/* Column 2: Pihak Rumah Sakit */}
            <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3FA] text-[#1D63B8] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#1D63B8]">
                      {t.rsSubtitle}
                    </p>
                    <h4 className="font-display text-lg sm:text-xl font-bold text-[#0F172A]">
                      {t.rsTitle}
                    </h4>
                  </div>
                </div>

                <ul className="space-y-3.5 mt-6">
                  {KSO_OBLIGATIONS.hospital[language].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm sm:text-base text-[#0F172A]"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#EBF3FA] text-[#1D63B8] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200 text-xs sm:text-sm text-[#475569]">
                {t.rsFoot}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-slate-100">
            <p className="text-sm text-[#475569]">{t.ksoNote}</p>
            <button
              type="button"
              onClick={() => onConsultKso('KSO Mesin Haemodialisa')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B2C5F] text-white text-sm font-semibold hover:bg-[#1D63B8] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2C5F]"
            >
              <span>{t.ksoCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
