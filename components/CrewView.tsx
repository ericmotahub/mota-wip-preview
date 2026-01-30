
import React from 'react';

interface CrewViewProps {
  onNavigateContact: () => void;
}

const CrewView: React.FC<CrewViewProps> = ({ onNavigateContact }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-['Oswald'] leading-[0.9] mb-8">
            Join the<br />
            <span className="text-brand-pink">Global Network.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-text-body mb-12 font-light">
            Access exclusive opportunities across our roster of Creative Partners and Filmmakers. Hear first. Get placed faster.
          </p>
          <button 
            onClick={onNavigateContact}
            className="inline-block px-10 py-4 border border-brand-pink text-brand-pink uppercase font-bold text-xs tracking-[2px] rounded hover:bg-brand-pink hover:text-white transition-all"
          >
            Join the Talent Network
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-brand-grey py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-['Oswald'] text-center mb-20 tracking-tight">
            Unrivaled Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: "fa-building",
                title: "Creative Partners",
                desc: "Direct placement with the world's leading VFX facilities. Skip the application pile and get in front of decision-makers."
              },
              {
                icon: "fa-film",
                title: "Filmmakers",
                desc: "Exclusive access to production-side roles. Connect with supervisors and producers building their show teams."
              },
              {
                icon: "fa-bolt",
                title: "Priority Status",
                desc: "Hear about roles first. Our network members get notified of upcoming slate needs before they go public."
              }
            ].map((benefit, i) => (
              <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-lg hover:border-brand-pink hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl text-brand-pink mb-8">
                  <i className={`fa-solid ${benefit.icon}`}></i>
                </div>
                <h3 className="text-2xl font-['Oswald'] mb-4 text-white">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Teaser */}
      <section className="py-32 px-6 text-center bg-gradient-to-b from-brand-dark to-[#111]">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[11px] uppercase tracking-widest text-white mb-8">
            Coming Soon
          </span>
          <h2 className="text-5xl md:text-6xl font-['Oswald'] mb-8 leading-tight">
            The Digital Platform
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-text-body mb-12 font-light">
            We are building the future of artist management. Soon, you'll be able to manage your availability, view curated matches, and handle bookings directly through the Mota App.
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-10 max-w-2xl mx-auto mb-12">
            <div className="flex flex-wrap gap-8 justify-center opacity-50">
              <div className="flex items-center gap-2 text-sm text-white">
                <i className="fa-solid fa-check text-brand-pink"></i> Availability Calendar
              </div>
              <div className="flex items-center gap-2 text-sm text-white">
                <i className="fa-solid fa-check text-brand-pink"></i> Automated Matching
              </div>
              <div className="flex items-center gap-2 text-sm text-white">
                <i className="fa-solid fa-check text-brand-pink"></i> One-Click Booking
              </div>
            </div>
          </div>
          
          <button 
            onClick={onNavigateContact}
            className="inline-block px-10 py-4 border border-white text-white uppercase font-bold text-xs tracking-[2px] rounded hover:bg-white hover:text-brand-dark transition-all"
          >
            Get Early Access
          </button>
        </div>
      </section>

      {/* Steps Section */}
      <section id="join" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { num: "01", title: "Connect", desc: "Submit your portfolio to join our curated roster of top-tier talent." },
              { num: "02", title: "Match", desc: "We actively pair your skills with incoming slate needs from our partners." },
              { num: "03", title: "Work", desc: "Secure premium contracts with leading studios and productions." }
            ].map((step, i) => (
              <div key={i} className="text-center group">
                <div className="font-['Oswald'] text-7xl text-white/10 mb-[-30px] transition-colors group-hover:text-brand-pink/20">
                  {step.num}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-['Oswald'] text-white mb-4">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrewView;
