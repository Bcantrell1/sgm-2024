'use client';
import LoadingSpinner from '@/app/components/LoadingSpinner';
import { db, storage } from '@/firebase/clientApp';
import { collection, deleteDoc, doc, getDocs, query } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface CarouselImage {
  id: string;
  url: string;
  name: string;
}

export default function ImageCleanup() {
  const [images, setImages] = useState<CarouselImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setIsLoading(true);
    const q = query(collection(db, 'carouselImages'));
    const querySnapshot = await getDocs(q);
    const imagesData: CarouselImage[] = [];
    querySnapshot.forEach((doc) => {
      imagesData.push({ id: doc.id, ...doc.data() } as CarouselImage);
    });
    setImages(imagesData);
    setIsLoading(false);
  };

  const validateAndRemoveImage = async (image: CarouselImage) => {
    try {
      const imageRef = ref(storage, image.url);
      await getDownloadURL(imageRef);
      
      alert('Image is valid and accessible.');
    } catch (error) {
      await deleteDoc(doc(db, 'carouselImages', image.id));
      setImages(images.filter(img => img.id !== image.id));
      alert('Invalid image removed from database.');
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-neu-base">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className='py-4 sm:py-6 bg-neu-base'>
      <h1 className="text-2xl sm:text-3xl font-semibold text-neu-green mb-4 sm:mb-6">Image Validation</h1>
      <div className="bg-neu-base overflow-hidden">
        <button 
          onClick={fetchImages}
          className="mb-4 mt-4 bg-neu-green text-neu-base px-4 py-2 rounded-md shadow-neumorphic-sm hover:bg-neu-light hover:text-neu-green transition-colors"
        >
          Refresh Images
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {images.map((image) => (
            <div key={image.id} className="bg-neu-base shadow-neumorphic rounded-xl p-4">
              <div className='relative w-full h-40 mb-2'>
                <Image 
                  src={image.url} 
                  alt={image.name} 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <button 
                onClick={() => validateAndRemoveImage(image)}
                className="mt-2 w-full bg-neu-light text-neu-green px-2 py-1 rounded-md shadow-neumorphic-sm hover:bg-neu-green hover:text-neu-base transition-colors"
              >
                Validate & Remove if Invalid
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}