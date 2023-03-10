import React, { useRef, useState } from "react";
import "./SlideBar.css";
import { Link, NavLink } from "react-router-dom";
import Liveview from "../../Images/Live-view.svg";
import dashbord from "../../Images/Dashboard.svg";
import DailyFlash from "../../Images/Daily-Flash.svg";
import sales from "../../Images/sales.svg";
import user from "../../Images/h-user.svg"
import Products from "../../Images/Products.svg";
import Audience from "../../Images/Audience.svg";
import  Search  from "../../Images/search.svg"
import siderbarbtn from "../../Images/siderbar-btn.svg";
import English from "../../Images/English.svg";
import Logout from "../../Images/Logout.svg";
import Settings from "../../Images/Settings.svg";

const SlideBar = ({humburgerStatus, setHumburgerStatus}) => {
  const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);

  const btnref = useRef();
  const handleSlide = () => {
    btnref.current.click();
    setClick(!click)
  };

  return (

    // hamburger-open
    <div class={`sidebar ${click ? "active" :""} ${ humburgerStatus ? "hamburger-open" : "" }`}>
      <div class="logo_content">
        <div class="logo">
          <div class="logoname" style={{ marginleft: "5px" }}>
            Push
          </div>
        </div>
        <img
          src={siderbarbtn}
          id="btn"
          ref={btnref}
          onClick={() => handleSlide()}
          alt="dashbord"
        />
        <img src={siderbarbtn} className="h-close" alt="dashbord" onClick={()=> setHumburgerStatus(!humburgerStatus)}/>
      </div>

      <div className="sidebar-box">
        <ul class="nav_list">
        <div className="user-box d-flex align-items-center">
          <img src={user} alt="user" />
            <div className="text">
                <h2>Kate Miller</h2>
                <a href="mailto:kate@gmail.com">kate@gmail.com</a>
            </div>
        </div>
        <div class="search-box">
            <input type="text" placeholder="Search..." />
            <img src={Search}  alt="dashbord"/>
          </div>
          <li>
            <Link to="/liveView" state={{path: "Live view"}}>
              <div className="icons">
                <img src={Liveview} alt="dashbord" />
              </div>

              <span class="link_names">Live view</span>
            </Link>
            <span class="tooltip">Live view</span>
          </li>
          <li>
            <Link to="#">
              <div className="icons">
                <img src={dashbord} alt="dashbord" />
              </div>
              <span class="link_names">Dashboard</span>
            </Link>
            <span class="tooltip">Dashboard</span>
          </li>
          <li>
            <NavLink to="/dailyFlash" state={{path: "Daily Flash"}}>
              <div className="icons">
                <img src={DailyFlash} alt="dashbord" />
              </div>

              <span class="link_names">Daily Flash</span>
            </NavLink>
            <span class="tooltip">Daily Flash</span>
          </li>
          <li>
            <Link to="#">
              <div className="icons">
                <img src={sales} alt="dashbord" />
              </div>
              <span class="link_names">Sales</span>
            </Link>
            <span class="tooltip">Sales</span>
          </li>
          <li>
            <Link to="#">
              <div className="icons">
                <img src={Products} alt="dashbord" />
              </div>

              <span class="link_names">Products</span>
            </Link>
            <span class="tooltip">Products</span>
          </li>
          <li>
            <Link to="#">
              <div className="icons">
                <img src={Audience} alt="dashbord" />
              </div>

              <span class="link_names">Audience</span>
            </Link>
            <span class="tooltip">Audience</span>
          </li>
        </ul>
        <ul class="nav_list">
          <li>
            <Link to="#">
              <div className="icons lang">
                <img src={English} alt="dashbord" />
              </div>

              <span class="link_names">English</span>
            </Link>
            <span class="tooltip">English</span>
          </li>
          <li>
            <NavLink to="/setting" state={{path: "Settings"}}>
              <div className="icons">
                <img src={Settings} alt="dashbord" />
              </div>
              <span class="link_names">Settings</span>
            </NavLink>
            <span class="tooltip">Settings</span>
          </li>
          <li>
            <Link to="#">
              <div className="icons">
                <img src={Logout} alt="dashbord" />
              </div>

              <span class="link_names">Logout</span>
            </Link>
            <span class="tooltip">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SlideBar;
