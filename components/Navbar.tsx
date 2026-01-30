import React, { useState } from 'react';
import { ViewType } from '../types';

interface NavbarProps {
  onLogoClick: () => void;
  onNavigate: (view: ViewType) => void;
  subtitle?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onLogoClick, onNavigate, subtitle }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (view: ViewType) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 lg:px-10 py-4 lg:py-6 bg-brand-dark/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1600px] mx-auto flex justify-between items-center">
        <div 
          onClick={onLogoClick}
          className="flex items-center gap-4 cursor-pointer group"
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <svg 
              width="140" 
              height="40" 
              viewBox="0 0 280 80" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 lg:h-9 w-auto transition-transform group-hover:scale-105"
            >
              <g transform="translate(40, 40)">
                {[...Array(8)].map((_, i) => (
                  <rect
                    key={i}
                    x="-12"
                    y="-28"
                    width="24"
                    height="10"
                    rx="2"
                    fill="#FF8585"
                    transform={`rotate(${i * 45})`}
                  />
                ))}
              </g>
              <text 
                x="85" 
                y="58" 
                fill="#FF8585" 
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  fontWeight: 800, 
                  fontSize: '62px', 
                  letterSpacing: '-3px' 
                }}
              >
                mota
              </text>
              <circle cx="265" cy="25" r="5" stroke="#FF8585" strokeWidth="1" />
              <text x="263" y="27.5" fill="#FF8585" style={{ fontSize: '6px', fontWeight: 'bold' }}>R</text>
            </svg>
            
            {subtitle && (
              <span className="hidden sm:inline-block text-gray-500 font-['Oswald'] font-light text-xl lg:text-2xl pt-1">
                / {subtitle}
              </span>
            )}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <button 
            onClick={() => handleNavigate(ViewType.HOME)}
            className="text-[10px] uppercase tracking-[2px] font-semibold text-text-body hover:text-brand-pink transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => handleNavigate(ViewType.ABOUT)}
            className="text-[10px] uppercase tracking-[2px] font-semibold text-text-body hover:text-brand-pink transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => handleNavigate(ViewType.FILMMAKERS)}
            className="text-[10px] uppercase tracking-[2px] font-semibold text-text-body hover:text-brand-pink transition-colors"
          >
            Filmmakers
          </button>
          <button 
            onClick={() => handleNavigate(ViewType.PARTNERS)}
            className="text-[10px] uppercase tracking-[2px] font-semibold text-text-body hover:text-brand-pink transition-colors"
          >
            Creative Partners
          </button>
          <button 
            onClick={() => handleNavigate(ViewType.CREW)}
            className="text-[10px] uppercase tracking-[2px] font-semibold text-text-body hover:text-brand-pink transition-colors"
          >
            Crew
          </button>
          <button 
            onClick={() => handleNavigate(ViewType.LOGIN)}
            className="text-[11px] uppercase tracking-[1px] border border-white/20 px-5 py-2 rounded hover:border-brand-pink hover:text-brand-pink transition-all duration-300 ml-2"
          >
            Client Access
          </button>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => handleNavigate(ViewType.LOGIN)}
            className="text-[10px] uppercase tracking-[1px] border border-white/20 px-3 py-2 rounded text-white"
          >
            Access
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl"
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 space-y-6">
          <button 
            onClick={() => handleNavigate(ViewType.HOME)}
            className="text-left text-sm uppercase tracking-[3px] font-bold text-gray-400 hover:text-brand-pink"
          >
            Home
          </button>
          <button 
            onClick={() => handleNavigate(ViewType.ABOUT)}
            className="text-left text-sm uppercase tracking-[3px] font-bold text-gray-400 hover:text-brand-pink"
          >
            About
          </button>
          <div className="h-px bg-white/5 w-full"></div>
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-widest text-gray-600 font-black">Verticals</p>
            <button 
              onClick={() => handleNavigate(ViewType.FILMMAKERS)}
              className="block w-full text-left text-lg font-['Oswald'] text-white hover:text-brand-pink"
            >
              Filmmakers
            </button>
            <button 
              onClick={() => handleNavigate(ViewType.PARTNERS)}
              className="block w-full text-left text-lg font-['Oswald'] text-white hover:text-brand-pink"
            >
              Creative Partners
            </button>
            <button 
              onClick={() => handleNavigate(ViewType.CREW)}
              className="block w-full text-left text-lg font-['Oswald'] text-white hover:text-brand-pink"
            >
              Crew
            </button>
          </div>
          <div className="h-px bg-white/5 w-full"></div>
          <button 
            onClick={() => handleNavigate(ViewType.CONTACT)}
            className="text-left text-sm uppercase tracking-[3px] font-bold text-brand-pink"
          >
            Contact Network
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;