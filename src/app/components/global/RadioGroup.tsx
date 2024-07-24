import React from 'react';

type RadioGroupProps<T extends string> = {
  label: string;
  options: T[];
  selected: T;
  onChange: (value: T) => void;
};

export default function RadioGroup<T extends string>({ 
  label, 
  options, 
  selected, 
  onChange 
}: RadioGroupProps<T>) {
  return (
    <div className="mb-4">
			{label && (
        <label className="block text-sm sm:text-base font-medium text-neu-yellow mb-2 sm:mb-3">
          {label}
        </label>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {options.map((option) => (
          <label key={option} className="flex items-center cursor-pointer">
            <input
              type="radio"
              id={option}
              name={label.replace(/\s+/g, '')}
              value={option}
              checked={selected === option}
              onChange={() => onChange(option)}
              className="sr-only"
            />
            <span className={`neu-radio w-4 h-4 sm:w-5 sm:h-5 ${selected === option ? 'neu-radio-checked' : ''}`}></span>
            <span className="ml-2 w-4 h-4 sm:w-5 sm:h-5 text-sm sm:text-base text-neu-yellow">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}