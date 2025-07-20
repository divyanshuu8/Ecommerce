// ReviewSection.jsx
import React from "react";

const ReviewSection = ({ onBack, onPlaceOrder, shippingInfo, paymentInfo }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Review Your Order
      </h2>

      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Shipping Information
        </h3>
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="font-medium">
            {shippingInfo
              ? `${shippingInfo.firstName} ${shippingInfo.lastName}`
              : "—"}
          </p>
          <p>{shippingInfo?.address || "—"}</p>
          <p>
            {shippingInfo
              ? `${shippingInfo.city}, ${shippingInfo.state} ${shippingInfo.zip}`
              : "—"}
          </p>
          <p>{shippingInfo?.country || "—"}</p>
          <p>{shippingInfo?.phone || "—"}</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Payment Method
        </h3>
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="font-medium">
            {paymentInfo
              ? paymentInfo.method === "credit-card"
                ? `Credit Card ending in ${
                    paymentInfo.cardNumber?.slice(-4) || "****"
                  }`
                : paymentInfo.method === "paypal"
                ? "PayPal"
                : "Cash on Delivery"
              : "—"}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Order Summary
        </h3>
        <div className="space-y-4">
          {/* Product summary will be rendered here dynamically */}
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:gap-0 sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="w-full sm:w-auto px-3 py-2 sm:px-6 sm:py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 text-sm sm:text-base transition-all"
        >
          Back to Payment
        </button>
        <button
          type="button"
          onClick={onPlaceOrder}
          className="w-full sm:w-auto px-3 py-2 sm:px-6 sm:py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 text-sm sm:text-base transition-all"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
