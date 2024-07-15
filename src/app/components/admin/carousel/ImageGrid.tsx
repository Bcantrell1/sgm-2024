'use client';
import Image from 'next/image';
import React from 'react';

interface CarouselImage {
  id: string;
  url: string;
  name: string;
}

interface ImageGridProps {
  images: CarouselImage[];
  onImageClick: (image: CarouselImage) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img) => (
        <div key={img.id} className="border rounded-lg overflow-hidden shadow-md">
          <div className="relative pt-[66.66%]">
            <Image
              src={img.url}
              alt={img.name}
              layout="fill"
              objectFit="cover"
              className="cursor-pointer hover:opacity-75 transition-opacity absolute top-0 left-0"
              onClick={() => onImageClick(img)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;