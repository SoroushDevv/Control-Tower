import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  {
    name: 'باقی‌مانده',
    value: 25,
    fill: '#e2e8f0', // رنگ خاکستری برای بخش باقی‌مانده
  },
  {
    name: 'هدف اصلی',
    value: 100,
    fill: '#94a3b8', 
  },
  {
    name: 'تحقق یافته',
    value: 75,
    fill: '#6366f1', // رنگ اصلی بنفش
  },
];

const TargetRadialChart = () => (
  <div className="bg-white dark:bg-dark-bg-surfaceAlt shadow-lg rounded-xl p-4 w-full h-72 flex flex-col relative border border-transparent dark:border-gray-800 transition-all">
    <h3 className="text-sm font-bold mb-2 text-right text-light-text-primary dark:text-white opacity-80">
      تحقق هدف سالانه
    </h3>
    
    <div className="flex-1 min-h-0">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart 
          cx="50%" 
          cy="50%" 
          innerRadius="30%" 
          outerRadius="100%" 
          barSize={12} 
          data={data} 
          startAngle={90} 
          endAngle={-270}
        >
          <RadialBar
            background={{ fill: 'currentColor', className: 'text-gray-50 dark:text-gray-900' }}
            dataKey="value"
            cornerRadius={10}
            label={{ fill: '#94a3b8', position: 'insideStart', fontSize: 8 }}
          />
          <Tooltip 
            cursor={{ fill: 'transparent' }}
            contentStyle={{ borderRadius: '10px', border: 'none', fontSize: '12px', direction: 'rtl' }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>

    {/* نمایش درصد مرکزی */}
    <div className="absolute inset-0 flex flex-col items-center justify-center pt-8 pointer-events-none">
      <span className="text-2xl font-black text-light-text-primary dark:text-white">۷۵٪</span>
      <span className="text-[10px] text-gray-400 font-medium">کل مسیر</span>
    </div>
  </div>
);

export default TargetRadialChart;