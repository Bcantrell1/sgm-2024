'use client';

import React, { useState } from 'react';
import ContactForm from '../components/contact/ContactForm';

export default function Contact() {
  const [submitMessage, setSubmitMessage] = useState('');

  return (
    <div className="h-full flex items-center justify-center flex-1">
      <div className="max-w-3xl mx-auto h-full my-8 p-8 bg-neu-base neu-card">
        <h1 className="text-4xl font-bold mb-6 text-center text-neu-green">Request An Estimate</h1>
        <ContactForm setSubmitMessage={setSubmitMessage} />
        {submitMessage && (
          <p className="mt-6 text-center text-lg font-medium text-neu-green bg-neu-base neu-card p-3">{submitMessage}</p>
        )}
      </div>
    </div>
  );
}