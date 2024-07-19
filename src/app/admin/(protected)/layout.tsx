'use client';
import { AuthWrapper } from '@/app/components/AuthWrapper';
import { Square2StackIcon, XMarkIcon } from '@heroicons/react/24/solid';
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
      title: 'Projects Management',
      items: [
        { href: '/admin/recent-projects', label: 'Recent Projects' },
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
      <div className="relative bg-neu-base flex flex-1">
        <button
          className="md:hidden fixed bottom-4 right-10 z-20 p-2 bg-neu-green text-neu-base rounded-full shadow-neumorphic"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <XMarkIcon className='w-6 h-6' /> : <Square2StackIcon className='w-6 h-6'/>}
        </button>
        <aside
          className={`
            bg-neu-base rounded-lg h-fit shadow-neumorphic w-64 mt-4 mb-4 space-y-6 py-5 px-2 absolute inset-y-0 left-0 transform
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-[120%]'}
            md:relative md:translate-x-0 transition duration-200 ease-in-out z-10
          `}
        >
          <nav>
            {navGroups.map((group, index) => (
              <div key={index} className="mb-4">
                <h2 className="text-xs font-semibold text-gray-200 uppercase tracking-wide mb-2 px-4">
                  {group.title}
                </h2>
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2 rounded text-sm text-neu-green hover:bg-neu-green-light hover:text-neu-green transition-colors duration-200 ${
                      pathname === item.href ? 'bg-neu-light text-neu-green shadow-neumorphic-inset' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </aside>

        <main className="flex-1 flex flex-col px-6 py-4 overflow-auto">
          <div className="w-full flex flex-col flex-1">
            <div className="bg-neu-base flex-1 shadow-neumorphic rounded-xl p-6">
              {children}
            </div>
          </div>
        </main>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-neu-dark opacity-50 z-0 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </AuthWrapper>
  );
}