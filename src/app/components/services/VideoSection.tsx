'use client';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

interface VideoSectionProps {
  title: string;
  subtitle: string;
  videoSrc: string;
  buttonText: string;
  buttonLink: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  title,
  subtitle,
  videoSrc,
  buttonText,
  buttonLink
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleEnded = () => {
        video.currentTime = 0;
        video.play();
      };
      video.addEventListener('ended', handleEnded);
      return () => video.removeEventListener('ended', handleEnded);
    }
  }, []);

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-neu-yellow text-neu-text-raised mb-4">
          {title}
        </h2>
        <p className="text-white text-lg mb-6 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
        <Link href={buttonLink} passHref>
          <button className="neu-button">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoSection;