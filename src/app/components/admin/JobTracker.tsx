import { db } from '@/firebase/clientApp';
import { Job } from '@/types/Job';
import { addDoc, collection, doc, getDoc, onSnapshot, query, updateDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';

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

  const handleStatusChange = async (jobId: string, newStatus: Job['status']) => {
		const jobRef = doc(db, "jobs", jobId);
		await updateDoc(jobRef, { status: newStatus });
	
		if (newStatus === 'Completed') {
			const jobDoc = await getDoc(jobRef);
			const jobData = jobDoc.data() as Job;
	
			await addDoc(collection(db, "recentProjects"), {
				client: jobData.client,
				workType: jobData.workType,
				completionDate: new Date().toISOString(),
				title: `${jobData.workType} for ${jobData.client}`,
				thumbnail: '',
				description: jobData.message || '',
				isDisplayed: false
			});
		}

		setJobs(jobs.map(job => 
			job.id === jobId ? { ...job, status: newStatus } : job
		))
	};

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Job Tracker</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="mb-4 p-4 border rounded-lg">
            <div className="font-medium text-lg">{job.client}</div>
            <div>Work Type: {job.workType}</div>
            <div className="mt-2">
              <span className={`px-2 py-1 rounded-full text-xs ${
                job.status === 'Completed' ? 'bg-green-200 text-green-800' :
                job.status === 'In Progress' ? 'bg-yellow-200 text-yellow-800' :
                'bg-blue-200 text-blue-800'
              }`}>
                {job.status}
              </span>
            </div>
            {job.status !== 'Completed' && (
              <button 
                onClick={() => handleStatusChange(job.id, 'Completed')}
                className="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Mark as Completed
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}