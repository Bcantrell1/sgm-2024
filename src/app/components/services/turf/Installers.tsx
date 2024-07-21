import React from 'react';

const CheckmarkIcon: React.FC = () => (
  <div className="w-16 h-16 mr-4 bg-neu-base rounded-full shadow-neumorphic flex items-center justify-center flex-shrink-0">
    <svg className="w-8 h-8 text-neu-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  </div>
);

const ProcessItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-neu-dark rounded-tl-md rounded-bl-md border-r-neu-green border-r-2 p-6 shadow-neumorphic relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[70%] h-[1px] bg-gradient-to-l from-neu-green via-neu-light-green to-transparent"></div>
    <div className="flex items-center">
			<div className='hidden lg:block'>
				<CheckmarkIcon />
			</div>
      <div>
        <h3 className="text-xl font-semibold text-neu-yellow mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
    <div className="absolute bottom-0 right-0 w-[70%] h-[1px] bg-gradient-to-l from-neu-green via-neu-light-green to-transparent"></div>
  </div>
);

const Installers: React.FC = () => {
  return (
    <div className="bg-neu-base py-12 md:px-4">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-3xl md:text-6xl flex flex-wrap text-center gap-3 justify-center font-bold mb-2">
          <span className="text-neu-green">SGM INSTALLERS</span>{' '}
          <span className="text-neu-yellow"> TAKE CARE OF IT ALL</span>
        </h2>
        <p className="max-w-5xl text-lg mx-auto text-center text-gray-300 mb-12">
          Experience a seamless transformation with SGM`s expert installation services. Our skilled team handles every aspect of your residential or commercial artificial turf project, ensuring a hassle-free process from start to finish.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProcessItem
            title="Meticulous Site Preparation"
            description="Our SGM experts begin by thoroughly assessing and preparing your site. We ensure optimal drainage, precise leveling, and proper compaction, creating the perfect foundation for a long-lasting, beautiful artificial turf installation."
          />
          <ProcessItem
            title="Comprehensive Equipment & Materials"
            description="SGM's installation team arrives fully equipped with state-of-the-art tools and premium materials. Our all-inclusive approach means you don't need to worry about sourcing or providing any additional resources for your project."
          />
          <ProcessItem
            title="Unparalleled Craftsmanship"
            description="At SGM, we take pride in delivering excellence. Our team of Certified Installers brings years of expertise and a commitment to perfection, ensuring your artificial turf is installed with the highest standards of quality and attention to detail."
          />
          <ProcessItem
            title="Thorough Site Cleanup"
            description="We believe the final touch is as important as the installation itself. Once your new turf is in place, our team conducts a comprehensive cleanup, leaving your property immaculate and ready for you to enjoy your stunning new landscape immediately."
          />
        </div>
      </div>
    </div>
  );
};

export default Installers;