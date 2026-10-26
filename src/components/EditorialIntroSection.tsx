import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Heart } from 'lucide-react';

export const EditorialIntroSection: React.FC = () => {
  const introImage = "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80";

  return (
    <section id="introduction" className="py-28 md:py-36 bg-[#F7F3EC] text-[#171615] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Asymmetrical Header Block */}
        <div className="mb-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-xs font-sans font-bold uppercase tracking-[0.25em] text-[#C6A66B] mb-4"
          >
            <div className="w-8 h-0.5 bg-[#C6A66B]" />
            <span>EST. KATIHAR, BIHAR</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#171615] leading-[1.12]"
          >
            More Than A Venue.<br />
            <span className="italic font-light text-[#651C32]">The Beginning Of A Memory.</span>
          </motion.h2>
        </div>

        {/* Asymmetrical Grid: Large Photo + Paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Offset Photo with Clipped Mask Transition */}
          <motion.div
            initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0 }}
            whileInView={{ clipPath: 'inset(0% 0 0 0)', opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src={introImage}
                alt="Royal Palace Mandap and lawn decor in Katihar"
                className="w-full aspect-[4/3] object-cover scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Editorial Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#651C32] text-[#F7F3EC] p-6 sm:p-8 rounded-xl shadow-2xl border border-[#C6A66B]/40 max-w-[240px] hidden sm:block"
            >
              <div className="font-serif text-3xl font-bold text-[#C6A66B]">45,000+</div>
              <div className="text-[10px] font-sans uppercase tracking-[0.2em] font-semibold mt-1 text-[#F7F3EC]/90">
                Sq. Ft. Combined Celebration Ground
              </div>
            </motion.div>
          </motion.div>

          {/* Editorial Paragraph & Highlights */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="w-12 h-0.5 bg-[#C6A66B]" />

              <p className="font-sans text-base sm:text-lg text-[#171615]/80 font-light leading-relaxed">
                Royal Palace Wedding Lawn & Banquet provides an exquisite, tranquil setting in Katihar designed specifically for traditional Indian weddings, royal receptions, Sangeet evenings, and sacred family rituals.
              </p>

              <p className="font-sans text-sm text-[#171615]/70 font-light leading-relaxed">
                Surrounded by open Bihar skies, manicured greenery, and air-conditioned banquet luxury, our venue merges timeless hospitality with meticulous event coordination. Every space is tailored so your rituals and celebrations unfold effortlessly.
              </p>

              <div className="pt-4 border-t border-[#171615]/10 grid grid-cols-2 gap-4 text-xs font-sans font-semibold uppercase tracking-wider text-[#651C32]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C6A66B]" />
                  <span>Grand Lawns</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#C6A66B]" />
                  <span>AC Banquet</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
