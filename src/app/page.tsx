'use client';
import CarouselWrapper from './components/carousel/CarouselWrapper';
import Testimonials from './components/global/Testimonials';
import RecentProjects from './components/RecentProjects';


export default function Home() {
  return (
		<div className='w-full mx-auto container pt-10 px-3 h-auto'>
			<CarouselWrapper />
			<RecentProjects />
			<Testimonials />
		</div>
  );
}