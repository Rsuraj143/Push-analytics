import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const DailyFlashComponent = () => {
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
              <Tab>MER(ROAS)-SEPT13th</Tab>
              <Tab>SALES-SEPT13th</Tab>
              <Tab>ORDERS-SEPT13th</Tab>
              <Tab>AOV-SEPT13th</Tab>
              <Tab>SESSIONS-SEPT13th</Tab>
              <Tab>CONV RATE-SEPT13th</Tab>
              <Tab>SPEND-SEPT13th</Tab>
            </TabList>
            <TabPanel>MER(ROAS)-Graph</TabPanel>
            <TabPanel>SALES-Graph</TabPanel>
            <TabPanel>ORDERS-Graph</TabPanel>
            <TabPanel>AOV-Graph</TabPanel>
            <TabPanel>SESSIONS-Graph</TabPanel>
            <TabPanel>CONV RATE-Graph</TabPanel>
            <TabPanel>SPEND-Graph</TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>MER(ROAS)-SEPT9</Tab>
              <Tab>SALES-SEPT8</Tab>
              <Tab>ORDERS-SEPT6</Tab>
              <Tab>AOV-SEPT10</Tab>
              <Tab>SESSIONS-SEPT11</Tab>
              <Tab>CONV RATE-SEPT12</Tab>
              <Tab>SPEND-SEPT8</Tab>
            </TabList>
            <TabPanel>MER(ROAS)-Graph-prior week-2022</TabPanel>
            <TabPanel>SALES-Graph-prior week-2022</TabPanel>
            <TabPanel>ORDERS-Graph-prior week-2022</TabPanel>
            <TabPanel>AOV-Graph-prior week-2022</TabPanel>
            <TabPanel>SESSIONS-Graph-prior week-2022</TabPanel>
            <TabPanel>CONV RATE-Graph-prior week-2022</TabPanel>
            <TabPanel>SPEND-Graph-prior week-2022</TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>MER(ROAS)-SEPT13-2022</Tab>
              <Tab>SALES-SEPT13-2022</Tab>
              <Tab>ORDERS-SEPT13-2022</Tab>
              <Tab>AOV-SEPT13-2022</Tab>
              <Tab>SESSIONS-SEPT13-2022</Tab>
              <Tab>CONV RATE-SEPT13-2022</Tab>
              <Tab>SPEND-SEPT13-2022</Tab>
            </TabList>
            <TabPanel>MER(ROAS)-Graph-prior year(2022)</TabPanel>
            <TabPanel>SALES-Graph-prior year(2022)</TabPanel>
            <TabPanel>ORDERS-Graph-prior year(2022)</TabPanel>
            <TabPanel>AOV-Graph-prior year(2022)</TabPanel>
            <TabPanel>SESSIONS-Graph-prior year(2022)</TabPanel>
            <TabPanel>CONV RATE-Graph-prior year(2022)</TabPanel>
            <TabPanel>SPEND-Graph-prior year(2022)</TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>MER(ROAS)-Goal Target</Tab>
              <Tab>SALES-Goal Target</Tab>
              <Tab>ORDERS-Goal Target</Tab>
              <Tab>AOV-Goal Target</Tab>
              <Tab>SESSIONS-Goal Target</Tab>
              <Tab>CONV RATE-Goal Target</Tab>
              <Tab>SPEND-Goal Target</Tab>
            </TabList>
            <TabPanel>MER(ROAS)-Graph-Goal Target-2023</TabPanel>
            <TabPanel>SALES-Graph-Goal Target-2023</TabPanel>
            <TabPanel>ORDERS-Graph-Goal Target-2023</TabPanel>
            <TabPanel>AOV-Graph-Goal Target-2023</TabPanel>
            <TabPanel>SESSIONS-Graph-Goal Target-2023</TabPanel>
            <TabPanel>CONV RATE-Graph-Goal Target-2023</TabPanel>
            <TabPanel>SPEND-Graph-Goal Target-2023</TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default DailyFlashComponent
