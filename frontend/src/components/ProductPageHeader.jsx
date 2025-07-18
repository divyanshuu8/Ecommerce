import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { useProducts } from "../context/ProductContext";

export default function PPH() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { filters, setFilters } = useProducts();

  const toggleFilterSection = () => setFiltersOpen(!filtersOpen);

  // Handlers for filter changes
  const handleCategoryChange = (cat) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(cat)
        ? prev.categories.filter((c) => c !== cat)
        : [...prev.categories, cat],
    }));
  };

  const handleFeatureChange = (feat) => {
    setFilters((prev) => ({
      ...prev,
      features: prev.features.includes(feat)
        ? prev.features.filter((f) => f !== feat)
        : [...prev.features, feat],
    }));
  };

  const handlePriceChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      maxPrice: Number(e.target.value),
    }));
  };

  const handleRatingChange = (rating) => {
    setFilters((prev) => ({
      ...prev,
      rating,
    }));
  };

  const resetFilters = () => {
    setFilters({
      categories: [],
      features: [],
      minPrice: 0,
      maxPrice: 100,
      rating: null,
    });
  };

  return (
    <>
      {/* Page Title */}
      
    </>
  );
}
