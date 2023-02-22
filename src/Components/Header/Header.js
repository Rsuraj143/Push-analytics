import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import notification from "../../Images/h-notification.svg"
import msg from "../../Images/h-msg.svg"
import user from "../../Images/h-user.svg"
import  Search  from "../../Images/search.svg"
import  Leslie  from "../../Images/Leslie.svg"
const Header = ({children}) => {
  return (
    <div class="home_content">
      <header class="header">
        <div class="header-main">
          <div class="search-box">
            <input type="text" placeholder="Search..." />
            <img src={Search}  alt="dashbord"/>
          </div>
          <ul class="icon-list">
            <li>
              <Link to="/"><img src={notification} alt="notification" /></Link>
            </li>
            <li>
              <Link to="/"><img src={msg} alt="msg" /></Link>
            </li>

            <li>
              <Link to="/"><img src={user} alt="user" /></Link>
            </li>
          </ul>
        </div>
      </header>
     {children}

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
        </div>
      </div>
     </div>
    </div>
    
  )
}

export default Header