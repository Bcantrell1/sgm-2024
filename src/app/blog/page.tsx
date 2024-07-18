import { fetchPosts } from '@/lib/fetchPosts';
import { Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import BlogPosts from '../components/blog/BlogPosts';

export default async function Blog() {
  const postsPromise = fetchPosts();

  return (
    <div className="container mx-auto py-8 px-4 bg-neu-base">
      <h1 className="text-3xl font-bold mb-8 text-neu-green">Blog</h1>
      <div className="rounded-lg shadow-neumorphic p-6">
        <Suspense fallback={<div className='flex justify-center items-center h-40 bg-neu-base rounded-lg shadow-neumorphic'><LoadingSpinner /></div>}>
          <BlogPosts postsPromise={postsPromise} />
        </Suspense>
      </div>
    </div>
  );
}