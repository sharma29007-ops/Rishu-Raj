import React, { useState } from 'react';
import { X, Users, Calculator, Sparkles, Check, ArrowRight } from 'lucide-react';

interface VenueCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyEstimate: (guestCount: string, note: string) => void;
}

export const VenueCalculatorModal: React.FC<VenueCalculatorModalProps> = ({
  isOpen,
  onClose,
  onApplyEstimate,
}) => {
  const [guests, setGuests] = useState<number>(500);

  if (!isOpen) return null;

  // Calculate venue space requirements based on standard Indian wedding planner metrics
  const minLawnArea = Math.round(guests * 30); // ~30 sq ft per guest for seating + stage
  const parkingCapacity = Math.round(guests / 4); // ~4 guests per vehicle
  const diningCounters = Math.max(2, Math.ceil(guests / 200)); // ~1 counter per 200 guests

  const getRecommendedSpace = () => {
    if (guests <= 400) return 'The Grand Banquet Hall (AC Indoor)';
    if (guests <= 900) return 'The Wedding Lawn + Covered Dining Space';
    return 'Full Venue Combo (Outdoor Lawn + AC Banquet + Dining Pavilion)';
  };

  const handleApply = () => {
    const spaceRec = getRecommendedSpace();
    const note = `Calculated space estimate for ~${guests} guests: Needs ~${minLawnArea.toLocaleString()} sq.ft, ${parkingCapacity} parking spots, and ${diningCounters} buffet counters. Recommended space: ${spaceRec}.`;
    onApplyEstimate(`${guests} Guests`, note);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-[#E8DFC8] shadow-2xl relative text-[#2D2625]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#6B5E59] hover:text-[#701325] transition-colors rounded-full"
          aria-label="Close Calculator"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-[#701325] text-[#D4AF37] flex items-center justify-center">
            <Calculator className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#B8860B]">
            Interactive Event Planner Tool
          </span>
        </div>

        <h3 className="font-serif text-2xl font-bold text-[#2D2625] mb-2">
          Space & Capacity Estimator
        </h3>

        <p className="text-xs text-[#554946] mb-6">
          Adjust the slider to see how Royal Palace Wedding Lawn & Banquet accommodates your anticipated guest gathering in Katihar.
        </p>

        {/* Guest Slider */}
        <div className="bg-[#FFFFFF] p-5 rounded-xl border border-[#E8DFC8] mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D2625] flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#701325]" />
              <span>Estimated Guests</span>
            </span>
            <span className="font-serif text-2xl font-bold text-[#701325]">
              {guests} <span className="text-xs font-sans text-[#554946] font-normal">Guests</span>
            </span>
          </div>

          <input
            type="range"
            min="100"
            max="1800"
            step="50"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value, 10))}
            className="w-full accent-[#701325] cursor-pointer h-2 bg-[#E8DFC8] rounded-lg"
          />

          <div className="flex justify-between text-[10px] text-[#6B5E59] font-medium mt-1">
            <span>100 Intimate</span>
            <span>800 Grand</span>
            <span>1,800+ Mega Wedding</span>
          </div>
        </div>

        {/* Requirements Breakdown */}
        <div className="space-y-3 mb-6 text-xs">
          
          <div className="p-3 rounded-lg bg-[#FAF7F0] border border-[#E8DFC8] flex items-center justify-between">
            <span className="text-[#554946]">Recommended Space:</span>
            <span className="font-bold text-[#701325] text-right">{getRecommendedSpace()}</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#E8DFC8]">
              <span className="text-[10px] text-[#6B5E59] uppercase block font-semibold">Min. Space Required</span>
              <span className="font-bold text-[#2D2625] text-sm">~{minLawnArea.toLocaleString()} sq. ft.</span>
            </div>

            <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#E8DFC8]">
              <span className="text-[10px] text-[#6B5E59] uppercase block font-semibold">Vehicle Parking</span>
              <span className="font-bold text-[#2D2625] text-sm">~{parkingCapacity} Parking Slots</span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#E8DFC8] flex items-center justify-between">
            <span className="text-[#554946]">Suggested Dining Counters:</span>
            <span className="font-bold text-[#2D2625]">{diningCounters} Multi-Cuisine Buffets</span>
          </div>

        </div>

        {/* Action Button */}
        <button
          onClick={handleApply}
          className="w-full bg-[#701325] hover:bg-[#580E1C] text-[#FAF8F5] py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-[#991B32]"
        >
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>Apply Estimate to Enquiry Form</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};
