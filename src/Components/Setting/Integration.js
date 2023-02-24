import React from "react";
import "./Settingtab.css";
import { Col,Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import googledrive from "../../Images/googledrive.svg";
import Facebook from "../../Images/Facebook.svg";

const Integration = () => {
  return (
    <div>
      <Row>
        <Col xl={6} className="mb-xl-0 mb-3">
          <div className="integration-main">
            <div className="integrat-heading  d-flex justify-content-between">
              <div className="img-box d-flex align-items-center">
                <div className="icon">
                  <img src={googledrive} alt="googledrive" />
                </div>
                <span>Google Ads</span>
              </div>
              <div className="btn-box">
                <Button href="#" className="my-button blue">
                  Connect
                </Button>
              </div>
            </div>
            <div className="error-box">
              <span>Succes</span>
              <span className="error">error</span>
            </div>
            <p className="integrat-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              hac porttitor felis tristique quis sagittis nec sed.
            </p>
          </div>
        </Col>
        <Col xl={6}>
          <div className="integration-main">
            <div className="integrat-heading  d-flex justify-content-between">
              <div className="img-box d-flex align-items-center">
                <div className="icon">
                  <img src={Facebook} alt="Facebook" />
                </div>
                <span>Facebook Ads</span>
              </div>
              <div className="btn-box">
                <Button href="#" className="my-button">
                  Disconnect
                </Button>
              </div>
            </div>
            <p className="integrat-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              hac porttitor felis tristique quis sagittis nec sed.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Integration;
