'use client';
import { ProjectType, StepProps } from '@/types/Wizard';
import {
	CircleStackIcon,
	GlobeAmericasIcon,
	HomeIcon,
	PlayIcon,
	QuestionMarkCircleIcon,
	Square3Stack3DIcon,
	SunIcon
} from '@heroicons/react/24/outline';
import React from 'react';
import SingleSelectGroup from './SingleSelectGroup';
import StepWrapper from './StepWrapper';


type ProjectOption = {
  value: ProjectType;
  label: string;
  icon: React.ElementType;
  customerType: 'residential' | 'commercial' | 'both';
};

const projectOptions: ProjectOption[] = [
  { value: 'sportField', label: 'Sport Field', icon: Square3Stack3DIcon, customerType: 'both' },
  { value: 'bocceBall', label: 'Bocce Ball', icon: CircleStackIcon, customerType: 'both' },
  { value: 'golf', label: 'Golf', icon: GlobeAmericasIcon, customerType: 'both' },
  { value: 'lawn', label: 'Lawn', icon: HomeIcon, customerType: 'both' },
  { value: 'pets', label: 'Pets', icon: SunIcon, customerType: 'both' },
  { value: 'playArea', label: 'Play Area', icon: PlayIcon, customerType: 'both' },
  { value: 'deck', label: 'Deck', icon: HomeIcon, customerType: 'residential' },
  { value: 'patio', label: 'Patio', icon: SunIcon, customerType: 'residential' },
  { value: 'other', label: 'Other', icon: QuestionMarkCircleIcon, customerType: 'both' },
];

const StepProject: React.FC<StepProps> = ({ formData, updateFormData }) => {
  const handleChange = (value: ProjectType) => {
    updateFormData('project', value);
  };

  const filteredOptions = projectOptions.filter(option => 
    option.customerType === 'both' || option.customerType === formData.customerType
  );

  return (
    <StepWrapper description="What best describes your project?">
      <SingleSelectGroup
        label=""
        options={filteredOptions}
        selected={formData.project as ProjectType}
        onChange={handleChange}
      />
    </StepWrapper>
  );
};

export default StepProject;
