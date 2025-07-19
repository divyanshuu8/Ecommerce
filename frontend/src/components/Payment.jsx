// PaymentSection.jsx
import React, { useState } from "react";

const PaymentSection = ({ onBack, onNext, initialValues }) => {
  const [paymentMethod, setPaymentMethod] = useState(
    initialValues?.method || "credit-card"
  );
  const [cardNumber, setCardNumber] = useState(initialValues?.cardNumber || "");
  const [cardName, setCardName] = useState(initialValues?.cardName || "");
  const [expiry, setExpiry] = useState(initialValues?.expiry || "");
  const [cvv, setCvv] = useState(initialValues?.cvv || "");

  const handleContinue = () => {
    let paymentData = { method: paymentMethod };
    if (paymentMethod === "credit-card") {
      paymentData = {
        ...paymentData,
        cardNumber,
        cardName,
        expiry,
        cvv,
      };
    }
    if (onNext) onNext(paymentData);
  };

  const CustomRadio = ({ checked }) => (
    <span
      className={`inline-block w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-150 ${
        checked ? "border-green-600" : "border-gray-300"
      }`}
      style={{ background: checked ? "#10b981" : "#fff" }}
    >
      {checked && (
        <span className="w-2.5 h-2.5 bg-white rounded-full block"></span>
      )}
    </span>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Payment Method
      </h2>

      <div className="space-y-4 mb-8">
        {/* Credit Card */}
        <div
          className={`payment-method p-4 rounded-lg cursor-pointer ${
            paymentMethod === "credit-card"
              ? "selected border-green-500 bg-green-50"
              : ""
          }`}
          onClick={() => setPaymentMethod("credit-card")}
        >
          <div className="flex items-center">
            <input
              type="radio"
              name="payment-method"
              id="credit-card"
              checked={paymentMethod === "credit-card"}
              onChange={() => setPaymentMethod("credit-card")}
              className="hidden"
            />
            <CustomRadio checked={paymentMethod === "credit-card"} />
            <label
              htmlFor="credit-card"
              className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer"
            >
              Credit/Debit Card
            </label>
          </div>
          {paymentMethod === "credit-card" && (
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <input
                type="text"
                placeholder="Name on Card"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <input
                type="text"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <input
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          )}
        </div>

        {/* PayPal */}
        <div
          className={`payment-method p-4 rounded-lg cursor-pointer ${
            paymentMethod === "paypal"
              ? "selected border-green-500 bg-green-50"
              : ""
          }`}
          onClick={() => setPaymentMethod("paypal")}
        >
          <div className="flex items-center">
            <input
              type="radio"
              name="payment-method"
              id="paypal"
              checked={paymentMethod === "paypal"}
              onChange={() => setPaymentMethod("paypal")}
              className="hidden"
            />
            <CustomRadio checked={paymentMethod === "paypal"} />
            <label
              htmlFor="paypal"
              className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer"
            >
              PayPal
            </label>
          </div>
          {paymentMethod === "paypal" && (
            <p className="mt-3 text-sm text-gray-500">
              You&apos;ll be redirected to PayPal to complete your purchase
              securely.
            </p>
          )}
        </div>

        {/* Cash on Delivery */}
        <div
          className={`payment-method p-4 rounded-lg cursor-pointer ${
            paymentMethod === "cod"
              ? "selected border-green-500 bg-green-50"
              : ""
          }`}
          onClick={() => setPaymentMethod("cod")}
        >
          <div className="flex items-center">
            <input
              type="radio"
              name="payment-method"
              id="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
              className="hidden"
            />
            <CustomRadio checked={paymentMethod === "cod"} />
            <label
              htmlFor="cod"
              className="ml-3 block text-sm font-medium text-gray-700 cursor-pointer"
            >
              Cash on Delivery
            </label>
          </div>
          {paymentMethod === "cod" && (
            <p className="mt-3 text-sm text-gray-500">
              Pay with cash when your order is delivered.
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50"
        >
          Back to Shipping
        </button>
        <button
          type="button"
          onClick={handleContinue}
          className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700"
        >
          Review Order
        </button>
      </div>
    </div>
  );
};

export default PaymentSection;
