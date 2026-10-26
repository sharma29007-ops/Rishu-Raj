import React, { useState } from 'react';
import { MapPin, ArrowRight, Sparkles, ShieldCheck, Users, TreePine, Calendar, Search } from 'lucide-react';

interface HeroProps {
  headline: string;
  subtext: string;
  location: string;
  onExploreClick: () => void;
  onEnquireClick: () => void;
  onCheckDateAvailability: (date: string, guests: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  headline,
  subtext,
  location,
  onExploreClick,
  onEnquireClick,
  onCheckDateAvailability,
}) => {
  const [quickDate, setQuickDate] = useState('');
  const [quickGuests, setQuickGuests] = useState('300 - 500 Guests');

  // Direct high resolution Unsplash photo of grand Indian wedding lawn festoons at dusk
  const heroImageUrl = "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=85";

  const handleQuickCheck = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckDateAvailability(quickDate, quickGuests);
  };

  return (
    <section id="home" className="relative min-h-[94vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Photography with Scrim for Contrast */}
      <div className="absolute inset-0 z-0 bg-[#1F070C]">
        <img
          src={heroImageUrl}
          alt="Royal Palace Wedding Lawn illuminated at dusk"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-out brightness-[0.80]"
          referrerPolicy="no-referrer"
        />
        {/* Layered Gradient Overlay Scrim for 4.5:1 WCAG Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F070C] via-[#1F070C]/60 to-[#1F070C]/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(31,7,12,0.65)_100%)]" />
      </div>

      {/* Decorative Golden Corner Accents */}
      <div className="absolute top-24 left-8 hidden lg:block w-16 h-16 border-t-2 border-l-2 border-[#D4AF37]/60 pointer-events-none" />
      <div className="absolute top-24 right-8 hidden lg:block w-16 h-16 border-t-2 border-r-2 border-[#D4AF37]/60 pointer-events-none" />

      {/* Main Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#FAF8F5] my-auto">
        
        {/* Location & Trust Tag Line */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF8F5]/10 backdrop-blur-md border border-[#D4AF37]/50 mb-6 text-xs sm:text-sm font-medium tracking-widest uppercase text-[#D4AF37]">
          <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{location}</span>
          <span className="opacity-40">|</span>
          <span className="text-[#FAF8F5]">Premier Wedding Venue</span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF8F5] max-w-4xl mx-auto leading-[1.12] mb-6 drop-shadow-md text-wrap-balance">
          {headline}
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-[#E8DFC8] max-w-2xl mx-auto font-light leading-relaxed mb-8 drop-shadow">
          {subtext}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto bg-[#FAF8F5] hover:bg-white text-[#701325] px-7 py-3.5 rounded-md text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2 group"
          >
            <span>Explore Our Venue</span>
            <ArrowRight className="w-4 h-4 text-[#701325] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onEnquireClick}
            className="w-full sm:w-auto bg-[#701325] hover:bg-[#580E1C] text-[#FAF8F5] px-7 py-3.5 rounded-md text-xs sm:text-sm font-bold tracking-wider uppercase border border-[#D4AF37]/70 transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Enquire for Your Date</span>
          </button>
        </div>

        {/* Quick Date Availability Check Bar */}
        <div className="max-w-3xl mx-auto bg-[#FAF8F5]/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-[#D4AF37]/50 shadow-2xl text-[#2D2625] mb-10 text-left">
          <form onSubmit={handleQuickCheck} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            
            <div className="sm:col-span-5">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#701325] mb-1 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>Event Date</span>
              </label>
              <input
                type="date"
                value={quickDate}
                onChange={(e) => setQuickDate(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#E0D5BE] text-xs text-[#2D2625] bg-white focus:outline-none focus:border-[#701325]"
                required
              />
            </div>

            <div className="sm:col-span-4">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#701325] mb-1 flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>Guest Count</span>
              </label>
              <select
                value={quickGuests}
                onChange={(e) => setQuickGuests(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#E0D5BE] text-xs text-[#2D2625] bg-white focus:outline-none focus:border-[#701325]"
              >
                <option value="Under 300 Guests">Under 300 Guests</option>
                <option value="300 - 500 Guests">300 - 500 Guests</option>
                <option value="500 - 800 Guests">500 - 800 Guests</option>
                <option value="800 - 1200 Guests">800 - 1200 Guests</option>
                <option value="1200+ Guests">1200+ Guests</option>
              </select>
            </div>

            <div className="sm:col-span-3 pt-2 sm:pt-0">
              <button
                type="submit"
                className="w-full bg-[#701325] hover:bg-[#580E1C] text-[#FAF8F5] py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow"
              >
                <Search className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Check Date</span>
              </button>
            </div>

          </form>
        </div>

        {/* Quick Venue Specs Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4 border-t border-[#FAF8F5]/20 text-left">
          <div className="p-3 rounded-lg bg-[#FAF8F5]/10 backdrop-blur-sm border border-[#FAF8F5]/10 flex items-start gap-3">
            <Users className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div>
              <div className="text-[10px] uppercase text-[#D4AF37] font-semibold">Total Capacity</div>
              <div className="text-xs sm:text-sm font-medium text-[#FAF8F5]">Up to 1,500 Guests</div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#FAF8F5]/10 backdrop-blur-sm border border-[#FAF8F5]/10 flex items-start gap-3">
            <TreePine className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div>
              <div className="text-[10px] uppercase text-[#D4AF37] font-semibold">Lawn Area</div>
              <div className="text-xs sm:text-sm font-medium text-[#FAF8F5]">25,000 sq. ft.</div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#FAF8F5]/10 backdrop-blur-sm border border-[#FAF8F5]/10 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div>
              <div className="text-[10px] uppercase text-[#D4AF37] font-semibold">Banquet Hall</div>
              <div className="text-xs sm:text-sm font-medium text-[#FAF8F5]">Full Centralized AC</div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#FAF8F5]/10 backdrop-blur-sm border border-[#FAF8F5]/10 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
            <div>
              <div className="text-[10px] uppercase text-[#D4AF37] font-semibold">Parking Area</div>
              <div className="text-xs sm:text-sm font-medium text-[#FAF8F5]">150+ Four-Wheelers</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
