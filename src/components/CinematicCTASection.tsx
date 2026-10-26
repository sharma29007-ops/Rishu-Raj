import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

interface CinematicCTASectionProps {
  onEnquireClick: () => void;
}

export const CinematicCTASection: React.FC<CinematicCTASectionProps> = ({ onEnquireClick }) => {
  const ctaBgImage = "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=85";

  return (
    <section className="relative py-32 md:py-44 bg-[#171615] text-[#F7F3EC] overflow-hidden flex items-center justify-center">
      
      {/* Background Image with Parallax & Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaBgImage}
          alt="Royal Palace Wedding Venue dusk view"
          className="w-full h-full object-cover brightness-[0.40] scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171615] via-[#171615]/70 to-[#171615]/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7F3EC]/10 backdrop-blur-md border border-[#C6A66B]/40 mb-8 text-[11px] font-sans font-bold tracking-[0.25em] uppercase text-[#C6A66B]"
        >
          <span>KATIHAR, BIHAR · ROYAL PALACE</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#F7F3EC] leading-[1.12] mb-6 drop-shadow-lg"
        >
          Your Celebration<br />
          <span className="italic font-light text-[#C6A66B]">Deserves A Beautiful Beginning.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg text-[#F7F3EC]/80 font-sans font-light max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Let's create a setting worthy of your most memorable day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={onEnquireClick}
            className="bg-[#651C32] hover:bg-[#4D1426] text-[#F7F3EC] px-9 py-4 rounded-full text-xs font-sans font-bold tracking-[0.2em] uppercase border border-[#C6A66B]/60 transition-all duration-300 shadow-2xl active:scale-95 inline-flex items-center gap-3 group"
          >
            <Sparkles className="w-4 h-4 text-[#C6A66B]" />
            <span>ENQUIRE ABOUT YOUR DATE</span>
            <ArrowRight className="w-4 h-4 text-[#C6A66B] group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>

    </section>
  );
};
