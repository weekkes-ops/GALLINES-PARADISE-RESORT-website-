import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { RESORT_INFO, RESORT_IMAGES } from '../data/resortData';
import { 
  CreditCard, 
  QrCode, 
  Smartphone, 
  ShieldCheck, 
  Receipt, 
  Clock, 
  Lock, 
  CheckCircle2,
  DollarSign,
  Phone
} from 'lucide-react';

export const PaymentsPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-20">
      {/* Page Header */}
      <PageHeader
        title="Payments & Security Policies"
        subtitle="Transparent, flexible, and fully cashless payment options: Orange Money, SLCB QR Code, major credit cards, and cash desk facilities."
        badge="Instant & Secure Settlement"
        breadcrumbs={[{ label: 'Payment Policies' }]}
        bgImage={RESORT_IMAGES.presidentialLiving}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Payment Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Orange Money */}
          <div className="p-6 rounded-3xl bg-white border border-[#e3dfd6] shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#2d2d2a]">
                Orange Money Sierra Leone
              </h3>
              <p className="text-xs text-[#686762]">
                Fast, instant mobile money payments accepted across all resort departments (reception, gazebo dining, and sports).
              </p>
              <div className="p-3 rounded-xl bg-orange-50/60 border border-orange-200 text-xs space-y-1 text-orange-950">
                <strong className="block">Merchant Code / Mobile Push</strong>
                <p className="text-orange-800">Scan at front desk or transfer to our official resort merchant number.</p>
              </div>
            </div>
            <span className="text-[11px] font-bold text-orange-700 bg-orange-50 px-3 py-1 rounded-full text-center">
              Zero Transaction Fees for Guests
            </span>
          </div>

          {/* SLCB QR */}
          <div className="p-6 rounded-3xl bg-white border border-[#e3dfd6] shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#2d2d2a]">
                SLCB QR Cashless Code
              </h3>
              <p className="text-xs text-[#686762]">
                Sierra Leone Commercial Bank (SLCB) digital QR code scanning for instantaneous bank-to-bank settlement.
              </p>
              <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200 text-xs space-y-1 text-blue-950">
                <strong className="block">Instant QR Scanning</strong>
                <p className="text-blue-800">Scan directly from the SLCB mobile banking app or national QR network.</p>
              </div>
            </div>
            <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full text-center">
              Bank-Grade Encryption
            </span>
          </div>

          {/* Cards & Front Desk */}
          <div className="p-6 rounded-3xl bg-white border border-[#e3dfd6] shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#4a5340]/10 text-[#4a5340] flex items-center justify-center">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#2d2d2a]">
                Cards & Cash at Reception
              </h3>
              <p className="text-xs text-[#686762]">
                We accept Visa, Mastercard, and physical currency in US Dollars ($) and Sierra Leonean New Leones (NLe).
              </p>
              <div className="p-3 rounded-xl bg-[#ede9dc]/60 border border-[#d8d4c7] text-xs space-y-1">
                <strong className="block text-[#2d2d2a]">Official Stamped Receipts</strong>
                <p className="text-[#54534e]">Printed fiscal receipt issued immediately upon check-in or checkout.</p>
              </div>
            </div>
            <span className="text-[11px] font-bold text-[#4a5340] bg-[#ede9dc] px-3 py-1 rounded-full text-center">
              24/7 Front Desk Cashier
            </span>
          </div>

        </div>

        {/* Policies Breakdown */}
        <div className="rounded-3xl border border-[#d8d4c7] bg-white p-6 sm:p-10 shadow-sm space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7c6344]">
              Guest Stay Standards
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2d2d2a]">
              Check-In, Deposit & Cancellation Terms
            </h3>
            <p className="text-xs sm:text-sm text-[#686762]">
              Review our fair and guest-friendly booking policies designed for seamless hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#fbfaf8] border border-[#e3dfd6] space-y-2">
              <div className="flex items-center gap-2 text-[#4a5340] font-bold text-sm">
                <Clock className="w-4 h-4" />
                <span>Check-In & Check-Out Times</span>
              </div>
              <p className="text-xs text-[#54534e] leading-relaxed">
                • <strong>Standard Check-In:</strong> 2:00 PM onwards<br />
                • <strong>Standard Check-Out:</strong> 11:00 AM<br />
                • Early check-in or late check-out is complimentary subject to room availability.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#fbfaf8] border border-[#e3dfd6] space-y-2">
              <div className="flex items-center gap-2 text-[#4a5340] font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Flexible Cancellation Policy</span>
              </div>
              <p className="text-xs text-[#54534e] leading-relaxed">
                • Free cancellation up to <strong>48 hours</strong> before scheduled arrival date.<br />
                • Non-refundable deposits may apply for full-hall wedding or conference packages.<br />
                • Dates can be rescheduled anytime free of charge with 24-hour notice.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#fbfaf8] border border-[#e3dfd6] space-y-2">
              <div className="flex items-center gap-2 text-[#4a5340] font-bold text-sm">
                <Lock className="w-4 h-4" />
                <span>Identification & Registration</span>
              </div>
              <p className="text-xs text-[#54534e] leading-relaxed">
                All primary adult guests must present a valid government-issued ID (National ID card, Driver's License, or Passport) at reception upon check-in.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#fbfaf8] border border-[#e3dfd6] space-y-2">
              <div className="flex items-center gap-2 text-[#4a5340] font-bold text-sm">
                <Receipt className="w-4 h-4" />
                <span>Corporate Invoicing & Wire Transfers</span>
              </div>
              <p className="text-xs text-[#54534e] leading-relaxed">
                NGOs, diplomatic missions, and corporate retreats may request official pro-forma invoices and direct bank wire settlement into our corporate account.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
