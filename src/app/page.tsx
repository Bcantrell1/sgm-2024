import Link from 'next/link'
import CarouselWrapper from './components/carousel/CarouselWrapper'

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Welcome to SGM</h1>
      <p className="mb-6">Specialists in artificial turf and hardscapes for residential and commercial projects.</p>
      <Link href="/contact" className="bg-green-600 text-white px-4 inline-block py-2 rounded hover:bg-green-700">
        Get a Quote
      </Link>
			<CarouselWrapper/>
    </div>
  )
}