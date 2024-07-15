'use client';
import { AuthWrapper } from '@/app/components/AuthWrapper';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { href: '/admin/dashboard', label: 'Dashboard' },
    { href: '/admin/client-requests', label: 'Client Requests' },
    { href: '/admin/job-tracker', label: 'Job Tracker' },
    { href: '/admin/appointments', label: 'Appointments' },
    { href: '/admin/image-upload', label: 'Image Upload' },
    { href: '/admin/image-cleanup', label: 'Image Cleanup' }, // New item
  ];

  return (
    <AuthWrapper>
      <div className="relative min-h-screen bg-gray-100 md:flex">
        {/* Sidebar Toggle Button (Mobile) */}
        <button
          className="md:hidden fixed bottom-0 left-0 z-20 p-2 bg-green-600 text-white"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? 'Close' : 'Panel'}
        </button>

        {/* Sidebar */}
        <aside
          className={`
            bg-white shadow-md w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            md:relative md:translate-x-0 transition duration-200 ease-in-out z-10
          `}
        >
          <div className="p-4">
            <h1 className="text-2xl font-semibold text-gray-800">Admin Panel</h1>
          </div>
          <nav className="mt-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 text-gray-600 hover:bg-gray-200 ${
                  pathname === item.href ? 'bg-green-500 text-white' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>

        {/* Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-0 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </AuthWrapper>
  );
}