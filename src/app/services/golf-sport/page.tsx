'use client';
import ContactForm from '@/app/components/contact/ContactForm';
import VideoBackgroundCTA from '@/app/components/global/VideoBackgroundCTA';
import ServiceHero from '@/app/components/services/ServiceHero';
import AlternatingContentShowcase from '@/app/components/services/sports/AlternatingContentShjowcase';
import PuttingGreenSportsFieldHeader from '@/app/components/services/sports/PuttingGreensportsFieldHeader';
import PuttingGreenImage from '@/public/bgs/putting_green_bg.jpg';
import React, { useState } from 'react';

const PuttingGreenSportsFieldPage: React.FC = () => {
  const [submitMessage, setSubmitMessage] = useState('');

	const showcaseItems = [
    {
      title: "Professional Putting Greens",
      description: "Experience tour-quality putting surfaces in your own backyard. Our professional-grade putting greens are designed to improve your short game and provide endless entertainment.",
      imageSrc: "/sports/golf.jpg"
    },
    {
      title: "Multi-Sport Fields",
      description: "Transform your space into a versatile sports complex. Our multi-sport fields are engineered to support various activities, from soccer and football to lacrosse and more.",
      imageSrc: "/sports/multi-sport.jpg"
    },
    {
      title: "Indoor Training Facilities",
      description: "Take your practice indoors with our state-of-the-art training facilities. Perfect for year-round training, regardless of weather conditions.",
      imageSrc: "/sports/workout.jpg"
    }
  ];
  
  return (
    <div className="bg-neu-base min-h-screen">
      <ServiceHero
        imageSrc={PuttingGreenImage}
        title="Premium Sports Fields & Putting Greens"
        subtitle="Whether you're a Professional Athlete or a weekend warrior, trust SGM to provide the best sports surfacing for peak performance and long lasting enjoyment."
      />
      <PuttingGreenSportsFieldHeader />
			<div className='bg-white text-center p-8 md:p-12'>
				<h3 className='text-gray-800 max-w-6xl font-semibold bold mx-auto py-8 text-2xl sm:text-3xl leading-relaxed'>
					SGM delivers top-tier athletic turf solutions, trusted by elite athletes, renowned coaches, and professional sports organizations for agility and sports training. Our proven surfaces enhance performance in various settings, from indoor batting facilities, custom putting area, and custom-designed workout spaces.
				</h3>
			</div>
			<VideoBackgroundCTA
				title="Transform Your Outdoor Space"
				description="Create the landscape of your dreams with our expert design and installation services."
				videoSrc="/videos/grass.mp4"
			/>
			<AlternatingContentShowcase items={showcaseItems} />
      <div className='p-4 my-8'>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-neu-text-raised lg:text-6xl font-bold text-neu-yellow text-center mb-8 md:mb-12">
          <span className="text-neu-green">READY TO ELEVATE <br/></span> YOUR GAME?
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

export default PuttingGreenSportsFieldPage;