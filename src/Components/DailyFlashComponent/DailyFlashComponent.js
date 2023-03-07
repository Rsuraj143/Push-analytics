import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import data from '../tabs/ApiData';
import data2 from '../tabs/ApiData2';
import data3 from '../tabs/ApiData3';
import data4 from '../tabs/ApiData4';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useEffect, useState } from "react";
import "../tabs/tabs.css"
import ChartData from '../Charts/ChartData';
import ChartData2 from '../Charts/ChartData2';
import ChartData3 from '../Charts/ChartData3';
import ChartData4 from '../Charts/ChartData4';
const DailyFlashComponent = () => {
  const [chartData, setChartData] = useState([]);
  const [chartData2, setChartData2] = useState([]);
  const [chartData3, setChartData3] = useState([]);
  const [chartData4, setChartData4] = useState([]);
  useEffect(() => {
    setChartData(ChartData);
    setChartData2(ChartData2);
    setChartData3(ChartData3);
    setChartData4(ChartData4);
  }, []);
  return (
    <div>
      <Tabs>
        <TabList
          style={{
            fontSize: "25px",
            marginTop: "20px",
            color: "#1616b7",
            borderRadius: "10px"
          }}
        >
          <Tab style={{ background: "#a7f8a2", borderRadius: "5px" }}>
            Prior Day: Sept 13th
          </Tab>
          <Tab style={{ background: "#f4faa0", borderRadius: "5px" }}>
            Prior Week: Sept 7th
          </Tab>
          <Tab style={{ background: "#f4faa0", borderRadius: "5px" }}>
            Prior year: Sept 13th 2022
          </Tab>
          <Tab style={{ background: "#f4faa0", borderRadius: "5px" }}>
            Goal: Target
          </Tab>
        </TabList>
        <TabPanel>
          <Tabs>
            <TabList>
              {
                data.map((item)=>
<Tab>
        <div className="item">
          <div className="heading1">
            <img src={item.image} alt="mer" />
            <h4>{item.heading}</h4>
          </div>
          <div className="heading2">
            <h4>{item.current_date}</h4>
          </div>
          <div className="heading3">
            <p>{item.current_value}</p>
            <span>({item.current_percentage})</span>
          </div>
          <div className="heading2 heading4">
            <h4>{item.previous_value}</h4>
          </div>
          <div className="heading5">
            <h4>{item.previous_percentage}</h4>
          </div>
        </div>
        </Tab>
                )
              }

            </TabList>
            {
ChartData.map((e,i)=>
<TabPanel>
{
    e.title
  }
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
</TabPanel>)
            }




            {/* <TabPanel>MER(ROAS)-Graph</TabPanel>
            <TabPanel>SALES-Graph</TabPanel>
            <TabPanel>ORDERS-Graph</TabPanel>
            <TabPanel>AOV-Graph</TabPanel>
            <TabPanel>SESSIONS-Graph</TabPanel>
            <TabPanel>CONV RATE-Graph</TabPanel>
            <TabPanel>SPEND-Graph</TabPanel> */}
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs>
            <TabList>

              {
                data2.map((item)=>
        <Tab>
                          <div className="item">
          <div className="heading1">
            <img src={item.image} alt="mer" />
            <h4>{item.heading}</h4>
          </div>
          <div className="heading2">
            <h4>{item.current_date}</h4>
          </div>
          <div className="heading3">
            <p>{item.current_value}</p>
            <span>({item.current_percentage})</span>
          </div>
          <div className="heading2 heading4">
            <h4>{item.previous_value}</h4>
          </div>
          <div className="heading5">
            <h4>{item.previous_percentage}</h4>
          </div>
        </div>
</Tab>
                )
              }
            </TabList>
            {
ChartData2.map((e,i)=>
<TabPanel>
  {
    e.title
  }
<AreaChart
        width={1502}
        height={506}
        data={chartData2}
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
</TabPanel>)
            }
            {/* <TabPanel>MER(ROAS)-Graph-prior week-2022</TabPanel>
            <TabPanel>SALES-Graph-prior week-2022</TabPanel>
            <TabPanel>ORDERS-Graph-prior week-2022</TabPanel>
            <TabPanel>AOV-Graph-prior week-2022</TabPanel>
            <TabPanel>SESSIONS-Graph-prior week-2022</TabPanel>
            <TabPanel>CONV RATE-Graph-prior week-2022</TabPanel>
            <TabPanel>SPEND-Graph-prior week-2022</TabPanel> */}
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs>
            <TabList>

              {
                data3.map((item)=>
<Tab>
                          <div className="item">
          <div className="heading1">
            <img src={item.image} alt="mer" />
            <h4>{item.heading}</h4>
          </div>
          <div className="heading2">
            <h4>{item.current_date}</h4>
          </div>
          <div className="heading3">
            <p>{item.current_value}</p>
            <span>({item.current_percentage})</span>
          </div>
          <div className="heading2 heading4">
            <h4>{item.previous_value}</h4>
          </div>
          <div className="heading5">
            <h4>{item.previous_percentage}</h4>
          </div>
        </div>
        </Tab>
                )
              }

            </TabList>
            {
ChartData3.map((e,i)=>
<TabPanel>
{
    e.title
  }
<AreaChart
        width={1502}
        height={506}
        data={chartData3}
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
</TabPanel>)
            }
            {/* <TabPanel>MER(ROAS)-Graph-prior year(2022)</TabPanel>
            <TabPanel>SALES-Graph-prior year(2022)</TabPanel>
            <TabPanel>ORDERS-Graph-prior year(2022)</TabPanel>
            <TabPanel>AOV-Graph-prior year(2022)</TabPanel>
            <TabPanel>SESSIONS-Graph-prior year(2022)</TabPanel>
            <TabPanel>CONV RATE-Graph-prior year(2022)</TabPanel>
            <TabPanel>SPEND-Graph-prior year(2022)</TabPanel> */}
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs>
            <TabList>

              {
                data4.map((item)=>
<Tab>
                          <div className="item">
          <div className="heading1">
            <img src={item.image} alt="mer" />
            <h4>{item.heading}</h4>
          </div>
          <div className="heading2">
            <h4>{item.current_date}</h4>
          </div>
          <div className="heading3">
            <p>{item.current_value}</p>
            <span>({item.current_percentage})</span>
          </div>
          <div className="heading2 heading4">
            <h4>{item.previous_value}</h4>
          </div>
          <div className="heading5">
            <h4>{item.previous_percentage}</h4>
          </div>
        </div>
</Tab>

                )
              }
            </TabList>
            {
ChartData4.map((e,i)=>
<TabPanel>
  {
    e.title
  }
<AreaChart
        width={1502}
        height={506}
        data={chartData4}
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
</TabPanel>)
            }
            {/* <TabPanel>MER(ROAS)-Graph-Goal Target-2023</TabPanel>
            <TabPanel>SALES-Graph-Goal Target-2023</TabPanel>
            <TabPanel>ORDERS-Graph-Goal Target-2023</TabPanel>
            <TabPanel>AOV-Graph-Goal Target-2023</TabPanel>
            <TabPanel>SESSIONS-Graph-Goal Target-2023</TabPanel>
            <TabPanel>CONV RATE-Graph-Goal Target-2023</TabPanel>
            <TabPanel>SPEND-Graph-Goal Target-2023</TabPanel> */}
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default DailyFlashComponent
