import React, { useState } from 'react';
import { Menu, Search, Calendar, Bell, User, ChevronDown, Settings, LogOut } from 'lucide-react';
import { useSidebar } from '../../context/SidebarContext';

const TopNavbar: React.FC = () => {
  const { setSidebarOpen } = useSidebar();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-xl border-b border-white/10">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          
          {/* Left Side */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            {/* Search Bar */}
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl min-w-75">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            
            {/* Date & Time */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-400 text-sm">
              <Calendar className="w-4 h-4" />
              <span>Jan 15, 2026</span>
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all duration-300"
              >
                <div className="w-8 h-8 bg-linear-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${userMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                  <button className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-3">
                    <User className="w-4 h-4" />
                    Profile
                  </button>
                  <button className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-3">
                    <Settings className="w-4 h-4" />
                    Settings
                  </button>
                  <div className="border-t border-white/10"></div>
                  <button className="w-full px-4 py-3 text-left text-red-400 hover:bg-white/10 transition-all duration-300 flex items-center gap-3">
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;