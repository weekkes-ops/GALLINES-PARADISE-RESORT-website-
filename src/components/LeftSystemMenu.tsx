import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Currency } from '../types';
import { RESORT_INFO, RESORT_LOGO } from '../data/resortData';
import { 
  X, 
  Phone, 
  MessageCircle, 
  Calendar, 
  Bed, 
  Activity, 
  Utensils, 
  Sparkles, 
  BookOpen, 
  Image as ImageIcon, 
  Building2, 
  CreditCard, 
  MapPin, 
  ShieldCheck, 
  User, 
  LogOut, 
  ChevronRight,
  Clock,
  CheckCircle2,
  Home
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface LeftSystemMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenBooking: (roomId?: string) => void;
  onOpenAdmin: () => void;
  onOpenAuth: () => void;
}

export const LeftSystemMenu: React.FC<LeftSystemMenuProps> = ({
  isOpen,
  onClose,
  currency,
  onCurrencyChange,
  onOpenBooking,
  onOpenAdmin,
  onOpenAuth,
}) => {
  const location = useLocation();
  const { user, profile, isStaff, signOut } = useAuth();

  if (!isOpen) return null;

  const menuSections = [
    {
      label: 'Home Overview',
      path: '/',
      icon: Home,
      badge: 'Main',
      description: 'Resort introduction, hero showcase & quick rates'
    },
    {
      label: 'Accommodations & Suites',
      path: '/rooms',
      icon: Bed,
      badge: '4 Categories',
      description: 'Presidential suites, stone bedrooms & chalets'
    },
    {
      label: 'Thatched Gazebos & Dining',
      path: '/dining',
      icon: Utensils,
      badge: 'Palm Groves',
      description: 'Conical private cabanas & grill lounge'
    },
    {
      label: 'Sports Arena & Fitness Gym',
      path: '/wellness',
      icon: Activity,
      badge: 'All-Weather',
      description: 'Green turf court & indoor cardio gym'
    },
    {
      label: 'Grand Events Hall',
      path: '/events',
      icon: Building2,
      badge: '500+ Cap',
      description: 'Classical portico hall for weddings & summits'
    },
    {
      label: 'Official Photo Library',
      path: '/gallery',
      icon: ImageIcon,
      badge: '14 Photos',
      description: 'Real resort grounds, chalets & facilities'
    },
    {
      label: 'Resort News & Journal',
      path: '/blog',
      icon: BookOpen,
      badge: 'Updates',
      description: 'Stories, dining updates & announcements'
    },
    {
      label: 'Payment & Reception',
      path: '/payments',
      icon: CreditCard,
      badge: 'Orange/SLCB',
      description: 'Cashless QR & 24/7 reception desk'
    },
    {
      label: 'Location & Concierge',
      path: '/contact',
      icon: MapPin,
      badge: '24/7 Hotline',
      description: '074-645364 / 076317474 & Airport shuttles'
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Left-Hand Side Menu Drawer */}
      <aside 
        id="left-system-menu-drawer"
        className="fixed inset-y-0 left-0 w-full max-w-sm sm:max-w-md bg-[#f8f7f2] shadow-2xl border-r border-[#d8d4c7] flex flex-col z-50 transform transition-transform duration-300 ease-in-out animate-in slide-in-from-left duration-300"
        aria-label="Left-Hand System Navigation Menu"
      >
        {/* Header with Brand Logo & Close button */}
        <div className="p-5 bg-[#ede9dc]/90 border-b border-[#d8d4c7] flex items-center justify-between shrink-0">
          <Link to="/" onClick={onClose} className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full p-0.5 border border-[#d8d4c7] shadow-sm bg-white overflow-hidden shrink-0 flex items-center justify-center">
              <img
                src={RESORT_LOGO}
                alt="Galiness Paradise Resort Official Logo"
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-lg font-bold tracking-wider text-[#2d2d2a] uppercase">
                  GALINESS
                </span>
                <span className="font-display text-lg font-light text-[#7c6344] tracking-widest uppercase">
                  PARADISE
                </span>
              </div>
              <p className="text-[10px] text-[#7c6344] tracking-widest uppercase font-semibold">
                Relax • Unwind • Paradise Awaits
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#ffffff] hover:bg-[#ede9dc] text-[#2d2d2a] hover:text-[#4a5340] border border-[#d8d4c7] flex items-center justify-center transition-colors cursor-pointer shadow-xs"
            aria-label="Close Left Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5 custom-scrollbar">
          
          {/* Direct Hotlines Card */}
          <div className="p-4 rounded-2xl bg-[#ffffff] border border-[#e3dfd6] shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#4a5340]/10 text-[#4a5340] flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2d2d2a] uppercase tracking-wider">
                    24/7 Resort Hotlines
                  </h4>
                  <p className="text-[10px] text-[#686762]">Direct Front Desk & Reservations</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open 24/7
              </span>
            </div>

            {/* Quick Call Action Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="tel:074645364"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#ede9dc] hover:bg-[#ded9cb] text-[#2d2d2a] hover:text-[#4a5340] text-xs font-bold font-mono border border-[#d8d4c7] transition-colors"
                title="Call 074-645364"
              >
                <Phone className="w-3 h-3 text-[#4a5340]" />
                <span>074-645364</span>
              </a>

              <a
                href="tel:076317474"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#ede9dc] hover:bg-[#ded9cb] text-[#2d2d2a] hover:text-[#4a5340] text-xs font-bold font-mono border border-[#d8d4c7] transition-colors"
                title="Call 076317474"
              >
                <Phone className="w-3 h-3 text-[#4a5340]" />
                <span>076317474</span>
              </a>
            </div>

            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/23274645364?text=Hello%20Galiness%20Paradise%20Resort,%20I%20would%20like%20to%20inquire%20about%20a%20stay."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#eef2eb] hover:bg-[#e1e9dc] text-[#3e5239] text-xs font-bold border border-[#d2ddd0] transition-colors w-full"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#3e5239]" />
              <span>Instant WhatsApp Concierge (+232 74 645364)</span>
            </a>
          </div>

          {/* User / Staff Quick Account Status */}
          {user ? (
            <div className="p-3.5 rounded-2xl bg-[#ffffff] border border-[#e3dfd6] flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#4a5340] text-white flex items-center justify-center text-xs font-bold">
                  {profile?.displayName?.charAt(0).toUpperCase() || 'U'}
                </div>
                <div>
                  <p className="text-xs font-bold text-[#2d2d2a] truncate max-w-[150px]">
                    {profile?.displayName || 'Resort User'}
                  </p>
                  <span className="text-[10px] font-bold text-[#4a5340] uppercase">
                    {profile?.role || 'Guest'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                {isStaff && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenAdmin();
                    }}
                    className="px-2.5 py-1.5 rounded-lg bg-[#4a5340] text-white text-[11px] font-bold hover:bg-[#3d4534] transition-colors"
                  >
                    Admin
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    signOut();
                  }}
                  className="p-1.5 rounded-lg text-rose-700 hover:bg-rose-50 transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenAuth();
              }}
              className="w-full flex items-center justify-between p-3 rounded-2xl bg-[#ffffff] hover:bg-[#ede9dc]/50 border border-[#e3dfd6] text-xs font-bold text-[#4a5340] transition-colors shadow-xs"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4a5340]" />
                <span>Staff & Management Portal</span>
              </span>
              <ChevronRight className="w-4 h-4 text-[#7c6344]" />
            </button>
          )}

          {/* Navigation Links List */}
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#7c6344] px-1 pb-1">
              System Multi-Page Menu
            </p>
            
            <div className="space-y-1 bg-[#ffffff] p-2 rounded-2xl border border-[#e3dfd6] shadow-xs">
              {menuSections.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={onClose}
                    className={`group flex items-center justify-between p-2.5 rounded-xl transition-all ${
                      isActive 
                        ? 'bg-[#ede9dc] text-[#4a5340] font-bold shadow-xs' 
                        : 'hover:bg-[#f4f2ec] text-[#2d2d2a]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                        isActive ? 'bg-[#4a5340] text-white' : 'bg-[#ede9dc] group-hover:bg-[#4a5340] group-hover:text-white text-[#4a5340]'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className={`text-xs ${isActive ? 'font-bold text-[#4a5340]' : 'font-bold group-hover:text-[#4a5340] transition-colors'}`}>
                          {item.label}
                        </p>
                        <p className="text-[10px] text-[#686762] line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="hidden sm:inline-block text-[9px] font-semibold text-[#7c6344] bg-[#ede9dc]/70 px-2 py-0.5 rounded-md">
                        {item.badge}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#8c8a82] group-hover:text-[#4a5340] group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Currency Switcher */}
          <div className="p-3.5 rounded-2xl bg-[#ffffff] border border-[#e3dfd6] flex items-center justify-between shadow-xs">
            <div>
              <p className="text-xs font-bold text-[#2d2d2a]">Display Currency</p>
              <p className="text-[10px] text-[#686762]">US Dollars ($) / Leones (NLe)</p>
            </div>

            <div className="flex items-center bg-[#ede9dc] border border-[#d8d4c7] rounded-full p-0.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => onCurrencyChange('USD')}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  currency === 'USD' 
                    ? 'bg-[#4a5340] text-white shadow-sm font-bold' 
                    : 'text-[#686762] hover:text-[#2d2d2a]'
                }`}
              >
                USD
              </button>
              <button
                type="button"
                onClick={() => onCurrencyChange('NLE')}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  currency === 'NLE' 
                    ? 'bg-[#4a5340] text-white shadow-sm font-bold' 
                    : 'text-[#686762] hover:text-[#2d2d2a]'
                }`}
              >
                NLe
              </button>
            </div>
          </div>

        </div>

        {/* Footer Fixed Action */}
        <div className="p-4 bg-[#ede9dc]/80 border-t border-[#d8d4c7] space-y-2 shrink-0">
          <Link
            to="/book"
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] font-bold uppercase tracking-wider text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve Suite / Chalet Now</span>
          </Link>
          <p className="text-center text-[10px] text-[#686762]">
            Direct Call: <span className="font-bold text-[#2d2d2a]">074-645364 / 076317474</span>
          </p>
        </div>

      </aside>
    </div>
  );
};
