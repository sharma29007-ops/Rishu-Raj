import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Sparkles, Heart } from 'lucide-react';

interface FooterSectionProps {
  brandName: string;
  subtitle: string;
  location: string;
  phone: string;
  email: string;
  onOpenCalculator: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  brandName,
  subtitle,
  location,
  phone,
  email,
  onOpenCalculator,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171615] text-[#F7F3EC] pt-20 pb-10 border-t border-[#C6A66B]/30 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Oversized Brand Typography Heading */}
        <div className="mb-16 pb-12 border-b border-[#F7F3EC]/10 text-center sm:text-left">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-widest text-[#F7F3EC] uppercase mb-2">
            ROYAL PALACE
          </h2>
          <p className="text-xs font-sans font-semibold tracking-[0.3em] uppercase text-[#C6A66B]">
            WEDDING LAWN & BANQUET · KATIHAR, BIHAR, INDIA
          </p>
        </div>

        {/* Footer Navigation & Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#F7F3EC]/10">
          
          {/* Col 1: Description */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm font-sans text-[#F7F3EC]/70 font-light leading-relaxed max-w-sm">
              An extraordinary setting for life's most meaningful Indian wedding celebrations, royal receptions, engagements, and cherished traditions in Katihar, Bihar.
            </p>

            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[#C6A66B] hover:text-white transition-colors underline underline-offset-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Launch Guest Capacity Calculator</span>
            </button>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C6A66B] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-sans text-[#F7F3EC]/70 uppercase tracking-wider">
              <li>
                <a href="#home" className="hover:text-[#C6A66B] transition-colors">Home</a>
              </li>
              <li>
                <a href="#introduction" className="hover:text-[#C6A66B] transition-colors">About The Venue</a>
              </li>
              <li>
                <a href="#signature-spaces" className="hover:text-[#C6A66B] transition-colors">Signature Spaces</a>
              </li>
              <li>
                <a href="#storytelling" className="hover:text-[#C6A66B] transition-colors">The Experience</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C6A66B] transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-[#C6A66B] transition-colors">Venue Facilities</a>
              </li>
              <li>
                <a href="#enquiry" className="hover:text-[#C6A66B] transition-colors">Date Enquiry</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#C6A66B] mb-4">
              Location & Contact
            </h4>

            <ul className="space-y-3 text-xs font-sans text-[#F7F3EC]/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
                <span>Royal Palace, Near NH-31 Bypass Road, Katihar, Bihar 854105, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C6A66B] shrink-0" />
                <a href={`tel:${phone}`} className="hover:text-[#C6A66B] transition-colors font-mono">
                  {phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C6A66B] shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-[#C6A66B] transition-colors">
                  {email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright & Concept Website Demo tag */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#F7F3EC]/50">
          <div>
            © {currentYear} {brandName} — Katihar, Bihar. All rights reserved.
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#C6A66B]/30 text-[#C6A66B]">
            <Heart className="w-3.5 h-3.5 text-[#C6A66B]" />
            <span className="font-bold text-[10px] uppercase tracking-widest">
              Concept Website Demo
            </span>
          </div>
        </div>

      </div>

    </footer>
  );
};
