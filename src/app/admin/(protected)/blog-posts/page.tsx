'use client';
import { db } from '@/firebase/clientApp';
import { BlogPost } from '@/types/BlogPost';
import { formatDate } from '@/utils/dateFormatter';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'blogPosts'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const postsData: BlogPost[] = [];
      querySnapshot.forEach((doc) => {
        postsData.push({ id: doc.id, ...doc.data() } as BlogPost);
      });
      setPosts(postsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">Blog Posts</h1>
			<div className="bg-white shadow overflow-hidden p-5 sm:rounded-md">
				<Link href="/admin/create-post" className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block">
					Create New Post
				</Link>
				<div className="space-y-4">
					{posts.map((post) => (
						<div key={post.id} className="border p-4 text-gray-900 rounded">
							<h2 className="text-xl font-semibold">{post.title}</h2>
							<p className="text-gray-500">By {post.author} on {formatDate(post.createdAt)}</p>
							<p className="mt-2">{post.content.substring(0, 150)}...</p>
							<Link href={`/admin/edit-post/${post.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
								Edit
							</Link>
						</div>
					))}
				</div>
			</div>
    </div>
  );
}