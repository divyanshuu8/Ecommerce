import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPanel = ({ open, onClose }) => {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();

  const handleCheckout = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/checkout");
    onClose();
  };

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
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is currently empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1 px-3">
                  <p className="font-medium text-sm">{item.name}</p>
                  <div className="flex items-center mt-1">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                      }
                      className="px-2 py-1 bg-gray-200 text-sm rounded-l"
                    >
                      -
                    </button>
                    <span className="px-3 text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 text-sm rounded-r"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right text-sm font-semibold whitespace-nowrap">
                  ₹{(item.price * item.quantity).toFixed(2)}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="block text-xs text-red-500 mt-1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between font-semibold mb-4">
              <span>Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Checkout
            </button>
            <button
              className="w-full mt-2 bg-red-500 text-white py-2 rounded hover:bg-red-600"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPanel;
