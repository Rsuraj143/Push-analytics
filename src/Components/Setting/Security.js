import React from "react";
import "./Settingtab.css";
import { Col, Row, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import btnarrow from "../../Images/btnarrow.svg";

const Security = () => {
  return (
    <div>
      <div className="security">
        <div className="tab-heading">
          <h6>Multi Factor Authentication</h6>
          <p>Setting up authentication</p>
        </div>
        <Row>
          <Col xl={6}>
            <div className="authentication-main mb-xl-0 mb-3">
              <div className="authentication-heading d-flex align-items-center justify-content-between">
                <h4>Authenticator App</h4>
                <span>Off</span>
              </div>
              <p className="authentication-text">
                Use an authenticator app to generate one time security codes.
              </p>
              <Button href="#" className="my-button blue">
                Set Up <img src={btnarrow} alt="btnarrow"></img>
              </Button>
            </div>
          </Col>
          <Col xl={6}>
            <div className="authentication-main">
              <div className="authentication-heading d-flex align-items-center justify-content-between">
                <h4>Text Message</h4>
                <span>Off</span>
              </div>
              <p className="authentication-text">
                Use your mobile phone to receive security codes via SMS.
              </p>
              <Button href="#" className="my-button blue">
                Set Up <img src={btnarrow} alt="btnarrow"></img>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="login-history">
        <div className="tab-heading">
          <h6>Login history</h6>
          <p>Your recent login activity:</p>
        </div>
        <Table hover>
          <thead>
            <tr>
              <th>LOGIN TYPE</th>
              <th>IP ADDRESS</th>
              <th>CLIENT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Credentials login <br></br> on 10:40 AM 2021/09/01
              </td>
              <td>59.136.15.84</td>
              <td>Chrome, Mac OS 10.12.6</td>
            </tr>
            <tr>
              <td>
                Credentials login <br></br> on 10:40 AM 2021/09/01
              </td>
              <td>59.136.15.84</td>
              <td>Chrome, Mac OS 10.12.6</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Security;
