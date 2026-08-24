import React, { useState } from 'react';
import { Room, Currency } from '../types';
import { 
  X, 
  Bed, 
  Users, 
  Maximize2, 
  Check, 
  Sparkles, 
  Calendar, 
  ChevronLeft, 
  ChevronRight,
  Bath,
  Tv,
  Wind,
  Wifi,
  Coffee,
  ShieldCheck
} from 'lucide-react';

interface RoomDetailModalProps {
  room: Room | null;
  currency: Currency;
  onClose: () => void;
  onBook: (roomId: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  currency,
  onClose,
  onBook,
}) => {
  if (!room) return null;

  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const formatPrice = (usd: number, nle: number) => {
    return currency === 'USD' ? `$${usd}` : `Le ${nle.toLocaleString()}`;
  };

  const nextImg = () => {
    setActiveImageIdx((prev) => (prev + 1) % room.gallery.length);
  };

  const prevImg = () => {
    setActiveImageIdx((prev) => (prev - 1 + room.gallery.length) % room.gallery.length);
  };

  return (
    <div 
      id="room-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl bg-[#0e1619] border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0a1012]">
          <div>
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              {room.category}
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              {room.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Image Slider */}
          <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden group bg-slate-950">
            <img
              src={room.gallery[activeImageIdx] || room.image}
              alt={`${room.name} photo ${activeImageIdx + 1}`}
              className="w-full h-full object-cover transition-transform duration-500"
            />

            {/* Navigation Arrows */}
            {room.gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevImg}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextImg}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Thumbnails indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                  {room.gallery.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImageIdx(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        i === activeImageIdx ? 'bg-amber-400 w-6' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Maximize2 className="w-4 h-4 text-amber-400" />
              <div>
                <p className="text-slate-400 text-[10px]">Room Area</p>
                <p className="font-semibold">{room.size}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Users className="w-4 h-4 text-amber-400" />
              <div>
                <p className="text-slate-400 text-[10px]">Max Guests</p>
                <p className="font-semibold">{room.capacity.adults} Adults, {room.capacity.children} Kids</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Bed className="w-4 h-4 text-amber-400" />
              <div>
                <p className="text-slate-400 text-[10px]">Bedding</p>
                <p className="font-semibold">{room.bedType}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Bath className="w-4 h-4 text-amber-400" />
              <div>
                <p className="text-slate-400 text-[10px]">Bathroom</p>
                <p className="font-semibold">Deep Bathtub & Shower</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Suite Overview & Layout
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Features & Room Inclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Premium In-Room Features
              </h5>
              <ul className="space-y-2">
                {room.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Included Resort Privileges
              </h5>
              <ul className="space-y-2">
                {room.amenities.map((a, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Guarantee Pill */}
          <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-center gap-3 text-xs text-amber-200">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <span>
              Best Rate Guaranteed. Mobile Money (Orange Money & SLCB QR) or Credit Cards accepted with immediate booking confirmation.
            </span>
          </div>

        </div>

        {/* Modal Footer / Direct Booking CTA */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#0a1012] flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[11px] text-slate-400 uppercase tracking-wider">Nightly Rate</p>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold text-white font-display">
                {formatPrice(room.priceUSD, room.priceNLE)}
              </span>
              <span className="text-xs text-slate-400">/ night incl. taxes</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBook(room.id);
              }}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book This Room</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
