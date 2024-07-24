import React from 'react';

interface StepperProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
}

const Stepper: React.FC<StepperProps> = ({ currentStep, totalSteps, stepTitles }) => {
  return (
    <div className="flex items-center justify-center h-10 overflow-x-auto">
      {stepTitles.map((title, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center relative">
            <div
              className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ${
                index + 1 < currentStep
                  ? 'bg-neu-green'
                  : index + 1 === currentStep
                  ? 'bg-neu-light-green'
                  : 'bg-neu-light'
              } transition-colors duration-300`}
            >
              <span
                className={`text-xs font-bold ${
                  index + 1 <= currentStep ? 'text-neu-base' : 'text-neu-yellow'
                }`}
              >
                {index + 1}
              </span>
            </div>
          </div>
          {index < totalSteps - 1 && (
            <div className="w-3 sm:w-4 h-0.5 mx-0.5 relative flex-shrink-0">
              <div className="absolute inset-0 bg-neu-light rounded-full"></div>
              <div
                className={`absolute inset-y-0 left-0 bg-neu-green rounded-full transition-all duration-300 ease-in-out ${
                  index + 1 < currentStep ? 'right-0' : 'right-full'
                }`}
              ></div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;