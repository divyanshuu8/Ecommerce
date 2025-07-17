import { useState } from "react";
import { ChevronDown, SlidersHorizontal, Star } from "lucide-react";

export default function PPH() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleFilterSection = () => setFiltersOpen(!filtersOpen);
  return (
    <>
      {/* Page Title */}
      <div className="text-center mb-12">
        <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
          Sustainable Living
        </h2>
        <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Our Eco-Friendly Products
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
          Carefully curated selection of sustainable products for your home and
          lifestyle
        </p>
      </div>

      {/* Content Grid */}
      <div className="flex flex-col gap-8">
        {/* Filters Section */}
        <div className="min-w-[260px] flex-shrink-0 bg-white rounded-lg shadow-sm h-full flex flex-col">
          <div
            className="flex justify-between items-center p-4 border-b cursor-pointer"
            onClick={toggleFilterSection}
          >
            <h3 className="text-lg font-medium text-gray-900">Filters</h3>
            <ChevronDown
              className={`text-gray-500 transition-transform duration-200 ${
                filtersOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          {filtersOpen && (
            <div className="p-4 space-y-6">
              {/* Price Range */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </h4>
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>$0</span>
                  <span>$100+</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="100"
                  className="w-full"
                />
                <div className="flex justify-between mt-2 text-sm font-medium text-gray-700">
                  <span>$0</span>
                  <span>$100+</span>
                </div>
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Categories
                </h4>
                {["Kitchen", "Bathroom", "Garden", "Clothing"].map((cat) => (
                  <label key={cat} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 text-green-600"
                      value={cat.toLowerCase()}
                    />
                    <span className="text-sm text-gray-700">{cat}</span>
                  </label>
                ))}
              </div>

              {/* Sustainability Features */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Sustainability Features
                </h4>
                {[
                  "Biodegradable",
                  "Recycled Materials",
                  "Vegan",
                  "Plastic-Free",
                ].map((feat) => (
                  <label key={feat} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 text-green-600"
                      value={feat.toLowerCase()}
                    />
                    <span className="text-sm text-gray-700">{feat}</span>
                  </label>
                ))}
              </div>

              {/* Ratings */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Customer Ratings
                </h4>
                {[4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="rating"
                      value={rating}
                      defaultChecked={rating === 2}
                      className="h-4 w-4 text-green-600"
                    />
                    <span className="text-sm text-gray-700 flex items-center gap-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < rating ? "text-yellow-400" : "text-gray-300"
                          }`}
                          fill={i < rating ? "currentColor" : "none"}
                        />
                      ))}
                      & Up
                    </span>
                  </label>
                ))}
              </div>

              <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition text-sm">
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
