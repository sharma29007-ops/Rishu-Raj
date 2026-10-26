import React from 'react';
import { X, Download, Sparkles, Check, Phone, ShieldCheck, MapPin } from 'lucide-react';
import { weddingPackages } from '../data/venueData';

interface BrochureDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  brandName: string;
  phone: string;
  onEnquirePackage: (packageName: string) => void;
}

export const BrochureDownloadModal: React.FC<BrochureDownloadModalProps> = ({
  isOpen,
  onClose,
  brandName,
  phone,
  onEnquirePackage,
}) => {
  if (!isOpen) return null;

  const handleDownloadSample = () => {
    // Printable summary view trigger
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-[#E8DFC8] shadow-2xl relative text-[#2D2625]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#6B5E59] hover:text-[#701325] transition-colors rounded-full"
          aria-label="Close Brochure Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B8860B] block mb-1">
            Official Venue Overview
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#701325] mb-2">
            {brandName} Brochure & Packages
          </h3>
          <p className="text-xs text-[#554946]">
            Sample event package breakdowns for Katihar, Bihar. Customize these packages to match your family's event plan.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="space-y-6 mb-8">
          {weddingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-[#FFFFFF] p-6 rounded-xl border border-[#E8DFC8] shadow-sm hover:border-[#C5A059] transition-all flex flex-col sm:flex-row justify-between gap-6"
            >
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-2">
                  <h4 className="font-serif text-xl font-bold text-[#2D2625]">{pkg.name}</h4>
                  {pkg.badge && (
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#FAF7F0] text-[#701325] border border-[#D4AF37]/50">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                <div className="text-xs font-semibold text-[#B8860B]">
                  {pkg.subtitle} · <span className="text-[#2D2625]">{pkg.guestRange}</span>
                </div>

                <ul className="space-y-1.5 pt-1">
                  {pkg.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#554946]">
                      <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex sm:flex-col justify-end sm:justify-center items-end sm:items-center gap-2 border-t sm:border-t-0 sm:border-l border-[#F0E8D8] pt-4 sm:pt-0 sm:pl-6 shrink-0">
                <button
                  onClick={() => {
                    onEnquirePackage(pkg.name);
                    onClose();
                  }}
                  className="bg-[#701325] hover:bg-[#580E1C] text-[#FAF8F5] py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors border border-[#991B32] whitespace-nowrap"
                >
                  Enquire Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note and Download Trigger */}
        <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-[#554946]">
            <ShieldCheck className="w-4 h-4 text-[#701325] shrink-0" />
            <span>Demonstration sample brochure for client website review.</span>
          </div>

          <button
            onClick={handleDownloadSample}
            className="bg-[#FFFFFF] hover:bg-[#F5F0E6] text-[#701325] border border-[#C8B28B] px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shrink-0"
          >
            <Download className="w-4 h-4 text-[#C5A059]" />
            <span>Print / Save Summary</span>
          </button>
        </div>

      </div>
    </div>
  );
};
