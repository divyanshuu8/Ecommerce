import React from "react";

const ProductGrid = ({ products = [] }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-green-600 font-bold">₹{product.price}</p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
            &lt;
          </button>
          <button className="px-3 py-1 rounded-md bg-green-600 text-white">
            1
          </button>
          <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
            3
          </button>
          <span className="text-gray-500">...</span>
          <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">
            8
          </button>
          <button className="px-3 py-1 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
            &gt;
          </button>
        </nav>
      </div>
    </>
  );
};

export default ProductGrid;
