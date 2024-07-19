'use client';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import { db } from '@/firebase/clientApp';
import { BlogPost } from '@/types/BlogPost';
import { formatDate } from '@/utils/dateFormatter';
import { doc, getDoc } from 'firebase/firestore';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, 'blogPosts', params.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() } as BlogPost);
        } else {
          setError('Post not found');
        }
      } catch (err) {
        setError('An error occurred while fetching the post');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="max-w-4xl flex h-screen justify-center items-center mx-auto py-8">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="max-w-4xl mx-auto py-8 text-neu-yellow">
        {error || 'Post not found'}
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | Your Blog Name</title>
        <meta name="description" content={post.content.substring(0, 160)} />
      </Head>
      <div className="container mx-auto py-8 px-2 md:px-4 bg-neu-base">
        <div className="neu-card p-5 md:p-8 rounded-lg shadow-neumorphic">
          <Link href="/blog" className="text-neu-green hover:text-white transition-colors duration-300 mb-4 inline-block">
            ← Back to all posts
          </Link>
          <h1 className="text-3xl font-bold mb-4 text-neu-text-raised text-neu-yellow">{post.title}</h1>
          <p className="text-white opacity-75 mb-6">By {post.author} on {formatDate(post.createdAt)}</p>
          <div className="prose max-w-none text-white">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}