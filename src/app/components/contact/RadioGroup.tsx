import React from 'react';

type WorkType = 'Turf' | 'Pavers' | 'Travertine' | 'Putting Green' | 'Other';

type RadioGroupProps = {
  label: string;
  options: WorkType[];
  selected: WorkType;
  onChange: (value: WorkType) => void;
};

export default function RadioGroup({ label, options, selected, onChange }: RadioGroupProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm sm:text-base font-medium text-neu-yellow mb-2 sm:mb-3">{label}</label>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {options.map((option) => (
          <label key={option} className="flex items-center cursor-pointer">
            <input
              type="radio"
              id={option}
              name="workType"
              value={option}
              checked={selected === option}
              onChange={() => onChange(option)}
              className="sr-only"
            />
            <span className={`neu-radio w-4 h-4 sm:w-5 sm:h-5 ${selected === option ? 'neu-radio-checked' : ''}`}></span>
            <span className="ml-2 text-sm sm:text-base text-neu-yellow">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}