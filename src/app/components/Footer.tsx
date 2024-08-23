'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Footer() {
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <footer className="bg-neu-base z-50 shadow-neumorphic-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/4 text-center md:text-left mb-6 md:mb-0">
            <p className="text-neu-yellow">&copy; 2024 SGM. All rights reserved.</p>
          </div>
          <div className="w-full md:w-2/4 flex justify-center space-x-6 mb-6 md:mb-0">
            <Link href="/blog" className="hover:text-white text-neu-yellow transition-colors duration-300">News</Link>
            <div className="relative" ref={dropdownRef}>
              <button
                className="hover:text-white text-neu-yellow transition-colors duration-300 flex items-center"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <svg 
                  className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="absolute bottom-full left-0 min-w-[125px] bg-neu-base shadow-neumorphic mt-2 py-2 px-4 rounded-md">
                  <Link
                    href="/services/turf"
                    className="block text-neu-yellow py-2 transition-all duration-200 ease-in-out hover:text-neu-text-pressed"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Turf
                  </Link>
                  <Link
                    href="/services/hardscape"
                    className="block text-neu-yellow py-2 transition-all duration-200 ease-in-out hover:text-neu-text-pressed"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Hardscape
                  </Link>
									<Link
                    href="/services/golf-sport"
                    className="block text-neu-yellow py-2 transition-all duration-200 ease-in-out hover:text-neu-text-pressed"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Sport Areas
                  </Link>
                </div>
              )}
            </div>
            <Link href="/custom-design" className="hover:text-white text-neu-yellow transition-colors duration-300">Design</Link>
            <Link href="/contact" className="hover:text-white text-neu-yellow transition-colors duration-300">Contact</Link>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-right">
            <a href="tel:+15206682281" className="hover:text-white text-neu-yellow transition-colors duration-300 flex items-center justify-center md:inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (520) 668-2281
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}