import React from 'react';
import { Award, CheckCircle2, Clock, Compass, Target } from 'lucide-react';
import {
  DIRECTORS_LIST,
  LEGALITY_ITEMS,
  LOCAL_ASSETS,
} from '../data/companyData';
import { ResilientImage } from './ResilientImage';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-[#F8FAFC] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Block 1: Tentang Perusahaan, Visi & Misi */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Hospital Facility Photo + Deep Navy Floating Card */}
          <div className="lg:col-span-5 relative flex items-stretch">
            <div className="relative w-full min-h-[340px] sm:min-h-[420px]">
              <div className="w-full h-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-[#EBF3FA]">
                <ResilientImage
                  src={LOCAL_ASSETS.aboutHospital}
                  alt="Fasilitas rumah sakit mitra modern PT Foremed Indo Industri"
                  className="w-full h-full object-cover"
                  fallbackLabel="Mitra Fasilitas Kesehatan Nasional"
                />
              </div>

              <div className="sm:absolute sm:bottom-5 sm:left-5 sm:right-5 mt-4 sm:mt-0 rounded-2xl bg-[#0B2C5F] text-white p-5 shadow-lg">
                <p className="text-xs font-medium text-blue-200">
                  Komitmen Kesehatan Nasional
                </p>
                <p className="font-display text-base sm:text-lg font-bold mt-1 leading-snug">
                  Didirikan 2025 — Mitra Strategis Kesehatan Nasional
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative + Visi & Misi */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#1D63B8] mb-3">
              TENTANG PERUSAHAAN
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] text-balance">
              Profesionalisme &amp; Inovasi dalam Kemitraan Kesehatan Indonesia
            </h2>

            <p className="mt-5 text-base text-[#475569] leading-relaxed">
              <span className="font-semibold text-[#0B2C5F]">
                PT Foremed Indo Industri
              </span>{' '}
              didirikan pada tahun 2025 sebagai perusahaan nasional yang bergerak di
              bidang alat kesehatan, dengan fokus utama pada{' '}
              <span className="font-semibold text-[#0F172A]">
                Kerja Sama Operasional (KSO) mesin haemodialisa
              </span>{' '}
              serta penyediaan dan pengelolaan teknologi medis lainnya termasuk radiologi
              di seluruh Indonesia.
            </p>

            <p className="mt-3 text-base text-[#475569] leading-relaxed">
              Kami menjunjung tinggi kolaborasi yang sehat, saling melengkapi, serta
              menghadirkan model{' '}
              <span className="font-semibold text-[#0B2C5F]">
                Cost-Effective Solutions
              </span>{' '}
              yang adaptif agar rumah sakit dapat meningkatkan mutu layanan klinis tanpa
              beban operasional berlebih.
            </p>

            {/* Visi & Misi Cards (Hairline Bordered, No Thick Left Stripes) */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="w-10 h-10 rounded-xl bg-[#EBF3FA] text-[#1D63B8] flex items-center justify-center mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#0B2C5F]">Visi</h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                  Menyediakan layanan kesehatan terbaik bagi masyarakat Indonesia melalui
                  penyediaan teknologi medis yang berkualitas tinggi dan konsisten.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="w-10 h-10 rounded-xl bg-[#EBF3FA] text-[#1D63B8] flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#0B2C5F]">Misi</h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                  Memberikan solusi layanan medis yang efisien dan berkelanjutan bagi
                  pasien di seluruh Indonesia, serta mendukung rumah sakit dalam
                  meningkatkan kualitas pelayanan kesehatan nasional.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2: Struktur Manajemen (4 Director Cards) */}
        <div>
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#1D63B8] mb-3">
              STRUKTUR MANAJEMEN
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] text-balance">
              Dipimpin oleh Tim Eksekutif Berpengalaman Global
            </h3>
            <p className="mt-3 text-base text-[#475569] leading-relaxed">
              Kombinasi keahlian manajemen alat kesehatan internasional, operasional KSO
              haemodialisa, tata kelola keuangan, dan inovasi paten teknologi medis.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIRECTORS_LIST.map((director) => (
              <article
                key={director.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1D63B8]/40 hover:shadow-md"
              >
                <div className="aspect-square w-full bg-[#EBF3FA] overflow-hidden">
                  <ResilientImage
                    src={director.imageUrl}
                    alt={`${director.name} — ${director.role}`}
                    className="w-full h-full object-cover object-top"
                    fallbackLabel={`${director.name} (${director.initials})`}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="font-display text-lg font-bold text-[#0F172A]">
                    {director.name}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-[#1D63B8] mt-0.5">
                    {director.role}
                  </p>
                  <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                    {director.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Block 3: Legalitas Perusahaan (Trust Banner) */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#EBF3FA] text-[#1D63B8] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#1D63B8]">
                  KEPATUHAN &amp; TATA KELOLA
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A]">
                  Legalitas Resmi Perusahaan
                </h3>
              </div>
            </div>
            <p className="text-sm text-[#475569] max-w-md">
              Menjamin kepastian hukum dan kepatuhan regulasi dalam setiap kerja sama
              pengadaan dan KSO rumah sakit di Indonesia.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LEGALITY_ITEMS.map((item) => {
              const isRegistered = item.status === 'Terdaftar';
              return (
                <div
                  key={item.id}
                  className="rounded-xl bg-[#F8FAFC] border border-slate-200/80 p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-medium text-[#475569]">
                        {item.code}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-semibold ${
                          isRegistered ? 'text-emerald-700' : 'text-amber-700'
                        }`}
                      >
                        {isRegistered ? (
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                        ) : (
                          <Clock className="w-4 h-4 shrink-0" />
                        )}
                        <span>{item.status}</span>
                      </span>
                    </div>
                    <h4 className="font-display text-base font-bold text-[#0F172A]">
                      {item.document}
                    </h4>
                  </div>
                  <p className="mt-2 text-xs text-[#475569] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
