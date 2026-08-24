import React from 'react';
import { RESORT_IMAGES } from '../data/resortData';
import { 
  ShieldCheck, 
  QrCode, 
  Smartphone, 
  CreditCard, 
  Clock, 
  CheckCircle2, 
  Zap,
  Lock,
  Building2
} from 'lucide-react';

export const PaymentSecuritySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative bg-[#f8f7f2] border-y border-[#e3dfd6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Story & Payment Highlights */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ede9dc] border border-[#d8d4c7] text-[#4a5340] text-xs font-semibold uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4a5340]" />
                <span>Seamless Guest Transactions</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2d2d2a]">
                Modern Mobile Payments & <span className="gold-gradient-text">24/7 Reception</span>
              </h2>
              <p className="text-[#686762] text-sm sm:text-base leading-relaxed">
                Check in seamlessly using your favorite local mobile money wallet or international cards. Our 24/7 reception desk is equipped with instant QR payment systems for fast, secure, hassle-free transactions.
              </p>
            </div>

            {/* Payment Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Orange Money */}
              <div className="p-4 rounded-2xl bg-[#ffffff] border border-[#e3dfd6] space-y-2 hover:border-[#f97316] transition-colors shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#ea580c]/15 text-[#ea580c] flex items-center justify-center font-black text-xs">
                      OM
                    </div>
                    <span className="font-bold text-[#2d2d2a] text-sm">Orange Money</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#ea580c]/10 text-[#ea580c] font-semibold border border-[#ea580c]/30">
                    Instant Pay
                  </span>
                </div>
                <p className="text-xs text-[#686762]">
                  Cash In, Cash Out, Room Bill payments & QR code scan directly at the front desk.
                </p>
              </div>

              {/* SLCB QR Payment */}
              <div className="p-4 rounded-2xl bg-[#ffffff] border border-[#e3dfd6] space-y-2 hover:border-red-400 transition-colors shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-700 flex items-center justify-center">
                      <QrCode className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-[#2d2d2a] text-sm">SLCB QR Payment</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-700 font-semibold border border-red-500/20">
                    Direct Bank
                  </span>
                </div>
                <p className="text-xs text-[#686762]">
                  Sierra Leone Commercial Bank QR payment integration for rapid cashless settlement.
                </p>
              </div>

              {/* Visa / Mastercard */}
              <div className="p-4 rounded-2xl bg-[#ffffff] border border-[#e3dfd6] space-y-2 hover:border-blue-500 transition-colors shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-700 flex items-center justify-center">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-[#2d2d2a] text-sm">Cards & Wire</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-700 font-semibold border border-blue-500/20">
                    Visa / MC
                  </span>
                </div>
                <p className="text-xs text-[#686762]">
                  International credit/debit cards and bank transfers accepted with encrypted security.
                </p>
              </div>

              {/* Cash & Concierge */}
              <div className="p-4 rounded-2xl bg-[#ffffff] border border-[#e3dfd6] space-y-2 hover:border-[#4a5340] transition-colors shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#4a5340]/10 text-[#4a5340] flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-[#2d2d2a] text-sm">Cash on Arrival</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#4a5340]/10 text-[#4a5340] font-semibold border border-[#4a5340]/20">
                    24/7 Desk
                  </span>
                </div>
                <p className="text-xs text-[#686762]">
                  Reserve online and settle via USD or Leones directly upon receiving your room keys.
                </p>
              </div>

            </div>

            {/* Security checklist */}
            <div className="flex items-center gap-4 text-xs text-[#686762] pt-2">
              <span className="flex items-center gap-1.5 text-[#2d2d2a] font-medium">
                <Lock className="w-4 h-4 text-[#4a5340]" />
                SSL Encrypted Bookings
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-[#2d2d2a] font-medium">
                <Zap className="w-4 h-4 text-[#7c6344]" />
                Instant SMS/WhatsApp Confirmation
              </span>
            </div>

          </div>

          {/* Right Column: Reception & Front Desk Visual */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#d8d4c7] shadow-xl group bg-[#ffffff]">
              <img
                src={RESORT_IMAGES.reception}
                alt="Gallines Paradise 24/7 Front Desk Reception"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-[#f8f7f2]/95 backdrop-blur-md p-4 rounded-2xl border border-[#d8d4c7] flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ede9dc] text-[#4a5340] flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2d2d2a] uppercase tracking-wider">
                      24/7 VIP Concierge & Security
                    </h4>
                    <p className="text-[11px] text-[#686762]">
                      Paradise Avenue Enclave, Bo / Sierra Leone
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#4a5340]">
                  Always Open
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
