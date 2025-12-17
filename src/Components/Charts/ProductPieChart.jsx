import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

// داده نمونه برای دسته‌بندی محصولات
const productData = [
  { name: "کفش", value: 400 },
  { name: "لباس", value: 300 },
  { name: "لوازم جانبی", value: 200 },
  { name: "الکترونیک", value: 100 },
];

// رنگ‌ها برای دسته‌ها
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

const ProductPieChart = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-full h-96" dir="rtl">
      {/* Container با Tailwind */}
      <h2 className="text-lg font-semibold mb-4 text-center">
        سهم فروش محصولات
      </h2>
      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={productData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {productData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductPieChart;
