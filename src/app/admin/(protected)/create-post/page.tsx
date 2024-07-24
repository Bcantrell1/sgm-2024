'use client';
import InputField from '@/app/components/global/InputField';
import TextareaField from '@/app/components/global/TextareaField';
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
    <div className="p-4 sm:p-6 bg-neu-base">
      <h1 className="text-2xl sm:text-3xl font-semibold text-neu-green mb-4 sm:mb-6">Create New Blog Post</h1>
      <div className="bg-neu-base shadow-neumorphic rounded-xl overflow-hidden">
        <form onSubmit={handleSubmit} className="space-y-6 p-6">
          <InputField
            label="Title"
            type="text"
            id="title"
            value={title}
            onChange={setTitle}
            placeholder="Enter post title"
          />
          <InputField
            label="Author"
            type="text"
            id="author"
            value={author}
            onChange={setAuthor}
            placeholder="Enter author name"
          />
          <TextareaField
            label="Content"
            id="content"
            value={content}
            onChange={setContent}
            placeholder="Enter post content"
          />
          <button 
            type="submit" 
            className="bg-neu-green text-neu-base px-6 py-2 rounded-md shadow-neumorphic-sm hover:bg-neu-light hover:text-neu-green transition-colors"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
}