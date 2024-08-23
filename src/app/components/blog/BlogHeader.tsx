import Image from 'next/image';
import React from 'react';

const BlogHeader = () => {
  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <Image
        src="/bgs/news_bg.jpg"
        alt="Turf and Hardscape"
				fill
        className="object-cover absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neu-base opacity-80 z-10"></div>
      <div className="relative text-neu-yellow z-20 h-full flex flex-col justify-end items-start p-8 md:p-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-neu-text-raised">
          News Articles
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl text-neu-text-raised">
          Stay updated with the latest trends and innovations in turf and hardscape design.
        </p>
      </div>
    </div>
  );
};

export default BlogHeader;