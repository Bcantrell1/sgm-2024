import JobItem from './JobItem';

interface Job {
  id: string;
  client: string;
  project: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  startDate: string;
  estimatedCompletion: string;
}

interface JobListProps {
  jobs: Job[];
  onStatusChange: (id: string, newStatus: Job['status']) => Promise<void>;
}

export default function JobList({ jobs, onStatusChange }: JobListProps) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} onStatusChange={onStatusChange} />
        ))}
      </ul>
    </div>
  );
}
