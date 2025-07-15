import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCategories from "./components/FeaturedCategories ";
import FeaturedProducts from "./components/Products";
import Testimonials from "./components/Testimonial";
import Footer from "./components/Footer";
import Newsletter from "./components/NewsLetter";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
