import React from "react";

const categories = [
  {
    icon: "fas fa-utensils",
    title: "Kitchen",
    description: "Sustainable kitchen essentials",
  },
  {
    icon: "fas fa-tshirt",
    title: "Fashion",
    description: "Eco-friendly clothing",
  },
  {
    icon: "fas fa-home",
    title: "Home",
    description: "Sustainable home goods",
  },
  {
    icon: "fas fa-spa",
    title: "Beauty",
    description: "Natural beauty products",
  },
];

const FeaturedCategories = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
            Categories
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Shop by Category
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg"
              >
                <div className="p-4 text-center">
                  <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-primary-100 mb-3">
                    <i className={`${cat.icon} text-primary-600 text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {cat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
