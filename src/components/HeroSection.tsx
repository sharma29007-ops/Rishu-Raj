import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onDiscoverClick: () => void;
  onPlanClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onDiscoverClick, onPlanClick }) => {
  // Direct high-res photography of Indian wedding lawn festoons at dusk
  const heroImage = "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=85";

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#171615]">
      
      {/* Background Image with Slow Scale (1.04 to 1.0) and Dark Overlay Scrim */}
      <motion.div
        initial={{ scale: 1.06, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImage}
          alt="Royal Palace Wedding Lawn at Dusk in Katihar"
          className="w-full h-full object-cover object-center brightness-[0.78]"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171615] via-[#171615]/50 to-[#171615]/30" />
      </motion.div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center text-[#F7F3EC] mt-16 sm:mt-12">
        
        {/* Small Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7F3EC]/10 backdrop-blur-md border border-[#C6A66B]/40 mb-8 text-[11px] font-sans font-bold tracking-[0.25em] uppercase text-[#C6A66B]"
        >
          <span>KATIHAR, BIHAR · WEDDING & CELEBRATIONS</span>
        </motion.div>

        {/* Main Headline Split Across Lines */}
        <div className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.08] text-[#F7F3EC] mb-8 drop-shadow-md">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Where Every
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="italic text-[#C6A66B] font-light"
          >
            Love Story
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Becomes Forever.
          </motion.div>
        </div>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base md:text-lg text-[#F7F3EC]/80 font-sans font-light max-w-xl mx-auto mb-10 leading-relaxed"
        >
          An extraordinary setting for life's most meaningful celebrations.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <button
            onClick={onDiscoverClick}
            className="w-full sm:w-auto bg-[#F7F3EC] hover:bg-white text-[#171615] px-8 py-4 rounded-full text-xs font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2 group"
          >
            <span>DISCOVER THE VENUE</span>
            <ArrowRight className="w-4 h-4 text-[#651C32] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onPlanClick}
            className="w-full sm:w-auto bg-[#651C32] hover:bg-[#4D1426] text-[#F7F3EC] px-8 py-4 rounded-full text-xs font-sans font-bold tracking-[0.2em] uppercase border border-[#C6A66B]/60 transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#C6A66B]" />
            <span>PLAN YOUR CELEBRATION</span>
          </button>
        </motion.div>

      </div>

      {/* Minimal Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#C6A66B] cursor-pointer"
        onClick={onDiscoverClick}
      >
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-[#C6A66B]" />
        </motion.div>
      </motion.div>

    </section>
  );
};
