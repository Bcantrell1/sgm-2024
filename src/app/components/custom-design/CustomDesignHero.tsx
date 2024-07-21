import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface CustomDesignHeroProps {
  imageSrc: string | StaticImageData;
  title: string;
  subtitle: string;
}

const CustomDesignHero: React.FC<CustomDesignHeroProps> = ({ imageSrc, title, subtitle }) => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

	const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
      <Image
        src={imageSrc}
        alt="Custom Design Background"
				fill
        quality={100}
        priority
				className='object-cover'
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neu-dark via-neu-dark/70 to-transparent">
        <div className="absolute inset-0 bg-neu-dark/30" />
      </div>
     
      <div className="relative h-full flex items-center justify-center p-8">
        <motion.div
          className="max-w-5xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-neu-dark/80 backdrop-blur-sm p-8 rounded-lg shadow-2xl"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl text-center md:text-left md:text-5xl lg:text-7xl font-bold text-gray-200 mb-6"
              variants={itemVariants}
            >
                {title.split(' ').map((word, index, array) => (
                <motion.span 
                  key={index} 
                  className={`inline-block mx-1 md:mx-2 ${index === array.length - 1 ? "text-neu-yellow" : ""} ${index === array.length - 4 ? "text-neu-green" : ""}`}
                  variants={itemVariants}
                >
                  {word.split('').map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      className="inline-block"
                      variants={letterVariants}
                    >
                      {letter}
                    </motion.span>
                  ))}
                  {' '}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p 
              className="text-xl hidden md:block sm:text-2xl text-gray-200 mb-8 max-w-4xl"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
            <motion.div 
              className="flex flex-col justify-center md:justify-start sm:flex-row gap-4"
              variants={itemVariants}
            >
              <button 
                className="neu-button-warning"
              >
                Get Started
              </button>
              <button 
                className="neu-button"
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomDesignHero;