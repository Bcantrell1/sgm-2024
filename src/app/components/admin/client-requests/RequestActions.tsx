interface RequestActionsProps {
  requestId: string;
  onStatusChange: (id: string, newStatus: 'accepted' | 'rejected') => Promise<void>;
  onSelectRequest: (id: string) => void;
}

export default function RequestActions({ requestId, onStatusChange, onSelectRequest }: RequestActionsProps) {
  return (
    <>
      <button
        onClick={() => onSelectRequest(requestId)}
        className="w-full sm:w-auto px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Accept
      </button>
      <button
        onClick={() => onStatusChange(requestId, 'rejected')}
        className="w-full sm:w-auto px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Reject
      </button>
    </>
  );
}
