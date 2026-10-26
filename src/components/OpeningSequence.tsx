import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface OpeningSequenceProps {
  onComplete: () => void;
}

export const OpeningSequence: React.FC<OpeningSequenceProps> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Automatically complete intro after 1.6 seconds
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 600); // Allow exit animation to finish
    }, 1600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setVisible(false);
    setTimeout(onComplete, 200);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-[#F7F3EC] text-[#171615] flex flex-col justify-between p-8 sm:p-12 overflow-hidden pointer-events-auto selection:bg-[#651C32] selection:text-[#F7F3EC]"
        >
          {/* Top minimal skip */}
          <div className="flex justify-between items-center text-xs tracking-widest uppercase font-mono text-[#171615]/50">
            <span>ROYAL PALACE · KATIHAR</span>
            <button
              onClick={handleSkip}
              className="hover:text-[#651C32] transition-colors cursor-pointer py-1 px-2 border border-[#171615]/20 rounded-full"
            >
              Skip Intro
            </button>
          </div>

          {/* Center Brand Staggered Reveal */}
          <div className="my-auto text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-widest text-[#651C32] uppercase mb-4">
                ROYAL PALACE
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs sm:text-sm font-sans tracking-[0.35em] uppercase text-[#C6A66B] font-semibold">
                A Place For Your Forever
              </p>
            </motion.div>
          </div>

          {/* Bottom decorative line */}
          <div className="flex justify-between items-center text-[10px] tracking-widest uppercase text-[#171615]/40 font-mono">
            <span>BIHAR, INDIA</span>
            <span>2026 EDITION</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
