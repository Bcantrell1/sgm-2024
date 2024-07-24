import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';

type OptionType<T extends string> = {
  value: T;
  label: string;
  icon?: React.ElementType;
};

type DynamicMultiSelectProps<T extends string> = {
  label?: string;
  options: OptionType<T>[];
  selected: T[];
  onChange: (selected: T[]) => void;
};

export default function DynamicMultiSelect<T extends string>({
  label,
  options,
  selected,
  onChange,
}: DynamicMultiSelectProps<T>) {
  const handleToggle = (value: T) => {
    const newSelected = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];
    onChange(newSelected);
  };

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm sm:text-base font-medium text-neu-yellow mb-2 sm:mb-3">
          {label}
        </label>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((option) => {
          const isSelected = selected.includes(option.value);
          return (
            <button
              key={option.value}
              onClick={() => handleToggle(option.value)}
              className={`flex items-center p-3 border-none rounded-md transition-all duration-200 ${
                isSelected
                  ? 'text-neu-green shadow-neumorphic-inset'
                  : 'neu-card hover:bg-neu-green hover:shadow-none hover:text-neu-base text-neu-yellow'
              }`}
            >
              <div className="relative w-6 h-6 mr-2">
                <PlusIcon 
                  className={`absolute inset-0 w-6 h-6 transition-opacity duration-200 ease-in-out ${
                    isSelected ? 'opacity-0' : 'opacity-100'
                  }`} 
                />
                <XMarkIcon 
                  className={`absolute inset-0 w-6 h-6 transition-opacity duration-200 ease-in-out ${
                    isSelected ? 'opacity-100' : 'opacity-0'
                  }`} 
                />
              </div>
              <span className="text-sm font-medium">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}