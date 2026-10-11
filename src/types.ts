export interface LadooProduct {
  id: string;
  name: string;
  hindiName?: string;
  shortDesc: string;
  fullDesc: string;
  price: number; // in USD or INR equivalent
  currency: string;
  weight: string; // e.g. "450g (Box of 9)"
  pieceCount: number;
  category: 'heritage' | 'sugar-free' | 'gifting' | 'wellness';
  garnish: string;
  keyIngredients: string[];
  dietaryTags: string[];
  shelfLife: string;
  nutrition: {
    caloriesPerPiece: number;
    protein: string;
    healthyFats: string;
    sweetener: string;
  };
  accentColor: string;
}

export interface CartItem {
  product: LadooProduct;
  quantity: number;
  boxOption?: 'standard' | 'luxury-gold' | 'festive-satin';
}
