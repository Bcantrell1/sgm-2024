import { ChatBubbleBottomCenterTextIcon, PencilSquareIcon, PresentationChartLineIcon, SwatchIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

interface ProcessStep {
  icon: React.ElementType;
  title: string;
  description: string;
}

const DesignProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: ProcessStep[] = [
    {
      icon: ChatBubbleBottomCenterTextIcon,
      title: "Consultation",
      description: "We begin with an in-depth discussion to understand your vision, preferences, and requirements for your outdoor space. This crucial step ensures that we capture all your ideas and aspirations.",
    },
    {
      icon: PencilSquareIcon,
      title: "Concept Development",
      description: "Our designers create initial sketches and mood boards to visualize your ideas and explore different design directions. This phase allows us to experiment with various styles and layouts to find the perfect match for your vision.",
    },
    {
      icon: PresentationChartLineIcon,
      title: "Detailed Design",
      description: "We refine the chosen concept into a comprehensive design plan, including 3D renderings and material selections. This detailed approach helps you visualize the final result and make informed decisions about every aspect of your space.",
    },
    {
      icon: SwatchIcon,
      title: "Finalization",
      description: "We present the final design for your approval, making any necessary adjustments to ensure your complete satisfaction. This collaborative process ensures that the final design perfectly aligns with your vision and exceeds your expectations.",
    },
  ];

  return (
    <div className="bg-neu-dark py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center text-neu-green mb-6">OUR CUSTOM <span className='text-neu-yellow'>DESIGN PROCESS</span></h2>
        <p className="max-w-4xl text-lg mx-auto text-center text-gray-300 mb-12 leading-relaxed">
          At SGM, we follow a comprehensive design process to ensure your vision is brought to life with precision and creativity.
        </p>
        
        {/* Progress Bar */}
        <div className="w-full bg-neu-base h-2 rounded-full mb-8">
          <motion.div
            className="bg-neu-yellow h-full rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center justify-center p-4 cursor-pointer rounded-lg ${
                index === activeStep ? 'bg-neu-green text-white' : 'bg-neu-base text-gray-400'
              }`}
              onClick={() => setActiveStep(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <step.icon className="w-12 h-12 mb-2" />
              <span className="text-center font-semibold">{step.title}</span>
            </motion.div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-neu-base p-6 sm:p-8 rounded-lg shadow-neumorphic"
          >
            <div className="flex items-center mb-4">
              <motion.div
                className="bg-neu-green rounded-full p-3 mr-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {React.createElement(steps[activeStep].icon, { className: "w-8 h-8 text-white" })}
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-bold text-neu-yellow">{steps[activeStep].title}</h3>
            </div>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">{steps[activeStep].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DesignProcess;