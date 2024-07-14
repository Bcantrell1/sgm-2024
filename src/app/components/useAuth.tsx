// useAuth.ts
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const allowedEmails = ['bribri546@gmail.com', 'samsonsgm@gmail.com'];

export function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (status === 'loading') return;

    if (!session) {
      router.push('/admin');
    } else if (!allowedEmails.includes(session.user?.email || '')) {
      router.push('/');
    } else {
      setIsAuthorized(true);
    }
  }, [session, status, router]);

  return { isAuthorized, isLoading: status === 'loading' };
}