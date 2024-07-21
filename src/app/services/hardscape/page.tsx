'use client';
import ContactForm from '@/app/components/contact/ContactForm';
import HardscapeFeatures from '@/app/components/services/hardscape/HardscapeFeatures';
import HardscapeServices from '@/app/components/services/hardscape/HardscapeServices';
import ServiceHero from '@/app/components/services/ServiceHero';
import HardscapeImage from '@/public/bgs/hardscape_bg.jpg';
import React, { useState } from 'react';

const HardscapePage: React.FC = () => {
  const [submitMessage, setSubmitMessage] = useState('');
  
  return (
    <div className="bg-neu-base min-h-screen">
      <ServiceHero
        imageSrc={HardscapeImage}
        title="Transforming Spaces with Elegance"
        subtitle="Discover the art of hardscaping with SGM. Our expert designs and quality craftsmanship create stunning outdoor living spaces that blend seamlessly with nature, enhancing both the beauty and value of your property."
      />
      <HardscapeServices />
      <HardscapeFeatures />
      <div className='p-4 my-8'>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-neu-text-raised lg:text-6xl font-bold text-neu-yellow text-center mb-8 md:mb-12">
          <span className="text-neu-green">READY TO TRANSFORM <br/></span> YOUR OUTDOOR SPACE?
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

export default HardscapePage;