import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, ExternalLink, Clock, Copy, Check } from 'lucide-react';

interface ContactSectionProps {
  venueName: string;
  subtitle: string;
  location: string;
  fullAddress: string;
  phone: string;
  whatsappPhone: string;
  email: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  venueName,
  subtitle,
  location,
  fullAddress,
  phone,
  whatsappPhone,
  email,
}) => {
  const [copied, setCopied] = useState(false);

  const copyContact = () => {
    navigator.clipboard.writeText(`${venueName}, ${location} | Phone: ${phone}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8860B] block mb-2">
            Location & Contact
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D2625] mb-4">
            Visit & Connect With Us
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mb-6" />
          <p className="text-base text-[#554946]">
            Located conveniently in Katihar, Bihar. We welcome your calls, WhatsApp messages, and in-person visits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Cards Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#E8DFC8] shadow-sm space-y-6">
              
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#B8860B] block mb-1">
                  {subtitle}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#2D2625] mb-2">
                  {venueName}
                </h3>
                <p className="text-xs text-[#6B5E59] italic mb-4">
                  (Sample demonstration contact details for client preview)
                </p>
                <div className="w-12 h-0.5 bg-[#E8DFC8]" />
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] border border-[#D4AF37]/30 flex items-center justify-center text-[#701325] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D2625]">Location</h4>
                  <p className="text-sm text-[#554946] font-medium">{location}</p>
                  <p className="text-xs text-[#6B5E59] mt-0.5">{fullAddress}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] border border-[#D4AF37]/30 flex items-center justify-center text-[#701325] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D2625]">Phone Inquiry</h4>
                  <a href={`tel:${phone}`} className="text-sm text-[#701325] font-bold hover:underline">
                    {phone}
                  </a>
                  <p className="text-xs text-[#6B5E59]">Available 9:00 AM - 8:00 PM IST</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] border border-[#D4AF37]/30 flex items-center justify-center text-[#701325] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D2625]">Email Address</h4>
                  <a href={`mailto:${email}`} className="text-sm text-[#701325] font-semibold hover:underline">
                    {email}
                  </a>
                  <p className="text-xs text-[#6B5E59]">Sample inquiry inbox</p>
                </div>
              </div>

              {/* Visiting Hours */}
              <div className="flex items-start gap-4 pt-2 border-t border-[#F0E8D8]">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F0] border border-[#D4AF37]/30 flex items-center justify-center text-[#701325] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D2625]">Site Tour Timings</h4>
                  <p className="text-sm text-[#554946]">Monday - Sunday: 10:00 AM to 6:00 PM</p>
                  <p className="text-xs text-[#6B5E59]">Prior appointment recommended</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <a
                  href={`tel:${phone}`}
                  className="bg-[#701325] hover:bg-[#580E1C] text-[#FAF8F5] py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-[#991B32]"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Call Venue</span>
                </a>

                <a
                  href={`https://wa.me/${whatsappPhone}?text=Hello%2C%20I%20am%20interested%20in%20inquiring%20about%20booking%20Royal%20Palace%20Wedding%20Lawn%20in%20Katihar.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#1EBE5A] text-white py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Copy Info Button */}
              <button
                onClick={copyContact}
                className="w-full text-xs text-[#6B5E59] hover:text-[#701325] transition-colors flex items-center justify-center gap-1.5 pt-2"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Contact Info!' : 'Copy Venue Contact Summary'}</span>
              </button>

            </div>

          </div>

          {/* Map Area Placeholder */}
          <div className="lg:col-span-7 h-full min-h-[420px]">
            <div className="bg-[#FFFFFF] rounded-2xl border border-[#E8DFC8] shadow-sm p-4 sm:p-6 h-full flex flex-col justify-between">
              
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F0E8D8]">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2D2625]">
                    Sample Venue Map Area
                  </h3>
                  <p className="text-xs text-[#6B5E59]">
                    Demonstration Location Placeholder for Katihar, Bihar
                  </p>
                </div>
                <span className="text-[10px] font-semibold uppercase px-2.5 py-1 rounded bg-[#F5F0E6] text-[#701325] border border-[#E0D5BE]">
                  Sample Map
                </span>
              </div>

              {/* Realistic Map Placeholder Frame */}
              <div className="relative w-full h-[320px] rounded-xl overflow-hidden bg-[#EAE5D9] border border-[#E0D5BE] flex flex-col items-center justify-center p-6 text-center group">
                
                {/* Decorative Map Styling background SVG */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2D2625_1px,transparent_1px)] [background-size:20px_20px]" />
                
                {/* Map roads vector simulation */}
                <svg className="absolute inset-0 w-full h-full stroke-[#C5A059]/40 fill-none" strokeWidth="2">
                  <path d="M0,100 Q 150,120 300,80 T 600,150 T 900,100" />
                  <path d="M120,0 Q 140,200 200,400" />
                  <path d="M400,0 Q 380,250 450,400" />
                </svg>

                {/* Map Pin Marker */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-[#701325] text-[#D4AF37] border-4 border-white shadow-xl flex items-center justify-center mb-3 animate-bounce">
                  <MapPin className="w-7 h-7" />
                </div>

                <div className="relative z-10 bg-white/95 backdrop-blur-md px-5 py-3 rounded-lg border border-[#E8DFC8] shadow-md max-w-sm">
                  <h4 className="font-serif text-base font-bold text-[#701325]">{venueName}</h4>
                  <p className="text-xs text-[#554946] font-medium">{location}</p>
                  <p className="text-[11px] text-[#6B5E59] mt-1 italic">
                    (Interactive Google Map embed will display real pin here on production launch)
                  </p>
                </div>

                <a
                  href={`https://maps.google.com/?q=Katihar+Bihar+India`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase text-[#701325] bg-white px-3.5 py-1.5 rounded-full border border-[#C5A059] shadow hover:bg-[#FAF7F0] transition-colors"
                >
                  <span>Open Katihar Region Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

              </div>

              <div className="mt-4 text-xs text-[#6B5E59] text-center">
                Easily replace this placeholder map with your venue's Google Maps Embed API key or location iframe.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
