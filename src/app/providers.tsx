'use client';

import { SessionProvider } from "next-auth/react";
import React from 'react';
import { ProjectWizardProvider } from './hooks/useProjectWizard';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ProjectWizardProvider>
        {children}
      </ProjectWizardProvider>
    </SessionProvider>
  );
}