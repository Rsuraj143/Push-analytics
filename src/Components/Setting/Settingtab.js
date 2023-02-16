import React from 'react'
import "./Settingtab.css";
import { Col, Dropdown, DropdownButton, Form, InputGroup, Nav, Row, Tab, Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
// import delete from "../../Images/delete.svg";
// import edit from "../../Images/edit.svg";
import deleteicon from "../../Images/deleteicon.svg"
import  editicon  from "../../Images/editicon.svg"



const Settingtab = () => {
  return (
    <div>
     <div className='main-heading'>
          <h1>Settings</h1>
      </div>
     <div className='setting-tabs'>
     <Tab.Container id="left-tabs-example" defaultActiveKey="Profile">
      <Row>
        <Col sm={2} >
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="Profile">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Team">Team</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Integration">Integration</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Goal">Goal</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Security">Security</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Notification">Notification</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="Profile">
              <div className='personal-info'>
              <div className='heading'>
                <h6>Personal info</h6>
                <p>Update your photo and personal details.</p>
              </div>
                <Form className='account-form'>
                <Row>
                  <Col sm={6} >
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>First name</Form.Label>
                  <Form.Control type="text" className='user-input' placeholder="First name" />
                </Form.Group>
                  </Col>
                  <Col sm={6} >
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control type="text" className='user-input' placeholder="Last name" />
                </Form.Group>
                  </Col>
              </Row>
              <Row>
                  <Col sm={6} >
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" className='user-input' placeholder="Email" />
                </Form.Group>
                  </Col>
                  <Col sm={6} >
                  <Form.Label>Phone</Form.Label>
                  <InputGroup className="mb-3">
                    <DropdownButton
                      variant="outline-secondary"
                      title="US"
                      id="input-group-dropdown-1">
                      <Dropdown.Item href="#">Action</Dropdown.Item>
                      <Dropdown.Item href="#">Another action</Dropdown.Item>
                      <Dropdown.Item href="#">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#">Separated link</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control className='user-input' placeholder="Phone" aria-label="Text input with dropdown button" />
                  </InputGroup>
                  </Col>
              </Row>
              <Row>
                <Col sm={12} >
                <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Control type="file" size="lg" />
                </Form.Group>
                </Col>
              </Row>
              
              </Form> 
              <div className='text-end button-box'>
                <Button href="#" className='my-button my-button-transparent'>Cancel</Button>
                <Button href="#" className='my-button'>Save changes</Button>
               </div>
              </div>
              <div className='personal-info password'>
               <div className='heading'>
                <h6>Password</h6>
                <p>Update your password.</p>
               </div>
                <Form className='account-form'>
                <Row>
                  <Col sm={6} >
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Current password</Form.Label>
                  <Form.Control type="text" className='user-input' placeholder="Current password" />
                </Form.Group>
                  </Col>
                  <Col sm={6} className="d-flex align-items-center" >
                  <p className='m-0 forget-text'>Did you forget your password?</p>
                  </Col>
              </Row>
              <Row>
                  <Col sm={6} >
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Current password</Form.Label>
                  <Form.Control type="email" className='user-input' placeholder="Current password" />
                </Form.Group>
                  </Col>
                  <Col sm={6} >
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Re-enter New Password</Form.Label>
                  <Form.Control type="email" className='user-input' placeholder="Re-enter New Password" />
                </Form.Group>
                  </Col>
              </Row>
              </Form> 
              <div className='text-end button-box'>
                <Button href="#" className='my-button my-button-transparent'>Cancel</Button>
                <Button href="#" className='my-button'>Save changes</Button>
               </div>
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="Team">
            <div className='personal-info invite'>
              <div className='heading'>
                <h6>Invite members</h6>
              </div>
                <Form className='account-form'>
              <Row>
                  <Col sm={5} >
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email users</Form.Label>
                  <Form.Control type="email" className='user-input' placeholder="Email users" />
                </Form.Group>
                  </Col>
                  <Col sm={5} >
                    <div className="mb-3">
                    <Form.Label >Select</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Role</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  </Col>
                  <Col sm={2} className="align-self-end mb-3" >
                    <Button href="#" className='my-button blue'>Send invite</Button>
                  </Col>
              </Row>
              </Form> 
            </div>
            <div className='tabel-main'>
            <Table  hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Last active 
                    <div className='active-icon'><AiOutlineQuestionCircle/>
                    </div>
                    <p className='active-text'>The last time a user was logged in and active</p>
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className='name-box d-flex align-items-center'>
                      <div className='name-round'>
                        <p>CW</p>
                      </div>
                      <div className='name-details'>
                        <h6>Candice Wu</h6>
                        <p>@candice</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='admin'>Admin</div>
                  </td>
                  <td>4 days ago</td>
                  <td>
                    <div className='icon-box'>
                    <img src={deleteicon} alt="delete" />
                    <img src={editicon} alt="edit" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='name-box d-flex align-items-center'>
                      <div className='name-round'>
                        <p>CW</p>
                      </div>
                      <div className='name-details'>
                        <h6>Candice Wu</h6>
                        <p>@candice</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='admin user'>Admin</div>
                  </td>
                  <td>4 days ago</td>
                  <td>
                    <div className='icon-box'>
                    <img src={deleteicon} alt="delete" />
                    <img src={editicon} alt="edit" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
            </div>
            </Tab.Pane>
            
            <Tab.Pane eventKey="Integration">
            <Row>
            <Col sm={6}>
            </Col>
            </Row>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
     </div>
    </div>
  )
}

export default Settingtab