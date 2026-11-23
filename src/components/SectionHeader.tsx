import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3 bg-cyan-50 text-cyan-900 border border-cyan-200/80 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
