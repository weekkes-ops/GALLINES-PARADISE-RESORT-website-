import React, { useState } from 'react';
import { RESORT_INFO } from '../data/resortData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Crown, 
  HelpCircle, 
  ChevronDown,
  Car,
  Plane
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Room Inquiry',
    message: ''
  });

  const faqs = [
    {
      q: "What are the check-in and check-out times at Gallines Paradise?",
      a: "Standard check-in begins at 2:00 PM and check-out is by 11:00 AM. Early check-in or late check-out can be arranged upon request depending on room availability."
    },
    {
      q: "Which payment methods are accepted at reception?",
      a: "We accept Orange Money (QR scan & direct transfer), Sierra Leone Commercial Bank (SLCB) QR Payment, Visa/Mastercard credit & debit cards, and cash in USD or New Leones (NLe)."
    },
    {
      q: "Are the gym and sports court accessible for hotel guests?",
      a: "Yes! In-house guests enjoy complimentary access to our indoor cardio and fitness gym as well as the all-weather turf sports arena. Tennis rackets and footballs are available at the front desk."
    },
    {
      q: "Is electricity and air conditioning reliable 24/7?",
      a: "Yes, Gallines Paradise is equipped with a heavy-duty backup power infrastructure combining solar generation and continuous industrial diesel generators to ensure uninterrupted 24/7 cool air conditioning and power."
    },
    {
      q: "Do you offer airport or inter-city pickup transfers?",
      a: "Yes, our VIP chauffeur concierge offers comfortable air-conditioned shuttle services from Freetown International Airport (Lungi / Freetown) or surrounding provinces directly to the resort gates."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-[#f8f7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ede9dc] border border-[#d8d4c7] text-[#4a5340] text-xs font-semibold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-[#4a5340]" />
            <span>Find & Contact Us</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d2d2a] tracking-tight">
            Connect with Our <span className="gold-gradient-text">24/7 Concierge</span>
          </h2>
          <p className="text-[#686762] text-sm sm:text-base leading-relaxed">
            We are here around the clock to assist you with room reservations, airport shuttle transfers, event hall bookings, and private garden dining.
          </p>
        </div>

        {/* 2-Column Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#ffffff] p-6 rounded-3xl border border-[#e3dfd6] shadow-sm space-y-6">
              <h3 className="font-display text-xl font-bold text-[#2d2d2a]">
                Resort Headquarters & Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#54534e]">
                
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#ede9dc] text-[#4a5340] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#2d2d2a] uppercase text-[11px]">Resort Location</p>
                    <p className="text-[#54534e]">{RESORT_INFO.address}</p>
                    <p className="text-[#686762] text-xs">Gated security compound with guarded parking</p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#ede9dc] text-[#4a5340] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#2d2d2a] uppercase text-[11px]">Direct Reservations Hotline</p>
                    <div className="flex flex-wrap items-center gap-2 mt-0.5">
                      <a 
                        href="tel:074645364" 
                        className="text-[#4a5340] font-mono font-bold hover:underline bg-[#ede9dc]/60 px-2 py-0.5 rounded-md"
                      >
                        074-645364
                      </a>
                      <span className="text-[#8c8a82]">/</span>
                      <a 
                        href="tel:076317474" 
                        className="text-[#4a5340] font-mono font-bold hover:underline bg-[#ede9dc]/60 px-2 py-0.5 rounded-md"
                      >
                        076317474
                      </a>
                    </div>
                    <p className="text-[#686762] text-xs mt-1">Available 24 hours a day, 7 days a week</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#4a5340]/10 text-[#4a5340] flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#2d2d2a] uppercase text-[11px]">Instant WhatsApp Concierge</p>
                    <a
                      href="https://wa.me/23274645364?text=Hello%20Galiness%20Paradise%20Resort,%20I%20would%20like%20to%20inquire%20about%20a%20booking."
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#4a5340] font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>Chat with Concierge (+232 74 645364)</span>
                      <Send className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#ede9dc] text-[#4a5340] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#2d2d2a] uppercase text-[11px]">Email Inquiries</p>
                    <p className="text-[#54534e]">{RESORT_INFO.email}</p>
                  </div>
                </div>

                {/* Check In Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#ede9dc] text-[#4a5340] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#2d2d2a] uppercase text-[11px]">Reception Desk Schedule</p>
                    <p className="text-[#54534e]">Open 24 Hours / 365 Days</p>
                    <p className="text-[#686762] text-xs">Check-in: {RESORT_INFO.checkInTime} | Check-out: {RESORT_INFO.checkOutTime}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Airport Transfer Info Banner */}
            <div className="p-4 rounded-2xl bg-[#ede9dc] border border-[#d8d4c7] flex items-center gap-3 text-xs text-[#2d2d2a] shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-[#ffffff] text-[#4a5340] flex items-center justify-center shrink-0 shadow-xs">
                <Plane className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-[#2d2d2a]">Chauffeur Airport Pickups</p>
                <p className="text-[#686762] text-[11px]">Private executive vehicle transfers available on booking.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#ffffff] p-6 sm:p-8 rounded-3xl border border-[#e3dfd6] shadow-lg space-y-6">
              
              <div className="space-y-1">
                <h3 className="font-display text-xl font-bold text-[#2d2d2a]">
                  Send an Inquiry to Front Desk
                </h3>
                <p className="text-xs text-[#686762]">
                  Fill in your details below and our team will get in touch immediately.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-3 bg-[#ede9dc] rounded-2xl border border-[#d8d4c7] p-6">
                  <CheckCircle2 className="w-12 h-12 text-[#4a5340] mx-auto" />
                  <h4 className="font-display text-xl font-bold text-[#2d2d2a]">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-[#686762] max-w-sm mx-auto">
                    Thank you for reaching out to Gallines Paradise Resort. Our guest services desk has received your note and will reply promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 rounded-xl bg-[#4a5340] text-[#f8f7f2] font-bold text-xs uppercase cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#54534e] uppercase">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Foday Koroma"
                        className="w-full bg-[#f8f7f2] border border-[#d8d4c7] rounded-xl px-3.5 py-2.5 text-xs text-[#2d2d2a] focus:border-[#4a5340]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#54534e] uppercase">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. foday@example.com"
                        className="w-full bg-[#f8f7f2] border border-[#d8d4c7] rounded-xl px-3.5 py-2.5 text-xs text-[#2d2d2a] focus:border-[#4a5340]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#54534e] uppercase">Phone / WhatsApp Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +232 76 000 000"
                        className="w-full bg-[#f8f7f2] border border-[#d8d4c7] rounded-xl px-3.5 py-2.5 text-xs text-[#2d2d2a] focus:border-[#4a5340]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#54534e] uppercase">Inquiry Type</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#f8f7f2] border border-[#d8d4c7] rounded-xl px-3.5 py-2.5 text-xs text-[#2d2d2a] focus:border-[#4a5340]"
                      >
                        <option value="Room Reservation">Room & Suite Reservation</option>
                        <option value="Thatched Gazebo Dinner">Thatched Gazebo Dining</option>
                        <option value="Wedding / Event Hall">Wedding or Event Hall</option>
                        <option value="Sports Arena Booking">Sports Court & Gym Access</option>
                        <option value="Airport Transfer">Airport Shuttle Transfer</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#54534e] uppercase">Your Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify dates, number of guests, or special requirements..."
                      className="w-full bg-[#f8f7f2] border border-[#d8d4c7] rounded-xl px-3.5 py-2.5 text-xs text-[#2d2d2a] focus:border-[#4a5340]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] font-bold uppercase tracking-wider text-xs shadow-md shadow-[#4a5340]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Concierge</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ede9dc] border border-[#d8d4c7] text-[#4a5340] text-xs font-semibold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-[#2d2d2a]">
              Everything You Need to Know
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#ffffff] rounded-2xl border border-[#e3dfd6] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="font-bold text-xs sm:text-sm text-[#2d2d2a]">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#4a5340] transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#54534e] border-t border-[#e3dfd6] pt-3 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
