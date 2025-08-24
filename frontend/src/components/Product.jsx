// components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  product,
  index,
  addedProductId,
  openCart,
  handleAddToCart,
  handleBuyNow,
}) => {
  return (
    <div
      key={index}
      className="group relative transform transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Wrap the top part of the card with a Link */}
      <Link to={`/products/${product.id}`}>
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>

        <div className="mt-4 flex justify-between bg-white p-4 rounded-b-lg">
          <div>
            <h3 className="text-sm text-gray-700">{product.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{product.description}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">
            {product.pricing.current_price}
          </p>
        </div>
      </Link>

      {/* Actions (not wrapped in Link to keep buttons functional) */}
      <div className="bg-white px-4 pb-4">
        <div style={{ minHeight: 44 }}>
          <button
            onClick={() => openCart()}
            className={`w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition text-sm
              ${
                addedProductId === product.id
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 pointer-events-none -translate-y-2"
              }
              duration-500 ease-in-out absolute left-0`}
            style={{
              position: "absolute",
              width: "calc(100% - 2rem)",
              marginLeft: "1rem",
              marginRight: "1rem",
              zIndex: 10,
              transition: "opacity 0.5s, transform 0.5s",
            }}
          >
            <i className="fas fa-shopping-cart mr-2"></i> View Cart
          </button>
          <div
            className={`flex space-x-2 transition-all duration-500 ${
              addedProductId === index
                ? "opacity-0 pointer-events-none scale-95"
                : "opacity-100 scale-100"
            }`}
            style={{
              transition: "opacity 0.5s, transform 0.5s",
              position: "relative",
            }}
          >
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
        </div>
      </div>

      {product.badge && (
        <div className="absolute top-3 right-3 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded-full">
          {product.badge}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
