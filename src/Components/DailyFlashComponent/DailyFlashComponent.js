
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import data from "../TabsCardData/DayData";
import data2 from "../TabsCardData/WeeklyData";
import data3 from "../TabsCardData/YearlyData";
import data4 from "../TabsCardData/TargetData";
import "./DailyFlashComponent.css";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useEffect, useState } from "react";
import "../tabs/tabs.css";
import ChartData1 from "../ChartsData/ChartData1";
import ChartData2 from "../ChartsData/ChartData2";
import ChartData3 from "../ChartsData/ChartData3";
import ChartData4 from "../ChartsData/ChartData4";
import { Form } from "react-bootstrap";
import { BiTrendingDown } from "react-icons/bi";
import { BiTrendingUp } from "react-icons/bi";

const DailyFlashComponent = () => {

  const [chartData, setChartData] = useState([]);
  const [chartData2, setChartData2] = useState([]);
  const [chartData3, setChartData3] = useState([]);
  const [chartData4, setChartData4] = useState([]);


  useEffect(() => {
    setChartData(ChartData1);
    setChartData2(ChartData2);
    setChartData3(ChartData3);
    setChartData4(ChartData4);
  }, []);
  return (
    <div className="daily-flash-tab">
      <div className="main-heading d-sm-flex d-block justify-content-between">
        <h1>Daily Flash</h1>
        <div className="date">
          <Form className="">
            <input type="date" value="2017-06-01" className="user-input" />
          </Form>
        </div>
      </div>
      <div className="tabs-main">
        <Tabs>
          <TabList  >
            <Tab >
            <h4>Prior Day <span>: Sept 13th</span></h4>
              <div className="down-up-text">
                <p>Your sales are down</p>
                <span className="down-text">
                  <BiTrendingDown />
                  <p>10%</p>
                </span>
              </div>
            </Tab>
            <Tab >
            <h4>Prior Week <span>: Sept 7th</span></h4>
              <div className="down-up-text">
                <p>Your sales are down</p>
                <span className="up-text">
                  <BiTrendingUp />
                  <p>2%</p>
                </span>
              </div>
            </Tab>
            <Tab >
            <h4>Prior year <span>: Sept 13th 2022</span></h4>
              <div className="down-up-text">
                <p>Your sales are up</p>
                <span className="up-text">
                  <BiTrendingUp />
                  <p>10%</p>
                </span>
              </div>
            </Tab>
            <Tab >
            <h4>Goal <span>: Target</span></h4>
              <div className="down-up-text">
                <p>Your sales are down</p>
                <span className="up-text">
                  <BiTrendingUp />
                  <p>47%</p>
                </span>
              </div>
            </Tab>
          </TabList>
          <TabPanel>
            <Tabs>
              <TabList className="tab_card tab-box">
                {data.map((item) => (
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
                ))}
              </TabList>
              {ChartData1.map((e, i) => (
                <TabPanel>
                  <h4 className="mb-3">{e.title}</h4>
                  <AreaChart
                    width={1502}
                    height={506}
                    data={chartData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#AE2FB0"
                          stopOpacity={0.2}
                        />
                        <stop
                          offset="95%"
                          stopColor="#AE2FB0"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" tickLine={false} />
                    <YAxis
                      type="number"
                      domain={[0, 12000]}
                      tickCount={10}
                      axisLine={false}
                    />
                    <CartesianGrid strokeDasharray="10 10" vertical={false} />
                    <Tooltip />
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
                </TabPanel>
              ))}
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs>
              <TabList className="tab_card tab-box">
                {data2.map((item) => (
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
                ))}
              </TabList>
              {ChartData2.map((e, i) => (
                <TabPanel>
                  <h4 className="mb-3">{e.title}</h4>
                  <AreaChart
                    width={1502}
                    height={506}
                    data={chartData2}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#322FB0"
                          stopOpacity={0.2}
                        />
                        <stop
                          offset="95%"
                          stopColor="#322FB0"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#AE2FB0"
                          stopOpacity={0.2}
                        />
                        <stop
                          offset="95%"
                          stopColor="#AE2FB0"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" tickLine={false} />
                    <YAxis
                      type="number"
                      domain={[0, 12000]}
                      tickCount={10}
                      axisLine={false}
                    />
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
                </TabPanel>
              ))}
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs>
              <TabList className="tab_card tab-box">
                {data3.map((item) => (
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
                ))}
              </TabList>
              {ChartData3.map((e, i) => (
                <TabPanel>
                  <h4 className="mb-3">{e.title}</h4>
                  <AreaChart
                    width={1502}
                    height={506}
                    data={chartData3}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#322FB0"
                          stopOpacity={0.2}
                        />
                        <stop
                          offset="95%"
                          stopColor="#322FB0"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#AE2FB0"
                          stopOpacity={0.2}
                        />
                        <stop
                          offset="95%"
                          stopColor="#AE2FB0"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" tickLine={false} />
                    <YAxis
                      type="number"
                      domain={[0, 12000]}
                      tickCount={10}
                      axisLine={false}
                    />
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
                </TabPanel>
              ))}
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs>
              <TabList className="tab_card tab-box">
                {data4.map((item) => (
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
                ))}
              </TabList>
              {ChartData4.map((e, i) => (
                <TabPanel>
                   <h4 className="mb-3">{e.title}</h4>
                  <AreaChart
                    width={1502}
                    height={506}
                    data={chartData4}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#322FB0"
                          stopOpacity={0.2}
                        />
                        <stop
                          offset="95%"
                          stopColor="#322FB0"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#AE2FB0"
                          stopOpacity={0.2}
                        />
                        <stop
                          offset="95%"
                          stopColor="#AE2FB0"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" tickLine={false} />
                    <YAxis
                      type="number"
                      domain={[0, 12000]}
                      tickCount={10}
                      axisLine={false}
                    />
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
                </TabPanel>
              ))}
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default DailyFlashComponent;
