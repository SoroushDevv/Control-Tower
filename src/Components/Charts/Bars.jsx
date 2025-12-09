import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const BarChartComponent = ({ data = [], dataKeyX, dataKeyY, color = "#82ca9d" }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={dataKeyX} />
        <YAxis />
        <Tooltip />
        <Bar dataKey={dataKeyY} fill={color} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
