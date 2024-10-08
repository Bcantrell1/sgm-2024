import React from 'react';

type CheckboxFieldProps = {
  label: string;
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function CheckboxField({ label, id, checked, onChange }: CheckboxFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="flex items-center text-sm sm:text-base cursor-pointer">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <span className={`neu-checkbox w-5 h-5 sm:w-6 sm:h-6 ${checked ? 'neu-checkbox-checked' : ''}`}></span>
        <span className="ml-2 sm:ml-3 text-neu-yellow">{label}</span>
      </label>
    </div>
  );
}