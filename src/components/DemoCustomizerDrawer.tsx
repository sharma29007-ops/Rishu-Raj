import React from 'react';
import { X, Settings, RotateCcw, Sparkles, Check } from 'lucide-react';

interface DemoCustomizerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  config: {
    brandName: string;
    subtitle: string;
    location: string;
    phone: string;
    email: string;
  };
  onChange: (updated: Partial<DemoCustomizerDrawerProps['config']>) => void;
  onReset: () => void;
}

export const DemoCustomizerDrawer: React.FC<DemoCustomizerDrawerProps> = ({
  isOpen,
  onClose,
  config,
  onChange,
  onReset,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] max-w-md w-full h-full p-6 border-l border-[#E8DFC8] shadow-2xl overflow-y-auto flex flex-col justify-between text-[#2D2625]">
        
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E8DFC8] mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#701325] text-[#D4AF37] flex items-center justify-center">
                <Settings className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2D2625]">Client Demo Mode</h3>
                <p className="text-[10px] text-[#6B5E59]">Customize text live to present to prospective clients</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#6B5E59] hover:text-[#701325] transition-colors rounded-full"
              aria-label="Close Customizer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Fields for Live Customization */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2625] mb-1">
                Venue Brand Name
              </label>
              <input
                type="text"
                value={config.brandName}
                onChange={(e) => onChange({ brandName: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#E0D5BE] text-sm bg-white focus:outline-none focus:border-[#701325]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2625] mb-1">
                Venue Subtitle
              </label>
              <input
                type="text"
                value={config.subtitle}
                onChange={(e) => onChange({ subtitle: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#E0D5BE] text-sm bg-white focus:outline-none focus:border-[#701325]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2625] mb-1">
                City & State Location
              </label>
              <input
                type="text"
                value={config.location}
                onChange={(e) => onChange({ location: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#E0D5BE] text-sm bg-white focus:outline-none focus:border-[#701325]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2625] mb-1">
                Venue Phone Number
              </label>
              <input
                type="text"
                value={config.phone}
                onChange={(e) => onChange({ phone: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#E0D5BE] text-sm bg-white focus:outline-none focus:border-[#701325]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#2D2625] mb-1">
                Inquiry Email Address
              </label>
              <input
                type="email"
                value={config.email}
                onChange={(e) => onChange({ email: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#E0D5BE] text-sm bg-white focus:outline-none focus:border-[#701325]"
              />
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-[#FAF7F0] border border-[#E8DFC8] text-xs text-[#554946] space-y-1">
            <span className="font-bold text-[#701325] block">Tip for Web Designers:</span>
            <p>You can change these fields during a client walkthrough to show how quickly their real venue branding adapts to this layout.</p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-[#E8DFC8] space-y-2">
          <button
            onClick={onReset}
            className="w-full border border-[#C8B28B] hover:bg-[#F3EFE6] text-[#701325] py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Default Katihar Venue Data</span>
          </button>

          <button
            onClick={onClose}
            className="w-full bg-[#701325] hover:bg-[#580E1C] text-[#FAF8F5] py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4 text-[#D4AF37]" />
            <span>Apply Changes & Close</span>
          </button>
        </div>

      </div>
    </div>
  );
};
