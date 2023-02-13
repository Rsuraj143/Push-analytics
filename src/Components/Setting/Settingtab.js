import React from 'react'
import "./Settingtab.css";
import { Col, Form, Nav, Row, Tab } from 'react-bootstrap'

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
              <div className='Profile-tab-details'>
                <h6>Personal info</h6>
                <p>Update your photo and personal details.</p>
                <Form>
                <Row>
                  <Col sm={6} >
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>First name</Form.Label>
                  <Form.Control type="text" placeholder="First name" />
                </Form.Group>
                  </Col>
                  <Col sm={6} >
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control type="text" placeholder="Last name" />
                </Form.Group>
                  </Col>
              </Row>
                  
              </Form> 
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="Team">
              uygn  yhbnjhn u8njn unjn unj mnu8n ujm j i ik jioi9 i i0ko   i9iiko i
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