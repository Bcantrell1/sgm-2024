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
    <li className="px-4 py-4 sm:px-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-indigo-600 truncate">{request.name}</p>
        <div className="ml-2 flex-shrink-0 flex">
          <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            request.status === 'accepted' ? 'bg-green-100 text-green-800' : 
            request.status === 'rejected' ? 'bg-red-100 text-red-800' : 
            'bg-gray-100 text-gray-800'}`}>
            {request.status}
          </p>
        </div>
      </div>
      <div className="mt-2 sm:flex sm:justify-between">
        <div className="sm:flex">
          <p className="flex items-center text-sm text-gray-500">{request.email} | {request.number}</p>
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
          <p>{request.date}</p>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-500">Work Type: {request.workType}</p>
      {request.workType === 'Turf' && (
        <p className="mt-1 text-sm text-gray-500">Has Pets: {request.hasPets ? 'Yes' : 'No'}</p>
      )}
      <p className="mt-2 text-sm text-gray-500">{request.message}</p>
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
          <p className="text-sm font-medium text-gray-500">
            Status: {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
          </p>
        )}
        <button
          onClick={() => onDelete(request.id)}
          className="w-full sm:w-auto px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
