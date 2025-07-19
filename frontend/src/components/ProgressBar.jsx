import React from "react";
import { Check } from "lucide-react"; // You can use FontAwesome instead if needed

const steps = ["Cart", "Shipping", "Payment", "Review"];

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="flex justify-between items-center mb-8 relative">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;
        const isUpcoming = stepNumber > currentStep;

        return (
          <React.Fragment key={label}>
            <div
              className={`progress-step flex flex-col items-center ${
                isCompleted ? "completed" : isActive ? "active" : "upcoming"
              }`}
            >
              <div
                className={`step-number w-10 h-10 rounded-full border-2 flex items-center justify-center z-10
                  transition-all duration-300 ease-in-out
                  ${
                    isCompleted
                      ? "bg-green-500 border-green-500 text-white"
                      : isActive
                      ? "border-blue-500 bg-white text-blue-600"
                      : "border-gray-300 bg-white text-gray-700"
                  }`}
              >
                {isCompleted ? <Check size={16} /> : stepNumber}
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700 transition-colors duration-300">
                {label}
              </p>
            </div>
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 mx-2 rounded transition-all duration-300 ease-in-out
                  ${
                    isCompleted
                      ? "bg-green-500"
                      : isActive
                      ? "bg-gray-300"
                      : "bg-gray-300"
                  }`}
                style={{ minWidth: 32 }}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProgressBar;
