'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ServiceHeroProps {
  imageSrc: string | StaticImageData;
  title: string;
  subtitle: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ imageSrc, title, subtitle }) => {
  return (
    <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neu-dark via-neu-dark/70 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-16 mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neu-yellow mb-4 text-neu-text-raised leading-tight">
          {title}
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 font-medium leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default ServiceHero;