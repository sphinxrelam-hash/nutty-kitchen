import { LadooProduct } from '../types';

export const PRODUCTS: LadooProduct[] = [
  {
    id: 'shahi-besan-pistachio',
    name: 'Shahi Roasted Besan & Pistachio Ladoo',
    hindiName: 'शाही बेसन लड्‍डू',
    shortDesc: 'Slow-roasted coarse gram flour in pure A2 bilona ghee, studded with hand-slivered green pistachios and Kashmiri saffron.',
    fullDesc: 'Our signature hallmark. Coarse Rajasthani gram flour roasted patiently for 90 minutes in pure A2 Gir cow bilona ghee until it reaches a deep nutty amber. Finished with fragrant green cardamom pods, toasted Iranian pistachios, and a whisper of organic khandsari.',
    price: 850,
    currency: '₹',
    weight: '450g · Box of 9',
    pieceCount: 9,
    category: 'heritage',
    garnish: 'Slivered Emerald Pistachio & Kashmiri Kesar',
    keyIngredients: ['Pure Gir Cow A2 Ghee', 'Rajasthani Gram Flour (Chana)', 'Iranian Green Pistachios', 'Green Cardamom', 'Organic Khandsari'],
    dietaryTags: ['A2 Bilona Ghee', 'Refined Sugar Free', 'Gluten Conscious'],
    shelfLife: '30 days in cool dry storage',
    nutrition: {
      caloriesPerPiece: 142,
      protein: '4.2g',
      healthyFats: '8.5g',
      sweetener: 'Unrefined Khandsari'
    },
    accentColor: '#DFBF75'
  },
  {
    id: 'afghani-fig-pecan-sugarfree',
    name: 'Afghani Fig & Wild Pecan Ladoo',
    hindiName: 'अंजीर अखरोट लड्‍डू',
    shortDesc: '100% naturally sweetened with sun-dried Afghani anjeer, Medjool dates, toasted pecans, and roasted almonds.',
    fullDesc: 'Zero added sugar or jaggery. Crafted entirely from luscious sun-dried mountain figs and rich Medjool dates, toasted with crisp wild pecans, cashews, and Mamra almonds in a gentle touch of aromatic golden ghee.',
    price: 1150,
    currency: '₹',
    weight: '480g · Box of 9',
    pieceCount: 9,
    category: 'sugar-free',
    garnish: 'Pecan Halves & Crushed Cashew Nut Crumble',
    keyIngredients: ['Sun-dried Afghani Figs (Anjeer)', 'Medjool Dates', 'Wild Pecans', 'Mamra Almonds', 'Goan Cashews', 'A2 Ghee'],
    dietaryTags: ['100% Sugar Free', 'No Added Sweetener', 'Fiber Rich'],
    shelfLife: '45 days in cool dry storage',
    nutrition: {
      caloriesPerPiece: 128,
      protein: '3.8g',
      healthyFats: '7.2g',
      sweetener: 'Whole Fig & Date Fiber'
    },
    accentColor: '#8C5833'
  },
  {
    id: 'sprouted-ragi-gond-immunity',
    name: 'Sprouted Ragi & Gond Jewel Ladoo',
    hindiName: 'रागी गोंद पौष्टिक लड्‍डू',
    shortDesc: 'Sprouted finger millet stone-milled and roasted with crunchy edible gum crystals and organic date palm jaggery.',
    fullDesc: 'An ancient Ayurvedic postpartum and vitality recipe modernized into pure elegance. Sprouted ragi is gently toasted with puffy crisp gond (edible acacia gum), roasted watermelon seeds, toasted poppy seeds, and deep mineral-rich palm jaggery.',
    price: 920,
    currency: '₹',
    weight: '460g · Box of 9',
    pieceCount: 9,
    category: 'wellness',
    garnish: 'Roasted Sesame & Crispy Popped Gond Pearls',
    keyIngredients: ['Sprouted Finger Millet (Ragi)', 'Edible Acacia Gum (Gond)', 'A2 Bilona Ghee', 'Organic Palm Jaggery', 'Muskmelon Seeds'],
    dietaryTags: ['High Calcium', 'Gluten Free', 'Ayurvedic Botanical'],
    shelfLife: '40 days in cool dry storage',
    nutrition: {
      caloriesPerPiece: 135,
      protein: '3.6g',
      healthyFats: '7.8g',
      sweetener: 'Organic Palm Jaggery'
    },
    accentColor: '#5E3B20'
  },
  {
    id: 'pistachio-damask-rose-peda',
    name: 'Pistachio & Damask Rose Cashew Ladoo',
    hindiName: 'पिस्ता गुलाब लड्‍डू',
    shortDesc: 'Silky cashew and Iranian pistachio marzipan infused with steam-distilled Kannauj Damask rose petals and edible 24k gold.',
    fullDesc: 'A delicate royal indulgence. Creamy Goan cashews stone-ground into a silky smooth paste, folded with fragrant pistachio puree and organic hydro-distilled Damask rose water from Kannauj. Topped with hand-picked dried rose petals and authentic edible 24k gold leaf.',
    price: 1250,
    currency: '₹',
    weight: '440g · Box of 9',
    pieceCount: 9,
    category: 'heritage',
    garnish: 'Kannauj Rose Petals & 24K Edible Gold Flecks',
    keyIngredients: ['Goan W240 Cashews', 'Iranian Pistachios', 'Kannauj Rose Petal Distillate', 'Pure A2 Ghee', 'Cardamom Pods'],
    dietaryTags: ['Luxury Edition', 'Artisanal Floral', 'Melt-in-Mouth'],
    shelfLife: '25 days in cool dry storage',
    nutrition: {
      caloriesPerPiece: 148,
      protein: '4.5g',
      healthyFats: '9.1g',
      sweetener: 'Raw Organic Khandsari'
    },
    accentColor: '#A8B47E'
  },
  {
    id: 'kashmiri-saffron-motichoor',
    name: 'Royal Kashmiri Saffron Motichoor Ladoo',
    hindiName: 'कश्मीरी केसर मोतीचूर',
    shortDesc: 'Microscopic gram flour pearls soaked in floral saffron nectar and pure bilona ghee, infused with crushed melon seeds.',
    fullDesc: 'The quintessential celebration ladoo made with immaculate precision. Droplets of besan fried to crisp perfection in Gir cow ghee, delicately infused with pure Kashmiri Mongra saffron nectar, green cardamom, and toasted magaj seeds.',
    price: 980,
    currency: '₹',
    weight: '480g · Box of 9',
    pieceCount: 9,
    category: 'heritage',
    garnish: 'Grade-A Kashmiri Mongra Kesar & Magaj Seeds',
    keyIngredients: ['Gram Flour Pearls', 'Gir Cow A2 Bilona Ghee', 'Kashmiri Mongra Saffron', 'Green Cardamom', 'Toasted Melon Seeds'],
    dietaryTags: ['Festival Classic', 'Authentic Recipe', 'Rich Aroma'],
    shelfLife: '20 days in cool dry storage',
    nutrition: {
      caloriesPerPiece: 155,
      protein: '3.1g',
      healthyFats: '8.9g',
      sweetener: 'Raw Cane Nectar'
    },
    accentColor: '#E29E2E'
  },
  {
    id: 'signature-grand-tasting-box',
    name: 'The Purnima Grand Hamper (16 Pieces)',
    hindiName: 'पूर्णिमा ग्रांड उपहार पेटी',
    shortDesc: 'Our definitive gift box. 16 assorted signature ladoos nestled in our rigid textured ivory and gold foil keepsake box.',
    fullDesc: 'The ultimate presentation of Purnima’s Nutty Kitchen. Contains 4 Shahi Besan & Pistachio, 4 Afghani Fig & Pecan, 4 Sprouted Ragi & Gond, and 4 Pistachio Damask Rose. Enclosed in a custom rigid keepsake gift box with hand-tied satin ribbon and personalized gold-foil calligraphy card.',
    price: 2450,
    currency: '₹',
    weight: '820g · Box of 16',
    pieceCount: 16,
    category: 'gifting',
    garnish: 'Assorted Royal Garnishes & Edible Gold Leaf',
    keyIngredients: ['Assortment of all 4 Signature Ladoos', 'Pure A2 Bilona Ghee', 'Handpicked Iranian & California Nuts'],
    dietaryTags: ['Complete Assortment', 'Keepsake Box Included', 'Complimentary Card'],
    shelfLife: '30 days in cool dry storage',
    nutrition: {
      caloriesPerPiece: 140,
      protein: '4.0g',
      healthyFats: '8.4g',
      sweetener: 'Natural Varieties'
    },
    accentColor: '#C59E4E'
  }
];
