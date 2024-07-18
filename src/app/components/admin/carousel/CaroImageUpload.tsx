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
    <div className="py-4 bg-neu-base">
      <button onClick={() => openModal()} className="neu-button-green mb-4">
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