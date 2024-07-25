import { GlobeAltIcon, ScaleIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import React from 'react';

const PuttingGreenSportsFieldHeader: React.FC = () => {
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
    <motion.div 
      className="bg-neu-dark py-16 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-8xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-6xl font-bold text-neu-green mb-6"
          variants={itemVariants}
        >
          PRECISION ENGINEERED <span className="text-neu-yellow">PLAYING SURFACES</span>
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          From professional-grade putting greens to multi-sport fields, SGM delivers unparalleled quality and performance in every installation.
        </motion.p>
        <motion.div 
          className="flex justify-center space-x-8"
          variants={itemVariants}
        >
          <div className="flex flex-col items-center">
            <GlobeAltIcon className="h-16 w-16 text-neu-yellow mb-4" />
            <span className="text-gray-300">Golf</span>
          </div>
          <div className="flex flex-col items-center">
            <ScaleIcon className="h-16 w-16 text-neu-yellow mb-4" />
            <span className="text-gray-300">Weight Rooms</span>
          </div>
          <div className="flex flex-col items-center">
            <SparklesIcon className="h-16 w-16 text-neu-yellow mb-4" />
            <span className="text-gray-300">Multi-Sport</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PuttingGreenSportsFieldHeader;