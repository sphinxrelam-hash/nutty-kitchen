/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TheLadoos from './components/TheLadoos';
import OurCraft from './components/OurCraft';
import GiftingSection from './components/GiftingSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductDetailModal from './components/ProductDetailModal';
import ContactModal from './components/ContactModal';
import AccountModal from './components/AccountModal';
import { CartItem, LadooProduct } from './types';
import { PRODUCTS } from './data/products';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<LadooProduct | null>(null);

  const handleAddToCart = (product: LadooProduct) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'contact') {
      setIsContactOpen(true);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen w-full bg-[#FAF8F5] text-[#2C241D] font-sans-brand selection:bg-[#F0E6D2] selection:text-[#382C1F]">
      
      {/* Delicate, tiny navigation bar with ample padding */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Flow */}
      <main>
        {/* Spacious, airy hero section with vast negative space */}
        <HeroSection
          onShopCollection={() => handleNavigate('ladoos')}
        />

        {/* The Artisanal Ladoo Collection Section */}
        <TheLadoos
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToCart={handleAddToCart}
        />

        {/* Sacred Ingredients & Pure Craft */}
        <OurCraft />

        {/* Gifting & Keepsake Box Collection */}
        <GiftingSection
          onAddToCart={handleAddToCart}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </main>

      {/* Minimalist, quiet luxury footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Product Tasting Notes Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Contact & Bespoke Concierge Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Member Portal Modal */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />

    </div>
  );
}
