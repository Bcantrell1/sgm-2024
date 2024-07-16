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
        className="w-full sm:w-auto px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Confirm Accept
      </button>
      <button
        onClick={onCancel}
        className="w-full sm:w-auto px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        Cancel
      </button>
    </>
  );
}
