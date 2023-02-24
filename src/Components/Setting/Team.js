import React from "react";
import "./Settingtab.css";
import {Col,Form, Row,Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import deleteicon from "../../Images/deleteicon.svg";
import editicon from "../../Images/editicon.svg";

const Team = () => {
  return (
    <div>
      <div className="personal-info invite">
        <div className="tab-heading">
          <h6>Invite members</h6>
        </div>
        <Form className="account-form">
          <Row>
            <Col xl={5}>
              <Form.Group
                className="user-group"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email users</Form.Label>
                <Form.Control
                  type="email"
                  className="user-input"
                  placeholder="Email users"
                />
              </Form.Group>
            </Col>
            <Col xl={5}>
              <div className="user-group">
                <Form.Label>Select</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Role</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </Col>
            <Col xl={2} className="align-self-end">
              <Button href="#" className="my-button blue">
                Send invite
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="tabel-main">
        <Table hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>
                Last active
                <div className="active-icon">
                  <AiOutlineQuestionCircle />
                </div>
                <p className="active-text">
                  The last time a user was logged in and active
                </p>
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="name-box d-flex align-items-center">
                  <div className="name-round">
                    <p>CW</p>
                  </div>
                  <div className="name-details">
                    <h6>Candice Wu</h6>
                    <p>@candice</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="admin">Admin</div>
              </td>
              <td>4 days ago</td>
              <td>
                <div className="icon-box">
                  <img src={deleteicon} alt="delete" />
                  <img src={editicon} alt="edit" />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="name-box d-flex align-items-center">
                  <div className="name-round">
                    <p>CW</p>
                  </div>
                  <div className="name-details">
                    <h6>Candice Wu</h6>
                    <p>@candice</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="admin user">user</div>
              </td>
              <td>4 days ago</td>
              <td>
                <div className="icon-box">
                  <img src={deleteicon} alt="delete" />
                  <img src={editicon} alt="edit" />
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Team;
