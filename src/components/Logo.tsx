import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', size = 'md' }) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const subTitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-[11px]',
  };

  return (
    <a href="#inicio" className="flex items-center gap-3 group focus:outline-none">
      {/* Original Architectural Graphic Monogram */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]} bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg border border-amber-500/30 p-1.5 shadow-md shadow-amber-500/5 group-hover:border-amber-500/60 transition-all duration-300`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Structural Frame Lines */}
          <path d="M20 20H80V32H36V44H70V56H36V68H80V80H20V20Z" fill="#F8FAFC" />
          {/* Golden Construction Beams */}
          <path d="M70 20H80V32H70V20Z" fill="#F59E0B" />
          <path d="M60 44H70V56H60V44Z" fill="#F59E0B" />
          <path d="M70 68H80V80H70V68Z" fill="#F59E0B" />
          {/* Accent node */}
          <circle cx="20" cy="20" r="5" fill="#F59E0B" />
        </svg>
      </div>

      <div className="flex flex-col text-left">
        <span className={`font-extrabold tracking-wider leading-none ${titleSizes[size]} ${isLight ? 'text-white' : 'text-slate-900'} group-hover:text-amber-400 transition-colors`}>
          ECOEDIF
        </span>
        <span className={`font-medium tracking-wide ${subTitleSizes[size]} ${isLight ? 'text-slate-400' : 'text-slate-600'} group-hover:text-slate-300 transition-colors uppercase mt-0.5`}>
          Constructora Ecoedif SAS
        </span>
      </div>
    </a>
  );
};
