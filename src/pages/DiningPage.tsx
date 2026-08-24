import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Currency } from '../types';
import { DINING_MENU, RESORT_IMAGES, RESORT_INFO } from '../data/resortData';
import { GazeboBookingModal } from '../components/GazeboBookingModal';
import { 
  Utensils, 
  Calendar, 
  Sparkles, 
  Clock, 
  Heart, 
  Coffee, 
  Flame, 
  Wine, 
  Award,
  CheckCircle2,
  Phone
} from 'lucide-react';

interface DiningPageProps {
  currency: Currency;
}

export const DiningPage: React.FC<DiningPageProps> = ({ currency }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'mains' | 'grill' | 'dessert' | 'drinks'>('all');
  const [isGazeboModalOpen, setIsGazeboModalOpen] = useState(false);

  const filteredMenu = DINING_MENU.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="space-y-12 pb-20">
      {/* Page Header */}
      <PageHeader
        title="Thatched Gazebos & Dining"
        subtitle="Savor Afro-fusion gastronomy and open-air grilled delicacies inside private conical thatched cabanas surrounded by lush palm groves."
        badge="Culinary Oasis"
        breadcrumbs={[{ label: 'Dining & Gazebos' }]}
        bgImage={RESORT_IMAGES.thatchedGazebos}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Thatched Gazebo Highlight Feature Card */}
        <div className="rounded-3xl border border-[#d8d4c7] overflow-hidden bg-white shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-6 relative h-80 lg:h-auto overflow-hidden bg-[#2d2d2a]">
            <img
              src={RESORT_IMAGES.thatchedGazebos}
              alt="Conical Thatched Private Dining Gazebos"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#4a5340] text-[#f8f7f2] text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Authentic African Palm Thatch</span>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6 bg-[#fcfbf9]">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#7c6344]">
                Signature Open-Air Experience
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2d2d2a]">
                Private Conical Thatched Dining Gazebos
              </h2>
              <p className="text-sm text-[#54534e] leading-relaxed">
                Nestled along landscaped stone avenues and tropical palm trees, our handcrafted thatched gazebos provide the ultimate private dining haven. Perfect for romantic sunset dinners, family weekend feasts, executive business lunches, or chilled evening drinks.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-3">
                <div className="p-3 rounded-xl bg-white border border-[#e3dfd6] text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-[#4a5340] font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Serving Hours</span>
                  </div>
                  <p className="text-[#686762]">7:00 AM – 11:00 PM Daily</p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#e3dfd6] text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-[#4a5340] font-bold">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Live Barbecue</span>
                  </div>
                  <p className="text-[#686762]">Every Fri, Sat & Sun</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#e3dfd6] flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setIsGazeboModalOpen(true)}
                className="px-6 py-3 rounded-xl bg-[#4a5340] hover:bg-[#3d4534] text-[#f8f7f2] font-bold text-xs uppercase tracking-wider shadow-md shadow-[#4a5340]/20 flex items-center gap-2 cursor-pointer transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Private Gazebo</span>
              </button>

              <a
                href="tel:074645364"
                className="text-xs font-bold text-[#4a5340] hover:underline flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Hotline: 074-645364</span>
              </a>
            </div>
          </div>
        </div>

        {/* Restaurant Menu Showcase */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7c6344]">
              Executive Culinary Creations
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2d2d2a]">
              The Galiness Paradise Menu
            </h3>
            <p className="text-xs sm:text-sm text-[#686762]">
              Freshly sourced local organic ingredients prepared by seasoned African culinary chefs.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center gap-2 overflow-x-auto pb-2">
            {[
              { id: 'all', label: 'Full Menu', icon: Utensils },
              { id: 'mains', label: 'Afro-Fusion Entrees', icon: Award },
              { id: 'grill', label: 'Wood-Fired Grills', icon: Flame },
              { id: 'drinks', label: 'Tropical Drinks & Cocktails', icon: Wine },
              { id: 'dessert', label: 'Sweet Desserts', icon: Heart },
            ].map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                    activeCategory === cat.id
                      ? 'bg-[#4a5340] text-white shadow-sm'
                      : 'bg-white text-[#54534e] hover:bg-[#ede9dc] border border-[#d8d4c7]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {filteredMenu.map((dish) => {
              const price = currency === 'USD' ? `$${dish.priceUSD}` : `NLe ${dish.priceNLE.toLocaleString()}`;

              return (
                <div
                  key={dish.id}
                  className="rounded-2xl border border-[#e3dfd6] overflow-hidden bg-white shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-base font-bold text-[#2d2d2a]">{dish.name}</h4>
                        <span className="text-[10px] font-bold text-[#7c6344] uppercase tracking-wider">
                          {dish.category}
                        </span>
                      </div>
                      <span className="px-3 py-1 rounded-xl bg-[#ede9dc] text-[#4a5340] font-mono font-bold text-sm shrink-0">
                        {price}
                      </span>
                    </div>

                    <p className="text-xs text-[#686762] leading-relaxed">
                      {dish.description}
                    </p>
                  </div>

                  <div className="px-5 py-3 bg-[#fbfaf8] border-t border-[#f2efe7] flex items-center justify-between text-[11px] text-[#686762]">
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Freshly Prepared to Order
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsGazeboModalOpen(true)}
                      className="text-[#4a5340] font-bold hover:underline"
                    >
                      Order at Table
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Gazebo Reservation Modal */}
      <GazeboBookingModal
        isOpen={isGazeboModalOpen}
        onClose={() => setIsGazeboModalOpen(false)}
      />
    </div>
  );
};
