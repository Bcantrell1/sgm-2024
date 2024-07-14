'use client';

import { db } from '@/firebase/clientApp';
import { collection, doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import JobList from './JobList';

interface Job {
  id: string;
  client: string;
  project: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  startDate: string;
  estimatedCompletion: string;
}

export default function JobTracker() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const q = query(collection(db, "jobs"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const jobsData: Job[] = [];
      querySnapshot.forEach((doc) => {
        jobsData.push({ id: doc.id, ...doc.data() } as Job);
      });
      setJobs(jobsData);
    });

    return () => unsubscribe();
  }, []);

  const handleStatusChange = async (id: string, newStatus: Job['status']) => {
    await updateDoc(doc(db, "jobs", id), { status: newStatus });
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Job Tracker</h1>
      <JobList jobs={jobs} onStatusChange={handleStatusChange} />
    </div>
  );
}