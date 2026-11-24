import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark' | 'circular';
  className?: string;
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'circular', className = '', iconOnly = false }) => {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#FFB020] rounded-xl ${className}`}
      aria-label="Registify Services Home"
    >
      {/* Official Registify Logo Mark in Crisp White Circle Badge */}
      <div className="relative w-11 h-11 md:w-13 md:h-13 rounded-full bg-white shadow-md flex items-center justify-center p-1.5 flex-shrink-0 transition-transform duration-200 group-hover:scale-105 border border-[#DFE4F1]/40">
        <img
          src="/images/registify-mark.png"
          alt="Registify Services"
          className="w-full h-full object-contain select-none"
        />
      </div>

      {!iconOnly && (
        <div className="flex flex-col text-left">
          <div className="flex items-center tracking-tight font-serif text-lg md:text-xl font-bold leading-none">
            <span className={variant === 'light' ? 'text-white' : 'text-[#2B1E6B]'}>
              Registify
            </span>
            <span className="ml-1 text-[#FFB020]">
              Services
            </span>
          </div>
          <span className={`text-[10px] uppercase font-bold tracking-[0.2em] mt-1 ${
            variant === 'light' ? 'text-[#CFC6FF]' : 'text-[#6B6590]'
          }`}>
            Empowering Growth
          </span>
        </div>
      )}
    </Link>
  );
};
