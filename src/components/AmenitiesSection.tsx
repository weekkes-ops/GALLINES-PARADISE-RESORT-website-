import React, { useState } from 'react';
import { AMENITIES_DATA } from '../data/resortData';
import { Amenity } from '../types';
import { 
  Crown, 
  Activity, 
  Dumbbell, 
  Palmtree, 
  ShieldCheck, 
  Users, 
  UtensilsCrossed, 
  Check, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface AmenitiesSectionProps {
  onOpenBooking: () => void;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ onOpenBooking }) => {
  const [selectedAmenity, setSelectedAmenity] = useState<Amenity>(AMENITIES_DATA[0]);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Activity': return Activity;
      case 'Dumbbell': return Dumbbell;
      case 'Palmtree': return Palmtree;
      case 'ShieldCheck': return ShieldCheck;
      case 'Users': return Users;
      case 'UtensilsCrossed': return UtensilsCrossed;
      default: return Sparkles;
    }
  };

  return (
    <section id="amenities" className="py-20 sm:py-28 relative bg-[#f8f7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ede9dc] border border-[#d8d4c7] text-[#4a5340] text-xs font-semibold uppercase tracking-widest">
            <Crown className="w-3.5 h-3.5 text-[#4a5340]" />
            <span>World-Class Facilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d2d2a] tracking-tight">
            Designed for <span className="gold-gradient-text">Wellness, Leisure & Business</span>
          </h2>
          <p className="text-[#686762] text-sm sm:text-base">
            From sunrise workouts in our cardio gym to evening tennis tournaments and private gazebo feasts, every moment at Gallines Paradise is elevated.
          </p>
        </div>

        {/* Interactive Dual-Panel Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Amenities List / Buttons */}
          <div className="lg:col-span-5 space-y-3 flex flex-col justify-center">
            {AMENITIES_DATA.map((amenity) => {
              const IconComp = getIcon(amenity.iconName);
              const isSelected = selectedAmenity.id === amenity.id;

              return (
                <button
                  key={amenity.id}
                  type="button"
                  onClick={() => setSelectedAmenity(amenity)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all flex items-center justify-between border cursor-pointer group ${
                    isSelected
                      ? 'bg-[#4a5340] border-[#4a5340] text-white shadow-lg shadow-[#4a5340]/20 translate-x-1'
                      : 'bg-[#ffffff] border-[#e3dfd6] hover:border-[#d8d4c7] text-[#2d2d2a] hover:bg-[#f3f0e8]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-[#ffffff] text-[#4a5340] shadow-sm'
                        : 'bg-[#ede9dc] text-[#4a5340] group-hover:bg-[#4a5340] group-hover:text-white'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className={`text-sm font-bold tracking-wide ${
                          isSelected ? 'text-white' : 'text-[#2d2d2a] group-hover:text-[#4a5340]'
                        }`}>
                          {amenity.title}
                        </h4>
                      </div>
                      <p className={`text-xs line-clamp-1 ${
                        isSelected ? 'text-[#e2dac6]' : 'text-[#686762]'
                      }`}>
                        {amenity.shortDesc}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-[#f8f7f2] translate-x-1' : 'text-[#a3a097] group-hover:text-[#4a5340]'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Amenity Spotlight Preview */}
          <div className="lg:col-span-7 bg-[#ffffff] p-6 sm:p-8 rounded-3xl border border-[#e3dfd6] shadow-lg flex flex-col justify-between space-y-6 relative overflow-hidden">
            
            {/* Background Image Preview */}
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#d8d4c7] group bg-[#e9e5db]">
              <img
                src={selectedAmenity.image}
                alt={selectedAmenity.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Badge */}
              {selectedAmenity.badge && (
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#7c6344] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  {selectedAmenity.badge}
                </div>
              )}

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] text-[#e2dac6] uppercase tracking-widest font-semibold">
                  {selectedAmenity.category} Facility
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {selectedAmenity.title}
                </h3>
              </div>
            </div>

            {/* Description and Inclusions */}
            <div className="space-y-4">
              <p className="text-sm text-[#54534e] leading-relaxed">
                {selectedAmenity.longDesc}
              </p>

              {/* Highlight Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {selectedAmenity.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#2d2d2a]">
                    <Check className="w-4 h-4 text-[#4a5340] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#e3dfd6] flex items-center justify-between">
              <span className="text-xs text-[#686762]">
                Included with room reservations
              </span>
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Book Your Stay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
