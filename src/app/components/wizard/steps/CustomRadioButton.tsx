import React from 'react';

interface CustomRadioButtonProps<T extends string> {
  options: T[];
  selected: T;
  onChange: (value: T) => void;
}

const CustomRadioButton = <T extends string>({ options, selected, onChange }: CustomRadioButtonProps<T>) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 md:gap-20">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`neu-button px-6 py-3 capitalize ${
            selected === option
              ? 'neu-button-warning'
              : 'neu-button'
          } transition-colors duration-200`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default CustomRadioButton;