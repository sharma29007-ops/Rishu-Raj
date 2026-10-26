import React, { useState } from 'react';
import { GalleryItem } from '../data/venueData';
import { ImageWithFallback } from './ImageWithFallback';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';

interface PhotoGalleryProps {
  items: GalleryItem[];
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ items }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'lawn' | 'banquet' | 'mandap' | 'dining'>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === 'all'
    ? items
    : items.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const prevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev! - 1)));
  };

  const nextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev === filteredItems.length - 1 ? 0 : (prev! + 1)));
  };

  return (
    <section id="gallery" className="py-20 bg-[#F5F0E6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B] block mb-2">
            Visual Highlights
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2625] mb-4">
            Photo Gallery
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mb-6" />
          <p className="text-base text-[#554946]">
            Take a visual tour of Royal Palace Wedding Lawn & Banquet across day and evening setups.
          </p>
        </div>

        {/* Filter Bar (Interactive Buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'lawn', label: 'Outdoor Lawn' },
            { id: 'banquet', label: 'Banquet Hall' },
            { id: 'mandap', label: 'Mandap Decor' },
            { id: 'dining', label: 'Dining & Catering' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${
                activeFilter === tab.id
                  ? 'bg-[#701325] text-[#FAF8F5] border-[#701325] shadow-md'
                  : 'bg-[#FFFFFF] text-[#554946] border-[#E8DFC8] hover:border-[#C5A059] hover:text-[#701325]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-xl overflow-hidden bg-white border border-[#E0D5BE] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                fallbackTitle={item.title}
                fallbackCategory={item.category}
                aspectRatioClass="aspect-[4/3]"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F070C]/85 via-[#1F070C]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-[#FAF8F5]">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-base font-bold text-[#FAF8F5] line-clamp-2">
                  {item.title}
                </h4>
                <div className="mt-2 flex items-center text-xs text-[#E8DFC8] gap-1 font-medium">
                  <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={prevImage}
            className="absolute left-4 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative max-h-[75vh] overflow-hidden rounded-lg border border-white/20 shadow-2xl bg-black">
              <img
                src={filteredItems[selectedImageIndex].image}
                alt={filteredItems[selectedImageIndex].title}
                className="max-h-[75vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="mt-4 text-center text-[#FAF8F5]">
              <span className="text-xs uppercase font-semibold text-[#D4AF37] tracking-widest block mb-1">
                {filteredItems[selectedImageIndex].category} · {selectedImageIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                {filteredItems[selectedImageIndex].title}
              </h3>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={nextImage}
            className="absolute right-4 z-50 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>
      )}
    </section>
  );
};
