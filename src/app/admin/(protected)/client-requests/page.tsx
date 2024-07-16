'use client';
import { db } from '@/firebase/clientApp';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import ClientRequestList from '../../../components/admin/client-requests/ClientRequestList';

interface ClientRequest {
  id: string;
  name: string;
  number: string;
  email: string;
  workType: string;
  hasPets?: boolean;
  message: string;
  date: string;
  status: 'pending' | 'accepted' | 'rejected';
}

export default function ClientRequests() {
  const [requests, setRequests] = useState<ClientRequest[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, "clientRequests"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const requestsData: ClientRequest[] = [];
      querySnapshot.forEach((doc) => {
        requestsData.push({ id: doc.id, ...doc.data() } as ClientRequest);
      });
      setRequests(requestsData);
    });
    return () => unsubscribe();
  }, []);

  const handleStatusChange = async (id: string, newStatus: 'accepted' | 'rejected') => {
    if (newStatus === 'accepted') {
      setSelectedRequestId(id);
    } else {
      await updateDoc(doc(db, "clientRequests", id), { status: newStatus });
    }
  };

  const handleAcceptWithDate = async () => {
    if (selectedRequestId && selectedDate) {
      const request = requests.find(r => r.id === selectedRequestId);
      if (request) {
        await updateDoc(doc(db, "clientRequests", selectedRequestId), { status: 'accepted' });

        const jobRef = await addDoc(collection(db, "jobs"), {
          clientRequestId: selectedRequestId,
          client: request.name,
          email: request.email,
          phone: request.number,
          workType: request.workType,
          hasPets: request.hasPets,
          message: request.message,
          dueDate: selectedDate.toISOString(),
          status: 'Scheduled',
          createdAt: new Date().toISOString()
        });

        await addDoc(collection(db, "appointments"), {
          jobId: jobRef.id,
          clientRequestId: selectedRequestId,
          client: request.name,
          date: selectedDate.toISOString(),
          type: request.workType,
          status: 'Scheduled'
        });

        setSelectedRequestId(null);
        setSelectedDate(null);
      }
    }
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, "clientRequests", id));

    const jobsQuery = query(collection(db, "jobs"), where("clientRequestId", "==", id));
    const jobsSnapshot = await getDocs(jobsQuery);
    jobsSnapshot.forEach(async (jobDoc) => {
      await deleteDoc(doc(db, "jobs", jobDoc.id));

      const appointmentsQuery = query(collection(db, "appointments"), where("jobId", "==", jobDoc.id));
      const appointmentsSnapshot = await getDocs(appointmentsQuery);
      appointmentsSnapshot.forEach(async (appointmentDoc) => {
        await deleteDoc(doc(db, "appointments", appointmentDoc.id));
      });
    });
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">Client Requests</h1>
      <ClientRequestList
        requests={requests}
        selectedRequestId={selectedRequestId}
        selectedDate={selectedDate}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
        onDateChange={handleDateChange}
        onAcceptWithDate={handleAcceptWithDate}
        onSelectRequest={setSelectedRequestId}
      />
    </div>
  );
}
