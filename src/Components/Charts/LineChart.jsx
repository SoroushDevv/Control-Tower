import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// داده نمونه برای 7 روز اخیر به فارسی
const sampleData = [
  { day: "شنبه", revenue: 1200, orders: 30 },
  { day: "یکشنبه", revenue: 1500, orders: 40 },
  { day: "دوشنبه", revenue: 800, orders: 20 },
  { day: "سه‌شنبه", revenue: 1700, orders: 50 },
  { day: "چهارشنبه", revenue: 1400, orders: 35 },
  { day: "پنجشنبه", revenue: 2000, orders: 60 },
  { day: "جمعه", revenue: 1800, orders: 45 },
];

const SalesLineChart = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-full h-96" dir="rtl">
      {/* کارت با Tailwind */}
      <h2 className="text-lg font-semibold mb-4 text-center">
        روند فروش و تعداد سفارش‌ها
      </h2>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart
          data={sampleData}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis
            yAxisId="left"
            label={{ value: "مبلغ فروش (تومان)", angle: -90, position: "insideLeft" }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{ value: "تعداد سفارش‌ها", angle: 90, position: "insideRight" }}
          />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="orders"
            stroke="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesLineChart;
