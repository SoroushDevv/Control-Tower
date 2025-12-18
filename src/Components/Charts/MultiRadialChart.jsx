import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Tooltip } from 'recharts';

const performanceData = [
  { name: 'بازدید کل', uv: 95, fill: '#6366f1' },
  { name: 'نرخ تبدیل', uv: 75, fill: '#8b5cf6' },
  { name: 'فروش موفق', uv: 60, fill: '#10b981' },
  { name: 'بازگشت مشتری', uv: 45, fill: '#f59e0b' },
  { name: 'رضایت کاربر', uv: 30, fill: '#ec4899' },
];

const MultiRadialChart = () => (
  <div className="bg-white dark:bg-dark-bg-surfaceAlt shadow-lg rounded-xl p-4 w-full h-72 flex flex-col border border-transparent dark:border-gray-800 transition-all">
    <h3 className="ct-title text-sm mb-4 text-right dark:text-white opacity-80 font-bold">
      شاخص‌های کلیدی عملکرد
    </h3>
    <div className="flex-1 min-h-0">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart 
          cx="40%" 
          cy="50%" 
          innerRadius="20%" 
          outerRadius="100%" 
          barSize={8} 
          data={performanceData}
        >
          <RadialBar
            background={{ fill: 'currentColor', className: 'text-gray-50 dark:text-gray-800' }}
            clockWise
            dataKey="uv"
            cornerRadius={10}
          />
          <Tooltip 
            cursor={{ fill: 'transparent' }}
            contentStyle={{ borderRadius: '10px', border: 'none', fontSize: '10px', direction: 'rtl' }}
          />
          <Legend 
            iconSize={10} 
            layout="vertical" 
            verticalAlign="middle" 
            align="right" 
            wrapperStyle={{ 
              fontSize: '11px', 
              paddingRight: '10px',
              lineHeight: '24px'
            }} 
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default MultiRadialChart;