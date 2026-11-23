import React from 'react';

interface BrandLogoProps {
  variant?: 'header' | 'footer';
  tone?: 'dark' | 'light';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'header',
  tone = 'dark',
}) => {
  const primaryColor = tone === 'light' ? '#FFFFFF' : '#0B2C5F';
  const accentColor = tone === 'light' ? '#93C5FD' : '#1D63B8';
  const subTextColor = tone === 'light' ? 'text-slate-300' : 'text-[#475569]';

  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0">
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M17.8 6.5C11.2 6.5 6.5 11.9 6.5 19.6C6.5 27.2 10.9 32.8 17.3 32.8C20.5 32.8 22.8 30.8 23.3 28.4C23.8 26.2 21.8 24.4 20.5 22.7C19.6 21.5 19.4 19.2 20.4 17.8C21.8 15.8 24.4 14.3 24.4 11.4C24.4 8.5 21.6 6.5 17.8 6.5Z"
          fill={primaryColor}
        />
        <path
          d="M18.8 19.8C22.4 19.4 25.9 21.8 26.6 26.9L27.6 34.5"
          stroke={accentColor}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M21.8 17.6C25.2 17.6 29.1 20.3 29.9 26.5L30.9 34.5"
          stroke={primaryColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17.2 16.2L21.5 19.5M17 20.2L21.2 19.7M18.2 23.6L21.7 20.6"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>

      {variant === 'header' ? (
        <span
          className={`font-display text-lg font-bold tracking-tight whitespace-nowrap shrink-0 ${
            tone === 'light' ? 'text-white' : 'text-[#0B2C5F]'
          }`}
        >
          FII Kidney Health
        </span>
      ) : (
        <span className="flex flex-col leading-tight">
          <span
            className={`font-display text-lg font-bold tracking-tight ${
              tone === 'light' ? 'text-white' : 'text-[#0B2C5F]'
            }`}
          >
            FII Kidney Health
          </span>
          <span className={`text-xs font-medium ${subTextColor}`}>
            PT Foremed Indo Industri
          </span>
        </span>
      )}
    </span>
  );
};
