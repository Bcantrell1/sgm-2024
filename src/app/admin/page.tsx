'use client';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

export default function AdminLogin() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/admin/dashboard');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-auto">
        <LoadingSpinner size={128} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <div className="p-6 max-w-sm w-full rounded-md">
        <h1 className="text-2xl font-semibold text-center text-neu-green mb-6">Admin Login</h1>
        <button
          onClick={() => signIn('google')}
          className="neu-button-green w-full"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}