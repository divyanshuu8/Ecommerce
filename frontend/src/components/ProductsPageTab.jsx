// components/ProductTabs.jsx
import React, { useState } from "react";


const tabs = [
  { id: "specs", label: "Specifications" },
  { id: "reviews", label: "Reviews (143)" },
  { id: "qna", label: "Q&A (23)" },
];

export default function ProductTabs({ product }) {
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
            <div className="grid md:grid-cols-2 gap-6">
              {/* General */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  General
                </h3>
                <table className="w-full text-sm text-gray-700">
                  <tbody>
                    {Object.entries(product.tabs.specifications.general).map(
                      ([key, value]) => (
                        <tr key={key} className="border-b border-gray-200">
                          <td className="py-2 font-medium capitalize">{key}</td>
                          <td className="py-2">{value}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Features
                </h3>
                <table className="w-full text-sm text-gray-700">
                  <tbody>
                    {product.tabs.specifications.features.map(
                      (feature, idx) => (
                        <tr key={idx} className="border-b border-gray-200">
                          <td className="py-2 font-medium">
                            Feature {idx + 1}
                          </td>
                          <td className="py-2">{feature}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === "reviews" && (
          <div id="reviews" className="tab-content">
            <div className="space-y-4">
              {product?.tabs?.reviews?.length > 0 ? (
                product.tabs.reviews.map((review, idx) => (
                  <div key={idx} className="p-4 border rounded-lg bg-gray-50">
                    <p className="font-semibold text-gray-800">
                      {"⭐".repeat(review.rating)}
                    </p>
                    <p className="text-gray-700">{review.text}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      — {review.author}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No reviews yet.</p>
              )}
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
              {product?.tabs?.qna?.length > 0 ? (
                product.tabs.qna.map((item, idx) => (
                  <div key={idx}>
                    <p className="font-semibold text-gray-800">
                      Q: {item.question}
                    </p>
                    <p className="text-gray-700">A: {item.answer}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No questions yet.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
