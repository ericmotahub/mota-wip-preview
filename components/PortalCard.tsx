
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
      className="portal-card-gradient relative bg-white/5 border border-white/10 p-10 rounded-lg text-left transition-all duration-500 hover:-translate-y-3 hover:bg-white/[0.08] hover:shadow-2xl cursor-pointer group overflow-hidden"
    >
      <div className="text-4xl text-brand-pink mb-8 group-hover:scale-110 transition-transform duration-500">
        <i className={icon}></i>
      </div>
      <div className="text-[11px] uppercase tracking-[3px] text-gray-500 font-bold mb-3">
        {label}
      </div>
      <h2 className="text-3xl font-['Oswald'] text-white mb-4 leading-tight">
        {title}
      </h2>
      <p className="text-text-body text-[15px] mb-8 leading-relaxed h-[100px] line-clamp-4">
        {description}
      </p>
      <div className="flex items-center gap-3 text-xs uppercase font-bold tracking-[2px] group-hover:text-brand-pink transition-colors">
        Explore Solutions 
        <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-2"></i>
      </div>
    </div>
  );
};

export default PortalCard;
