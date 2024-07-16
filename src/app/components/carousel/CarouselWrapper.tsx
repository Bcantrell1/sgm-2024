'use client';

import { fetchCarouselImages } from '@/lib/fetchCarouselItems';
import { Suspense, useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';
import Carousel from './Carousel';

function CarouselLoadingFallback() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="relative w-full" style={{ paddingTop: '46.25%' }}></div>;
  }

  return (
    <div className="relative w-full" style={{ paddingTop: '46.25%' }}>
      <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
        <LoadingSpinner />
      </div>
    </div>
  );
}

export default function CarouselWrapper() {
  const [imagesPromise, setImagesPromise] = useState<Promise<any> | null>(null);

  useEffect(() => {
    setImagesPromise(fetchCarouselImages());
  }, []);

  if (!imagesPromise) {
    return <CarouselLoadingFallback />;
  }

  return (
    <Suspense fallback={<CarouselLoadingFallback />}>
      <Carousel imagesPromise={imagesPromise} />
    </Suspense>
  );
}