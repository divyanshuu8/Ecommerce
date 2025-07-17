import Hero from "../components/Hero";
import FeaturedCategories from "../components/FeaturedCategories ";
import FeaturedProducts from "../components/Products";
import Testimonials from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <Testimonials />
    </>
  );
};

export default Home;
