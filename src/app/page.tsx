'use client';
import CarouselWrapper from './components/carousel/CarouselWrapper';
import Testimonials from './components/global/Testimonials';
import HomeHero from './components/home/HomeHero';
import RecentProjects from './components/RecentProjects';


export default function Home() {
  return (
    <HomeHero>
			<div className='w-full mx-auto container px-3 pt-[400px] md:pt-[500px] lg:pt-[800px] h-auto'>
        <CarouselWrapper />
        <RecentProjects />
				<Testimonials />
			</div>
    </HomeHero>
  );
}