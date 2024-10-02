import { CubeIcon, HomeIcon, SunIcon, SwatchIcon, TruckIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface ServiceItemProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon: Icon, title, subtitle }) => (
  <div className="bg-neu-base p-6 rounded-lg shadow-neumorphic flex flex-col items-center text-center">
    <Icon className="w-12 h-12 text-neu-green mb-4" />
    <h3 className="text-neu-yellow text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{subtitle}</p>
  </div>
);

const HardscapeServices: React.FC = () => {
  const services = [
    {
      icon: CubeIcon,
      title: "Paver Patios",
      subtitle: "Create stunning outdoor living spaces with our expertly designed and installed paver patios.",
    },
		{
      icon: HomeIcon,
      title: "Retaining Walls",
      subtitle: "Build functional and attractive retaining walls to manage slopes and create usable space in your landscape.",
    },
    {
      icon: SunIcon,
      title: "Outdoor Kitchens",
      subtitle: "Design and construct custom outdoor kitchens for the ultimate al fresco dining and entertainment experience.",
    },
    {
      icon: SwatchIcon,
      title: "Walkways & Paths",
      subtitle: "Enhance your property's aesthetics and functionality with beautifully crafted walkways and garden paths.",
    },
    {
      icon: TruckIcon,
      title: "Driveways",
      subtitle: "Upgrade your home's curb appeal with a durable and stylish paver or natural stone driveway.",
    },
		{
      icon: WrenchScrewdriverIcon,
      title: "Fire Pits & Fireplaces",
      subtitle: "Add warmth and ambiance to your outdoor space with custom-built fire pits or outdoor fireplaces.",
    },
  ];

  return (
    <div className="bg-neu-dark py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-bold text-center text-neu-green mb-6">TRANSFORM YOUR <span className='text-neu-yellow'>OUTDOOR SPACE</span></h2>
        <p className="max-w-4xl text-lg mx-auto text-center text-gray-300 mb-12 leading-relaxed">
          SGM offers a wide range of hardscape services to elevate your outdoor living experience. Our expert team brings your vision to life with precision and creativity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem key={index} icon={service.icon} title={service.title} subtitle={service.subtitle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HardscapeServices;