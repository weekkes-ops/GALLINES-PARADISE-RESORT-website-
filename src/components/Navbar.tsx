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
  MapPin,
  ShieldCheck,
  User,
  LogOut,
  BookOpen
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenBooking: (roomId?: string) => void;
  onOpenAdmin: () => void;
  onOpenAuth: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currency,
  onCurrencyChange,
  onOpenBooking,
  onOpenAdmin,
  onOpenAuth
}) => {
  const { user, profile, isStaff, isAdmin, signOut } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accommodations', href: '#rooms' },
    { label: 'Sports & Pool', href: '#sports-wellness' },
    { label: 'Gazebos & Dining', href: '#dining' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Resort News', href: '#blog' },
    { label: 'Photo Gallery', href: '#gallery' },
    { label: 'Events & Hall', href: '#events' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      id="main-header" 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
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
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-wider font-semibold text-[#54534e] hover:text-[#4a5340] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#4a5340] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Utilities */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Currency Switcher */}
            <div 
              id="currency-toggle"
              className="flex items-center bg-[#ede9dc] border border-[#d8d4c7] rounded-full p-0.5 text-xs font-semibold"
            >
              <button
                type="button"
                onClick={() => onCurrencyChange('USD')}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  currency === 'USD' 
                    ? 'bg-[#4a5340] text-white shadow-sm font-bold' 
                    : 'text-[#686762] hover:text-[#2d2d2a]'
                }`}
                title="View rates in US Dollars ($)"
              >
                USD
              </button>
              <button
                type="button"
                onClick={() => onCurrencyChange('NLE')}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  currency === 'NLE' 
                    ? 'bg-[#4a5340] text-white shadow-sm font-bold' 
                    : 'text-[#686762] hover:text-[#2d2d2a]'
                }`}
                title="View rates in Sierra Leonean Leones (NLe)"
              >
                NLe
              </button>
            </div>

            {/* User Account / Admin Center Button */}
            {user ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                    isStaff
                      ? 'bg-[#4a5340] text-[#f8f7f2] border-[#3d4534] shadow-sm'
                      : 'bg-[#ede9dc] text-[#2d2d2a] border-[#d8d4c7]'
                  }`}
                >
                  {isStaff ? <ShieldCheck className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                  <span className="max-w-[90px] truncate">
                    {isStaff ? 'Admin Portal' : profile?.displayName || 'My Account'}
                  </span>
                </button>

                {/* Dropdown menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-[#ffffff] border border-[#d8d4c7] shadow-xl py-2 z-50 text-xs animate-in fade-in duration-150">
                    <div className="px-4 py-2 border-b border-[#e3dfd6]">
                      <p className="font-bold text-[#2d2d2a] truncate">{profile?.displayName || 'Guest User'}</p>
                      <p className="text-[11px] text-[#686762] truncate">{user.email}</p>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-[#4a5340]/10 text-[#4a5340] uppercase">
                        {profile?.role || 'Guest'}
                      </span>
                    </div>

                    {isStaff && (
                      <button
                        type="button"
                        onClick={() => {
                          setUserDropdownOpen(false);
                          onOpenAdmin();
                        }}
                        className="w-full text-left px-4 py-2.5 hover:bg-[#f2efe7] font-bold text-[#4a5340] flex items-center gap-2 cursor-pointer"
                      >
                        <ShieldCheck className="w-4 h-4" />
                        <span>Admin Dashboard & Posts</span>
                      </button>
                    )}

                    <a
                      href="#blog"
                      onClick={() => setUserDropdownOpen(false)}
                      className="w-full text-left px-4 py-2 hover:bg-[#f2efe7] text-[#2d2d2a] flex items-center gap-2"
                    >
                      <BookOpen className="w-4 h-4 text-[#686762]" />
                      <span>Resort Journal</span>
                    </a>

                    <div className="border-t border-[#e3dfd6] my-1" />

                    <button
                      type="button"
                      onClick={() => {
                        setUserDropdownOpen(false);
                        signOut();
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-rose-50 text-rose-700 flex items-center gap-2 cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                type="button"
                onClick={onOpenAuth}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-[#4a5340] bg-[#ede9dc]/80 hover:bg-[#ede9dc] border border-[#d8d4c7] transition-all cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Admin / Sign In</span>
              </button>
            )}

            {/* Primary Reserve Button */}
            <button
              id="header-book-now-btn"
              type="button"
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden rounded-full bg-[#4a5340] hover:bg-[#3d4534] px-3.5 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#f8f7f2] shadow-md shadow-[#4a5340]/20 transition-all cursor-pointer shrink-0"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve</span>
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
          {user && (
            <div className="p-3 rounded-2xl bg-[#ffffff] border border-[#e3dfd6] flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[#2d2d2a]">{profile?.displayName || user.email}</p>
                <span className="text-[10px] font-bold text-[#4a5340] uppercase">{profile?.role || 'Guest'}</span>
              </div>
              {isStaff ? (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmin();
                  }}
                  className="px-3 py-1.5 rounded-xl bg-[#4a5340] text-white text-xs font-bold"
                >
                  Admin Panel
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    signOut();
                  }}
                  className="text-xs text-rose-700 font-semibold"
                >
                  Log Out
                </button>
              )}
            </div>
          )}

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
                Bonthe District, Sierra Leone
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
