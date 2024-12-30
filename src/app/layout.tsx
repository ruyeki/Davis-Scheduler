import React, { ReactNode } from 'react';
import NavBar from '@/components/NavBar';

interface LayoutProps {
  children: ReactNode;
  loading?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, loading = false }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
};

export default Layout;