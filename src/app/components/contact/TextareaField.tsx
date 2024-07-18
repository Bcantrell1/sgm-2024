type TextareaFieldProps = {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

export default function TextareaField({ label, id, value, onChange, placeholder }: TextareaFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-neu-green mb-1">{label}</label>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="neu-input w-full"
        rows={4}
        placeholder={placeholder}
      />
    </div>
  );
}