import { db } from '@/firebase/clientApp';
import { collection, DocumentData, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from 'react';

interface Job {
  id: string;
  client: string;
  project: string;
  status: 'Completed' | 'In Progress' | 'Scheduled';
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

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Job Tracker</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="mb-2 text-gray-700">
            <span className="font-medium">{job.client}</span> - {job.project}
            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
              job.status === 'Completed' ? 'bg-green-200 text-green-800' :
              job.status === 'In Progress' ? 'bg-yellow-200 text-yellow-800' :
              'bg-blue-200 text-blue-800'
            }`}>
              {job.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}