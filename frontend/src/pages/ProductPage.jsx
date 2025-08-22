import React, { useState, useEffect } from "react";
import "./ProductPage.css";
import { useProducts } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import ProductPageMain from "../components/ProductPageMain";
import ProductTabs from "../components/ProductsPageTab";

const ProductPage = () => {
  const { id } = useParams(); // grabs product id from URL
  const { products } = useProducts();

  // find the matching product
  const product = products.find((p) => p.id == id);
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-red-500">❌ Product not found.</p>
      </div>
    );
  }
  return (
    <>
      <div className="bg-gray-50">
        {/* Announcement Bar */}
        <div className="bg-green-600 text-white text-center py-2 px-4">
          <p className="text-sm md:text-base">
            🚀 Dropshipping Special! Free Shipping Worldwide • 24/7 Support •
            30-Day Money Back Guarantee
          </p>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductPageMain product={product} />
        <ProductTabs product={product} />
      </main>
    </>
  );
};

export default ProductPage;
