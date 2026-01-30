import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PortalCard from './components/PortalCard';
import FilmmakersView from './components/FilmmakersView';
import PartnersView from './components/PartnersView';
import CrewView from './components/CrewView';
import AboutView from './components/AboutView';
import { PortalType, ViewType } from './types';

const ContactView: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  
  if (submitted) {
    return (
      <div className="pt-40 pb-20 px-6 text-center min-h-[80vh] flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-brand-pink rounded-full flex items-center justify-center mb-8">
          <i className="fa-solid fa-check text-4xl text-white"></i>
        </div>
        <h1 className="text-5xl font-['Oswald'] mb-4">Message Received.</h1>
        <p className="text-text-body text-xl max-w-lg">Our network team will be in touch within 24 hours to begin the discovery process.</p>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-['Oswald'] mb-4">Connect with MOTA</h1>
        <p className="text-text-body text-xl mb-12">Select your vertical and provide your details to access the engine.</p>
        
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Full Name</label>
              <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 focus:outline-none focus:border-brand-pink transition-colors text-white" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Email Address</label>
              <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 focus:outline-none focus:border-brand-pink transition-colors text-white" />
            </div>
          </div>
          
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Your Professional Vertical</label>
            <select className="w-full bg-[#222] border border-white/10 rounded-lg px-5 py-4 focus:outline-none focus:border-brand-pink transition-colors appearance-none cursor-pointer text-white">
              <option value="filmmaker">Filmmaker / Production Side</option>
              <option value="partner">Creative Partner / Studio Side</option>
              <option value="crew">Individual Talent / Crew</option>
              <option value="other">Other Inquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">How can we help?</label>
            <textarea required rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 focus:outline-none focus:border-brand-pink transition-colors resize-none text-white"></textarea>
          </div>

          <button type="submit" className="w-full py-5 bg-brand-pink text-white uppercase font-bold text-sm tracking-[3px] rounded hover:bg-[#ff6b6b] transition-all">
            Initialize Connection
          </button>
        </form>
      </div>
    </div>
  );
};

