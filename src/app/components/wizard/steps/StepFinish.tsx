'use client';
import { StepProps } from '@/types/Wizard';
import { BriefcaseIcon, ClipboardDocumentListIcon, SignalIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import InputField from '../../global/InputField';
import TextareaField from '../../global/TextareaField';
import StepWrapper from './StepWrapper';

type FinishFormData = {
  fullName: string;
  email: string;
  phone: string;
  streetAddress: string;
  message: string;
};

const ProjectInfoItem: React.FC<{ icon: React.ElementType; label: string; value: string | string[] | boolean }> = ({ icon: Icon, label, value }) => (
  <div className="flex items-center space-x-3 mb-4">
    <Icon className="h-6 w-6 text-neu-yellow" />
    <div>
      <p className="text-sm font-medium text-neu-yellow">{label}</p>
      <p className="text-base text-neu-green">
        {Array.isArray(value) ? value.join(', ') : (typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value)}
      </p>
    </div>
  </div>
);

const StepFinish: React.FC<StepProps> = ({ formData, updateFormData }) => {
  const [finishFormData, setFinishFormData] = useState<FinishFormData>({
    fullName: '',
    email: '',
    phone: '',
    streetAddress: '',
    message: '',
  });

  const handleInputChange = (field: keyof FinishFormData, value: string) => {
    setFinishFormData(prev => ({ ...prev, [field]: value }));
    updateFormData('finishFormData', { ...finishFormData, [field]: value });
  };

  return (
    <StepWrapper description="Review your project and provide your contact information">
      <div className="mb-8 p-4 neu-card rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-neu-yellow">Your Project Summary:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectInfoItem icon={UserIcon} label="Customer Type" value={formData.customerType} />
          <ProjectInfoItem icon={BriefcaseIcon} label="Project Type" value={formData.project} />
          <ProjectInfoItem icon={ClipboardDocumentListIcon} label="Project Details" value={formData.projectSpecifics} />
          <ProjectInfoItem icon={SignalIcon} label="Traffic" value={formData.traffic} />
          <ProjectInfoItem icon={UserGroupIcon} label="Pets Involved" value={formData.petsTrue} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <InputField
          label="Full Name"
          type="text"
          id="fullName"
          value={finishFormData.fullName}
          onChange={(value) => handleInputChange('fullName', value)}
          placeholder="Enter your full name"
        />
        <InputField
          label="Email"
          type="email"
          id="email"
          value={finishFormData.email}
          onChange={(value) => handleInputChange('email', value)}
          placeholder="Enter your email"
        />
        <InputField
          label="Phone"
          type="tel"
          id="phone"
          value={finishFormData.phone}
          onChange={(value) => handleInputChange('phone', value)}
          placeholder="Enter your phone number"
        />
        <InputField
          label="Street Address"
          type="text"
          id="streetAddress"
          value={finishFormData.streetAddress}
          onChange={(value) => handleInputChange('streetAddress', value)}
          placeholder="Enter your street address"
        />
      </div>
      
      <TextareaField
        label=""
        id="message"
        value={finishFormData.message}
        onChange={(value) => handleInputChange('message', value)}
        placeholder="Enter any additional information or questions..."
      />
    </StepWrapper>
  );
};

export default StepFinish;