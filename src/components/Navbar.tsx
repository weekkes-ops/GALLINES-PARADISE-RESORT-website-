import React, { useState, useEffect } from 'react';
import { Currency } from '../types';
import { 
  Crown, 
  Phone, 
  Calendar, 
  Menu, 
  X, 
  ChevronRight, 
  MessageCircle, 
  Sparkles,
  MapPin
} from 'lucide-react';

interface NavbarProps {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  onOpenBooking: (roomId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currency, setCurrency, onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accommodations', href: '#rooms' },
    { label: 'Sports & Gym', href: '#sports-wellness' },
    { label: 'Gazebos & Dining', href: '#dining' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Photo Gallery', href: '#gallery' },
    { label: 'Events & Hall', href: '#events' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      id="main-header" 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#f8f7f2]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#e3dfd6]' 
          : 'bg-gradient-to-b from-[#f8f7f2]/95 via-[#f8f7f2]/80 to-transparent py-4'
      }`}
    >
      {/* Top Banner Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Crown Crest */}
          <a 
            id="brand-logo"
            href="#" 
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#4a5340] p-0.5 shadow-md shadow-[#4a5340]/15 flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-[#3d4534] rounded-full flex items-center justify-center">
                <Crown className="w-5 h-5 text-[#f8f7f2]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-[#2d2d2a] uppercase group-hover:text-[#4a5340] transition-colors">
                  GALLINES
                </span>
                <span className="font-display text-lg sm:text-xl md:text-2xl font-light text-[#7c6344] tracking-widest uppercase">
                  PARADISE
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-[#7c6344] tracking-widest uppercase font-medium">
                Luxury Resort & Hospitality
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs xl:text-sm uppercase tracking-wider font-semibold text-[#54534e] hover:text-[#4a5340] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#4a5340] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Utilities */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            
            {/* Currency Switcher */}
            <div 
              id="currency-toggle"
              className="flex items-center bg-[#ede9dc] border border-[#d8d4c7] rounded-full p-0.5 text-xs font-semibold"
            >
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  currency === 'USD' 
                    ? 'bg-[#4a5340] text-white shadow-sm font-bold' 
                    : 'text-[#686762] hover:text-[#2d2d2a]'
                }`}
                title="View rates in US Dollars ($)"
              >
                USD ($)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('NLE')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  currency === 'NLE' 
                    ? 'bg-[#4a5340] text-white shadow-sm font-bold' 
                    : 'text-[#686762] hover:text-[#2d2d2a]'
                }`}
                title="View rates in Sierra Leonean Leones (NLe)"
              >
                NLe (Le)
              </button>
            </div>

            {/* Direct Phone / WhatsApp quick link */}
            <a
              id="header-call-btn"
              href="tel:+23276000888"
              className="hidden md:flex items-center gap-1.5 text-xs text-[#4a5340] hover:text-[#3d4534] font-medium px-3 py-1.5 rounded-full border border-[#d8d4c7] hover:border-[#4a5340] transition-all bg-[#ede9dc]/60"
            >
              <Phone className="w-3.5 h-3.5 text-[#4a5340]" />
              <span>+232 76 000 888</span>
            </a>

            {/* Primary Reserve Button */}
            <button
              id="header-book-now-btn"
              type="button"
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden rounded-full bg-[#4a5340] hover:bg-[#3d4534] px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#f8f7f2] shadow-md shadow-[#4a5340]/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>Reserve Room</span>
              </span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#2d2d2a] hover:text-[#4a5340] hover:bg-[#ede9dc] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#f8f7f2] border-b border-[#e3dfd6] px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-xl"
        >
          <div className="grid grid-cols-1 gap-1 pt-2 border-t border-[#e3dfd6]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-sm uppercase tracking-wider font-semibold text-[#54534e] hover:text-[#4a5340] py-2.5 border-b border-[#e3dfd6]/60"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#7c6344]" />
              </a>
            ))}
          </div>

          <div className="pt-3 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-[#686762]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#4a5340]" />
                Bo / Southern Province, Sierra Leone
              </span>
              <span className="text-[#4a5340] font-semibold">24/7 Front Desk</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/23276000888?text=Hello%20Gallines%20Paradise%20Resort,%20I%20would%20like%20to%20inquire%20about%20a%20reservation."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#eef2eb] border border-[#d2ddd0] text-[#3e5239] text-xs font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-[#3e5239]" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+23276000888"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#ede9dc] border border-[#d8d4c7] text-[#2d2d2a] text-xs font-semibold"
              >
                <Phone className="w-4 h-4 text-[#4a5340]" />
                <span>Call Concierge</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-[#4a5340] text-[#f8f7f2] font-bold uppercase tracking-wider text-sm shadow-md cursor-pointer"
            >
              Book Stay Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
