import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Facility } from '../data/venueData';
import { Sparkles, ArrowRight, Info } from 'lucide-react';

interface FacilitiesSectionProps {
  facilities: Facility[];
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ facilities }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  const facilityNumbers = ['01', '02', '03', '04', '05', '06'];

  return (
    <section id="facilities" className="py-28 md:py-36 bg-[#F7F3EC] text-[#171615] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-[#C6A66B] mb-3"
          >
            EDITORIAL AMENITIES LIST
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#171615]"
          >
            Refined Venue Infrastructure
          </motion.h2>
          <div className="w-16 h-0.5 bg-[#C6A66B] mx-auto mt-6" />
        </div>

        {/* Minimal Editorial List with Thin Dividers */}
        <div className="border-t border-[#171615]/15 divide-y divide-[#171615]/15 max-w-5xl mx-auto">
          {facilities.map((fac, idx) => (
            <motion.div
              key={fac.id}
              onMouseEnter={() => setHoveredIdx(idx)}
              className={`py-8 px-4 sm:px-8 transition-colors duration-300 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 group ${
                hoveredIdx === idx ? 'bg-white shadow-sm' : ''
              }`}
            >
              <div className="flex items-start md:items-center gap-6">
                <span className="font-mono text-sm font-bold text-[#C6A66B] tracking-widest shrink-0">
                  {facilityNumbers[idx] || `0${idx + 1}`}
                </span>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#171615] group-hover:text-[#651C32] transition-colors">
                    {fac.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#171615]/70 font-light mt-1 max-w-xl">
                    {fac.description}
                  </p>
                </div>
              </div>

              {fac.highlightText && (
                <div className="shrink-0 flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#651C32] bg-[#FAF7F0] px-4 py-2 rounded-full border border-[#C6A66B]/30 self-start md:self-auto">
                  <Sparkles className="w-3.5 h-3.5 text-[#C6A66B]" />
                  <span>{fac.highlightText}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center text-xs text-[#171615]/50 italic max-w-2xl mx-auto">
          Sample demonstration amenities. Customizable for venue owners before publishing.
        </div>

      </div>
    </section>
  );
};
