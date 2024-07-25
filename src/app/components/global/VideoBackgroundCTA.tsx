'use client';
import { useProjectWizard } from '@/app/hooks/useProjectWizard';
import React from 'react';

interface VideoBackgroundCTAProps {
  title: string;
  description: string;
  videoSrc: string;
}

const VideoBackgroundCTA: React.FC<VideoBackgroundCTAProps> = ({ title, description, videoSrc }) => {
  const { openWizard } = useProjectWizard();

  return (
    <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
          {title}
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-8 sm:mb-10 max-w-3xl">
          {description}
        </p>
        <button
          onClick={openWizard}
          className="bg-neu-green hover:bg-neu-yellow text-black hover:text-neu-dark text-lg sm:text-xl px-8 py-3 sm:px-10 sm:py-4 rounded transition duration-300 transform hover:scale-105"
        >
          Start Your Project
        </button>
      </div>
    </div>
  );
};

export default VideoBackgroundCTA;