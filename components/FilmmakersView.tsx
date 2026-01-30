
import React from 'react';
import { ViewType } from '../types';

interface FilmmakersViewProps {
  onNavigateContact: () => void;
}

const FilmmakersView: React.FC<FilmmakersViewProps> = ({ onNavigateContact }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-[radial-gradient(circle_at_center,_#2a2a2a_0%,_#111_70%)]">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-['Oswald'] leading-tight mb-8">
            The Challenge is <span className="text-brand-pink italic">Clarity</span>,<br />
            Not Access.
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-text-body mb-12 font-light">
            A trusted operating partner for studios and filmmakers. We replace uncertainty with intelligence, providing the clarity needed to navigate complex global productions.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={onNavigateContact}
              className="px-10 py-4 bg-brand-pink text-white uppercase font-bold text-xs tracking-[2px] rounded hover:bg-[#ff6b6b] transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-['Oswald'] text-center mb-20 tracking-tight">
          Lifecycle Support
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Development Card */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-lg hover:border-brand-pink hover:-translate-y-2 transition-all duration-300">
            <div className="text-4xl text-brand-pink mb-8">
              <i className="fa-solid fa-compass-drafting"></i>
            </div>
            <h3 className="text-2xl font-['Oswald'] mb-6 text-white tracking-wide">Development</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400 text-sm">
                <i className="fa-solid fa-check text-brand-pink mt-1"></i>
                Script Breakdown & Budgeting
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <i className="fa-solid fa-check text-brand-pink mt-1"></i>
                Tax Incentive Strategy
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <i className="fa-solid fa-check text-brand-pink mt-1"></i>
                Territory Discovery
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <i className="fa-solid fa-check text-brand-pink mt-1"></i>
                Scenario Modeling
              </li>
            </ul>
          </div>

          {/* Production Card */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-lg hover:border-brand-pink hover:-translate-y-2 transition-all duration-300">
            <div className="text-4xl text-brand-pink mb-8">
              <i className="fa-solid fa-video"></i>
            </div>
            <h3 className="text-2xl font-['Oswald'] mb-6 text-white tracking-wide">Production</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400 text-sm">
                <i className="fa-solid fa-check text-brand-pink mt-1"></i>
                Real-time Capacity Checks
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <i className="fa-solid fa-check text-brand-pink mt-1"></i>
                Competitive Bidding
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <i className="fa-solid fa-check text-brand-pink mt-1"></i>
                On-Set Solutions
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <i className="fa-solid fa-check text-brand-pink mt-1"></i>
                Creative Team Locking
              </li>
            </ul>
          </div>

          {/* Post Card */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-lg hover:border-brand-pink hover:-translate-y-2 transition-all duration-300">
            <div className="text-4xl text-brand-pink mb-8">
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <h3 className="text-2xl font-['Oswald'] mb-6 text-white tracking-wide">Post</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400 text-sm">
                <i className="fa-solid fa-check text-brand-pink mt-1"></i>
                "911" Emergency Capacity
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <i className="fa-solid fa-check text-brand-pink mt-1"></i>
                Evolved Creative Solutions
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <i className="fa-solid fa-check text-brand-pink mt-1"></i>
                Reshoot Coverage
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <i className="fa-solid fa-check text-brand-pink mt-1"></i>
                Budget Management
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-pink py-32 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-['Oswald'] mb-6">Your Single Source of Truth.</h2>
          <p className="text-xl mb-12 opacity-90 font-light">
            Connect with our team to build your next production strategy.
          </p>
          <button 
            onClick={onNavigateContact}
            className="inline-block px-12 py-5 border-2 border-white text-white uppercase font-bold text-sm tracking-[3px] rounded hover:bg-white hover:text-brand-pink transition-all"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default FilmmakersView;
