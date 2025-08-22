import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductPageMain({ product }) {
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [zoomed, setZoomed] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { addToCart, openCart } = useCart();
  const [addedProductId, setAddedProductId] = useState(null);
  const handleAddToCart = (product) => {
    addToCart(product.id); // Pass only ID (CartContext fetches full product)

    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 3000);
  };

  const handleBuyNow = (product) => {
    handleAddToCart(product);
    openCart();
  };

  const increaseQuantity = () => setQuantity((q) => Math.min(q + 1, 5));
  const decreaseQuantity = () => setQuantity((q) => Math.max(q - 1, 1));

  return (
    <main className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Gallery */}
        <div className="lg:w-1/2 sticky-image">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Selected product"
                onClick={() => setZoomed(true)}
                className="w-full h-auto rounded-lg object-cover cursor-zoom-in"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setMainImage(img)}
                  className="cursor-pointer image-thumbnail"
                >
                  <img
                    src={img.replace("1000", "200")}
                    alt="Thumbnail"
                    className="w-full h-auto rounded"
                  />
                </div>
              ))}
            </div>
            {zoomed && (
              <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                <div className="relative max-w-4xl w-full">
                  <button
                    onClick={() => setZoomed(false)}
                    className="absolute -top-10 right-0 text-white text-2xl"
                  >
                    &times;
                  </button>
                  <img
                    src={mainImage}
                    alt="Zoomed product image"
                    className="w-full h-auto max-h-screen"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 flex space-x-2">
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full">
              <i className="fas fa-share-alt mr-2"></i> Share
            </button>
            <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full">
              <i className="far fa-heart mr-2"></i> Save
            </button>
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.title}
            </h1>
            <div className="flex items-center mb-4">
              <span className="text-gray-600 mr-4">
                by{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  {product.brand}
                </a>
              </span>
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-1">
                  {[...Array(4)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <a
                  href="#reviews"
                  className="text-blue-600 text-sm hover:underline"
                >
                  ({product.reviews_count} reviews)
                </a>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-gray-900">
                  {product.pricing.current_price}
                </span>
                <span className="ml-3 text-lg text-gray-500 line-through">
                  {product.pricing.original_price}
                </span>
                <span className="ml-3 bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded">
                  {product.pricing.discount_percentage}% OFF
                </span>
              </div>
              <p className="text-green-600 text-sm mt-1">
                In Stock (Only {product.availability.stock_left} left)
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Color</h3>
              <div className="flex space-x-3">
                {["black", "gray-300", "blue-600", "red-500"].map(
                  (color, i) => (
                    <button
                      key={i}
                      className={`w-10 h-10 rounded-full bg-${color} border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200`}
                    ></button>
                  )
                )}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Quantity
              </h3>
              <div className="flex items-center">
                <div className="flex border border-gray-300 rounded-md">
                  <button
                    className="px-3 bg-gray-100 hover:bg-gray-200"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    min={1}
                    max={5}
                    readOnly
                    className="w-16 text-center border-0 focus:ring-0"
                  />
                  <button
                    className="px-3 bg-gray-100 hover:bg-gray-200"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
                <span className="ml-3 text-sm text-gray-500">
                  Max {product.availability.max_per_customer} per customer
                </span>
              </div>
            </div>

            <div className="flex flex-col space-y-3 mb-6">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center"
              >
                <i className="fas fa-shopping-cart mr-2"></i> Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(product)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-md font-medium flex items-center justify-center"
              >
                <i className="fas fa-bolt mr-2"></i> Buy Now
              </button>
            </div>

            <div className="border-t border-b border-gray-200 py-4 mb-6">
              <div className="flex items-start mb-3">
                <i className="fas fa-truck text-gray-500 mt-1 mr-3"></i>
                <div>
                  <h3 className="font-medium text-gray-900">Free Delivery</h3>
                  <p className="text-gray-600 text-sm">
                    Get free delivery on all orders over $50
                  </p>
                  <a href="#" className="text-blue-600 text-sm hover:underline">
                    Enter your postal code for delivery options
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-undo-alt text-gray-500 mt-1 mr-3"></i>
                <div>
                  <h3 className="font-medium text-gray-900">
                    Returns & Refunds
                  </h3>
                  <p className="text-gray-600 text-sm">
                    30-day free returns.{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Highlights
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {product.highlights.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
