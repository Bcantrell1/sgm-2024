import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import React from 'react';

const benefits = [
  { title: "All-Weather Performance", description: "Enjoy consistent play regardless of weather conditions." },
  { title: "Low Maintenance", description: "Significantly reduce upkeep time and costs compared to natural grass." },
  { title: "Durability", description: "Withstand heavy use and maintain quality for years." },
  { title: "Eco-Friendly", description: "Conserve water and eliminate the need for harmful pesticides." },
  { title: "Customizable Design", description: "Tailor the layout and features to your specific needs and space." },
  { title: "Improved Play", description: "Experience true ball roll and consistent bounce across the entire surface." },
];

const PuttingGreenSportsFieldBenefits: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-neu-green mb-12">
          THE <span className="text-neu-yellow">SGM ADVANTAGE</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-neu-base p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start mb-4">
                <CheckCircleIcon className="w-6 h-6 text-neu-green mr-2 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-neu-yellow">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PuttingGreenSportsFieldBenefits;