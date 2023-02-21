import React, { useState } from "react";
import "./tabs.css";
import { Nav } from "react-bootstrap";
import { BiTrendingDown } from "react-icons/bi";
import { BiTrendingUp } from "react-icons/bi";


import TabBox from "./TabBox";
import Chart from "../Charts/Chart";


const Tabs = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="daily-flash-tab">
      <div className="main-heading">
        <h1>Daily Flash</h1>
      </div>
      <div className="tabs-main">
        <Nav variant="tabs" defaultActiveKey="#">
          <Nav.Item>
            <Nav.Link
              href="#"
              onClick={() => toggleTab(1)}
              className={
                toggleState === 1
                  ? "tabs-main nav-link active"
                  : "tabs-main nav-link"
              }
            >
              <h4>Prior Day: Sept 13th</h4>
              <div className="down-up-text">
                <p>Your sales are down</p>
                <span className="down-text">
                  <BiTrendingDown />
                  <p>10%</p>
                </span>
              </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              onClick={() => toggleTab(2)}
              className={
                toggleState === 2
                  ? "tabs-main nav-link active"
                  : "tabs-main nav-link"
              }
            >
              <h4>Prior Week: Sept 7th</h4>
              <div className="down-up-text">
                <p>Your sales are down</p>
                <span className="up-text">
                  <BiTrendingUp />
                  <p>2%</p>
                </span>
              </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-2"
              onClick={() => toggleTab(3)}
              className={
                toggleState === 3
                  ? "tabs-main nav-link active"
                  : "tabs-main nav-link"
              }
            >
              <h4>Prior year: Sept 13th 2022</h4>
              <div className="down-up-text">
                <p>Your sales are up</p>
                <span className="up-text">
                  <BiTrendingUp />
                  <p>10%</p>
                </span>
              </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-3"
              onClick={() => toggleTab(4)}
              className={
                toggleState === 4
                  ? "tabs-main nav-link active"
                  : "tabs-main nav-link"
              }
            >
              <h4>Goal: Target</h4>
              <div className="down-up-text">
                <p>Your sales are down</p>
                <span className="up-text">
                  <BiTrendingUp />
                  <p>47%</p>
                </span>
              </div>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="tab-box">
       <div className="scroll-left">
           <TabBox />
       </div>
      </div>
      <div className="chart-main">
        <Chart/>
      </div>
    </div>
  );
};

export default Tabs;