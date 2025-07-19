import React from "react";
import { useCart } from "../context/CartContext";

const SHIPPING_COST = 5.99;
const TAX_RATE = 0.083; // 8.3%

const OrderSummary = () => {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );
  const tax = subtotal * TAX_RATE;
  const total = subtotal + SHIPPING_COST + tax;
  const totalItems = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Order Summary
      </h2>
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <p className="text-gray-600">Subtotal ({totalItems} items)</p>
          <p className="font-medium">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Shipping</p>
          <p className="font-medium">${SHIPPING_COST.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Tax</p>
          <p className="font-medium">${tax.toFixed(2)}</p>
        </div>
        <div className="flex justify-between border-t border-gray-200 pt-4">
          <p className="text-lg font-semibold">Total</p>
          <p className="text-lg font-semibold">${total.toFixed(2)}</p>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex items-center bg-green-50 p-3 rounded-md">
          <i className="fas fa-tag text-green-600 mr-2"></i>
          <p className="text-sm text-green-700">
            You saved $12.50 with your EcoMember discount
          </p>
        </div>
      </div>
      <div className="space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-sm">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div className="flex items-start" key={item.id}>
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-md object-cover"
                />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-sm font-medium text-gray-800">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="text-sm text-gray-500">{item.description}</p>
                )}
                <div className="flex justify-between mt-1">
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  <p className="text-sm font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Discount code"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
          <button className="px-4 py-2 bg-gray-800 text-white font-medium rounded-r-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
