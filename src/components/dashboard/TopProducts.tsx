import React from 'react';
import type { Product } from '../../types';

interface TopProductsProps {
  products: Product[];
}

const TopProducts: React.FC<TopProductsProps> = ({ products }) => {
  const maxSales = Math.max(...products.map(p => p.sales));

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <h2 className="text-xl font-bold text-white mb-6">Top Products</h2>
      <div className="space-y-4">
        {products.map((product, idx) => (
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
                className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                style={{ width: `${(product.sales / maxSales) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;