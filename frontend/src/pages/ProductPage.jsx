import React, { useState, useEffect } from "react";
import "./ProductPage.css";
import ProductPageMain from "../components/ProductPageMain";
import ProductTabs from "../components/ProductsPageTab";

const ProductPage = () => {
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
        <ProductPageMain />
        <ProductTabs />
      </main>
    </>
  );
};

export default ProductPage;
