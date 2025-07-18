import React, { createContext, useContext, useState } from "react";

// Sample product data
const initialProducts = [
  {
    title: "Bamboo Toothbrush Set",
    description: "4-pack",
    price: "$12.99",
    image:
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    badge: "NEW",
  },
  {
    title: "Stainless Steel Bottle",
    description: "750ml",
    price: "$24.99",
    image:
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Organic Cotton Tote",
    description: "Natural color",
    price: "$18.99",
    image:
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    badge: "SALE",
  },
  {
    title: "Beeswax Food Wraps",
    description: "3-pack",
    price: "$19.99",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
  },
  {
    title: "Beeswax Food Wraps",
    description: "3-pack",
    price: "$19.99",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
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
    maxPrice: 100,
    rating: null,
  });

  // Filtering logic
  const filteredProducts = products.filter((product) => {
    // Price filter
    const price = parseFloat(product.price.replace("$", ""));
    if (price < filters.minPrice || price > filters.maxPrice) return false;

    // Category filter
    if (
      filters.categories.length > 0 &&
      !filters.categories.some((cat) =>
        product.description?.toLowerCase().includes(cat)
      )
    )
      return false;

    // Features filter
    if (
      filters.features.length > 0 &&
      !filters.features.some((feat) =>
        product.badge?.toLowerCase().includes(feat)
      )
    )
      return false;

    // Rating filter (not implemented in sample data, skip for now)
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
