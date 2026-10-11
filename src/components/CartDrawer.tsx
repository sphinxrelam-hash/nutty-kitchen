import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, CheckCircle2, Gift } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [giftNote, setGiftNote] = useState('');
  const [includeGiftWrap, setIncludeGiftWrap] = useState(true);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 2000;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const shippingAmount = isFreeShipping || subtotal === 0 ? 0 : 150;
  const total = subtotal + shippingAmount;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      const generatedOrderId = `PK-${Math.floor(1000 + Math.random() * 9000)}`;
      setOrderComplete(generatedOrderId);
      onClearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end transition-opacity">
      <div className="w-full max-w-md bg-[#FAF8F5] h-full flex flex-col shadow-2xl border-l border-[#EAE1D2] animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#EAE1D2] flex items-center justify-between bg-[#F8F4EC]">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
            <h3 className="font-serif-brand text-2xl font-medium text-[#29221B]">
              Your Tasting Box ({items.reduce((s, i) => s + i.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={() => {
              setOrderComplete(null);
              onClose();
            }}
            className="p-2 text-[#7C6C58] hover:text-[#29221B] rounded-full hover:bg-[#EFE8DA] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Order Complete Success State */}
        {orderComplete ? (
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#EDF5EA] text-[#4F8A3E] flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif-brand text-2xl font-normal text-[#29221B]">
              Order Confirmed
            </h4>
            <div className="font-mono text-sm text-[#9A7D50] font-medium bg-[#F3EADB] px-3 py-1 rounded">
              Order #{orderComplete}
            </div>
            <p className="font-sans-brand text-xs sm:text-sm text-[#6C5E4E] leading-relaxed max-w-xs">
              Thank you for honoring our kitchen. Your artisanal box is scheduled for fresh morning rolling and gentle dispatch.
            </p>
            <button
              onClick={() => {
                setOrderComplete(null);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-[#FAF8F5] hover:bg-[#2B231C] text-[#2B231C] hover:text-[#FAF8F5] border border-[#C5A059] text-xs font-sans-brand font-medium tracking-wider uppercase transition-colors"
            >
              Continue Exploring
            </button>
          </div>
        ) : items.length === 0 ? (
          /* Empty Cart State */
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#F3EADB] flex items-center justify-center text-[#B5914A]">
              <Gift className="w-7 h-7" />
            </div>
            <h4 className="font-serif-brand text-2xl text-[#29221B]">Your Box Is Empty</h4>
            <p className="font-sans-brand text-xs sm:text-sm text-[#786958] max-w-xs font-light">
              Explore our handmade selection of pure A2 ghee, slow-roasted nuts, and natural ladoos.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#2B231C] text-[#FAF8F5] text-xs font-sans-brand font-medium tracking-wider uppercase rounded hover:bg-[#43372B] transition-colors"
            >
              View The Ladoos
            </button>
          </div>
        ) : (
          /* Cart Items List */
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* Free Shipping Progress Indicator */}
            <div className="p-3.5 bg-[#F4EDE2] rounded-lg border border-[#E6DDCE] text-xs font-sans-brand">
              {isFreeShipping ? (
                <div className="text-[#3F7535] font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#3F7535]" />
                  <span>Complimentary Luxury Shipping Applied!</span>
                </div>
              ) : (
                <div className="text-[#6E5E4E] space-y-1.5">
                  <div className="flex justify-between">
                    <span>Add ₹{(freeShippingThreshold - subtotal).toLocaleString('en-IN')} more for Free Express Delivery</span>
                    <span className="font-mono tabular-nums font-medium">₹{subtotal.toLocaleString('en-IN')} / ₹{freeShippingThreshold.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="w-full bg-[#E5DBCB] h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#C5A059] h-full transition-all duration-300"
                      style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Items */}
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-start gap-4 p-3.5 bg-white rounded-lg border border-[#EBE3D3] shadow-2xs"
                >
                  {/* Item Color Badge */}
                  <div 
                    className="w-12 h-12 rounded-md flex items-center justify-center shrink-0 border border-[#E5DAC6]"
                    style={{ backgroundColor: `${item.product.accentColor}25` }}
                  >
                    <span className="font-serif-brand text-xs font-medium text-[#7D5B21]">PK</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif-brand text-base font-medium text-[#29221B] truncate">
                      {item.product.name}
                    </h5>
                    <div className="text-xs text-[#8C7A67] font-sans-brand mb-2">
                      {item.product.weight}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-[#DECDB7] rounded bg-[#FAF8F5]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2.5 py-0.5 text-xs text-[#715F4C] hover:text-[#29221B] transition-colors"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-mono font-medium tabular-nums text-[#29221B]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2.5 py-0.5 text-xs text-[#715F4C] hover:text-[#29221B] transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <div className="font-mono text-sm font-medium text-[#29221B] tabular-nums">
                        {item.product.currency}{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="p-1 text-[#AB9983] hover:text-[#BA3C3C] transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Gift Options Toggle */}
            <div className="pt-2 border-t border-[#EAE1D2] space-y-3">
              <label className="flex items-center gap-2.5 cursor-pointer text-xs font-sans-brand text-[#5B4E40]">
                <input
                  type="checkbox"
                  checked={includeGiftWrap}
                  onChange={(e) => setIncludeGiftWrap(e.target.checked)}
                  className="rounded border-[#D3C4AB] text-[#C5A059] focus:ring-[#C5A059]"
                />
                <span className="font-medium">Complimentary Rigid Ivory Gift Box & Satin Ribbon</span>
              </label>

              {includeGiftWrap && (
                <div className="space-y-1">
                  <label className="text-[11px] font-sans-brand text-[#7E6F5E] block">
                    Handwritten Calligraphy Card Message:
                  </label>
                  <textarea
                    value={giftNote}
                    onChange={(e) => setGiftNote(e.target.value)}
                    placeholder="e.g. Wishing you sweetness, joy and abundance on your special day..."
                    rows={2}
                    className="w-full text-xs font-sans-brand p-2 rounded border border-[#DFD3BF] bg-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              )}
            </div>

          </div>
        )}

        {/* Drawer Footer / Purchase Module */}
        {!orderComplete && items.length > 0 && (
          <div className="p-6 border-t border-[#EAE1D2] bg-[#F7F2E9] space-y-4">
            <div className="space-y-1.5 text-xs font-sans-brand">
              <div className="flex justify-between text-[#6E5F50]">
                <span>Subtotal</span>
                <span className="font-mono tabular-nums font-medium text-[#29221B]">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-[#6E5F50]">
                <span>Express Insulated Shipping</span>
                <span className="font-mono tabular-nums font-medium text-[#29221B]">
                  {shippingAmount === 0 ? 'Complimentary' : `₹${shippingAmount.toLocaleString('en-IN')}`}
                </span>
              </div>
              <div className="pt-2 border-t border-[#E6DCcb] flex justify-between text-sm font-semibold text-[#29221B]">
                <span>Total Amount</span>
                <span className="font-mono text-base tabular-nums">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full py-3.5 bg-[#2B231C] hover:bg-[#3E3328] text-[#FAF8F5] text-xs font-sans-brand font-medium tracking-[0.16em] uppercase rounded transition-all shadow-sm flex items-center justify-center gap-2"
            >
              {isCheckingOut ? (
                <span>Preparing Order...</span>
              ) : (
                <>
                  <span>Proceed to Dispatch</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
