import React, { useState } from 'react';
import { RESORT_IMAGES } from '../data/resortData';
import { 
  Users, 
  Crown, 
  Calendar, 
  CheckCircle2, 
  Building2, 
  Sparkles, 
  Clock, 
  Send,
  MessageSquare
} from 'lucide-react';

export const EventsSection: React.FC = () => {
  const [eventType, setEventType] = useState('wedding');
  const [guestsCount, setGuestsCount] = useState(100);
  const [cateringTier, setCateringTier] = useState('executive');
  const [submitted, setSubmitted] = useState(false);

  // Estimator calculation
  const getEstimatedBudget = () => {
    let baseRate = 800; // USD hall rental
    if (eventType === 'conference') baseRate = 600;
    if (eventType === 'private_party') baseRate = 500;

    let cateringPerHead = 12; // USD per guest
    if (cateringTier === 'executive') cateringPerHead = 18;
    if (cateringTier === 'presidential') cateringPerHead = 25;

    const totalUSD = baseRate + guestsCount * cateringPerHead;
    const totalNLE = Math.round(totalUSD * 23.5);

    return { totalUSD, totalNLE };
  };

  const { totalUSD, totalNLE } = getEstimatedBudget();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="events" className="py-20 sm:py-28 relative bg-[#f8f7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ede9dc] border border-[#d8d4c7] text-[#4a5340] text-xs font-semibold uppercase tracking-widest">
            <Users className="w-3.5 h-3.5 text-[#4a5340]" />
            <span>Celebrations & Conferences</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d2d2a] tracking-tight">
            Grand Event Hall & <span className="gold-gradient-text">Private Galas</span>
          </h2>
          <p className="text-[#686762] text-sm sm:text-base leading-relaxed">
            Host milestone weddings, executive board retreats, international summits, and anniversary parties at Gallines Paradise. Up to 300 delegates with full audio-visual, catering, and secured VIP parking.
          </p>
        </div>

        {/* Dual Panel: Estimator & Event Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Event Capacity & Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2d2d2a]">
                Flawless Event Execution in a Regal Setting
              </h3>
              <p className="text-sm text-[#686762] leading-relaxed">
                Featuring our iconic classical building with grand columns, spacious paved avenues for wedding processions, and lush garden gazebos for cocktail receptions, Gallines Paradise is the region's preferred event destination.
              </p>
            </div>

            {/* Event Types Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#ffffff] border border-[#e3dfd6] shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#7c6344]">
                  <Crown className="w-4 h-4" />
                  <span className="font-bold text-sm text-[#2d2d2a]">Royal Weddings</span>
                </div>
                <p className="text-xs text-[#686762]">
                  Red-carpet entrance, bridal suite preparation room, gazebo cocktail hour, and banquet seating for up to 300 guests.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#ffffff] border border-[#e3dfd6] shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#7c6344]">
                  <Building2 className="w-4 h-4" />
                  <span className="font-bold text-sm text-[#2d2d2a]">Corporate Summits</span>
                </div>
                <p className="text-xs text-[#686762]">
                  High-speed WiFi, PA sound system, projector setup, continuous coffee breaks, and group lodging discounts.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#ffffff] border border-[#e3dfd6] shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#7c6344]">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-bold text-sm text-[#2d2d2a]">Birthday & Anniversaries</span>
                </div>
                <p className="text-xs text-[#686762]">
                  Outdoor barbecue by the thatched gazebos, live music setup, custom catering, and personalized hospitality.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#ffffff] border border-[#e3dfd6] shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#7c6344]">
                  <Users className="w-4 h-4" />
                  <span className="font-bold text-sm text-[#2d2d2a]">Sports & Team Retreats</span>
                </div>
                <p className="text-xs text-[#686762]">
                  Combine conference sessions with private turf sports arena tournaments and wellness gym sessions.
                </p>
              </div>
            </div>

            {/* Quick Hotline */}
            <div className="p-4 rounded-2xl bg-[#ede9dc] border border-[#d8d4c7] flex items-center justify-between text-xs text-[#2d2d2a] shadow-sm">
              <span>Have a custom event inquiry? Speak directly with our event manager:</span>
              <a href="tel:+23276000888" className="text-[#4a5340] font-bold hover:underline shrink-0 ml-2">
                +232 76 000 888
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Event Quote Estimator */}
          <div className="lg:col-span-6">
            <div className="bg-[#ffffff] p-6 sm:p-8 rounded-3xl border border-[#e3dfd6] shadow-lg space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#e3dfd6]">
                <div>
                  <span className="text-[11px] text-[#7c6344] uppercase tracking-widest font-bold">Interactive Planner</span>
                  <h4 className="font-display text-lg sm:text-xl font-bold text-[#2d2d2a]">
                    Event Quotation Estimator
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#ede9dc] text-[#4a5340] flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#4a5340] mx-auto" />
                  <h5 className="font-display text-lg font-bold text-[#2d2d2a]">Event Inquiry Received!</h5>
                  <p className="text-xs text-[#686762] max-w-sm mx-auto">
                    Our Senior Event Coordinator will contact you within 2 hours with an official customized proposal and date lock options.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-xl bg-[#4a5340] text-xs font-semibold text-[#f8f7f2] hover:bg-[#3d4534] cursor-pointer"
                  >
                    Recalculate Estimate
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Event Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#54534e] uppercase tracking-wider">
                      Event Category
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'wedding', label: 'Wedding Gala' },
                        { id: 'conference', label: 'Conference' },
                        { id: 'private_party', label: 'Private Party' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setEventType(item.id)}
                          className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                            eventType === item.id
                              ? 'bg-[#4a5340] text-[#f8f7f2] font-bold shadow-md'
                              : 'bg-[#f8f7f2] text-[#54534e] border border-[#d8d4c7] hover:bg-[#ede9dc]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Guests Slider */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#2d2d2a]">
                      <span className="uppercase tracking-wider">Estimated Guests</span>
                      <span className="text-[#4a5340] font-bold">{guestsCount} Guests</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="300"
                      step="10"
                      value={guestsCount}
                      onChange={(e) => setGuestsCount(Number(e.target.value))}
                      className="w-full accent-[#4a5340] bg-[#e3dfd6] h-2 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-[#a3a097]">
                      <span>20 (Intimate)</span>
                      <span>150 (Standard)</span>
                      <span>300 (Full Hall)</span>
                    </div>
                  </div>

                  {/* Catering Tier */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#54534e] uppercase tracking-wider">
                      Catering & Beverage Tier
                    </label>
                    <select
                      value={cateringTier}
                      onChange={(e) => setCateringTier(e.target.value)}
                      className="w-full bg-[#f8f7f2] border border-[#d8d4c7] rounded-xl px-3 py-2.5 text-xs text-[#2d2d2a] focus:border-[#4a5340]"
                    >
                      <option value="classic">Classic Buffet (Jollof, Fried Rice, Chicken, Salads)</option>
                      <option value="executive">Executive Gourmet (Grilled Snapper, Suya, Beef, Drinks, Desserts)</option>
                      <option value="presidential">Presidential Banquet (Full Seafood, Barbecue, Open Cocktail Bar, Multi-Course)</option>
                    </select>
                  </div>

                  {/* Estimated Price Output */}
                  <div className="p-4 rounded-2xl bg-[#ede9dc] border border-[#d8d4c7] flex items-center justify-between shadow-sm">
                    <div>
                      <p className="text-[10px] text-[#686762] uppercase tracking-wider font-semibold">Estimated Event Package</p>
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-2xl font-bold text-[#4a5340]">
                          ${totalUSD.toLocaleString()}
                        </span>
                        <span className="text-xs text-[#686762]">
                          (Le {totalNLE.toLocaleString()} NLe)
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] text-[#686762] text-right max-w-[120px]">
                      Includes hall setup, sound, seating & catering
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] font-bold uppercase tracking-wider text-xs shadow-md shadow-[#4a5340]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Official Event Proposal</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
