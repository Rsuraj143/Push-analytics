import "./Settingtab.css";
import React, { useEffect, useState } from "react";
import {Col,Dropdown,DropdownButton,Form,InputGroup,Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import * as yup from "yup";
import { Formik } from "formik";
import upload from "../../Images/upload.svg";
import uploaduser from "../../Images/uploaduser.svg";
import { AiFillCloseCircle } from "react-icons/ai";

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
  currentPassword: yup
    .string()
    .min(5, "Atleast 6 characters long")
    .max(50, "Too Long")
    .required(),
  newPassword: yup
    .string()
    .min(5, "Atleast 6 characters long")
    .max(50, "Too Long")
    .required(),
  confirmPassword: yup
    .string()
    .required("Required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
const PersonalInfo = () => {
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
            <Form className="account-form" noValidate onSubmit={handleSubmit}>
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
                      isInvalid={touched.firstName && !!errors.firstName}
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
                      isInvalid={touched.lastName && !!errors.lastName}
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
                      isInvalid={touched.email && !!errors.email}
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
                          active={res.code === value.code ? true : false}
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
                          <span>Click to upload</span> or drag and drop{" "}
                          <br></br>
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
                      isValid={
                        touched.currentPassword && !errors.currentPassword
                      }
                      isInvalid={
                        touched.currentPassword && !!errors.currentPassword
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.currentPassword}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                      isInvalid={touched.newPassword && !!errors.newPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.newPassword}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                        !errors.confirmPassword && touched.confirmPassword
                      }
                      isInvalid={
                        touched.confirmPassword && errors.confirmPassword
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword}
                    </Form.Control.Feedback>

                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <div className="text-lg-end text-md-start button-box">
                <Button href="#" className="my-button my-button-transparent">
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
    </div>
  );
};

export default PersonalInfo;
