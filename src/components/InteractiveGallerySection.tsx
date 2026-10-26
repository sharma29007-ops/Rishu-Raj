import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GalleryItem } from '../data/venueData';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';

interface InteractiveGallerySectionProps {
  items: GalleryItem[];
}

export const InteractiveGallerySection: React.FC<InteractiveGallerySectionProps> = ({ items }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'lawn' | 'banquet' | 'mandap' | 'dining'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === 'all'
    ? items
    : items.filter((item) => item.category === activeFilter);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev! - 1));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev! + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-28 md:py-36 bg-[#171615] text-[#F7F3EC] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-[#C6A66B] mb-3"
          >
            PHOTOGRAPHIC ARCHIVE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#F7F3EC]"
          >
            Visual Moments of <span className="italic text-[#C6A66B] font-light">Royal Celebrations</span>
          </motion.h2>
          <div className="w-16 h-0.5 bg-[#C6A66B] mx-auto mt-6" />
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {[
            { id: 'all', label: 'All Photographs' },
            { id: 'lawn', label: 'Outdoor Lawn' },
            { id: 'banquet', label: 'Banquet Hall' },
            { id: 'mandap', label: 'Mandap & Decor' },
            { id: 'dining', label: 'Dining Pavilion' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 border ${
                activeFilter === tab.id
                  ? 'bg-[#651C32] text-[#F7F3EC] border-[#C6A66B] shadow-md'
                  : 'bg-[#222120] text-[#F7F3EC]/70 border-[#F7F3EC]/15 hover:border-[#C6A66B] hover:text-[#F7F3EC]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Editorial Masonry-Inspired Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden bg-[#222120] border border-[#C6A66B]/20 shadow-xl cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Hover Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171615] via-[#171615]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-[#F7F3EC]">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C6A66B] mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg font-normal text-[#F7F3EC] line-clamp-2">
                  {item.title}
                </h4>
                <div className="mt-3 flex items-center text-xs text-[#C6A66B] gap-1.5 font-medium">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to view full image</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-50 p-3 text-white/80 hover:text-white bg-white/10 rounded-full transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            <button
              onClick={() => setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev! - 1))}
              className="absolute left-6 z-50 p-3 text-white/80 hover:text-white bg-white/10 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[75vh] w-auto object-contain rounded-lg border border-white/20 shadow-2xl"
                referrerPolicy="no-referrer"
              />

              <div className="mt-4 text-center text-[#F7F3EC]">
                <span className="text-xs uppercase font-mono tracking-widest text-[#C6A66B] block mb-1">
                  {filteredItems[lightboxIndex].category} · {lightboxIndex + 1} OF {filteredItems.length}
                </span>
                <h3 className="font-serif text-2xl font-normal">
                  {filteredItems[lightboxIndex].title}
                </h3>
              </div>
            </div>

            {/* Next */}
            <button
              onClick={() => setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev! + 1))}
              className="absolute right-6 z-50 p-3 text-white/80 hover:text-white bg-white/10 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
