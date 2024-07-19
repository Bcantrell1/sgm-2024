import { Job } from "@/types/Job";
import JobStatusButtons from "./JobStatusButtons";

interface JobItemProps {
  job: Job;
  onStatusChange: (id: string, newStatus: Job['status']) => Promise<void>;
}

export default function JobItem({ job, onStatusChange }: JobItemProps) {
  return (
    <li className="px-6 py-6 bg-neu-base rounded-xl shadow-neumorphic">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-neu-green truncate">{job.client}</p>
        <div className="ml-2 flex-shrink-0 flex">
          <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            job.status === 'Completed' ? 'bg-neu-green text-neu-base' :
            job.status === 'In Progress' ? 'bg-yellow-500 text-neu-base' :
            'bg-neu-light text-red-600'
          }`}>
            {job.status}
          </p>
        </div>
      </div>
      <div className="mt-2 sm:flex sm:justify-between">
        <div className="sm:flex">
          <p className="flex items-center text-sm text-gray-300">{job.project}</p>
        </div>
      </div>
      <div className="mt-4 flex space-x-2">
        <JobStatusButtons job={job} onStatusChange={onStatusChange} />
      </div>
    </li>
  );
}