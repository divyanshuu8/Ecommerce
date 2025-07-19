import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import ShippingForm from "../components/Shipping";
import PaymentSection from "../components/Payment";
import ReviewSection from "../components/Review";
import OrderSummary from "../components/OrderSummary";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(2); // Start at Shipping

  // State for shipping and payment info
  const [shippingInfo, setShippingInfo] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState(null);

  const handleNext = (data) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // If coming from Shipping step, save shipping info
    if (currentStep === 2 && data) setShippingInfo(data);
    // If coming from Payment step, save payment info
    if (currentStep === 3 && data) setPaymentInfo(data);
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProgressBar currentStep={currentStep} />
        <div className="lg:flex lg:space-x-8">
          {/* Left Column */}
          <div className="lg:w-2/3">
            {currentStep === 2 && (
              <ShippingForm
                onNext={(data) => handleNext(data)}
                initialValues={shippingInfo}
              />
            )}
            {currentStep === 3 && (
              <PaymentSection
                onNext={(data) => handleNext(data)}
                onBack={handleBack}
                initialValues={paymentInfo}
              />
            )}
            {currentStep === 4 && (
              <ReviewSection
                onBack={handleBack}
                shippingInfo={shippingInfo}
                paymentInfo={paymentInfo}
              />
            )}
          </div>
          {/* Right Column */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
