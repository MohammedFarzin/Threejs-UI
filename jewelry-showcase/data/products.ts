export interface Product {
  id: string;
  name: string;
  category: 'ring' | 'necklace' | 'bracelet';
  price: number;
  description: string;
  shortDescription: string;
  specifications: {
    metal: string;
    purity: string;
    weight: string;
    dimensions: string;
    sizes?: string[];
    stones?: string;
    hallmark: boolean;
  };
  materials: {
    available: ('yellow-gold' | 'rose-gold' | 'white-gold')[];
    default: 'yellow-gold' | 'rose-gold' | 'white-gold';
  };
  images: {
    thumbnail: string;
    gallery: string[];
  };
  features: string[];
  inStock: boolean;
  isFeatured: boolean;
  craftingTime: string;
}

export const products: Product[] = [
  // RINGS (2)
  {
    id: 'eternal-elegance-ring',
    name: 'Eternal Elegance Ring',
    category: 'ring',
    price: 45000,
    shortDescription: 'Timeless solitaire ring with brilliant-cut diamond',
    description: 'The Eternal Elegance Ring embodies timeless sophistication with its classic solitaire design. Handcrafted in 22K gold, this exquisite piece features intricate filigree work along the band, showcasing our master artisans\' dedication to perfection. The delicate prong setting elevates the center stone, allowing maximum light to dance through it, creating an unforgettable sparkle.',
    specifications: {
      metal: '22K Yellow Gold',
      purity: '916 Hallmark Certified',
      weight: '8.5g',
      dimensions: 'Band Width: 2.5mm, Setting Height: 8mm',
      sizes: ['5', '6', '7', '8', '9', '10'],
      stones: '1 Carat Diamond (Optional)',
      hallmark: true,
    },
    materials: {
      available: ['yellow-gold', 'rose-gold', 'white-gold'],
      default: 'yellow-gold',
    },
    images: {
      thumbnail: '/products/ring-1-thumb.jpg',
      gallery: [
        '/products/ring-1-main.jpg',
        '/products/ring-1-side.jpg',
        '/products/ring-1-detail.jpg',
      ],
    },
    features: [
      'Hand-engraved filigree pattern',
      'Conflict-free diamond option',
      'Lifetime warranty',
      'Complimentary resizing',
      'Comes with authenticity certificate',
    ],
    inStock: true,
    isFeatured: true,
    craftingTime: '15-20 business days',
  },
  {
    id: 'royal-crown-ring',
    name: 'Royal Crown Ring',
    category: 'ring',
    price: 62000,
    shortDescription: 'Regal statement ring with ornate crown design',
    description: 'Inspired by royal heritage, the Royal Crown Ring is a bold statement piece that commands attention. This architectural masterpiece features a distinctive crown motif with intricate gold work and fine detailing. Each element is carefully crafted to create a harmonious balance between tradition and contemporary elegance.',
    specifications: {
      metal: '22K Yellow Gold',
      purity: '916 Hallmark Certified',
      weight: '12.8g',
      dimensions: 'Band Width: 8mm, Crown Height: 15mm',
      sizes: ['6', '7', '8', '9', '10', '11'],
      stones: 'Small ruby accents (0.5 carat total)',
      hallmark: true,
    },
    materials: {
      available: ['yellow-gold', 'rose-gold'],
      default: 'yellow-gold',
    },
    images: {
      thumbnail: '/products/ring-2-thumb.jpg',
      gallery: [
        '/products/ring-2-main.jpg',
        '/products/ring-2-side.jpg',
        '/products/ring-2-detail.jpg',
      ],
    },
    features: [
      'Unique crown architecture',
      'Natural ruby gemstones',
      'Mirror-polished finish',
      'Lifetime craftsmanship warranty',
      'Presentation box included',
    ],
    inStock: true,
    isFeatured: true,
    craftingTime: '20-25 business days',
  },

  // NECKLACES (2)
  {
    id: 'celestial-cascade-necklace',
    name: 'Celestial Cascade Necklace',
    category: 'necklace',
    price: 85000,
    shortDescription: 'Flowing multi-strand necklace with celestial motifs',
    description: 'The Celestial Cascade is a breathtaking multi-strand necklace that captures the essence of the night sky. Delicate gold chains of varying lengths create a cascading effect, adorned with star and moon motifs. This piece is perfect for both formal occasions and adding elegance to everyday attire.',
    specifications: {
      metal: '22K Yellow Gold',
      purity: '916 Hallmark Certified',
      weight: '28.5g',
      dimensions: 'Length: 18 inches (adjustable to 20 inches)',
      stones: 'Tiny diamonds on moon pendants (0.3 carat total)',
      hallmark: true,
    },
    materials: {
      available: ['yellow-gold', 'white-gold'],
      default: 'yellow-gold',
    },
    images: {
      thumbnail: '/products/necklace-1-thumb.jpg',
      gallery: [
        '/products/necklace-1-main.jpg',
        '/products/necklace-1-detail.jpg',
        '/products/necklace-1-worn.jpg',
      ],
    },
    features: [
      'Multi-layered cascading design',
      'Adjustable chain length',
      'Hand-detailed celestial charms',
      'Secure lobster clasp',
      'Matching earrings available separately',
    ],
    inStock: true,
    isFeatured: true,
    craftingTime: '25-30 business days',
  },
  {
    id: 'heritage-lotus-necklace',
    name: 'Heritage Lotus Necklace',
    category: 'necklace',
    price: 72000,
    shortDescription: 'Traditional lotus pendant with contemporary styling',
    description: 'Celebrating our rich cultural heritage, the Heritage Lotus Necklace features a magnificent lotus flower pendant, symbol of purity and enlightenment. The intricate petals are individually crafted and assembled, creating remarkable depth and dimension. The pendant hangs from a delicate yet durable box chain, making it perfect for everyday luxury.',
    specifications: {
      metal: '22K Yellow Gold',
      purity: '916 Hallmark Certified',
      weight: '22.3g',
      dimensions: 'Pendant: 35mm diameter, Chain: 16-18 inches adjustable',
      stones: 'Central emerald (1 carat, optional)',
      hallmark: true,
    },
    materials: {
      available: ['yellow-gold', 'rose-gold', 'white-gold'],
      default: 'yellow-gold',
    },
    images: {
      thumbnail: '/products/necklace-2-thumb.jpg',
      gallery: [
        '/products/necklace-2-main.jpg',
        '/products/necklace-2-close.jpg',
        '/products/necklace-2-side.jpg',
      ],
    },
    features: [
      'Handcrafted lotus petals',
      'Optional emerald centerpiece',
      'Textured and polished contrast',
      'Adjustable chain',
      'Traditional meets contemporary design',
    ],
    inStock: true,
    isFeatured: false,
    craftingTime: '18-22 business days',
  },

  // BRACELET (1)
  {
    id: 'infinity-bangle-bracelet',
    name: 'Infinity Bangle Bracelet',
    category: 'bracelet',
    price: 52000,
    shortDescription: 'Sculptural bangle with infinity symbol detailing',
    description: 'The Infinity Bangle is a modern sculptural piece that symbolizes eternal love and boundless possibilities. Its unique twisted design creates an elegant infinity pattern that catches light from every angle. The comfortable oval shape ensures it sits perfectly on the wrist while making a sophisticated statement.',
    specifications: {
      metal: '22K Yellow Gold',
      purity: '916 Hallmark Certified',
      weight: '18.7g',
      dimensions: 'Inner diameter: 65mm (standard), Width: 6mm',
      sizes: ['Small (60mm)', 'Medium (65mm)', 'Large (70mm)'],
      hallmark: true,
    },
    materials: {
      available: ['yellow-gold', 'rose-gold', 'white-gold'],
      default: 'yellow-gold',
    },
    images: {
      thumbnail: '/products/bracelet-1-thumb.jpg',
      gallery: [
        '/products/bracelet-1-main.jpg',
        '/products/bracelet-1-worn.jpg',
        '/products/bracelet-1-detail.jpg',
      ],
    },
    features: [
      'Seamless twisted design',
      'Comfortable oval shape',
      'High-polish finish',
      'Three size options',
      'Perfect for stacking with other bangles',
    ],
    inStock: true,
    isFeatured: true,
    craftingTime: '12-15 business days',
  },
];

// Helper functions
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getProductsInPriceRange = (min: number, max: number): Product[] => {
  return products.filter(product => product.price >= min && product.price <= max);
};
