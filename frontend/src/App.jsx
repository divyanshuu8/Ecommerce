import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Newsletter from "./components/NewsLetter";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import TrackOrder from "./pages/TrackOrder";
import ContactPage from "./pages/Contact";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/prefw1" element={<ProductPage />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Newsletter />
      <Footer />
    </Router>
  );
}

export default App;
