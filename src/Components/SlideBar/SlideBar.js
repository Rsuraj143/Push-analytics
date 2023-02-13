import React, { useRef, useState } from "react";
import "./SlideBar.css";
import { Link } from "react-router-dom";
import Liveview from "../../Images/Live-view.svg";
import dashbord from "../../Images/Dashboard.svg";
import DailyFlash from "../../Images/Daily-Flash.svg";
import sales from "../../Images/sales.svg";
import Products from "../../Images/Products.svg";
import Audience from "../../Images/Audience.svg";
import siderbarbtn from "../../Images/siderbar-btn.svg";
import English from "../../Images/English.svg";
import Logout from "../../Images/Logout.svg";
import Settings from "../../Images/Settings.svg";

const SlideBar = () => {
  const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);

  const btnref = useRef();
  const handleSlide = () => {
    btnref.current.click();
    setClick(!click)
  };

  return (
    <div class={click ? "sidebar" : "sidebar active"}>
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
      </div>

      <div className="sidebar-box">
        <ul class="nav_list">
          <li>
            <Link to="#">
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
            <Link to="/dailyFlash">
              <div className="icons">
                <img src={DailyFlash} alt="dashbord" />
              </div>

              <span class="link_names">Daily Flash</span>
            </Link>
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
            <Link to="/setting">
              <div className="icons">
                <img src={Settings} alt="dashbord" />
              </div>
              <span class="link_names">Settings</span>
            </Link>
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
