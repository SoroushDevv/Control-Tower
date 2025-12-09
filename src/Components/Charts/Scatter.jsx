import React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const ScatterChartComponent = ({ data = [], dataKeyX, dataKeyY, color = "#8884d8" }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={dataKeyX} />
        <YAxis dataKey={dataKeyY} />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter data={data} fill={color} />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterChartComponent;
