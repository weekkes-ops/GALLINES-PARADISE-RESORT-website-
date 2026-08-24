import React, { useState } from 'react';
import { MENU_ITEMS, RESORT_IMAGES } from '../data/resortData';
import { Currency } from '../types';
import { GazeboBookingModal } from './GazeboBookingModal';
import { 
  UtensilsCrossed, 
  Palmtree, 
  Flame, 
  Sparkles, 
  Calendar, 
  Clock, 
  Wine, 
  Coffee,
  Check
} from 'lucide-react';

interface DiningSectionProps {
  currency: Currency;
}

export const DiningSection: React.FC<DiningSectionProps> = ({ currency }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isGazeboModalOpen, setIsGazeboModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'Full Menu' },
    { id: 'Garden Grill & BBQ', label: 'Garden Grill & BBQ' },
    { id: 'Traditional Specialties', label: 'Traditional African' },
    { id: 'Signature Mains', label: 'Continental Mains' },
    { id: 'Cocktails & Beverages', label: 'Cocktails & Drinks' },
  ];

  const filteredMenu = selectedCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  const formatPrice = (usd: number, nle: number) => {
    return currency === 'USD' ? `$${usd}` : `Le ${nle.toLocaleString()}`;
  };

  return (
    <section id="dining" className="py-20 sm:py-28 relative bg-[#f8f7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ede9dc] border border-[#d8d4c7] text-[#4a5340] text-xs font-semibold uppercase tracking-widest">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#4a5340]" />
            <span>Epicurean & Garden Bar</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d2d2a] tracking-tight">
            Thatched Gazebo Dining & <span className="gold-gradient-text">Paradise Grill</span>
          </h2>
          <p className="text-[#686762] text-sm sm:text-base leading-relaxed">
            Savor fresh char-grilled seafood, spicy Sierra Leonean suya, traditional stews, and ice-cold tropical cocktails in our romantic open-air thatched huts or main dining hall.
          </p>
        </div>

        {/* Feature Banner: The Thatched Gazebos Experience */}
        <div className="bg-[#ffffff] border border-[#e3dfd6] rounded-3xl p-6 sm:p-10 mb-16 shadow-lg overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-md group border border-[#d8d4c7] bg-[#e9e5db]">
                <img
                  src={RESORT_IMAGES.dining}
                  alt="Romantic Thatched Gazebo Dining"
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#ffffff]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#d8d4c7] text-[#4a5340] text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <Palmtree className="w-3.5 h-3.5 text-[#4a5340]" />
                  <span>Private Garden Cabanas</span>
                </div>
              </div>
            </div>

            {/* Right Copy & Gazebo CTA */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#7c6344] uppercase tracking-widest">
                  Signature Resort Experience
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2d2d2a]">
                  Dine Beneath the Palms in Private Gazebos
                </h3>
                <p className="text-[#686762] text-sm leading-relaxed">
                  Our hand-built thatched conical gazebos are scattered throughout our palm-shaded garden courtyard. Whether it's a private romantic date, anniversary toast, or chilled evening drinks with suya skewers, our dedicated waitstaff caters to your every desire.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-[#54534e]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4a5340] shrink-0" />
                  <span>Candlelit Lantern Setting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4a5340] shrink-0" />
                  <span>Full Waiter Bar Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4a5340] shrink-0" />
                  <span>Fresh Catch Grilled Snapper</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4a5340] shrink-0" />
                  <span>Live Weekend Barbecue</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsGazeboModalOpen(true)}
                  className="px-6 py-3 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] font-bold uppercase tracking-wider text-xs shadow-md shadow-[#4a5340]/20 hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve a Private Gazebo</span>
                </button>
                <span className="text-xs text-[#686762] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#4a5340]" />
                  <span>Dinner Service: 5:00 PM – 11:00 PM</span>
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* Menu Category Filter */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#4a5340] text-[#f8f7f2] shadow-md font-bold'
                  : 'bg-[#ffffff] text-[#54534e] hover:text-[#2d2d2a] border border-[#d8d4c7]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              className="bg-[#ffffff] p-5 sm:p-6 rounded-2xl border border-[#e3dfd6] hover:border-[#4a5340]/40 transition-all space-y-3 shadow-sm group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-display text-base sm:text-lg font-bold text-[#2d2d2a] group-hover:text-[#4a5340] transition-colors">
                      {item.name}
                    </h4>
                    {item.isChefSpecial && (
                      <span className="px-2 py-0.5 rounded-full bg-[#ede9dc] text-[#4a5340] text-[10px] font-bold border border-[#d8d4c7] uppercase">
                        Chef Special
                      </span>
                    )}
                    {item.isSpicy && (
                      <span className="px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 text-[10px] font-bold border border-rose-200 uppercase flex items-center gap-0.5">
                        <Flame className="w-2.5 h-2.5" /> Spicy
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#7c6344] uppercase tracking-wider font-semibold">
                    {item.category}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-display text-lg sm:text-xl font-bold text-[#4a5340]">
                    {formatPrice(item.priceUSD, item.priceNLE)}
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#686762] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* In-Room & Catering Note */}
        <div className="mt-12 text-center p-4 rounded-2xl bg-[#ede9dc] border border-[#d8d4c7] text-xs text-[#54534e] max-w-2xl mx-auto flex items-center justify-center gap-2 shadow-sm">
          <UtensilsCrossed className="w-4 h-4 text-[#4a5340] shrink-0" />
          <span>
            In-room dining service and customized party barbecue packages are available 24/7. Dial front desk from your suite.
          </span>
        </div>

      </div>

      {/* Gazebo Modal */}
      <GazeboBookingModal
        isOpen={isGazeboModalOpen}
        onClose={() => setIsGazeboModalOpen(false)}
      />
    </section>
  );
};
