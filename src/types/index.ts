/* eslint-disable @typescript-eslint/no-explicit-any */
export interface MenuItem {
  name: string;
  icon: any;
  badge: string | null;
  path?: string;
}

export interface StatCard {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: any;
  color: string;
}

export interface Order {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: 'completed' | 'pending' | 'cancelled';
  date: string;
}

export interface Product {
  name: string;
  sales: number;
  revenue: string;
  growth: string;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
  role: string;
}