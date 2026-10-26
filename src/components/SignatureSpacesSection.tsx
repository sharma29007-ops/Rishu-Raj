import React, { useState } from 'react';
import { motion } from 'motion/react';
import { VenueSpace } from '../data/venueData';
import { SpaceDetailModal } from './SpaceDetailModal';
import { ArrowRight, Maximize2, Users, Sparkles } from 'lucide-react';

interface SignatureSpacesSectionProps {
  spaces: VenueSpace[];
  onEnquireSpace: (spaceTitle: string) => void;
}

export const SignatureSpacesSection: React.FC<SignatureSpacesSectionProps> = ({
  spaces,
  onEnquireSpace,
}) => {
  const [selectedSpace, setSelectedSpace] = useState<VenueSpace | null>(null);

  const numberingMap = ['01', '02', '03'];

  return (
    <section id="signature-spaces" className="py-28 md:py-36 bg-[#171615] text-[#F7F3EC] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-[#C6A66B] mb-3"
          >
            SIGNATURE EVENT SPACES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#F7F3EC]"
          >
            Architectural Elegance <span className="italic text-[#C6A66B] font-light">Under Starlit Skies</span>
          </motion.h2>
          <div className="w-16 h-0.5 bg-[#C6A66B] mx-auto mt-6" />
        </div>

        {/* 3 Large Alternating Signature Sections */}
        <div className="space-y-28 md:space-y-40">
          {spaces.map((space, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={space.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                
                {/* Large Photography Container */}
                <div className={`lg:col-span-7 relative group cursor-pointer ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                     onClick={() => setSelectedSpace(space)}>
                  <div className="relative rounded-2xl overflow-hidden border border-[#C6A66B]/30 shadow-2xl bg-[#222120]">
                    <img
                      src={space.image}
                      alt={space.title}
                      className="w-full aspect-[16/10] sm:aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out brightness-95"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171615] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Number Overlay */}
                    <div className="absolute top-6 left-6 bg-[#171615]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#C6A66B]/40 text-xs font-mono font-bold tracking-widest text-[#C6A66B]">
                      {numberingMap[idx]} / SPACE
                    </div>

                    <div className="absolute bottom-6 right-6 bg-[#651C32] text-[#F7F3EC] px-4 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-wider border border-[#C6A66B]/50 flex items-center gap-2 group-hover:bg-[#C6A66B] group-hover:text-[#171615] transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>DISCOVER THIS SPACE</span>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold text-[#C6A66B] uppercase tracking-[0.25em]">
                      {numberingMap[idx]} — {space.subtitle}
                    </span>

                    <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#F7F3EC] leading-tight">
                      {space.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-6 text-xs font-sans font-semibold text-[#C6A66B] py-3 border-y border-[#F7F3EC]/10">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{space.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Maximize2 className="w-4 h-4" />
                      <span>{space.area}</span>
                    </div>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-[#F7F3EC]/75 font-light leading-relaxed">
                    {space.description}
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={() => setSelectedSpace(space)}
                      className="inline-flex items-center gap-3 bg-[#651C32] hover:bg-[#4D1426] text-[#F7F3EC] px-6 py-3.5 rounded-full text-xs font-sans font-bold uppercase tracking-[0.15em] transition-all border border-[#C6A66B]/50 shadow-md group"
                    >
                      <span>DISCOVER THIS SPACE</span>
                      <ArrowRight className="w-4 h-4 text-[#C6A66B] group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Modal */}
      <SpaceDetailModal
        space={selectedSpace}
        onClose={() => setSelectedSpace(null)}
        onEnquireSpace={onEnquireSpace}
      />

    </section>
  );
};
