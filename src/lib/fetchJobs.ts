import { db } from '@/firebase/clientApp';
import { collection, getDocs, query } from "firebase/firestore";

export interface Job {
  id: string;
  client: string;
  project: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  startDate: string;
  estimatedCompletion: string;
}

export async function fetchJobs(): Promise<Job[]> {
  const q = query(collection(db, "jobs"));
  const querySnapshot = await getDocs(q);
  const jobs: Job[] = [];
  querySnapshot.forEach((doc) => {
    jobs.push({ id: doc.id, ...doc.data() } as Job);
  });
  return jobs;
}