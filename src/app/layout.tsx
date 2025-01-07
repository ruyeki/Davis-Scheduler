import React, { ReactNode } from 'react';
import NavBar from '@/components/NavBar';

interface LayoutProps {
  children: ReactNode;
  loading?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, loading = false }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#002855] via-[#002855] to-[#FFBF00] p-6">
      <NavBar />
        {children}
    </div>
  );
};

export default Layout;