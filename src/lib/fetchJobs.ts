import { db } from '@/firebase/clientApp';
import { Job } from '@/types/Job';
import { collection, getDocs, query } from "firebase/firestore";


export async function fetchJobs(): Promise<Job[]> {
  const q = query(collection(db, "jobs"));
  const querySnapshot = await getDocs(q);
  const jobs: Job[] = [];
  querySnapshot.forEach((doc) => {
    jobs.push({ id: doc.id, ...doc.data() } as Job);
  });
  return jobs;
}