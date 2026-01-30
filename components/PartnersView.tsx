
import React from 'react';

interface PartnersViewProps {
  onNavigateContact: () => void;
}

const PartnersView: React.FC<PartnersViewProps> = ({ onNavigateContact }) => {
  return (
    <div className="pt-20 bg-brand-dark">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-brand-dark text-white min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full relative z-10 text-left">
          <span className="block text-brand-pink font-bold uppercase tracking-[2px] text-sm mb-6">
            Creative Partnership Program
          </span>
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-['Oswald'] leading-[0.9] mb-8">
            Your Identity.<br />
            <span className="text-brand-pink">Our Network.</span>
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-gray-400 mb-12 font-light leading-relaxed">
            We don't replace your internal efforts; we supercharge them. MOTA acts as a specialized extension to your leadership, creative, and business development efforts.
          </p>
          <button 
            onClick={onNavigateContact}
            className="inline-block px-10 py-4 bg-brand-pink text-white uppercase font-bold text-xs tracking-[2px] rounded hover:bg-[#ff6b6b] transition-all"
          >
            Join the Ecosystem
          </button>
        </div>
      </section>

      {/* Complexity Gap Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-['Oswald'] text-brand-dark mb-4">
            The Complexity Gap
          </h2>
          <p className="max-w-2xl text-lg text-gray-600 mb-16 leading-relaxed">
            The VFX market has shifted. Great work alone isn't enough to solve the new challenges of scale and speed.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Intelligence Latency",
                desc: "Speed is leverage. We ensure you have early intelligence to capture opportunities before they reach the open market."
              },
              {
                title: "Relationship Scale",
                desc: "The sheer volume of content makes it operationally difficult to maintain active relationships with every client. We bridge that gap."
              },
              {
                title: "Strategic Bandwidth",
                desc: "Even with an internal sales team, you need high-level advocacy and executive positioning to unlock premium tiers of work."
              }
            ].map((gap, i) => (
              <div key={i} className="p-8 border-l-4 border-brand-pink bg-[#fafafa]">
                <h3 className="text-2xl font-['Oswald'] text-brand-dark mb-4">{gap.title}</h3>
                <p className="text-gray-600 leading-relaxed">{gap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seamless Integration Section */}
      <section className="py-24 px-6 bg-brand-grey text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            <div>
              <h2 className="text-5xl md:text-6xl font-['Oswald'] mb-8 leading-tight">
                Seamless<br />Integration.
              </h2>
              <p className="text-xl text-gray-400 font-light">
                We aggressively pursue the pipeline, but you maintain your unique creative voice and brand control.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {[
                { icon: "fa-crosshairs", title: "Refine Positioning", desc: "Align your strengths with how studios actually evaluate partners." },
                { icon: "fa-bullhorn", title: "Targeted Outreach", desc: "Actively pitch your capabilities to key decision-makers who award work." },
                { icon: "fa-chess-knight", title: "Bid Strategy", desc: "Engineer proposals to align with studio budgets and increase win rates." },
                { icon: "fa-users", title: "Slate Representation", desc: "Represent you outwardly to the industry as part of the curated MOTA slate." }
              ].map((service, i) => (
                <div key={i} className="flex gap-4">
                  <i className={`fa-solid ${service.icon} text-brand-pink text-xl mt-1`}></i>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2">{service.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tiers Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-['Oswald'] text-brand-dark mb-16">
            Flexible Partnership Tiers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1 */}
            <div className="border border-gray-100 p-10 rounded-lg hover:border-brand-pink hover:-translate-y-2 transition-all duration-300 flex flex-col h-full bg-white">
              <h3 className="text-2xl font-['Oswald'] mb-4 text-brand-dark">Tier 1</h3>
              <p className="text-gray-400 text-sm mb-8 h-12">Intelligence Access. For partners who want insight without external BD.</p>
              <ul className="text-left space-y-3 mb-8 flex-grow">
                {["Industry Updates", "Project Slate Insight", "Positioning Guidance", "Strategic Check-ins"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <i className="fa-solid fa-check text-brand-pink mt-1"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tier 2 */}
            <div className="border border-gray-100 p-10 rounded-lg border-t-4 border-t-brand-pink scale-105 shadow-2xl transition-all duration-300 flex flex-col h-full bg-white z-10">
              <h3 className="text-2xl font-['Oswald'] mb-4 text-brand-dark">Tier 2</h3>
              <p className="text-gray-400 text-sm mb-8 h-12">Business Development. Hands-on BD tailored to your strengths.</p>
              <ul className="text-left space-y-3 mb-8 flex-grow">
                <li className="flex gap-3 text-sm text-brand-dark font-bold">
                  <i className="fa-solid fa-check text-brand-pink mt-1"></i>
                  Everything in Tier 1
                </li>
                {["Targeted Outreach", "Pitch Strategy", "Inclusion in MOTA Slate"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <i className="fa-solid fa-check text-brand-pink mt-1"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tier 3 */}
            <div className="border border-gray-100 p-10 rounded-lg hover:border-brand-pink hover:-translate-y-2 transition-all duration-300 flex flex-col h-full bg-white">
              <h3 className="text-2xl font-['Oswald'] mb-4 text-brand-dark">Tier 3</h3>
              <p className="text-gray-400 text-sm mb-8 h-12">Executive Producer. Senior-level access and advocacy.</p>
              <ul className="text-left space-y-3 mb-8 flex-grow">
                <li className="flex gap-3 text-sm text-brand-dark font-bold">
                  <i className="fa-solid fa-check text-brand-pink mt-1"></i>
                  Everything in Tier 2
                </li>
                {["EP Involvement", "Key Meeting Attendance", "Relationship Management"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <i className="fa-solid fa-check text-brand-pink mt-1"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section id="apply" className="py-24 px-6 bg-[#e0e0e0] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-['Oswald'] text-brand-dark mb-6 tracking-tight">
            Let's Create Together.
          </h2>
          <p className="text-xl text-gray-700 mb-10 font-light">
            Join the curated network of the world's best creative partners.
          </p>
          <button 
            onClick={onNavigateContact}
            className="inline-block px-12 py-5 bg-brand-pink text-white uppercase font-bold text-sm tracking-[3px] rounded hover:bg-[#ff6b6b] transition-all"
          >
            Contact Business Development
          </button>
        </div>
      </section>
    </div>
  );
};

export default PartnersView;
