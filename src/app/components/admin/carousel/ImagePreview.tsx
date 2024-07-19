'use client';
import NextImage from 'next/image';
import React from 'react';

interface CarouselImage {
  id: string;
  url: string;
  name: string;
}

interface ImagePreviewProps {
  image: CarouselImage;
  onDelete: () => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ image, onDelete }) => {
  return (
    <div className="w-full">
      <NextImage src={image.url} alt={image.name} width={800} height={600} className="w-full max-h-96 object-contain mb-4" />
      <button onClick={onDelete} className="neu-button-error">
        Delete Image
      </button>
    </div>
  );
};

export default ImagePreview;