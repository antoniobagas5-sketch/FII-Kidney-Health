import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel,
}) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EBF3FA] via-[#F8FAFC] to-slate-200 text-[#0B2C5F] p-6 text-center ${className}`}
      >
        <div className="w-12 h-12 rounded-xl bg-white/90 border border-slate-200 flex items-center justify-center mb-3 shadow-xs">
          <Building2 className="w-6 h-6 text-[#1D63B8]" />
        </div>
        <p className="text-sm font-semibold text-[#0B2C5F] max-w-[220px]">
          {fallbackLabel || alt}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
