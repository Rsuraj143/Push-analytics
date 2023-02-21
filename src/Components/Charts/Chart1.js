import React, { useEffect, useState } from "react";
import {BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar} from "recharts"

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Page H",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Page I",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Page H",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Page I",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "Page H",
    uv: 3490,
    pv: 4300,
  },
];

const Chart1 = () => {
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
    }, 5000);
  };
  return (
    <div>
        
      <BarChart width={1502} height={506} data={chartData}>
        <CartesianGrid strokeDasharray="10 10" vertical={false}/>
        <XAxis dataKey="name" tickLine={false} />
        <YAxis type="number" domain={[0, 12000]} tickCount={10} axisLine={false}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#AE2FB0" barSize={12}  />
        <Bar dataKey="uv" fill="#322FB0" barSize={12}  />
      </BarChart>
    </div>
  );
};

export default Chart1;
