import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "./Product";
import { useProducts } from "../context/ProductContext"; // use product context

const FeaturedProducts = () => {
  const { products } = useProducts(); // get products from context
  const { addToCart, openCart } = useCart();
  const [addedProductId, setAddedProductId] = useState(null);
  const latestProducts = products.slice(-4).reverse();

  const handleAddToCart = (product) => {
    addToCart(product.id); // Pass only ID (CartContext fetches full product)

    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 3000);
  };

  const handleBuyNow = (product) => {
    handleAddToCart(product);
    openCart();
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
            Products
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Featured Products
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Carefully curated selection of our most popular sustainable products
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {latestProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                index={index}
                addedProductId={addedProductId}
                openCart={openCart}
                handleAddToCart={handleAddToCart}
                handleBuyNow={handleBuyNow}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/products"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
          >
            View All Products
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
