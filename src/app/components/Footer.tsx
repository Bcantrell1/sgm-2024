import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neu-base shadow-neumorphic-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <p className="text-neu-yellow">&copy; 2024 SGM. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center space-x-6 mb-6 md:mb-0">
            <Link href="/blog" className="hover:text-white text-neu-yellow transition-colors duration-300">Blog</Link>
            <Link href="/contact" className="hover:text-white text-neu-yellow transition-colors duration-300">Contact</Link>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
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