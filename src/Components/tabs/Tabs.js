import React, { useEffect, useState } from "react";
import "./tabs.css";
import { Button, ButtonGroup, ButtonToolbar, Form, Nav } from "react-bootstrap";
import { BiTrendingDown } from "react-icons/bi";
import { BiTrendingUp } from "react-icons/bi";
import priorday1 from "../../Images/priorday1.svg";
import priorday2 from "../../Images/priorday2.svg";
import TabBox from "./TabBox";
import Chart from "../Charts/Chart";
import WindowDimensions from "./WindowDimensions";


const Tabs = () => {

  const [toggleState, setToggleState] = useState(1);
  const [mobileButton, setMobileButton] = useState("card"); // card, chart

  const { height, width } = WindowDimensions();

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="daily-flash-tab">
      <div className="main-heading d-sm-flex d-block justify-content-between">
        <h1>Daily Flash</h1>
        <div className="date">
        <Form className=''>
            <input type="date" value="2017-06-01" className='user-input' />
        </Form>
        </div>
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
              <h4>Prior Day <span>: Sept 13th</span></h4>
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
              <h4>Prior Week <span>: Sept 7th</span></h4>
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
              <h4>Prior year <span>: Sept 13th 2022</span></h4>
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
              <h4>Goal <span>: Target</span></h4>
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
      <div className="mob-heading">
        <div className="heading-left">
          <h4>Sept 13th</h4>
          <div className="down-up-text">
                <p>Your sales are down</p>
                <span className="down-text">
                  <BiTrendingDown />
                  <p>10%</p>
                </span>
           </div>
        </div>
        <div className="heading-right">
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="ml-2" aria-label="First group">
            <Button active={mobileButton === "card" ? true : false} onClick={e => {e.preventDefault(); setMobileButton("card")}}><img src={priorday1} alt="upload" /></Button> 
            <Button active={mobileButton === "chart" ? true : false} onClick={e => {e.preventDefault(); setMobileButton("chart")}}><img src={priorday2} alt="upload" /></Button>
          </ButtonGroup>
        </ButtonToolbar>
        </div>
      </div>
      { (mobileButton === "card" || width >= 992) && 
      <div className="tab-box">
       <div className="scroll-left">
           <TabBox />
       </div>
      </div>
      }
      {(mobileButton === "chart" ||  width >= 992) && 
      <div className="chart-main">
        <Chart/>
      </div>
      }
    </div>
  );
};

export default Tabs;