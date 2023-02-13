import React from 'react'
import "./tabs.css"
import {Nav } from 'react-bootstrap';
import { BiTrendingDown } from "react-icons/bi";
import { BiTrendingUp } from "react-icons/bi";
import mer from "../../Images/mer.svg";
import TabBox from './TabBox';
const Tabs = () => {
  
  const data = {
    image: mer,
    heading : "MER(ROAS)",
    current_date: "Sept 14th",
    current_value: "5.5",
    current_percentage:"-10%",
    previous_value: "Sept 13th",
    previous_percentage:"-10%",
}

  return (
    <div>
      <div className='main-heading'>
          <h1>Daily Flash</h1>
      </div>
      <div className='tabs-main'>
      <Nav variant="tabs" defaultActiveKey="#" activeKey="link-1">
        <Nav.Item>
          <Nav.Link href="#" onClick={()=> console.log("#")}>
            <h4>Prior Day: Sept 13th</h4>
          <div className='down-up-text'>
              <p>Your sales are down</p>
              <span className='down-text'>
                <BiTrendingDown/>
                <p >10%</p>
              </span>
          </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <h4>Prior Week: Sept 7th</h4>
              <div className='down-up-text'>
                <p>Your sales are down</p>
                <span className='up-text'>
                  <BiTrendingUp/>
                  <p >2%</p>
                </span>
            </div>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" >
            <h4>Prior year: Sept 13th 2022</h4>
              <div className='down-up-text'>
                <p>Your sales are up</p>
                <span className='up-text'>
                  <BiTrendingUp/>
                  <p >10%</p>
                </span>
            </div>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" >
            <h4>Goal: Target</h4>
              <div className='down-up-text'>
                <p>Your sales are down</p>
                <span className='up-text'>
                  <BiTrendingUp/>
                  <p>47%</p>
                </span>
            </div>
            </Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
      <div className='tab-box'>
      <TabBox data={data}/>
      <TabBox data={data}/>
      <TabBox data={data}/>
      <TabBox data={data}/>
      <TabBox data={data}/>
      <TabBox data={data}/>
      <TabBox data={data}/>
      {/* <div className="item">
        <div className="heading1">
          <img src={mer} alt="mer" />
          <h4>MER(ROAS)</h4>
        </div>
        <div className="heading2">
          <h4>Sept 14th</h4>
        </div>
        <div className="heading3">
          <p>5.5</p><span>(-10%)</span>
        </div>
        <div className="heading2 heading4">
          <h4>Sept 13th</h4>
        </div>
        <div className="heading5">
          <h4>4.3</h4>
        </div>
      </div>
      <div className="item">
        <div className="heading1">
          <img src={mer} alt="mer" />
          <h4>MER(ROAS)</h4>
        </div>
        <div className="heading2">
          <h4>Sept 14th</h4>
        </div>
        <div className="heading3">
          <p>5.5</p><span>(-10%)</span>
        </div>
        <div className="heading2 heading4">
          <h4>Sept 13th</h4>
        </div>
        <div className="heading5">
          <h4>4.3</h4>
        </div>
      </div>
      <div className="item">
        <div className="heading1">
          <img src={mer} alt="mer" />
          <h4>MER(ROAS)</h4>
        </div>
        <div className="heading2">
          <h4>Sept 14th</h4>
        </div>
        <div className="heading3">
          <p>5.5</p><span>(-10%)</span>
        </div>
        <div className="heading2 heading4">
          <h4>Sept 13th</h4>
        </div>
        <div className="heading5">
          <h4>4.3</h4>
        </div>
      </div>
      <div className="item">
        <div className="heading1">
          <img src={mer} alt="mer" />
          <h4>MER(ROAS)</h4>
        </div>
        <div className="heading2">
          <h4>Sept 14th</h4>
        </div>
        <div className="heading3">
          <p>5.5</p><span>(-10%)</span>
        </div>
        <div className="heading2 heading4">
          <h4>Sept 13th</h4>
        </div>
        <div className="heading5">
          <h4>4.3</h4>
        </div>
      </div>
      <div className="item">
        <div className="heading1">
          <img src={mer} alt="mer" />
          <h4>MER(ROAS)</h4>
        </div>
        <div className="heading2">
          <h4>Sept 14th</h4>
        </div>
        <div className="heading3">
          <p>5.5</p><span>(-10%)</span>
        </div>
        <div className="heading2 heading4">
          <h4>Sept 13th</h4>
        </div>
        <div className="heading5">
          <h4>4.3</h4>
        </div>
      </div>
      <div className="item">
        <div className="heading1">
          <img src={mer} alt="mer" />
          <h4>MER(ROAS)</h4>
        </div>
        <div className="heading2">
          <h4>Sept 14th</h4>
        </div>
        <div className="heading3">
          <p>5.5</p><span>(-10%)</span>
        </div>
        <div className="heading2 heading4">
          <h4>Sept 13th</h4>
        </div>
        <div className="heading5">
          <h4>4.3</h4>
        </div>
      </div> */}
    </div>
    </div>
  )
}

export default Tabs