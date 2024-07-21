'use client';
import ContactImage from '@/public/bgs/maintenance_bg.jpg';
import React, { useState } from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactHeader from '../components/contact/ContactHeader';

export default function Contact() {
  const [submitMessage, setSubmitMessage] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center pb-12 bg-neu-base">
      <div className="w-full space-y-8">
        <ContactHeader 
				imageSrc={ContactImage}
					title="Get in Touch"
					subtitle="We're here to answer any questions you may have about our services. Fill out the form below and we'll get back to you as soon as possible."
				/>
        <div className="max-w-5xl mx-auto neu-card p-8">
          <ContactForm setSubmitMessage={setSubmitMessage} />
          {submitMessage && (
            <p className="mt-6 text-center text-lg font-medium text-neu-green bg-neu-base neu-card p-3">{submitMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}