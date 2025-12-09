import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const AreaChartComponent = ({ data = [], dataKeyX, dataKeyY, color = "#8884d8" }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={dataKeyX} />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey={dataKeyY} stroke={color} fill={color} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
