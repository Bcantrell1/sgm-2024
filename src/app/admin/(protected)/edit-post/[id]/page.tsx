'use client';
import LoadingSpinner from '@/app/components/LoadingSpinner';
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

  if (!post) return <div><LoadingSpinner/></div>;

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">Edit Blog Post</h1>
			<div className="bg-white shadow overflow-hidden sm:rounded-md">
				<form onSubmit={handleSubmit} className="space-y-4 text-gray-900 p-5">
					<div>
						<label htmlFor="title" className="block mb-1">Title</label>
						<input
							type="text"
							id="title"
							value={post.title}
							onChange={(e) => setPost({ ...post, title: e.target.value })}
							required
							className="w-full px-3 py-2 border rounded"
						/>
					</div>
					<div>
						<label htmlFor="author" className="block mb-1">Author</label>
						<input
							type="text"
							id="author"
							value={post.author}
							onChange={(e) => setPost({ ...post, author: e.target.value })}
							required
							className="w-full px-3 py-2 border rounded"
						/>
					</div>
					<div>
						<label htmlFor="content" className="block mb-1">Content</label>
						<textarea
							id="content"
							value={post.content}
							onChange={(e) => setPost({ ...post, content: e.target.value })}
							required
							className="w-full px-3 py-2 border rounded"
							rows={10}
						></textarea>
					</div>
					<button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
						Update Post
					</button>
				</form>
			</div>
    </div>
  );
}