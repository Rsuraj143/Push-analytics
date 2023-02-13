import React from 'react'
import "./tabs.css"
import {Nav } from 'react-bootstrap';
import { BiTrendingDown } from "react-icons/bi";
import { BiTrendingUp } from "react-icons/bi";

const Tabs = () => {
  return (
    <div className='tabs-main'>

    <Nav variant="tabs" defaultActiveKey="/daily-flash">
      <Nav.Item>
        <Nav.Link href="/daily-flash">
          <h4>Prior Day: Sept 13th</h4>
         <div className='down-up-text'>
            <p>Your sales are down</p>
            <span>
              <BiTrendingDown/>
              <p>10%</p>
            </span>
         </div>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">
          <h4>Prior Week: Sept 7th</h4>
            <div className='down-up-text'>
              <p>Your sales are down</p>
              <span>
                <BiTrendingUp/>
                <p>2%</p>
              </span>
          </div>
          </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">
          <h4>Prior year: Sept 13th 2022</h4>
            <div className='down-up-text'>
              <p>Your sales are up</p>
              <span>
                <BiTrendingUp/>
                <p>10%</p>
              </span>
          </div>
          </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">
          <h4>Goal: Target</h4>
            <div className='down-up-text'>
              <p>Your sales are down</p>
              <span>
                <BiTrendingUp/>
                <p>47%</p>
              </span>
          </div>
          </Nav.Link>
      </Nav.Item>
    </Nav>
    
    </div>
  )
}

export default Tabs