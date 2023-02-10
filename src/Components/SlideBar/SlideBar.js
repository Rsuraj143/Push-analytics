import React from "react";
import "./SlideBar.css";
import { Link } from "react-router-dom";
import Liveview from "../../Images/Live-view.svg"
import dashbord from "../../Images/Dashboard.svg"
import DailyFlash from "../../Images/Daily-Flash.svg"
import sales from "../../Images/sales.svg"
import Products from "../../Images/Products.svg"
import Audience from "../../Images/Audience.svg"
import siderbarbtn from "../../Images/siderbar-btn.svg"
const SlideBar = () => {
  return (
    <div class="sidebar active">
      <div class="logo_content">
        <div class="logo">
          <div class="logoname" style={{ marginleft: "5px" }}>
            Push
          </div>
        </div>
        <img src={siderbarbtn} id="btn"  alt="dashbord"/>
      </div>
      <ul class="nav_list">
        <li>
          <Link to="#">
          <div className="icons">
              <img src={Liveview} alt="dashbord"/>
          </div>

            <span class="link_names">Live view</span>
          </Link>
          <span class="tooltip">Live view</span>
        </li>
        <li>
          <Link to="#">
      
           <div className="icons">
              <img src={dashbord} alt="dashbord"/>
          </div>
            <span class="link_names">Dashboard</span>
          </Link>
          <span class="tooltip">Dashboard</span>
        </li>
        <li>
          <Link to="#">
          <div className="icons">
              <img src={DailyFlash} alt="dashbord"/>
          </div>

            <span class="link_names">Daily Flash</span>
          </Link>
          <span class="tooltip">Daily Flash</span>
        </li>
        <li>
          <Link to="#">
          <div className="icons">
              <img src={sales} alt="dashbord"/>
          </div>
            <span class="link_names">Sales</span>
          </Link>
          <span class="tooltip">Sales</span>
        </li>
        <li>
          <Link to="#">
          <div className="icons">
              <img src={Products} alt="dashbord"/>
          </div>

            <span class="link_names">Products</span>
          </Link>
          <span class="tooltip">Products</span>
        </li>
        <li>
          <Link to="#">
          <div className="icons">
              <img src={Audience} alt="dashbord"/>
          </div>

            <span class="link_names">Audience</span>
          </Link>
          <span class="tooltip">Audience</span>
        </li>
      </ul>
      <div class="profile_content">
        <div class="profile">
          <div class="profile_details">
            <img
              src="https://vz.cnwimg.com/wp-content/uploads/2014/01/alex.jpg?x86007"
              alt=""
            />
            <div class="name_job">
              <div class="name">Name</div>
              <div class="job">Role</div>
            </div>
          </div>
          <i class="bx bx-log-out" id="log_out"></i>
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
