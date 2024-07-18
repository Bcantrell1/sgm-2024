import LoadingSpinner from '@/app/components/LoadingSpinner';
import JobTrackerContent from '@/app/components/admin/job-tracker/JobTrackerContent';
import { fetchJobs } from '@/lib/fetchJobs';
import { Suspense } from 'react';

export default async function JobTrackerPage() {
  const jobsPromise = fetchJobs();

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-300 mb-6">Job Tracker</h1>
      <Suspense fallback={<LoadingSpinner size={64} />}>
        <JobTrackerContent jobsPromise={jobsPromise} />
      </Suspense>
    </div>
  );
}