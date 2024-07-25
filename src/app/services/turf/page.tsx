'use client';
import ContactForm from '@/app/components/contact/ContactForm';
import VideoBackgroundCTA from '@/app/components/global/VideoBackgroundCTA';
import ServiceHero from '@/app/components/services/ServiceHero';
import InstallationProcess from '@/app/components/services/turf/InstallationProcess';
import Installers from '@/app/components/services/turf/Installers';
import VideoSection from '@/app/components/services/VideoSection';
import InstallationImage from '@/public/bgs/installation.jpg';
import React, { useState } from 'react';

const TurfPage: React.FC = () => {
	const [submitMessage, setSubmitMessage] = useState('');

  return (
    <div className="bg-neu-base min-h-screen">
      <ServiceHero
        imageSrc={InstallationImage}
        title="Artificial Turf Solutions"
        subtitle="The SGM difference: Our artificial turf and installation process
                  combines expert site preparation, precision turf laying, and seamless joining techniques.
                  Each project culminates in a final inspection, ensuring a lush, durable,
                  and impeccably finished lawn that exceeds expectations."
      />
      <div className="container mx-auto px-4 py-8">
				<Installers />
      </div>
			<VideoBackgroundCTA
				title="Let's Get Your Project Started"
				description="Help us get more familiar with your project needs so we can deliver a product you love!"
				videoSrc="/videos/grass.mp4"
			/>
			<InstallationProcess />
			<VideoSection
				title="Bring Your Vision to Life"
				subtitle="Experience the power of custom design with SGM. Our expert team works closely with you to create unique, stunning landscapes that perfectly match your style and needs. From concept to completion, we turn your dreams into reality."
				videoSrc="/videos/maintenance.mp4"
				buttonText="Custom Designs"
				buttonLink="/custom-design"
			/>
			<div className='p-4 my-8'>
				<h2 className="text-3xl sm:text-4xl md:text-5xl text-neu-text-raised lg:text-6xl font-bold text-neu-yellow text-center mb-8 md:mb-12">
          <span className="text-neu-green">INQUIRE TODAY ABOUT<br/></span>ARTIFICIAL TURF
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

export default TurfPage;