import React from 'react';
import { ShoppingBag, User } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenAccount: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({
  cartCount,
  onOpenCart,
  onOpenAccount,
  activeSection,
  onNavigate,
}: NavbarProps) {
  return (
    <header className="w-full bg-[#FAF8F5] transition-all">
      <div className="max-w-[1440px] mx-auto px-8 sm:px-14 lg:px-20 py-8 sm:py-10 flex items-center justify-between gap-8">
        
        {/* On the left: The brand name "Purnima's Nutty Kitchen" in a small, graceful, elegant serif font */}
        <button
          onClick={() => onNavigate('hero')}
          className="text-left group whitespace-nowrap shrink-0 transition-opacity hover:opacity-80"
        >
          <span className="font-serif-brand text-base sm:text-lg lg:text-[1.2rem] font-normal tracking-[0.04em] text-[#2C231B]">
            Purnima’s Nutty Kitchen
          </span>
        </button>

        {/* On the right: Simple, understated navigation links in a tiny, refined serif font alongside minimalist cart and user icon */}
        <div className="flex items-center gap-7 sm:gap-10 shrink-0">
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 font-serif-brand text-xs sm:text-[13px] tracking-[0.08em] text-[#A88C5E]">
            <button
              onClick={() => onNavigate('craft')}
              className={`hover:text-[#6C552D] transition-colors whitespace-nowrap ${
                activeSection === 'craft' ? 'text-[#6C552D] font-medium' : ''
              }`}
            >
              Our Craft
            </button>

            <button
              onClick={() => onNavigate('ladoos')}
              className={`hover:text-[#6C552D] transition-colors whitespace-nowrap ${
                activeSection === 'ladoos' ? 'text-[#6C552D] font-medium' : ''
              }`}
            >
              The Ladoos
            </button>

            <button
              onClick={() => onNavigate('gifting')}
              className={`hover:text-[#6C552D] transition-colors whitespace-nowrap ${
                activeSection === 'gifting' ? 'text-[#6C552D] font-medium' : ''
              }`}
            >
              Gifting
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className={`hover:text-[#6C552D] transition-colors whitespace-nowrap ${
                activeSection === 'contact' ? 'text-[#6C552D] font-medium' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Minimalist Cart & User Icons in a soft, muted gold-tone */}
          <div className="flex items-center gap-4 sm:gap-5 text-[#BFA26F]">
            <button
              onClick={onOpenAccount}
              className="p-1 hover:text-[#8E6F37] transition-colors"
              aria-label="Account"
              title="Account"
            >
              <User className="w-[17px] h-[17px] stroke-[1.25]" />
            </button>

            <button
              onClick={onOpenCart}
              className="p-1 hover:text-[#8E6F37] transition-colors relative"
              aria-label="Cart"
              title="Cart"
            >
              <ShoppingBag className="w-[17px] h-[17px] stroke-[1.25]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#BFA26F] text-white text-[9px] font-mono rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
