'use client';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ServiceHeroProps {
  imageSrc: string | StaticImageData;
  title: string;
  subtitle: string;
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ imageSrc, title, subtitle }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neu-dark via-neu-dark/70 to-transparent"></div>
      <motion.div 
        className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-16 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-neu-yellow mb-4 text-neu-text-raised leading-tight"
          variants={itemVariants}
        >
          {title}
        </motion.h1>
        <motion.p 
          className="text-base md:text-lg lg:text-xl text-gray-300 max-w-6xl font-medium leading-relaxed"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ServiceHero;