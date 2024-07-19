// pages/services/installation.tsx
import InstallationProcess from '@/app/components/services/installation/InstallationProcess';
import Installers from '@/app/components/services/installation/Installers';
import ServiceHero from '@/app/components/services/ServiceHero';
import VideoSection from '@/app/components/services/VideoSection';
import React from 'react';

const InstallationPage: React.FC = () => {
  return (
    <div className="bg-neu-base min-h-screen">
      <ServiceHero
        imageSrc="/bgs/installation_bg.jpg"
        title="Artificial Grass Installation"
        subtitle="The SGM difference: Our meticulous artificial turf installation process
                  combines expert site preparation, precision turf laying, and seamless joining techniques.
                  Each project culminates in a final inspection, ensuring a lush, durable,
                  and impeccably finished lawn that exceeds expectations."
      />
      <div className="container mx-auto px-4 py-8">
				<Installers />
      </div>
			<InstallationProcess />
			<VideoSection 
        title="Simple Upkeep, Lasting Beauty"
        subtitle="Maintaining your SGM artificial turf is effortless. With minimal care – occasional brushing and light rinsing – your lush, green landscape stays pristine year-round, saving you time and resources while preserving its natural appeal."
        videoSrc="/videos/maintenance.mp4"
        buttonText="Learn More"
        buttonLink="/services/maintenance"
      />
    </div>
  );
};

export default InstallationPage;