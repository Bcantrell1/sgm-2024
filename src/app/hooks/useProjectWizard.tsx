'use client';

import React, { createContext, ReactNode, useContext, useState } from 'react';

interface ProjectWizardContextType {
  isOpen: boolean;
  openWizard: () => void;
  closeWizard: () => void;
}

const ProjectWizardContext = createContext<ProjectWizardContextType | undefined>(undefined);

export const ProjectWizardProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openWizard = () => setIsOpen(true);
  const closeWizard = () => setIsOpen(false);

  return (
    <ProjectWizardContext.Provider value={{ isOpen, openWizard, closeWizard }}>
      {children}
    </ProjectWizardContext.Provider>
  );
};

export const useProjectWizard = (): ProjectWizardContextType => {
  const context = useContext(ProjectWizardContext);
  if (context === undefined) {
    throw new Error('useProjectWizard must be used within a ProjectWizardProvider');
  }
  return context;
};