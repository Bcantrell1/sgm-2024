'use client';
import { CarouselImage } from '@/lib/fetchCarouselImages';
import React, { useEffect, useState } from 'react';
import ImageGrid from './ImageGrid';
import ImageUploadModal from './ImageUploadModal';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '@/firebase/clientApp';

interface CaroImageUploadProps {
  imagesPromise: Promise<CarouselImage[]>;
}

const CaroImageUpload: React.FC<CaroImageUploadProps> = ({ imagesPromise }) => {
  const [images, setImages] = useState<CarouselImage[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<CarouselImage | null>(null);

  useEffect(() => {
    imagesPromise.then(setImages);
  }, [imagesPromise]);

  const openModal = (image?: CarouselImage) => {
    setSelectedImage(image || null);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  const fetchImages = async () => {
    const q = query(collection(db, 'carouselImages'));
    const querySnapshot = await getDocs(q);
    const imagesData: CarouselImage[] = [];
    querySnapshot.forEach((doc) => {
      imagesData.push({ id: doc.id, ...doc.data() } as CarouselImage);
    });
    setImages(imagesData);
  };

  const handleImageChange = (newImages: CarouselImage[]) => {
    setImages(newImages);
  };

  return (
    <div className="py-4 bg-neu-base">
      <div className='flex justify-between flex-wrap gap-2'>
        <button 
          onClick={() => openModal()} 
          className="m-4 bg-neu-green text-neu-base px-4 py-2 rounded-md shadow-neumorphic-sm hover:bg-neu-light hover:text-neu-green transition-colors"
        >
          Add Image
        </button>
        <button 
          onClick={fetchImages}
          className="m-4 bg-neu-green text-neu-base px-4 py-2 rounded-md shadow-neumorphic-sm hover:bg-neu-light hover:text-neu-green transition-colors"
        >
          Refresh Images
        </button>
      </div>
      <ImageGrid images={images} onImageClick={openModal} />
      <ImageUploadModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        selectedImage={selectedImage}
        onImageChange={handleImageChange}
      />
    </div>
  );
};

export default CaroImageUpload;