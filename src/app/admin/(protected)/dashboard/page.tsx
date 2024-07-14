'use client';
import { AuthWrapper } from '@/app/components/AuthWrapper';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import { db } from '@/firebase/clientApp';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [clientRequestsCount, setClientRequestsCount] = useState<number | null>(null);
  const [activeJobsCount, setActiveJobsCount] = useState<number | null>(null);
  const [upcomingAppointmentsCount, setUpcomingAppointmentsCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCounts = async () => {
      // Fetch client requests count
      const clientRequestsQuery = query(collection(db, 'clientRequests'), where('status', '==', 'pending'));
      const clientRequestsSnapshot = await getDocs(clientRequestsQuery);
      setClientRequestsCount(clientRequestsSnapshot.size);

      // Fetch active jobs count
      const activeJobsQuery = query(collection(db, 'jobs'), where('status', '!=', 'Completed'));
      const activeJobsSnapshot = await getDocs(activeJobsQuery);
      setActiveJobsCount(activeJobsSnapshot.size);

      // Fetch upcoming appointments count
      const upcomingAppointmentsQuery = query(collection(db, 'appointments'), where('status', '==', 'Scheduled'));
      const upcomingAppointmentsSnapshot = await getDocs(upcomingAppointmentsQuery);
      setUpcomingAppointmentsCount(upcomingAppointmentsSnapshot.size);
    };

    fetchCounts();
  }, []);

  return (
		<AuthWrapper>
    <div>
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <DashboardCard 
          title="Client Requests" 
          count={clientRequestsCount} 
          link="/admin/client-requests" 
          isLoading={clientRequestsCount === null}
        />
        <DashboardCard 
          title="Active Jobs" 
          count={activeJobsCount} 
          link="/admin/job-tracker" 
          isLoading={activeJobsCount === null}
        />
        <DashboardCard 
          title="Upcoming Appointments" 
          count={upcomingAppointmentsCount} 
          link="/admin/appointments" 
          isLoading={upcomingAppointmentsCount === null}
        />
      </div>
    </div>
		</AuthWrapper>
  );
}

function DashboardCard({ title, count, link, isLoading }: { 
  title: string; 
  count: number | null; 
  link: string;
  isLoading: boolean;
}) {
  return (
    <Link href={link}>
      <div className="bg-white p-6 rounded-lg h-44 flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-2xl text-center font-semibold mb-2 text-gray-800">{title}</h2>
        {isLoading ? (
          <div className="h-full flex justify-center items-center relative w-full">
            <LoadingSpinner size={64} />
          </div>
        ) : (
          <p className="text-7xl text-center font-bold text-blue-600">{count}</p>
        )}
      </div>
    </Link>
  );
}