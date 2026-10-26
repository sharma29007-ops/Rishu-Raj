import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Users, Maximize2, Calendar, Sparkles } from 'lucide-react';
import { VenueSpace } from '../data/venueData';

interface SpaceDetailModalProps {
  space: VenueSpace | null;
  onClose: () => void;
  onEnquireSpace: (title: string) => void;
}

export const SpaceDetailModal: React.FC<SpaceDetailModalProps> = ({
  space,
  onClose,
  onEnquireSpace,
}) => {
  if (!space) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-[#171615]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#F7F3EC] rounded-2xl max-w-3xl w-full p-6 sm:p-10 border border-[#C6A66B]/40 shadow-2xl relative text-[#171615] my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-[#171615]/60 hover:text-[#651C32] transition-colors rounded-full bg-white/50"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#C6A66B] block mb-1">
              {space.subtitle}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#651C32]">
              {space.title}
            </h3>
          </div>

          {/* Image */}
          <div className="rounded-xl overflow-hidden mb-6 border border-[#C6A66B]/20 max-h-64 sm:max-h-80">
            <img
              src={space.image}
              alt={space.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-white border border-[#171615]/10 mb-6 text-xs">
            <div>
              <span className="text-[#171615]/50 block font-semibold uppercase text-[10px]">Guest Capacity</span>
              <span className="font-bold text-[#651C32]">{space.capacity}</span>
            </div>
            <div>
              <span className="text-[#171615]/50 block font-semibold uppercase text-[10px]">Area Dimension</span>
              <span className="font-bold text-[#171615]">{space.area}</span>
            </div>
            {space.dimensions && (
              <div>
                <span className="text-[#171615]/50 block font-semibold uppercase text-[10px]">Ground Grid</span>
                <span className="font-bold text-[#171615]">{space.dimensions}</span>
              </div>
            )}
          </div>

          <p className="text-sm text-[#171615]/80 leading-relaxed mb-6">
            {space.description}
          </p>

          {/* Features */}
          <div className="space-y-2 mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#651C32]">Architectural Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {space.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#171615]/80">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#171615]/10 pt-6">
            <span className="text-xs text-[#171615]/60 italic">
              Located at Royal Palace, Katihar, Bihar
            </span>

            <button
              onClick={() => {
                onEnquireSpace(space.title);
                onClose();
              }}
              className="w-full sm:w-auto bg-[#651C32] hover:bg-[#4D1426] text-[#F7F3EC] py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-colors flex items-center justify-center gap-2 border border-[#C6A66B]/50"
            >
              <Sparkles className="w-4 h-4 text-[#C6A66B]" />
              <span>Enquire About This Space</span>
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
