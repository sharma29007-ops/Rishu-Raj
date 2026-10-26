import React, { useState } from 'react';
import { initialVenueConfig, venueSpaces, venueFacilities, galleryItems } from './data/venueData';
import { OpeningSequence } from './components/OpeningSequence';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { EditorialIntroSection } from './components/EditorialIntroSection';
import { SignatureSpacesSection } from './components/SignatureSpacesSection';
import { ScrollStorytellingSection } from './components/ScrollStorytellingSection';
import { InteractiveGallerySection } from './components/InteractiveGallerySection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { CinematicCTASection } from './components/CinematicCTASection';
import { EnquiryFormSection } from './components/EnquiryFormSection';
import { FooterSection } from './components/FooterSection';
import { BrochureDownloadModal } from './components/BrochureDownloadModal';
import { VenueCalculatorModal } from './components/VenueCalculatorModal';
import { DemoCustomizerDrawer } from './components/DemoCustomizerDrawer';
import { Settings, Phone, Calendar } from 'lucide-react';

export default function App() {
  const [showOpeningSequence, setShowOpeningSequence] = useState(true);
  const [config, setConfig] = useState(initialVenueConfig);
  const [preselectedSpace, setPreselectedSpace] = useState<string | undefined>();
  
  // Modals
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireSpace = (spaceTitle: string) => {
    setPreselectedSpace(spaceTitle);
    scrollToSection('#enquiry');
  };

  const handleRequestVisit = () => {
    setPreselectedSpace('Venue Visit Request');
    scrollToSection('#enquiry');
  };

  const handleEnquirePackage = (packageName: string) => {
    setPreselectedSpace(`Package Enquiry: ${packageName}`);
    scrollToSection('#enquiry');
  };

  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#171615] selection:bg-[#651C32] selection:text-[#F7F3EC] relative font-sans">
      
      {/* 1. Cinematic Opening Experience */}
      {showOpeningSequence && (
        <OpeningSequence onComplete={() => setShowOpeningSequence(false)} />
      )}

      {/* 2. Custom Navigation Bar */}
      <Navigation
        onPlanVisitClick={handleRequestVisit}
      />

      {/* 3. Full-Screen Hero */}
      <HeroSection
        onDiscoverClick={() => scrollToSection('#introduction')}
        onPlanClick={handleRequestVisit}
      />

      {/* 4. Editorial Introduction Section */}
      <EditorialIntroSection />

      {/* 5. Signature Spaces (3 Immersive Image Sections) */}
      <SignatureSpacesSection
        spaces={venueSpaces}
        onEnquireSpace={handleEnquireSpace}
      />

      {/* 6. Scroll-Driven Storytelling Experience */}
      <ScrollStorytellingSection />

      {/* 7. Interactive Wedding Gallery with Lightbox */}
      <InteractiveGallerySection
        items={galleryItems}
      />

      {/* 8. Facilities — Minimal Interactive Editorial Design */}
      <FacilitiesSection
        facilities={venueFacilities}
      />

      {/* 9. Cinematic Call-To-Action Section */}
      <CinematicCTASection
        onEnquireClick={handleRequestVisit}
      />

      {/* 10. Premium Enquiry Form */}
      <EnquiryFormSection
        preselectedSpace={preselectedSpace}
      />

      {/* 11. Dark Elegant Footer */}
      <FooterSection
        brandName={config.brandName}
        subtitle={config.subtitle}
        location={config.location}
        phone={config.phone}
        email={config.email}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
      />

      {/* Floating Client Customizer Shortcut Button */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
        <button
          onClick={() => setIsCustomizerOpen(true)}
          className="bg-[#171615]/90 hover:bg-[#651C32] text-[#F7F3EC] p-3 rounded-full border border-[#C6A66B]/50 shadow-2xl transition-all hover:scale-105 flex items-center gap-2 text-xs font-mono"
          title="Open Live Client Demo Customizer"
        >
          <Settings className="w-4 h-4 text-[#C6A66B]" />
          <span className="hidden md:inline uppercase tracking-widest text-[10px]">Client Demo Mode</span>
        </button>
      </div>

      {/* Mobile Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-[#171615] border-t border-[#C6A66B]/30 px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href={`tel:${config.phone}`}
          className="flex-1 bg-[#F7F3EC] text-[#651C32] py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Venue</span>
        </a>

        <button
          onClick={handleRequestVisit}
          className="flex-1 bg-[#651C32] text-[#F7F3EC] py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 border border-[#C6A66B]/50 shadow"
        >
          <Calendar className="w-3.5 h-3.5 text-[#C6A66B]" />
          <span>Enquire Date</span>
        </button>
      </div>

      {/* Modals */}
      <BrochureDownloadModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        brandName={config.brandName}
        phone={config.phone}
        onEnquirePackage={handleEnquirePackage}
      />

      <VenueCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onApplyEstimate={(guestCount, note) => {
          setPreselectedSpace(`Estimate for ${guestCount}`);
          scrollToSection('#enquiry');
        }}
      />

      <DemoCustomizerDrawer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        config={config}
        onChange={(updated) => setConfig((prev) => ({ ...prev, ...updated }))}
        onReset={() => setConfig(initialVenueConfig)}
      />

    </div>
  );
}
