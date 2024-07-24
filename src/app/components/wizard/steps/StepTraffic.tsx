'use client';
import { StepProps, TrafficType } from '@/types/Wizard';
import React from 'react';
import CheckboxField from '../../global/CheckboxField';
import ImageRadioGroup from '../../global/ImageRadioGroup';
import StepWrapper from './StepWrapper';

const StepTraffic: React.FC<StepProps> = ({ formData, updateFormData }) => {
  const handleTrafficChange = (value: TrafficType) => {
    updateFormData('traffic', value);
  };

  const handlePetsChange = (checked: boolean) => {
    updateFormData('petsTrue', checked);
  };

  const trafficOptions = [
    { value: 'low' as TrafficType, label: 'Low Traffic', imageSrc: '/low_traffic.png' },
    { value: 'medium' as TrafficType, label: 'Medium Traffic', imageSrc: '/medium_traffic.png' },
    { value: 'high' as TrafficType, label: 'High Traffic', imageSrc: '/high_traffic.png' },
  ];
	
	const options = trafficOptions || [];

  return (
    <StepWrapper
      description="Tell us about the expected usage of your project area."
    >
      <ImageRadioGroup<TrafficType>
        label=""
        options={options}
        selected={formData.traffic || ''}
        onChange={handleTrafficChange}
      />
      <CheckboxField
        label="Will pets be using this area?"
        id="petsTrue"
        checked={formData.petsTrue || false}
        onChange={handlePetsChange}
      />
    </StepWrapper>
  );
};

export default StepTraffic;