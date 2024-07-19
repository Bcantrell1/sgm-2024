'use client';
import { db } from '@/firebase/clientApp';
import { BlogPost } from '@/types/BlogPost';
import { formatDate } from '@/utils/dateFormatter';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="py-4 sm:py-6 bg-neu-base">
      <h1 className="text-2xl sm:text-3xl font-semibold text-neu-green mb-4 sm:mb-6">Blog Posts</h1>
      <div className="bg-neu-base overflow-hidden py-5 px-2">
        <Link href="/admin/create-post" className="bg-neu-green text-neu-base px-4 py-2 rounded-md shadow-neumorphic-sm hover:bg-neu-light hover:text-neu-green transition-colors mb-4 inline-block">
          Create New Post
        </Link>
        <div className="space-y-4">
          {currentPosts.map((post) => (
            <div key={post.id} className="bg-neu-base shadow-neumorphic-sm p-4 rounded-xl">
              <h2 className="text-xl font-semibold text-neu-green">{post.title}</h2>
              <p className="text-gray-500">By {post.author} on {formatDate(post.createdAt)}</p>
              <p className="mt-2 mb-2 text-gray-300">{post.content.substring(0, 150)}...</p>
              <Link
                href={`/admin/edit-post/${post.id}`}
                className="neu-button-green inline-block"
              >
                Edit
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, i) => (
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
    </div>
  );
}