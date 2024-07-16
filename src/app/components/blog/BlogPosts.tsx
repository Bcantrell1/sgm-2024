'use client';
import { BlogPost } from '@/types/BlogPost';
import { formatDate } from '@/utils/dateFormatter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';

export default function BlogPosts({ postsPromise }: { postsPromise: Promise<BlogPost[]> }) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loadedPostIds, setLoadedPostIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    postsPromise.then((fetchedPosts) => {
      setPosts(fetchedPosts);
      fetchedPosts.forEach((post) => {
        setTimeout(() => {
          setLoadedPostIds((prevIds) => new Set(prevIds).add(post.id));
        }, Math.random() * 1000 + 500);
      });
    });
  }, [postsPromise]);

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <div key={post.id} className="border-b pb-8">
          {!loadedPostIds.has(post.id) ? (
            <div className="flex justify-center items-center h-screen">
              <LoadingSpinner />
            </div>
          ) : (
            <div className="transition-opacity duration-300 ease-in-out opacity-100">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-500 mb-4">
                By {post.author} on {formatDate(post.createdAt)}
              </p>
              <p className="mb-4">{post.content.substring(0, 200)}...</p>
              <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
                Read more
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}