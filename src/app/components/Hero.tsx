import React from 'react';
import { useProjectWizard } from '../hooks/useProjectWizard';
import { HeroCards } from './HeroCards';

const Hero = () => {
	const { openWizard } = useProjectWizard();
  return (
		<section className="grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
			<div className="text-center z-20 lg:text-start space-y-6">
				<div className="text-4xl md:text-6xl font-bold">
					<h1 className="inline">
						<span className="inline bg-gradient-to-r from-[#ac791a] to-[#fef9c3] text-transparent bg-clip-text">
							SGM
						</span>{" "}
						Scapes<br/>
					</h1>{" "}
					<h2 className="inline">
						<span className="inline bg-gradient-to-r from-[#3f9443] via-[#59ca5d] to-[#bbf7d0] text-transparent bg-clip-text">
							Transforming
						</span>{" "}
						Spaces!
					</h2>
				</div>

				<p className="text-xl text-gray-300 md:w-10/12 mx-auto lg:mx-0">
					Design ideas, and different hardscape material placement can be tough to imagine. Luckily we have a big imagination. We`re here to help.
				</p>

				<div className="space-y-4 md:space-y-0 md:space-x-4">
					<button onClick={openWizard} className="neu-button w-full md:w-1/3">Get Started</button>
				</div>
			</div>

			<div className="z-20">
				<HeroCards />
			</div>

			<div className="shadow_bg"></div>
		</section>
  );
};

export default Hero;