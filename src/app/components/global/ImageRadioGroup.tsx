import Image from 'next/image';
import React from 'react';

type ImageRadioOption<T extends string> = {
  value: T;
  label: string;
  imageSrc: string;
};

type ImageRadioGroupProps<T extends string> = {
  label: string;
  options: ImageRadioOption<T>[];
  selected: T;
  onChange: (value: T) => void;
};

export default function ImageRadioGroup<T extends string>({
  label,
  options,
  selected,
  onChange
}: ImageRadioGroupProps<T>) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm sm:text-base font-medium text-neu-yellow mb-2 sm:mb-3">
          {label}
        </label>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {options.map((option) => (
          <label key={option.value} className="cursor-pointer">
            <input
              type="radio"
              id={option.value}
              name={label.replace(/\s+/g, '')}
              value={option.value}
              checked={selected === option.value}
              onChange={() => onChange(option.value)}
              className="sr-only"
            />
            <div className={`flex flex-col items-center p-4 rounded-lg transition-all duration-200 ${
              selected === option.value
                ? 'shadow-neumorphic-inset text-neu-green'
                : 'neu-card hover:bg-neu-green hover:shadow-none hover:text-neu-base text-neu-yellow'
            }`}>
              <div className="relative w-24 h-24 mb-2">
                <Image
                  src={option.imageSrc}
                  alt={option.label}
									fill
									className='object-fill'
                />
              </div>
              <span className="text-sm font-medium">{option.label}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}