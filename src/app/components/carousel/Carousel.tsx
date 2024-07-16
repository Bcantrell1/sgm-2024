'use client';

import { CarouselImage } from '@/lib/fetchCarouselItems';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import NextImage from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';

interface CarouselProps {
  imagesPromise: Promise<CarouselImage[]>;
}

const Carousel: React.FC<CarouselProps> = ({ imagesPromise }) => {
  const [images, setImages] = useState<CarouselImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    imagesPromise.then((fetchedImages) => {
      setImages(fetchedImages);
      setIsLoading(false);
    });
  }, [imagesPromise]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const handleImageLoad = useCallback((imageId: string) => {
    setLoadedImages((prev) => new Set(prev).add(imageId));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  if (!isClient || isLoading) {
    return (
      <div className="relative w-full" style={{ paddingTop: '46.25%' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return <>No images available</>;
  }

  return (
    <div className="relative w-full">
      <div className="relative pt-[46.25%]">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {!loadedImages.has(image.id) && (
              <div className="absolute inset-0 flex items-center justify-center">
                <LoadingSpinner />
              </div>
            )}
            <NextImage
              src={image.url}
              alt={image.name}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
              onLoadingComplete={() => handleImageLoad(image.id)}
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 p-2 rounded-full hover:bg-opacity-75 transition-all"
        aria-label="Previous image"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 p-2 rounded-full hover:bg-opacity-75 transition-all"
        aria-label="Next image"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;