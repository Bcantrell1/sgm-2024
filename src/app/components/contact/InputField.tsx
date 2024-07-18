type InputFieldProps = {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

export default function InputField({ label, type, id, value, onChange, placeholder }: InputFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-neu-green mb-1">{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="neu-input w-full"
        placeholder={placeholder}
      />
    </div>
  );
}