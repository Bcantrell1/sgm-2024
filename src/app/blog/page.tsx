import { fetchPosts } from '@/lib/fetchPosts';
import { Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import BlogPosts from '../components/blog/BlogPosts';
import VideoBackgroundCTA from '../components/global/VideoBackgroundCTA';

export default async function Blog() {
  const postsPromise = fetchPosts();

  return (
		<>
			<div className="container mx-auto py-4 mt-4 px-4 bg-neu-base">
				<h1 className="text-3xl font-bold mb-8 text-neu-yellow text-neu-text-raised">News</h1>
				<Suspense fallback={<div className='flex justify-center items-center h-40 bg-neu-base rounded-lg shadow-neumorphic'><LoadingSpinner /></div>}>
					<BlogPosts postsPromise={postsPromise} />
				</Suspense>
				
			</div>
			<div className='mt-20'>
				<VideoBackgroundCTA
					title="Let's Get Your Project Started"
					description="Help us get more familiar with your project needs so we can deliver a product you love!"
					videoSrc="/videos/grass.mp4"
				/>
			</div>
		</>
  );
}