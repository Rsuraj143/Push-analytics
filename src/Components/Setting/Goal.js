import React, { useState } from "react";
import "./Settingtab.css";
import {Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import goaledit from "../../Images/goaledit.svg";


const Goal = () => {
    const [isShown, setIsShown] = useState(false);
  return (
    <div className="goal-main">
      <div className="goal">
        <div className="tabel-main">
          <Table hover>
            <thead>
              <tr>
                <th>Goal</th>
                <th>Target</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sales</td>
                <td>11000 $</td>
              </tr>
              <tr>
                <td>Orders</td>
                <td
                  className={isShown ? "on-hover" : ""}
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  1000
                  {isShown && <img src={goaledit} alt="goaledit" />}
                </td>
              </tr>
              <tr>
                <td>AOV</td>
                <td>120 $</td>
              </tr>
              <tr>
                <td>Sessions</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>Conv rate</td>
                <td>15%</td>
              </tr>
              <tr>
                <td>Spend</td>
                <td>1000 $</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="text-lg-end text-md-start button-box">
        <Button href="#" className="my-button my-button-transparent">
          Cancel
        </Button>
        <Button href="#" className="my-button">
          Save changes
        </Button>
      </div>
    </div>
  );
};

export default Goal;
