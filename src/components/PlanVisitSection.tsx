import React from 'react';
import { visitSteps } from '../data/venueData';
import { CalendarCheck, ArrowRight, Compass } from 'lucide-react';

interface PlanVisitSectionProps {
  onRequestVisitClick: () => void;
}

export const PlanVisitSection: React.FC<PlanVisitSectionProps> = ({ onRequestVisitClick }) => {
  return (
    <section id="plan-visit" className="py-20 bg-[#FAF8F5] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#701325]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B] block mb-2">
            Seamless Booking Walkthrough
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2625] mb-4">
            Come and Experience the Venue
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mb-6" />
          <p className="text-base text-[#554946]">
            We invite prospective couples and families to visit Royal Palace in Katihar to tour our lawns, banquet hall, and bridal suites in person.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {visitSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#FFFFFF] border border-[#E8DFC8] shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-4xl font-bold text-[#D4AF37]">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F0] border border-[#E8DFC8] flex items-center justify-center text-[#701325] group-hover:bg-[#701325] group-hover:text-[#D4AF37] transition-colors">
                    <Compass className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#2D2625] mb-3 group-hover:text-[#701325] transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-[#554946] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < 2 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-[#C5A059]">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={onRequestVisitClick}
            className="inline-flex items-center gap-3 bg-[#701325] hover:bg-[#580E1C] text-[#FAF8F5] px-8 py-4 rounded-md text-sm font-semibold tracking-wide uppercase transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 border border-[#D4AF37]/50"
          >
            <CalendarCheck className="w-5 h-5 text-[#D4AF37]" />
            <span>Request a Venue Visit</span>
          </button>
        </div>

      </div>
    </section>
  );
};
