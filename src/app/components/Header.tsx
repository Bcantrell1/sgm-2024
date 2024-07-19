'use client';
import { signOut, useSession } from 'next-auth/react';
import NextImage from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

interface NavItemsProps {
  isMobile: boolean;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { data: session, status } = useSession();
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick, className }) => (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );

  const NavItems: React.FC<NavItemsProps> = ({ isMobile }) => (
    <>
      <NavLink href="/blog" className={isMobile ? "neu-button block w-full text-center" : "neu-button"} onClick={() => isMobile && setIsMenuOpen(false)}>News</NavLink>
      {isMobile ? (
        <>
          <NavLink href="/services/installation" className="neu-button block w-full text-center" onClick={() => setIsMenuOpen(false)}>
            Installation
          </NavLink>
          <NavLink href="/services/maintenance" className="neu-button block w-full text-center" onClick={() => setIsMenuOpen(false)}>
            Maintenance
          </NavLink>
        </>
      ) : (
        <div className="relative z-50" ref={dropdownRef}>
          <button 
            className="neu-button"
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          >
            Services ▼
          </button>
          {isServicesOpen && (
          <div className="absolute top-full left-0 bg-neu-base shadow-neumorphic mt-2 py-2 px-4 rounded-md">
						<NavLink 
							href="/services/installation" 
							className="block text-neu-yellow py-2 transition-all duration-200 ease-in-out" 
							onClick={() => setIsServicesOpen(false)}
						>
							<span className="text-neu-text-raised hover:text-neu-text-pressed">
								Installation
							</span>
						</NavLink>
						<NavLink 
							href="/services/maintenance" 
							className="block py-2 text-neu-yellow transition-all duration-200 ease-in-out" 
							onClick={() => setIsServicesOpen(false)}
						>
							<span className="text-neu-text-raised hover:text-neu-text-pressed">
								Maintenance
							</span>
						</NavLink>
					</div>
          )}
        </div>
      )}
      <NavLink href="/contact" className={isMobile ? "neu-button block w-full text-center" : "neu-button"} onClick={() => isMobile && setIsMenuOpen(false)}>Contact</NavLink>
      {session?.user?.email && (
        <NavLink href="/admin" className={isMobile ? "neu-button-green block w-full text-center" : "neu-button-green"} onClick={() => isMobile && setIsMenuOpen(false)}>Admin</NavLink>
      )}
      {status === 'authenticated' && (
        <button onClick={() => {signOut(); isMobile && setIsMenuOpen(false);}} className={isMobile ? "neu-button-green block w-full text-center" : "neu-button-green"}>
          Log Out
        </button>
      )}
    </>
  );

  return (
    <header className="bg-neu-base w-full shadow-neumorphic">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <div className="relative w-40 h-20 sm:w-40 sm:h-24 md:w-56 md:h-24">
              <NextImage 
                src="/sgm_logo.svg" 
                alt="SGM Logo" 
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 640px) 4rem, (max-width: 768px) 6rem, 8rem"
                priority
              />
            </div>
          </Link>

          <div className="hidden lg:flex space-x-4 items-center">
            <NavItems isMobile={false} />
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+15206682281" className="neu-button flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
          </div>

          <div className="lg:hidden">
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
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-4 lg:hidden space-y-2">
            <NavItems isMobile={true} />
            <a href="tel:+15206682281" className="neu-button block w-full text-center">Call Us</a>
          </div>
        )}
      </nav>
    </header>
  );
}