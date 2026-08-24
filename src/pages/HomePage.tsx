import React from 'react';
import { Link } from 'react-router-dom';
import { Currency, Room } from '../types';
import { Hero } from '../components/Hero';
import { QuickBookingBar } from '../components/QuickBookingBar';
import { AboutSection } from '../components/AboutSection';
import { RoomsSection } from '../components/RoomsSection';
import { DiningSection } from '../components/DiningSection';
import { SportsWellnessSection } from '../components/SportsWellnessSection';
import { BlogSection } from '../components/BlogSection';
import { AmenitiesSection } from '../components/AmenitiesSection';
import { GallerySection } from '../components/GallerySection';
import { EventsSection } from '../components/EventsSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { ContactSection } from '../components/ContactSection';
import { ArrowRight, Bed, Utensils, Activity, Building2, Phone, Sparkles } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface HomePageProps {
  currency: Currency;
  onOpenBooking: () => void;
  onSelectRoom: (room: Room) => void;
  onBookRoom: (roomId: string) => void;
  onOpenAdmin: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currency,
  onOpenBooking,
  onSelectRoom,
  onBookRoom,
  onOpenAdmin,
}) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* 2. Quick Search & Availability Bar */}
      <QuickBookingBar
        onSearch={() => onOpenBooking()}
      />

      {/* Quick Multi-Page Route Showcase Tiles */}
      <section className="py-12 bg-[#ede9dc]/50 border-b border-[#d8d4c7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7c6344]">
              Explore Galiness Paradise
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2d2d2a]">
              Dedicated Resort Destinations
            </h2>
            <p className="text-xs sm:text-sm text-[#686762]">
              Navigate directly to our dedicated sections and full-page experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/rooms"
              className="group p-5 rounded-2xl bg-[#ffffff] border border-[#e3dfd6] hover:border-[#4a5340] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#4a5340]/10 group-hover:bg-[#4a5340] text-[#4a5340] group-hover:text-white flex items-center justify-center transition-colors">
                  <Bed className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#2d2d2a] group-hover:text-[#4a5340] transition-colors">
                    Suites & Chalets
                  </h3>
                  <p className="text-xs text-[#686762] mt-1">
                    Explore all 4 luxury suite categories with pricing in USD & NLe.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-[#4a5340] group-hover:translate-x-1 transition-transform">
                <span>View Accommodations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              to="/dining"
              className="group p-5 rounded-2xl bg-[#ffffff] border border-[#e3dfd6] hover:border-[#4a5340] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#4a5340]/10 group-hover:bg-[#4a5340] text-[#4a5340] group-hover:text-white flex items-center justify-center transition-colors">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#2d2d2a] group-hover:text-[#4a5340] transition-colors">
                    Thatched Gazebos
                  </h3>
                  <p className="text-xs text-[#686762] mt-1">
                    Private palm-thatched dining cabanas, Afro-fusion menu & grill.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-[#4a5340] group-hover:translate-x-1 transition-transform">
                <span>Explore Dining & Menus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              to="/wellness"
              className="group p-5 rounded-2xl bg-[#ffffff] border border-[#e3dfd6] hover:border-[#4a5340] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#4a5340]/10 group-hover:bg-[#4a5340] text-[#4a5340] group-hover:text-white flex items-center justify-center transition-colors">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#2d2d2a] group-hover:text-[#4a5340] transition-colors">
                    Sports & Fitness
                  </h3>
                  <p className="text-xs text-[#686762] mt-1">
                    All-weather green turf sports arena, cardio gym & swimming pool.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-[#4a5340] group-hover:translate-x-1 transition-transform">
                <span>Sports Arena & Gym</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              to="/events"
              className="group p-5 rounded-2xl bg-[#ffffff] border border-[#e3dfd6] hover:border-[#4a5340] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#4a5340]/10 group-hover:bg-[#4a5340] text-[#4a5340] group-hover:text-white flex items-center justify-center transition-colors">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#2d2d2a] group-hover:text-[#4a5340] transition-colors">
                    Grand Events Hall
                  </h3>
                  <p className="text-xs text-[#686762] mt-1">
                    Classical white arched portico hall for summits and banquets.
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center gap-1.5 text-xs font-bold text-[#4a5340] group-hover:translate-x-1 transition-transform">
                <span>Events & Conferences</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. About & Heritage */}
      <AboutSection onOpenBooking={onOpenBooking} />

      {/* 4. Accommodations Preview */}
      <RoomsSection
        currency={currency}
        onSelectRoom={onSelectRoom}
        onBookRoom={onBookRoom}
      />

      {/* 5. Dining & Gazebos */}
      <DiningSection currency={currency} />

      {/* 6. Sports Arena & Wellness */}
      <SportsWellnessSection onOpenBooking={onOpenBooking} />

      {/* 7. Resort Amenities Breakdown */}
      <AmenitiesSection onOpenBooking={onOpenBooking} />

      {/* 8. Photo Gallery */}
      <GallerySection />

      {/* 9. Events & Hall */}
      <EventsSection />

      {/* 10. Resort News & Journal */}
      <BlogSection onOpenAdmin={onOpenAdmin} />

      {/* 11. Verified Reviews */}
      <ReviewsSection />

      {/* 12. Location, Hotlines & FAQs */}
      <ContactSection />
    </div>
  );
};
