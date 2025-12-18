import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

// داده‌های غنی‌تر برای تحلیل منابع ترافیک
const trafficData = [
  { name: 'جستجوی گوگل', value: 450 },
  { name: 'ورود مستقیم', value: 300 },
  { name: 'اینستاگرام', value: 250 },
  { name: 'تلگرام', value: 150 },
  { name: 'سایر سایت‌ها', value: 100 },
];

// پالت رنگی هماهنگ و مدرن
const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f59e0b'];

const RoundedPieChart = () => (
  <div className="bg-white dark:bg-dark-bg-surfaceAlt shadow-lg rounded-xl p-4 w-full h-72 flex flex-col border border-transparent dark:border-gray-800 transition-all">
    <h3 className="ct-title text-sm mb-4 text-right dark:text-white opacity-80 font-bold">
      منابع ورودی و ترافیک
    </h3>
    
    <div className="flex-1 min-h-0">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie 
            data={trafficData} 
            innerRadius="65%" 
            outerRadius="90%" 
            paddingAngle={6} 
            cornerRadius={8} 
            dataKey="value"
            stroke="none" // حذف خط دور سگمنت‌ها برای تمیزی بیشتر
          >
            {trafficData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          
          <Tooltip 
            contentStyle={{ 
              borderRadius: '12px', 
              border: 'none', 
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              direction: 'rtl',
              textAlign: 'right',
              fontSize: '12px'
            }} 
            itemStyle={{ color: '#1e293b' }}
          />
          
          <Legend 
            verticalAlign="bottom" 
            align="center"
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default RoundedPieChart;