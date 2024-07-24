'use client';
import { useProjectWizard } from '@/app/hooks/useProjectWizard';
import { FormData } from '@/types/Wizard';
import { XMarkIcon } from '@heroicons/react/24/solid';
import NextImage from 'next/image';
import React, { useState } from 'react';
import Stepper from '../global/Stepper';
import StepCustomer from './steps/StepCustomer';
import StepDetails from './steps/StepDetails';
import StepFinish from './steps/StepFinish';
import StepLocation from './steps/StepLocation';
import StepProject from './steps/StepProject';
import StepThankYou from './steps/StepThankYou';
import StepTraffic from './steps/StepTraffic';

const ProjectWizard: React.FC = () => {
  const { isOpen, closeWizard } = useProjectWizard();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    customerType: '',
    project: '',
    projectSpecifics: [],
    traffic: '',
    location: '',
    petsTrue: false,
    finishFormData: {
      fullName: '',
      email: '',
      phone: '',
      streetAddress: '',
      message: '',
    },
  });

  const totalSteps = 7;
  const stepTitles = ['Customer', 'Project', 'Details', 'Traffic', 'Location', 'Finish', 'Thank You'];

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!formData.customerType;
      case 2:
        return !!formData.project;
      case 3:
        return formData.projectSpecifics.length > 0;
      case 4:
        return !!formData.traffic;
      case 5:
        return !!formData.location;
      case 6:
        return !!formData.finishFormData.fullName && !!formData.finishFormData.email && !!formData.finishFormData.phone;
			case 7:
        return true;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps && isStepValid(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1 && currentStep < totalSteps) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = <T extends keyof FormData>(step: T, data: FormData[T]) => {
    setFormData(prevData => ({ ...prevData, [step]: data }));
  };

	const handleSubmit = () => {
    if (isStepValid(totalSteps - 1)) {
      console.log('Form submitted with data:', formData);
      setCurrentStep(totalSteps);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepCustomer formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <StepProject formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <StepDetails formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <StepTraffic formData={formData} updateFormData={updateFormData} />;
      case 5:
        return <StepLocation formData={formData} updateFormData={updateFormData} />;
      case 6:
        return <StepFinish formData={formData} updateFormData={updateFormData} />;
			case 7:
        return <StepThankYou formData={formData} closeWizard={closeWizard} />;
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="neu-card w-full max-w-4xl h-[90vh] md:h-[80vh] flex flex-col">
        <div className="p-4 md:p-6 relative flex-shrink-0">
          <button
            onClick={closeWizard}
            className="absolute top-2 right-2 md:top-4 md:right-4 text-neu-yellow hover:text-neu-light-green transition-colors duration-200"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <div className="w-full flex justify-center items-center">
            <div className="relative w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24">
              <NextImage
                src="/sgm_logo.svg"
                alt="SGM Logo"
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 640px) 8rem, (max-width: 768px) 10rem, 12rem"
                priority
              />
            </div>
          </div>
        </div>
        
        <div className="flex-grow overflow-y-auto px-4 md:px-6">
          <div className="w-full max-w-2xl h-full mx-auto">
            {renderStep()}
          </div>
        </div>
        
        <div className="p-4 md:p-6 flex-shrink-0">
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
					{currentStep < totalSteps && (
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`neu-button h-10 px-4 py-2 w-full sm:w-auto ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Previous
            </button>
						)}
            <div className="w-full sm:w-auto flex-grow max-w-xs">
              <Stepper currentStep={currentStep} totalSteps={totalSteps} stepTitles={stepTitles} />
            </div>
            {currentStep < totalSteps - 1 && (
              <button
                onClick={handleNext}
                disabled={!isStepValid(currentStep)}
                className={`neu-button h-10 px-4 py-2 w-full sm:w-auto ${!isStepValid(currentStep) ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
              >
                {currentStep + 1 === totalSteps ? 'Finish' : 'Next'}
              </button>
            )}
            {currentStep === totalSteps - 1 && (
              <button
                onClick={handleSubmit}
                disabled={!isStepValid(currentStep)}
                className={`neu-button h-10 px-4 py-2 w-full sm:w-auto ${!isStepValid(currentStep) ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectWizard;