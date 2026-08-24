import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { RESORT_IMAGES, RESORT_INFO } from '../data/resortData';
import { 
  Building2, 
  Users, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  Mic, 
  Tv, 
  Wind, 
  Award, 
  Phone,
  Send,
  Check
} from 'lucide-react';

export const EventsPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding & Reception',
    guestCount: '150-300',
    preferredDate: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Page Header */}
      <PageHeader
        title="Grand Events Hall & Conferences"
        subtitle="Host distinguished weddings, corporate summits, and gala banquets in our majestic classical white arched portico hall accommodating over 500 guests."
        badge="Summit & Banquet Center"
        breadcrumbs={[{ label: 'Events & Hall' }]}
        bgImage={RESORT_IMAGES.grandEventsHall}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hall Feature Showcase */}
        <div className="rounded-3xl border border-[#d8d4c7] overflow-hidden bg-white shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 relative h-80 lg:h-auto overflow-hidden bg-[#2d2d2a]">
            <img
              src={RESORT_IMAGES.grandEventsHall}
              alt="Galiness Paradise Grand Classical Arched Events Hall"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#4a5340] text-[#f8f7f2] text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>Classical European & Sierra Leonean Architecture</span>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#fcfbf9]">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7c6344]">
                Premises & Capacity
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2d2d2a]">
                The Grand Portico Hall
              </h2>
              <p className="text-sm text-[#54534e] leading-relaxed">
                Featuring towering white Roman-inspired arched columns, full ceramic tile flooring, industrial climate control, and comprehensive backstage suites for bridal parties or keynote speakers.
              </p>

              {/* Seating Configurations */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="p-2.5 rounded-xl bg-white border border-[#e3dfd6] text-xs">
                  <span className="text-[#7c6344] font-bold block text-[10px] uppercase">Banquet Dining</span>
                  <strong className="text-base text-[#2d2d2a] font-mono">400+</strong> Guests
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[#e3dfd6] text-xs">
                  <span className="text-[#7c6344] font-bold block text-[10px] uppercase">Theater / Summit</span>
                  <strong className="text-base text-[#2d2d2a] font-mono">600+</strong> Guests
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[#e3dfd6] text-xs">
                  <span className="text-[#7c6344] font-bold block text-[10px] uppercase">Classroom Workshop</span>
                  <strong className="text-base text-[#2d2d2a] font-mono">300+</strong> Guests
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[#e3dfd6] text-xs">
                  <span className="text-[#7c6344] font-bold block text-[10px] uppercase">Cocktail Reception</span>
                  <strong className="text-base text-[#2d2d2a] font-mono">750+</strong> Guests
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#e3dfd6] flex items-center justify-between text-xs font-bold text-[#4a5340]">
              <span className="flex items-center gap-1.5">
                <Wind className="w-4 h-4" />
                <span>Full Central Air Conditioning</span>
              </span>
              <a href="tel:074645364" className="hover:underline">
                Call 074-645364
              </a>
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7c6344]">
              Tailored Event Solutions
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2d2d2a]">
              Event Packages & Inclusions
            </h3>
            <p className="text-xs sm:text-sm text-[#686762]">
              All packages include uninterrupted power from dual industrial backup generators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-[#e3dfd6] shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-[10px] font-bold uppercase tracking-wider border border-rose-200">
                  Weddings & Receptions
                </span>
                <h4 className="text-lg font-bold text-[#2d2d2a]">Royal Nuptial Package</h4>
                <p className="text-xs text-[#686762] leading-relaxed">
                  Full day hall exclusivity, bridal dressing suite, red carpet entrance, tiered stage with backdrop, and banquet catering options.
                </p>
                <div className="space-y-1.5 pt-2 text-xs text-[#54534e]">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4a5340]" />
                    <span>Bridal Suite in Presidential Chalet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4a5340]" />
                    <span>Sound System & 4 Wireless Mics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4a5340]" />
                    <span>Custom lighting & table setup</span>
                  </div>
                </div>
              </div>
              <a
                href="#event-inquiry"
                className="w-full py-2.5 rounded-xl bg-[#ede9dc] hover:bg-[#4a5340] hover:text-white text-[#2d2d2a] font-bold text-xs text-center transition-colors"
              >
                Inquire for Wedding
              </a>
            </div>

            <div className="p-6 rounded-3xl bg-white border-2 border-[#4a5340] shadow-md space-y-4 flex flex-col justify-between relative">
              <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#4a5340] text-white text-[10px] font-bold uppercase">
                Most Popular
              </div>
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider border border-emerald-200">
                  Corporate & NGOs
                </span>
                <h4 className="text-lg font-bold text-[#2d2d2a]">Executive Summit & Retreat</h4>
                <p className="text-xs text-[#686762] leading-relaxed">
                  Dual high-lumen projectors, professional audio mixer, high-speed Wi-Fi network, morning/afternoon coffee breaks, and group lodging discounts.
                </p>
                <div className="space-y-1.5 pt-2 text-xs text-[#54534e]">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4a5340]" />
                    <span>HD Projection & Presentation Clickers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4a5340]" />
                    <span>Buffet Lunch in Thatched Gazebos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4a5340]" />
                    <span>Stationery, water & mints provided</span>
                  </div>
                </div>
              </div>
              <a
                href="#event-inquiry"
                className="w-full py-2.5 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] font-bold text-xs text-center shadow-sm transition-colors"
              >
                Book Conference
              </a>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#e3dfd6] shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-[10px] font-bold uppercase tracking-wider border border-amber-200">
                  Banquets & Galas
                </span>
                <h4 className="text-lg font-bold text-[#2d2d2a]">Gala Banquet & Awards</h4>
                <p className="text-xs text-[#686762] leading-relaxed">
                  Round banquet tables with linen, champagne toast service, DJ acoustic rigging, and full security perimeter management.
                </p>
                <div className="space-y-1.5 pt-2 text-xs text-[#54534e]">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4a5340]" />
                    <span>Round tables with 10-seater setting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4a5340]" />
                    <span>Full Barbecue & Bar Lounge setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4a5340]" />
                    <span>Dedicated event coordinator</span>
                  </div>
                </div>
              </div>
              <a
                href="#event-inquiry"
                className="w-full py-2.5 rounded-xl bg-[#ede9dc] hover:bg-[#4a5340] hover:text-white text-[#2d2d2a] font-bold text-xs text-center transition-colors"
              >
                Inquire for Banquet
              </a>
            </div>
          </div>
        </div>

        {/* Event Booking Inquiry Form */}
        <div id="event-inquiry" className="rounded-3xl border border-[#d8d4c7] bg-white p-6 sm:p-10 shadow-sm">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7c6344]">
                Direct Reservation Inquiry
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2d2d2a]">
                Reserve the Grand Events Hall
              </h3>
              <p className="text-xs sm:text-sm text-[#686762]">
                Our dedicated event coordinators will contact you within 2 hours with customized floor plans and pricing.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-emerald-900">Event Inquiry Received!</h4>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our events manager is reviewing your requirements for <strong>{formData.eventType}</strong> and will call you directly at <strong>{formData.phone}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2d2d2a] mb-1 uppercase">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Samuel Kargbo"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#fbfaf8] text-xs text-[#2d2d2a] focus:outline-none focus:ring-2 focus:ring-[#4a5340]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2d2d2a] mb-1 uppercase">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 074-645364 / 076317474"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#fbfaf8] text-xs text-[#2d2d2a] focus:outline-none focus:ring-2 focus:ring-[#4a5340]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2d2d2a] mb-1 uppercase">Event Type</label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#fbfaf8] text-xs text-[#2d2d2a] focus:outline-none focus:ring-2 focus:ring-[#4a5340]"
                    >
                      <option>Wedding & Reception</option>
                      <option>Corporate Summit / NGO Conference</option>
                      <option>Gala Banquet & Awards Dinner</option>
                      <option>Birthday & Anniversary Celebration</option>
                      <option>Religious Gathering / Retreat</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2d2d2a] mb-1 uppercase">Expected Guests</label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#fbfaf8] text-xs text-[#2d2d2a] focus:outline-none focus:ring-2 focus:ring-[#4a5340]"
                    >
                      <option>50 – 150 Guests</option>
                      <option>150 – 300 Guests</option>
                      <option>300 – 500 Guests</option>
                      <option>500+ Guests (Full Hall)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2d2d2a] mb-1 uppercase">Preferred Date</label>
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#fbfaf8] text-xs text-[#2d2d2a] focus:outline-none focus:ring-2 focus:ring-[#4a5340]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2d2d2a] mb-1 uppercase">Additional Notes & Audio/Catering Requests</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Provide any details regarding catering preferences, seating styles, or accommodation for attendees..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#fbfaf8] text-xs text-[#2d2d2a] focus:outline-none focus:ring-2 focus:ring-[#4a5340]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#4a5340]/20 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Hall Reservation Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
