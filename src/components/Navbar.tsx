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
        
        {/* On the left: The brand name "Purnima's Nutty Kitchen" in a graceful, elegant serif font */}
        <button
          onClick={() => onNavigate('hero')}
          className="text-left group whitespace-nowrap shrink-0 transition-opacity hover:opacity-85"
        >
          <span className="font-serif-brand text-lg sm:text-xl lg:text-[1.35rem] font-medium tracking-[0.03em] text-[#1E1711]">
            Purnima’s Nutty Kitchen
          </span>
        </button>

        {/* On the right: Understated navigation links with enhanced contrast and refined serif typography */}
        <div className="flex items-center gap-7 sm:gap-10 shrink-0">
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 font-serif-brand text-sm sm:text-[15px] tracking-[0.06em] text-[#544331]">
            <button
              onClick={() => onNavigate('craft')}
              className={`hover:text-[#916E2E] transition-colors whitespace-nowrap py-1 ${
                activeSection === 'craft' ? 'text-[#916E2E] font-semibold' : 'font-normal'
              }`}
            >
              Our Craft
            </button>

            <button
              onClick={() => onNavigate('ladoos')}
              className={`hover:text-[#916E2E] transition-colors whitespace-nowrap py-1 ${
                activeSection === 'ladoos' ? 'text-[#916E2E] font-semibold' : 'font-normal'
              }`}
            >
              The Ladoos
            </button>

            <button
              onClick={() => onNavigate('gifting')}
              className={`hover:text-[#916E2E] transition-colors whitespace-nowrap py-1 ${
                activeSection === 'gifting' ? 'text-[#916E2E] font-semibold' : 'font-normal'
              }`}
            >
              Gifting
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className={`hover:text-[#916E2E] transition-colors whitespace-nowrap py-1 ${
                activeSection === 'contact' ? 'text-[#916E2E] font-semibold' : 'font-normal'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Minimalist Cart & User Icons with clear warm gold visibility */}
          <div className="flex items-center gap-4 sm:gap-5 text-[#96743A]">
            <button
              onClick={onOpenAccount}
              className="p-1.5 hover:text-[#745722] hover:bg-[#F2EAE0]/50 rounded-full transition-colors"
              aria-label="Account"
              title="Account"
            >
              <User className="w-[19px] h-[19px] stroke-[1.6]" />
            </button>

            <button
              onClick={onOpenCart}
              className="p-1.5 hover:text-[#745722] hover:bg-[#F2EAE0]/50 rounded-full transition-colors relative"
              aria-label="Cart"
              title="Cart"
            >
              <ShoppingBag className="w-[19px] h-[19px] stroke-[1.6]" />
              {cartCount > 0 && (
                <span className="absolute 0 top-0.5 right-0.5 w-3.5 h-3.5 bg-[#96743A] text-white text-[9.5px] font-mono font-medium rounded-full flex items-center justify-center">
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
