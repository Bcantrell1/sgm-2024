'use client';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (session?.user?.email) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, [session]);

  const handleLogout = () => {
    signOut();
  };

  return (
    <header className="bg-neu-base shadow-neumorphic">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-40 h-20 sm:w-40 sm:h-24 md:w-56 md:h-24">
              <Image 
                src="/sgm_logo.svg" 
                alt="SGM Logo" 
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 640px) 4rem, (max-width: 768px) 6rem, 8rem"
              />
            </div>
          </Link>

          {/* Navigation Items (centered) */}
          <div className="hidden md:flex space-x-4 items-center flex-grow justify-center">
            <Link href="/blog" className="neu-button">Blog</Link>
            <Link href="/contact" className="neu-button">Contact</Link>
            {isAuthorized && (
              <Link href="/admin" className="neu-button-green">
                Admin
              </Link>
            )}
          </div>

          {/* Call Item and Auth (right-aligned) */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+15206682281" className="neu-button flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
            {status === 'authenticated' && (
              <button
                onClick={handleLogout}
                className="neu-button-green"
              >
                Log Out
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="neu-button p-2"
            >
              <svg
                className="h-6 w-6 fill-current text-neu-green"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden space-y-2">
            <Link href="/blog" className="neu-button block w-full text-center">Blog</Link>
            <Link href="/contact" className="neu-button block w-full text-center">Contact</Link>
            <a href="tel:+15206682281" className="neu-button block w-full text-center">Call Us</a>
            {isAuthorized && (
              <Link href="/admin" className="neu-button-green block w-full text-center">
                Admin
              </Link>
            )}
            {status === 'authenticated' && (
              <button
                onClick={handleLogout}
                className="neu-button-green block w-full text-center"
              >
                Log Out
              </button>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}