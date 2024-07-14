import { db } from '@/firebase/clientApp';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from 'react';

interface Message {
  id: string;
  client: string;
  message: string;
  date: string;
}

export default function ClientCommunication() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesData: Message[] = [];
      querySnapshot.forEach((doc) => {
        messagesData.push({ id: doc.id, ...doc.data() } as Message);
      });
      setMessages(messagesData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Client Communication</h2>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id} className="mb-2">
            <span className="font-medium text-gray-800">{msg.client}</span>
            <p className="text-sm text-gray-600">{msg.message}</p>
            <span className="text-xs text-gray-400">{msg.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}