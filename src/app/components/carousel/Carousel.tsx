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
    const timer = setInterval(nextSlide, 50000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  if (!isClient || isLoading) {
    return (
      <div className="relative w-full" style={{ paddingTop: '46.25%' }}>
        <div className="absolute inset-0 flex items-center justify-center bg-neu-base">
          <LoadingSpinner color='hsl(39, 73%, 41%)' />
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return <div className="text-neu-green">No images available</div>;
  }

  return (
    <div className="relative w-full neu-card overflow-hidden">
      <div className="relative pt-[38.25%]">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {!loadedImages.has(image.id) && (
              <div className="absolute inset-0 flex items-center justify-center bg-neu-base">
                <LoadingSpinner color='hsl(39, 73%, 41%)' />
              </div>
            )}
            <NextImage
              src={image.url}
              alt={image.name}
              priority={index === 0}
              onLoad={() => handleImageLoad(image.id)}
							fill
							className='object-cover'
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 md:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full neu-button-carousel"
        aria-label="Previous image"
      >
        <ChevronLeftIcon className="w-6 h-6 text-neu-yellow" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 md:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full neu-button-carousel"
        aria-label="Next image"
      >
        <ChevronRightIcon className="w-6 h-6 text-neu-yellow" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex 
                ? 'neu-dot-active' 
                : 'neu-dot'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;