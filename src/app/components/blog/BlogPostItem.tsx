'use client';

import { BlogPost } from '@/types/BlogPost';
import { formatDate } from '@/utils/dateFormatter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';

interface BlogPostItemProps {
  post: BlogPost;
}

export default function BlogPostItem({ post }: BlogPostItemProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), Math.random() * 1000 + 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-40 bg-neu-base rounded-lg shadow-neumorphic">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="bg-neu-base p-4 md:p-6 rounded-lg shadow-neumorphic transition-all duration-300 hover:shadow-neumorphic-sm">
      <h2 className="text-2xl font-semibold mb-2 text-neu-green">{post.title}</h2>
      <p className="text-neu-green opacity-75 mb-4">
        By {post.author} on {formatDate(post.createdAt)}
      </p>
      <p className="mb-4 text-white">{post.content.substring(0, 200)}...</p>
      <Link 
        href={`/blog/${post.id}`} 
        className="neu-button-green"
      >
        Read more
      </Link>
    </div>
  );
}