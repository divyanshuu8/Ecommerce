import React from "react";

const ProductSortHeader = ({ totalProducts = 12, onSortChange }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col sm:flex-row justify-between items-center">
      <p className="text-sm text-gray-700 mb-2 sm:mb-0">
        Showing {totalProducts} products
      </p>
      <div className="flex items-center">
        <label htmlFor="sort" className="text-sm text-gray-700 mr-2">
          Sort by:
        </label>
        <select
          id="sort"
          className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="popular">Most Popular</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Customer Rating</option>
          <option value="newest">Newest Arrivals</option>
        </select>
      </div>
    </div>
  );
};

export default ProductSortHeader;
