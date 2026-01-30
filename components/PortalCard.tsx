import React from 'react';
import { PortalType } from '../types';

interface PortalCardProps {
  type: PortalType;
  title: string;
  label: string;
  description: string;
  icon: string;
  onClick: () => void;
}

const PortalCard: React.FC<PortalCardProps> = ({ title, label, description, icon, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="portal-card-gradient relative bg-white/5 border border-white/10 p-10 rounded-lg text-left transition-all duration-500 hover:-translate-y-3 hover:bg-white/[0.08] hover:shadow-2xl cursor-pointer group overflow-hidden h-full flex flex-col"
    >
      {/* Header Row: Icon next to Label */}
      <div className="flex items-center gap-4 mb-2">
        <div className="text-xl text-brand-pink group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
          <i className={icon}></i>
        </div>
        
        {/* Primary Vertical Heading: Filmmakers, Crew, etc. */}
        <h2 className="text-2xl sm:text-3xl font-['Oswald'] text-white leading-none tracking-tight group-hover:text-brand-pink transition-colors uppercase pt-1">
          {label}
        </h2>
      </div>
      
      {/* Functional Role Subtitle */}
      <div className="text-[10px] uppercase tracking-[3px] text-gray-500 font-black mb-8">
        {title}
      </div>

      <p className="text-text-body text-[14px] mb-8 leading-relaxed flex-grow font-light">
        {description}
      </p>
      
      <div className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-[2px] group-hover:text-brand-pink transition-colors mt-auto border-t border-white/5 pt-6">
        Learn More
        <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-2"></i>
      </div>
    </div>
  );
};

export default PortalCard;