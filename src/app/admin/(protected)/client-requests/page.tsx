'use client';
import { db } from '@/firebase/clientApp';
import { fetchClientRequests } from '@/lib/fetchClientRequests';
import { ClientRequest } from '@/types/ClientRequest';
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { useEffect, useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import ClientRequestList from '../../../components/admin/client-requests/ClientRequestList';

export default function ClientRequests() {
  const [requests, setRequests] = useState<ClientRequest[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [requestsPerPage] = useState(5); // Adjust this number as needed

  useEffect(() => {
    const loadRequests = async () => {
      const fetchedRequests = await fetchClientRequests();
      setRequests(fetchedRequests);
    };
    loadRequests();
  }, []);

  // Get current requests
  const indexOfLastRequest = currentPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
  const currentRequests = requests.slice(indexOfFirstRequest, indexOfLastRequest);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleStatusChange = async (id: string, newStatus: 'accepted' | 'rejected') => {
    if (newStatus === 'accepted') {
      setSelectedRequestId(id);
    } else {
      await updateDoc(doc(db, "clientRequests", id), { status: newStatus });
      setRequests(await fetchClientRequests());
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
        setRequests(await fetchClientRequests());
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
    setRequests(await fetchClientRequests());
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="py-4 sm:py-6">
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-4 sm:mb-6">Client Requests</h1>
      <ClientRequestList
        requests={currentRequests}
        selectedRequestId={selectedRequestId}
        selectedDate={selectedDate}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
        onDateChange={handleDateChange}
        onAcceptWithDate={handleAcceptWithDate}
        onSelectRequest={setSelectedRequestId}
      />
      <div className="mt-4 flex justify-center">
        {Array.from({ length: Math.ceil(requests.length / requestsPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`mx-1 neu-button ${
              currentPage === i + 1 ? 'neu-button-green' : ''
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}