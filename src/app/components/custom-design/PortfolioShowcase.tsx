import BackyardImage from '@/public/portfolio/backyard_img.jpg';
import CountryImage from '@/public/portfolio/country_club_img.jpg';
import GolfImage from '@/public/portfolio/golf_img.jpg';
import HardscapeImage from '@/public/portfolio/hardscape_img.jpg';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

interface PortfolioItemProps {
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ imageSrc, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 h-[30vh] md:h-[40vh] lg:h-[40vh]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imageSrc}
        alt={title}
				fill
				className='object-cover object-center'
      />
      <div className={`absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} flex flex-col justify-center items-center text-center p-4`}>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

const PortfolioShowcase: React.FC = () => {
  const portfolioItems = [
		{
			imageSrc: GolfImage,
			title: "Custom Turf Putting Green & Bunker",
			description: "Precision-designed artificial turf putting green with a realistic sand bunker, providing a professional-grade practice area in a residential setting.",
		},
		{
			imageSrc: HardscapeImage,
			title: "Bespoke Hardscape Design",
			description: "Expertly crafted hardscape featuring custom stonework, integrated lighting, and multi-level patios to create a stunning outdoor living space.",
		},
		{
			imageSrc: CountryImage,
			title: "Commercial Turf Installation",
			description: "Large-scale artificial turf installation at a prestigious country club, demonstrating our expertise in commercial-grade, low-maintenance landscaping solutions.",
		},
		{
			imageSrc: BackyardImage,
			title: "Complete Backyard Transformation",
			description: "Comprehensive backyard redesign incorporating custom landscaping, outdoor kitchen, water features, and entertainment areas for the ultimate residential retreat.",
		},
	];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-bold text-center text-neu-green mb-6">CUSTOM <span className='text-black'>DESIGN PORTFOLIO</span></h2>
        <p className="max-w-4xl text-lg mx-auto text-center text-gray-700 mb-12 leading-relaxed">
          Explore some of our favorite custom design projects. Each space is uniquely crafted to reflect our clients` personalities and lifestyle needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} imageSrc={item.imageSrc} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioShowcase;