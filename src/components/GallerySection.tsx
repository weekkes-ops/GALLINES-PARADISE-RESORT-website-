import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/resortData';
import { GalleryItem } from '../types';
import { 
  Crown, 
  Eye, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Maximize2
} from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'suites', label: 'Suites & Rooms' },
    { id: 'gardens', label: 'Gardens & Gazebos' },
    { id: 'sports', label: 'Sports Arena & Gym' },
    { id: 'facilities', label: 'Reception & Grounds' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 relative bg-[#ede9dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f8f7f2] border border-[#d8d4c7] text-[#4a5340] text-xs font-semibold uppercase tracking-widest">
            <Crown className="w-3.5 h-3.5 text-[#4a5340]" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d2d2a] tracking-tight">
            Explore <span className="gold-gradient-text">Gallines Paradise</span> in Photos
          </h2>
          <p className="text-[#686762] text-sm sm:text-base leading-relaxed">
            Take a visual tour through our grand estate entrance, presidential living rooms, all-weather turf sports arena, modern fitness center, and palm-shaded garden gazebos.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#4a5340] text-[#f8f7f2] shadow-md font-bold'
                  : 'bg-[#f8f7f2] text-[#54534e] hover:text-[#2d2d2a] border border-[#d8d4c7]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Bento / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer border border-[#e3dfd6] hover:border-[#4a5340] transition-all duration-500 shadow-md bg-[#ffffff]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Content text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] text-[#e0b253] font-bold uppercase tracking-widest">
                  {item.category}
                </span>
                <h4 className="font-display text-lg font-bold text-white group-hover:text-[#ede9dc] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-200 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.caption}
                </p>
              </div>

              {/* View Magnifier Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#e0b253]" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div 
          id="gallery-lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white hover:text-amber-400 transition-colors cursor-pointer"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Image */}
          <button
            type="button"
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white hover:text-amber-400 transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Image */}
          <button
            type="button"
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white hover:text-amber-400 transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Main Container */}
          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center space-y-4">
            <div className="relative rounded-2xl overflow-hidden max-h-[70vh] border border-[#d8d4c7] shadow-2xl">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="text-center space-y-1 max-w-2xl px-4">
              <span className="text-xs text-[#e0b253] font-bold uppercase tracking-widest">
                Photo {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="font-display text-xl font-bold text-white">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
