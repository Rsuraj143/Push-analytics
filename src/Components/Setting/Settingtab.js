
import "./Settingtab.css";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import PersonalInfo from "./PersonalInfo";
import Team from "./Team";
import Integration from "./Integration";
import Goal from "./Goal";
import Security from "./Security";
import Notification from "./Notification";

const Settingtab = () => {
  return (
    <div>
      <div className="main-heading">
        <h1>Settings</h1>
      </div>
      <div className="setting-tabs">
        <Tab.Container id="left-tabs-example" defaultActiveKey="Profile">
          <Row>
            <Col lg={3} className="mb-lg-0 mb-md-3">
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
            <Col lg={9}>
              <Tab.Content>
                <Tab.Pane eventKey="Profile">
                  <PersonalInfo />
                </Tab.Pane>
                <Tab.Pane eventKey="Team">
                  <Team />
                </Tab.Pane>
                <Tab.Pane eventKey="Integration">
                  <Integration />
                </Tab.Pane>
                <Tab.Pane eventKey="Goal">
                  <Goal />
                </Tab.Pane>
                <Tab.Pane eventKey="Security">
                  <Security />
                </Tab.Pane>
                <Tab.Pane eventKey="Notification">
                  <Notification />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Settingtab;
