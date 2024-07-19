import { ArrowPathIcon, BeakerIcon, ClipboardDocumentCheckIcon, CloudIcon, CubeIcon, SparklesIcon, TrashIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface MaintenanceItemProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
}

const MaintenanceItem: React.FC<MaintenanceItemProps> = ({ icon: Icon, title, subtitle }) => (
  <div className="bg-neu-base p-6 rounded-lg shadow-neumorphic flex flex-col items-center text-center">
    <Icon className="w-12 h-12 text-neu-green mb-4" />
    <h3 className="text-neu-yellow text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{subtitle}</p>
  </div>
);

const MinimumEffort: React.FC = () => {
  const maintenanceItems = [
    {
      icon: SparklesIcon,
      title: "Deep Cleaning",
      subtitle: "Utilize cutting-edge turf cleaning technology to eliminate embedded dirt and bacteria, surpassing standard cleaning methods for pristine results.",
    },
    {
      icon: TrashIcon,
      title: "Debris Management",
      subtitle: "Deploy high-efficiency equipment to thoroughly remove leaves, twigs, and debris, ensuring immaculate surfaces in expansive or high-traffic areas.",
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Inspection & Repair",
      subtitle: "Conduct meticulous examinations for wear and tear, addressing issues like loose seams promptly to maintain the turf's premium condition.",
    },
    {
      icon: ArrowPathIcon,
      title: "Revitalization",
      subtitle: "Implement expert grooming techniques to maintain fiber uprightness and surface uniformity, crucial for preserving aesthetics in high-use zones.",
    },
    {
      icon: BeakerIcon,
      title: "Antimicrobial Care",
      subtitle: "Apply specialized antimicrobial treatments in pet-friendly or high-traffic areas to neutralize odors and inhibit bacterial proliferation.",
    },
    {
      icon: CubeIcon,
      title: "Infill Optimization",
      subtitle: "Precisely monitor and adjust infill levels, ensuring even distribution for consistent cushioning and optimal support across the turf.",
    },
    {
      icon: CloudIcon,
      title: "Drainage Assurance",
      subtitle: "Evaluate and fine-tune the drainage system to prevent water accumulation, maintaining the turf's functionality and appearance.",
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Evaluation",
      subtitle: "Provide detailed assessments of turf condition post-maintenance, offering tailored recommendations to maximize lifespan and preserve aesthetic appeal.",
    },
  ];

  return (
    <div className="bg-neu-dark py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-bold text-center text-neu-green mb-6">MINIMUM EFFORT <span className='text-neu-yellow'>MAXIMUM RESULTS</span></h2>
				<p className="max-w-4xl text-lg mx-auto text-center text-gray-300 mb-12 leading-relaxed">
					SGM`s turf is designed for easy maintenance, requiring little to no effort to keep it looking pristine and functioning optimally year around.
				</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {maintenanceItems.map((item, index) => (
            <MaintenanceItem key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MinimumEffort;