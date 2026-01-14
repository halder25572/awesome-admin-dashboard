// import React from 'react';
// import { TrendingUp, TrendingDown } from 'lucide-react';

// interface StatsCardProps {
//   stat: StatCardType;
// }

// const StatsCard: React.FC<StatsCardProps> = ({ stat }) => {
//   return (
//     <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 hover:scale-105 transition-all duration-300 group">
//       <div 
//         className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity" 
//         style={{background: `linear-gradient(to bottom right, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})`}}
//       ></div>
      
//       <div className="relative">
//         <div className="flex items-center justify-between mb-4">
//           <div className={`p-3 bg-linear-to-br ${stat.color} rounded-xl`}>
//             <stat.icon className="w-6 h-6 text-white" />
//           </div>
//           <span className={`flex items-center gap-1 text-sm font-semibold ${
//             stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
//           }`}>
//             {stat.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
//             {stat.change}
//           </span>
//         </div>
//         <div className="text-gray-400 text-sm mb-1">{stat.title}</div>
//         <div className="text-3xl font-bold text-white">{stat.value}</div>
//       </div>
//     </div>
//   );
// };

// export default StatsCard;


import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardType {
  title: string;
  value: string | number;
  change: string;
  trend: 'up' | 'down';
  color: string;
  icon: LucideIcon;
}

interface StatsCardProps {
  stat: StatCardType;
}

const StatsCard: React.FC<StatsCardProps> = ({ stat }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 hover:scale-105 transition-all duration-300 group">
      <div 
        className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity" 
        style={{background: `linear-gradient(to bottom right, ${stat.color.split(' ')[0]}, ${stat.color.split(' ')[1]})`}}
      ></div>
      
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
  );
};

export default StatsCard;