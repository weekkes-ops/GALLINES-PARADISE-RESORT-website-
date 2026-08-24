import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Currency, Room } from '../types';
import { ROOMS_DATA, RESORT_IMAGES, RESORT_INFO } from '../data/resortData';
import { 
  Users, 
  Bed, 
  Tv, 
  Wifi, 
  Wind, 
  Coffee, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  Calendar, 
  ArrowRight,
  Maximize2,
  SlidersHorizontal
} from 'lucide-react';

interface RoomsPageProps {
  currency: Currency;
  onSelectRoom: (room: Room) => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({
  currency,
  onSelectRoom,
  onBookRoom,
}) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'suite' | 'deluxe' | 'standard'>('all');

  const filteredRooms = ROOMS_DATA.filter((room) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'suite') return room.id.includes('presidential') || room.id.includes('stone');
    if (filterCategory === 'deluxe') return room.id.includes('deluxe') || room.id.includes('executive');
    return room.id.includes('standard') || room.id.includes('chalet');
  });

  return (
    <div className="space-y-12 pb-20">
      {/* Page Header */}
      <PageHeader
        title="Accommodations & Luxury Suites"
        subtitle="Experience sovereign comfort across our executive presidential suites, rustic stone bedrooms, and secluded garden chalets."
        badge="4 Luxury Categories"
        breadcrumbs={[{ label: 'Accommodations' }]}
        bgImage={RESORT_IMAGES.presidentialLiving}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Filter Controls & Currency Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#ede9dc]/60 border border-[#d8d4c7]">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs font-bold text-[#7c6344] uppercase tracking-wider flex items-center gap-1.5 shrink-0 pr-2">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filter by Category:
            </span>
            {[
              { id: 'all', label: 'All Suites (4)' },
              { id: 'suite', label: 'Executive & Presidential' },
              { id: 'deluxe', label: 'Deluxe King Suites' },
              { id: 'standard', label: 'Standard & Chalets' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilterCategory(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  filterCategory === cat.id
                    ? 'bg-[#4a5340] text-white shadow-sm'
                    : 'bg-white text-[#54534e] hover:bg-[#ede9dc] border border-[#d8d4c7]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-[#686762] sm:text-right shrink-0">
            Showing <strong className="text-[#2d2d2a]">{filteredRooms.length}</strong> available suite types
          </div>
        </div>

        {/* Detailed Rooms List */}
        <div className="space-y-8">
          {filteredRooms.map((room, idx) => {
            const price = currency === 'USD' ? `$${room.priceUSD}` : `NLe ${room.priceNLE.toLocaleString()}`;
            const isFeatured = idx === 0;

            return (
              <div
                key={room.id}
                id={`room-${room.id}`}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden bg-white shadow-sm hover:shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-0 ${
                  isFeatured ? 'border-[#4a5340]/40 ring-2 ring-[#4a5340]/10' : 'border-[#e3dfd6]'
                }`}
              >
                {/* Room Image Gallery Preview */}
                <div className="lg:col-span-5 relative h-72 lg:h-auto overflow-hidden bg-[#2d2d2a] group">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                  
                  {isFeatured && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#4a5340] text-[#f8f7f2] text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>Most Popular Suite</span>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => onSelectRoom(room)}
                    className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Room Photos</span>
                  </button>
                </div>

                {/* Room Information & Inclusions */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2d2d2a]">
                        {room.name}
                      </h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold font-mono text-[#4a5340]">
                          {price}
                        </div>
                        <span className="text-[11px] text-[#686762] uppercase tracking-wider font-semibold">
                          Per Night • Taxes & Breakfast Included
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-[#54534e] leading-relaxed">
                      {room.description}
                    </p>

                    {/* Room Meta Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#f4f2ec] text-[#2d2d2a] text-xs font-semibold border border-[#e3dfd6]">
                        <Bed className="w-3.5 h-3.5 text-[#4a5340]" />
                        {room.bedType}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#f4f2ec] text-[#2d2d2a] text-xs font-semibold border border-[#e3dfd6]">
                        <Users className="w-3.5 h-3.5 text-[#4a5340]" />
                        Max {room.capacity.adults + room.capacity.children} Guests
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#f4f2ec] text-[#2d2d2a] text-xs font-semibold border border-[#e3dfd6]">
                        <Maximize2 className="w-3.5 h-3.5 text-[#4a5340]" />
                        {room.size}
                      </span>
                    </div>

                    {/* Features checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-[#f2efe7]">
                      {room.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-[#54534e]">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-[#e3dfd6] flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectRoom(room)}
                      className="px-4 py-2.5 rounded-xl border border-[#d8d4c7] hover:bg-[#ede9dc] text-[#2d2d2a] font-bold text-xs transition-colors cursor-pointer"
                    >
                      Room Details & Amenities
                    </button>

                    <button
                      type="button"
                      onClick={() => onBookRoom(room.id)}
                      className="px-6 py-2.5 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] font-bold text-xs uppercase tracking-wider shadow-md shadow-[#4a5340]/20 flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book This Suite</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Complimentary Guest Inclusions Box */}
        <div className="p-8 rounded-3xl bg-[#4a5340] text-[#f8f7f2] shadow-xl space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              The Galiness Standard
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              Included with Every Reservation
            </h3>
            <p className="text-xs sm:text-sm text-[#d8d4c7]">
              Every guest at Galiness Paradise Resort enjoys full access to our premier facilities with no hidden charges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 space-y-2">
              <Sparkles className="w-5 h-5 text-amber-300" />
              <h4 className="text-sm font-bold">Complimentary Breakfast</h4>
              <p className="text-xs text-[#d8d4c7]">Daily tropical fruit, eggs, and freshly brewed African coffee.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 space-y-2">
              <ShieldCheck className="w-5 h-5 text-amber-300" />
              <h4 className="text-sm font-bold">24/7 Guaranteed Power</h4>
              <p className="text-xs text-[#d8d4c7]">Dual industrial generators & solar grid for continuous AC and hot water.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 space-y-2">
              <Wifi className="w-5 h-5 text-amber-300" />
              <h4 className="text-sm font-bold">High-Speed Wi-Fi</h4>
              <p className="text-xs text-[#d8d4c7]">High-speed internet in all suites, chalets, and dining gazebos.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/15 space-y-2">
              <Wind className="w-5 h-5 text-amber-300" />
              <h4 className="text-sm font-bold">Sports & Fitness Pass</h4>
              <p className="text-xs text-[#d8d4c7]">Unlimited access to our all-weather sports arena and indoor cardio gym.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
