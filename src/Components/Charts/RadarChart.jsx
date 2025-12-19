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

const MainRadarChart = () => {
  return (
            <div className="bg-white dark:bg-dark-bg-surfaceAlt shadow-lg rounded-xl p-4 w-full h-72 flex flex-col border border-transparent dark:border-gray-800 transition-all">
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
      );
};

export default MainRadarChart;