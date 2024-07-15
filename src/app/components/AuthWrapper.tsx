'use client';
import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import { useAuth } from './useAuth';

interface AuthWrapperProps {
  children: React.ReactNode;
}

const LoadingOverlay = () => (
  <div className="flex items-center justify-center">
		<LoadingSpinner size={64} />
  </div>
);

export const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const { isAuthorized, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (!isAuthorized) {
    return null;
  }

  return <>{children}</>;
};