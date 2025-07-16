import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const products = [
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
];

const FeaturedProducts = () => {
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
    openCart(); // Ensure this exists in your context to open CartPanel
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
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>

                <div className="mt-4 flex justify-between bg-white p-4 rounded-b-lg">
                  <div>
                    <h3 className="text-sm text-gray-700">{product.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.description}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>

                <div className="bg-white px-4 pb-4">
                  {addedProductId === index ? (
                    <button
                      onClick={() => openCart()}
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition text-sm"
                    >
                      <i className="fas fa-shopping-cart mr-2"></i> View Cart
                    </button>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleAddToCart(product, index)}
                        className="flex-1 bg-green-600 text-white py-2 px-3 rounded hover:bg-green-700 transition text-sm flex items-center justify-center"
                      >
                        <i className="fas fa-cart-plus mr-1"></i>
                        Add
                      </button>
                      <button
                        onClick={() => handleBuyNow(product, index)}
                        className="flex-1 bg-yellow-500 text-white py-2 px-3 rounded hover:bg-yellow-600 transition text-sm flex items-center justify-center"
                      >
                        <i className="fas fa-bolt mr-1"></i>
                        Buy
                      </button>
                    </div>
                  )}
                </div>

                {product.badge && (
                  <div className="absolute top-3 right-3 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {product.badge}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
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
