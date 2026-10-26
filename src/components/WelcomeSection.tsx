import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';
import { Heart, Landmark, Sparkles } from 'lucide-react';

interface WelcomeSectionProps {
  title: string;
  description: string;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  title,
  description,
}) => {
  const welcomePhotoUrl = "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80";

  const highlights = [
    {
      icon: Heart,
      title: "Elegant Celebrations",
      text: "Designed specifically for traditional Indian weddings, grand receptions, and joyous family milestones with grace and royal hospitality."
    },
    {
      icon: Landmark,
      title: "Beautiful Event Spaces",
      text: "Versatile options combining open manicured lawns, air-conditioned banquet interiors, and dedicated dining areas."
    },
    {
      icon: Sparkles,
      title: "Memorable Moments",
      text: "Thoughtfully structured layouts allowing your decor, rituals, and family traditions to shine under festive lighting."
    }
  ];

  return (
    <section id="welcome" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Kicker */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B] block mb-2">
            Welcome to Royal Palace
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2625] mb-6 leading-tight">
            {title}
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#554946] font-normal leading-relaxed">
            {description}
          </p>
        </div>

        {/* Grid: Large Image + 3 Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Large Venue Photography */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-[#FFFFFF]">
              <ImageWithFallback
                src={welcomePhotoUrl}
                alt="Royal Palace Mandap and lawn decor in Katihar"
                fallbackTitle="Royal Palace Wedding Lawn Entry"
                fallbackCategory="Welcome"
                aspectRatioClass="aspect-[4/3]"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Subtle decorative gold badge overlay */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex bg-[#701325] text-[#FAF8F5] p-6 rounded-lg shadow-xl border border-[#D4AF37]/40 flex-col max-w-[220px]">
              <span className="font-serif text-2xl font-bold text-[#D4AF37]">45,000+</span>
              <span className="text-xs font-medium uppercase tracking-wider text-[#FAF8F5]/90">Sq. Ft. Combined Celebration Space</span>
            </div>
          </div>

          {/* Right: 3 Key Highlights */}
          <div className="lg:col-span-5 space-y-6">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#FFFFFF] border border-[#E8DFC8] shadow-sm hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#FAF7F0] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 text-[#701325] group-hover:bg-[#701325] group-hover:text-[#D4AF37] transition-colors duration-200">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#2D2625] mb-2 group-hover:text-[#701325] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#554946] leading-relaxed font-normal">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
