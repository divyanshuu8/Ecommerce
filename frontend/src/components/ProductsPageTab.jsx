// components/ProductTabs.jsx
import React, { useState } from "react";

const tabs = [
  { id: "specs", label: "Specifications" },
  { id: "reviews", label: "Reviews (143)" },
  { id: "qna", label: "Q&A (23)" },
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("specs");

  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => openTab(tab.id)}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {/* Specs Tab */}
        {activeTab === "specs" && (
          <div id="specs" className="tab-content">
            <h3 className="text-lg font-bold text-gray-900 mb-3">General</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Brand: Apple</li>
              <li>Model: iPhone 15 Pro</li>
              <li>Storage: 256GB</li>
              <li>Color: Space Black</li>
            </ul>
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">
              Features
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>A17 Bionic Chip</li>
              <li>6.1-inch Super Retina XDR display</li>
              <li>ProMotion with 120Hz refresh rate</li>
              <li>5G Ready</li>
            </ul>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === "reviews" && (
          <div id="reviews" className="tab-content">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Customer Reviews
            </h2>

            <div className="space-y-4">
              <div className="p-4 border rounded-lg bg-gray-50">
                <p className="font-semibold text-gray-800">⭐ ⭐ ⭐ ⭐ ⭐</p>
                <p className="text-gray-700">
                  Amazing product! Battery life is excellent and camera quality
                  is top-notch.
                </p>
                <p className="text-sm text-gray-500 mt-2">— John D.</p>
              </div>

              <div className="p-4 border rounded-lg bg-gray-50">
                <p className="font-semibold text-gray-800">⭐ ⭐ ⭐ ⭐</p>
                <p className="text-gray-700">
                  Great phone overall but a little expensive. The display is
                  beautiful though.
                </p>
                <p className="text-sm text-gray-500 mt-2">— Sarah K.</p>
              </div>
            </div>
          </div>
        )}

        {/* Q&A Tab */}
        {activeTab === "qna" && (
          <div id="qna" className="tab-content">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Customer Questions & Answers
            </h2>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-gray-800">
                  Q: Does it support fast charging?
                </p>
                <p className="text-gray-700">
                  A: Yes, it supports up to 30W fast charging with a compatible
                  charger.
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  Q: Is it water resistant?
                </p>
                <p className="text-gray-700">
                  A: Yes, it has IP68 water and dust resistance.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
