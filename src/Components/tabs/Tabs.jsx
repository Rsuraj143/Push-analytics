import React from 'react'
import "./tabs.css"
import {Nav } from 'react-bootstrap';
import { BiTrendingDown } from "react-icons/bi";
import { BiTrendingUp } from "react-icons/bi";

const Tabs = () => {
  return (
    <div>
      <div className='main-heading'>
          <h1>Daily Flash</h1>
      </div>
      <div className='tabs-main'>
      <Nav variant="tabs" defaultActiveKey="#">
        <Nav.Item>
          <Nav.Link href="#">
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
    </div>
  )
}

export default Tabs