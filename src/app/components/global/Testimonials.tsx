'use client';
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import LoadingSpinner from '../LoadingSpinner';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

const TestimonialCard: React.FC<Review> = ({ author_name, rating, text, relative_time_description }) => (
  <div className="bg-neu-base shadow-neumorphic rounded-lg p-4 sm:p-6 h-full flex flex-col">
    <h3 className="text-lg sm:text-xl font-semibold mb-2">{author_name}</h3>
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 sm:w-5 sm:h-5 ${i < rating ? 'text-neu-yellow' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-gray-300 mb-4 flex-grow text-sm sm:text-base">{text}</p>
    <p className="text-xs sm:text-sm text-gray-200">{relative_time_description}</p>
  </div>
);

const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/mock-reviews');
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        setReviews(data.result.reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setError('Failed to load reviews. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, []);

  if (isLoading) {
    return <div className='h-full min-h-52 flex justify-center items-center'><LoadingSpinner /></div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="py-8 sm:py-12 md:py-24 px-4">
      <div className="mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left mb-6 sm:mb-8">
          <span className="text-neu-green">CLIENT</span> TESTIMONIALS
        </h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
					initialSlide={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide className='py-8' key={index}>
              <TestimonialCard {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;