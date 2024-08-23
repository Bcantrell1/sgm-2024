import { fetchPosts } from '@/lib/fetchPosts';
import { Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import BlogHeader from '../components/blog/BlogHeader';
import BlogPosts from '../components/blog/BlogPosts';
import VideoBackgroundCTA from '../components/global/VideoBackgroundCTA';

export default async function Blog() {
  const postsPromise = fetchPosts();

  return (
		<>
			<BlogHeader />
			<div className="container mx-auto py-4 mt-4 px-4 bg-neu-base">
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