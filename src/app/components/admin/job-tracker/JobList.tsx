import { Job } from '@/lib/fetchJobs';
import React from 'react';
import JobItem from './JobItem';

interface JobListProps {
  jobs: Job[];
  onStatusChange: (id: string, newStatus: Job['status']) => Promise<void>;
}

const JobList: React.FC<JobListProps> = ({ jobs, onStatusChange }) => {
  if (jobs.length === 0) {
    return <div className="text-neu-light text-center py-4">No jobs available.</div>;
  }

  return (
    <div className="bg-neu-base py-4">
      <ul className="space-y-4">
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} onStatusChange={onStatusChange} />
        ))}
      </ul>
    </div>
  );
};

export default JobList;