'use client';
import { CarouselImage } from '@/lib/fetchCarouselImages';
import Image from 'next/image';
import React from 'react';

interface ImageGridProps {
  images: CarouselImage[];
  onImageClick: (image: CarouselImage) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((img) => (
        <div key={img.id} className="rounded-lg overflow-hidden hover:shadow-neumorphic-inset p-4 shadow-neumorphic">
          <div className="relative pt-[66.66%]">
            <Image
              src={img.url}
              alt={img.name}
              layout="fill"
              objectFit="cover"
              className="cursor-pointer transition-shadow absolute top-0 left-0"
              onClick={() => onImageClick(img)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;