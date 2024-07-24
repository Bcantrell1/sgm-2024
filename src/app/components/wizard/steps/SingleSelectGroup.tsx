import React from 'react';

type OptionType<T extends string> = {
  value: T;
  label: string;
  icon: React.ElementType;
};

type SingleSelectGroupProps<T extends string> = {
  label: string;
  options: OptionType<T>[];
  selected: T | null;
  onChange: (value: T) => void;
  centerLarge?: boolean;
};

export default function SingleSelectGroup<T extends string>({
  label,
  options,
  selected,
  onChange,
  centerLarge = false,
}: SingleSelectGroupProps<T>) {
  const handleSelect = (value: T) => {
    onChange(value);
  };

  const gridClasses = centerLarge
    ? "grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center"
    : "grid grid-cols-2 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";

  const buttonClasses = `flex flex-col items-center justify-center p-4 border-none rounded-md transition-all duration-200 ${
    centerLarge ? 'w-full max-w-xs aspect-square' : 'aspect-square'
  }`;

  const iconClasses = centerLarge ? "h-12 w-12 mb-3" : "h-8 w-8 mb-2";
  const textClasses = centerLarge ? "text-base text-center font-medium" : "text-sm text-center font-medium";

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm sm:text-base font-medium text-neu-yellow mb-2 sm:mb-3">
          {label}
        </label>
      )}
      <div className={gridClasses}>
        {options.map((option) => {
          const Icon = option.icon;
          return (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`${buttonClasses} ${
                selected === option.value 
                  ? 'shadow-neumorphic-inset text-neu-green' 
                  : 'neu-card hover:bg-neu-green hover:shadow-none hover:text-neu-base text-neu-yellow'
              }`}
            >
              <Icon className={iconClasses} />
              <span className={textClasses}>{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}