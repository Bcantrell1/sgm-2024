'use client';
import CarouselWrapper from './components/carousel/CarouselWrapper';
import Testimonials from './components/global/Testimonials';
import Hero from './components/Hero';
import RecentProjects from './components/RecentProjects';


export default function Home() {
  return (
		<div className='w-full mx-auto pt-10 max-w-[1800px] px-10 h-auto'>
			<Hero />
			<CarouselWrapper />
			<RecentProjects />
			<Testimonials />
		</div>
  );
}