import React from 'react';
import { RESORT_INFO, RESORT_IMAGES } from '../data/resortData';
import { 
  Crown, 
  ShieldCheck, 
  Zap, 
  Wifi, 
  Palmtree, 
  Activity, 
  Sparkles, 
  Clock, 
  Coffee,
  CheckCircle2
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const guarantees = [
    {
      icon: Zap,
      title: "Uninterrupted 24/7 Power",
      description: "Dual heavy-duty diesel generators paired with eco-solar power ensure constant cool air conditioning and power at all times."
    },
    {
      icon: ShieldCheck,
      title: "Gated Security & Guard Patrol",
      description: "Round-the-clock professional security perimeter, gated access control, and dedicated private guest parking."
    },
    {
      icon: Wifi,
      title: "High-Speed Fiber Internet",
      description: "Stay connected across the suites, poolside gazebos, conference halls, and sports complex."
    },
    {
      icon: Activity,
      title: "Full Sports & Fitness Hub",
      description: "All-weather artificial turf court with perimeter fencing alongside a dedicated air-conditioned gym."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative bg-[#f8f7f2] overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#4a5340]/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7c6344]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ede9dc] border border-[#d8d4c7] text-[#4a5340] text-xs font-semibold uppercase tracking-widest">
            <Crown className="w-3.5 h-3.5 text-[#4a5340]" />
            <span>The Gallines Legacy</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d2d2a] tracking-tight">
            An Unrivaled Haven of <span className="gold-gradient-text">Peace & Prestige</span>
          </h2>
          <p className="text-[#686762] text-sm sm:text-base leading-relaxed">
            Framed by majestic royal stone gateways and swaying palm canopies, Gallines Paradise Resort offers a secluded sanctuary for discerning executives, holiday travelers, and festive celebrations in Sierra Leone.
          </p>
        </div>

        {/* 2-Column Story Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Grand Building Column Portico */}
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-[#d8d4c7] shadow-md group bg-[#e9e5db]">
                  <img
                    src={RESORT_IMAGES.exteriorEstate}
                    alt="Gallines Paradise Classical Architecture"
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="bg-[#ffffff] p-4 rounded-2xl border border-[#e3dfd6] space-y-1 shadow-sm">
                  <p className="text-xs font-bold text-[#4a5340] uppercase tracking-wider">Resort Pool & Deck</p>
                  <p className="text-xs text-[#686762]">Sparkling pool, sun terrace & tropical palm views.</p>
                </div>
              </div>

              {/* Thatched Garden Gazebos & Greenery */}
              <div className="space-y-4 pt-6">
                <div className="bg-[#ffffff] p-4 rounded-2xl border border-[#e3dfd6] space-y-1 shadow-sm">
                  <p className="text-xs font-bold text-[#7c6344] uppercase tracking-wider">Thatched Gazebos</p>
                  <p className="text-xs text-[#686762]">Open-air tropical relaxation amidst landscaped flora.</p>
                </div>
                <div className="rounded-2xl overflow-hidden border border-[#d8d4c7] shadow-md group bg-[#e9e5db]">
                  <img
                    src={RESORT_IMAGES.gazeboGarden}
                    alt="Tropical Garden Gazebos"
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Key Value Propositions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#2d2d2a]">
                Where African Warmth Meets Modern Executive Luxury
              </h3>
              <p className="text-[#686762] text-sm sm:text-base leading-relaxed">
                Whether you are holding an important business delegation in our presidential suites, exercising in our air-conditioned gym, playing a sunset tennis match, or dining under the stars in a thatched private gazebo, Gallines Paradise is crafted for peace of mind.
              </p>
              <p className="text-[#54534e] text-sm leading-relaxed">
                We take immense pride in seamless convenience — from instant mobile money payments (Orange Money & SLCB QR) at our front desk to continuous round-the-clock solar and generator power, pristine clean bathrooms with deep soaking tubs, and flavorful farm-to-table cuisine.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Presidential multi-room suites with living rooms",
                "Deep soaking porcelain bathtubs in rooms",
                "All-weather turf sports arena with night lights",
                "Indoor gym with running treadmills & weights",
                "Private garden gazebos with dedicated waiter",
                "Orange Money & SLCB QR instant payment"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4a5340] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#2d2d2a] font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Signature Quote Banner */}
            <div className="p-4 rounded-xl bg-[#ede9dc] border-l-4 border-[#4a5340] text-xs sm:text-sm text-[#2d2d2a] italic font-serif">
              "To enter Gallines Paradise is to step into an enclave where your comfort, security, and tranquility are our sacred commitment."
            </div>

          </div>

        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#ffffff] p-6 rounded-2xl border border-[#e3dfd6] hover:border-[#4a5340]/40 transition-all duration-300 hover:-translate-y-1 space-y-3 shadow-sm hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#4a5340]/10 border border-[#4a5340]/20 flex items-center justify-center text-[#4a5340] group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-[#2d2d2a] tracking-wide font-display">
                  {item.title}
                </h4>
                <p className="text-xs text-[#686762] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
