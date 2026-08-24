import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RESORT_INFO, RESORT_LOGO } from '../data/resortData';
import { 
  Crown, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Heart,
  QrCode
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer id="main-footer" className="bg-[#ede9dc] text-[#54534e] text-xs border-t border-[#d8d4c7] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-0.5 border border-[#d8d4c7] shadow-sm bg-white overflow-hidden shrink-0 flex items-center justify-center">
                <img
                  src={RESORT_LOGO}
                  alt="Galiness Paradise Resort Logo"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div>
                <span className="font-display text-lg font-bold text-[#2d2d2a] tracking-wider uppercase">
                  GALINESS PARADISE
                </span>
                <p className="text-[10px] text-[#7c6344] uppercase tracking-widest font-semibold">
                  Resort & Hotel • Relax & Unwind
                </p>
              </div>
            </Link>

            <p className="text-[#686762] text-xs leading-relaxed">
              Sierra Leone’s premier tropical sanctuary. Executive presidential living suites, private thatched garden gazebos, all-weather turf sports court, and modern fitness center with 24/7 solar/generator power.
            </p>

            {/* Payment & Security Seals */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-[10px] text-[#54534e]">
              <span className="px-2.5 py-1 rounded-lg bg-[#ffffff] border border-[#d8d4c7] text-[#2d2d2a] font-medium shadow-xs">
                Orange Money Accepted
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[#ffffff] border border-[#d8d4c7] text-[#2d2d2a] font-medium shadow-xs">
                SLCB QR Payment
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[#ffffff] border border-[#d8d4c7] text-[#2d2d2a] font-medium shadow-xs">
                Visa / MasterCard
              </span>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-bold text-[#2d2d2a] uppercase tracking-widest">
              Accommodations
            </h4>
            <ul className="space-y-2">
              <li><Link to="/rooms" className="hover:text-[#4a5340] transition-colors">Presidential Suites</Link></li>
              <li><Link to="/rooms" className="hover:text-[#4a5340] transition-colors">Deluxe King Rooms</Link></li>
              <li><Link to="/rooms" className="hover:text-[#4a5340] transition-colors">Garden Chalet Villas</Link></li>
              <li><Link to="/rooms" className="hover:text-[#4a5340] transition-colors">Family Twin Suites</Link></li>
              <li><Link to="/book" className="hover:text-[#4a5340] font-semibold text-[#4a5340] transition-colors">Reserve Online →</Link></li>
            </ul>
          </div>

          {/* Amenities Nav Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-bold text-[#2d2d2a] uppercase tracking-widest">
              Resort Pages
            </h4>
            <ul className="space-y-2">
              <li><Link to="/wellness" className="hover:text-[#4a5340] transition-colors">Turf Sports & Pool</Link></li>
              <li><Link to="/wellness" className="hover:text-[#4a5340] transition-colors">Indoor Fitness Gym</Link></li>
              <li><Link to="/dining" className="hover:text-[#4a5340] transition-colors">Thatched Gazebos</Link></li>
              <li><Link to="/dining" className="hover:text-[#4a5340] transition-colors">Paradise Grill Menu</Link></li>
              <li><Link to="/events" className="hover:text-[#4a5340] transition-colors">Grand Events Hall</Link></li>
              <li><Link to="/gallery" className="hover:text-[#4a5340] transition-colors">Photo Library</Link></li>
              <li><Link to="/blog" className="hover:text-[#4a5340] transition-colors">Resort Journal</Link></li>
            </ul>
          </div>

          {/* Newsletter / Contact Col */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display text-xs font-bold text-[#2d2d2a] uppercase tracking-widest">
              Stay in Touch & Exclusive Offers
            </h4>
            <p className="text-[#686762] text-xs leading-relaxed">
              Subscribe to receive seasonal retreat offers, weekend barbecue updates, and special holiday promotions.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#ffffff] border border-[#d8d4c7] rounded-xl text-[#4a5340] text-xs flex items-center gap-2 font-medium shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#4a5340]" />
                <span>Thank you! You are subscribed to Paradise updates.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 bg-[#ffffff] border border-[#d8d4c7] rounded-xl px-3 py-2 text-xs text-[#2d2d2a] focus:border-[#4a5340] focus:outline-none shadow-xs"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] font-bold text-xs rounded-xl transition-colors shrink-0 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-2 space-y-1.5 text-[#686762] text-[11px]">
              <p className="flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-[#4a5340]" />
                <span>Hotlines: <a href="tel:074645364" className="font-bold text-[#2d2d2a] hover:underline">074-645364</a> / <a href="tel:076317474" className="font-bold text-[#2d2d2a] hover:underline">076317474</a></span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3 h-3 text-[#4a5340]" />
                <span>{RESORT_INFO.email}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#4a5340]" />
                <span>{RESORT_INFO.address}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#d8d4c7] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#686762] text-[11px]">
          <p>© 2026 Gallines Paradise Resort & Hotel. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/payments" className="hover:text-[#4a5340] transition-colors">Payment Policies</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#4a5340] transition-colors">Location & FAQs</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#4a5340] transition-colors">Guest Concierge</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
