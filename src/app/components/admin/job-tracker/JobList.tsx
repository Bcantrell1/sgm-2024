import { Job } from '@/lib/fetchJobs';
import React from 'react';
import JobItem from './JobItem';

interface JobListProps {
  jobs: Job[];
  onStatusChange: (id: string, newStatus: Job['status']) => Promise<void>;
}

const JobList: React.FC<JobListProps> = ({ jobs, onStatusChange }) => {
  if (jobs.length === 0) {
    return <div>No jobs available.</div>;
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} onStatusChange={onStatusChange} />
        ))}
      </ul>
    </div>
  );
};

export default JobList;