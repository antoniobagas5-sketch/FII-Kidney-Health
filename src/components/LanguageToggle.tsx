import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types';

interface LanguageToggleProps {
  language: Language;
  onChange: (lang: Language) => void;
  variant?: 'light' | 'dark';
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  language,
  onChange,
  variant = 'light',
}) => {
  const isDark = variant === 'dark';

  return (
    <div
      role="group"
      aria-label={language === 'id' ? 'Pilihan bahasa' : 'Language selector'}
      className={`inline-flex items-center gap-1.5 p-1 rounded-xl border whitespace-nowrap shrink-0 ${
        isDark
          ? 'bg-white/10 border-white/15 text-white'
          : 'bg-[#F8FAFC] border-slate-200/90 text-[#0F172A]'
      }`}
    >
      <Globe
        aria-hidden="true"
        className={`w-3.5 h-3.5 ml-1.5 shrink-0 ${
          isDark ? 'text-blue-200' : 'text-[#1D63B8]'
        }`}
      />
      <button
        type="button"
        onClick={() => onChange('id')}
        aria-pressed={language === 'id'}
        className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
          language === 'id'
            ? isDark
              ? 'bg-white text-[#0B2C5F] shadow-xs'
              : 'bg-[#0B2C5F] text-white shadow-xs'
            : isDark
              ? 'text-blue-100 hover:text-white'
              : 'text-[#475569] hover:text-[#0B2C5F]'
        }`}
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => onChange('en')}
        aria-pressed={language === 'en'}
        className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
          language === 'en'
            ? isDark
              ? 'bg-white text-[#0B2C5F] shadow-xs'
              : 'bg-[#0B2C5F] text-white shadow-xs'
            : isDark
              ? 'text-blue-100 hover:text-white'
              : 'text-[#475569] hover:text-[#0B2C5F]'
        }`}
      >
        EN
      </button>
    </div>
  );
};
