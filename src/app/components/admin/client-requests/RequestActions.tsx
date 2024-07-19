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
        className="w-full sm:w-auto neu-button-green"
      >
        Accept
      </button>
      <button
        onClick={() => onStatusChange(requestId, 'rejected')}
        className="w-full sm:w-auto neu-button-warning"
      >
        Reject
      </button>
    </>
  );
}
