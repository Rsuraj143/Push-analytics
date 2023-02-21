import React from "react";
import "./Chart.css";
import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Chart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(data);
    addData();
  }, []);

  const addData = () => {
    setInterval(() => {
      const data = {
        name: Math.floor(Math.random() * 10000),
        uv: Math.floor(Math.random() * 10000),
        pv: Math.floor(Math.random() * 10000),
        amt: Math.floor(Math.random() * 10000),
      };
      setChartData(([f, ...d]) => [...d, data]);
    }, 3000);
  };
  return (
    <div>
      <AreaChart
        width={1502}
        height={506}
        data={chartData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#322FB0" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#322FB0" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#AE2FB0" stopOpacity={0.2} />
            <stop offset="95%" stopColor="#AE2FB0" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" tickLine={false} />
        <YAxis type="number" domain={[0, 12000]} tickCount={10} axisLine={false}/>
        <CartesianGrid strokeDasharray="10 10" vertical={false} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#322FB0"
          fillOpacity={1}
          fill="url(#colorUv)"
          isAnimationActive={false}
          strokeDasharray="10 10"
          strokeWidth={3}
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#AE2FB0"
          fillOpacity={1}
          fill="url(#colorPv)"
          isAnimationActive={false}
          strokeWidth={3}
        />
      </AreaChart>
    </div>
  );
};

export default Chart;
