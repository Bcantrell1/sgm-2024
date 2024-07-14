import ClientRequestItem from "./ClientRequestItem";

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

interface ClientRequestListProps {
  requests: ClientRequest[];
  selectedRequestId: string | null;
  selectedDate: Date | null;
  onStatusChange: (id: string, newStatus: 'accepted' | 'rejected') => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  onDateChange: (date: Date | null) => void;
  onAcceptWithDate: () => Promise<void>;
  onSelectRequest: (id: string | null) => void;
}

export default function ClientRequestList({
  requests,
  selectedRequestId,
  selectedDate,
  onStatusChange,
  onDelete,
  onDateChange,
  onAcceptWithDate,
  onSelectRequest
}: ClientRequestListProps) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {requests.map((request) => (
          <ClientRequestItem
            key={request.id}
            request={request}
            selectedRequestId={selectedRequestId}
            selectedDate={selectedDate}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
            onDateChange={onDateChange}
            onAcceptWithDate={onAcceptWithDate}
            onSelectRequest={onSelectRequest}
          />
        ))}
      </ul>
    </div>
  );
}
