import React from 'react';
import { VenueSpace } from '../data/venueData';
import { ImageWithFallback } from './ImageWithFallback';
import { Users, Maximize2, ArrowRight, CheckCircle2 } from 'lucide-react';

interface OurVenueSectionProps {
  spaces: VenueSpace[];
  onEnquireSpace: (spaceTitle: string) => void;
}

export const OurVenueSection: React.FC<OurVenueSectionProps> = ({
  spaces,
  onEnquireSpace,
}) => {
  return (
    <section id="our-venue" className="py-20 bg-[#F5F0E6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B] block mb-2">
            Explore Our Spaces
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2625] mb-4">
            Designed for Every Phase of Your Celebration
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mb-6" />
          <p className="text-base text-[#554946]">
            Whether you are hosting a grand outdoor wedding reception under evening lights or an intimate indoor Sangeet, Royal Palace provides versatile environments to suit your requirements.
          </p>
        </div>

        {/* 3 Venue Space Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spaces.map((space) => (
            <div
              key={space.id}
              className="bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#E0D5BE] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={space.image}
                  alt={space.title}
                  fallbackTitle={space.title}
                  fallbackCategory={space.subtitle}
                  aspectRatioClass="aspect-[4/3]"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#701325]/90 text-[#FAF8F5] text-xs font-semibold uppercase px-3 py-1 rounded-full border border-[#D4AF37]/40 shadow-sm backdrop-blur-sm">
                  {space.capacity}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#B8860B] block mb-1">
                    {space.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#2D2625] mb-3 group-hover:text-[#701325] transition-colors">
                    {space.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs font-medium text-[#6B5E59] pb-4 mb-4 border-b border-[#F0E8D8]">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#701325]" />
                      <span>{space.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-4 h-4 text-[#701325]" />
                      <span>{space.area}</span>
                    </div>
                  </div>

                  <p className="text-sm text-[#554946] font-normal leading-relaxed mb-6">
                    {space.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-8">
                    {space.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#443835]">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enquire Button */}
                <button
                  onClick={() => onEnquireSpace(space.title)}
                  className="w-full bg-[#FAF7F0] hover:bg-[#701325] text-[#701325] hover:text-[#FAF8F5] border border-[#C8B28B] hover:border-[#701325] py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group/btn active:scale-[0.98]"
                >
                  <span>Enquire About This Space</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
