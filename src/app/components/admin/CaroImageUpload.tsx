'use client';
import { db } from '@/firebase/clientApp';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import ImageGrid from './carousel/ImageGrid';
import ImageUploadModal from './carousel/ImageUploadModal';

interface CarouselImage {
  id: string;
  url: string;
  name: string;
}

const AdminImageUpload: React.FC = () => {
  const [images, setImages] = useState<CarouselImage[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<CarouselImage | null>(null);

  useEffect(() => {
    const q = query(collection(db, 'carouselImages'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, {includeMetadataChanges: true}, (querySnapshot) => {
      const imagesData: CarouselImage[] = [];
      querySnapshot.forEach((doc) => {
        imagesData.push({ id: doc.id, ...doc.data() } as CarouselImage);
      });
      setImages(imagesData);
    });

    return () => unsubscribe();
  }, []);

  const openModal = (image?: CarouselImage) => {
    setSelectedImage(image || null);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
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
      />
    </div>
  );
};

export default AdminImageUpload;