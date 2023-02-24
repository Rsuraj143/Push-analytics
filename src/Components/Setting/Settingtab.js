import React, { useEffect, useState } from "react";
import "./Settingtab.css";
import {
  Col,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Nav,
  Row,
  Tab,
  Table,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import deleteicon from "../../Images/deleteicon.svg";
import editicon from "../../Images/editicon.svg";
import googledrive from "../../Images/googledrive.svg";
import Facebook from "../../Images/Facebook.svg";
import goaledit from "../../Images/goaledit.svg";
import btnarrow from "../../Images/btnarrow.svg";
import upload from "../../Images/upload.svg";
import uploaduser from "../../Images/uploaduser.svg";
import * as yup from "yup";
import { Formik } from "formik";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .matches(/^[a-zA-Z][a-zA-Z ]*$/, "only alphabets and white space"),
  lastName: yup
    .string()
    .required()
    .matches(/^[a-zA-Z][a-zA-Z ]*$/, "only alphabets and white space"),
  email: yup
    .string()
    .required()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Invalid format"),
  number: yup.number().required(),
  currentPassword: yup.string()
    .min(5, "Atleast 6 characters long")
    .max(50, "Too Long")
    .required(),
  newPassword: yup.string()
    .min(5, "Atleast 6 characters long")
    .max(50, "Too Long")
    .required(),
  confirmPassword: yup.string()
    .required("Required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Settingtab = () => {
  const [isShown, setIsShown] = useState(false);
  const [file, setFile] = useState(null);
  const [country, setCountry] = useState([]);
  const [value, setValue] = useState("");
  const [phone, setPhone] = useState("");
  
  useEffect(() => {
    getcounty();
  }, []);

  const getcounty = async () => {
    const reqdata = await fetch(
      "https://cuik-projects.github.io/country-list/countries.json"
    );
    const resdata = await reqdata.json();
    console.log(resdata);
    const res = await resdata;
    setCountry(res);
    handleSelect(res.find((data) => data.code === "US"));
  };
  const handleSelect = (e) => {
    setValue(e);
  };
  const addPhoneNumber = (e) => {
    const [dial_code, number] = e.target.value.split(value.dial_code);
    setPhone(number.trim());
  };

  const handleSubmit = (values, event) => {
    console.log(values);
    console.log("form submit values", event);
  };
  
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
                  <div className="personal-info">
                    <div className="tab-heading">
                      <h6>Personal info</h6>
                      <p>Update your photo and personal details.</p>
                    </div>

                    <Formik
                      validationSchema={schema}
                      validateOnChange={false}
                      onSubmit={(values) => {
                      console.log(values);
                      }}
                      initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                      }}
                    >
                      {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
                      }) => (
                        <Form
                          className="account-form"
                          noValidate
                          onSubmit={handleSubmit}
                        >
                          <Row>
                            <Col lg={6}>
                              <Form.Group
                                className="user-group"
                                controlId="validationFormik01"
                              >
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="firstName"
                                  value={values.firstName}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isValid={touched.firstName && !errors.firstName}
                                  isInvalid={
                                    touched.firstName && !!errors.firstName
                                  }
                                  className="user-input"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.firstName}
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className="user-group">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="lastName"
                                  value={values.lastName}
                                  onChange={handleChange}
                                  isValid={touched.lastName && !errors.lastName}
                                  isInvalid={
                                    touched.lastName && !!errors.lastName
                                  }
                                  onBlur={handleBlur}
                                  className="user-input"
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.lastName}
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={6}>
                              <Form.Group className="user-group">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                  type="email"
                                  className="user-input"
                                  placeholder="Email"
                                  name="email"
                                  isValid={touched.email && !errors.email}
                                  isInvalid={
                                    touched.email && !!errors.email
                                  }
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.email}
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Label>Phone</Form.Label>
                              <InputGroup className="mb-3">
                                <DropdownButton
                                  variant="outline-secondary"
                                  title={value.code}
                                >
                                  {country.map((res) => (
                                    <Dropdown.Item
                                      key={res.code}
                                      title={res}
                                      eventKey={res.key}
                                      active={
                                        res.code === value.code ? true : false
                                      }
                                      onClick={() => handleSelect(res)}
                                    >
                                      {res.code}
                                    </Dropdown.Item>
                                  ))}
                                </DropdownButton>
                                <Form.Control
                                  className="user-input"
                                  aria-label="Text input with dropdown button"
                                  value={`${value.dial_code} ${phone}`}
                                  name="number"
                                  onChange={addPhoneNumber}
                                  onBlur={handleBlur}
                                />
                              </InputGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col
                              lg={2}
                              xxl={1}
                              className="mb-3 text-lg-start text-md-center"
                            >
                              <img
                                src={uploaduser}
                                className="uploaduser"
                                alt="uploaduser"
                              />
                            </Col>
                            <Col lg={10} xxl={11}>
                              <div className="upload-box">
                                <input
                                  type="file"
                                  name="file"
                                  id="file"
                                  className="d-none"
                                  onChange={(e) => {
                                    setFile(e.target.files[0]);
                                    e.target.value = null;
                                  }}
                                />
                                {!file ? (
                                  <label for="file">
                                    <img src={upload} alt="upload" />
                                    <p>
                                      <span>Click to upload</span> or drag and
                                      drop <br></br>
                                      SVG, PNG, JPG or GIF (max. 800x400px)
                                    </p>
                                  </label>
                                ) : (
                                  <div>
                                    {file?.name}
                                    <AiFillCloseCircle
                                      onClick={() => setFile(null)}
                                      className="close-file"
                                    />
                                  </div>
                                )}
                              </div>
                            </Col>
                          </Row>
                          <div className="text-lg-end text-md-start button-box">
                            <Button className="my-button my-button-transparent">
                              Cancel
                            </Button>
                            <Button type="submit" className="my-button">
                              Save changes
                            </Button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                  <div className="personal-info password">
                    <div className="tab-heading">
                      <h6>Password</h6>
                      <p>Update your password.</p>
                    </div>
                    <Formik
                      validationSchema={schema}
                      onSubmit={handleSubmit}
                      validateOnChange={false}
                      initialValues={{
                        currentPassword: "",
                        newPassword: "",
                        confirmPassword: "",
                      }}
                    >
                      {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
                        isValidating,
                      }) => (
                        <Form
                          className="account-form"
                          noValidate
                          onSubmit={(event) => handleSubmit(event)}
                        >
                          <Row>
                            <Col lg={6}>
                              <Form.Group
                                className="user-group"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Current password</Form.Label>
                                <Form.Control
                                  className="user-input"
                                  type="password"
                                  placeholder="Current password"
                                  name="currentPassword"
                                  value={values.currentPassword}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isValid={touched.currentPassword && !errors.currentPassword}
                                  isInvalid={
                                    touched.currentPassword && !!errors.currentPassword
                                  }
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.currentPassword}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>
                                  Looks good!
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                            <Col lg={6} className="d-flex align-items-center">
                              <p className="mb-lg-0 mb-md-3 forget-text">
                                Did you forget your password?
                              </p>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={6}>
                              <Form.Group
                                className="user-group mb-lg-0"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>New password</Form.Label>
                                <Form.Control
                                  className="user-input"
                                  type="password"
                                  placeholder="New password"
                                  name="newPassword"
                                  value={values.newPassword}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isValid={touched.newPassword && !errors.newPassword}
                                  isInvalid={
                                    touched.newPassword && !!errors.newPassword
                                  }
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.newPassword}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>
                                  Looks good!
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group
                                className="user-group mb-0"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Re-enter New Password</Form.Label>
                                <Form.Control
                                  className="user-input"
                                  type="password"
                                  placeholder="password"
                                  name="confirmPassword"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.confirmPassword}
                                  isValid={
                                    !errors.confirmPassword &&
                                    touched.confirmPassword
                                  }
                                  isInvalid={
                                    touched.confirmPassword &&
                                    errors.confirmPassword
                                  }
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.confirmPassword}
                                </Form.Control.Feedback>

                                <Form.Control.Feedback>
                                  Looks good!
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                          </Row>
                          <div className="text-lg-end text-md-start button-box">
                            <Button
                              href="#"
                              className="my-button my-button-transparent"
                            >
                              Cancel
                            </Button>
                            <Button type="submit" className="my-button">
                              Save changes
                            </Button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="Team">
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
                </Tab.Pane>

                <Tab.Pane eventKey="Integration">
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Elementum hac porttitor felis tristique quis
                          sagittis nec sed.
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Elementum hac porttitor felis tristique quis
                          sagittis nec sed.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="Goal">
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
                                {isShown && (
                                  <img src={goaledit} alt="goaledit" />
                                )}
                                {/* {isShown && <TbEdit/>} */}
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
                </Tab.Pane>
                <Tab.Pane eventKey="Security">
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
                            Use an authenticator app to generate one time
                            security codes.
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
                            Use your mobile phone to receive security codes via
                            SMS.
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
                </Tab.Pane>
                <Tab.Pane eventKey="Notification">
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
                    <div className="text-lg-end text-md-start button-box">
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
