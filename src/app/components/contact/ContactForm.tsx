import { motion } from 'framer-motion';
import React, { FormEvent, useState } from 'react';
import CheckboxField from '../global/CheckboxField';
import InputField from '../global/InputField';
import RadioGroup from '../global/RadioGroup';
import TextareaField from '../global/TextareaField';
import SubmitButton from './SubmitButton';

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

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 sm:space-y-8 max-w-4xl mx-auto p-4 sm:p-6 lg:p-8"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" variants={itemVariants}>
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
      </motion.div>
      <motion.div variants={itemVariants}>
        <InputField
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={setEmail}
          placeholder="johndoe@example.com"
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <RadioGroup
          label="Type of Work"
          options={['Turf', 'Pavers', 'Travertine', 'Putting Green', 'Other']}
          selected={workType}
          onChange={setWorkType}
        />
      </motion.div>
      {workType === 'Turf' && (
        <motion.div variants={itemVariants}>
          <CheckboxField
            label="Do you have pets?"
            id="hasPets"
            checked={hasPets}
            onChange={setHasPets}
          />
        </motion.div>
      )}
      <motion.div variants={itemVariants}>
        <TextareaField
          label="Message"
          id="message"
          value={message}
          onChange={setMessage}
          placeholder="Tell us about your project..."
        />
      </motion.div>
      <motion.div className="text-center" variants={itemVariants}>
        <SubmitButton isSubmitting={isSubmitting} />
      </motion.div>
    </motion.form>
  );
}