'use client';
import { AuthWrapper } from '@/app/components/AuthWrapper';
import { db } from '@/firebase/clientApp';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import DashboardCard from '../../../components/admin/dashboard/DashboardCard';

export default function Dashboard() {
  const [clientRequestsCount, setClientRequestsCount] = useState<number | null>(null);
  const [activeJobsCount, setActiveJobsCount] = useState<number | null>(null);
  const [upcomingAppointmentsCount, setUpcomingAppointmentsCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCounts = async () => {
      const clientRequestsQuery = query(collection(db, 'clientRequests'), where('status', '==', 'pending'));
      const clientRequestsSnapshot = await getDocs(clientRequestsQuery);
      setClientRequestsCount(clientRequestsSnapshot.size);

      const activeJobsQuery = query(collection(db, 'jobs'), where('status', '!=', 'Completed'));
      const activeJobsSnapshot = await getDocs(activeJobsQuery);
      setActiveJobsCount(activeJobsSnapshot.size);

      const upcomingAppointmentsQuery = query(collection(db, 'appointments'), where('status', '==', 'Scheduled'));
      const upcomingAppointmentsSnapshot = await getDocs(upcomingAppointmentsQuery);
      setUpcomingAppointmentsCount(upcomingAppointmentsSnapshot.size);
    };

    fetchCounts();
  }, []);

  return (
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
  );
}