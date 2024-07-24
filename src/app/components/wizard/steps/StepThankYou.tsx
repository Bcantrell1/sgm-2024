import { FormData } from '@/types/Wizard';
import React from 'react';

interface StepThankYouProps {
  formData: FormData;
  closeWizard: () => void;
}

const StepThankYou: React.FC<StepThankYouProps> = ({ formData, closeWizard }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h2 className="text-2xl font-bold text-neu-green mb-4">Thank You for Your Submission!</h2>
      <p className="text-neu-yellow mb-6">We`ve received your project details and will be in touch soon.</p>
      <div className="bg-neu-base w-full p-6 rounded-lg shadow-neumorphic mb-6">
        <h3 className="text-lg font-semibold text-neu-yellow mb-2">Project Summary:</h3>
        <ul className="text-left">
          <li>Customer Type: {formData.customerType}</li>
          <li>Project Type: {formData.project}</li>
          <li>Traffic Level: {formData.traffic}</li>
          <li>Location Size: {formData.location}</li>
        </ul>
      </div>
      <p className="text-neu-yellow mb-6">If you have any questions, please don`t hesitate to contact us.</p>
      <button onClick={closeWizard} className="neu-button px-6 py-2">
        Close
      </button>
    </div>
  );
};

export default StepThankYou;