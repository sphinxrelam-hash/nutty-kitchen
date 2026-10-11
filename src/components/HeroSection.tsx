import React from 'react';
import HeroLadooBoxScene from './HeroLadooBoxScene';

interface HeroSectionProps {
  onShopCollection: () => void;
}

export default function HeroSection({ onShopCollection }: HeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF8F5] pt-12 pb-24 sm:pt-20 sm:pb-36 lg:pt-28 lg:pb-44">
      {/* Vast, uncluttered off-white and cream negative space */}
      <div className="max-w-[1440px] mx-auto px-8 sm:px-14 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* On the left: Generous breathing room, large thin serif heading, single line airy body text, small delicate gold-bordered button */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8 sm:space-y-10 lg:pr-8">
            
            {/* Heading: Large, elegant serif heading that reads "Handcrafted Tradition." with enhanced visual clarity */}
            <h1 
              className="font-serif-brand font-normal text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5.25rem] leading-[1.04] tracking-[-0.015em] text-[#1D1610]"
              style={{ textWrap: 'balance' }}
            >
              Handcrafted Tradition.
            </h1>

            {/* Single line of small, airy body text in a clean sans-serif font */}
            <p className="font-sans-brand text-sm sm:text-[14.5px] leading-relaxed text-[#5A4B3C] font-normal tracking-wide max-w-lg">
              Artisanal ladoos made with pure A2 ghee, premium nuts, and natural sweetness.
            </p>

            {/* Small, delicate button with a thin gold border that says "SHOP NOW" */}
            <div className="pt-2 sm:pt-4">
              <button
                onClick={onShopCollection}
                className="inline-block px-7 py-3 sm:px-8 sm:py-3.5 border border-[#C5A059] hover:border-[#9E7A37] text-[11px] sm:text-xs font-sans-brand font-normal tracking-[0.22em] uppercase text-[#2B231B] bg-transparent hover:bg-[#F6EFE3]/70 transition-all duration-300"
              >
                SHOP NOW
              </button>
            </div>

          </div>

          {/* On the right: Close-up natural-light photograph of natural round ladoos in minimalist ivory box with gold edge */}
          <div className="lg:col-span-6 w-full flex items-center justify-center">
            <HeroLadooBoxScene />
          </div>

        </div>
      </div>
    </section>
  );
}
