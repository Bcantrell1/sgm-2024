'use client';
import { FlipWords } from '@/components/ui/flip-words';
import HeroVideoDialog from '@/components/ui/hero-video-dialog';
import { TextRevealCard } from '@/components/ui/text-reveal-card';
import CarouselWrapper from './components/carousel/CarouselWrapper';
import Testimonials from './components/global/Testimonials';
import Hero from './components/Hero';
import RecentProjects from './components/RecentProjects';


export default function Home() {
	const spaces = [
		'residential',
		'commercial',
		'sports',
		'recreational'
	];
	
	const services = [
		'artificial turf',
		'hardscapes',
		'playgrounds',
		'putting greens'
	];
	return (
		<div className='w-full mx-auto pt-10 max-w-[1800px] px-10 h-auto'>
			<div id="fb-root"></div>
			<Hero />
			<CarouselWrapper />
			<div className="h-[20rem] flex justify-center items-center px-4">
				<div className="text-2xl md:text-5xl lg:text-7xl max-w-[1200px] mx-auto font-normal text-gray-200">
					Elevating <FlipWords words={spaces} color='text-neu-yellow' />spaces
					with premium <FlipWords words={services} color='text-neu-green' />
				</div>
			</div>
			<RecentProjects />
			<div className="flex flex-col lg:gap-x-8 xl:gap-x-12 lg:items-center">
				<div className="lg:col-span-3">
					<TextRevealCard
						text="You know the project"
						revealText="We know the industry"
					>
					</TextRevealCard>
				</div>
				<div className="relative lg:col-span-4 mt-10 lg:mt-0">
					<HeroVideoDialog
						className="block"
						animationStyle="from-top"
						videoSrc="https://www.youtube.com/embed/MTj_tCE6ORg?si=od8zqOnew0mtS2fx"
						thumbnailSrc="/bgs/video.jpg"
						thumbnailAlt="Pet Info Video"
					/>
				</div>
			</div>
			<Testimonials />
		</div>
	);
}
