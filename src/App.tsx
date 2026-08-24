import React, { useState } from 'react';
import { Currency, Room } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickBookingBar } from './components/QuickBookingBar';
import { AboutSection } from './components/AboutSection';
import { RoomsSection } from './components/RoomsSection';
import { SportsWellnessSection } from './components/SportsWellnessSection';
import { DiningSection } from './components/DiningSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { PaymentSecuritySection } from './components/PaymentSecuritySection';
import { GallerySection } from './components/GallerySection';
import { EventsSection } from './components/EventsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';
import { RoomDetailModal } from './components/RoomDetailModal';

export default function App() {
  // Global State
  const [currency, setCurrency] = useState<Currency>('USD');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoomForDetail, setSelectedRoomForDetail] = useState<Room | null>(null);
  
  // Quick Search filters passed to booking modal
  const [bookingPref, setBookingPref] = useState<{
    roomId?: string;
    checkIn?: string;
    checkOut?: string;
    adults?: number;
    children?: number;
  }>({});

  const handleOpenBookingWithPref = (pref: {
    checkIn?: string;
    checkOut?: string;
    adults?: number;
    children?: number;
    roomId?: string;
  }) => {
    setBookingPref(pref);
    setIsBookingModalOpen(true);
  };

  const handleBookRoom = (roomId: string) => {
    setBookingPref((prev) => ({ ...prev, roomId }));
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f7f2] text-[#2d2d2a] font-sans selection:bg-[#4a5340] selection:text-[#f8f7f2] flex flex-col antialiased">
      
      {/* Navigation Header */}
      <Navbar
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={() => setIsBookingModalOpen(true)} />

        {/* Quick Booking Check Availability Bar */}
        <QuickBookingBar
          onSearch={(searchData) =>
            handleOpenBookingWithPref({
              checkIn: searchData.checkIn,
              checkOut: searchData.checkOut,
              adults: searchData.adults,
              children: searchData.children,
              roomId: searchData.roomType !== 'all' ? searchData.roomType : undefined,
            })
          }
        />

        {/* About & Estate Heritage */}
        <AboutSection onOpenBooking={() => setIsBookingModalOpen(true)} />

        {/* Accommodations & Suites */}
        <RoomsSection
          currency={currency}
          onSelectRoom={(room) => setSelectedRoomForDetail(room)}
          onBookRoom={handleBookRoom}
        />

        {/* Thatched Gazebos & Dining */}
        <DiningSection currency={currency} />

        {/* Sports Arena & Cardio Fitness Gym */}
        <SportsWellnessSection onOpenBooking={() => setIsBookingModalOpen(true)} />

        {/* Resort Amenities Breakdown */}
        <AmenitiesSection onOpenBooking={() => setIsBookingModalOpen(true)} />

        {/* Mobile Payments (Orange Money & SLCB QR) & 24/7 Front Desk */}
        <PaymentSecuritySection />

        {/* Photo Gallery & Lightbox */}
        <GallerySection />

        {/* Events, Weddings & Conferences */}
        <EventsSection />

        {/* Verified Reviews & Ratings */}
        <ReviewsSection />

        {/* Contact, Location & FAQs */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Interactive Booking Engine Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        currency={currency}
        selectedRoomId={bookingPref.roomId}
        initialCheckIn={bookingPref.checkIn}
        initialCheckOut={bookingPref.checkOut}
        initialAdults={bookingPref.adults}
        initialChildren={bookingPref.children}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* Room Details Modal */}
      <RoomDetailModal
        room={selectedRoomForDetail}
        currency={currency}
        onClose={() => setSelectedRoomForDetail(null)}
        onBookRoom={(roomId) => {
          setSelectedRoomForDetail(null);
          handleBookRoom(roomId);
        }}
      />

    </div>
  );
}
