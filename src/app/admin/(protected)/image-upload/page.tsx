'use client';

import CaroImageUpload from "@/app/components/admin/CaroImageUpload";

export default function ImageUpload() {

	return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">Carousel Image Manager</h1>
      <div className="bg-white text-gray-800 shadow overflow-hidden sm:rounded-md">
				<CaroImageUpload />
			</div>
		</div>
	);
}