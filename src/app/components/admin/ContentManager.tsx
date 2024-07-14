import { db } from '@/firebase/clientApp';
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from 'react';

interface ContentItem {
  id: string;
  title: string;
  content: string;
  type: 'service' | 'project' | 'testimonial';
  createdAt: Date;
}

export default function ContentManager() {
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);
  const [newItem, setNewItem] = useState<Omit<ContentItem, 'id' | 'createdAt'>>({
    title: '',
    content: '',
    type: 'service',
  });

  useEffect(() => {
    const q = query(collection(db, "content"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items: ContentItem[] = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() } as ContentItem);
      });
      setContentItems(items);
    });

    return () => unsubscribe();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "content"), {
        ...newItem,
        createdAt: new Date()
      });
      setNewItem({ title: '', content: '', type: 'service' });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleUpdate = async (id: string, updatedItem: Partial<ContentItem>) => {
    try {
      await updateDoc(doc(db, "content", id), updatedItem);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "content", id));
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Content Manager</h2>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newItem.title}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            id="content"
            name="content"
            value={newItem.content}
            onChange={handleInputChange}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
          <select
            id="type"
            name="type"
            value={newItem.type}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          >
            <option value="service">Service</option>
            <option value="project">Project</option>
            <option value="testimonial">Testimonial</option>
          </select>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Add Content
        </button>
      </form>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Existing Content</h3>
        {contentItems.map((item) => (
          <div key={item.id} className="border-t border-gray-200 py-4">
            <h4 className="text-lg font-medium">{item.title}</h4>
            <p className="text-sm text-gray-500">{item.type}</p>
            <p className="mt-1">{item.content}</p>
            <div className="mt-2">
              <button
                onClick={() => handleUpdate(item.id, { title: prompt('New title', item.title) || item.title })}
                className="mr-2 text-sm text-blue-600 hover:text-blue-800"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-sm text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}