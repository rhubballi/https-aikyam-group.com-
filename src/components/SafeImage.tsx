import React, { useState, useEffect } from 'react';
import { HardHat, Building2, Truck, Layers, ShieldCheck } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  category?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({ 
  src, 
  alt = 'Construction Execution', 
  fallbackSrc, 
  className = '', 
  category,
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  if (hasError || !imgSrc) {
    // Pick an appropriate icon based on alt text or category
    const lower = (alt + ' ' + (category || '')).toLowerCase();
    let IconComponent = HardHat;
    let discipline = "Civil Engineering Execution";

    if (lower.includes('road') || lower.includes('highway') || lower.includes('paver')) {
      IconComponent = Truck;
      discipline = "Highway & Pavement Infrastructure";
    } else if (lower.includes('pipeline') || lower.includes('water') || lower.includes('intake')) {
      IconComponent = Layers;
      discipline = "Water Pipeline & Intake Jackwells";
    } else if (lower.includes('rcc') || lower.includes('foundation') || lower.includes('concrete')) {
      IconComponent = Layers;
      discipline = "Heavy RCC Works & Structural Concrete";
    } else if (lower.includes('building') || lower.includes('commercial') || lower.includes('industrial') || lower.includes('shed')) {
      IconComponent = Building2;
      discipline = "Commercial & Industrial Infrastructure";
    } else if (lower.includes('bridge') || lower.includes('span') || lower.includes('viaduct')) {
      IconComponent = HardHat;
      discipline = "Major River Bridge & Box Girders";
    }

    return (
      <div 
        className={`relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
        style={{ minHeight: '180px' }}
      >
        {/* Engineering Blueprint Grid Background */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(45, 212, 191, 0.4) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Diagonal architectural structural guide lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-teal-400" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-cyan-400" />
        </svg>

        {/* Center Technical Emblem */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-14 h-14 rounded-2xl bg-teal-500/15 border border-teal-400/30 text-teal-300 flex items-center justify-center shadow-lg shadow-teal-950/50 mb-3 backdrop-blur-xs">
            <IconComponent className="w-7 h-7" />
          </div>

          <span className="text-[10px] uppercase font-bold tracking-widest text-teal-400 px-2.5 py-0.5 rounded-full bg-teal-950/80 border border-teal-500/30 mb-1.5 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" />
            JP CONSTRUCTIONS
          </span>

          <span className="font-display font-bold text-sm sm:text-base text-slate-100 max-w-[90%] leading-tight">
            {alt || discipline}
          </span>

          <span className="text-[11px] text-slate-400 mt-1 font-medium">
            Verified On-Site Execution
          </span>
        </div>

        {/* Tech Corner Markers */}
        <div className="absolute top-2 left-2 text-[9px] font-mono text-teal-500/40">JP-CIVIL-01</div>
        <div className="absolute bottom-2 right-2 text-[9px] font-mono text-teal-500/40">IS/IRC-SPEC</div>
      </div>
    );
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={className}
      loading="lazy"
      {...props}
    />
  );
};
