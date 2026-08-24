import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, Calendar } from 'lucide-react';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-[#ffffff] hover:bg-[#ede9dc] text-[#2d2d2a] hover:text-[#4a5340] border border-[#d8d4c7] shadow-xl flex items-center justify-center transition-all hover:-translate-y-1 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Direct WhatsApp Concierge Floating Pill */}
      <a
        id="floating-whatsapp-btn"
        href="https://wa.me/23276000888?text=Hello%20Gallines%20Paradise%20Resort,%20I%20would%20like%20to%20inquire%20about%20a%20stay."
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] shadow-2xl shadow-[#4a5340]/40 transition-all hover:scale-105 border border-[#4a5340]"
        title="Chat with Concierge on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#4a5340] shrink-0" />
        <span className="hidden sm:inline text-xs font-bold tracking-wider uppercase">
          WhatsApp Concierge
        </span>
      </a>

      {/* Quick Floating Book Bar on mobile */}
      <button
        type="button"
        onClick={onOpenBooking}
        className="lg:hidden flex items-center gap-2 px-5 py-3 rounded-full bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] font-bold uppercase tracking-wider text-xs shadow-2xl shadow-[#4a5340]/40 border border-[#3d4534] cursor-pointer"
      >
        <Calendar className="w-4 h-4" />
        <span>Book Stay</span>
      </button>

    </div>
  );
};
