import { db } from '@/firebase/clientApp';
import { ClientRequest } from '@/types/ClientRequest';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export async function fetchClientRequests() {
  const q = query(collection(db, 'clientRequests'), orderBy('date', 'desc'));
  const querySnapshot = await getDocs(q);
  const requests: ClientRequest[] = [];
  querySnapshot.forEach((doc) => {
    requests.push({ id: doc.id, ...doc.data() } as ClientRequest);
  });
  return requests;
}