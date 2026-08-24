import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { Currency, Room } from '../types';
import { ROOMS_DATA, RESORT_IMAGES, RESORT_INFO } from '../data/resortData';
import { 
  Calendar, 
  Users, 
  Bed, 
  CreditCard, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Phone, 
  QrCode, 
  Smartphone, 
  Download, 
  Printer,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingPageProps {
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
}

export const BookingPage: React.FC<BookingPageProps> = ({
  currency,
  onCurrencyChange,
}) => {
  const [searchParams] = useSearchParams();
  const initialRoomId = searchParams.get('room') || ROOMS_DATA[0].id;

  const [selectedRoomId, setSelectedRoomId] = useState<string>(initialRoomId);
  const [checkIn, setCheckIn] = useState<string>(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [checkOut, setCheckOut] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().split('T')[0];
  });
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'pay_at_hotel' | 'orange_money' | 'slcb_qr' | 'card'>('pay_at_hotel');
  
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  const selectedRoom = ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];

  // Calculate nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const nights = calculateNights();
  const totalPriceUSD = selectedRoom.priceUSD * nights;
  const totalPriceNLE = selectedRoom.priceNLE * nights;

  const displayTotal = currency === 'USD' ? `$${totalPriceUSD}` : `NLe ${totalPriceNLE.toLocaleString()}`;
  const displayRate = currency === 'USD' ? `$${selectedRoom.priceUSD}` : `NLe ${selectedRoom.priceNLE.toLocaleString()}`;

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `GAL-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setIsConfirmed(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Page Header */}
      <PageHeader
        title="Direct Suite & Chalet Reservation"
        subtitle="Book directly for best guaranteed rates, complimentary breakfast, unlimited sports arena access, and instant confirmation."
        badge="Best Rate Guarantee"
        breadcrumbs={[{ label: 'Direct Reservation' }]}
        bgImage={RESORT_IMAGES.presidentialBedroom}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {isConfirmed ? (
          /* Confirmation Pass Screen */
          <div className="rounded-3xl border border-emerald-200 bg-white p-6 sm:p-10 shadow-xl space-y-8 animate-in fade-in zoom-in-95 duration-300">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Reservation Confirmed
              </span>
              <h2 className="font-display text-3xl font-bold text-[#2d2d2a]">
                We Look Forward to Welcoming You!
              </h2>
              <p className="text-xs sm:text-sm text-[#686762] max-w-md mx-auto">
                Your reservation pass has been generated. Our front desk concierge has secured your suite.
              </p>
            </div>

            {/* Voucher Card */}
            <div className="p-6 rounded-2xl bg-[#ede9dc]/60 border border-[#d8d4c7] grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#d8d4c7] pb-2">
                  <span className="text-xs text-[#7c6344] font-bold uppercase">Booking Reference</span>
                  <span className="text-base font-mono font-bold text-[#2d2d2a]">{bookingRef}</span>
                </div>

                <div className="space-y-1.5 text-xs text-[#54534e]">
                  <p><strong className="text-[#2d2d2a]">Guest:</strong> {guestName}</p>
                  <p><strong className="text-[#2d2d2a]">Phone:</strong> {guestPhone}</p>
                  <p><strong className="text-[#2d2d2a]">Suite:</strong> {selectedRoom.name}</p>
                  <p><strong className="text-[#2d2d2a]">Dates:</strong> {checkIn} to {checkOut} ({nights} {nights === 1 ? 'night' : 'nights'})</p>
                  <p><strong className="text-[#2d2d2a]">Occupancy:</strong> {adults} Adults {children > 0 ? `, ${children} Children` : ''}</p>
                  <p><strong className="text-[#2d2d2a]">Payment Method:</strong> {paymentMethod.replace(/_/g, ' ').toUpperCase()}</p>
                </div>
              </div>

              <div className="flex flex-col justify-between p-4 rounded-xl bg-white border border-[#e3dfd6] text-center space-y-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#7c6344]">Total Stay Amount</span>
                  <div className="text-2xl font-bold font-mono text-[#4a5340]">{displayTotal}</div>
                  <p className="text-[10px] text-[#686762]">Includes breakfast & 24/7 power</p>
                </div>

                <div className="pt-2 border-t border-[#f2efe7] space-y-1">
                  <p className="text-[11px] font-bold text-[#2d2d2a]">Front Desk Direct Hotline</p>
                  <div className="flex justify-center gap-2 font-mono text-xs font-bold text-[#4a5340]">
                    <a href="tel:074645364" className="hover:underline">074-645364</a>
                    <span>/</span>
                    <a href="tel:076317474" className="hover:underline">076317474</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-5 py-2.5 rounded-xl bg-[#ede9dc] hover:bg-[#ded9cb] text-[#2d2d2a] font-bold text-xs flex items-center gap-2 border border-[#d8d4c7] cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Booking Pass</span>
              </button>

              <Link
                to="/"
                className="px-6 py-2.5 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-white font-bold text-xs flex items-center gap-2 shadow-md transition-colors"
              >
                <span>Return to Home</span>
              </Link>
            </div>
          </div>
        ) : (
          /* Main Reservation Form Layout */
          <form onSubmit={handleConfirmBooking} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Form Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 1. Suite Choice */}
              <div className="p-6 rounded-3xl bg-white border border-[#e3dfd6] shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-[#4a5340]">
                  <Bed className="w-5 h-5" />
                  <h3 className="font-display text-lg font-bold text-[#2d2d2a]">
                    1. Select Accommodation
                  </h3>
                </div>

                <div className="space-y-3">
                  {ROOMS_DATA.map((room) => {
                    const isSelected = selectedRoomId === room.id;
                    const price = currency === 'USD' ? `$${room.priceUSD}` : `NLe ${room.priceNLE.toLocaleString()}`;

                    return (
                      <label
                        key={room.id}
                        className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#4a5340] bg-[#ede9dc]/40 shadow-xs'
                            : 'border-[#e3dfd6] hover:bg-[#fbfaf8]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="roomChoice"
                            checked={isSelected}
                            onChange={() => setSelectedRoomId(room.id)}
                            className="w-4 h-4 text-[#4a5340] focus:ring-[#4a5340]"
                          />
                          <div>
                            <p className="font-bold text-xs text-[#2d2d2a]">{room.name}</p>
                            <p className="text-[10px] text-[#686762]">{room.bedType} • Max {room.capacity.adults + room.capacity.children} Guests</p>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="font-mono font-bold text-xs text-[#4a5340]">{price}</span>
                          <span className="block text-[9px] text-[#8c8a82]">/ night</span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* 2. Dates & Occupants */}
              <div className="p-6 rounded-3xl bg-white border border-[#e3dfd6] shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-[#4a5340]">
                  <Calendar className="w-5 h-5" />
                  <h3 className="font-display text-lg font-bold text-[#2d2d2a]">
                    2. Dates & Occupancy
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2d2d2a] mb-1 uppercase">Check-In Date *</label>
                    <input
                      type="date"
                      required
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#fbfaf8] text-xs text-[#2d2d2a] focus:outline-none focus:ring-2 focus:ring-[#4a5340]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2d2d2a] mb-1 uppercase">Check-Out Date *</label>
                    <input
                      type="date"
                      required
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#fbfaf8] text-xs text-[#2d2d2a] focus:outline-none focus:ring-2 focus:ring-[#4a5340]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#2d2d2a] mb-1 uppercase">Adults</label>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#fbfaf8] text-xs text-[#2d2d2a] focus:outline-none focus:ring-2 focus:ring-[#4a5340]"
                    >
                      <option value={1}>1 Adult</option>
                      <option value={2}>2 Adults</option>
                      <option value={3}>3 Adults</option>
                      <option value={4}>4 Adults</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2d2d2a] mb-1 uppercase">Children</label>
                    <select
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#fbfaf8] text-xs text-[#2d2d2a] focus:outline-none focus:ring-2 focus:ring-[#4a5340]"
                    >
                      <option value={0}>0 Children</option>
                      <option value={1}>1 Child</option>
                      <option value={2}>2 Children</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 3. Primary Guest Details */}
              <div className="p-6 rounded-3xl bg-white border border-[#e3dfd6] shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-[#4a5340]">
                  <Users className="w-5 h-5" />
                  <h3 className="font-display text-lg font-bold text-[#2d2d2a]">
                    3. Primary Guest Details
                  </h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-[#2d2d2a] mb-1 uppercase">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Samuel Kargbo"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#fbfaf8] text-xs text-[#2d2d2a] focus:outline-none focus:ring-2 focus:ring-[#4a5340]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#2d2d2a] mb-1 uppercase">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        placeholder="e.g. samuel@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#fbfaf8] text-xs text-[#2d2d2a] focus:outline-none focus:ring-2 focus:ring-[#4a5340]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#2d2d2a] mb-1 uppercase">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        placeholder="e.g. 074-645364 / 076317474"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#fbfaf8] text-xs text-[#2d2d2a] focus:outline-none focus:ring-2 focus:ring-[#4a5340]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#2d2d2a] mb-1 uppercase">Special Requests (Optional)</label>
                    <textarea
                      rows={2}
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="e.g. Airport shuttle pickup, dietary needs, early arrival..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8d4c7] bg-[#fbfaf8] text-xs text-[#2d2d2a] focus:outline-none focus:ring-2 focus:ring-[#4a5340]"
                    />
                  </div>
                </div>
              </div>

              {/* 4. Payment Choice */}
              <div className="p-6 rounded-3xl bg-white border border-[#e3dfd6] shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-[#4a5340]">
                  <CreditCard className="w-5 h-5" />
                  <h3 className="font-display text-lg font-bold text-[#2d2d2a]">
                    4. Payment Method
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'pay_at_hotel', label: 'Pay at Hotel Check-In', icon: CreditCard, desc: 'Cash, Cards or Mobile Money at Front Desk' },
                    { id: 'orange_money', label: 'Orange Money Sierra Leone', icon: Smartphone, desc: 'Direct mobile merchant transfer' },
                    { id: 'slcb_qr', label: 'SLCB QR Code Scan', icon: QrCode, desc: 'Instant bank-to-bank mobile settlement' },
                    { id: 'card', label: 'Credit / Debit Card', icon: CreditCard, desc: 'Visa & Mastercard international processing' },
                  ].map((pm) => {
                    const Icon = pm.icon;
                    const isSelected = paymentMethod === pm.id;
                    return (
                      <label
                        key={pm.id}
                        className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-start gap-2.5 ${
                          isSelected
                            ? 'border-[#4a5340] bg-[#ede9dc]/40 shadow-xs'
                            : 'border-[#e3dfd6] hover:bg-[#fbfaf8]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={isSelected}
                          onChange={() => setPaymentMethod(pm.id as any)}
                          className="mt-1 w-4 h-4 text-[#4a5340] focus:ring-[#4a5340]"
                        />
                        <div>
                          <p className="font-bold text-xs text-[#2d2d2a]">{pm.label}</p>
                          <p className="text-[10px] text-[#686762]">{pm.desc}</p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Order Summary Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="sticky top-28 p-6 sm:p-8 rounded-3xl bg-white border border-[#d8d4c7] shadow-lg space-y-6">
                <div className="space-y-1 pb-4 border-b border-[#e3dfd6]">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#7c6344]">
                    Booking Summary
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#2d2d2a]">
                    {selectedRoom.name}
                  </h3>
                  <p className="text-xs text-[#686762]">
                    {selectedRoom.bedType} • {selectedRoom.size}
                  </p>
                </div>

                <div className="h-40 rounded-2xl overflow-hidden bg-[#2d2d2a]">
                  <img
                    src={selectedRoom.image}
                    alt={selectedRoom.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2 text-xs text-[#54534e]">
                  <div className="flex justify-between py-1 border-b border-[#f2efe7]">
                    <span>Rate per night</span>
                    <span className="font-mono font-bold text-[#2d2d2a]">{displayRate}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#f2efe7]">
                    <span>Length of stay</span>
                    <span className="font-bold text-[#2d2d2a]">{nights} {nights === 1 ? 'Night' : 'Nights'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#f2efe7]">
                    <span>Guests</span>
                    <span className="font-bold text-[#2d2d2a]">{adults} Adults {children > 0 ? `, ${children} Children` : ''}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#f2efe7]">
                    <span>Daily Breakfast</span>
                    <span className="text-emerald-700 font-bold">Included Free</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#f2efe7]">
                    <span>Sports Arena & Gym</span>
                    <span className="text-emerald-700 font-bold">Included Free</span>
                  </div>
                </div>

                <div className="pt-2 border-t-2 border-[#4a5340]/20 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#2d2d2a]">Total Stay Price</span>
                    <span className="block text-[10px] text-[#686762]">Taxes & resort fees included</span>
                  </div>
                  <span className="text-2xl font-mono font-bold text-[#4a5340]">
                    {displayTotal}
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#4a5340]/30 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Reservation Now</span>
                </button>

                <p className="text-center text-[10px] text-[#686762]">
                  Need help? Call front desk: <strong className="text-[#2d2d2a]">074-645364 / 076317474</strong>
                </p>
              </div>

            </div>

          </form>
        )}

      </div>
    </div>
  );
};
