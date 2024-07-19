import { ClipboardDocumentCheckIcon, LinkIcon, PuzzlePieceIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface ProcessStepProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mb-8">
    <div className="bg-neu-base p-3 rounded-full shadow-neumorphic-sm mb-4">
      <Icon className="w-8 h-8 text-neu-green" />
    </div>
    <h3 className="text-neu-yellow font-semibold mb-2">{title}</h3>
    <p className="text-gray-300 text-sm">{description}</p>
  </div>
);

const InstallationProcess: React.FC = () => {
  const steps = [
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Site Evaluation",
      description: "Comprehensive site evaluation to customize turf layout and installation strategy for optimal results.",
    },
    {
      icon: SparklesIcon,
      title: "Ground Preparation",
      description: "Meticulous ground preparation, including clearing and leveling, to create the ideal foundation for turf installation.",
    },
    {
      icon: PuzzlePieceIcon,
      title: "Turf Installation",
      description: "Precision turf installation with careful attention to detail, ensuring a natural look and seamless fit.",
    },
    {
      icon: LinkIcon,
      title: "Secure Anchoring",
      description: "Secure anchoring and expert seam work for a durable installation with virtually invisible connections.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Quality Assurance",
      description: "Rigorous quality assurance, including safety checks and customer approval, to guarantee complete satisfaction.",
    },
  ];

  return (
    <div className="bg-black w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl text-center font-bold mb-12">
          <span className="text-neu-green">OUR INSTALLATION</span>{' '}
          <span className="text-neu-yellow">PROCESS</span>
        </h2>
        
        <div className="flex flex-wrap justify-center -mx-4">
          {steps.map((step, index) => (
            <ProcessStep key={index} icon={step.icon} title={step.title} description={step.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstallationProcess;