import React, { useState } from 'react';
import { LadooProduct } from '../types';
import { PRODUCTS } from '../data/products';
import { Eye, Plus, Check } from 'lucide-react';

interface TheLadoosProps {
  onSelectProduct: (product: LadooProduct) => void;
  onAddToCart: (product: LadooProduct) => void;
}

export default function TheLadoos({ onSelectProduct, onAddToCart }: TheLadoosProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [addedId, setAddedId] = useState<string | null>(null);

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const handleQuickAdd = (product: LadooProduct) => {
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section id="ladoos" className="relative py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#EBE3D3]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header with generous whitespace */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9E8256] font-sans-brand font-medium">
              Curated Confectionery
            </span>
            <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-normal text-[#29221B]">
              The Artisanal Collection
            </h2>
            <p className="font-sans-brand text-sm sm:text-base text-[#6F6354] max-w-xl font-light">
              Each ladoo is individually hand-rolled every morning in small batches, honoring heirloom royal recipes from Rajasthan, Gujarat, and Kashmir.
            </p>
          </div>

          {/* Clean Segmented Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F1EADF] rounded-lg">
            {[
              { id: 'all', label: 'All Varieties' },
              { id: 'heritage', label: 'Heritage Classics' },
              { id: 'sugar-free', label: '100% Sugar-Free' },
              { id: 'wellness', label: 'Ayurvedic & Wellness' },
              { id: 'gifting', label: 'Grand Gift Boxes' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-sans-brand font-medium rounded-md transition-all whitespace-nowrap ${
                  activeCategory === tab.id
                    ? 'bg-[#FAF8F5] text-[#29221B] shadow-xs'
                    : 'text-[#6B5E4F] hover:text-[#29221B]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col justify-between bg-white/70 hover:bg-white rounded-xl border border-[#E9E1D2] hover:border-[#D6C4A6] p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#967C55]/8 hover:-translate-y-0.5"
            >
              <div>
                {/* Visual Card Imagery Area with Stylized Minimal Art & Texture */}
                <div 
                  onClick={() => onSelectProduct(product)}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#FAF6EE] border border-[#ECE4D4] flex items-center justify-center cursor-pointer mb-5 group/image"
                >
                  {/* Subtle Linen Background Texture inside product slot */}
                  <div className="absolute inset-0 bg-linen-subtle opacity-70" />

                  {/* Stylized Photorealistic Ladoo Composition SVG */}
                  <svg viewBox="0 0 320 240" className="w-full h-full max-h-[190px] drop-shadow-md" fill="none">
                    <defs>
                      <radialGradient id={`grad-${product.id}`} cx="35%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#FFF2C6" />
                        <stop offset="35%" stopColor={product.accentColor} />
                        <stop offset="85%" stopColor="#7E5218" />
                        <stop offset="100%" stopColor="#482A06" />
                      </radialGradient>
                      <filter id={`shadow-${product.id}`} x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
                        <feOffset dx="6" dy="8" />
                        <feComponentTransfer><feFuncA type="linear" slope="0.22" /></feComponentTransfer>
                        <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                      </filter>
                    </defs>

                    {/* Ceramic Tasting Dish Silhouette */}
                    <ellipse cx="160" cy="170" rx="95" ry="40" fill="#EFE8D8" opacity="0.8" />
                    <ellipse cx="160" cy="166" rx="90" ry="36" fill="#FAF7F0" stroke="#DFD5BE" strokeWidth="1" />

                    {/* Ladoo Sphere */}
                    <g filter={`url(#shadow-${product.id})`}>
                      <circle cx="160" cy="120" r="48" fill={`url(#grad-${product.id})`} />
                      
                      {/* Granular Texture */}
                      <circle cx="145" cy="105" r="2.5" fill="#FFEAA8" opacity="0.8" />
                      <circle cx="178" cy="110" r="2.2" fill="#FFEAA8" opacity="0.8" />
                      <circle cx="155" cy="142" r="3" fill="#FFEAA8" opacity="0.6" />
                      <circle cx="138" cy="128" r="2" fill="#754714" opacity="0.7" />

                      {/* Pistachio Garnish */}
                      <path
                        d="M 152 108 Q 160 100 168 108 Q 160 114 152 108 Z"
                        fill="#4DA337"
                        stroke="#72D259"
                        strokeWidth="0.8"
                      />
                      <ellipse cx="165" cy="118" rx="4" ry="2" fill="#58B24C" transform="rotate(-20 165 118)" />

                      {/* Saffron Thread */}
                      <path
                        d="M 154 118 Q 164 122 170 114"
                        stroke="#D63212"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </g>

                    {/* Loose Almond on Plate */}
                    <ellipse cx="218" cy="162" rx="14" ry="8" transform="rotate(22 218 162)" fill="#8F5124" />
                    <ellipse cx="106" cy="164" rx="9" ry="5.5" transform="rotate(-30 106 164)" fill="#549E38" />
                  </svg>

                  {/* Hover Quick View Trigger */}
                  <div className="absolute inset-0 bg-[#29221B]/15 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-sans-brand font-medium text-[#29221B] flex items-center gap-1.5 shadow-sm">
                      <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
                      Tasting Notes & Ingredients
                    </span>
                  </div>

                  {/* Dietary Note - clean unboxed metadata */}
                  <div className="absolute top-3 left-3 flex items-center gap-1 text-[11px] font-sans-brand font-medium text-[#6E5D49] bg-[#FAF8F5]/90 backdrop-blur-sm px-2.5 py-1 rounded border border-[#E8DFC8]">
                    <span>{product.dietaryTags[0]}</span>
                  </div>
                </div>

                {/* Unboxed Metadata: Category & Piece Count */}
                <div className="flex items-center gap-2 text-xs text-[#8A7965] font-sans-brand mb-1.5">
                  <span className="capitalize">{product.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{product.weight}</span>
                </div>

                {/* Product Title */}
                <h3 
                  onClick={() => onSelectProduct(product)}
                  className="font-serif-brand text-xl sm:text-2xl font-medium text-[#29221B] hover:text-[#8E6E34] transition-colors cursor-pointer mb-2"
                >
                  {product.name}
                </h3>

                {/* Hindi Name in refined script */}
                {product.hindiName && (
                  <p className="font-serif-brand italic text-xs text-[#9E8668] mb-2.5">
                    {product.hindiName}
                  </p>
                )}

                {/* Short Description */}
                <p className="font-sans-brand text-xs sm:text-sm text-[#6C5F51] line-clamp-2 leading-relaxed mb-4 font-light">
                  {product.shortDesc}
                </p>

                {/* Key Ingredients Summary */}
                <div className="text-[11px] text-[#7C6E5C] font-sans-brand pb-4 border-b border-[#EFE8DC]">
                  <span className="font-medium text-[#4D4032]">Key Notes: </span>
                  {product.keyIngredients.slice(0, 3).join(', ')}
                </div>
              </div>

              {/* Price & Action Module */}
              <div className="pt-4 flex items-center justify-between gap-3">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-[#998772] font-sans-brand">Price</span>
                  <span className="font-mono text-lg font-semibold text-[#29221B] tabular-nums">
                    {product.currency}{product.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="px-3 py-2 text-xs font-sans-brand text-[#6E5D49] hover:text-[#29221B] hover:bg-[#F3EADB] rounded transition-colors"
                  >
                    Details
                  </button>

                  <button
                    onClick={() => handleQuickAdd(product)}
                    className={`flex items-center gap-1.5 px-4 py-2 text-xs font-sans-brand font-medium tracking-wider uppercase transition-all rounded ${
                      addedId === product.id
                        ? 'bg-[#557F48] text-white'
                        : 'bg-[#FAF8F5] hover:bg-[#2B231C] text-[#2B231C] hover:text-[#FAF8F5] border border-[#C5A059] hover:border-[#2B231C]'
                    }`}
                  >
                    {addedId === product.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>Add To Box</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
