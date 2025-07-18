import React, { useState } from "react";
import { useProducts } from "../context/ProductContext";
import ProductCard from "./Product";
import { useCart } from "../context/CartContext";

const ProductGrid = () => {
  const { filteredProducts } = useProducts();
  const { addToCart, openCart } = useCart();
  const [addedProductId, setAddedProductId] = useState(null);

  const handleAddToCart = (product, index) => {
    addToCart({
      id: index,
      name: product.title,
      price: parseFloat(product.price.replace("$", "")),
      image: product.image,
    });

    setAddedProductId(index);
    setTimeout(() => setAddedProductId(null), 3000);
  };

  const handleBuyNow = (product, index) => {
    handleAddToCart(product, index);
    openCart();
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              index={index}
              addedProductId={addedProductId}
              openCart={openCart}
              handleAddToCart={handleAddToCart}
              handleBuyNow={handleBuyNow}
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      {/* Pagination */}
      <div className="mt-10 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
            &lt;
          </button>
          <button className="px-3 py-1 rounded-md bg-green-600 text-white">
            1
          </button>
          <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
            3
          </button>
          <span className="text-gray-500">...</span>
          <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
            8
          </button>
          <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
            &gt;
          </button>
        </nav>
      </div>
    </>
  );
};

export default ProductGrid;
