import React from "react";
import { Formik, Field, Form } from "formik";
import "./ContactUs.css";
import { Row, Col, Stack } from "react-bootstrap";

function ContactUs() {
  return (
    <div className="container">
      <div className="contact-wrapper">
        <Row className="justify-content-center">
          <Col md="4" lg="3">
            <h1 className="title">Contact Us</h1>
          </Col>
        </Row>

        <Formik
          className="form-control"
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
            // console.log("Form data", values);
          }}
        >
          <Form>
            <Row>
              <Col md={3} lg={2}>
                <label htmlFor="firstName" className="label-title">
                  First Name :
                </label>
              </Col>
              <Col>
                <Field
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="input-text"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col md={3} lg={2}>
                <label htmlFor="lastName" className="label-title">
                  Last Name :
                </label>
              </Col>
              <Col>
                <Field
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="input-text"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col md={3} lg={2}>
                <label htmlFor="lastName" className="label-title">
                  Mobile Number :
                </label>
              </Col>
              <Col>
                <Field
                  id="mobilenumber"
                  name="mobilenumber"
                  placeholder="+1"
                  className="input-text"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col md={3} lg={2}>
                <label htmlFor="email" className="label-title">
                  Email :
                </label>
              </Col>
              <Col>
                <Field
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="input-text"
                  type="email"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label className="label-title">Service Requested :</label>
              </Col>
            </Row>
            <Row>
              <Col sm md>
                <Field
                  type="checkbox"
                  name="service"
                  value="Oil Change"
                  className="input-checkbox"
                />
                <label>Oil Change</label>
              </Col>
              <Col sm md>
                <Field
                  type="checkbox"
                  name="service"
                  value="Tire Change"
                  className="input-checkbox"
                />
                <label>Tire Change</label>
              </Col>
              <Col sm md>
                <Field
                  type="checkbox"
                  name="service"
                  className="input-checkbox"
                  value="AC Recharge"
                />
                <label>AC Recharge</label>
              </Col>
              <Col sm md>
                <Field
                  type="checkbox"
                  name="service"
                  value="Wheel Alignment"
                  className="input-checkbox"
                />
                <label>Wheel Alignment</label>
              </Col>
            </Row>
            <Row>
              <Col sm md>
                <Field
                  type="checkbox"
                  name="service"
                  value="Car Detailing"
                  className="input-checkbox"
                />
                <label>Car Detailing</label>
              </Col>
              <Col sm md>
                <Field
                  type="checkbox"
                  name="service"
                  value="Windshield Replacement"
                  className="input-checkbox"
                />
                <label>Windshield Replacement</label>
              </Col>
              <Col sm md>
                <Field
                  type="checkbox"
                  name="service"
                  value="Mechanical Repairs"
                  className="input-checkbox"
                />
                <label>Mechanical Repairs</label>
              </Col>
              <Col sm md>
                <Field
                  type="checkbox"
                  name="service"
                  value="Car Service"
                  className="input-checkbox"
                />
                <label>Car Service</label>
              </Col>
            </Row>
            <Row>
              <Col md={3} lg={2}>
                <label htmlFor="carDetails" className="label-title">
                  Car Details :
                </label>
              </Col>
              <Col>
                <Field
                  id="carYear"
                  name="carYear"
                  placeholder="Year - YYYY"
                  className="input-text"
                />
              </Col>
              <Col>
                <Field
                  id="carModel"
                  name="carModel"
                  placeholder="Make - Model"
                  className="input-text"
                />
              </Col>
            </Row>
            <Row>
              <Col md={3} lg={2}>
                <label htmlFor="carDetails" className="label-title">
                  Preferred Date :
                </label>
              </Col>
              <Col>
                <Field
                  id="prefDate"
                  name="prefDate"
                  placeholder="DD/MM/YYYY"
                  className="input-text"
                  type="date"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label className="label-title">Comments :</label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Field
                  id="comments"
                  name="comments"
                  placeholder="Type here..."
                  className="input-text"
                />
              </Col>
            </Row>
            <Stack gap={2} className="col-md-5 mx-auto">
              <button type="submit" className="btns  btn--primary btn--medium">
                Submit
              </button>
            </Stack>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default ContactUs;
