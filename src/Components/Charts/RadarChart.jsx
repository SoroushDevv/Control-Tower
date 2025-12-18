import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  PieChart, Pie, Cell, Tooltip, Legend,
  RadialBarChart, RadialBar
} from 'recharts';

// --- داده‌های نمونه ---
const radarData = [
  { subject: 'پوشاک', A: 120, B: 110 },
  { subject: 'دیجیتال', A: 98, B: 130 },
  { subject: 'آرایشی', A: 86, B: 80 },
  { subject: 'خانگی', A: 99, B: 90 },
  { subject: 'ورزشی', A: 85, B: 90 },
];

const trafficData = [
  { name: 'گوگل', value: 450 },
  { name: 'مستقیم', value: 300 },
  { name: 'سوشال', value: 250 },
];

const perfData = [
  { name: 'فروش', uv: 90, fill: '#6366f1' },
  { name: 'رضایت', uv: 70, fill: '#10b981' },
  { name: 'بازگشت', uv: 50, fill: '#f59e0b' },
];

const targetData = [{ value: 75, fill: '#6366f1' }];

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899'];

const CategoryRadarChart = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full" dir="rtl">
      
      {/* 1. Radar Chart */}
      <div className="bg-white dark:bg-dark-bg-surfaceAlt shadow-lg rounded-xl p-4 w-full h-96 flex flex-col border dark:border-gray-800">
        <h3 className="text-sm font-semibold mb-4 text-center dark:text-white">تحلیل حوزه‌های فروش</h3>
        <ResponsiveContainer width="100%" height="85%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
            <PolarGrid stroke="#e2e8f0" />
            <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: '#94a3b8' }} />
            <Radar name="امسال" dataKey="A" stroke="#6366f1" fill="#6366f1" fillOpacity={0.5} />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* 2. Rounded Pie Chart */}
      <div className="bg-white dark:bg-dark-bg-surfaceAlt shadow-lg rounded-xl p-4 w-full h-96 flex flex-col border dark:border-gray-800">
        <h3 className="text-sm font-semibold mb-4 text-center dark:text-white">منابع ورودی ترافیک</h3>
        <ResponsiveContainer width="100%" height="85%">
          <PieChart>
            <Pie data={trafficData} innerRadius="60%" outerRadius="85%" paddingAngle={8} cornerRadius={10} dataKey="value">
              {trafficData.map((e, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36}/>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* 3. Multi Radial Chart */}
      <div className="bg-white dark:bg-dark-bg-surfaceAlt shadow-lg rounded-xl p-4 w-full h-96 flex flex-col border dark:border-gray-800">
        <h3 className="text-sm font-semibold mb-4 text-center dark:text-white">شاخص‌های عملکرد</h3>
        <ResponsiveContainer width="100%" height="85%">
          <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="100%" barSize={10} data={perfData}>
            <RadialBar background clockWise dataKey="uv" cornerRadius={10} />
            <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" align="center" />
            <Tooltip />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      {/* 4. Target Radial (Simple) */}
      <div className="bg-white dark:bg-dark-bg-surfaceAlt shadow-lg rounded-xl p-4 w-full h-96 flex flex-col relative border dark:border-gray-800">
        <h3 className="text-sm font-semibold mb-4 text-center dark:text-white">تحقق هدف سالانه</h3>
        <ResponsiveContainer width="100%" height="85%">
          <RadialBarChart cx="50%" cy="50%" innerRadius="80%" outerRadius="100%" barSize={20} data={targetData} startAngle={90} endAngle={-270}>
            <RadialBar background dataKey="value" cornerRadius={20} />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-10 pointer-events-none">
          <span className="text-3xl font-black dark:text-white">۷۵٪</span>
          <span className="text-xs text-gray-400">تکمیل شده</span>
        </div>
      </div>

    </div>
  );
};

export default CategoryRadarChart;