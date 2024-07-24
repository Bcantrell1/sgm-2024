'use client';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import InputField from '@/app/components/global/InputField';
import TextareaField from '@/app/components/global/TextareaField';
import { db } from '@/firebase/clientApp';
import { BlogPost } from '@/types/BlogPost';
import { doc, getDoc, Timestamp, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EditPost({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, 'blogPosts', params.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPost({ id: docSnap.id, ...docSnap.data() } as BlogPost);
      } else {
        console.log('No such document!');
      }
    };

    fetchPost();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!post) return;

    try {
      await updateDoc(doc(db, 'blogPosts', post.id), {
        title: post.title,
        content: post.content,
        author: post.author,
        updatedAt: Timestamp.now(),
      });
      router.push('/admin/blog-posts');
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  if (!post) return (
    <div className="flex justify-center items-center h-screen bg-neu-base">
      <LoadingSpinner />
    </div>
  );

  return (
    <div className="p-4 sm:p-6 bg-neu-base">
      <h1 className="text-2xl sm:text-3xl font-semibold text-neu-green mb-4 sm:mb-6">Edit Blog Post</h1>
      <div className="bg-neu-base shadow-neumorphic rounded-xl overflow-hidden">
        <form onSubmit={handleSubmit} className="space-y-6 p-6">
          <InputField
            label="Title"
            type="text"
            id="title"
            value={post.title}
            onChange={(value) => setPost({ ...post, title: value })}
            placeholder="Enter post title"
          />
          <InputField
            label="Author"
            type="text"
            id="author"
            value={post.author}
            onChange={(value) => setPost({ ...post, author: value })}
            placeholder="Enter author name"
          />
          <TextareaField
            label="Content"
            id="content"
            value={post.content}
            onChange={(value) => setPost({ ...post, content: value })}
            placeholder="Enter post content"
          />
          <button 
            type="submit" 
            className="bg-neu-green text-neu-base px-6 py-2 rounded-md shadow-neumorphic-sm hover:bg-neu-light hover:text-neu-green transition-colors"
          >
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
}