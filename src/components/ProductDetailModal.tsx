import React, { useEffect } from 'react';
import { X, Plus, Clock, Sparkles } from 'lucide-react';
import { LadooProduct } from '../types';

interface ProductDetailModalProps {
  product: LadooProduct | null;
  onClose: () => void;
  onAddToCart: (product: LadooProduct) => void;
}

export default function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
}: ProductDetailModalProps) {
  // Lock background body scroll when modal is open
  useEffect(() => {
    if (!product) return;

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
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/45 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 transition-all"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-[#FAF8F5] rounded-2xl border border-[#EBE3D5] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
      >
        
        {/* Pinned Modal Header */}
        <div className="p-5 sm:p-6 pb-4 border-b border-[#ECE3D5] flex items-start justify-between gap-4 bg-[#FAF8F5] shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-sans-brand text-[#9A7D50] uppercase tracking-wider mb-1">
              <span>{product.category}</span>
              <span>·</span>
              <span>{product.weight}</span>
            </div>
            
            <h3 id="product-modal-title" className="font-serif-brand text-2xl sm:text-3xl font-medium text-[#1E1711]">
              {product.name}
            </h3>

            {product.hindiName && (
              <p className="font-serif-brand italic text-sm text-[#947B58] mt-0.5">
                {product.hindiName}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#7B6A56] hover:text-[#29221B] hover:bg-[#F1E9DC] transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body with smooth scrolling and overscroll containment */}
        <div className="overflow-y-auto overscroll-contain p-5 sm:p-6 space-y-6 flex-1">
          {/* Description */}
          <p className="font-sans-brand text-sm sm:text-base text-[#564839] leading-relaxed font-light">
            {product.fullDesc}
          </p>

          {/* Garnish & Finish */}
          <div className="p-4 bg-[#F5EFE4] rounded-xl border border-[#E8DDCA] flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
            <div className="text-xs font-sans-brand text-[#5F5141]">
              <span className="font-medium text-[#29221B]">Master Artisan Garnish: </span>
              {product.garnish}
            </div>
          </div>

          {/* Key Ingredients List */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-sans-brand font-semibold text-[#8C7A65] mb-3">
              Sacred & Pure Ingredients
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans-brand text-[#4A3D2F]">
              {product.keyIngredients.map((ing, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-[#EAE1D2] shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0" />
                  <span>{ing}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nutrition & Storage Grid */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-sans-brand font-semibold text-[#8C7A65] mb-2">
              Nutritional Profile (Per Ladoo)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center border border-[#EAE1D2] bg-white/70 rounded-xl p-4 text-xs font-sans-brand">
              <div>
                <div className="text-[#8C7B68] text-[11px]">Energy / Piece</div>
                <div className="font-mono font-medium text-sm text-[#29221B] mt-0.5">{product.nutrition.caloriesPerPiece} kcal</div>
              </div>
              <div>
                <div className="text-[#8C7B68] text-[11px]">Clean Protein</div>
                <div className="font-mono font-medium text-sm text-[#29221B] mt-0.5">{product.nutrition.protein}</div>
              </div>
              <div>
                <div className="text-[#8C7B68] text-[11px]">Healthy Fats</div>
                <div className="font-mono font-medium text-sm text-[#29221B] mt-0.5">{product.nutrition.healthyFats}</div>
              </div>
              <div>
                <div className="text-[#8C7B68] text-[11px]">Sweetener Base</div>
                <div className="font-medium text-xs text-[#29221B] mt-0.5">{product.nutrition.sweetener}</div>
              </div>
            </div>
          </div>

          {/* Shelf Life & Storage */}
          <div className="flex items-center gap-2.5 text-xs text-[#786653] font-sans-brand p-3 rounded-lg bg-[#FAF6EE] border border-[#EBE3D5]">
            <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>{product.shelfLife}</span>
          </div>
        </div>

        {/* Pinned Action Footer */}
        <div className="p-4 sm:p-5 border-t border-[#ECE3D5] bg-[#FAF8F5] shrink-0 flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#9C8974] block font-sans-brand">Price</span>
            <span className="font-mono text-2xl font-semibold text-[#29221B] tabular-nums">
              {product.currency}{product.price.toLocaleString('en-IN')}
            </span>
          </div>

          <button
            onClick={() => {
              onAddToCart(product);
              onClose();
            }}
            className="px-8 py-3.5 bg-[#FAF8F5] hover:bg-[#2B231C] text-[#2B231C] hover:text-[#FAF8F5] border border-[#C5A059] hover:border-[#2B231C] text-xs font-sans-brand font-medium tracking-[0.16em] uppercase rounded-lg transition-all shadow-xs flex items-center gap-2"
          >
            <Plus className="w-4 h-4 text-[#C5A059]" />
            <span>Add Box To Selection</span>
          </button>
        </div>

      </div>
    </div>
  );
}
