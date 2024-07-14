'use client';
import { db } from '@/firebase/clientApp';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from 'react';

interface Appointment {
  id: string;
  client: string;
  date: string;
  type: string;
  status: string;
}

export default function UpcomingAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const q = query(collection(db, "appointments"), orderBy("date"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const appointmentsData: Appointment[] = [];
      querySnapshot.forEach((doc) => {
        appointmentsData.push({ id: doc.id, ...doc.data() } as Appointment);
      });
      setAppointments(appointmentsData);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Upcoming Appointments</h1>
      <ul className="divide-y divide-gray-200">
        {appointments.map((appointment) => (
          <li key={appointment.id} className="py-4">
            <p className="text-lg font-medium">{appointment.client}</p>
            <p>{new Date(appointment.date).toLocaleDateString()}</p>
            <p>{appointment.type}</p>
            <p>{appointment.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}