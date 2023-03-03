import React from 'react'
import "./Settingtab.css";
import { Col,Form,Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";


const Notification = () => {
  return (
    <div className="notification-main">
                    <div className="notification">
                      <Row className="">
                        <Col xl={4} lg={5}>
                          <div className="notification-left">
                            <Form className="account-form">
                              <div className="tab-heading">
                                <h6>Daily Flash</h6>
                                <p>
                                  If notifications are enabled, Daily Flash
                                  update will be sent at 9AM.
                                </p>
                              </div>
                              <Form.Group
                                className=""
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Select time</Form.Label>
                                <Form.Control
                                  type="time"
                                  value="09:00"
                                  className="user-input"
                                  placeholder="time"
                                />
                              </Form.Group>
                            </Form>
                          </div>
                        </Col>
                        <Col xl={8} lg={7}>
                          <div className="notification-right">
                            <Form className="notification-form">
                              <Form.Check
                                label="Email"
                                type="switch"
                                id="custom-switch"
                              />
                              <Form.Check
                                label="Push"
                                type="switch"
                                id="custom-switch"
                              />
                              <Form.Check
                                label="SMS"
                                type="switch"
                                id="custom-switch"
                              />
                            </Form>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="notification">
                      <Row className="">
                        <Col xl={4} lg={5}>
                          <div className="notification-left">
                            <Form className="account-form">
                              <div className="tab-heading">
                                <h6>Live View </h6>
                                <p>
                                  Live View Notifications will be sent 12PM
                                  local time.
                                </p>
                              </div>
                              <Form.Group
                                className=""
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Select time</Form.Label>
                                <Form.Control
                                  type="time"
                                  value="12:00"
                                  className="user-input"
                                  placeholder="time"
                                />
                              </Form.Group>
                            </Form>
                          </div>
                        </Col>
                        <Col xl={8} lg={7}>
                          <div className="notification-right">
                            <Form className="notification-form">
                              <Form.Check
                                label="Email"
                                type="switch"
                                id="custom-switch"
                              />
                              <Form.Check
                                label="Push"
                                type="switch"
                                id="custom-switch"
                              />
                              <Form.Check
                                label="SMS"
                                type="switch"
                                id="custom-switch"
                              />
                            </Form>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="text-sm-end text-center button-box">
                      <Button
                        href="#"
                        className="my-button my-button-transparent"
                      >
                        Cancel
                      </Button>
                      <Button href="#" className="my-button">
                        Save changes
                      </Button>
                    </div>
                  </div>
  )
}

export default Notification
