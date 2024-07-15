'use client';
import { db } from '@/firebase/clientApp';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import NextImage from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface CarouselImage {
  id: string;
  url: string;
  name: string;
}

const Carousel = () => {
  const [images, setImages] = useState<CarouselImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const q = query(collection(db, 'carouselImages'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, {includeMetadataChanges: true}, (querySnapshot) => {
			console.log('Snapshot received, document count:', querySnapshot.size);
      const imagesData: CarouselImage[] = [];
      querySnapshot.forEach((doc) => {
        imagesData.push({ id: doc.id, ...doc.data() } as CarouselImage);
      });
      setImages(imagesData);
      setIsLoading(false);
    });

    return () => {
			unsubscribe();
			setImages([]);
		}
  }, []);

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

  if (isLoading) return null;

  return (
    <div className="relative w-full">
      <div className="relative pt-[46.25%]"> {/* 16:9 aspect ratio */}
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {!loadedImages.has(image.id) && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
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
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 p-2 rounded-full hover:bg-opacity-75 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        aria-label="Previous image"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 p-2 rounded-full hover:bg-opacity-75 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
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