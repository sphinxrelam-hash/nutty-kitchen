import React, { useState, useEffect } from 'react';
import { X, User, Heart, Check } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccountModal({ isOpen, onClose }: AccountModalProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'favorites'>('profile');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/45 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 transition-all"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto overscroll-contain bg-[#FAF8F5] rounded-2xl border border-[#EBE3D5] shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#7B6A56] hover:text-[#29221B] hover:bg-[#F1E9DC] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F3EADB] text-[#C5A059] flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-brand text-2xl font-medium text-[#29221B]">
                Connoisseur Club
              </h3>
              <p className="font-sans-brand text-xs text-[#7D6E5D]">
                Purnima's Kitchen Member Portal
              </p>
            </div>
          </div>

          {/* Clean Segmented Tab Control */}
          <div className="flex items-center p-1 bg-[#F1E9DC] rounded-lg text-xs font-sans-brand">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex-1 py-1.5 rounded-md font-medium transition-colors ${
                activeTab === 'profile' ? 'bg-white text-[#29221B] shadow-2xs' : 'text-[#6D5D4E]'
              }`}
            >
              Account
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`flex-1 py-1.5 rounded-md font-medium transition-colors ${
                activeTab === 'orders' ? 'bg-white text-[#29221B] shadow-2xs' : 'text-[#6D5D4E]'
              }`}
            >
              Past Boxes
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`flex-1 py-1.5 rounded-md font-medium transition-colors ${
                activeTab === 'favorites' ? 'bg-white text-[#29221B] shadow-2xs' : 'text-[#6D5D4E]'
              }`}
            >
              Favorites
            </button>
          </div>

          {activeTab === 'profile' && (
            <div className="space-y-4 text-xs font-sans-brand">
              <div className="space-y-1">
                <label className="text-[#5B4D3E] font-medium">Recipient Name</label>
                <input
                  type="text"
                  defaultValue="Arya Singhania"
                  className="w-full p-2.5 rounded border border-[#DFD3BF] bg-white text-[#29221B]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[#5B4D3E] font-medium">Email</label>
                <input
                  type="email"
                  defaultValue="arya.singhania@heritage.com"
                  className="w-full p-2.5 rounded border border-[#DFD3BF] bg-white text-[#29221B]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[#5B4D3E] font-medium">Default Delivery Address</label>
                <textarea
                  rows={2}
                  defaultValue="402 Nariman Point, Marine Drive, Mumbai, 400021"
                  className="w-full p-2.5 rounded border border-[#DFD3BF] bg-white text-[#29221B]"
                />
              </div>

              <button
                onClick={() => {
                  setIsSaved(true);
                  setTimeout(() => setIsSaved(false), 1600);
                }}
                className="w-full py-2.5 bg-[#FAF8F5] hover:bg-[#2B231C] text-[#2B231C] hover:text-[#FAF8F5] border border-[#C5A059] text-xs font-medium tracking-wider uppercase rounded transition-colors flex items-center justify-center gap-1.5"
              >
                {isSaved ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#557F48]" />
                    <span>Preferences Saved</span>
                  </>
                ) : (
                  <span>Save Member Details</span>
                )}
              </button>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="space-y-3 font-sans-brand text-xs">
              <div className="p-3 bg-white rounded-lg border border-[#E9E1D2] space-y-1">
                <div className="flex justify-between font-medium text-[#29221B]">
                  <span>Order #PK-8832</span>
                  <span className="font-mono">₹2,450</span>
                </div>
                <div className="text-[#7E6E5D]">The Purnima Grand Hamper (16 Pieces)</div>
                <div className="text-[11px] text-[#557F48] font-medium">Delivered · October 2, 2026</div>
              </div>
            </div>
          )}

          {activeTab === 'favorites' && (
            <div className="space-y-2 font-sans-brand text-xs text-[#6C5E4E]">
              <div className="p-3 bg-white rounded-lg border border-[#E9E1D2] flex justify-between items-center">
                <span>Shahi Roasted Besan & Pistachio Ladoo</span>
                <Heart className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#E9E1D2] flex justify-between items-center">
                <span>Afghani Fig & Wild Pecan Ladoo</span>
                <Heart className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
