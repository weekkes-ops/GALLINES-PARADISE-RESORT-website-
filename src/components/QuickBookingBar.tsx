import React, { useState } from 'react';
import { ROOMS_DATA } from '../data/resortData';
import { Calendar, Users, Home, Search, Sparkles } from 'lucide-react';

interface QuickBookingBarProps {
  onSearch: (params: {
    roomId: string;
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
  }) => void;
}

export const QuickBookingBar: React.FC<QuickBookingBarProps> = ({ onSearch }) => {
  // Default dates: tomorrow & 3 days later
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const checkoutDefault = new Date();
  checkoutDefault.setDate(checkoutDefault.getDate() + 3);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [roomId, setRoomId] = useState(ROOMS_DATA[0].id);
  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(checkoutDefault));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ roomId, checkIn, checkOut, adults, children });
  };

  return (
    <div 
      id="quick-booking-bar"
      className="w-full max-w-6xl mx-auto -mt-14 sm:-mt-16 relative z-30 px-4 sm:px-6"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-[#ffffff] p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl border border-[#e3dfd6]"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-[#e3dfd6]">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#4a5340] animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold tracking-wider text-[#2d2d2a] uppercase">
              Check Room Availability & Best Rate Guarantee
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-[#4a5340] font-semibold">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#7c6344]" />
              Instant Confirmation
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline text-[#686762]">Orange Money / SLCB QR Accepted</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-end">
          
          {/* Accommodation Type */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#2d2d2a] tracking-wider uppercase flex items-center gap-1.5">
              <Home className="w-3.5 h-3.5 text-[#4a5340]" />
              Suite / Villa
            </label>
            <div className="relative">
              <select
                id="booking-select-room"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="w-full bg-[#f8f7f2] text-[#2d2d2a] border border-[#d8d4c7] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#4a5340] focus:ring-1 focus:ring-[#4a5340]/30 cursor-pointer font-medium"
              >
                {ROOMS_DATA.map((room) => (
                  <option key={room.id} value={room.id} className="bg-white text-[#2d2d2a]">
                    {room.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Check-In Date */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#2d2d2a] tracking-wider uppercase flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#4a5340]" />
              Check-In Date
            </label>
            <input
              id="booking-input-checkin"
              type="date"
              value={checkIn}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-[#f8f7f2] text-[#2d2d2a] border border-[#d8d4c7] rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-[#4a5340] focus:ring-1 focus:ring-[#4a5340]/30 cursor-pointer font-medium"
              required
            />
          </div>

          {/* Check-Out Date */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#2d2d2a] tracking-wider uppercase flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#4a5340]" />
              Check-Out Date
            </label>
            <input
              id="booking-input-checkout"
              type="date"
              value={checkOut}
              min={checkIn || new Date().toISOString().split('T')[0]}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-[#f8f7f2] text-[#2d2d2a] border border-[#d8d4c7] rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-[#4a5340] focus:ring-1 focus:ring-[#4a5340]/30 cursor-pointer font-medium"
              required
            />
          </div>

          {/* Guests Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#2d2d2a] tracking-wider uppercase flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#4a5340]" />
              Guests
            </label>
            <div className="grid grid-cols-2 gap-2">
              <select
                id="booking-select-adults"
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="w-full bg-[#f8f7f2] text-[#2d2d2a] border border-[#d8d4c7] rounded-xl px-2 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#4a5340] font-medium"
              >
                <option value={1}>1 Adult</option>
                <option value={2}>2 Adults</option>
                <option value={3}>3 Adults</option>
                <option value={4}>4 Adults</option>
              </select>
              <select
                id="booking-select-children"
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="w-full bg-[#f8f7f2] text-[#2d2d2a] border border-[#d8d4c7] rounded-xl px-2 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#4a5340] font-medium"
              >
                <option value={0}>0 Kids</option>
                <option value={1}>1 Kid</option>
                <option value={2}>2 Kids</option>
                <option value={3}>3 Kids</option>
              </select>
            </div>
          </div>

          {/* Submit Search Button */}
          <div>
            <button
              id="booking-search-submit-btn"
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] font-bold uppercase tracking-wider text-xs sm:text-sm shadow-md shadow-[#4a5340]/25 hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Search className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Check Rates</span>
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};
