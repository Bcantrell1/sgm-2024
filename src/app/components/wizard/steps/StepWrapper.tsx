'use client';
import React, { ReactNode } from 'react';

interface StepWrapperProps {
  description: string;
  children: ReactNode;
}

const StepWrapper: React.FC<StepWrapperProps> = ({ description, children }) => {
  return (
    <div className="h-full flex flex-col">
      <div>
        <p className="text-white text-center mb-2 text-xl sm:text-2xl">{description}</p>
      </div>
      <div className="flex flex-col justify-center relative flex-1 gap-5">
        {children}
      </div>
    </div>
  );
};

export default StepWrapper;