import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface AcceptWithDateProps {
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
  onAcceptWithDate: () => Promise<void>;
  onCancel: () => void;
}

export default function AcceptWithDate({
  selectedDate,
  onDateChange,
  onAcceptWithDate,
  onCancel,
}: AcceptWithDateProps) {
  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={onDateChange}
        showTimeSelect
        dateFormat="Pp"
        className="w-full border rounded text-black px-2 py-1"
        placeholderText="Select due date and time"
      />
      <button
        onClick={onAcceptWithDate}
        className="w-full sm:w-auto neu-button-green"
      >
        Confirm Accept
      </button>
      <button
        onClick={onCancel}
        className="w-full sm:w-auto neu-button-error"
      >
        Cancel
      </button>
    </>
  );
}
