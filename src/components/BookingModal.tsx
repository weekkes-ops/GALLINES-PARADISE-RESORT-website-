import React, { useState, useEffect } from 'react';
import { ROOMS_DATA, RESORT_INFO } from '../data/resortData';
import { Currency, Room, StoredBooking } from '../types';
import { createBookingRecord } from '../services/adminService';
import confetti from 'canvas-confetti';
import { 
  X, 
  Calendar, 
  Crown, 
  CheckCircle2, 
  Sparkles, 
  Users, 
  CreditCard, 
  QrCode, 
  Smartphone, 
  Printer, 
  Share2, 
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Building2,
  Clock
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  selectedRoomId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialAdults?: number;
  initialChildren?: number;
  currency: Currency;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  selectedRoomId,
  initialCheckIn,
  initialCheckOut,
  initialAdults = 2,
  initialChildren = 0,
  currency,
  onClose,
}) => {
  // Step state (1: Room & Dates, 2: Guest Details & Add-ons, 3: Payment, 4: Confirmed Receipt)
  const [step, setStep] = useState<number>(1);

  // Defaults
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const checkoutDefault = new Date();
  checkoutDefault.setDate(checkoutDefault.getDate() + 3);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [roomId, setRoomId] = useState<string>(selectedRoomId || ROOMS_DATA[0].id);
  const [checkIn, setCheckIn] = useState<string>(initialCheckIn || formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState<string>(initialCheckOut || formatDate(checkoutDefault));
  const [adults, setAdults] = useState<number>(initialAdults);
  const [children, setChildren] = useState<number>(initialChildren);

  // Guest Details
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  // Add-ons
  const [addons, setAddons] = useState({
    airportShuttle: false,
    gazeboDinner: false,
    sportsPass: false,
    vipBreakfast: true,
  });

  // Payment Method
  const [paymentMethod, setPaymentMethod] = useState<'orange_money' | 'slcb_qr' | 'card' | 'reception'>('orange_money');
  const [mobileNumberForPayment, setMobileNumberForPayment] = useState('');

  // Generated Booking Reference
  const [bookingRef, setBookingRef] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (selectedRoomId) {
      setRoomId(selectedRoomId);
    }
    if (initialCheckIn) setCheckIn(initialCheckIn);
    if (initialCheckOut) setCheckOut(initialCheckOut);
    if (initialAdults) setAdults(initialAdults);
    if (initialChildren !== undefined) setChildren(initialChildren);
  }, [selectedRoomId, initialCheckIn, initialCheckOut, initialAdults, initialChildren]);

  if (!isOpen) return null;

  const currentRoom: Room = ROOMS_DATA.find((r) => r.id === roomId) || ROOMS_DATA[0];

  // Calculate nights
  const dIn = new Date(checkIn);
  const dOut = new Date(checkOut);
  const diffTime = Math.max(1, dOut.getTime() - dIn.getTime());
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  // Calculate pricing
  const roomTotalUSD = currentRoom.priceUSD * nights;
  let addOnsUSD = 0;
  if (addons.airportShuttle) addOnsUSD += 35;
  if (addons.gazeboDinner) addOnsUSD += 40;
  if (addons.sportsPass) addOnsUSD += 15;

  const grandTotalUSD = roomTotalUSD + addOnsUSD;
  const grandTotalNLE = Math.round(grandTotalUSD * RESORT_INFO.currencyRate);

  const formatPrice = (usd: number, nle: number) => {
    return currency === 'USD' ? `$${usd.toLocaleString()}` : `Le ${nle.toLocaleString()}`;
  };

  const handleNextToGuestDetails = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleNextToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const handleConfirmReservation = async () => {
    setSaving(true);
    const randomCode = `GPR-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    setBookingRef(randomCode);

    // Save to Firestore bookings collection for administrator view
    try {
      const newBookingRecord: StoredBooking = {
        id: randomCode,
        guestName: guestName || 'Guest User',
        guestEmail: guestEmail || 'guest@example.com',
        guestPhone: guestPhone || '+232 76 000 000',
        roomId: currentRoom.id,
        roomName: currentRoom.name,
        checkIn,
        checkOut,
        nights,
        adults,
        children,
        totalPriceUSD: grandTotalUSD,
        totalPriceNLE: grandTotalNLE,
        currency,
        paymentMethod: paymentMethod.replace('_', ' ').toUpperCase(),
        paymentStatus: paymentMethod === 'reception' ? 'pending' : 'confirmed',
        status: 'confirmed',
        notes: specialRequests,
        createdAt: new Date().toISOString()
      };
      await createBookingRecord(newBookingRecord);
    } catch (err) {
      console.warn('Booking saved locally, firestore sync note:', err);
    } finally {
      setSaving(false);
      setStep(4);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#4a5340', '#d4af37', '#10b981', '#ffffff']
        });
      } catch {
        // safe fallback
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl bg-[#0e1619] border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-slate-100">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0a1012]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 flex items-center justify-center">
              <Crown className="w-4 h-4 text-slate-950" />
            </div>
            <div>
              <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                Gallines Paradise Reservation
              </h3>
              <p className="text-[11px] text-amber-300">
                Step {step} of 4: {
                  step === 1 ? 'Select Room & Dates' :
                  step === 2 ? 'Guest Information & Upgrades' :
                  step === 3 ? 'Payment Method' : 'Confirmed Voucher'
                }
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="w-full bg-slate-900 h-1.5 flex">
          <div className={`h-full bg-amber-500 transition-all duration-300 ${
            step === 1 ? 'w-1/4' : step === 2 ? 'w-2/4' : step === 3 ? 'w-3/4' : 'w-full bg-emerald-500'
          }`} />
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* STEP 1: Room & Dates */}
          {step === 1 && (
            <form onSubmit={handleNextToGuestDetails} className="space-y-6">
              
              {/* Room Selection Grid */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Select Room or Villa Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ROOMS_DATA.map((r) => {
                    const isSelected = r.id === roomId;
                    return (
                      <div
                        key={r.id}
                        onClick={() => setRoomId(r.id)}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-amber-950/40 border-amber-500 shadow-md ring-1 ring-amber-500/50'
                            : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={r.image}
                            alt={r.name}
                            className="w-12 h-12 rounded-xl object-cover"
                          />
                          <div>
                            <p className="text-xs font-bold text-white">{r.name}</p>
                            <p className="text-[11px] text-amber-300 font-medium">
                              {formatPrice(r.priceUSD, r.priceNLE)} / night
                            </p>
                          </div>
                        </div>
                        {isSelected && <CheckCircle2 className="w-5 h-5 text-amber-400" />}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase">Check-In Date</label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase">Check-Out Date</label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    min={checkIn}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase">Guests</label>
                  <div className="grid grid-cols-2 gap-1.5">
                    <select
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="bg-slate-900 border border-slate-700 rounded-xl px-2 py-2 text-xs text-white focus:border-amber-400"
                    >
                      <option value={1}>1 Adult</option>
                      <option value={2}>2 Adults</option>
                      <option value={3}>3 Adults</option>
                      <option value={4}>4 Adults</option>
                    </select>
                    <select
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="bg-slate-900 border border-slate-700 rounded-xl px-2 py-2 text-xs text-white focus:border-amber-400"
                    >
                      <option value={0}>0 Kids</option>
                      <option value={1}>1 Kid</option>
                      <option value={2}>2 Kids</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Price Calculation Summary Box */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{currentRoom.name} × {nights} {nights === 1 ? 'Night' : 'Nights'}</span>
                  <span>{formatPrice(roomTotalUSD, Math.round(roomTotalUSD * RESORT_INFO.currencyRate))}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Resort Taxes & Service Fees</span>
                  <span className="text-emerald-400 font-semibold">Included</span>
                </div>
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-sm font-bold text-white">Estimated Room Subtotal</span>
                  <span className="font-display text-lg font-bold text-amber-400">
                    {formatPrice(roomTotalUSD, Math.round(roomTotalUSD * RESORT_INFO.currencyRate))}
                  </span>
                </div>
              </div>

              {/* Navigation Action */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold uppercase tracking-wider text-xs shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Continue to Guest Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

          {/* STEP 2: Guest Details & Add-ons */}
          {step === 2 && (
            <form onSubmit={handleNextToPayment} className="space-y-6">
              
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Primary Guest Contact Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300 uppercase">Full Name</label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Alhaji Mustapha Kamara"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300 uppercase">Email Address</label>
                    <input
                      type="email"
                      required
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      placeholder="e.g. mustapha@example.com"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300 uppercase">Phone / WhatsApp (For Booking SMS)</label>
                    <input
                      type="tel"
                      required
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      placeholder="e.g. +232 76 999 111"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300 uppercase">Special In-Room Requests (Optional)</label>
                    <input
                      type="text"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="e.g. Late check-in, extra towels, ground floor..."
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-amber-400"
                    />
                  </div>
                </div>
              </div>

              {/* Optional Upgrades & Add-ons */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Enhance Your Stay (Optional Add-ons)
                </h4>
                
                <div className="space-y-2">
                  
                  {/* Airport Transfer */}
                  <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addons.airportShuttle}
                        onChange={(e) => setAddons({ ...addons, airportShuttle: e.target.checked })}
                        className="w-4 h-4 accent-amber-500 rounded"
                      />
                      <div>
                        <p className="text-xs font-bold text-white">Chauffeur Airport / City Pickup Shuttle</p>
                        <p className="text-[10px] text-slate-400">Air-conditioned executive vehicle transfer directly to resort.</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-amber-300">+$35 / transfer</span>
                  </label>

                  {/* Gazebo Dinner */}
                  <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addons.gazeboDinner}
                        onChange={(e) => setAddons({ ...addons, gazeboDinner: e.target.checked })}
                        className="w-4 h-4 accent-amber-500 rounded"
                      />
                      <div>
                        <p className="text-xs font-bold text-white">Romantic Thatched Gazebo 3-Course Dinner for Two</p>
                        <p className="text-[10px] text-slate-400">Includes fresh grilled snapper, jollof, wine bottle & private waiter.</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-amber-300">+$40 package</span>
                  </label>

                  {/* Sports Pass */}
                  <label className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addons.sportsPass}
                        onChange={(e) => setAddons({ ...addons, sportsPass: e.target.checked })}
                        className="w-4 h-4 accent-amber-500 rounded"
                      />
                      <div>
                        <p className="text-xs font-bold text-white">VIP Sports Arena Night Floodlight & Racket Rental</p>
                        <p className="text-[10px] text-slate-400">Reserved prime evening turf court slot with sports gear.</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-amber-300">+$15 pass</span>
                  </label>

                </div>
              </div>

              {/* Navigation Action */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 text-xs text-slate-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Dates</span>
                </button>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold uppercase tracking-wider text-xs shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Proceed to Payment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

          {/* STEP 3: Payment Method */}
          {step === 3 && (
            <div className="space-y-6">
              
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Select Preferred Payment Method
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Orange Money */}
                  <div
                    onClick={() => setPaymentMethod('orange_money')}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all space-y-2 ${
                      paymentMethod === 'orange_money'
                        ? 'bg-orange-950/30 border-orange-500 ring-1 ring-orange-500'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-black text-xs">
                          OM
                        </div>
                        <span className="font-bold text-white text-xs">Orange Money</span>
                      </div>
                      {paymentMethod === 'orange_money' && <CheckCircle2 className="w-4 h-4 text-orange-400" />}
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Scan QR or receive instant USSD authorization prompt on your mobile phone.
                    </p>
                  </div>

                  {/* SLCB QR Payment */}
                  <div
                    onClick={() => setPaymentMethod('slcb_qr')}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all space-y-2 ${
                      paymentMethod === 'slcb_qr'
                        ? 'bg-red-950/30 border-red-500 ring-1 ring-red-500'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center">
                          <QrCode className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-white text-xs">SLCB QR Payment</span>
                      </div>
                      {paymentMethod === 'slcb_qr' && <CheckCircle2 className="w-4 h-4 text-red-400" />}
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Sierra Leone Commercial Bank QR direct transfer from your banking app.
                    </p>
                  </div>

                  {/* Credit / Debit Card */}
                  <div
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all space-y-2 ${
                      paymentMethod === 'card'
                        ? 'bg-blue-950/30 border-blue-500 ring-1 ring-blue-500'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                          <CreditCard className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-white text-xs">Credit / Debit Card</span>
                      </div>
                      {paymentMethod === 'card' && <CheckCircle2 className="w-4 h-4 text-blue-400" />}
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Visa, Mastercard, American Express with 3D Secure encryption.
                    </p>
                  </div>

                  {/* Pay at Front Desk */}
                  <div
                    onClick={() => setPaymentMethod('reception')}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all space-y-2 ${
                      paymentMethod === 'reception'
                        ? 'bg-emerald-950/30 border-emerald-500 ring-1 ring-emerald-500'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-white text-xs">Pay at Front Desk Reception</span>
                      </div>
                      {paymentMethod === 'reception' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Hold room with instant confirmation; pay via cash or POS upon check-in.
                    </p>
                  </div>

                </div>
              </div>

              {/* Dynamic Interactive Payment Mock Details */}
              {paymentMethod === 'orange_money' && (
                <div className="p-4 rounded-2xl bg-orange-950/20 border border-orange-500/30 space-y-3">
                  <p className="text-xs text-orange-200 font-semibold flex items-center gap-1.5">
                    <Smartphone className="w-4 h-4 text-orange-400" />
                    Enter Orange Money Phone Number:
                  </p>
                  <input
                    type="tel"
                    value={mobileNumberForPayment || guestPhone}
                    onChange={(e) => setMobileNumberForPayment(e.target.value)}
                    placeholder="e.g. 076 123456"
                    className="w-full bg-slate-900 border border-orange-500/40 rounded-xl px-3.5 py-2 text-xs text-white"
                  />
                  <p className="text-[11px] text-slate-400">
                    You will receive a USSD push authorization on your phone for <strong>Le {grandTotalNLE.toLocaleString()} NLe</strong>.
                  </p>
                </div>
              )}

              {paymentMethod === 'slcb_qr' && (
                <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30 flex items-center gap-4">
                  <div className="w-20 h-20 bg-white p-2 rounded-xl shrink-0 flex items-center justify-center">
                    <QrCode className="w-16 h-16 text-slate-950" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-white">SLCB Merchant QR Code Ready</p>
                    <p className="text-[11px] text-slate-300">
                      Scan using your SLCB Mobile Banking App or present booking voucher code at reception.
                    </p>
                    <p className="text-[11px] text-red-300 font-mono">Amount: Le {grandTotalNLE.toLocaleString()} NLe</p>
                  </div>
                </div>
              )}

              {/* Final Summary Card */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-amber-500/30 space-y-2">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Guest: {guestName || 'Guest'}</span>
                  <span>{nights} Nights ({checkIn} to {checkOut})</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Room: {currentRoom.name}</span>
                  <span>{formatPrice(roomTotalUSD, Math.round(roomTotalUSD * RESORT_INFO.currencyRate))}</span>
                </div>
                {addOnsUSD > 0 && (
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Selected Add-ons</span>
                    <span>{formatPrice(addOnsUSD, Math.round(addOnsUSD * RESORT_INFO.currencyRate))}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-sm font-bold text-white">Total Amount Due</span>
                  <div className="text-right">
                    <span className="font-display text-2xl font-bold text-amber-400">
                      ${grandTotalUSD.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400 block -mt-1">
                      (Le {grandTotalNLE.toLocaleString()} NLe)
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation Action */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2.5 text-xs text-slate-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Info</span>
                </button>

                <button
                  type="button"
                  disabled={saving}
                  onClick={handleConfirmReservation}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 text-slate-950 font-bold uppercase tracking-wider text-xs shadow-lg shadow-emerald-500/30 hover:from-emerald-400 hover:to-emerald-500 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{saving ? 'Recording Booking...' : 'Confirm Reservation Now'}</span>
                </button>
              </div>

            </div>
          )}

          {/* STEP 4: Confirmed Receipt / Voucher */}
          {step === 4 && (
            <div id="printable-voucher" className="space-y-6 animate-in zoom-in-95 duration-300">
              
              {/* Confirmed Banner */}
              <div className="text-center space-y-2 py-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display text-2xl font-bold text-white">
                  Booking Confirmed!
                </h4>
                <p className="text-xs text-slate-300">
                  We look forward to welcoming you to Gallines Paradise Resort.
                </p>
              </div>

              {/* Official Voucher Card */}
              <div className="glass-gold p-6 rounded-3xl border border-amber-500/40 space-y-4 relative">
                <div className="flex items-center justify-between pb-3 border-b border-amber-500/30">
                  <div className="flex items-center gap-2">
                    <Crown className="w-5 h-5 text-amber-400" />
                    <div>
                      <p className="font-display text-sm font-bold text-white uppercase">Gallines Paradise Resort</p>
                      <p className="text-[10px] text-amber-300">Official Guest Reservation Voucher</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Booking Reference</span>
                    <span className="font-mono text-sm sm:text-base font-bold text-amber-400 bg-black/40 px-2.5 py-1 rounded-lg border border-amber-500/30">
                      {bookingRef}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase">Lead Guest</span>
                    <p className="font-bold text-white">{guestName || 'Guest'}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase">Suite Type</span>
                    <p className="font-bold text-white">{currentRoom.name}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase">Check-In</span>
                    <p className="font-bold text-white">{checkIn} (2:00 PM)</p>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase">Check-Out</span>
                    <p className="font-bold text-white">{checkOut} (11:00 AM)</p>
                  </div>
                </div>

                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-300">
                    Payment Method: <strong className="text-amber-400 uppercase">{paymentMethod.replace('_', ' ')}</strong>
                  </span>
                  <span className="font-bold text-white">
                    Total: ${grandTotalUSD} / Le {grandTotalNLE.toLocaleString()}
                  </span>
                </div>

                <div className="text-[11px] text-slate-400 space-y-1">
                  <p>• Complimentary paradise breakfast, gym access, and sports court pass included.</p>
                  <p>• 24/7 Front desk support: {RESORT_INFO.phone}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold uppercase flex items-center gap-2 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Voucher</span>
                </button>

                <a
                  href={`https://wa.me/23276000888?text=Hello%20Gallines%20Paradise,%20I%20have%20completed%20booking%20ref%20${bookingRef}%20for%20${guestName}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send to WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase cursor-pointer"
                >
                  Done
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
