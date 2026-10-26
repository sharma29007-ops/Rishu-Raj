import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Calendar, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  onPlanVisitClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onPlanVisitClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Venue', href: '#introduction', number: '01' },
    { name: 'Spaces', href: '#signature-spaces', number: '02' },
    { name: 'Gallery', href: '#gallery', number: '03' },
    { name: 'Experience', href: '#storytelling', number: '04' },
    { name: 'Contact', href: '#enquiry', number: '05' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Motion variants for mobile menu overlay container & staggered children
  const overlayVariants = {
    closed: {
      y: '-100%',
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        when: 'afterChildren',
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { y: 35, opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F7F3EC]/95 backdrop-blur-md shadow-sm py-4 border-b border-[#C6A66B]/20 text-[#171615]'
            : 'bg-gradient-to-b from-[#171615]/80 via-[#171615]/40 to-transparent py-6 text-[#F7F3EC]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between gap-8">
          
          {/* Left: Brand Wordmark */}
          <a
            href="#home"
            className="group flex flex-col focus:outline-none transition-transform duration-300 hover:scale-[1.01]"
          >
            <span
              className={`font-serif text-xl sm:text-2xl font-bold tracking-[0.15em] uppercase transition-colors ${
                isScrolled ? 'text-[#651C32]' : 'text-[#F7F3EC] group-hover:text-[#C6A66B]'
              }`}
            >
              ROYAL PALACE
            </span>
            <span
              className={`text-[8px] sm:text-[9px] tracking-[0.3em] uppercase font-sans font-semibold transition-colors ${
                isScrolled ? 'text-[#C6A66B]' : 'text-[#C6A66B]'
              }`}
            >
              KATIHAR · BIHAR
            </span>
          </a>

          {/* Centre: Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-sans font-semibold uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative py-1 transition-colors duration-200 group ${
                  isScrolled
                    ? 'text-[#171615] hover:text-[#651C32]'
                    : 'text-[#F7F3EC]/90 hover:text-[#C6A66B]'
                }`}
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C6A66B] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right: Plan A Visit CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onPlanVisitClick}
              className={`px-5 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-[0.15em] transition-all duration-300 flex items-center gap-2 shadow-sm border ${
                isScrolled
                  ? 'bg-[#651C32] text-[#F7F3EC] border-[#651C32] hover:bg-[#4D1426]'
                  : 'bg-[#F7F3EC] text-[#651C32] border-[#F7F3EC] hover:bg-white hover:text-[#651C32]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-[#C6A66B]" />
              <span>PLAN A VISIT</span>
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-full md:hidden transition-colors ${
              isScrolled ? 'text-[#171615] hover:bg-[#C6A66B]/10' : 'text-[#F7F3EC] hover:bg-white/10'
            }`}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </motion.header>

      {/* Full Screen Cinematic Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-50 bg-[#171615] text-[#F7F3EC] flex flex-col justify-between p-8 sm:p-12 md:hidden overflow-y-auto"
          >
            {/* Header Lockup */}
            <motion.div variants={itemVariants} className="flex items-center justify-between border-b border-[#C6A66B]/30 pb-4">
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-widest text-[#C6A66B]">
                  ROYAL PALACE
                </span>
                <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-[#F7F3EC]/70">
                  WEDDING LAWN & BANQUET
                </span>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#F7F3EC] hover:text-[#C6A66B] rounded-full bg-white/5 border border-[#C6A66B]/30"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-[#C6A66B]" />
              </button>
            </motion.div>

            {/* Staggered Navigation Links */}
            <nav className="my-auto py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={itemVariants}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-serif text-3xl sm:text-4xl text-[#F7F3EC] hover:text-[#C6A66B] transition-colors flex items-center justify-between border-b border-[#F7F3EC]/10 pb-4 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#C6A66B] font-bold">{link.number}</span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-[#C6A66B] group-hover:rotate-45 transition-transform duration-300" />
                </motion.a>
              ))}
            </nav>

            {/* Staggered Actions Footer */}
            <motion.div variants={itemVariants} className="pt-4 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onPlanVisitClick();
                }}
                className="w-full bg-[#651C32] hover:bg-[#4D1426] text-[#F7F3EC] py-4 rounded-full text-xs font-sans font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 border border-[#C6A66B] shadow-lg active:scale-95 transition-all"
              >
                <Calendar className="w-4 h-4 text-[#C6A66B]" />
                <span>PLAN YOUR VISIT</span>
              </button>

              <div className="text-center text-[10px] uppercase tracking-[0.25em] text-[#C6A66B] font-mono">
                Katihar, Bihar, India · Luxury Venue
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
