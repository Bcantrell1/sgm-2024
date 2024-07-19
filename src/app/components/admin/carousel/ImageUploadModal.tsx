'use client';
import { CarouselImage } from '@/lib/fetchCarouselImages';
import { handleDelete, handleUpload } from '@/utils/imageUtils';
import NextImage from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Modal from 'react-modal';
import LoadingSpinner from '../../LoadingSpinner';
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
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
      try {
        const updatedImages = await handleUpload(newImage);
        onImageChange(updatedImages);
        onClose();
      } catch (error) {
        alert('Failed to upload image.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleImageDelete = async () => {
    if (selectedImage) {
      setIsLoading(true);
      try {
        const updatedImages = await handleDelete(selectedImage);
        onImageChange(updatedImages);
        onClose();
      } catch (error) {
        alert('Failed to delete image.');
      } finally {
        setIsLoading(false);
      }
    }
  };

	const onCloseClick = () => {
		onClose();
		setPreviewUrl(null);
	}

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neu-base p-6 rounded-xl shadow-neumorphic max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      overlayClassName="fixed inset-0 z-10 bg-neu-dark bg-opacity-75"
      ariaHideApp={false}
    >
      <div className="flex flex-col items-center relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-neu-base bg-opacity-75 z-10">
            <LoadingSpinner />
          </div>
        )}
        {selectedImage ? (
          <ImagePreview
            image={selectedImage}
            onDelete={handleImageDelete}
          />
        ) : (
          <div className="w-full">
						{!previewUrl ? (

            <div 
              {...getRootProps()} 
              className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
                isDragActive ? 'border-neu-green bg-neu-light' : 'border-neu-light hover:border-neu-green'
              }`}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-neu-green">Drop the image here ...</p>
              ) : (
                <p className='text-neu-light'>Drop an Image <br/>Or Click Here</p>
              )}
            </div>
						): null}
            {previewUrl && (
              <div className="mt-4 relative h-80 rounded">
                <NextImage
                  src={previewUrl}
                  alt="Image preview"
									className='rounded'
									fill
                />
                
              </div>
            )}
          </div>
        )}
				<button 
					onClick={handleImageUpload} 
					className="mt-4 neu-button-green"
					disabled={isLoading}
					>
					Upload Image
				</button>
        <button 
          onClick={onCloseClick} 
          className="mt-4 neu-button-error"
          disabled={isLoading}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ImageUploadModal;