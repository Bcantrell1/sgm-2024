'use client';
import { AuthWrapper } from '@/app/components/AuthWrapper';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';

interface NavItem {
  href: string;
  label: string;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navGroups: NavGroup[] = [
    {
      title: 'Overview',
      items: [
        { href: '/admin/dashboard', label: 'Dashboard' },
      ]
    },
    {
      title: 'Company Management',
      items: [
        { href: '/admin/client-requests', label: 'Client Requests' },
        { href: '/admin/job-tracker', label: 'Job Tracker' },
        { href: '/admin/appointments', label: 'Appointments' },
      ]
    },
    {
      title: 'Carousel Management',
      items: [
        { href: '/admin/image-upload', label: 'Image Upload' },
        { href: '/admin/image-cleanup', label: 'Image Cleanup' },
      ]
    },
		{
			title: 'Blog Management',
			items: [
				{ href: '/admin/blog-posts', label: 'Blog Posts' },
				{ href: '/admin/create-post', label: 'Create Post' },
			]
		}
  ];

  return (
		<AuthWrapper>
      <div className="relative min-h-screen bg-gray-100 md:flex">
        <button
          className="md:hidden fixed bottom-0 left-0 z-20 p-2 bg-green-600 text-white"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? 'Close' : 'Panel'}
        </button>
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
            {navGroups.map((group, index) => (
              <div key={index} className="mb-4">
                <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2 px-4">
                  {group.title}
                </h2>
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 ${
                      pathname === item.href ? 'bg-green-500 text-white' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-6 md:overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>

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