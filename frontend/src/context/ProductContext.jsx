import React, { createContext, useContext, useState } from "react";

// Sample product data
const initialProducts = [
  {
    id: 1,
    title: "AudioTech Pro X7",
    brand: "AudioTech",
    reviews_count: 142,
    badge: "new",
    description: "Loda",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1000&q=80",
    ],
    pricing: {
      current_price: 249.99,
      original_price: 299.99,
      currency: "USD",
      discount_percentage: 17,
    },
    availability: {
      status: "In Stock",
      stock_left: 5,
      max_per_customer: 5,
    },
    options: {
      color: ["Black", "Silver", "Blue"],
    },
    highlights: [
      "Active Noise Cancellation technology",
      "Up to 30 hours of battery life",
      "Hi-Res Audio certified",
      "Built-in Alexa and Google Assistant",
      "Multi-point Bluetooth connectivity",
      "Comfortable over-ear design with memory foam",
    ],
    tabs: {
      specifications: {
        general: {
          brand: "Apple",
          model: "iPhone 15 Pro",
          storage: "256GB",
          color: "Space Black",
        },
        features: [
          "A17 Bionic Chip",
          "6.1-inch Super Retina XDR display",
          "ProMotion with 120Hz refresh rate",
          "5G Ready",
        ],
      },
      reviews: [
        {
          rating: 5,
          text: "Amazing product! Battery life is excellent and camera quality is top-notch.",
          author: "John D.",
        },
        {
          rating: 4,
          text: "Great phone overall but a little expensive. The display is beautiful though.",
          author: "Sarah K.",
        },
      ],
      qna: [
        {
          question: "Does it support fast charging?",
          answer:
            "Yes, it supports up to 30W fast charging with a compatible charger.",
        },
        {
          question: "Is it water resistant?",
          answer: "Yes, it has IP68 water and dust resistance.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "EcoBrew Smart Coffee Maker",
    brand: "EcoBrew",
    reviews_count: 98,
    description: "Loda",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1000&q=80",
    ],
    pricing: {
      current_price: 149.99,
      original_price: 199.99,
      currency: "USD",
      discount_percentage: 25,
    },
    availability: {
      status: "In Stock",
      stock_left: 12,
      max_per_customer: 3,
    },
    options: {
      color: ["Black", "White"],
    },
    highlights: [
      "Wi-Fi enabled smart brewing",
      "Eco-friendly reusable filters",
      "Schedule brews from your phone",
      "Keeps coffee warm for 4 hours",
    ],
    tabs: {
      specifications: {
        general: {
          brand: "EcoBrew",
          model: "SmartBrew 3000",
          capacity: "1.2L",
          color: "Black",
        },
        features: [
          "Smartphone app control",
          "Energy-saving mode",
          "Reusable stainless steel filter",
        ],
      },
      reviews: [
        {
          rating: 5,
          text: "Love being able to brew from bed using the app!",
          author: "Emily R.",
        },
        {
          rating: 4,
          text: "Brews fast and tastes great, but wish it had more colors.",
          author: "Daniel W.",
        },
      ],
      qna: [
        {
          question: "Does it work with Alexa?",
          answer: "Yes, it integrates with Alexa and Google Home.",
        },
        {
          question: "Can I use paper filters?",
          answer:
            "Yes, though it comes with a reusable stainless steel filter.",
        },
      ],
    },
  },
  {
    id: 3,
    title: "FitPulse Pro Smartwatch",
    brand: "FitPulse",
    reviews_count: 210,
    description: "Loda",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=1000&q=80",
    ],
    pricing: {
      current_price: 199.99,
      original_price: 249.99,
      currency: "USD",
      discount_percentage: 20,
    },
    availability: {
      status: "In Stock",
      stock_left: 20,
      max_per_customer: 2,
    },
    options: {
      color: ["Black", "Rose Gold", "Silver"],
    },
    highlights: [
      "Tracks heart rate, steps, and sleep",
      "GPS + Workout modes",
      "Up to 10 days of battery life",
      "Water-resistant up to 50m",
    ],
    tabs: {
      specifications: {
        general: {
          brand: "FitPulse",
          model: "Pro 2",
          display: "1.5-inch AMOLED",
          battery: "10 days",
        },
        features: [
          "Heart rate monitor",
          "GPS tracking",
          "Waterproof up to 50m",
          "Compatible with iOS & Android",
        ],
      },
      reviews: [
        {
          rating: 5,
          text: "Perfect for my workouts and daily tracking.",
          author: "Lisa M.",
        },
        {
          rating: 4,
          text: "Battery is great, but the strap could be better.",
          author: "Chris J.",
        },
      ],
      qna: [
        {
          question: "Is it waterproof?",
          answer: "Yes, up to 50m depth.",
        },
        {
          question: "Can I reply to messages?",
          answer: "Yes, with quick replies on Android.",
        },
      ],
    },
  },
];

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  // Filter state
  const [filters, setFilters] = useState({
    categories: [],
    features: [],
    minPrice: 0,
    maxPrice: 1000,
    rating: null,
  });

  // Filtering logic
  const filteredProducts = products.filter((product) => {
    const price = product.pricing?.current_price ?? 0;
    if (price < filters.minPrice || price > filters.maxPrice) return false;

    // Category filter (check in title/brand)
    if (
      filters.categories.length > 0 &&
      !filters.categories.some(
        (cat) =>
          product.title.toLowerCase().includes(cat.toLowerCase()) ||
          product.brand.toLowerCase().includes(cat.toLowerCase())
      )
    )
      return false;

    // Feature filter (check in highlights)
    if (
      filters.features.length > 0 &&
      !filters.features.some((feat) =>
        product.highlights.some((h) =>
          h.toLowerCase().includes(feat.toLowerCase())
        )
      )
    )
      return false;

    // Rating filter (if implemented later)
    return true;
  });

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        filters,
        setFilters,
        filteredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
