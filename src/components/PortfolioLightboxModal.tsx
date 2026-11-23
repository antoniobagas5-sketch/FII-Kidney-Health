import React, { useEffect } from 'react';
import { ArrowRight, Calendar, MapPin, X } from 'lucide-react';
import { ConsultationCategory, PortfolioItem } from '../types';
import { ClinicalVideoPlayer } from './ClinicalVideoPlayer';
import { ResilientImage } from './ResilientImage';

interface PortfolioLightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onInquire: (category: ConsultationCategory) => void;
}

export const PortfolioLightboxModal: React.FC<PortfolioLightboxModalProps> = ({
  item,
  onClose,
  onInquire,
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  const mapPortfolioToConsultation = (
    category: PortfolioItem['category']
  ): ConsultationCategory => {
    if (category === 'KSO Haemodialisa') return 'KSO Mesin Haemodialisa';
    if (category === 'Radiologi & Alkes') return 'Pengadaan Alkes & Radiologi';
    return 'Maintenance & After-Sales';
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-slate-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-slate-100 px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#475569]">
            <span className="text-[#1D63B8] font-semibold">
              {item.mediaType === 'VIDEO' ? 'Video Dokumentasi' : 'Foto Proyek'}
            </span>
            <span aria-hidden="true">·</span>
            <span>{item.category}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{item.year}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup pratinjau proyek"
            className="w-9 h-9 rounded-lg border border-slate-200 text-[#475569] hover:text-[#0F172A] hover:bg-slate-50 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Viewport */}
        <div className="p-6 pb-2">
          {item.mediaType === 'VIDEO' ? (
            <ClinicalVideoPlayer
              mediaUrl={item.mediaUrl}
              thumbnailUrl={item.thumbnailUrl}
              title={item.title}
              highlights={item.videoHighlights}
            />
          ) : (
            <div className="w-full aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <ResilientImage
                src={item.mediaUrl || item.thumbnailUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Project Technical Details */}
        <div className="p-6 pt-4">
          <h3
            id="lightbox-title"
            className="font-display text-xl sm:text-2xl font-bold text-[#0F172A] leading-snug"
          >
            {item.title}
          </h3>

          <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#475569]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#1D63B8]" />
              <span>{item.location}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 tabular-nums">
              <Calendar className="w-4 h-4 text-[#1D63B8]" />
              <span>Tahun {item.year}</span>
            </span>
          </div>

          <p className="mt-4 text-sm sm:text-base text-[#475569] leading-relaxed">
            {item.description}
          </p>

          {item.specs && item.specs.length > 0 && (
            <div className="mt-5 pt-5 border-t border-slate-100">
              <p className="text-xs font-semibold tracking-wider text-[#0B2C5F] mb-2">
                CAKUPAN TEKNIS PROYEK
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-[#0F172A] font-medium">
                {item.specs.map((spec, idx) => (
                  <React.Fragment key={spec}>
                    <span>{spec}</span>
                    {idx < item.specs.length - 1 && (
                      <span aria-hidden="true" className="text-slate-300">
                        /
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-[#475569] hover:text-[#0F172A] hover:bg-slate-50 transition-colors"
            >
              Tutup
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onInquire(mapPortfolioToConsultation(item.category));
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B2C5F] text-white text-sm font-semibold hover:bg-[#1D63B8] transition-colors"
            >
              <span>Konsultasikan Kebutuhan Serupa</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
