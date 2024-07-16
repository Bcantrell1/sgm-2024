'use client';
import { db } from '@/firebase/clientApp';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'blogPosts'), {
        title,
        content,
        author,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
        published: true,
      });
      router.push('/admin/blog-posts');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">Create New Blog Post</h1>
			<div className="bg-white shadow overflow-hidden sm:rounded-md">
      <form onSubmit={handleSubmit} className="space-y-4 p-5 text-gray-900">
        <div>
          <label htmlFor="title" className="block mb-1">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="author" className="block mb-1">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="content" className="block mb-1">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
            rows={10}
          ></textarea>
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Create Post
        </button>
      </form>
			</div>
    </div>
  );
}