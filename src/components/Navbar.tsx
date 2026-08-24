import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Currency } from '../types';
import { RESORT_INFO, RESORT_LOGO } from '../data/resortData';
import { 
  Phone, 
  Calendar, 
  Menu, 
  X, 
  MessageCircle, 
  ShieldCheck, 
  User, 
  LogOut, 
  BookOpen,
  LayoutGrid
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { LeftSystemMenu } from './LeftSystemMenu';

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
  const location = useLocation();
  const navigate = useNavigate();
  const { user, profile, isStaff, signOut } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Accommodations', path: '/rooms' },
    { label: 'Dining & Gazebos', path: '/dining' },
    { label: 'Sports & Gym', path: '/wellness' },
    { label: 'Events Hall', path: '/events' },
    { label: 'Photo Library', path: '/gallery' },
    { label: 'Journal', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Floating / Fixed Header */}
      <header 
        id="main-header" 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#f8f7f2]/95 backdrop-blur-md shadow-sm py-2.5 border-b border-[#e3dfd6]' 
            : 'bg-gradient-to-b from-[#f8f7f2]/95 via-[#f8f7f2]/85 to-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            
            {/* LEFT-HAND SIDE: Left System Menu Toggle + Brand Emblem */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Primary Left-Hand Menu Trigger */}
              <button
                id="left-system-menu-toggle"
                type="button"
                onClick={() => setIsLeftMenuOpen(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#ede9dc] hover:bg-[#ded9cb] text-[#2d2d2a] hover:text-[#4a5340] border border-[#d8d4c7] shadow-xs transition-all cursor-pointer group"
                aria-label="Open Left Hand System Menu"
                title="Open Left Hand System Menu"
              >
                <Menu className="w-5 h-5 text-[#4a5340] group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider text-[#4a5340]">
                  Menu
                </span>
              </button>

              {/* Brand Logo with Official Emblem */}
              <Link 
                id="brand-logo"
                to="/" 
                className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full p-0.5 border border-[#d8d4c7] shadow-sm flex items-center justify-center transition-transform group-hover:scale-105 bg-white overflow-hidden shrink-0">
                  <img
                    src={RESORT_LOGO}
                    alt="Galiness Paradise Resort Official Logo"
                    className="w-full h-full object-contain p-0.5"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-display text-base sm:text-lg md:text-xl font-bold tracking-wider text-[#2d2d2a] uppercase group-hover:text-[#4a5340] transition-colors">
                      GALINESS
                    </span>
                    <span className="font-display text-base sm:text-lg md:text-xl font-light text-[#7c6344] tracking-widest uppercase">
                      PARADISE
                    </span>
                  </div>
                  <p className="hidden xs:block text-[8px] sm:text-[9px] text-[#7c6344] tracking-widest uppercase font-semibold">
                    Resort & Hotel • Relax & Unwind
                  </p>
                </div>
              </Link>

            </div>

            {/* Desktop Navigation Quick Links */}
            <nav id="desktop-nav" className="hidden lg:flex items-center gap-3 xl:gap-5">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`text-xs uppercase tracking-wider font-semibold transition-all relative py-1 ${
                      isActive 
                        ? 'text-[#4a5340] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#4a5340]' 
                        : 'text-[#54534e] hover:text-[#4a5340] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#4a5340] hover:after:w-full after:transition-all after:duration-300'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT-HAND SIDE: Phone Contacts, Currency, Staff Portal & Reserve */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              
              {/* Direct Hotlines Display Pill on lg screens */}
              <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ffffff] border border-[#d8d4c7] shadow-xs text-xs">
                <Phone className="w-3.5 h-3.5 text-[#4a5340]" />
                <a 
                  href="tel:074645364" 
                  className="font-mono font-bold text-[#2d2d2a] hover:text-[#4a5340] hover:underline"
                  title="Call 074-645364"
                >
                  074-645364
                </a>
                <span className="text-[#8c8a82]">/</span>
                <a 
                  href="tel:076317474" 
                  className="font-mono font-bold text-[#2d2d2a] hover:text-[#4a5340] hover:underline"
                  title="Call 076317474"
                >
                  076317474
                </a>
              </div>

              {/* Currency Switcher */}
              <div 
                id="currency-toggle"
                className="flex items-center bg-[#ede9dc] border border-[#d8d4c7] rounded-full p-0.5 text-xs font-semibold"
              >
                <button
                  type="button"
                  onClick={() => onCurrencyChange('USD')}
                  className={`px-2 sm:px-2.5 py-1 rounded-full transition-all cursor-pointer text-[11px] sm:text-xs ${
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
                  className={`px-2 sm:px-2.5 py-1 rounded-full transition-all cursor-pointer text-[11px] sm:text-xs ${
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
                    className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                      isStaff
                        ? 'bg-[#4a5340] text-[#f8f7f2] border-[#3d4534] shadow-sm'
                        : 'bg-[#ede9dc] text-[#2d2d2a] border-[#d8d4c7]'
                    }`}
                  >
                    {isStaff ? <ShieldCheck className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5 text-[#4a5340]" />}
                    <span className="hidden sm:inline max-w-[85px] truncate">
                      {isStaff ? 'Admin' : profile?.displayName || 'Account'}
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
                          <span>Admin Control Center</span>
                        </button>
                      )}

                      <Link
                        to="/blog"
                        onClick={() => setUserDropdownOpen(false)}
                        className="w-full text-left px-4 py-2 hover:bg-[#f2efe7] text-[#2d2d2a] flex items-center gap-2"
                      >
                        <BookOpen className="w-4 h-4 text-[#686762]" />
                        <span>Resort Journal</span>
                      </Link>

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
                  className="hidden xs:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold text-[#4a5340] bg-[#ede9dc]/80 hover:bg-[#ede9dc] border border-[#d8d4c7] transition-all cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Sign In</span>
                </button>
              )}

              {/* Primary Reserve Button */}
              <Link
                id="header-book-now-btn"
                to="/book"
                className="relative group overflow-hidden rounded-full bg-[#4a5340] hover:bg-[#3d4534] px-3.5 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#f8f7f2] shadow-md shadow-[#4a5340]/20 transition-all cursor-pointer shrink-0 inline-flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve</span>
              </Link>

            </div>
          </div>
        </div>
      </header>

      {/* Left-Hand Side System Menu Component */}
      <LeftSystemMenu
        isOpen={isLeftMenuOpen}
        onClose={() => setIsLeftMenuOpen(false)}
        currency={currency}
        onCurrencyChange={onCurrencyChange}
        onOpenBooking={onOpenBooking}
        onOpenAdmin={onOpenAdmin}
        onOpenAuth={onOpenAuth}
      />
    </>
  );
};
