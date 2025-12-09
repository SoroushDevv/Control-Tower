import React from "react";

const Stepper = ({ steps = [], currentStep = 0 }) => {
  return (
    <div className="flex items-center w-full">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2
                  ${isCompleted ? "bg-blue-500 border-blue-500 text-white" : ""}
                  ${isActive ? "border-blue-500 text-blue-500" : "border-gray-300 text-gray-500"}
                `}
              >
                {index + 1}
              </div>
              <span className="mt-2 text-xs text-center">{step}</span>
            </div>

            {index !== steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mt-4
                  ${isCompleted ? "bg-blue-500" : "bg-gray-300"}
                `}
              ></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Stepper;
