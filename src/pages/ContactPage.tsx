import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { RESORT_INFO, RESORT_IMAGES, FAQS } from '../data/resortData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  ChevronDown, 
  CheckCircle2, 
  Car,
  Compass,
  ShieldCheck,
  Building
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiries',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Page Header */}
      <PageHeader
        title="Location, Contact & FAQs"
        subtitle="We are readily available 24/7 to assist with room bookings, private dining gazebo reservations, event planning, and airport transfers."
        badge="24/7 Front Desk Hotline"
        breadcrumbs={[{ label: 'Contact & Location' }]}
        bgImage={RESORT_IMAGES.resortGrounds}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Contact Info & Direct Dial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Phone Hotlines Card */}
          <div className="p-6 rounded-3xl bg-white border border-[#e3dfd6] shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#4a5340]/10 text-[#4a5340] flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#2d2d2a]">
                Direct Phone Hotlines
              </h3>
              <p className="text-xs text-[#686762]">
                Our front desk and reservation team are available around the clock.
              </p>
              <div className="space-y-2 pt-2">
                <a
                  href="tel:074645364"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#ede9dc]/60 hover:bg-[#ede9dc] text-[#2d2d2a] hover:text-[#4a5340] font-mono font-bold text-sm transition-colors border border-[#d8d4c7]"
                >
                  <span>Line 1: 074-645364</span>
                  <Phone className="w-4 h-4 text-[#4a5340]" />
                </a>
                <a
                  href="tel:076317474"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#ede9dc]/60 hover:bg-[#ede9dc] text-[#2d2d2a] hover:text-[#4a5340] font-mono font-bold text-sm transition-colors border border-[#d8d4c7]"
                >
                  <span>Line 2: 076317474</span>
                  <Phone className="w-4 h-4 text-[#4a5340]" />
                </a>
              </div>
            </div>
            <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 text-center">
              ● Lines Open 24/7
            </span>
          </div>

          {/* Instant WhatsApp Card */}
          <div className="p-6 rounded-3xl bg-white border border-[#e3dfd6] shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#2d2d2a]">
                WhatsApp Concierge
              </h3>
              <p className="text-xs text-[#686762]">
                Chat directly with our manager for quick photo previews, rates, and customized requests.
              </p>
              <div className="pt-2">
                <p className="text-xs font-mono font-bold text-[#2d2d2a] mb-2">
                  +232 74 645364
                </p>
                <a
                  href="https://wa.me/23274645364?text=Hello%20Galiness%20Paradise%20Resort,%20I%20would%20like%20to%20inquire%20about%20a%20stay."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>
            <span className="text-[11px] text-[#7c6344] text-center font-medium">
              Average response: &lt; 5 minutes
            </span>
          </div>

          {/* Physical Address Card */}
          <div className="p-6 rounded-3xl bg-white border border-[#e3dfd6] shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#7c6344]/10 text-[#7c6344] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#2d2d2a]">
                Resort Location
              </h3>
              <p className="text-xs text-[#686762]">
                Tranquil coastal resort setting in Southern Province, Sierra Leone.
              </p>
              <div className="p-3 rounded-xl bg-[#ede9dc]/60 border border-[#d8d4c7] space-y-1 text-xs">
                <p className="font-bold text-[#2d2d2a]">Galiness Paradise Resort & Hotel</p>
                <p className="text-[#54534e]">Bonthe District / Southern Province</p>
                <p className="text-[#7c6344] font-semibold">Sierra Leone, West Africa</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-[#54534e]">
              <span className="flex items-center gap-1 font-semibold text-[#4a5340]">
                <Car className="w-4 h-4" />
                <span>Airport Shuttle Available</span>
              </span>
            </div>
          </div>

        </div>

        {/* Contact Form & Road Directions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Message Form */}
          <div className="lg:col-span-7 rounded-3xl border border-[#d8d4c7] bg-white p-6 sm:p-8 shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7c6344]">
                Online Inquiries
              </span>
              <h3 className="font-display text-2xl font-bold text-[#2d2d2a]">
                Send a Message to Management
              </h3>
              <p className="text-xs text-[#686762]">
                Fill in the form below and our hospitality desk will respond immediately.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-emerald-900">Message Delivered!</h4>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your message regarding <strong>{formData.subject}</strong> has been transmitted to our management team. We will reply to <strong>{formData.email}</strong> or call <strong>{formData.phone}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-emerald-700 text-white font-bold text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2d2d2a] mb-1 uppercase">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Mariama Koroma"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#fbfaf8] text-xs text-[#2d2d2a] focus:outline-none focus:ring-2 focus:ring-[#4a5340]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2d2d2a] mb-1 uppercase">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. mariama@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#fbfaf8] text-xs text-[#2d2d2a] focus:outline-none focus:ring-2 focus:ring-[#4a5340]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2d2d2a] mb-1 uppercase">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 074-645364 / 076317474"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#fbfaf8] text-xs text-[#2d2d2a] focus:outline-none focus:ring-2 focus:ring-[#4a5340]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2d2d2a] mb-1 uppercase">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#fbfaf8] text-xs text-[#2d2d2a] focus:outline-none focus:ring-2 focus:ring-[#4a5340]"
                    >
                      <option>Room & Chalet Reservation</option>
                      <option>Thatched Gazebo Private Dining</option>
                      <option>Grand Events Hall / Wedding Booking</option>
                      <option>Sports Arena Tournament</option>
                      <option>Airport Shuttle & Road Directions</option>
                      <option>Other Special Requests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2d2d2a] mb-1 uppercase">Message Details *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your expected dates, number of guests, or special requirements..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#fbfaf8] text-xs text-[#2d2d2a] focus:outline-none focus:ring-2 focus:ring-[#4a5340]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#4a5340]/20 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Travel & Directions Guide */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-[#ede9dc]/60 border border-[#d8d4c7] space-y-4">
              <div className="flex items-center gap-2 text-[#4a5340]">
                <Compass className="w-5 h-5" />
                <h4 className="font-display text-lg font-bold text-[#2d2d2a]">
                  Travel & Access Guide
                </h4>
              </div>

              <p className="text-xs text-[#54534e] leading-relaxed">
                Galiness Paradise Resort is accessible via well-paved highways connecting Freetown, Bo, and southern regional hubs.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="p-3 rounded-2xl bg-white border border-[#e3dfd6] space-y-1">
                  <strong className="text-[#2d2d2a] block">By Private Vehicle / 4x4</strong>
                  <p className="text-[#686762]">
                    Secure on-site gated parking with 24/7 security guard patrol and CCTV monitoring.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white border border-[#e3dfd6] space-y-1">
                  <strong className="text-[#2d2d2a] block">Resort Shuttle Service</strong>
                  <p className="text-[#686762]">
                    We coordinate private air-conditioned VIP shuttle transfers from Freetown / Lungi Airport or Bo upon request.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#4a5340] text-[#f8f7f2] space-y-3">
              <h4 className="font-display text-lg font-bold">Need Immediate Help?</h4>
              <p className="text-xs text-[#d8d4c7]">
                Call our direct front desk desk lines now for instantaneous reservation confirmation:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href="tel:074645364"
                  className="px-3.5 py-1.5 rounded-xl bg-white text-[#4a5340] font-mono font-bold text-xs"
                >
                  074-645364
                </a>
                <a
                  href="tel:076317474"
                  className="px-3.5 py-1.5 rounded-xl bg-white text-[#4a5340] font-mono font-bold text-xs"
                >
                  076317474
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Comprehensive FAQ Section */}
        <div className="space-y-6 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7c6344]">
              Help & Information
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2d2d2a]">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-[#686762]">
              Quick answers about check-in times, power reliability, amenities, and payment options.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#e3dfd6] bg-white overflow-hidden shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 cursor-pointer hover:bg-[#fcfbf9]"
                  >
                    <span className="font-bold text-sm text-[#2d2d2a]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#7c6344] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-[#54534e] leading-relaxed border-t border-[#f2efe7] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
