import React from "react";
import "./SlideBar.css";
import { Link } from "react-router-dom";
import { BsRecordCircle } from 'react-icons/bs';
import{ RxDashboard} from 'react-icons/rx'

const SlideBar = () => {
  return (
    <div class="sidebar active">
      <div class="logo_content">
        <div class="logo">
          <div class="logoname" style={{ marginleft: "5px" }}>
            Push
          </div>
        </div>
        <img src="/img/siderbar-btn.svg" id="btn" alt="" />
      </div>
      <ul class="nav_list">
        <li>
          <i class="bx bx-search"></i>
          <input type="text" placeholder="Search..." />
          <span class="tooltip">Search</span>
        </li>
        <li>
          <Link to="#">
         <div className="icons">
              <BsRecordCircle />
         </div>

            <span class="link_names">Live view</span>
          </Link>
          <span class="tooltip">Live view</span>
        </li>
        <li>
          <Link to="#">
      
           <div className="icons">
              <RxDashboard/>
          </div>
            <span class="link_names">Dashboard</span>
          </Link>
          <span class="tooltip">Dashboard</span>
        </li>
        <li>
          <Link to="#">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 8V16M12.5 11V16M8.5 14V16M6.5 20H18.5C19.6046 20 20.5 19.1046 20.5 18V6C20.5 4.89543 19.6046 4 18.5 4H6.5C5.39543 4 4.5 4.89543 4.5 6V18C4.5 19.1046 5.39543 20 6.5 20Z"
                stroke="#94A3B8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="link_names">Daily Flash</span>
          </Link>
          <span class="tooltip">Daily Flash</span>
        </li>
        <li>
          <Link to="#">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5 13.2554C18.7207 14.3805 15.6827 15 12.5 15C9.3173 15 6.2793 14.3805 3.5 13.2554M16.5 6V4C16.5 2.89543 15.6046 2 14.5 2H10.5C9.39543 2 8.5 2.89543 8.5 4V6M12.5 12H12.51M5.5 20H19.5C20.6046 20 21.5 19.1046 21.5 18V8C21.5 6.89543 20.6046 6 19.5 6H5.5C4.39543 6 3.5 6.89543 3.5 8V18C3.5 19.1046 4.39543 20 5.5 20Z"
                stroke="#94A3B8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="link_names">Sales</span>
          </Link>
          <span class="tooltip">Sales</span>
        </li>
        <li>
          <Link to="#">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 11H5.5M19.5 11C20.6046 11 21.5 11.8954 21.5 13V19C21.5 20.1046 20.6046 21 19.5 21H5.5C4.39543 21 3.5 20.1046 3.5 19V13C3.5 11.8954 4.39543 11 5.5 11M19.5 11V9C19.5 7.89543 18.6046 7 17.5 7M5.5 11V9C5.5 7.89543 6.39543 7 7.5 7M7.5 7V5C7.5 3.89543 8.39543 3 9.5 3H15.5C16.6046 3 17.5 3.89543 17.5 5V7M7.5 7H17.5"
                stroke="#94A3B8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="link_names">Products</span>
          </Link>
          <span class="tooltip">Products</span>
        </li>
        <li>
          <Link to="#">
            <svg
              width="23"
              height="18"
              viewBox="0 0 23 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 17H21.5V15C21.5 13.3431 20.1569 12 18.5 12C17.5444 12 16.6931 12.4468 16.1438 13.1429M16.5 17H6.5M16.5 17V15C16.5 14.3438 16.3736 13.717 16.1438 13.1429M6.5 17H1.5V15C1.5 13.3431 2.84315 12 4.5 12C5.45561 12 6.30686 12.4468 6.85625 13.1429M6.5 17V15C6.5 14.3438 6.62642 13.717 6.85625 13.1429M6.85625 13.1429C7.5935 11.301 9.39482 10 11.5 10C13.6052 10 15.4065 11.301 16.1438 13.1429M14.5 4C14.5 5.65685 13.1569 7 11.5 7C9.84315 7 8.5 5.65685 8.5 4C8.5 2.34315 9.84315 1 11.5 1C13.1569 1 14.5 2.34315 14.5 4ZM20.5 7C20.5 8.10457 19.6046 9 18.5 9C17.3954 9 16.5 8.10457 16.5 7C16.5 5.89543 17.3954 5 18.5 5C19.6046 5 20.5 5.89543 20.5 7ZM6.5 7C6.5 8.10457 5.60457 9 4.5 9C3.39543 9 2.5 8.10457 2.5 7C2.5 5.89543 3.39543 5 4.5 5C5.60457 5 6.5 5.89543 6.5 7Z"
                stroke="#94A3B8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

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
