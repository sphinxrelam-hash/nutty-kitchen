import React, { useState } from 'react';
import { X, Send, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occasion: 'wedding',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-xl bg-[#FAF8F5] rounded-2xl border border-[#EBE3D5] shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#7B6A56] hover:text-[#29221B] hover:bg-[#F1E9DC] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#EDF5EA] text-[#4F8A3E] flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif-brand text-2xl font-medium text-[#29221B]">
              Message Received
            </h3>
            <p className="font-sans-brand text-sm text-[#6C5E4E] max-w-sm font-light">
              Purnima's kitchen concierge will reach out to you within 24 hours with custom tasting boxes and quotation.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#9A7D50] font-sans-brand font-medium">
                Concierge & Tasting Studio
              </span>
              <h3 className="font-serif-brand text-2xl sm:text-3xl font-medium text-[#29221B] mt-1">
                Begin a Bespoke Conversation
              </h3>
              <p className="font-sans-brand text-xs sm:text-sm text-[#6E6050] font-light mt-1.5">
                For grand Indian weddings, milestone celebrations, or customized corporate gift boxes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans-brand text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[#5B4D3E] font-medium">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Aditi Sharma"
                    className="w-full p-2.5 rounded border border-[#DFD3BF] bg-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#5B4D3E] font-medium">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="aditi@example.com"
                    className="w-full p-2.5 rounded border border-[#DFD3BF] bg-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[#5B4D3E] font-medium">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 234-5678"
                    className="w-full p-2.5 rounded border border-[#DFD3BF] bg-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#5B4D3E] font-medium">Celebration Type</label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full p-2.5 rounded border border-[#DFD3BF] bg-white focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="wedding">Royal Wedding Favors</option>
                    <option value="corporate">Executive Corporate Hampers</option>
                    <option value="diwali">Festive & Diwali Gifting</option>
                    <option value="custom">Private Tasting Consultation</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[#5B4D3E] font-medium">Special Notes / Quantity</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Estimated box quantity, destination cities, specific flavor choices or dietary requirements..."
                  className="w-full p-2.5 rounded border border-[#DFD3BF] bg-white focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#FAF8F5] hover:bg-[#2B231C] text-[#2B231C] hover:text-[#FAF8F5] border border-[#C5A059] hover:border-[#2B231C] text-xs font-medium tracking-[0.16em] uppercase rounded transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Transmit Inquiry to Kitchen</span>
                </button>
              </div>
            </form>

            <div className="pt-4 border-t border-[#ECE3D5] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#7A6B58] font-sans-brand">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Jaipur & San Francisco</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>+1 (800) 845-NUTTY</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>concierge@purnima.com</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
