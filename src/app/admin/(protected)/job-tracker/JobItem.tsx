import JobStatusButtons from "./JobStatusButtons";

interface Job {
  id: string;
  client: string;
  project: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  startDate: string;
  estimatedCompletion: string;
}

interface JobItemProps {
  job: Job;
  onStatusChange: (id: string, newStatus: Job['status']) => Promise<void>;
}

export default function JobItem({ job, onStatusChange }: JobItemProps) {
  return (
    <li className="px-4 py-4 sm:px-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-indigo-600 truncate">{job.client}</p>
        <div className="ml-2 flex-shrink-0 flex">
          <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            job.status === 'Completed' ? 'bg-green-100 text-green-800' :
            job.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {job.status}
          </p>
        </div>
      </div>
      <div className="mt-2 sm:flex sm:justify-between">
        <div className="sm:flex">
          <p className="flex items-center text-sm text-gray-500">{job.project}</p>
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
          <p>Start: {job.startDate} | Est. Completion: {job.estimatedCompletion}</p>
        </div>
      </div>
      <div className="mt-4 flex space-x-2">
        <JobStatusButtons job={job} onStatusChange={onStatusChange} />
      </div>
    </li>
  );
}
