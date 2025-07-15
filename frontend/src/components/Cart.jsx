// components/CartPanel.jsx
const CartPanel = ({ open, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Panel */}
      <div
        className={`absolute top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="p-4">
          {/* Cart content here */}
          <p className="text-gray-600">Your cart is currently empty.</p>
        </div>
      </div>
    </div>
  );
};

export default CartPanel;
