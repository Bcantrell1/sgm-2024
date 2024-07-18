import AcceptWithDate from "./AcceptWithDate";
import RequestActions from "./RequestActions";

interface ClientRequest {
  id: string;
  name: string;
  number: string;
  email: string;
  workType: string;
  hasPets?: boolean;
  message: string;
  date: string;
  status: 'pending' | 'accepted' | 'rejected';
}

interface ClientRequestItemProps {
  request: ClientRequest;
  selectedRequestId: string | null;
  selectedDate: Date | null;
  onStatusChange: (id: string, newStatus: 'accepted' | 'rejected') => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  onDateChange: (date: Date | null) => void;
  onAcceptWithDate: () => Promise<void>;
  onSelectRequest: (id: string | null) => void;
}

export default function ClientRequestItem({
  request,
  selectedRequestId,
  selectedDate,
  onStatusChange,
  onDelete,
  onDateChange,
  onAcceptWithDate,
  onSelectRequest,
}: ClientRequestItemProps) {
  return (
    <li className="px-6 py-6 bg-neu-base rounded-xl shadow-neumorphic mb-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="text-2xl font-medium text-neu-green truncate">{request.name}</p>
        <div className="ml-2 flex-shrink-0 flex">
          <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            request.status === 'accepted' ? 'bg-neu-green text-neu-base' : 
            request.status === 'rejected' ? 'bg-red-500 text-neu-base' : 
            'bg-neu-light text-neu-green'}`}>
            {request.status}
          </p>
        </div>
      </div>
      <div className="mt-2 sm:flex sm:justify-between">
        <div className="sm:flex">
          <p className="flex items-center text-sm text-gray-300">{request.email} | {request.number}</p>
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-300 sm:mt-0">
          <p>{request.date}</p>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-300">Work Type: {request.workType}</p>
      {request.workType === 'Turf' && (
        <p className="mt-1 text-sm text-gray-300">Has Pets: {request.hasPets ? 'Yes' : 'No'}</p>
      )}
      <p className="mt-2 text-sm text-gray-300">{request.message}</p>
      <div className="mt-4 flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
        {request.status === 'pending' ? (
          selectedRequestId === request.id ? (
            <AcceptWithDate
              selectedDate={selectedDate}
              onDateChange={onDateChange}
              onAcceptWithDate={onAcceptWithDate}
              onCancel={() => onSelectRequest(null)}
            />
          ) : (
            <RequestActions
              requestId={request.id}
              onStatusChange={onStatusChange}
              onSelectRequest={onSelectRequest}
            />
          )
        ) : (
          <p className="text-sm mr-4 font-medium text-gray-300">
            Status:<br/>{request.status.charAt(0).toUpperCase() + request.status.slice(1)}
          </p>
        )}
        <button
          onClick={() => onDelete(request.id)}
          className="neu-button"
        >
          Delete
        </button>
      </div>
    </li>
  );
}