const LoginView: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-6 flex flex-col items-center justify-center min-h-[90vh]">
      <div className="max-w-md w-full bg-white/5 border border-white/10 p-10 rounded-xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-['Oswald'] mb-2">Client Access</h1>
          <p className="text-gray-500 text-sm tracking-widest uppercase">Secure Portal</p>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Project Identity (Email)</label>
            <input type="email" placeholder="client@studio.com" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-pink text-white" />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Access Key</label>
            <input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-brand-pink text-white" />
          </div>
          <button className="w-full py-4 bg-white/10 text-white uppercase font-bold text-xs tracking-[2px] rounded hover:bg-brand-pink transition-all">
            Enter Engine
          </button>
          <div className="text-center">
            <a href="#" className="text-[10px] uppercase tracking-widest text-gray-600 hover:text-brand-pink">Trouble Accessing?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.HOME);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const portals = [
    {
      type: PortalType.FILMMAKERS,
      label: "Filmmakers",
      title: "Production Planning",
      icon: "fa-solid fa-film",
      description: "Access a curated network of global partners. We provide the clarity, options, and confidence needed to navigate complex productions with ease."
    },
    {
      type: PortalType.PARTNERS,
      label: "Creative Partners",
      title: "Business Development",
      icon: "fa-solid fa-building",
      description: "Join a curated network of high-quality studios. Strategic growth and global opportunities through trusted partnership and shared vision."
    },
    {
      type: PortalType.CREW,
      label: "Crew",
      title: "Recruitment",
      icon: "fa-solid fa-users",
      description: "Join a curated talent network. Hands-on placement connecting top-tier artists directly with the studios defining the future of the industry."
    }
  ];

  const handlePortalClick = (type: PortalType) => {
    if (type === PortalType.FILMMAKERS) {
      setCurrentView(ViewType.FILMMAKERS);
    } else if (type === PortalType.PARTNERS) {
      setCurrentView(ViewType.PARTNERS);
    } else if (type === PortalType.CREW) {
      setCurrentView(ViewType.CREW);
    }
  };

  const navigateHome = () => setCurrentView(ViewType.HOME);
  const navigateContact = () => setCurrentView(ViewType.CONTACT);

  const getSubtitle = () => {
    switch (currentView) {
      case ViewType.FILMMAKERS: return 'FILMMAKERS';
      case ViewType.PARTNERS: return 'CREATIVE PARTNERS';
      case ViewType.CREW: return 'CREW';
      case ViewType.ABOUT: return 'ABOUT';
      case ViewType.CONTACT: return 'CONTACT';
      case ViewType.LOGIN: return 'ACCESS';
      default: return undefined;
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case ViewType.FILMMAKERS:
        return <FilmmakersView onNavigateContact={navigateContact} />;
      case ViewType.PARTNERS:
        return <PartnersView onNavigateContact={navigateContact} />;
      case ViewType.CREW:
        return <CrewView onNavigateContact={navigateContact} />;
      case ViewType.ABOUT:
        return <AboutView onNavigateContact={navigateContact} />;
      case ViewType.CONTACT:
        return <ContactView />;
      case ViewType.LOGIN:
        return <LoginView />;
      case ViewType.HOME:
      default:
        return (
          <>
            {/* Animated Background Graphics */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-brand-pink/5 rounded-full blur-[140px]"></div>
              
              {/* Brand Logo Wheel Animation */}
              <div className="animate-ring absolute top-1/2 left-1/2 w-[900px] h-[900px] opacity-[0.06]">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute top-1/2 left-1/2 w-[140px] h-[60px] bg-brand-pink rounded-lg shadow-[0_0_30px_rgba(255,133,133,0.3)]"
                    style={{
                      transformOrigin: 'center center',
                      transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-280px) rotate(22deg)`
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6 pt-40 pb-20">
              <div className="max-w-7xl mx-auto w-full">
                <h1 className="text-5xl sm:text-8xl md:text-[110px] font-['Oswald'] leading-none tracking-tight mb-8 text-white uppercase">
                  The Solution Engine
                  <span className="block text-brand-pink text-2xl sm:text-4xl md:text-5xl tracking-[8px] mt-2 font-light">
                    FOR GLOBAL VFX
                  </span>
                </h1>
                <p className="max-w-3xl mx-auto text-xl md:text-2xl text-text-body font-light mb-16 leading-relaxed">
                  A hands-on operating partner connecting the fragmented world of visual effects through a curated global network and trusted relationships.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  {portals.map((portal) => (
                    <PortalCard 
                      key={portal.type}
                      {...portal}
                      onClick={() => handlePortalClick(portal.type)}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Network Summary Section */}
            <section id="network-summary" className="relative z-10 py-32 bg-white/[0.02] border-y border-white/5">
              <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-['Oswald'] mb-8 tracking-tight text-white uppercase">Building confidence in a complex industry.</h2>
                <p className="text-lg text-text-body mb-16 max-w-4xl mx-auto leading-relaxed">
                  We believe the best work happens when the right people find each other. Mota replaces the noise of the open market with a curated network of trusted partners. Whether you are casting a show, growing a studio, or building a career, we are here to help you navigate the complexity of modern production with clarity, genuine connection, and absolute confidence.
                </p>
                
                {/* Philosophical Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                  <div className="bg-white/5 p-12 text-left border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/10 transition-colors group">
                    <div className="text-brand-pink font-['Oswald'] text-5xl mb-6 opacity-30 group-hover:opacity-100 transition-opacity">01</div>
                    <h3 className="text-2xl font-['Oswald'] text-white mb-4 uppercase tracking-wider">Collective Intelligence</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">Access deep, multi-territory insights that internal teams often lack, providing a distinct competitive edge in planning.</p>
                  </div>
                  <div className="bg-white/5 p-12 text-left border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/10 transition-colors group">
                    <div className="text-brand-pink font-['Oswald'] text-5xl mb-6 opacity-30 group-hover:opacity-100 transition-opacity">02</div>
                    <h3 className="text-2xl font-['Oswald'] text-white mb-4 uppercase tracking-wider">Radical Advocacy</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">We represent your interests with absolute transparency, acting as the bridge between creative vision and fiscal reality.</p>
                  </div>
                  <div className="bg-white/5 p-12 text-left hover:bg-white/10 transition-colors group">
                    <div className="text-brand-pink font-['Oswald'] text-5xl mb-6 opacity-30 group-hover:opacity-100 transition-opacity">03</div>
                    <h3 className="text-2xl font-['Oswald'] text-white mb-4 uppercase tracking-wider">Frictionless Flow</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">A streamlined engine that eliminates operational drag, letting creators focus on the art while we handle the network.</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col selection:bg-brand-pink/30">
      <Navbar 
        onLogoClick={navigateHome} 
        onNavigate={(view) => setCurrentView(view)}
        subtitle={getSubtitle()} 
      />

      <main className="relative flex-grow">
        {renderContent()}
      </main>

      <footer className="relative z-10 py-16 text-center border-t border-white/5 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-2xl font-['Oswald'] mb-6 tracking-tighter text-brand-pink">MOTA</div>
          <p className="text-[11px] text-gray-600 uppercase tracking-[4px] font-semibold">
            © 2026 Mota Hub Inc. Empowering Visual Excellence.
          </p>
          <div className="mt-8 flex justify-center gap-8 text-gray-500 text-sm">
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView(ViewType.ABOUT); }} className="hover:text-white transition-colors">About Mota</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView(ViewType.CONTACT); }} className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;