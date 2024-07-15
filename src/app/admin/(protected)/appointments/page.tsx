'use client';
import { db } from '@/firebase/clientApp';
import { format } from 'date-fns';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from 'react';

interface Appointment {
  id: string;
  client: string;
  date: string;
  type: string;
}

export default function Appointments() {
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
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">Upcoming Appointments</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {appointments.map((appointment) => (
            <li key={appointment.id} className="px-4 py-4 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-medium text-indigo-600 truncate">{appointment.client}</p>
                <div className="ml-2 flex-shrink-0 flex">
                  <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {appointment.type}
                  </p>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="flex items-center text-sm text-gray-500">
                    {format(new Date(appointment.date), 'MMMM dd, yyyy')} at {format(new Date(appointment.date), 'hh:mm a')}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
