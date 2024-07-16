import CaroImageUpload from '@/app/components/admin/carousel/CaroImageUpload';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import { fetchCarouselImages } from '@/lib/fetchCarouselImages';
import { Suspense } from 'react';

export default async function ImageUpload() {
  const imagesPromise = fetchCarouselImages();

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">Carousel Image Manager</h1>
      <div className="bg-white text-gray-800 shadow overflow-hidden sm:rounded-md">
        <Suspense fallback={<LoadingSpinner size={64} />}>
          <CaroImageUpload imagesPromise={imagesPromise} />
        </Suspense>
      </div>
    </div>
  );
}