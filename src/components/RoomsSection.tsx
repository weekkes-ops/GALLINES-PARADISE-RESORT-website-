import React, { useState } from 'react';
import { ROOMS_DATA } from '../data/resortData';
import { Room, Currency } from '../types';
import { 
  Crown, 
  Bed, 
  Users, 
  Maximize2, 
  Bath, 
  Check, 
  Calendar, 
  Info, 
  Sparkles, 
  ArrowRight,
  Tv,
  Wind
} from 'lucide-react';

interface RoomsSectionProps {
  currency: Currency;
  onOpenBooking: (roomId?: string) => void;
  onViewRoomDetails: (room: Room) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  currency,
  onOpenBooking,
  onViewRoomDetails,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Accommodations' },
    { id: 'Executive Suite', label: 'Executive Suites' },
    { id: 'Deluxe King', label: 'Deluxe King Rooms' },
    { id: 'Garden Chalet', label: 'Garden Chalets' },
    { id: 'Family Suite', label: 'Family Suites' },
  ];

  const filteredRooms = selectedCategory === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.category === selectedCategory);

  const formatPrice = (usd: number, nle: number) => {
    return currency === 'USD' ? `$${usd}` : `Le ${nle.toLocaleString()}`;
  };

  return (
    <section id="rooms" className="py-20 sm:py-28 relative bg-[#f8f7f2]">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(#d8d4c7_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ede9dc] border border-[#d8d4c7] text-[#4a5340] text-xs font-semibold uppercase tracking-widest">
              <Crown className="w-3.5 h-3.5 text-[#4a5340]" />
              <span>Sanctuary of Rest</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d2d2a] tracking-tight">
              Luxury Suites & <span className="gold-gradient-text">Private Chalets</span>
            </h2>
            <p className="text-[#686762] text-sm sm:text-base">
              Each room at Gallines Paradise is an intimate retreat featuring cooling split air-conditioning, private bathtubs, rich fabrics, and picturesque estate views.
            </p>
          </div>

          {/* Quick Stats or Booking Guarantee */}
          <div className="hidden lg:flex items-center gap-4 bg-[#ffffff] border border-[#e3dfd6] p-3.5 rounded-2xl shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#4a5340]/10 flex items-center justify-center text-[#4a5340]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-[#2d2d2a]">Breakfast Included</p>
              <p className="text-[11px] text-[#686762]">With free gym & sports arena access</p>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#4a5340] text-[#f8f7f2] shadow-md shadow-[#4a5340]/20'
                  : 'bg-[#ffffff] text-[#54534e] hover:text-[#2d2d2a] border border-[#d8d4c7] hover:border-[#4a5340]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-[#ffffff] rounded-3xl overflow-hidden border border-[#e3dfd6] hover:border-[#4a5340]/50 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Room Card Image Header */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#e9e5db]">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Gradient Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#f8f7f2]/90 backdrop-blur-md border border-[#d8d4c7] text-[#2d2d2a] text-xs font-bold uppercase tracking-wider shadow-sm">
                    {room.category}
                  </span>
                  {room.featured && (
                    <span className="px-3 py-1 rounded-full bg-[#7c6344] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                      Featured
                    </span>
                  )}
                </div>

                {/* Price Tag Floating */}
                <div className="absolute bottom-4 right-4 bg-[#ffffff]/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-[#e3dfd6] text-right shadow-md">
                  <span className="text-xl sm:text-2xl font-bold text-[#2d2d2a] font-display">
                    {formatPrice(room.priceUSD, room.priceNLE)}
                  </span>
                  <span className="text-[10px] text-[#686762] block -mt-1 font-medium">/ night</span>
                </div>
              </div>

              {/* Room Card Content */}
              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#2d2d2a] group-hover:text-[#4a5340] transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#7c6344] font-medium">
                      {room.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#686762] line-clamp-2 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Room Specs Pills */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#e3dfd6] text-xs text-[#54534e] font-medium">
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#4a5340] shrink-0" />
                      <span className="truncate">{room.size.split('/')[0]}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#4a5340] shrink-0" />
                      <span>{room.capacity.adults} Adults</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath className="w-3.5 h-3.5 text-[#4a5340] shrink-0" />
                      <span>Bathtub</span>
                    </div>
                  </div>

                  {/* Top Features Checkmarks */}
                  <div className="space-y-1.5 pt-1">
                    {room.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#54534e]">
                        <Check className="w-3.5 h-3.5 text-[#4a5340] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onViewRoomDetails(room)}
                    className="flex-1 py-3 px-4 rounded-xl border border-[#d8d4c7] hover:border-[#4a5340] bg-[#f8f7f2] hover:bg-[#ede9dc] text-[#2d2d2a] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Info className="w-4 h-4 text-[#4a5340]" />
                    <span>View Room</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(room.id)}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] text-xs font-bold uppercase tracking-wider shadow-md shadow-[#4a5340]/20 transition-all flex items-center justify-center gap-1.5 group-hover:scale-[1.02] cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Now</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
