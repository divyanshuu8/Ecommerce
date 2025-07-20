import React, { useState } from "react";
import { motion } from "framer-motion";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("ECO123456");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [order, setOrder] = useState(null);

  const sampleOrders = {
    ECO123456: {
      date: "June 15, 2023",
      status: "Shipped",
      statusClass: "bg-green-100 text-green-800",
      items: [
        {
          name: "Bamboo Toothbrush Set (4-pack)",
          price: 12.99,
          quantity: 1,
          image:
            "https://images.unsplash.com/photo-1602817538382-6013be7fca72?auto=format&fit=crop&w=500&q=80",
        },
        {
          name: "Reusable Stainless Steel Straws",
          price: 9.99,
          quantity: 2,
          image:
            "https://images.unsplash.com/photo-1584977901126-36832d0e496e?auto=format&fit=crop&w=500&q=80",
        },
        {
          name: "Organic Cotton Produce Bags",
          price: 14.99,
          quantity: 1,
          image:
            "https://images.unsplash.com/photo-1585159655441-2c528d3470e4?auto=format&fit=crop&w=500&q=80",
        },
      ],
      trackingNumber: "EC123456789US",
      estimatedDelivery: "June 18, 2023",
    },
  };

  const handleTrack = () => {
    setError("");
    setOrder(null);
    if (!orderId.trim()) {
      setError("Please enter an order ID");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (sampleOrders[orderId]) {
        setOrder({ ...sampleOrders[orderId], id: orderId });
      } else {
        setError("Order not found. Please check your order ID and try again.");
      }
    }, 1500);
  };

  const totalAmount = order?.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold">Track Your Order</h1>
        <p className="text-gray-500 mt-2">
          Enter your order ID below to check the status of your sustainable
          products.
        </p>
      </motion.div>

      <div className="flex items-center max-w-lg mx-auto mb-6">
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Enter your order ID (e.g. ECO123456)"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleTrack}
          className="bg-green-600 text-white px-6 py-3 rounded-r-lg hover:bg-green-700"
        >
          Track
        </button>
      </div>

      {loading && (
        <div className="text-center py-8 animate-pulse text-green-700">
          Tracking your eco-friendly order...
        </div>
      )}

      {error && (
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-red-100 text-red-700 p-4 rounded-md text-center"
        >
          {error}
        </motion.div>
      )}

      {order && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white shadow-md rounded-xl p-6"
        >
          <h2 className="text-xl font-bold mb-2">Order #{order.id}</h2>
          <p className="text-gray-500 mb-4">Placed on {order.date}</p>

          <span
            className={`inline-block mb-4 px-3 py-1 text-sm font-medium rounded-full ${order.statusClass}`}
          >
            {order.status}
          </span>

          <h3 className="text-lg font-semibold mb-4">Items</h3>
          <div className="space-y-4">
            {order.items.map((item, idx) => (
              <div key={idx} className="flex items-start">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <p className="font-medium">{item.name}</p>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 mt-4 flex justify-between font-semibold text-gray-900">
            <p>Total</p>
            <p>${totalAmount.toFixed(2)}</p>
          </div>
        </motion.div>
      )}

      {(order || error) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 bg-white rounded-lg shadow p-6 text-center"
        >
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Need Help?
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Our support team is here to assist you with any order-related
            queries.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 text-sm">
            <div>
              <p className="font-medium text-gray-700">Email:</p>
              <a
                href="mailto:support@ecoliving.com"
                className="text-green-600 hover:underline"
              >
                support@ecoliving.com
              </a>
            </div>
            <div>
              <p className="font-medium text-gray-700">Call:</p>
              <a
                href="tel:+18005551234"
                className="text-green-600 hover:underline"
              >
                +1 (800) 555-1234
              </a>
            </div>
            <div>
              <p className="font-medium text-gray-700">Working Hours:</p>
              <p className="text-gray-500">Mon–Fri, 9am–5pm EST</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TrackOrder;
