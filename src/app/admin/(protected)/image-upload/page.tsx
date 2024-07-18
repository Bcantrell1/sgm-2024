import CaroImageUpload from '@/app/components/admin/carousel/CaroImageUpload';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import { fetchCarouselImages } from '@/lib/fetchCarouselImages';
import { Suspense } from 'react';

export default async function ImageUpload() {
  const imagesPromise = fetchCarouselImages();

  return (
    <div className="py-4 sm:py-6">
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-4 sm:mb-6">Carousel Image Manager</h1>
      <Suspense fallback={<LoadingSpinner size={64} />}>
        <CaroImageUpload imagesPromise={imagesPromise} />
      </Suspense>
    </div>
  );
}