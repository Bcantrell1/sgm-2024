'use client';
import ContactForm from '@/app/components/contact/ContactForm';
import CustomDesignImage from '@/public/bgs/custom_bg.jpg';
import React, { useState } from 'react';
import CustomDesignHero from '../components/custom-design/CustomDesignHero';
import DesignProcess from '../components/custom-design/DesignProcess';
import PortfolioShowcase from '../components/custom-design/PortfolioShowcase';
import VideoBackgroundCTA from '../components/global/VideoBackgroundCTA';

const CustomDesignPage: React.FC = () => {
  const [submitMessage, setSubmitMessage] = useState('');

  return (
    <div className="bg-neu-base min-h-screen">
      <CustomDesignHero
        imageSrc={CustomDesignImage}
        title="Lets Craft Your Unique Outdoor Vision"
        subtitle="Experience the art of personalized landscaping with SGM. Our expert designers bring your dreams to life, creating outdoor spaces that reflect your style and enhance your property's beauty."
      />
      <DesignProcess />
      <PortfolioShowcase />
			<VideoBackgroundCTA
				title="Let`s Start Your Custom Design"
				description="Our team create's the landscape of your dreams and ensures the timeline that works best for you!"
				videoSrc="/videos/grass.mp4"
			/>
      <div className='p-4 my-8'>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-neu-text-raised lg:text-6xl font-bold text-neu-yellow text-center mb-8 md:mb-12">
          <span className="text-neu-green">READY TO START YOUR <br/></span> CUSTOM DESIGN JOURNEY?
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

export default CustomDesignPage;