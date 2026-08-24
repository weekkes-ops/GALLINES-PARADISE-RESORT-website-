import React from 'react';
import { RESORT_INFO, RESORT_IMAGES } from '../data/resortData';
import { 
  Crown, 
  Sparkles, 
  Star, 
  ShieldCheck, 
  Zap, 
  Wifi, 
  Calendar, 
  ArrowRight, 
  Compass, 
  PhoneCall,
  Activity,
  Dumbbell
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section 
      id="hero-section"
      className="relative min-h-[95vh] lg:min-h-[100vh] flex flex-col justify-between pt-28 sm:pt-36 pb-24 overflow-hidden"
    >
      {/* Background Media with Natural Tones Atmospheric Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={RESORT_IMAGES.hero}
          alt="Gallines Paradise Resort Grand Estate"
          className="w-full h-full object-cover object-center transform scale-105"
          loading="eager"
        />
        {/* Multilayered Atmospheric Overlays leading smoothly into Natural Tones */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8f7f2] via-[#242b20]/60 to-[#1e231b]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4a5340]/20 via-transparent to-transparent" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            
            {/* Top Natural Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#f8f7f2]/90 border border-[#d8d4c7] backdrop-blur-md shadow-md text-[#4a5340]">
              <Crown className="w-4 h-4 text-[#4a5340]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase">
                Welcome to Gallines Paradise Resort & Hotel
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#7c6344]"></span>
              <span className="hidden sm:inline text-xs text-[#686762] font-semibold">Sierra Leone</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Your Prestigious <br className="hidden sm:inline" />
                <span className="text-[#e2dac6] drop-shadow-sm">Tropical Sanctuary</span> <br />
                of Leisure & Elegance
              </h1>
              <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#ece7da] max-w-2xl font-light">
                "{RESORT_INFO.tagline}"
              </p>
            </div>

            {/* Subtext description */}
            <p className="text-[#f0ede6] text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed drop-shadow-sm">
              Experience the premier hospitality destination featuring opulent executive living suites, private garden thatched gazebos, an all-weather sports arena, a fully equipped fitness gym, and 24/7 uninterrupted power and security.
            </p>

            {/* Key Resort Feature Highlights (Cards/Pills) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 max-w-3xl pt-2">
              <div className="flex items-center gap-2.5 bg-[#ffffff]/90 border border-[#e3dfd6] rounded-xl p-2.5 sm:p-3 backdrop-blur-sm shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#4a5340]/10 flex items-center justify-center shrink-0">
                  <Activity className="w-4 h-4 text-[#4a5340]" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#2d2d2a]">Sports Arena</p>
                  <p className="text-[10px] text-[#686762]">Turf & Tennis</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-[#ffffff]/90 border border-[#e3dfd6] rounded-xl p-2.5 sm:p-3 backdrop-blur-sm shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#4a5340]/10 flex items-center justify-center shrink-0">
                  <Dumbbell className="w-4 h-4 text-[#4a5340]" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#2d2d2a]">Fitness Center</p>
                  <p className="text-[10px] text-[#686762]">Modern Gym</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-[#ffffff]/90 border border-[#e3dfd6] rounded-xl p-2.5 sm:p-3 backdrop-blur-sm shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#7c6344]/15 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-[#7c6344]" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#2d2d2a]">24/7 Power</p>
                  <p className="text-[10px] text-[#686762]">Solar + Generator</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-[#ffffff]/90 border border-[#e3dfd6] rounded-xl p-2.5 sm:p-3 backdrop-blur-sm shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#4a5340]/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#4a5340]" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#2d2d2a]">Mobile Money</p>
                  <p className="text-[10px] text-[#686762]">Orange / SLCB QR</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                id="hero-reserve-btn"
                type="button"
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] font-bold uppercase tracking-wider text-xs sm:text-sm shadow-lg shadow-[#4a5340]/30 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Your Stay</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-explore-rooms-btn"
                href="#rooms"
                className="px-6 py-3.5 rounded-full bg-[#ffffff]/95 hover:bg-white text-[#2d2d2a] border border-[#d8d4c7] hover:border-[#4a5340] font-bold tracking-wider text-xs sm:text-sm shadow-sm transition-all flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-[#4a5340]" />
                <span>View Suites & Chalets</span>
              </a>

              <a
                id="hero-virtual-tour-btn"
                href="#gallery"
                className="px-4 py-3.5 rounded-full text-[#ffffff] hover:text-[#f8f7f2] text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 drop-shadow"
              >
                <span>Resort Photo Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Hero Badge / Testimonial Card */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-4">
            
            {/* 5-Star Rating Floating Card */}
            <div className="bg-[#ffffff]/95 backdrop-blur-md border border-[#e3dfd6] p-5 rounded-2xl max-w-xs text-left shadow-xl space-y-3 transform lg:rotate-1 hover:rotate-0 transition-transform">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#7c6344] text-[#7c6344]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#4a5340] bg-[#eef2eb] px-2.5 py-0.5 rounded-full border border-[#d2ddd0]">
                  4.9 / 5.0
                </span>
              </div>
              <p className="text-xs text-[#54534e] italic font-serif leading-relaxed">
                "The presidential suite with the separate living room, the quiet tropical gazebos, and the floodlit sports court made our vacation unforgettable."
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-[#e3dfd6] text-[11px] text-[#686762]">
                <span className="font-semibold text-[#2d2d2a]">Verified Guest Reviews</span>
                <span className="text-[#4a5340] font-bold">240+ Stays</span>
              </div>
            </div>

            {/* Direct Line Badge */}
            <div className="bg-[#ffffff]/95 backdrop-blur-md p-3.5 rounded-xl flex items-center gap-3 text-left w-full max-w-xs border border-[#e3dfd6] shadow-md">
              <div className="w-9 h-9 rounded-full bg-[#eef2eb] border border-[#d2ddd0] flex items-center justify-center shrink-0">
                <PhoneCall className="w-4 h-4 text-[#4a5340]" />
              </div>
              <div>
                <p className="text-[11px] text-[#686762] font-medium">Direct Concierge Assistance</p>
                <p className="text-xs font-bold text-[#2d2d2a]">{RESORT_INFO.phone}</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Decorative Bottom Wave / Separator placeholder */}
      <div className="relative z-10 w-full mt-10"></div>
    </section>
  );
};
