import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const SparklineChart = ({ data = [], dataKeyY, color = "#10b981", height = 50 }) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey={dataKeyY}
          stroke={color}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SparklineChart;
