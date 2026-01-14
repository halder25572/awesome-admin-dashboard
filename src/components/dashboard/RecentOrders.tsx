import React from 'react';
import { Filter, Download, MoreVertical, CheckCircle, Clock, XCircle, AlertCircle } from 'lucide-react';
import type { Order } from '../../types';


interface RecentOrdersProps {
  orders: Order[];
}

const RecentOrders: React.FC<RecentOrdersProps> = ({ orders }) => {
  const getStatusColor = (status: Order['status']): string => {
    switch(status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'cancelled': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: Order['status']) => {
    switch(status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Recent Orders</h2>
        <div className="flex gap-2">
          <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">
            <Filter className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300">
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Order ID</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Customer</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm hidden md:table-cell">Product</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Amount</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Status</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-4 px-4 text-white font-medium text-sm">{order.id}</td>
                <td className="py-4 px-4 text-white text-sm">{order.customer}</td>
                <td className="py-4 px-4 text-gray-400 text-sm hidden md:table-cell">{order.product}</td>
                <td className="py-4 px-4 text-white font-semibold text-sm">{order.amount}</td>
                <td className="py-4 px-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    {order.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <button className="p-1 text-gray-400 hover:text-white transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;