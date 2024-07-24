'use client';
import { ProjectType, StepProps } from '@/types/Wizard';
import React from 'react';
import DynamicMultiSelect from './DynamicMultiSelect';
import StepWrapper from './StepWrapper';

type OptionType = {
  value: string;
  label: string;
};

const projectSpecifics: Record<ProjectType, OptionType[]> = {
	"": [],
  golf: [
    { value: 'entertainment', label: 'Create an entertainment space' },
    { value: 'shortGame', label: 'Improve short game' },
    { value: 'approachShots', label: 'Improve approach shots' },
    { value: 'ideas', label: 'Just looking for ideas' },
    { value: 'familyFun', label: 'Have more family fun' },
    { value: 'puttingGreen', label: 'Build a custom putting green' },
    { value: 'golf247', label: 'I want to golf 24/7' },
  ],
  sportField: [
    { value: 'newField', label: 'Create a new sports field' },
    { value: 'upgrade', label: 'Upgrade existing field' },
    { value: 'multiSport', label: 'Design a multi-sport area' },
    { value: 'drainage', label: 'Improve field drainage' },
    { value: 'maintenance', label: 'Reduce maintenance requirements' },
  ],
  lawn: [
    { value: 'newLawn', label: 'Install a new lawn' },
    { value: 'renovation', label: 'Renovate existing lawn' },
    { value: 'lowMaintenance', label: 'Create a low-maintenance lawn' },
    { value: 'drought', label: 'Install drought-resistant turf' },
    { value: 'petFriendly', label: 'Design a pet-friendly lawn' },
  ],
  bocceBall: [
    { value: 'newCourt', label: 'Build a new bocce ball court' },
    { value: 'upgradeCourt', label: 'Upgrade existing court' },
    { value: 'learnGame', label: 'Learn how to play bocce ball' },
    { value: 'socialEvent', label: 'Host bocce ball social events' },
  ],
  pets: [
    { value: 'petPlayArea', label: 'Create a dedicated pet play area' },
    { value: 'safeSurface', label: 'Install pet-safe surfacing' },
    { value: 'agilityCourse', label: 'Design a pet agility course' },
    { value: 'cleaningSolution', label: 'Implement easy cleaning solutions' },
  ],
  playArea: [
    { value: 'newPlayground', label: 'Install a new playground' },
    { value: 'safeSurfacing', label: 'Add safe playground surfacing' },
    { value: 'naturalPlay', label: 'Create a natural play area' },
    { value: 'waterFeature', label: 'Include a water play feature' },
  ],
  deck: [
    { value: 'newDeck', label: 'Build a new deck' },
    { value: 'expandDeck', label: 'Expand existing deck' },
    { value: 'resurfaceDeck', label: 'Resurface old deck' },
    { value: 'outdoorKitchen', label: 'Add an outdoor kitchen to deck' },
  ],
  patio: [
    { value: 'newPatio', label: 'Create a new patio' },
    { value: 'expandPatio', label: 'Expand existing patio' },
    { value: 'outdoorLiving', label: 'Design an outdoor living space' },
    { value: 'fireFeature', label: 'Add a fire pit or fireplace' },
  ],
  other: [
    { value: 'customProject', label: 'I have a custom project in mind' },
    { value: 'consultation', label: 'I need a consultation' },
    { value: 'maintenance', label: 'I need help with maintenance' },
    { value: 'notSure', label: 'I`m not sure, need guidance' },
  ],
};

const StepDetails: React.FC<StepProps> = ({ formData, updateFormData }) => {
  const handleOptionChange = (selected: string[]) => {
    updateFormData('projectSpecifics', selected);
  };

  const projectType = formData.project as ProjectType;
  const options = projectSpecifics[projectType] || [];

  return (
    <StepWrapper description="What are the project goals?">
      {options.length > 0 ? (
        <DynamicMultiSelect
          options={options}
          selected={formData.projectSpecifics || []} 
          onChange={handleOptionChange}
        />
      ) : null}
    </StepWrapper>
  );
};

export default StepDetails;