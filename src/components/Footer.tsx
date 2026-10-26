import React from 'react';
import { Phone, Mail, MapPin, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  brandName: string;
  subtitle: string;
  location: string;
  phone: string;
  email: string;
  onOpenCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  brandName,
  subtitle,
  location,
  phone,
  email,
  onOpenCalculator,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F070C] text-[#FAF8F5] pt-16 pb-8 border-t-4 border-[#701325] relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#FAF8F5]/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold tracking-wider uppercase text-[#FAF8F5] block">
                {brandName}
              </span>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37] block">
                {subtitle}
              </span>
            </div>

            <p className="text-sm text-[#E8DFC8]/80 font-light leading-relaxed max-w-sm">
              An elegant, grand setting for unforgettable Indian weddings, royal receptions, engagements, and cherished family traditions in Katihar, Bihar.
            </p>

            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-white transition-colors pt-2 underline underline-offset-4"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Guest Capacity Estimator</span>
            </button>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#E8DFC8]/80">
              <li>
                <a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a>
              </li>
              <li>
                <a href="#welcome" className="hover:text-[#D4AF37] transition-colors">About Royal Palace</a>
              </li>
              <li>
                <a href="#our-venue" className="hover:text-[#D4AF37] transition-colors">Our Celebration Spaces</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-[#D4AF37] transition-colors">Venue Facilities</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#plan-visit" className="hover:text-[#D4AF37] transition-colors">Plan Your Visit</a>
              </li>
              <li>
                <a href="#enquiry" className="hover:text-[#D4AF37] transition-colors">Booking Enquiry</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-4">
              Venue Location & Inquiry
            </h4>

            <ul className="space-y-3 text-sm text-[#E8DFC8]/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{brandName}, {location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${phone}`} className="hover:text-[#D4AF37] transition-colors">
                  {phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-[#D4AF37] transition-colors">
                  {email}
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-xs text-[#E8DFC8]/60 font-light">
                Site visits available daily from 10:00 AM to 6:00 PM IST.
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Demo Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8DFC8]/60">
          <div>
            © {currentYear} {brandName}. All rights reserved.
          </div>

          {/* Mandatory Demo Concept Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FAF8F5]/10 border border-[#D4AF37]/30 text-[#D4AF37]">
            <Heart className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-semibold uppercase tracking-wider text-[11px]">
              Website demo concept
            </span>
          </div>
        </div>

      </div>

    </footer>
  );
};
