import React from "react";

const testimonials = [
  {
    name: "Sarah J.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
    text: `I've completely switched to GreenLeaf products and couldn't be happier. 
           The quality is amazing and I love knowing I'm reducing my environmental impact.`,
  },
  {
    name: "Michael T.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    text: `The bamboo toothbrushes are fantastic! They feel just as good as plastic ones 
           but without the guilt. Will definitely be ordering more.`,
  },
  {
    name: "Emily R.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4.5,
    text: `I bought the reusable produce bags and they've been a game changer 
           for my grocery shopping. So much better than plastic!`,
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <i key={i} className="fas fa-star" />
      ))}
      {hasHalfStar && <i className="fas fa-star-half-alt" />}
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our Customers Say
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src={t.image}
                  alt={t.name}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{t.name}</h3>
                  <StarRating rating={t.rating} />
                </div>
              </div>
              <p className="text-gray-600">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
