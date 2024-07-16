import { fetchPosts } from '@/lib/fetchPosts';
import { Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import BlogPosts from '../components/blog/BlogPosts';

export default async function Blog() {
  const postsPromise = fetchPosts();

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <BlogPosts postsPromise={postsPromise} />
      </Suspense>
    </div>
  );
}