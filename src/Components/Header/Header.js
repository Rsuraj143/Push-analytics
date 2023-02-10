import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import notification from "../../Images/h-notification.svg"
import msg from "../../Images/h-msg.svg"
import user from "../../Images/h-user.svg"
import  Search  from "../../Images/search.svg"

const Header = () => {
  return (
    <div class="home_content">
      <header class="header">
        <div class="header-main">
          <div class="search-box">
            {/* <i class="bx bx-search"></i> */}
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
     
    </div>
  )
}

export default Header