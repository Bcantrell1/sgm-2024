'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const allowedEmails = ['bribri546@gmail.com', 'samsonsgm@gmail.com'];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (session?.user?.email) {
      setIsAuthorized(allowedEmails.includes(session.user.email));
    } else {
      setIsAuthorized(false);
    }
  }, [session]);

  const handleLogout = () => {
    signOut();
  };

  return (
    <header className="bg-green-600 text-white">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            SGM
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
            {isAuthorized && (
              <Link href="/admin" className="bg-white text-green-600 px-3 py-1 rounded">
                Admin
              </Link>
            )}
            {status === 'authenticated' ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Log Out
              </button>
            ) : (
              null
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
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
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <Link href="/about" className="block py-2">About</Link>
            <Link href="/services" className="block py-2">Services</Link>
            <Link href="/portfolio" className="block py-2">Portfolio</Link>
            <Link href="/contact" className="block py-2">Contact</Link>
            {isAuthorized && (
              <Link href="/admin" className="block py-2 text-green-200">
                Admin
              </Link>
            )}
            {status === 'authenticated' ? (
              <button
                onClick={handleLogout}
                className="block w-full text-left py-2 text-red-200 hover:text-red-100"
              >
                Log Out
              </button>
            ) : (
              null
            )}
          </div>
        )}
      </nav>
    </header>
  );
}