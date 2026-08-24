import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { GALLERY_ITEMS, RESORT_IMAGES } from '../data/resortData';
import { 
  Image as ImageIcon, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  SlidersHorizontal
} from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category.toLowerCase() === activeCategory.toLowerCase();
  });

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0));
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Page Header */}
      <PageHeader
        title="Official Photo Library"
        subtitle="Explore authentic photography of Galiness Paradise Resort: presidential suites, stone bedrooms, thatched gazebos, sports arena, and tropical estate grounds."
        badge="14 Real Photo Assets"
        breadcrumbs={[{ label: 'Photo Library' }]}
        bgImage={RESORT_IMAGES.driveway}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Category Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#ede9dc]/60 border border-[#d8d4c7]">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs font-bold text-[#7c6344] uppercase tracking-wider flex items-center gap-1.5 shrink-0 pr-2">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Categories:
            </span>
            {[
              { id: 'all', label: 'All Photos (14)' },
              { id: 'suites', label: 'Suites & Interiors' },
              { id: 'gardens', label: 'Thatched Gazebos & Palms' },
              { id: 'sports', label: 'Sports Arena' },
              { id: 'facilities', label: 'Estate, Gym & Hall' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedPhotoIndex(null);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-[#4a5340] text-white shadow-sm'
                    : 'bg-white text-[#54534e] hover:bg-[#ede9dc] border border-[#d8d4c7]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-[#686762] sm:text-right shrink-0">
            Showing <strong className="text-[#2d2d2a]">{filteredPhotos.length}</strong> high-resolution photos
          </div>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(idx)}
              className="group relative h-64 rounded-2xl overflow-hidden bg-[#2d2d2a] border border-[#e3dfd6] shadow-xs hover:shadow-lg cursor-pointer transition-all duration-300"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                    {photo.category}
                  </span>
                  <h4 className="text-sm font-bold truncate">{photo.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredPhotos[selectedPhotoIndex].image}
              alt={filteredPhotos[selectedPhotoIndex].title}
              className="max-h-[72vh] max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <div className="text-center text-white space-y-1">
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest">
                {filteredPhotos[selectedPhotoIndex].category} • {selectedPhotoIndex + 1} of {filteredPhotos.length}
              </span>
              <p className="text-sm font-medium text-[#d8d4c7]">
                {filteredPhotos[selectedPhotoIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
