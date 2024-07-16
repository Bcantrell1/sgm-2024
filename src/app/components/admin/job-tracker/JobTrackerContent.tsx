'use client';
import { db } from '@/firebase/clientApp';
import { Job } from '@/lib/fetchJobs';
import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import JobList from './JobList';

interface JobTrackerContentProps {
  jobsPromise: Promise<Job[]>;
}

export default function JobTrackerContent({ jobsPromise }: JobTrackerContentProps) {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    jobsPromise.then(setJobs);
  }, [jobsPromise]);

  const handleStatusChange = async (id: string, newStatus: Job['status']) => {
    await updateDoc(doc(db, "jobs", id), { status: newStatus });
    setJobs(jobs.map(job => 
      job.id === id ? { ...job, status: newStatus } : job
    ));
  };

  return <JobList jobs={jobs} onStatusChange={handleStatusChange} />;
}