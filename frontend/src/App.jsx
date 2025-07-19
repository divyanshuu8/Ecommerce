import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Newsletter from "./components/NewsLetter";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Newsletter />
      <Footer />
    </Router>
  );
}

export default App;
