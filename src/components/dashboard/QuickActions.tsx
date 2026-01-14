import React from 'react';
import { UserPlus, Package, Download } from 'lucide-react';

const QuickActions: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
      <div className="space-y-3">
        <button className="w-full flex items-center gap-3 px-4 py-3 bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300">
          <UserPlus className="w-5 h-5" />
          Add New User
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300">
          <Package className="w-5 h-5" />
          Add Product
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300">
          <Download className="w-5 h-5" />
          Export Report
        </button>
      </div>
    </div>
  );
};

export default QuickActions;