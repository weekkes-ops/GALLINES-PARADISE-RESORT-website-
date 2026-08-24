import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { RESORT_IMAGES, RESORT_INFO } from '../data/resortData';
import { 
  Activity, 
  Dumbbell, 
  Waves, 
  Sun, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  Trophy,
  Zap,
  Users,
  Flame
} from 'lucide-react';

interface SportsWellnessPageProps {
  onOpenBooking: () => void;
}

export const SportsWellnessPage: React.FC<SportsWellnessPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="space-y-12 pb-20">
      {/* Page Header */}
      <PageHeader
        title="Sports Arena & Fitness Gym"
        subtitle="Energize your body and mind with our state-of-the-art all-weather green turf court, air-conditioned cardio gym, and refreshing resort pool."
        badge="Active Leisure & Wellness"
        breadcrumbs={[{ label: 'Sports & Wellness' }]}
        bgImage={RESORT_IMAGES.sportsArena}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 1. All-Weather Sports Arena Deep Dive */}
        <div className="rounded-3xl border border-[#d8d4c7] overflow-hidden bg-white shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-6 relative h-80 lg:h-auto overflow-hidden bg-[#2d2d2a]">
            <img
              src={RESORT_IMAGES.sportsArena}
              alt="Galiness Paradise All-Weather Green Turf Sports Court"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-amber-300" />
              <span>Full-Size Green Turf Arena</span>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6 bg-[#fcfbf9]">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                Championship Sports Complex
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2d2d2a]">
                All-Weather Green Turf Court
              </h2>
              <p className="text-sm text-[#54534e] leading-relaxed">
                Constructed with shock-absorbing green artificial turf, full perimeter safety netting, and floodlights for nighttime matches. Host friendly soccer matches, tennis sets, or team-building tournaments during your stay.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Five-a-side football / futsal',
                  'High-powered night floodlights',
                  'Perimeter safety enclosure netting',
                  'Spectator seating pavilion',
                  'Complimentary balls & racquets',
                  'Private tournament reservations',
                ].map((perk, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#54534e]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#ede9dc]/70 border border-[#d8d4c7] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-[#2d2d2a]">
                <Clock className="w-4 h-4 text-[#4a5340]" />
                <span>Open 6:00 AM – 10:00 PM Daily</span>
              </div>
              <span className="text-xs font-bold text-emerald-700">Free for In-House Guests</span>
            </div>
          </div>
        </div>

        {/* 2. Indoor Fitness & Cardio Gym */}
        <div className="rounded-3xl border border-[#d8d4c7] overflow-hidden bg-white shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-6 order-2 lg:order-1 p-6 sm:p-10 flex flex-col justify-between space-y-6 bg-[#fcfbf9]">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7c6344]">
                Precision Strength & Cardio
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2d2d2a]">
                Indoor Air-Conditioned Fitness Gym
              </h2>
              <p className="text-sm text-[#54534e] leading-relaxed">
                Maintain your fitness regimen while on vacation. Our indoor gymnasium is equipped with digital cardio treadmills, magnetic resistance stationary bikes, free weights, and stretching mats with full climate control.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Commercial cardio treadmills',
                  'Magnetic spin exercise bikes',
                  'Free weights dumbbell rack & bench',
                  'Full split air conditioning',
                  'Complimentary chilled water & towels',
                  'Sanitized workout mats',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#54534e]">
                    <CheckCircle2 className="w-4 h-4 text-[#4a5340] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#ede9dc]/70 border border-[#d8d4c7] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-[#2d2d2a]">
                <ShieldCheck className="w-4 h-4 text-[#4a5340]" />
                <span>Sanitized Hourly • Keycard Access</span>
              </div>
              <span className="text-xs font-bold text-[#4a5340]">24/7 Access</span>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative h-80 lg:h-auto overflow-hidden bg-[#2d2d2a]">
            <img
              src={RESORT_IMAGES.fitnessGym}
              alt="Galiness Paradise Indoor Air-Conditioned Fitness Gym"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#4a5340] text-[#f8f7f2] text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
              <Dumbbell className="w-3.5 h-3.5 text-amber-300" />
              <span>Full Cardio & Weights</span>
            </div>
          </div>
        </div>

        {/* 3. Swimming Pool & Tropical Grounds */}
        <div className="p-8 rounded-3xl bg-[#4a5340] text-[#f8f7f2] shadow-xl space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              Aquatic Sanctuary
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              Resort Swimming Pool & Sun Deck
            </h3>
            <p className="text-xs sm:text-sm text-[#d8d4c7]">
              Unwind under the tropical sun surrounded by towering palm trees. Enjoy poolside refreshments, fresh coconut water, and comfortable shaded cabanas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 space-y-1.5">
              <Waves className="w-5 h-5 text-amber-300" />
              <h4 className="text-sm font-bold">Crystal-Clear Waters</h4>
              <p className="text-xs text-[#d8d4c7]">Maintained and filtered daily with gentle mineral sanitization.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 space-y-1.5">
              <Sun className="w-5 h-5 text-amber-300" />
              <h4 className="text-sm font-bold">Poolside Towels & Drinks</h4>
              <p className="text-xs text-[#d8d4c7]">Complimentary plush towels and fresh fruit smoothies from the gazebo.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 space-y-1.5">
              <Zap className="w-5 h-5 text-amber-300" />
              <h4 className="text-sm font-bold">Night Swimming Lights</h4>
              <p className="text-xs text-[#d8d4c7]">Underwater LED lighting for peaceful evening dips under the stars.</p>
            </div>
          </div>

          <div className="pt-2 flex justify-start">
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-[#f8f7f2] hover:bg-[#ede9dc] text-[#4a5340] font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Resort Vacation</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
