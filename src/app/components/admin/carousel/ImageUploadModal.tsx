'use client';
import { CarouselImage } from '@/lib/fetchCarouselImages';
import { handleDelete, handleUpload } from '@/utils/imageUtils';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Modal from 'react-modal';
import ImagePreview from './ImagePreview';

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedImage: CarouselImage | null;
  onImageChange: (newImages: CarouselImage[]) => void;
}

const ImageUploadModal: React.FC<ImageUploadModalProps> = ({ isOpen, onClose, selectedImage, onImageChange }) => {
  const [newImage, setNewImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      setNewImage(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    multiple: false
  });

  useEffect(() => {
    if (newImage) {
      const objectUrl = URL.createObjectURL(newImage);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [newImage]);

  const handleImageUpload = async () => {
    if (newImage) {
      try {
        const updatedImages = await handleUpload(newImage);
        onImageChange(updatedImages);
        onClose();
      } catch (error) {
        alert('Failed to upload image.');
      }
    }
  };

  const handleImageDelete = async () => {
    if (selectedImage) {
      try {
        const updatedImages = await handleDelete(selectedImage);
        onImageChange(updatedImages);
        onClose();
      } catch (error) {
        alert('Failed to delete image.');
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      overlayClassName="fixed inset-0 z-10 bg-black bg-opacity-75"
      ariaHideApp={false}
    >
      <div className="flex flex-col items-center">
        {selectedImage ? (
          <ImagePreview
            image={selectedImage}
            onDelete={handleImageDelete}
          />
        ) : (
          <div className="w-full">
            <div 
              {...getRootProps()} 
              className={`border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer transition-colors ${
                isDragActive ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-400'
              }`}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-blue-500">Drop the image here ...</p>
              ) : (
                <p className='text-blue-500'>Drop an Image <br/>Or Click Here</p>
              )}
            </div>
            {previewUrl && (
              <div className="mt-4">
                <Image
                  src={previewUrl}
                  alt="Image preview"
                  width={400}
                  height={300}
                  layout="responsive"
                />
                <button 
                  onClick={handleImageUpload} 
                  className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                >
                  Upload Image
                </button>
              </div>
            )}
          </div>
        )}
        <button onClick={onClose} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors">Close</button>
      </div>
    </Modal>
  );
};

export default ImageUploadModal;