import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface ShowcaseItem {
  title: string;
  description: string;
  imageSrc: string;
}

interface AlternatingContentShowcaseProps {
  items: ShowcaseItem[];
}

const AlternatingContentShowcase: React.FC<AlternatingContentShowcaseProps> = ({ items }) => {
  return (
    <div className="bg-neu-base py-8 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex flex-col lg:flex-row items-center mb-12 sm:mb-20 md:mb-24 lg:mb-30 last:mb-0 ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:flex lg:justify-center lg:items-center">
              <div className="max-w-3xl lg:max-w-2xl px-3 xl:max-w-3xl">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neu-yellow mb-4 sm:mb-6">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2 sm:mb-4">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:flex lg:justify-center lg:items-center">
              <div className="relative w-full aspect-w-16 aspect-h-9 lg:aspect-auto lg:h-[32rem] xl:h-[40rem] max-w-3xl lg:max-w-2xl xl:max-w-3xl">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AlternatingContentShowcase;