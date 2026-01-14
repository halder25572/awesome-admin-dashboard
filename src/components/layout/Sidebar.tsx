import React from 'react';
import { 
  LayoutDashboard, Users, ShoppingCart, Package, BarChart3, Settings,
  Zap, ChevronLeft, ChevronRight, User, LogOut
} from 'lucide-react';
import { useSidebar } from '../../context/SidebarContext';
import type { MenuItem } from '../../types';

interface SidebarProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeMenu, setActiveMenu }) => {
  const { sidebarOpen, sidebarCollapsed, setSidebarOpen, toggleSidebarCollapse } = useSidebar();

  const menuItems: MenuItem[] = [
    { name: 'Dashboard', icon: LayoutDashboard, badge: null },
    { name: 'Users', icon: Users, badge: '1.2K' },
    { name: 'Orders', icon: ShoppingCart, badge: '45' },
    { name: 'Products', icon: Package, badge: null },
    { name: 'Analytics', icon: BarChart3, badge: null },
    { name: 'Settings', icon: Settings, badge: null },
  ];

  return (
    <>
      <aside className={`fixed top-0 left-0 z-40 h-screen transition-all duration-300 ${
        sidebarCollapsed ? 'w-20' : 'w-64'
      } ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="h-full overflow-y-auto bg-slate-900/95 backdrop-blur-xl border-r border-white/10 flex flex-col">
          
          {/* Logo & Toggle */}
          <div className="flex items-center justify-between px-3 py-4 border-b border-white/10">
            <div className={`flex items-center gap-3 transition-all duration-300 ${sidebarCollapsed ? 'justify-center' : ''}`}>
              <div className="p-2 bg-linear-to-br from-purple-600 to-pink-600 rounded-xl">
                <Zap className="w-6 h-6 text-white" />
              </div>
              {!sidebarCollapsed && (
                <span className="text-xl font-bold text-white">AdminPro</span>
              )}
            </div>
            
            <button
              onClick={toggleSidebarCollapse}
              className="hidden lg:block p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
              title={sidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            >
              {sidebarCollapsed ? (
                <ChevronRight className="w-5 h-5" />
              ) : (
                <ChevronLeft className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-3 py-4 space-y-2">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveMenu(item.name);
                  if (window.innerWidth < 1024) setSidebarOpen(false);
                }}
                className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'justify-between'} px-3 py-3 rounded-xl transition-all duration-300 group relative ${
                  activeMenu === item.name
                    ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                title={sidebarCollapsed ? item.name : ''}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`w-5 h-5 ${activeMenu === item.name ? 'scale-110' : 'group-hover:scale-110'} transition-transform`} />
                  {!sidebarCollapsed && <span className="font-medium">{item.name}</span>}
                </div>
                {!sidebarCollapsed && item.badge && (
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    activeMenu === item.name 
                      ? 'bg-white/20 text-white' 
                      : 'bg-purple-500/20 text-purple-400'
                  }`}>
                    {item.badge}
                  </span>
                )}
                
                {sidebarCollapsed && (
                  <div className="absolute left-full ml-2 px-3 py-2 bg-slate-800 border border-white/10 rounded-lg text-white text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {item.name}
                    {item.badge && (
                      <span className="ml-2 px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded-full text-xs">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </button>
            ))}
          </nav>

          {/* User Profile Section */}
          {!sidebarCollapsed ? (
            <div className="px-3 pb-4">
              <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm font-semibold truncate">Admin User</div>
                    <div className="text-gray-400 text-xs truncate">admin@example.com</div>
                  </div>
                </div>
                <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white text-sm font-medium rounded-lg transition-all duration-300">
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="px-3 pb-4">
              <button className="w-full p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 group relative">
                <User className="w-6 h-6 text-gray-400 group-hover:text-white mx-auto transition-colors" />
                <div className="absolute left-full ml-2 px-3 py-2 bg-slate-800 border border-white/10 rounded-lg text-white text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Admin User
                </div>
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;