'use client';
import { db, storage } from '@/firebase/clientApp';
import { collection, deleteDoc, doc, getDocs, query } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';

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
      // Check if image exists in Storage
      const imageRef = ref(storage, image.url);
      await getDownloadURL(imageRef);
      
      // If we get here, the image exists, so we don't remove it
      alert('Image is valid and accessible.');
    } catch (error) {
      // Image doesn't exist in Storage, so we remove it from Firestore
      await deleteDoc(doc(db, 'carouselImages', image.id));
      setImages(images.filter(img => img.id !== image.id));
      alert('Invalid image removed from database.');
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-4 sm:p-6'>

			<h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">Image Validation</h1>
			<div className="bg-white text-gray-800 shadow overflow-hidden sm:rounded-md">
				<button 
					onClick={fetchImages}
					className="mb-4 mt-4 ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
				>
					Refresh Images
				</button>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{images.map((image) => (
						<div key={image.id} className="border p-4 rounded">
							<img src={image.url} alt={image.name} className="w-full h-40 object-cover mb-2" />
							<p className="truncate">{image.name}</p>
							<button 
								onClick={() => validateAndRemoveImage(image)}
								className="mt-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
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