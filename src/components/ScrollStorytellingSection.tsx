import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ChevronRight, ChevronLeft, Eye } from 'lucide-react';

export const ScrollStorytellingSection: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      id: "ch1",
      number: "01",
      title: "The Grand Entrance Pathway",
      subtitle: "First Impressions & Lantern-Lit Gateways",
      description: "A ceremonial entrance gate decorated with fresh rose garlands, warm lantern lighting, and flower petal pathways welcoming your guests with traditional Bihar royal hospitality.",
      image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
      detail: "Customizable entrance arches with marigold strings & brass lamps."
    },
    {
      id: "ch2",
      number: "02",
      title: "The Sacred Mandap Courtyard",
      subtitle: "Vedic Phere & Jai Mala Ceremonies",
      description: "An elevated central stage crafted for sacred rituals, sacred fire altars, and royal Jai Mala exchanges under starry Katihar skies or climate-controlled indoor elegance.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      detail: "40ft elevated stage width with heavy brass thali and flower backdrops."
    },
    {
      id: "ch3",
      number: "03",
      title: "The Multi-Cuisine Dining Plaza",
      subtitle: "Culinary Excellence & Seated Comfort",
      description: "Dedicated covered dining pavilions structured for smooth guest flow, multi-counter live catering stalls, hygiene compliance, and comfortable VIP seating layouts.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
      detail: "Weather-protected covered dining layout for up to 800 dining guests."
    },
    {
      id: "ch4",
      number: "04",
      title: "The Evening Festoon Illumination",
      subtitle: "Fairy Lights & Crystal Atmosphere",
      description: "As dusk descends over Katihar, thousands of warm festoon lights and crystal chandeliers illuminate the lawn, creating an unforgettably romantic ambiance for evening receptions.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
      detail: "Complete generator backup guaranteeing unbroken evening illumination."
    }
  ];

  return (
    <section id="storytelling" className="py-28 md:py-36 bg-[#F7F3EC] text-[#171615] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-[#C6A66B] mb-3"
          >
            THE ROYAL PALACE EXPERIENCE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#171615] leading-tight"
          >
            Every Detail.<br />
            <span className="italic font-light text-[#651C32]">A Little More Extraordinary.</span>
          </motion.h2>
          <div className="w-16 h-0.5 bg-[#C6A66B] mt-6" />
        </div>

        {/* Chapter Switcher Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-[#171615]/10 pb-6">
          {chapters.map((ch, idx) => (
            <button
              key={ch.id}
              onClick={() => setActiveChapter(idx)}
              className={`px-5 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border ${
                activeChapter === idx
                  ? 'bg-[#651C32] text-[#F7F3EC] border-[#651C32] shadow-md'
                  : 'bg-white text-[#171615]/70 border-[#171615]/15 hover:border-[#C6A66B]'
              }`}
            >
              <span className="font-mono text-[#C6A66B]">{ch.number}</span>
              <span>{ch.title}</span>
            </button>
          ))}
        </div>

        {/* Active Chapter Showcase Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeChapter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            
            {/* Image with Clip Mask */}
            <div className="lg:col-span-7 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#171615]">
                <img
                  src={chapters[activeChapter].image}
                  alt={chapters[activeChapter].title}
                  className="w-full aspect-[16/10] object-cover scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="absolute top-6 left-6 bg-[#171615]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#C6A66B]/40 text-xs font-mono font-bold text-[#C6A66B]">
                CHAPTER {chapters[activeChapter].number} / 04
              </div>
            </div>

            {/* Description Details */}
            <div className="lg:col-span-5 space-y-6">
              
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#C6A66B] block mb-2">
                  {chapters[activeChapter].subtitle}
                </span>

                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#651C32] mb-4">
                  {chapters[activeChapter].title}
                </h3>

                <p className="font-sans text-base text-[#171615]/80 font-light leading-relaxed mb-6">
                  {chapters[activeChapter].description}
                </p>

                <div className="p-4 rounded-xl bg-white border border-[#C6A66B]/30 text-xs text-[#171615]/80 flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
                  <span><strong>Highlight:</strong> {chapters[activeChapter].detail}</span>
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center justify-between pt-4 border-t border-[#171615]/10">
                <button
                  disabled={activeChapter === 0}
                  onClick={() => setActiveChapter((prev) => Math.max(0, prev - 1))}
                  className="p-3 rounded-full border border-[#171615]/20 hover:border-[#651C32] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="Previous Chapter"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <span className="text-xs font-mono font-bold text-[#171615]/60">
                  {activeChapter + 1} OF {chapters.length}
                </span>

                <button
                  disabled={activeChapter === chapters.length - 1}
                  onClick={() => setActiveChapter((prev) => Math.min(chapters.length - 1, prev + 1))}
                  className="p-3 rounded-full border border-[#171615]/20 hover:border-[#651C32] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="Next Chapter"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
