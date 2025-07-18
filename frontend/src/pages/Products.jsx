import ProductGrid from "../components/ProductGrid";
import ProductSortHeader from "../components/ProductGridHeader";
import PPH from "../components/ProductPageHeader";

const Products = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ProductSortHeader />
      <ProductGrid />
    </main>
  );
};

export default Products;
