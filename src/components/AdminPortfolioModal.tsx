import React, { useEffect, useState } from 'react';
import { Plus, RotateCcw, Trash2, Upload, X } from 'lucide-react';
import { LOCAL_ASSETS } from '../data/companyData';
import { getTranslations } from '../i18n/translations';
import {
  Language,
  PortfolioItem,
  PortfolioMediaType,
  PortfolioProjectCategory,
} from '../types';

interface AdminPortfolioModalProps {
  language: Language;
  isOpen: boolean;
  items: PortfolioItem[];
  onClose: () => void;
  onAddItem: (item: PortfolioItem) => void;
  onDeleteItem: (id: string) => void;
  onResetDefaults: () => void;
}

const PRESET_URLS = [
  LOCAL_ASSETS.portfolioHdWard,
  LOCAL_ASSETS.heroDialysis,
  LOCAL_ASSETS.portfolioRadiology,
  LOCAL_ASSETS.portfolioTraining,
  LOCAL_ASSETS.portfolioRoSystem,
];

export const AdminPortfolioModal: React.FC<AdminPortfolioModalProps> = ({
  language,
  isOpen,
  items,
  onClose,
  onAddItem,
  onDeleteItem,
  onResetDefaults,
}) => {
  const tPortfolio = getTranslations(language).portfolio;
  const t = tPortfolio.admin;

  const [title, setTitle] = useState('');
  const [category, setCategory] =
    useState<PortfolioProjectCategory>('KSO Haemodialisa');
  const [mediaType, setMediaType] = useState<PortfolioMediaType>('IMAGE');
  const [location, setLocation] = useState('');
  const [year, setYear] = useState('2026');
  const [description, setDescription] = useState('');
  const [specsInput, setSpecsInput] = useState('');
  const [presetUrl, setPresetUrl] = useState(LOCAL_ASSETS.portfolioHdWard);
  const [uploadedPreviewUrl, setUploadedPreviewUrl] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 4 * 1024 * 1024) {
      setErrorMessage(t.errors.maxFile);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setUploadedPreviewUrl(reader.result);
        setErrorMessage('');
        if (file.type.startsWith('video/')) {
          setMediaType('VIDEO');
        } else if (file.type.startsWith('image/')) {
          setMediaType('IMAGE');
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim().length < 5) {
      setErrorMessage(t.errors.titleMin);
      return;
    }
    if (location.trim().length < 3) {
      setErrorMessage(t.errors.locationMin);
      return;
    }
    if (description.trim().length < 15) {
      setErrorMessage(t.errors.descMin);
      return;
    }

    const chosenMedia = uploadedPreviewUrl || presetUrl;
    const isUploadedVideo = uploadedPreviewUrl.startsWith('data:video/');

    const newItem: PortfolioItem = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      category,
      mediaType,
      thumbnailUrl: isUploadedVideo ? presetUrl : chosenMedia,
      mediaUrl: chosenMedia,
      location: location.trim(),
      year: year.trim() || '2026',
      description: description.trim(),
      specs: specsInput
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
      videoHighlights:
        mediaType === 'VIDEO' && !isUploadedVideo
          ? [
              `00:00 — ${
                language === 'en' ? 'Facility overview at' : 'Tinjauan fasilitas'
              } ${location.trim()}`,
              `00:15 — ${
                language === 'en'
                  ? 'Operational testing & equipment readiness'
                  : 'Uji operasional & kesiapan alat kesehatan'
              } (${tPortfolio.filters[category]})`,
              language === 'en'
                ? '00:25 — Handover & technical verification by FII team'
                : '00:25 — Serah terima dan verifikasi teknis oleh tim FII',
            ]
          : undefined,
      isCustom: true,
    };

    onAddItem(newItem);
    setTitle('');
    setLocation('');
    setDescription('');
    setSpecsInput('');
    setUploadedPreviewUrl('');
    setErrorMessage('');
    onClose();
  };

  const customItems = items.filter((item) => item.isCustom);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-portfolio-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-slate-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <h3
              id="admin-portfolio-title"
              className="font-display text-lg font-bold text-[#0B2C5F]"
            >
              {t.title}
            </h3>
            <p className="text-xs text-[#475569]">{t.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.closeAria}
            className="w-9 h-9 rounded-lg border border-slate-200 text-[#475569] hover:text-[#0F172A] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {errorMessage && (
            <div
              role="alert"
              className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 font-medium"
            >
              {errorMessage}
            </div>
          )}

          <div>
            <label
              htmlFor="admin-proj-title"
              className="block text-sm font-semibold text-[#0F172A] mb-1.5"
            >
              {t.nameLabel}
            </label>
            <input
              id="admin-proj-title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t.namePlaceholder}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#1D63B8] focus:ring-2 focus:ring-[#1D63B8]/15"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="admin-proj-category"
                className="block text-sm font-semibold text-[#0F172A] mb-1.5"
              >
                {t.categoryLabel}
              </label>
              <select
                id="admin-proj-category"
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value as PortfolioProjectCategory)
                }
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-[#0F172A] bg-white focus:outline-none focus:border-[#1D63B8] focus:ring-2 focus:ring-[#1D63B8]/15"
              >
                <option value="KSO Haemodialisa">
                  {tPortfolio.filters['KSO Haemodialisa']}
                </option>
                <option value="Radiologi & Alkes">
                  {tPortfolio.filters['Radiologi & Alkes']}
                </option>
                <option value="Pelatihan & Maintenance">
                  {tPortfolio.filters['Pelatihan & Maintenance']}
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="admin-proj-media"
                className="block text-sm font-semibold text-[#0F172A] mb-1.5"
              >
                {t.mediaTypeLabel}
              </label>
              <select
                id="admin-proj-media"
                value={mediaType}
                onChange={(e) =>
                  setMediaType(e.target.value as PortfolioMediaType)
                }
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-[#0F172A] bg-white focus:outline-none focus:border-[#1D63B8] focus:ring-2 focus:ring-[#1D63B8]/15"
              >
                <option value="IMAGE">{t.mediaPhotoOpt}</option>
                <option value="VIDEO">{t.mediaVideoOpt}</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label
                htmlFor="admin-proj-location"
                className="block text-sm font-semibold text-[#0F172A] mb-1.5"
              >
                {t.locationLabel}
              </label>
              <input
                id="admin-proj-location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder={t.locationPlaceholder}
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#1D63B8] focus:ring-2 focus:ring-[#1D63B8]/15"
                required
              />
            </div>

            <div>
              <label
                htmlFor="admin-proj-year"
                className="block text-sm font-semibold text-[#0F172A] mb-1.5"
              >
                {t.yearLabel}
              </label>
              <input
                id="admin-proj-year"
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="2026"
                className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm tabular-nums text-[#0F172A] focus:outline-none focus:border-[#1D63B8] focus:ring-2 focus:ring-[#1D63B8]/15"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="admin-proj-preset"
                className="block text-sm font-semibold text-[#0F172A] mb-1.5"
              >
                {t.presetLabel}
              </label>
              <select
                id="admin-proj-preset"
                value={presetUrl}
                onChange={(e) => setPresetUrl(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm text-[#0F172A] bg-white focus:outline-none focus:border-[#1D63B8]"
              >
                {PRESET_URLS.map((url, idx) => (
                  <option key={url} value={url}>
                    {t.presets[idx]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="admin-proj-upload"
                className="block text-sm font-semibold text-[#0F172A] mb-1.5"
              >
                {t.uploadLabel}
              </label>
              <label
                htmlFor="admin-proj-upload"
                className="flex items-center justify-center gap-2 w-full rounded-xl border border-dashed border-slate-300 bg-[#F8FAFC] hover:border-[#1D63B8] px-4 py-2.5 text-xs font-medium text-[#0B2C5F] cursor-pointer transition-colors"
              >
                <Upload className="w-4 h-4 text-[#1D63B8]" />
                <span>{uploadedPreviewUrl ? t.uploadReady : t.uploadPick}</span>
                <input
                  id="admin-proj-upload"
                  type="file"
                  accept="image/*,video/mp4,video/webm"
                  onChange={handleFileChange}
                  className="sr-only"
                />
              </label>
            </div>
          </div>

          <div>
            <label
              htmlFor="admin-proj-desc"
              className="block text-sm font-semibold text-[#0F172A] mb-1.5"
            >
              {t.descLabel}
            </label>
            <textarea
              id="admin-proj-desc"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t.descPlaceholder}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#1D63B8] focus:ring-2 focus:ring-[#1D63B8]/15"
              required
            />
          </div>

          <div>
            <label
              htmlFor="admin-proj-specs"
              className="block text-sm font-semibold text-[#0F172A] mb-1.5"
            >
              {t.specsLabel}
            </label>
            <input
              id="admin-proj-specs"
              type="text"
              value={specsInput}
              onChange={(e) => setSpecsInput(e.target.value)}
              placeholder={t.specsPlaceholder}
              className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-[#0F172A] focus:outline-none focus:border-[#1D63B8] focus:ring-2 focus:ring-[#1D63B8]/15"
            />
          </div>

          <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-[#475569] hover:bg-slate-50"
            >
              {t.cancelBtn}
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B2C5F] text-white text-sm font-semibold hover:bg-[#1D63B8] transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>{t.saveBtn}</span>
            </button>
          </div>
        </form>

        {/* Custom Items Management Footer */}
        <div className="border-t border-slate-200 bg-[#F8FAFC] px-6 py-4 space-y-3">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold text-[#0B2C5F]">
              {t.customListTitle(customItems.length)}
            </p>
            <button
              type="button"
              onClick={onResetDefaults}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#475569] hover:text-[#0B2C5F]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.resetBtn}</span>
            </button>
          </div>

          {customItems.length > 0 ? (
            <ul className="space-y-2">
              {customItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-3 bg-white rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs"
                >
                  <div className="min-w-0">
                    <p className="font-semibold text-[#0F172A] truncate">
                      {item.title}
                    </p>
                    <p className="text-[#475569] truncate">
                      {item.location} · {item.year}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onDeleteItem(item.id)}
                    aria-label={t.deleteAria(item.title)}
                    className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-[#475569]">{t.emptyCustom}</p>
          )}
        </div>
      </div>
    </div>
  );
};
