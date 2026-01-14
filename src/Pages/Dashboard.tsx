/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { 
  LayoutDashboard, Users, ShoppingCart, Package, BarChart3, Settings, TrendingUp, TrendingDown, 
  DollarSign, ShoppingBag, UserPlus, Activity, MoreVertical,
 Download, Filter, LogOut, User,
  Clock, CheckCircle, XCircle, AlertCircle, Zap
} from 'lucide-react';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Dashboard');
//   const [userMenuOpen, setUserMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, badge: null },
    { name: 'Users', icon: Users, badge: '1.2K' },
    { name: 'Orders', icon: ShoppingCart, badge: '45' },
    { name: 'Products', icon: Package, badge: null },
    { name: 'Analytics', icon: BarChart3, badge: null },
    { name: 'Settings', icon: Settings, badge: null },
  ];

  const statsCards = [
    { 
      title: 'Total Revenue', 
      value: '$45,231', 
      change: '+20.1%', 
      trend: 'up',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      title: 'Orders', 
      value: '2,345', 
      change: '+12.5%', 
      trend: 'up',
      icon: ShoppingBag,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      title: 'New Users', 
      value: '1,234', 
      change: '-3.2%', 
      trend: 'down',
      icon: UserPlus,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      title: 'Active Users', 
      value: '892', 
      change: '+8.4%', 
      trend: 'up',
      icon: Activity,
      color: 'from-orange-500 to-red-500'
    },
  ];

  const recentOrders = [
    { id: '#ORD-2345', customer: 'John Doe', product: 'Wireless Headphones', amount: '$149.99', status: 'completed', date: '2024-01-15' },
    { id: '#ORD-2344', customer: 'Jane Smith', product: 'Smart Watch', amount: '$299.99', status: 'pending', date: '2024-01-15' },
    { id: '#ORD-2343', customer: 'Mike Johnson', product: 'Laptop Stand', amount: '$49.99', status: 'completed', date: '2024-01-14' },
    { id: '#ORD-2342', customer: 'Sarah Williams', product: 'Keyboard', amount: '$89.99', status: 'cancelled', date: '2024-01-14' },
    { id: '#ORD-2341', customer: 'Tom Brown', product: 'Mouse', amount: '$29.99', status: 'completed', date: '2024-01-13' },
  ];

  const topProducts = [
    { name: 'Wireless Headphones', sales: 1234, revenue: '$184,566', growth: '+12%' },
    { name: 'Smart Watch Pro', sales: 987, revenue: '$295,713', growth: '+8%' },
    { name: 'Laptop Stand', sales: 756, revenue: '$37,744', growth: '+15%' },
    { name: 'Mechanical Keyboard', sales: 654, revenue: '$58,806', growth: '+5%' },
  ];

  const getStatusColor = (status: any) => {
    switch(status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'cancelled': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: any) => {
    switch(status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="h-full px-3 py-4 overflow-y-auto bg-slate-900/95 backdrop-blur-xl border-r border-white/10">
          
          {/* Logo */}
          <div className="flex items-center gap-3 px-3 mb-8">
            <div className="p-2 bg-linear-to-br from-purple-600 to-pink-600 rounded-xl">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">AdminPro</span>
          </div>

          {/* Menu Items */}
          <nav className="space-y-2">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveMenu(item.name);
                  setSidebarOpen(false);
                }}
                className={`w-full cursor-pointer flex items-center justify-between px-3 py-3 rounded-xl transition-all duration-300 group ${
                  activeMenu === item.name
                    ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`w-5 h-5 ${activeMenu === item.name ? 'scale-110' : 'group-hover:scale-110'} transition-transform`} />
                  <span className="font-medium">{item.name}</span>
                </div>
                {item.badge && (
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    activeMenu === item.name 
                      ? 'bg-white/20 text-white' 
                      : 'bg-purple-500/20 text-purple-400'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* User Profile Section */}
          <div className="absolute bottom-4 left-3 right-3">
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
              <button className="w-full cursor-pointer flex items-center justify-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white text-sm font-medium rounded-lg transition-all duration-300">
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="">
        
        {/* Top Navigation */}

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
            <p className="text-gray-400">Welcome back! Here's what's happening with your business today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((stat, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity" 
                     style={{background: `linear-gradient(to bottom right, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})`}}></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 bg-linear-to-br ${stat.color} rounded-xl`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`flex items-center gap-1 text-sm font-semibold ${
                      stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {stat.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-gray-400 text-sm mb-1">{stat.title}</div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Recent Orders - Takes 2 columns */}
            <div className="lg:col-span-2">
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

                {/* Table */}
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
                      {recentOrders.map((order, idx) => (
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
            </div>

            {/* Top Products - Takes 1 column */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-6">
                <h2 className="text-xl font-bold text-white mb-6">Top Products</h2>
                <div className="space-y-4">
                  {topProducts.map((product, idx) => (
                    <div key={idx} className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold text-sm">{product.name}</span>
                        <span className="text-green-400 text-xs font-semibold">{product.growth}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">{product.sales} sales</span>
                        <span className="text-white font-semibold">{product.revenue}</span>
                      </div>
                      <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full"
                          style={{ width: `${(product.sales / 1234) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
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
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}