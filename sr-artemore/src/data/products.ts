export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  badge?: 'new' | 'sale';
  rating: number;
  reviews: number;
  sizes: string[];
  colors: string[];
  description: string;
  category: "Press on Nails" | "Henna Stencils" | "Bridal Jewellery";
  image: string;
  images: string[];
  featured?: boolean;
}

const imgBase = (bg: string, textCol: string, label: string = "SR+ARTEMORE") =>
  `https://placehold.co/400x420/${bg}/${textCol}?text=${label.replace(/ /g, '+')}`;

export const categories = [
  { 
    name: "Press on Nails", 
    count: 20, 
    image: imgBase("0a0a1a", "c9a96e", "Press on Nails") 
  },
  { 
    name: "Henna Stencils", 
    count: 10, 
    image: imgBase("1a0a0a", "c9a96e", "Henna Stencils") 
  },
  { 
    name: "Bridal Jewellery", 
    count: 2, 
    image: imgBase("2a0a0a", "c9a96e", "Bridal Jewellery") 
  },
];

export const products: Product[] = [
  // --- HENNA STENCILS ---
  {
    id: 1,
    name: "SR1 – Elegant Swirl & Leaf",
    price: 7.99,
    badge: "new",
    rating: 5,
    reviews: 24,
    sizes: ["XS", "S", "M", "Standard Sheet"],
    colors: ["#000000"],
    description: "Our signature SR1 stencil. Inspired by Sudanese allure, this design features elegant swirls and delicate leaf patterns.",
    category: "Henna Stencils",
    image: imgBase("1a1a1a", "c9a96e", "SR1+Stencil"),
    images: [imgBase("1a1a1a", "c9a96e", "SR1+Stencil")],
    featured: true
  },
  {
    id: 2,
    name: "SR10 – Lotus Mandala",
    price: 4.99,
    badge: "sale",
    oldPrice: 6.99,
    rating: 4,
    reviews: 18,
    sizes: ["XS", "S", "M", "Standard Sheet"],
    colors: ["#000000"],
    description: "A beautiful, modern lotus design. Perfect for central hand placements and festive occasions.",
    category: "Henna Stencils",
    image: imgBase("1a1a1a", "c9a96e", "SR10+Lotus"),
    images: [imgBase("1a1a1a", "c9a96e", "SR10+Lotus")]
  },

  // --- PRESS ON NAILS ---
  {
    id: 3,
    name: "Aurora Olive Collection",
    price: 9.99,
    badge: "new",
    rating: 5,
    reviews: 32,
    sizes: ["XS", "S", "M", "Long Almond", "Long Square", "Short Almond", "Short Square"],
    colors: ["#556b2f"],
    description: "Handmade press-on reusable nails in a stunning Aurora Olive finish. Effortless elegance for your fingertips.",
    category: "Press on Nails",
    image: imgBase("2a2a2a", "c9a96e", "Aurora+Olive"),
    images: [imgBase("2a2a2a", "c9a96e", "Aurora+Olive")],
    featured: true
  },
  {
    id: 4,
    name: "Frost Blue Collection",
    price: 9.99,
    rating: 5,
    reviews: 15,
    sizes: ["XS", "S", "M", "Long Almond", "Long Square", "Short Almond", "Short Square"],
    colors: ["#a8c3bc"],
    description: "Cool, crisp, and sophisticated. The Frost Blue collection offers a high-shine finish that lasts.",
    category: "Press on Nails",
    image: imgBase("2a2a2a", "c9a96e", "Frost+Blue"),
    images: [imgBase("2a2a2a", "c9a96e", "Frost+Blue")]
  },
  {
    id: 5,
    name: "Golden Velvet Glow",
    price: 9.99,
    badge: "new",
    rating: 5,
    reviews: 41,
    sizes: ["XS", "S", "M", "Long Almond", "Long Square", "Short Almond", "Short Square"],
    colors: ["#9b7a01"],
    description: "Luxurious velvet-texture nails with a golden undertone. Designed for those who love a bold statement.",
    category: "Press on Nails",
    image: imgBase("2a2a2a", "c9a96e", "Golden+Velvet"),
    images: [imgBase("2a2a2a", "c9a96e", "Golden+Velvet")],
    featured: true
  },
  {
    id: 6,
    name: "Lime Butterfly Collection",
    price: 9.99,
    rating: 4,
    reviews: 12,
    sizes: ["XS", "S", "M", "Long Almond", "Long Square", "Short Square"],
    colors: ["#32cd32"],
    description: "Vibrant and playful, the Lime Butterfly collection adds a pop of color to any look.",
    category: "Press on Nails",
    image: imgBase("2a2a2a", "c9a96e", "Lime+Butterfly"),
    images: [imgBase("2a2a2a", "c9a96e", "Lime+Butterfly")]
  },
  {
    id: 7,
    name: "Mystic Emerald Collection",
    price: 9.99,
    rating: 5,
    reviews: 28,
    sizes: ["XS", "S", "M", "Long Almond", "Long Square", "Short Almond", "Short Square"],
    colors: ["#043927"],
    description: "Deep, rich emerald tones with a handmade finish. Reusable and durable.",
    category: "Press on Nails",
    image: imgBase("2a2a2a", "c9a96e", "Mystic+Emerald"),
    images: [imgBase("2a2a2a", "c9a96e", "Mystic+Emerald")]
  },

  // --- BRIDAL JEWELLERY ---
  {
    id: 8,
    name: "Golden Élysée Set",
    price: 220.00,
    badge: "new",
    rating: 5,
    reviews: 10,
    sizes: ["XS", "S", "M", "One Size (Adjustable)"],
    colors: ["#ffd700"],
    description: "A masterpiece of bridal artistry. The Golden Élysée set features intricate gold-plated detailing for the modern bride.",
    category: "Bridal Jewellery",
    image: imgBase("000000", "c9a96e", "Golden+Elysee"),
    images: [imgBase("000000", "c9a96e", "Golden+Elysee")],
    featured: true
  },
  {
    id: 9,
    name: "Luminous Bloom Headpiece",
    price: 200.00,
    rating: 5,
    reviews: 7,
    sizes: ["XS", "S", "M", "Flexible Fit"],
    colors: ["#ffd700", "#ffffff"],
    description: "A delicate floral-inspired headpiece that catches the light beautifully. The perfect finishing touch for a bridal look.",
    category: "Bridal Jewellery",
    image: imgBase("000000", "c9a96e", "Luminous+Bloom"),
    images: [imgBase("000000", "c9a96e", "Luminous+Bloom")]
  }
];

export const testimonials = [
  {
    stars: "★★★★★",
    text: "SR Artémore stencils made my henna look professional with zero effort! Truly a game changer.",
    author: "Fatima",
    location: "London"
  },
  {
    stars: "★★★★★",
    text: "The Golden Élysée set is even more beautiful in person. The quality is exceptional.",
    author: "Zahra",
    location: "Dubai"
  },
  {
    stars: "★★★★★",
    text: "Obsessed with the Mystic Emerald nails. I've worn them three times already and they still look new.",
    author: "Sophie",
    location: "Paris"
  }
];