import React, { type ReactNode } from 'react';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';
import { useSidebar } from '../../context/SidebarContext';

interface MainLayoutProps {
  children: ReactNode;
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, activeMenu, setActiveMenu }) => {
  const { sidebarCollapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      
      <div className={`transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
        <TopNavbar />
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;