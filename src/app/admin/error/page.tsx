'use client';

import Link from 'next/link';

export default function AdminError() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center text-red-600">Access Denied</h3>
        <p className="mt-4 text-center">You are not authorized to access the admin panel.</p>
        <div className="mt-6 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}