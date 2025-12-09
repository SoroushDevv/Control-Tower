import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const HeatMapChart = ({ data = [], dataKeyX, dataKeyY, colorRange = ["#f7fbff", "#08306b"] }) => {
  const getColor = (value, max) => {
    const ratio = value / max;
    const start = parseInt(colorRange[0].slice(1), 16);
    const end = parseInt(colorRange[1].slice(1), 16);
    const color = Math.floor(start + (end - start) * ratio).toString(16);
    return `#${color.repeat(3)}`;
  };

  const maxValue = Math.max(...data.map(d => d[dataKeyY]));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={dataKeyX} />
        <YAxis />
        <Tooltip />
        <Bar dataKey={dataKeyY} fill={colorRange[1]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HeatMapChart;
