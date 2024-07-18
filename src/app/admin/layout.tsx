import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-auto bg-neu-base min-h-screen flex flex-col">
      <header className="px-4 py-2 md:px-6 md:py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-neu-green">Admin</h1>
        </div>
      </header>
      <main className="flex flex-col flex-1 py-2 md:py-6">
        <div className="container mx-auto flex flex-col flex-1 w-full">
            {children}
        </div>
      </main>
    </div>
  );
}