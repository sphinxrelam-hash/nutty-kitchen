import React, { useState } from 'react';
import { Gift, Sparkles, Check, Send } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { LadooProduct } from '../types';

interface GiftingSectionProps {
  onAddToCart: (product: LadooProduct) => void;
  onOpenContact: () => void;
}

export default function GiftingSection({ onAddToCart, onOpenContact }: GiftingSectionProps) {
  const [selectedBox, setSelectedBox] = useState<'rigid-ivory' | 'keepsake-brass'>('rigid-ivory');
  const [added, setAdded] = useState(false);

  const grandHamper = PRODUCTS.find((p) => p.id === 'signature-grand-tasting-box') || PRODUCTS[0];

  const handleAddGiftBox = () => {
    onAddToCart(grandHamper);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section id="gifting" className="relative py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#EAE1D1]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Gift Box Architecture & Detail */}
          <div className="lg:col-span-6 bg-[#F4EDE2] rounded-2xl p-8 sm:p-12 border border-[#E4DAC8] flex flex-col items-center text-center relative overflow-hidden">
            {/* Ambient Gold Shimmer */}
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#E8D4B0]/40 blur-3xl pointer-events-none" />

            <div className="relative z-10 w-full max-w-md">
              {/* Box Presentation Preview */}
              <div className="aspect-[4/3] bg-[#FAF7F0] rounded-xl border border-[#DFD3BF] p-6 shadow-sm flex flex-col items-center justify-center mb-6 relative">
                
                {/* SVG Gift Box Representation */}
                <svg viewBox="0 0 280 200" className="w-full h-full max-h-[170px]" fill="none">
                  <defs>
                    <linearGradient id="gift-ivory" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#F1EAE0" />
                    </linearGradient>
                    <linearGradient id="gift-gold-ribbon" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F4DE9C" />
                      <stop offset="50%" stopColor="#C5A059" />
                      <stop offset="100%" stopColor="#A8813C" />
                    </linearGradient>
                  </defs>

                  {/* Rigid Box Base */}
                  <rect x="30" y="50" width="220" height="130" rx="8" fill="url(#gift-ivory)" stroke="#C5A059" strokeWidth="1.2" />
                  
                  {/* Gold Satin Ribbon Horizontal */}
                  <rect x="30" y="105" width="220" height="20" fill="url(#gift-gold-ribbon)" />
                  
                  {/* Gold Satin Ribbon Vertical */}
                  <rect x="130" y="50" width="20" height="130" fill="url(#gift-gold-ribbon)" />
                  
                  {/* Hand-Tied Ribbon Bow */}
                  <ellipse cx="125" cy="110" rx="20" ry="12" fill="url(#gift-gold-ribbon)" transform="rotate(-30 125 110)" />
                  <ellipse cx="155" cy="110" rx="20" ry="12" fill="url(#gift-gold-ribbon)" transform="rotate(30 155 110)" />
                  <circle cx="140" cy="115" r="9" fill="#9E7934" />
                  
                  {/* Monogram Gold Seal */}
                  <circle cx="140" cy="80" r="14" fill="#FAF7F0" stroke="#C5A059" strokeWidth="1.2" />
                  <text x="140" y="84" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="11" fill="#8F6C2C" fontWeight="bold">
                    PK
                  </text>
                </svg>

                <div className="text-xs font-serif-brand tracking-widest text-[#8F7449] uppercase">
                  Custom Rigid Ivory & Gold Keepsake Box
                </div>
              </div>

              {/* Box Customization Options */}
              <div className="grid grid-cols-2 gap-3 text-left">
                <button
                  onClick={() => setSelectedBox('rigid-ivory')}
                  className={`p-3 rounded-lg border text-xs font-sans-brand transition-all ${
                    selectedBox === 'rigid-ivory'
                      ? 'bg-white border-[#C5A059] shadow-xs text-[#29221B]'
                      : 'bg-white/60 border-[#E2D6C3] text-[#736453]'
                  }`}
                >
                  <div className="font-medium text-[#29221B]">Rigid Ivory Box</div>
                  <div className="text-[11px] text-[#8F7E6C]">Included with all boxes</div>
                </button>

                <button
                  onClick={() => setSelectedBox('keepsake-brass')}
                  className={`p-3 rounded-lg border text-xs font-sans-brand transition-all ${
                    selectedBox === 'keepsake-brass'
                      ? 'bg-white border-[#C5A059] shadow-xs text-[#29221B]'
                      : 'bg-white/60 border-[#E2D6C3] text-[#736453]'
                  }`}
                >
                  <div className="font-medium text-[#29221B]">Calligraphy Note</div>
                  <div className="text-[11px] text-[#8F7E6C]">Complimentary wax seal</div>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Gifting Details */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9A7D50] font-sans-brand font-medium">
              Bespoke Celebrations & Corporate
            </span>

            <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29221B] leading-tight">
              An Unforgettable Gesture of Pure Indian Grace.
            </h2>

            <p className="font-sans-brand text-base text-[#6F6050] font-light leading-relaxed">
              Whether celebrating a wedding, welcoming a newborn, honoring Diwali, or curating prestigious corporate appreciation hampers, Purnima’s Nutty Kitchen provides an experience of unhurried elegance.
            </p>

            {/* Inclusions List */}
            <div className="space-y-3.5 pt-2 font-sans-brand text-sm text-[#5B4E40]">
              <div className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Hand-tied double-faced silk satin ribbons in signature Champagne Gold</span>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Handwritten personalized calligraphy message card with traditional botanical wax seal</span>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Temperature-controlled premium courier dispatch direct to individual recipients worldwide</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={handleAddGiftBox}
                className="px-7 py-3.5 bg-[#FAF8F5] hover:bg-[#2B231C] text-[#2B231C] hover:text-[#FAF8F5] border border-[#C5A059] hover:border-[#2B231C] text-xs font-sans-brand font-medium tracking-[0.14em] uppercase transition-all shadow-xs flex items-center gap-2"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-[#557F48]" />
                    <span>Gift Box Added to Cart</span>
                  </>
                ) : (
                  <>
                    <Gift className="w-4 h-4 text-[#C5A059]" />
                    <span>Order Signature Hamper ({grandHamper.currency}{grandHamper.price.toLocaleString('en-IN')})</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 bg-transparent hover:bg-[#F2ECE0] text-[#715F4C] hover:text-[#29221B] text-xs font-sans-brand font-medium tracking-[0.12em] uppercase transition-colors flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Wedding & Corporate Inquiries</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
