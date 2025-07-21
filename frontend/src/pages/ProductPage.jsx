import React, { useState, useEffect } from "react";

const productImages = [
  "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
];
const thumbnails = [
  "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
];
const colorOptions = [
  { name: "black", class: "bg-black", title: "Black" },
  { name: "white", class: "bg-white border border-gray-300", title: "White" },
  { name: "blue", class: "bg-blue-500", title: "Blue" },
  { name: "red", class: "bg-red-500", title: "Red" },
];
const tabLabels = ["Description", "Specifications", "Shipping Info"];
const ratingSummary = [
  { star: "5★", percent: "85%", count: "1,061" },
  { star: "4★", percent: "10%", count: "124" },
  { star: "3★", percent: "3%", count: "37" },
  { star: "2★", percent: "1%", count: "15" },
  { star: "1★", percent: "1%", count: "11" },
];

const ProductPage = () => {
  // Color selection
  const [selectedColor, setSelectedColor] = useState("black");
  // Quantity
  const [quantity, setQuantity] = useState(1);
  // Tabs
  const [activeTab, setActiveTab] = useState(0);
  // Countdown
  const [countdown, setCountdown] = useState({ min: 29, sec: 59 });
  // Image gallery
  const [mainImage, setMainImage] = useState(productImages[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.min === 0 && prev.sec === 0) return prev;
        if (prev.sec === 0) return { min: prev.min - 1, sec: 59 };
        return { min: prev.min, sec: prev.sec - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Announcement Bar */}
      <div className="bg-blue-600 text-white text-center py-2 px-4">
        <p className="text-sm md:text-base">
          🚀 Dropshipping Special! Free Shipping Worldwide • 24/7 Support •
          30-Day Money Back Guarantee
        </p>
      </div>

      {/* Main Product Section */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Images */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
              <img
                src={mainImage}
                alt="Premium Wireless Earbuds"
                className="product-image w-full h-auto object-cover transition-all duration-300"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {thumbnails.map((thumb, idx) => (
                <div
                  key={idx}
                  className="border rounded-md overflow-hidden cursor-pointer"
                >
                  <img
                    src={thumb}
                    alt={`Earbuds thumbnail ${idx + 1}`}
                    className="w-full h-auto"
                    onClick={() => setMainImage(thumb.replace("200", "800"))}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Product Info */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    ProX Wireless Earbuds
                  </h1>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <span className="text-gray-600 ml-2">
                      4.7 (1,248 reviews)
                    </span>
                  </div>
                </div>
                <div className="discount-badge bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -35% OFF
                </div>
              </div>
              <div className="mb-6">
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-gray-800">
                    $49.99
                  </span>
                  <span className="text-lg text-gray-500 line-through ml-2">
                    $79.99
                  </span>
                </div>
                <div className="text-green-600 font-medium mt-1">
                  In Stock (Ready to Ship)
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Color Options</h3>
                <div className="flex space-x-3">
                  {colorOptions.map((opt) => (
                    <div
                      key={opt.name}
                      className={`color-option w-10 h-10 rounded-full border-2 border-white shadow-md cursor-pointer ${
                        opt.class
                      } ${selectedColor === opt.name ? "selected" : ""}`}
                      title={opt.title}
                      onClick={() => setSelectedColor(opt.name)}
                    />
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Quantity</h3>
                <div className="flex items-center border rounded-md w-fit">
                  <button
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <span className="px-4 py-2 border-x text-center w-16">
                    {quantity}
                  </span>
                  <button
                    className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-shipping-fast text-blue-600 text-xl mr-3"></i>
                  <div>
                    <p className="font-medium text-gray-800">
                      Fast & Free Shipping
                    </p>
                    <p className="text-sm text-gray-600">
                      Delivered in 3-7 business days
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex-1 flex items-center justify-center transition duration-300">
                  <i className="fas fa-shopping-cart mr-2"></i> Add to Cart
                </button>
                <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg flex-1 flex items-center justify-center transition duration-300">
                  <i className="fas fa-bolt mr-2"></i> Buy Now
                </button>
              </div>
              <div className="border-t pt-4">
                <div className="flex items-center mb-2">
                  <i className="fas fa-shield-alt text-gray-500 mr-2"></i>
                  <span className="text-gray-700">
                    30-Day Money Back Guarantee
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <i className="fas fa-headphones text-gray-500 mr-2"></i>
                  <span className="text-gray-700">24/7 Customer Support</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-globe text-gray-500 mr-2"></i>
                  <span className="text-gray-700">
                    Worldwide Shipping Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product Details Tabs */}
        <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="border-b">
            <nav className="flex -mb-px">
              {tabLabels.map((label, idx) => (
                <button
                  key={label}
                  className={`tab-button py-4 px-6 text-center border-b-2 font-medium text-sm ${
                    activeTab === idx
                      ? "border-blue-500 text-blue-600 active"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                  onClick={() => setActiveTab(idx)}
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>
          <div className="p-6">
            <div
              className={`tab-content ${activeTab === 0 ? "active" : "hidden"}`}
            >
              <h3 className="text-xl font-bold mb-4">
                Premium Wireless Earbuds with Crystal Clear Sound
              </h3>
              <p className="text-gray-700 mb-4">
                Experience music like never before with our ProX Wireless
                Earbuds. Designed for audiophiles and casual listeners alike,
                these earbuds deliver crisp highs, deep bass, and everything in
                between.
              </p>
              <div className="flex justify-center mb-4">
                <img
                  src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif"
                  alt="Music Vibes"
                  className="rounded-lg shadow-md w-64 h-40 object-cover"
                />
              </div>
              <p className="text-gray-700 mb-4">
                With advanced noise cancellation and ergonomic design, you can
                enjoy your favorite tunes anywhere—whether you're working out,
                commuting, or relaxing at home.
              </p>
              <div className="flex justify-center mb-4">
                <img
                  src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
                  alt="Earbuds Lifestyle"
                  className="rounded-lg shadow-md w-64 h-40 object-cover"
                />
              </div>
              <h4 className="font-bold mt-6 mb-2">Key Features:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Advanced Bluetooth 5.2 technology for stable connection</li>
                <li>Up to 8 hours of playtime (32 hours with charging case)</li>
                <li>IPX7 waterproof rating - perfect for workouts and rain</li>
                <li>Noise cancellation technology for immersive sound</li>
                <li>Touch controls for easy operation</li>
                <li>Ergonomic design for all-day comfort</li>
                <li>Built-in microphone for crystal clear calls</li>
              </ul>
              <h4 className="font-bold mt-6 mb-2">What's in the Box:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>ProX Wireless Earbuds (Left & Right)</li>
                <li>Charging Case</li>
                <li>USB-C Charging Cable</li>
                <li>3 Pairs of Silicone Ear Tips (S/M/L)</li>
                <li>User Manual</li>
                <li>Warranty Card</li>
              </ul>
            </div>
            <div
              className={`tab-content ${activeTab === 1 ? "active" : "hidden"}`}
            >
              {/* Specifications dummy data */}
              <h3 className="text-xl font-bold mb-4">Specifications</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Bluetooth Version: 5.2</li>
                <li>Battery Life: 8 hours (earbuds), 32 hours (with case)</li>
                <li>Charging Port: USB-C</li>
                <li>Waterproof Rating: IPX7</li>
                <li>Noise Cancellation: Yes</li>
                <li>Weight: 45g (with case)</li>
                <li>Compatible Devices: iOS, Android, Windows</li>
              </ul>
            </div>
            <div
              className={`tab-content ${activeTab === 2 ? "active" : "hidden"}`}
            >
              {/* Shipping Info dummy data */}
              <h3 className="text-xl font-bold mb-4">Shipping Information</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Free worldwide shipping on all orders</li>
                <li>Estimated delivery: 3-7 business days</li>
                <li>Order tracking available</li>
                <li>Ships from multiple international warehouses</li>
                <li>30-day money back guarantee</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
            <i className="fas fa-check-circle text-green-500 text-3xl mb-2"></i>
            <p className="text-sm font-medium text-center">
              Verified Authentic Products
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
            <i className="fas fa-truck text-blue-500 text-3xl mb-2"></i>
            <p className="text-sm font-medium text-center">
              Fast Worldwide Shipping
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
            <i className="fas fa-lock text-purple-500 text-3xl mb-2"></i>
            <p className="text-sm font-medium text-center">Secure Payment</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
            <i className="fas fa-headset text-orange-500 text-3xl mb-2"></i>
            <p className="text-sm font-medium text-center">
              24/7 Customer Support
            </p>
          </div>
        </div>
        {/* Limited Time Offer */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg overflow-hidden text-white">
          <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Limited Time Offer!
              </h3>
              <p className="text-blue-100">
                Order in the next{" "}
                <span id="countdown" className="font-bold">{`${countdown.min
                  .toString()
                  .padStart(2, "0")}:${countdown.sec
                  .toString()
                  .padStart(2, "0")}`}</span>{" "}
                and get free shipping + a free silicone case!
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300">
                Claim Your Discount Now
              </button>
            </div>
          </div>
        </div>
        {/* Frequently Bought Together */}
        
        {/* Reviews Section at the bottom */}
        <div className="mt-12 rounded-xl shadow-xl p-8 bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
          <div className="space-y-8">
            <h3 className="text-3xl font-extrabold text-green-700 mb-8 text-center">
              Customer Reviews
            </h3>
            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10 mb-10">
              <div className="mb-6 md:mb-0 flex flex-col items-center">
                <div className="text-5xl font-bold text-green-600 mb-2">
                  4.7
                </div>
                <div className="flex text-yellow-400 text-lg mb-1">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="text-gray-500 text-base">1,248 reviews</div>
              </div>
              <div className="flex-1 w-full space-y-2">
                {ratingSummary.map((r, i) => (
                  <div key={i} className="flex items-center">
                    <span className="w-10 text-sm text-gray-500">{r.star}</span>
                    <div className="w-48 bg-gray-200 rounded-full h-2 mx-2">
                      <div
                        className="bg-green-400 h-2 rounded-full"
                        style={{ width: r.percent }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500">{r.count}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Review 1 */}
              <div className="bg-white p-6 rounded-xl shadow flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/43.jpg"
                    alt="Sarah J."
                    className="w-14 h-14 rounded-full mr-4 border-2 border-green-300"
                  />
                  <div>
                    <h4 className="font-bold text-green-700">Sarah J.</h4>
                    <div className="flex text-yellow-400 text-base">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 flex-1">
                  "The sound quality is amazing! Better than my old $200
                  earbuds. The battery life is impressive too - I use them all
                  day at work without needing to recharge."
                </p>
                <div className="flex space-x-2 mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Review photo"
                    className="w-16 h-16 object-cover rounded-lg border"
                  />
                </div>
                <div className="text-sm text-gray-400 mt-auto">
                  Posted 2 weeks ago
                </div>
              </div>
              {/* Review 2 */}
              <div className="bg-white p-6 rounded-xl shadow flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Michael T."
                    className="w-14 h-14 rounded-full mr-4 border-2 border-green-300"
                  />
                  <div>
                    <h4 className="font-bold text-green-700">Michael T.</h4>
                    <div className="flex text-yellow-400 text-base">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 flex-1">
                  "Perfect for workouts! They stay in place no matter how
                  intense my training gets. The waterproof feature gives me
                  peace of mind when I'm sweating buckets."
                </p>
                <div className="text-sm text-gray-400 mt-auto">
                  Posted 1 month ago
                </div>
              </div>
              {/* Review 3 */}
              <div className="bg-white p-6 rounded-xl shadow flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    alt="Jennifer L."
                    className="w-14 h-14 rounded-full mr-4 border-2 border-green-300"
                  />
                  <div>
                    <h4 className="font-bold text-green-700">Jennifer L.</h4>
                    <div className="flex text-yellow-400 text-base">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 flex-1">
                  "Great value for money. The noise cancellation works
                  surprisingly well for the price. My only minor complaint is
                  the case could be a bit more compact."
                </p>
                <div className="flex space-x-2 mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Review photo"
                    className="w-16 h-16 object-cover rounded-lg border"
                  />
                </div>
                <div className="text-sm text-gray-400 mt-auto">
                  Posted 3 weeks ago
                </div>
              </div>
              {/* Review 4 */}
              <div className="bg-white p-6 rounded-xl shadow flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="David K."
                    className="w-14 h-14 rounded-full mr-4 border-2 border-green-300"
                  />
                  <div>
                    <h4 className="font-bold text-green-700">David K.</h4>
                    <div className="flex text-yellow-400 text-base">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 flex-1">
                  "The touch controls are very responsive and intuitive. I use
                  them for calls all day and everyone says the mic quality is
                  crystal clear. Highly recommend!"
                </p>
                <div className="text-sm text-gray-400 mt-auto">
                  Posted 5 days ago
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="mt-8 bg-green-600 border border-green-700 text-white hover:bg-green-700 font-semibold py-2 px-8 rounded-lg shadow transition duration-300">
                Load More Reviews
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* Floating Add to Cart Button (Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex justify-between items-center z-10">
        <div>
          <p className="text-gray-800 font-bold">$49.99</p>
          <p className="text-gray-500 text-sm line-through">$79.99</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center floating-cart">
          <i className="fas fa-shopping-cart mr-2"></i> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
