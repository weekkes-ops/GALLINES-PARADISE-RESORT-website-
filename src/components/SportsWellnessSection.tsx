import React, { useState } from 'react';
import { RESORT_IMAGES } from '../data/resortData';
import { 
  Activity, 
  Dumbbell, 
  Trophy, 
  Clock, 
  Flame, 
  HeartPulse, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar,
  Sparkles
} from 'lucide-react';

interface SportsWellnessSectionProps {
  onOpenBooking: () => void;
}

export const SportsWellnessSection: React.FC<SportsWellnessSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'pool' | 'arena' | 'gym'>('pool');

  return (
    <section id="sports-wellness" className="py-20 sm:py-28 relative bg-[#f8f7f2] overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4a5340]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#7c6344]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ede9dc] border border-[#d8d4c7] text-[#4a5340] text-xs font-semibold uppercase tracking-widest">
            <Activity className="w-3.5 h-3.5 text-[#4a5340]" />
            <span>Active Living & Recreation</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d2d2a] tracking-tight">
            Swimming Pool, <span className="emerald-gradient-text">Sports Complex</span> & Fitness Gym
          </h2>
          <p className="text-[#686762] text-sm sm:text-base leading-relaxed">
            Elevate your leisure and wellness routine. Gallines Paradise features a sparkling outdoor swimming pool with sun deck, an all-weather fenced sports arena, and an indoor fitness gym.
          </p>

          {/* Toggle Tab */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#ffffff] border border-[#d8d4c7] shadow-sm mt-4 flex-wrap justify-center gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('pool')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'pool'
                  ? 'bg-[#4a5340] text-[#f8f7f2] shadow-md'
                  : 'text-[#686762] hover:text-[#2d2d2a]'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Swimming Pool & Deck</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('arena')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'arena'
                  ? 'bg-[#4a5340] text-[#f8f7f2] shadow-md'
                  : 'text-[#686762] hover:text-[#2d2d2a]'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Sports Arena & Turf Court</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('gym')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'gym'
                  ? 'bg-[#4a5340] text-[#f8f7f2] shadow-md'
                  : 'text-[#686762] hover:text-[#2d2d2a]'
              }`}
            >
              <Dumbbell className="w-4 h-4" />
              <span>Cardio & Fitness Gym</span>
            </button>
          </div>
        </div>

        {/* Tab 0: Outdoor Swimming Pool */}
        {activeTab === 'pool' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300">
            
            {/* Left: Image Showcase */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-[#d8d4c7] shadow-xl group bg-[#e9e5db]">
                <img
                  src={RESORT_IMAGES.pool}
                  alt="Outdoor Swimming Pool at Gallines Paradise Resort"
                  className="w-full h-80 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                
                {/* Floating Specs Badge */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3 bg-[#ffffff]/95 backdrop-blur-md p-4 rounded-2xl border border-[#d8d4c7] shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#4a5340]/10 text-[#4a5340] flex items-center justify-center">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#2d2d2a] uppercase">Outdoor Swimming Pool</p>
                      <p className="text-[11px] text-[#686762]">Crystal Water • Sun Loungers • Palm Views</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#ede9dc] text-[#4a5340] text-xs font-bold border border-[#d8d4c7]">
                    Complimentary for Guests
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Feature Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#4a5340] uppercase tracking-widest">
                  Resort Oasis & Leisure
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2d2d2a]">
                  Sparkling Swimming Pool & Terrace
                </h3>
                <p className="text-sm text-[#686762] leading-relaxed">
                  Relax in the cool tropical water after a productive meeting or sports match. Our pristine pool features terraced steps with safety rails, surrounded by comfortable poolside sun loungers and swaying palm trees.
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3 pt-2">
                {[
                  { title: "Crystal Clean Filtered Water", desc: "Maintained daily to international hospitality sanitation standards." },
                  { title: "Terraced Steps & Handrails", desc: "Easy, gradual entry for swimmers of all confidence levels." },
                  { title: "Poolside Sunbeds & Loungers", desc: "Relax with chilled drinks and fresh towels from our staff." },
                  { title: "Surrounded by Palms & Chalets", desc: "Scenic tropical ambiance nestled right inside the resort grounds." },
                ].map((h, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#ffffff] border border-[#e3dfd6] shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#4a5340] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#2d2d2a]">{h.title}</p>
                      <p className="text-[11px] text-[#686762]">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] font-bold uppercase tracking-wider text-xs shadow-md shadow-[#4a5340]/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Stay & Pool Pass</span>
                </button>
                <span className="text-xs text-[#686762] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#4a5340]" />
                  <span>Open 7:00 AM – 8:00 PM Daily</span>
                </span>
              </div>

            </div>

          </div>
        )}

        {/* Tab 1: All-Weather Sports Arena */}
        {activeTab === 'arena' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300">
            
            {/* Left: Image Showcase */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-[#d8d4c7] shadow-xl group bg-[#e9e5db]">
                <img
                  src={RESORT_IMAGES.sports}
                  alt="All-Weather Sports Court at Gallines Paradise"
                  className="w-full h-80 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                
                {/* Floating Specs Badge */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3 bg-[#ffffff]/95 backdrop-blur-md p-4 rounded-2xl border border-[#d8d4c7] shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#4a5340]/10 text-[#4a5340] flex items-center justify-center">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#2d2d2a] uppercase">Regulation Turf Court</p>
                      <p className="text-[11px] text-[#686762]">Tennis • 5-a-side Football • Volleyball</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#ede9dc] text-[#4a5340] text-xs font-bold border border-[#d8d4c7]">
                    Floodlit Night Matches
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Feature Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#4a5340] uppercase tracking-widest">
                  Active Outdoor Recreation
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2d2d2a]">
                  Multi-Sport All-Weather Arena
                </h3>
                <p className="text-sm text-[#686762] leading-relaxed">
                  Enjoy high-energy matches on our synthetic sports turf. Featuring a high perimeter safety fence and boundary netting, you can play full tennis sets, mini football tournaments, or group workout drills in total privacy.
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3 pt-2">
                {[
                  { title: "Synthetic Sports Turf", desc: "Non-slip surface gentle on joints and designed for all-season play." },
                  { title: "High Perimeter Enclosure", desc: "Full safety netting prevents stray balls from leaving the arena." },
                  { title: "Evening Floodlighting", desc: "Play into the cool evening hours under powerful arena lights." },
                  { title: "Rackets & Ball Equipment", desc: "Tennis rackets, footballs, and pumps provided at the front desk." },
                ].map((h, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#ffffff] border border-[#e3dfd6] shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#4a5340] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#2d2d2a]">{h.title}</p>
                      <p className="text-[11px] text-[#686762]">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] font-bold uppercase tracking-wider text-xs shadow-md shadow-[#4a5340]/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Stay & Sports Pass</span>
                </button>
                <span className="text-xs text-[#686762] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#4a5340]" />
                  <span>Open 6:00 AM – 10:00 PM</span>
                </span>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Cardio & Fitness Gym */}
        {activeTab === 'gym' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300">
            
            {/* Left: Image Showcase */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-[#d8d4c7] shadow-xl group bg-[#e9e5db]">
                <img
                  src={RESORT_IMAGES.gym}
                  alt="Fitness Gym at Gallines Paradise"
                  className="w-full h-80 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                
                {/* Floating Gym Specs */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3 bg-[#ffffff]/95 backdrop-blur-md p-4 rounded-2xl border border-[#d8d4c7] shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#4a5340]/10 text-[#4a5340] flex items-center justify-center">
                      <HeartPulse className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#2d2d2a] uppercase">Indoor Fitness Suite</p>
                      <p className="text-[11px] text-[#686762]">Treadmills • Cardio Bikes • Free Weights</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#ede9dc] text-[#4a5340] text-xs font-bold border border-[#d8d4c7]">
                    Complimentary for In-House Guests
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Feature Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#7c6344] uppercase tracking-widest">
                  Strength & Conditioning
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2d2d2a]">
                  Modern Air-Conditioned Gym
                </h3>
                <p className="text-sm text-[#686762] leading-relaxed">
                  Never break your daily health streak. Our modern gym offers motorized treadmills, spin bikes, incline strength benches, dumbbell racks, yoga mats, and resistance balls in a climate-controlled hall.
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3 pt-2">
                {[
                  { title: "Motorized Running Treadmills", desc: "Track speed, distance, heart rate, and calories burned with ease." },
                  { title: "Stationary Cardio Cycles", desc: "High-intensity spin cycles for quick morning aerobic workouts." },
                  { title: "Free Weights & Dumbbell Rack", desc: "Graduated dumbbells, barbells, and adjustable bench press." },
                  { title: "Stability Balls & Yoga Floor Area", desc: "Dedicated space for core training, stretching, and recovery." },
                ].map((h, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#ffffff] border border-[#e3dfd6] shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#4a5340] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-[#2d2d2a]">{h.title}</p>
                      <p className="text-[11px] text-[#686762]">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] font-bold uppercase tracking-wider text-xs shadow-md shadow-[#4a5340]/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Stay with Free Gym</span>
                </button>
                <span className="text-xs text-[#686762] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#4a5340]" />
                  <span>Open 6:00 AM – 9:30 PM Daily</span>
                </span>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
