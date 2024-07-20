'use client';
import ContactForm from '@/app/components/contact/ContactForm';
import MaintenanceStandards from '@/app/components/services/maintenance/MaintenanceStandards';
import MinimumEffort from '@/app/components/services/maintenance/MinimumEffort';
import ServiceHero from '@/app/components/services/ServiceHero';
import React, { useState } from 'react';
import MaintenanceImage from '../../../../public/bgs/maintenance_bg.jpg';

const MaintenancePage: React.FC = () => {
	const [submitMessage, setSubmitMessage] = useState('');

  return (
    <div className="bg-neu-base min-h-screen">
      <ServiceHero
        imageSrc={MaintenanceImage}
        title="Effortless Care for Enduring Beauty"
        subtitle="Experience the low-maintenance luxury of SGM artificial turf. Our innovative grass solutions demand only minimal attention – a quick brush, easy debris removal, and occasional rinse – to preserve their lush appearance and superior performance for years to come."
      />
			<MinimumEffort />
			<MaintenanceStandards />
			<div className='p-4 my-8'>
				<h2 className="text-3xl sm:text-4xl md:text-5xl text-neu-text-raised lg:text-6xl font-bold text-neu-yellow text-center mb-8 md:mb-12">
          <span className="text-neu-green">REACH OUT FOR <br/></span> MAINTENANCE NEEDS!
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

export default MaintenancePage;