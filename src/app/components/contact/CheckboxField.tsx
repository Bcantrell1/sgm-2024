type CheckboxFieldProps = {
  label: string;
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function CheckboxField({ label, id, checked, onChange }: CheckboxFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="flex items-center">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <span className={`neu-checkbox ${checked ? 'neu-checkbox-checked' : ''}`}></span>
        <span className="ml-2 text-sm text-neu-green">{label}</span>
      </label>
    </div>
  );
}