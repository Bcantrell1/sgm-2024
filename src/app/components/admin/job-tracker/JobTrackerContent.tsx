'use client';
import { db } from '@/firebase/clientApp';
import { Job } from '@/types/Job';
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
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
	
		if (newStatus === 'Completed') {
			const completedJob = jobs.find(job => job.id === id);
			if (completedJob) {
				const { client, workType} = completedJob;
				if (client && workType) {
					await addDoc(collection(db, "recentProjects"), {
						client,
						workType,
						completionDate: new Date().toISOString()
					});
				} else {
					console.error('Client or project is undefined for job:', completedJob);
				}
			}
		}
	};

  return <JobList jobs={jobs} onStatusChange={handleStatusChange} />;
}