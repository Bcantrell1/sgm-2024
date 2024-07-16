'use client';
import { CarouselImage } from '@/lib/fetchCarouselImages';
import React, { useEffect, useState } from 'react';
import ImageGrid from './ImageGrid';
import ImageUploadModal from './ImageUploadModal';

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

  const handleImageChange = (newImages: CarouselImage[]) => {
    setImages(newImages);
  };

  return (
    <div className="p-4">
      <button onClick={() => openModal()} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
        Add Image
      </button>
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