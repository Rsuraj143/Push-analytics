import React, { useState } from 'react'
import "./Header.css"
import { Link, useLocation, useRoutes } from 'react-router-dom'
import notification from "../../Images/h-notification.svg"
import msg from "../../Images/h-msg.svg"
import user from "../../Images/h-user.svg"
import  Search  from "../../Images/search.svg"
import  Leslie  from "../../Images/Leslie.svg"
import  Arlene  from "../../Images/Arlene.svg"
import  Albert   from "../../Images/Albert.svg"
import  hamburger   from "../../Images/hamburger.svg"
import SlideBar from '../SlideBar/SlideBar'
const Header = ({children}) => {
  const [showNotification, setShowNotification] = useState(false)
  const [humburgerStatus, setHumburgerStatus] = useState(false)

  let {state} = useLocation();
  return (
    <>
    <SlideBar humburgerStatus={humburgerStatus} setHumburgerStatus={setHumburgerStatus}/>
    <div class="home_content">
      <header class="header">
        <div class="header-main">
          <div className='hamburger' onClick={()=> setHumburgerStatus(!humburgerStatus)}>
            <img src={hamburger}  alt="dashbord" />
          </div>
          <div className='mob-heading-main'>
            <h2>{state?.path ? state?.path : "Daily Flash" }</h2>
          </div>
          <div class="search-box">
            <input type="text" placeholder="Search..." />
            <img src={Search}  alt="dashbord"/>
          </div>
          <ul class="icon-list p-0">
            <li>
              <Link to="#"><img src={notification} alt="notification" onClick={()=> setShowNotification(!showNotification)} /></Link>
            </li>
            <li className='msg'>
              <Link to="/"><img src={msg} alt="msg" /></Link>
            </li>

            <li className='d-none d-lg-block'>
              <Link to="/"><img src={user} alt="user" /></Link>
            </li>
          </ul>
        </div>
      </header>
     {children}

    {showNotification && 
     <div className='notifications-popup'>
      <div className='notifications-popup-inner'>
        <div className='notifications-count-main'>
          <div className='notifications-count d-flex align-items-center'>
              <h6>Notifications</h6>
              <span>2</span>
          </div>
          <p className='mark-read'>Mark as read</p>
        </div>
        <div className='new-main'>
            <h6>New</h6>
        </div>
        <div className='user-main'>
          <div className='user-main-inner'>
            <div className='icon-box'>
              <img src={Leslie}  alt="Leslie"/>
              <span>Leslie Alexander</span>
            </div>
            <p className='ago'>30 min ago</p>
          </div>
          <p className='user-text'>
            Our daily flash is ready by December 20, sales are up 10%
          </p>
        </div>
        <div className='new-main'>
            <h6>Before that</h6>
        </div>
        <div className='user-main pb-0'>
          <div className='user-main-inner'>
            <div className='icon-box'>
              <img src={Arlene}  alt="Arlene"/>
              <span>Arlene McCoy</span>
            </div>
            <p className='ago'>2 day ago</p>
          </div>
          <p className='user-text'>
            Our daily flash is ready by December 20, sales are up 10%
          </p>
        </div>
        <div className='user-main'>
          <div className='user-main-inner'>
            <div className='icon-box'>
              <img src={Albert}  alt="Albert"/>
              <span>Albert Flores</span>
            </div>
            <p className='ago'>3 day ago</p>
          </div>
          <p className='user-text'>
            Our daily flash is ready by December 20, sales are up 10%
          </p>
        </div>
        <div className='view-all'>
          <a href='#'>view-all</a>
        </div>
      </div>
     </div>
     }
    </div>
     </>
  )
}

export default Header