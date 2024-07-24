'use client';
import { StepProps } from '@/types/Wizard';
import { MapIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import InputField from '../../global/InputField';
import SingleSelectGroup from './SingleSelectGroup';
import StepWrapper from './StepWrapper';

type MeasurementType = 'manual' | 'google';

type MeasurementOption = {
  value: MeasurementType;
  label: string;
  icon: React.ElementType;
};

const measurementOptions: MeasurementOption[] = [
  { value: 'manual', label: 'Manual Entry', icon: PencilSquareIcon },
  { value: 'google', label: 'Google Maps', icon: MapIcon },
];

const StepLocation: React.FC<StepProps> = ({ formData, updateFormData }) => {
  const [measurementType, setMeasurementType] = useState<MeasurementType>('manual');

  const handleMeasurementTypeChange = (value: MeasurementType) => {
    setMeasurementType(value);
  };

  const handleLocationChange = (value: string) => {
    updateFormData('location', value);
  };

  return (
    <StepWrapper description="Provide information about the size of your project area.">
      <SingleSelectGroup
        label=""
        options={measurementOptions}
        selected={measurementType}
        onChange={handleMeasurementTypeChange}
				centerLarge
      />
      {measurementType === 'manual' ? (
        <div className="mt-4">
          <InputField
            label="Project Area Size"
            type="text"
            id="locationSize"
            value={formData.location}
            onChange={handleLocationChange}
            placeholder="e.g., 20ft x 30ft or 600 sq ft"
          />
        </div>
      ) : (
        <div className="mt-4 p-4 neu-card rounded-lg">
          <p className="text-neu-yellow text-sm sm:text-base">Google Maps integration coming soon!</p>
        </div>
      )}
    </StepWrapper>
  );
};

export default StepLocation;