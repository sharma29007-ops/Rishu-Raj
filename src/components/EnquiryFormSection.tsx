import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Info, Calendar, Users, Phone, User, MessageSquare } from 'lucide-react';

interface EnquiryFormSectionProps {
  preselectedSpace?: string;
}

export const EnquiryFormSection: React.FC<EnquiryFormSectionProps> = ({ preselectedSpace }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    eventType: 'Wedding Ceremony',
    preferredDate: '',
    guestCount: '300 - 500 Guests',
    message: preselectedSpace ? `Interested in booking/inquiring about ${preselectedSpace}.` : '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required.';
    } else {
      const clean = formData.phoneNumber.replace(/\D/g, '');
      if (clean.length < 10) {
        newErrors.phoneNumber = 'Please enter a valid 10-digit mobile number.';
      }
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select your event date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowConfirmation(true);
    }, 600);
  };

  return (
    <section id="enquiry" className="py-28 md:py-36 bg-[#F7F3EC] text-[#171615] relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-[#C6A66B] mb-3"
          >
            RESERVATIONS & AVAILABILITY
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl font-normal text-[#171615]"
          >
            Inquire About Your Date
          </motion.h2>
          <div className="w-16 h-0.5 bg-[#C6A66B] mx-auto mt-6" />
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl border border-[#C6A66B]/30 shadow-2xl p-8 sm:p-12 relative overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Name */}
              <div>
                <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#171615] mb-2 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#651C32]" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: '' });
                  }}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-4 py-3.5 rounded-xl border text-sm text-[#171615] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                    errors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-[#171615]/15 focus:border-[#C6A66B] focus:ring-[#C6A66B]/20'
                  }`}
                  required
                />
                {errors.fullName && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#171615] mb-2 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#651C32]" />
                  <span>Phone Number *</span>
                </label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => {
                    setFormData({ ...formData, phoneNumber: e.target.value });
                    if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                  }}
                  placeholder="e.g. +91 98765 43210"
                  className={`w-full px-4 py-3.5 rounded-xl border text-sm text-[#171615] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                    errors.phoneNumber ? 'border-red-500 focus:ring-red-200' : 'border-[#171615]/15 focus:border-[#C6A66B] focus:ring-[#C6A66B]/20'
                  }`}
                  required
                />
                {errors.phoneNumber && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.phoneNumber}</span>
                  </p>
                )}
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#171615] mb-2">
                  Event Type
                </label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-[#171615]/15 text-sm text-[#171615] bg-[#FAF8F5] focus:bg-white focus:border-[#C6A66B] focus:ring-2 focus:ring-[#C6A66B]/20 focus:outline-none transition-all"
                >
                  <option value="Wedding Ceremony">Wedding Ceremony</option>
                  <option value="Wedding Reception">Wedding Reception</option>
                  <option value="Engagement Ceremony">Engagement Ceremony</option>
                  <option value="Sangeet & Mehendi">Sangeet & Mehendi</option>
                  <option value="Anniversary">Anniversary Celebration</option>
                  <option value="Other">Other Family Celebration</option>
                </select>
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#171615] mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#651C32]" />
                  <span>Preferred Event Date *</span>
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => {
                    setFormData({ ...formData, preferredDate: e.target.value });
                    if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                  }}
                  className={`w-full px-4 py-3.5 rounded-xl border text-sm text-[#171615] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                    errors.preferredDate ? 'border-red-500 focus:ring-red-200' : 'border-[#171615]/15 focus:border-[#C6A66B] focus:ring-[#C6A66B]/20'
                  }`}
                  required
                />
                {errors.preferredDate && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.preferredDate}</span>
                  </p>
                )}
              </div>

            </div>

            {/* Guest Count */}
            <div>
              <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#171615] mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#651C32]" />
                <span>Approximate Guest Count</span>
              </label>
              <select
                value={formData.guestCount}
                onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-[#171615]/15 text-sm text-[#171615] bg-[#FAF8F5] focus:bg-white focus:border-[#C6A66B] focus:ring-2 focus:ring-[#C6A66B]/20 focus:outline-none transition-all"
              >
                <option value="Under 300 Guests">Under 300 Guests</option>
                <option value="300 - 500 Guests">300 - 500 Guests</option>
                <option value="500 - 800 Guests">500 - 800 Guests</option>
                <option value="800 - 1200 Guests">800 - 1200 Guests</option>
                <option value="1200+ Guests">1200+ Guests</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-sans font-bold uppercase tracking-wider text-[#171615] mb-2 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#651C32]" />
                <span>Special Requirements or Message</span>
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention any specific lawn, AC banquet, or catering requirements..."
                className="w-full px-4 py-3.5 rounded-xl border border-[#171615]/15 text-sm text-[#171615] bg-[#FAF8F5] focus:bg-white focus:border-[#C6A66B] focus:ring-2 focus:ring-[#C6A66B]/20 focus:outline-none transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#651C32] hover:bg-[#4D1426] text-[#F7F3EC] py-4 rounded-xl text-xs font-sans font-bold uppercase tracking-[0.2em] shadow-xl transition-all duration-300 flex items-center justify-center gap-2 border border-[#C6A66B]/50 cursor-pointer active:scale-[0.99] disabled:opacity-70"
            >
              {isSubmitting ? (
                <span>Validating Submission...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#C6A66B]" />
                  <span>SUBMIT ENQUIRY</span>
                </>
              )}
            </button>

            <p className="text-center text-xs text-[#171615]/50 mt-2">
              Demonstration concept form. Validates client inputs in demo mode.
            </p>

          </form>
        </motion.div>

      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#F7F3EC] rounded-2xl max-w-md w-full p-8 text-center border border-[#C6A66B]/40 shadow-2xl relative text-[#171615]"
            >
              <div className="w-16 h-16 rounded-full bg-[#651C32] text-[#C6A66B] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#651C32] mb-2">
                Enquiry Validated
              </h3>

              <p className="text-sm text-[#171615]/80 mb-4 leading-relaxed font-light">
                Thank you, <strong className="text-[#651C32]">{formData.fullName}</strong>. Your test enquiry for <strong className="text-[#651C32]">{formData.eventType}</strong> on <strong className="text-[#651C32]">{formData.preferredDate}</strong> was successfully submitted in demo mode.
              </p>

              <div className="p-3 bg-white rounded-xl border border-[#C6A66B]/30 text-xs text-[#171615]/70 mb-6 flex items-start gap-2 text-left">
                <Info className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
                <span>
                  <strong>Demonstration Note:</strong> This is a concept website. No actual email or message was delivered to a real venue server.
                </span>
              </div>

              <button
                onClick={() => {
                  setShowConfirmation(false);
                  setFormData({
                    fullName: '',
                    phoneNumber: '',
                    eventType: 'Wedding Ceremony',
                    preferredDate: '',
                    guestCount: '300 - 500 Guests',
                    message: '',
                  });
                }}
                className="w-full bg-[#651C32] text-[#F7F3EC] py-3.5 rounded-full font-sans font-bold text-xs uppercase tracking-wider"
              >
                CLOSE WINDOW
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
