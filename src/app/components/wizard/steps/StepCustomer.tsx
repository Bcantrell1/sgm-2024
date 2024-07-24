'use client';
import { CustomerType, StepProps } from '@/types/Wizard';
import React, { useEffect } from 'react';
import { CommercialAnimation } from '../../global/CommercialAnimation';
import { HouseWithYard } from '../../global/HouseWithYard';
import CustomRadioButton from './CustomRadioButton';
import StepWrapper from './StepWrapper';

const StepCustomer: React.FC<StepProps> = ({ formData, updateFormData }) => {
  useEffect(() => {
    if (!formData.customerType) {
      updateFormData('customerType', 'residential');
    }
  }, [formData.customerType, updateFormData]);

  const handleChange = (value: CustomerType) => {
    updateFormData('customerType', value);
  };

  return (
    <StepWrapper description="Are you a residential or commercial client?">
      {formData.customerType === 'residential' ? (
        <HouseWithYard />
      ) : (
        <CommercialAnimation />
      )}
      <CustomRadioButton
        options={['residential', 'commercial'] as CustomerType[]}
        selected={formData.customerType || 'residential'}
        onChange={handleChange}
      />
    </StepWrapper>
  );
};

export default StepCustomer;
