import React from 'react';

type TextareaFieldProps = {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

export default function TextareaField({ label, id, value, onChange, placeholder }: TextareaFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm sm:text-base font-medium text-neu-yellow mb-1 sm:mb-2">{label}</label>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="neu-input w-full text-sm sm:text-base py-2 sm:py-3 px-3 sm:px-4"
        rows={4}
        placeholder={placeholder}
      />
    </div>
  );
}