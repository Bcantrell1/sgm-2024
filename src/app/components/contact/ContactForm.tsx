import React, { FormEvent, useState } from 'react';
import CheckboxField from './CheckboxField';
import InputField from './InputField';
import RadioGroup from './RadioGroup';
import SubmitButton from './SubmitButton';
import TextareaField from './TextareaField';

type WorkType = 'Turf' | 'Pavers' | 'Travertine' | 'Putting Green' | 'Other';

interface ContactFormProps {
  setSubmitMessage: React.Dispatch<React.SetStateAction<string>>;
}

export default function ContactForm({ setSubmitMessage }: ContactFormProps) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [workType, setWorkType] = useState<WorkType>('Turf');
  const [hasPets, setHasPets] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const response = await fetch('/api/submit-contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name, number, email, workType,
        hasPets: workType === 'Turf' ? hasPets : undefined,
        message,
      }),
    });

    if (response.ok) {
      setSubmitMessage('Thank you for your submission. We will contact you soon!');
      // Reset form
      setName(''); setNumber(''); setEmail('');
      setWorkType('Turf'); setHasPets(false); setMessage('');
    } else {
      setSubmitMessage('There was an error submitting your request. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Name"
          type="text"
          id="name"
          value={name}
          onChange={setName}
          placeholder="John Doe"
        />
        <InputField
          label="Phone Number"
          type="tel"
          id="number"
          value={number}
          onChange={setNumber}
          placeholder="(123) 456-7890"
        />
      </div>
      <InputField
        label="Email"
        type="email"
        id="email"
        value={email}
        onChange={setEmail}
        placeholder="johndoe@example.com"
      />
      <RadioGroup
        label="Type of Work"
        options={['Turf', 'Pavers', 'Travertine', 'Putting Green', 'Other']}
        selected={workType}
        onChange={setWorkType}
      />
      {workType === 'Turf' && (
        <CheckboxField
          label="Do you have pets?"
          id="hasPets"
          checked={hasPets}
          onChange={setHasPets}
        />
      )}
      <TextareaField
        label="Message"
        id="message"
        value={message}
        onChange={setMessage}
        placeholder="Tell us about your project..."
      />
      <div className="text-center">
        <SubmitButton isSubmitting={isSubmitting} />
      </div>
    </form>
  );
}