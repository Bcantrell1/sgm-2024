'use client';

import { FormEvent, useState } from 'react';

type WorkType = 'Turf' | 'Pavers' | 'Travertine' | 'Putting Green' | 'Other';

export default function Contact() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [workType, setWorkType] = useState<WorkType>('Turf');
  const [hasPets, setHasPets] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const response = await fetch('/api/submit-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        number,
        email,
        workType,
        hasPets: workType === 'Turf' ? hasPets : undefined,
        message,
      }),
    });

    if (response.ok) {
      setSubmitMessage('Thank you for your submission. We will contact you soon!');
      // Reset form
      setName('');
      setNumber('');
      setEmail('');
      setWorkType('Turf');
      setHasPets(false);
      setMessage('');
    } else {
      setSubmitMessage('There was an error submitting your request. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-8 bg-gradient-to-b from-green-100 to-green-300 shadow-lg rounded-lg border-4 border-green-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grass-texture.jpg')] opacity-30 z-0"></div>
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-green-800">Get in Touch</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-green-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 bg-white bg-opacity-70 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 text-green-900 placeholder-green-400"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="number" className="block text-sm font-medium text-green-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
                className="w-full px-4 py-2 bg-white bg-opacity-70 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 text-green-900 placeholder-green-400"
                placeholder="(123) 456-7890"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-green-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-white bg-opacity-70 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 text-green-900 placeholder-green-400"
              placeholder="johndoe@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-green-700 mb-2">Type of Work</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {(['Turf', 'Pavers', 'Travertine', 'Putting Green', 'Other'] as WorkType[]).map((type) => (
                <div key={type} className="flex items-center">
                  <input
                    type="radio"
                    id={type}
                    name="workType"
                    value={type}
                    checked={workType === type}
                    onChange={() => setWorkType(type)}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-green-300"
                  />
                  <label htmlFor={type} className="ml-2 text-sm text-green-700">{type}</label>
                </div>
              ))}
            </div>
          </div>
          {workType === 'Turf' && (
            <div>
              <label htmlFor="hasPets" className="flex items-center">
                <input
                  type="checkbox"
                  id="hasPets"
                  checked={hasPets}
                  onChange={(e) => setHasPets(e.target.checked)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-green-300 rounded"
                />
                <span className="ml-2 text-sm text-green-700">Do you have pets?</span>
              </label>
            </div>
          )}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-green-700 mb-1">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-4 py-2 bg-white bg-opacity-70 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 text-green-900 placeholder-green-400"
              rows={4}
              placeholder="Tell us about your project..."
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-green-300 disabled:cursor-not-allowed transition duration-150 ease-in-out shadow-md"
            >
              {isSubmitting ? 'Submitting...' : 'Get Your Free Quote'}
            </button>
          </div>
        </form>
        {submitMessage && (
          <p className="mt-6 text-center text-lg font-medium text-green-800 bg-green-100 p-3 rounded-md">{submitMessage}</p>
        )}
      </div>
    </div>
  );
}