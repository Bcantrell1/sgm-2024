type WorkType = 'Turf' | 'Pavers' | 'Travertine' | 'Putting Green' | 'Other';

type RadioGroupProps = {
  label: string;
  options: WorkType[];
  selected: WorkType;
  onChange: (value: WorkType) => void;
};

export default function RadioGroup({ label, options, selected, onChange }: RadioGroupProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-neu-yellow mb-2">{label}</label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {options.map((option) => (
          <label key={option} className="flex items-center">
            <input
              type="radio"
              id={option}
              name="workType"
              value={option}
              checked={selected === option}
              onChange={() => onChange(option)}
              className="sr-only"
            />
            <span className={`neu-radio cursor-pointer ${selected === option ? 'neu-radio-checked' : ''}`}></span>
            <span className="ml-2 text-sm text-neu-yellow">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}