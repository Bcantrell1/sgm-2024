import { Job } from "@/types/Job";

interface JobStatusButtonsProps {
  job: Job;
  onStatusChange: (id: string, newStatus: Job['status']) => Promise<void>;
}

export default function JobStatusButtons({ job, onStatusChange }: JobStatusButtonsProps) {
  return (
    <>
      <button
        onClick={() => onStatusChange(job.id, 'Not Started')}
        className="neu-button"
      >
        Not Started
      </button>
      <button
        onClick={() => onStatusChange(job.id, 'In Progress')}
        className="neu-button-warning"
      >
        In Progress
      </button>
      <button
        onClick={() => onStatusChange(job.id, 'Completed')}
        className="neu-button-green"
      >
        Completed
      </button>
    </>
  );
}
