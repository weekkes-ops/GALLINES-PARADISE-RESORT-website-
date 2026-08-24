import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Currency, Room } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';
import { RoomDetailModal } from './components/RoomDetailModal';
import { AdminDashboardModal } from './components/AdminDashboardModal';
import { AuthModal } from './components/AuthModal';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { DiningPage } from './pages/DiningPage';
import { SportsWellnessPage } from './pages/SportsWellnessPage';
import { EventsPage } from './pages/EventsPage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPage } from './pages/BlogPage';
import { PaymentsPage } from './pages/PaymentsPage';
import { ContactPage } from './pages/ContactPage';
import { BookingPage } from './pages/BookingPage';

function AppContent() {
  // Global Currency State
  const [currency, setCurrency] = useState<Currency>('USD');

  // Modals State
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoomForDetail, setSelectedRoomForDetail] = useState<Room | null>(null);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

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
      <ScrollToTop />

      {/* Navigation Header */}
      <Navbar
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenBooking={() => setIsBookingModalOpen(true)}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />

      {/* Main Multi-Page Route Content */}
      <main className="flex-1 pt-20 sm:pt-24">
        <Routes>
          {/* 1. Home Page */}
          <Route
            path="/"
            element={
              <HomePage
                currency={currency}
                onOpenBooking={() => setIsBookingModalOpen(true)}
                onSelectRoom={(room) => setSelectedRoomForDetail(room)}
                onBookRoom={handleBookRoom}
                onOpenAdmin={() => setIsAdminModalOpen(true)}
              />
            }
          />

          {/* 2. Accommodations & Suites Page */}
          <Route
            path="/rooms"
            element={
              <RoomsPage
                currency={currency}
                onSelectRoom={(room) => setSelectedRoomForDetail(room)}
                onBookRoom={handleBookRoom}
              />
            }
          />

          {/* 3. Dining, Thatched Gazebos & Grill Page */}
          <Route
            path="/dining"
            element={
              <DiningPage
                currency={currency}
                onOpenBooking={() => setIsBookingModalOpen(true)}
              />
            }
          />

          {/* 4. Sports Arena & Indoor Cardio Gym Page */}
          <Route
            path="/wellness"
            element={
              <SportsWellnessPage
                onOpenBooking={() => setIsBookingModalOpen(true)}
              />
            }
          />

          {/* 5. Grand Events Hall, Banquets & Conferences Page */}
          <Route
            path="/events"
            element={<EventsPage />}
          />

          {/* 6. Official Photo Library & Lightbox Page */}
          <Route
            path="/gallery"
            element={<GalleryPage />}
          />

          {/* 7. Resort Journal, News & Articles Page */}
          <Route
            path="/blog"
            element={
              <BlogPage
                onOpenAdmin={() => setIsAdminModalOpen(true)}
              />
            }
          />

          {/* 8. Payments, Orange Money, SLCB QR & Policies Page */}
          <Route
            path="/payments"
            element={<PaymentsPage />}
          />

          {/* 9. Location, Direct Hotlines, Shuttle & FAQs Page */}
          <Route
            path="/contact"
            element={<ContactPage />}
          />

          {/* 10. Direct Reservation Booking Engine Page */}
          <Route
            path="/book"
            element={
              <BookingPage
                currency={currency}
                onCurrencyChange={setCurrency}
              />
            }
          />

          {/* Fallback to Home */}
          <Route
            path="*"
            element={
              <HomePage
                currency={currency}
                onOpenBooking={() => setIsBookingModalOpen(true)}
                onSelectRoom={(room) => setSelectedRoomForDetail(room)}
                onBookRoom={handleBookRoom}
                onOpenAdmin={() => setIsAdminModalOpen(true)}
              />
            }
          />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenBooking={() => setIsBookingModalOpen(true)} />

      {/* Interactive Quick Booking Modal (Overlay) */}
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

      {/* Admin Dashboard & Management Modal */}
      <AdminDashboardModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        onOpenPublicBlog={() => {
          setIsAdminModalOpen(false);
          window.location.href = '/blog';
        }}
      />

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={() => setIsAdminModalOpen(true)}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
