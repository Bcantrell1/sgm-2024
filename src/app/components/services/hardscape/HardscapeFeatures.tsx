'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInteraction = () => {
    if (isMobile) {
      setIsActive(!isActive);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsActive(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsActive(false);
    }
  };

  return (
    <motion.div
      className="relative overflow-hidden bg-white text-black cursor-pointer mb-4"
      onClick={handleInteraction}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ backgroundColor: '#FFFFFF' }}
      animate={{ backgroundColor: isActive ? '#4CAF50' : '#FFFFFF' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.div className="relative z-10">
        <div className="flex flex-col md:flex-row p-4 items-start md:items-center md:p-6">
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold md:w-2/3"
            animate={{ color: isActive ? '' : '#000000' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {title}
          </motion.h3>
          <AnimatePresence>
            {isActive && (
              <motion.div
                className="md:w-1/3 md:pl-6 overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <p className="text-white text-sm md:text-base lg:text-lg">
                  {description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

const HardscapeFeatures: React.FC = () => {
  const features = [
    {
      title: "CUSTOM DESIGNS",
      description: "Our expert designers create unique hardscape solutions tailored to your specific needs and aesthetic preferences."
    },
    {
      title: "QUALITY MATERIALS",
      description: "We use only the highest quality stones, pavers, and materials to ensure longevity and beauty in all our hardscape projects."
    },
    {
      title: "EXPERT INSTALLATION",
      description: "Our skilled craftsmen have years of experience in creating stunning hardscapes that stand the test of time."
    },
    {
      title: "SUSTAINABLE PRACTICES",
      description: "We incorporate eco-friendly designs and materials whenever possible, promoting water conservation and environmental responsibility."
    }
  ];

  return (
    <div className="bg-white py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-8 md:mb-12">
          <span className="text-neu-green">SGM</span> HARDSCAPE FEATURES
        </h2>
        <div>
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HardscapeFeatures;