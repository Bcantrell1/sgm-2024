'use client';
import ContactForm from '@/app/components/contact/ContactForm';
import InstallationProcess from '@/app/components/services/installation/InstallationProcess';
import Installers from '@/app/components/services/installation/Installers';
import ServiceHero from '@/app/components/services/ServiceHero';
import VideoSection from '@/app/components/services/VideoSection';
import React, { useState } from 'react';
import InstallationImage from '../../../../public/bgs/installation_bg.jpg';

const InstallationPage: React.FC = () => {
	const [submitMessage, setSubmitMessage] = useState('');

  return (
    <div className="bg-neu-base min-h-screen">
      <ServiceHero
        imageSrc={InstallationImage}
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
			<div className='p-4 my-8'>
				<h2 className="text-3xl sm:text-4xl md:text-5xl text-neu-text-raised lg:text-6xl font-bold text-neu-yellow text-center mb-8 md:mb-12">
          <span className="text-neu-green">INQUIRE TODAY<br/></span> ABOUT INSTALLATIONS!
        </h2>
				<div className="max-w-4xl mx-auto h-full my-8 p-8 bg-neu-base neu-card">
					<ContactForm setSubmitMessage={setSubmitMessage} />
					{submitMessage && (
						<p className="mt-6 text-center text-lg font-medium text-neu-green bg-neu-base neu-card p-3">{submitMessage}</p>
					)}
				</div>
			</div>
    </div>
  );
};

export default InstallationPage;