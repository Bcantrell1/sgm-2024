interface Job {
  id: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
}

interface JobStatusButtonsProps {
  job: Job;
  onStatusChange: (id: string, newStatus: Job['status']) => Promise<void>;
}

export default function JobStatusButtons({ job, onStatusChange }: JobStatusButtonsProps) {
  return (
    <>
      <button
        onClick={() => onStatusChange(job.id, 'Not Started')}
        className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        Not Started
      </button>
      <button
        onClick={() => onStatusChange(job.id, 'In Progress')}
        className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
      >
        In Progress
      </button>
      <button
        onClick={() => onStatusChange(job.id, 'Completed')}
        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Completed
      </button>
    </>
  );
}
