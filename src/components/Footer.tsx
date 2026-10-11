import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="bg-[#F4ECE0] text-[#3A3026] border-t border-[#E3DAC8] pt-16 pb-12 font-sans-brand">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#E0D5C3]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif-brand text-2xl sm:text-3xl font-medium tracking-tight text-[#2B231C]">
              Purnima’s Nutty Kitchen
            </h3>
            <p className="text-sm text-[#6C5E4E] font-light max-w-sm leading-relaxed">
              Artisanal handmade Indian confectionery crafted with pure Gir cow A2 bilona ghee, California & Kashmiri nuts, and untouched natural sweetness.
            </p>
            <div className="text-xs text-[#8F7C66] pt-2">
              Freshly dispatched daily from our dedicated small-batch kitchens.
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <div className="font-semibold text-[#2B231C] uppercase tracking-wider mb-2">
              Explore
            </div>
            <ul className="space-y-2.5 text-[#6D5D4C]">
              <li>
                <button
                  onClick={() => onNavigate('craft')}
                  className="hover:text-[#9A7636] transition-colors"
                >
                  Our Craft & Bilona Ghee
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ladoos')}
                  className="hover:text-[#9A7636] transition-colors"
                >
                  The Artisanal Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gifting')}
                  className="hover:text-[#9A7636] transition-colors"
                >
                  Bespoke Wedding & Corporate Gifting
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#9A7636] transition-colors"
                >
                  Tasting Studio Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-semibold text-[#2B231C] text-xs uppercase tracking-wider mb-2">
              Seasonal Releases & Tasting Invitations
            </div>
            <p className="text-xs text-[#6D5D4C] font-light">
              Receive notifications when rare harvests of Kashmiri saffron and wild mountain walnuts arrive in our kitchen.
            </p>

            <form onSubmit={handleSubscribe} className="pt-2">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 text-xs p-2.5 rounded border border-[#DACFBC] bg-white text-[#29221B] focus:outline-none focus:border-[#C5A059]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#2B231C] hover:bg-[#43362A] text-white text-xs font-medium uppercase tracking-wider rounded transition-colors whitespace-nowrap"
                >
                  {subscribed ? <Check className="w-4 h-4 text-[#8AD477]" /> : 'Join'}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-[#4F8A3E] mt-1.5 font-medium">
                  Welcome to our connoisseur circle.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Quiet Bottom Legal / Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F7E6C]">
          <div>
            © {new Date().getFullYear()} Purnima's Nutty Kitchen. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Pure Vegetarian (Shakahari)</span>
            <span>·</span>
            <span>Handmade in Small Batches</span>
            <span>·</span>
            <span>A2 Certified Dairy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
