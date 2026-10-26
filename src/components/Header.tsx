import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, FileText } from 'lucide-react';

interface HeaderProps {
  brandName: string;
  subtitle: string;
  onPlanVisitClick: () => void;
  onCustomizerClick: () => void;
  onBrochureClick: () => void;
  phone: string;
}

export const Header: React.FC<HeaderProps> = ({
  brandName,
  subtitle,
  onPlanVisitClick,
  onCustomizerClick,
  onBrochureClick,
  phone,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Venue', href: '#our-venue' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-md py-3 border-b border-[#E8DFC8]'
          : 'bg-gradient-to-b from-[#1F070C]/90 via-[#1F070C]/60 to-transparent py-5 text-[#FAF8F5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          
          {/* Zone 1: Brand Wordmark & Subtitle */}
          <a
            href="#home"
            className="group flex flex-col focus:outline-none focus:ring-2 focus:ring-[#C5A059] rounded-sm p-1 transition-transform duration-200 hover:scale-[1.01]"
          >
            <span
              className={`font-serif text-xl sm:text-2xl font-bold tracking-wider transition-colors uppercase ${
                isScrolled ? 'text-[#701325]' : 'text-[#FAF8F5] group-hover:text-[#D4AF37]'
              }`}
            >
              {brandName}
            </span>
            <span
              className={`text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-semibold transition-colors ${
                isScrolled ? 'text-[#B8860B]' : 'text-[#D4AF37]'
              }`}
            >
              {subtitle}
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap ${
                  isScrolled
                    ? 'text-[#2D2625] hover:text-[#701325]'
                    : 'text-[#FAF8F5]/90 hover:text-[#D4AF37]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            
            <button
              onClick={onBrochureClick}
              className={`text-xs px-3 py-2 rounded-md border transition-colors flex items-center gap-1.5 font-medium ${
                isScrolled
                  ? 'border-[#C8B28B] text-[#701325] hover:bg-[#F3EFE6]'
                  : 'border-[#D4AF37]/60 text-[#FAF8F5] hover:bg-white/10'
              }`}
              title="View Packages & Rate Card Brochure"
            >
              <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Brochure</span>
            </button>

            <button
              onClick={onCustomizerClick}
              className={`text-xs px-2.5 py-2 rounded-md border transition-colors hidden xl:flex items-center gap-1.5 ${
                isScrolled
                  ? 'border-[#C8B28B] text-[#701325] hover:bg-[#F3EFE6]'
                  : 'border-[#D4AF37]/50 text-[#FAF8F5] hover:bg-white/10'
              }`}
              title="Customize Venue Details for Client Demo"
            >
              <span>Demo Customizer</span>
            </button>

            <a
              href={`tel:${phone}`}
              className={`p-2.5 rounded-md border transition-colors ${
                isScrolled
                  ? 'border-[#E8DFC8] text-[#701325] hover:bg-[#701325] hover:text-white'
                  : 'border-[#FAF8F5]/30 text-[#FAF8F5] hover:bg-white/10'
              }`}
              aria-label="Call venue phone"
              title={`Call ${phone}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={onPlanVisitClick}
              className="bg-[#701325] hover:bg-[#580E1C] text-[#FAF8F5] px-4 py-2.5 rounded-md text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-md transition-all duration-200 flex items-center gap-2 border border-[#991B32] whitespace-nowrap active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>Plan Your Visit</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onBrochureClick}
              className="sm:hidden bg-[#FAF7F0] text-[#701325] border border-[#C8B28B] text-xs font-semibold uppercase px-2.5 py-1.5 rounded"
            >
              Packages
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled
                  ? 'text-[#2D2625] hover:bg-[#F3EFE6]'
                  : 'text-[#FAF8F5] hover:bg-white/10'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8DFC8] shadow-xl px-4 pt-4 pb-6 mt-3 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#2D2625] font-serif text-lg hover:text-[#701325] transition-colors py-1.5 border-b border-[#F0E8D8]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBrochureClick();
              }}
              className="w-full bg-[#FAF7F0] text-[#701325] border border-[#C8B28B] py-2.5 rounded-md text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#D4AF37]" />
              <span>View Packages & Brochure</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onPlanVisitClick();
              }}
              className="w-full bg-[#701325] hover:bg-[#580E1C] text-[#FAF8F5] py-3 rounded-md text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>Plan Your Visit</span>
            </button>

            <div className="flex items-center justify-between pt-2 text-xs text-[#6B5E59]">
              <span>Katihar, Bihar, India</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onCustomizerClick();
                }}
                className="text-[#701325] font-medium underline"
              >
                Demo Customize
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
