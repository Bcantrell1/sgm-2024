'use client';
import React, { useEffect, useRef, useState } from 'react';

interface StandardItemProps {
  title: string;
  description: string;
}

const StandardItem: React.FC<StandardItemProps> = ({ title, description }) => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

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
      if (isActive) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
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
    <div
      className="relative overflow-hidden bg-white text-black cursor-pointer mb-4 transition-all duration-600 ease-in-out"
      onClick={handleInteraction}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`absolute inset-0 bg-neu-green rounded transition-all duration-600 ease-in-out`}
        style={{
          clipPath: isActive 
            ? 'inset(0 0 0 0)' 
            : isClosing 
              ? 'inset(0 0 100% 0)' 
              : 'inset(100% 0 0 0)',
        }}
      />
      <div className="relative z-10" ref={contentRef}>
        <div className="flex flex-col md:flex-row p-4 items-start md:items-center md:p-6">
          <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold transition-all duration-600 md:w-2/3 ${
            isActive ? '' : 'text-black'
          }`}>
            {title}
          </h3>
          <div className={`md:w-1/3 md:pl-6 overflow-hidden transition-all duration-600 ${
            isActive ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <p className="text-white text-sm md:text-base lg:text-lg">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MaintenanceStandards: React.FC = () => {
  const standards = [
    {
      title: "MINIMAL UPKEEP DESIGN",
      description: "SGM products are engineered for near-zero maintenance throughout their lifespan, saving you time and resources while maintaining pristine appearance."
    },
    {
      title: "EXPERT INSTALLATION",
      description: "Our seasoned teams have successfully installed our products in the most challenging environments, ensuring flawless execution for your project."
    },
    {
      title: "SPECIALIZED CARE PRODUCTS",
      description: "We offer a range of maintenance solutions, from advanced odor neutralizers to professional-grade fiber grooming equipment, with many products also available at local home improvement stores."
    },
    {
      title: "PROACTIVE MAINTENANCE",
      description: "We provide scheduled inspections to ensure your artificial grass maintains its premium look, with prompt maintenance services available if ever needed."
    }
  ];

  return (
    <div className="bg-white py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-8 md:mb-12">
          <span className="text-neu-green">SGM</span> MAINTENANCE STANDARDS
        </h2>
        <div>
          {standards.map((standard, index) => (
            <StandardItem
              key={index}
              title={standard.title}
              description={standard.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaintenanceStandards;