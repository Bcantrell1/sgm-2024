'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const allowedEmails = ['bribri546@gmail.com', 'samsonsgm@gmail.com'];

export function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    if (status === 'loading') return;
    
    if (!session) {
      setIsAuthorized(false);
      router.push('/admin');
    } else if (!allowedEmails.includes(session.user?.email || '')) {
      setIsAuthorized(false);
      router.push('/');
    } else {
      setIsAuthorized(true);
    }
  }, [session, status, router]);

  return { isAuthorized, isLoading: status === 'loading' };
}