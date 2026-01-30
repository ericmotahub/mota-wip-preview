import React from 'react';

interface AboutViewProps {
  onNavigateContact: () => void;
}

const AboutView: React.FC<AboutViewProps> = ({ onNavigateContact }) => {
  const leadership = [
    {
      name: "Eric Kohler",
      icon: "fa-user-shield",
      bio: "Experienced VFX Executive with leadership roles at DNEG, Zoic, and SSVFX. Eric has deep connections across the VFX ecosystem and understands exactly how Studios evaluate and award vendors."
    },
    {
      name: "Shauna Bryan",
      icon: "fa-user-astronaut",
      bio: "A veteran VFX Executive with experience at Sony Pictures Imageworks, Method Studios, and Luma Pictures. Shauna brings high-level studio advocacy, production strategy, and deal-making expertise to the partnership."
    },
    {
      name: "Kurt Maclachlan",
      icon: "fa-user-group",
      bio: "Owner of Motus VFX and host of The VFX Script podcast. A recognized leader in recruitment and brand strategy, ensuring Mota has the talent access to back up every bid."
    }
  ];

  const partners = [
    { name: "Disney", color: "#113CCF" },
    { name: "NETFLIX", color: "#E50914" },
    { name: "Universal", color: "#000" },
    { name: "Warner Bros.", color: "#000" },
    { name: "Sony Pictures", color: "#000" },
    { name: "Amazon MGM", color: "#00A8E1" },
    { name: "Marvel", color: "#E50914" },
    { name: "Lucasfilm", color: "#333" }
  ];

  return (
    <div className="pt-20 bg-brand-dark">
      {/* Hero Section */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h4 className="text-brand-pink font-bold uppercase tracking-[4px] text-xs mb-6">About Us</h4>
          <h1 className="text-6xl sm:text-8xl md:text-[110px] font-['Oswald'] leading-none mb-8">
            What is <span className="text-brand-pink">Mota?</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-body font-light leading-relaxed max-w-3xl mx-auto">
            We are building a unified ecosystem for the visual effects industry. By connecting the fragmented world of production, facilities, and talent, Mota replaces uncertainty with intelligence and noise with clarity.
          </p>
        </div>
      </section>

      {/* Essence Section */}
      <section className="py-24 px-6 bg-white/[0.03] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-['Oswald'] leading-tight mb-8">
                Bridging the<br />Complexity Gap.
              </h2>
              <p className="text-lg text-text-body font-light leading-relaxed">
                The VFX market has shifted. Speed is leverage, relationships are hard to scale, and strategic bandwidth is limited. Mota was created to close this gap.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-10 border-l-4 border-brand-pink bg-white/5 rounded-r-lg">
                <h3 className="text-2xl font-['Oswald'] mb-4">Intelligence Latency</h3>
                <p className="text-gray-400 font-light">We ensure you have the early intelligence needed to capture opportunities before they reach the open market.</p>
              </div>
              <div className="p-10 border-l-4 border-brand-pink bg-white/5 rounded-r-lg">
                <h3 className="text-2xl font-['Oswald'] mb-4">Relationship Scale</h3>
                <p className="text-gray-400 font-light">We provide the operational infrastructure to maintain active, high-value relationships across the entire industry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-['Oswald'] text-center mb-24 tracking-tight uppercase">Our Core Pillars</h2>
        
        <div className="space-y-16">
          {[
            { 
              title: "For Filmmakers", 
              desc: "We act as a trusted operating partner. Not a vendor list, but a strategic extension of your production team—offering clarity on capacity, tax incentives, and creative fit to help you cast your show with confidence." 
            },
            { 
              title: "For Partners", 
              desc: "We supercharge internal efforts. Mota acts as a specialized extension to leadership and business development, providing the market data, client access, and executive positioning needed to compete for premium work." 
            },
            { 
              title: "For Talent", 
              desc: "We provide access and community. Connecting top-tier artists directly with the studios defining the industry, ensuring the best talent finds the best work." 
            }
          ].map((pillar, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 pb-16 border-b border-white/5 last:border-0">
              <div className="md:w-1/3 text-4xl md:text-5xl font-['Oswald'] text-brand-pink uppercase leading-none">
                {pillar.title}
              </div>
              <div className="md:w-2/3 text-xl text-text-body font-light leading-relaxed">
                {pillar.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-['Oswald'] text-center mb-20 tracking-tight uppercase">Led by Industry Insiders</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leadership.map((leader, i) => (
              <div key={i} className="group cursor-default">
                <div className="aspect-[4/5] bg-gradient-to-br from-white/10 to-transparent mb-8 rounded-lg flex items-center justify-center border border-white/5 transition-all duration-500 group-hover:border-brand-pink/50 overflow-hidden">
                  <i className={`fa-solid ${leader.icon} text-7xl text-white/20 transition-all duration-500 group-hover:text-brand-pink group-hover:scale-110`}></i>
                </div>
                <h3 className="text-3xl font-['Oswald'] mb-4 text-white uppercase">{leader.name}</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relationships Section - White Background Break */}
      <section className="py-32 px-6 bg-white text-brand-dark">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-['Oswald'] mb-4 uppercase">Unrivaled Access</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-16 font-light">
            We provide relationship-based support across major studios and filmmakers.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {partners.map((partner, i) => (
              <div 
                key={i} 
                style={{ borderColor: '#eee' }}
                className="p-8 border-2 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl font-['Oswald'] font-bold tracking-tighter" style={{ color: partner.color }}>
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20">
            <button 
              onClick={onNavigateContact}
              className="px-12 py-5 bg-brand-pink text-white uppercase font-bold text-sm tracking-[3px] rounded hover:bg-[#ff6b6b] transition-all"
            >
              Initialize Connection
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutView;