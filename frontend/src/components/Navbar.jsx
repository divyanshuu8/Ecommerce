import { useState, useEffect, useRef } from "react";
import CartPanel from "./Cart"; // make sure path is correct
import { useCart } from "../context/CartContext.jsx"; // Adjust path if needed

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const menuRef = useRef(null);
  const { cartItems } = useCart(); // 👈 Get cart items
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    if (mobileMenuOpen) setShowMenu(true);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (showMenu && menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [showMenu, mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen && showMenu) {
      const timeout = setTimeout(() => setShowMenu(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [mobileMenuOpen, showMenu]);

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo & Navigation */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <i className="fas fa-leaf text-green-600 text-2xl mr-2"></i>
                <span className="text-xl font-bold text-green-800">
                  GreenLeaf
                </span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {["Home", "Shop", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Icons */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center relative">
              <button className="px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                Login
              </button>
              <button
                onClick={() => setCartOpen(true)}
                className="ml-3 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-full relative"
              >
                <span className="sr-only">Cart</span>
                <i className="fas fa-shopping-cart"></i>
                <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-green-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                  {cartCount}
                </span>
              </button>
            </div>

            {/* Mobile Toggle Button */}
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">Toggle menu</span>
                <i
                  className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}
                ></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div
            id="mobile-menu"
            ref={menuRef}
            style={{
              maxHeight: mobileMenuOpen ? `${menuHeight}px` : "0px",
              opacity: mobileMenuOpen ? 1 : 0,
              transition: "max-height 0.5s ease, opacity 0.3s ease",
              pointerEvents: mobileMenuOpen ? "auto" : "none",
            }}
            className={`sm:hidden overflow-hidden ${
              showMenu ? "block" : "hidden"
            }`}
          >
            <div className="pt-2 pb-3 space-y-1 px-4">
              {["Home", "Shop", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-base font-medium text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200 px-4 flex items-center">
              <button className="px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                Login
              </button>
              <button
                onClick={() => setCartOpen(true)}
                className="ml-auto p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-full relative"
              >
                <i className="fas fa-shopping-cart"></i>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Slide-in Cart Panel */}
      <CartPanel open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;
