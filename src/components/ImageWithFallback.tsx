import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackCategory?: string;
  className?: string;
  aspectRatioClass?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = '',
  fallbackTitle,
  fallbackCategory = 'Royal Palace Venue',
  className = '',
  aspectRatioClass = 'aspect-[4/3]',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div 
        className={`w-full ${aspectRatioClass} bg-gradient-to-br from-[#3D0A14] via-[#701325] to-[#2B070E] flex flex-col justify-center items-center p-6 text-center text-[#FAF8F5] relative overflow-hidden group ${className}`}
        aria-label={alt || fallbackTitle || 'Venue image fallback'}
      >
        {/* Subtle decorative gold pattern background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Mandap / Floral motif icon */}
        <div className="relative z-10 w-12 h-12 mb-3 rounded-full bg-[#FAF8F5]/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>

        <span className="relative z-10 text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-1">
          {fallbackCategory}
        </span>

        <h4 className="relative z-10 font-serif text-lg font-medium text-[#FAF8F5] line-clamp-2 max-w-xs">
          {fallbackTitle || alt || 'Royal Palace Wedding Venue'}
        </h4>

        <div className="relative z-10 mt-2 w-12 h-0.5 bg-[#D4AF37]/60" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#1F070C] ${className}`}>
      {isLoading && (
        <div className={`absolute inset-0 bg-[#2B070E] animate-pulse flex items-center justify-center text-[#C5A059]/60 text-xs tracking-wider uppercase ${aspectRatioClass}`}>
          Loading Venue Photo...
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        referrerPolicy="no-referrer"
        {...props}
      />
    </div>
  );
};
