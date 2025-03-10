'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import Loading from '@/components/ui/Loading';

export default function SocialCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { loginWithToken } = useAuth();

  useEffect(() => {
    const token = searchParams?.get('token');
    
    if (token) {
      // Store the token and redirect to dashboard
      loginWithToken(token);
      router.push('/');
    } else {
      // If no token, redirect to login
      router.push('/auth/login');
    }
  }, [searchParams, router, loginWithToken]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Loading />
      <p className="mt-4 text-gray-600">Completing authentication...</p>
    </div>
  );
} 