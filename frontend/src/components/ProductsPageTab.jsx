// components/ProductTabs.jsx
import React, { useState } from "react";

const tabs = [
  { id: "specs", label: "Specifications" },
  { id: "reviews", label: "Reviews (142)" },
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
              className={`tab-button py-4 px-6 text-center border-b-2 font-medium text-sm ${
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
        {activeTab === "specs" && (
          <div id="specs" className="tab-content">
            {/* Paste your specifications HTML content here */}
            <h3 className="text-lg font-bold text-gray-900 mb-3">General</h3>
            {/* Add your specification tables here... */}
          </div>
        )}

        {activeTab === "reviews" && (
          <div id="reviews" className="tab-content">
            {/* Paste your reviews HTML content here */}
            <h2 className="text-xl font-bold text-gray-900">
              Customer Reviews
            </h2>
            {/* Add review blocks here... */}
          </div>
        )}

        {activeTab === "qna" && (
          <div id="qna" className="tab-content">
            {/* Paste your Q&A HTML content here */}
            <h2 className="text-xl font-bold text-gray-900">
              Customer Questions & Answers
            </h2>
            {/* Add Q&A blocks here... */}
          </div>
        )}
      </div>
    </div>
  );
}
