import CarouselWrapper from './components/carousel/CarouselWrapper'
import RecentProjects from './components/RecentProjects'

export default function Home() {
  return (
		<div className="w-full px-6 py-12">
			<CarouselWrapper/>
			<RecentProjects />
		</div>
  )
}