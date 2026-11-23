import React, { useMemo, useState } from 'react';
import { Film, Image as ImageIcon, MapPin, Play, Plus } from 'lucide-react';
import {
  ConsultationCategory,
  PortfolioCategory,
  PortfolioItem,
} from '../types';
import { AdminPortfolioModal } from './AdminPortfolioModal';
import { PortfolioLightboxModal } from './PortfolioLightboxModal';
import { ResilientImage } from './ResilientImage';

interface PortfolioSectionProps {
  items: PortfolioItem[];
  onAddItem: (item: PortfolioItem) => void;
  onDeleteItem: (id: string) => void;
  onResetDefaults: () => void;
  onConsultKso: (category: ConsultationCategory) => void;
}

const FILTER_TABS: PortfolioCategory[] = [
  'Semua',
  'KSO Haemodialisa',
  'Radiologi & Alkes',
  'Pelatihan & Maintenance',
];

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  items,
  onAddItem,
  onDeleteItem,
  onResetDefaults,
  onConsultKso,
}) => {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>('Semua');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [adminOpen, setAdminOpen] = useState(false);

  const filteredItems = useMemo(() => {
    if (activeFilter === 'Semua') return items;
    return items.filter((item) => item.category === activeFilter);
  }, [items, activeFilter]);

  return (
    <section id="portofolio" className="py-20 lg:py-24 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Admin Mode Button */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#1D63B8] mb-3">
              PORTOFOLIO &amp; DOKUMENTASI PROYEK
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] text-balance">
              Rekam Jejak Instalasi &amp; Kemitraan Medis
            </h2>
            <p className="mt-4 text-base text-[#475569] leading-relaxed">
              Dokumentasi pemasangan unit haemodialisa, fasilitas radiologi, serta
              pelatihan klinis di berbagai rumah sakit mitra di Indonesia.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => setAdminOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC] text-[#0B2C5F] text-sm font-semibold hover:border-[#1D63B8] hover:bg-[#EBF3FA] transition-colors whitespace-nowrap shrink-0"
            >
              <Plus className="w-4 h-4 text-[#1D63B8]" />
              <span>Mode Admin (Tambah Portofolio)</span>
            </button>
          </div>
        </div>

        {/* Real-Time Interactive Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          <div
            role="tablist"
            aria-label="Filter kategori portofolio"
            className="inline-flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80"
          >
            {FILTER_TABS.map((tab) => {
              const isSelected = activeFilter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-150 ${
                    isSelected
                      ? 'bg-[#0B2C5F] text-white shadow-xs'
                      : 'text-[#475569] hover:text-[#0B2C5F] hover:bg-white/80'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <span className="text-xs sm:text-sm text-[#475569] ml-1 tabular-nums">
            Menampilkan {filteredItems.length} proyek
          </span>
        </div>

        {/* Portfolio Grid */}
        {filteredItems.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-[#F8FAFC] p-12 text-center">
            <p className="font-display text-lg font-semibold text-[#0F172A]">
              Belum ada proyek pada kategori ini
            </p>
            <p className="mt-1.5 text-sm text-[#475569]">
              Pilih kategori lain atau tambahkan dokumentasi proyek melalui Mode Admin.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isVideo = item.mediaType === 'VIDEO';
              return (
                <article
                  key={item.id}
                  className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1D63B8]/40 hover:shadow-md flex flex-col"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    aria-label={`Lihat detail ${item.title}`}
                    className="text-left flex flex-col flex-1 focus-visible:outline-2 focus-visible:outline-[#1D63B8]"
                  >
                    {/* Thumbnail Area */}
                    <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                      <ResilientImage
                        src={item.thumbnailUrl}
                        alt={`${item.title} — ${item.location}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />

                      {/* Subtle Contrast Scrim */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent pointer-events-none" />

                      {/* Centered Play Button for VIDEO items */}
                      {isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="w-14 h-14 rounded-full bg-white/95 text-[#0B2C5F] shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                            <Play className="w-6 h-6 fill-current ml-0.5" />
                          </span>
                        </div>
                      )}

                      {/* Media Type Indicator in Bottom-Left */}
                      <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-xs text-white text-xs font-medium">
                        {isVideo ? (
                          <Film className="w-3.5 h-3.5 text-blue-300" />
                        ) : (
                          <ImageIcon className="w-3.5 h-3.5 text-blue-300" />
                        )}
                        <span>{isVideo ? 'Video' : 'Foto'}</span>
                      </div>
                    </div>

                    {/* Card Body — Zero-Pill Clean Typography */}
                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#475569] mb-2">
                          <span className="font-semibold text-[#1D63B8]">
                            {item.category}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="tabular-nums">{item.year}</span>
                          {item.isCustom && (
                            <>
                              <span aria-hidden="true">·</span>
                              <span className="text-[#0B2C5F] font-medium">
                                Tambahan Admin
                              </span>
                            </>
                          )}
                        </div>

                        <h3 className="font-display text-lg font-bold text-[#0F172A] leading-snug group-hover:text-[#1D63B8] transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs sm:text-sm text-[#475569]">
                        <MapPin className="w-4 h-4 text-[#1D63B8] shrink-0" />
                        <span className="truncate">{item.location}</span>
                      </div>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <PortfolioLightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onInquire={onConsultKso}
      />

      {/* Admin Mode Modal */}
      <AdminPortfolioModal
        isOpen={adminOpen}
        items={items}
        onClose={() => setAdminOpen(false)}
        onAddItem={onAddItem}
        onDeleteItem={onDeleteItem}
        onResetDefaults={onResetDefaults}
      />
    </section>
  );
};
