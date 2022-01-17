import React from "react";
import { Formik, Field, Form } from "formik";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="container">
      <h1>Contact Us</h1>
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
        }}
      >
        <Form>
          <label htmlFor="firstName" className="label-title">
            First Name
          </label>
          <Field id="firstName" name="firstName" placeholder="" required />
          <label htmlFor="lastName" className="label-title">
            Last Name
          </label>
          <Field id="lastName" name="lastName" placeholder="" required />
          <label htmlFor="lastName" className="label-title">
            Mobile Number
          </label>
          <Field
            id="mobilenumber"
            name="mobilenumber"
            placeholder=""
            type="tel"
          />
          <label htmlFor="email" className="label-title">
            Email
          </label>
          <Field id="email" name="email" placeholder="" type="email" required />
          <label className="label-title">Service Requested</label>
          <label>
            <Field
              type="checkbox"
              name="Service Requested"
              value="Oil Change"
              className="checkbox"
            />
            Oil Change
          </label>
          <label>
            <Field
              type="checkbox"
              name="Service Requested"
              value="Tire Change"
              className="checkbox"
            />
            Tire Change
          </label>
          <label>
            <Field
              type="checkbox"
              name="Service Requested"
              className="checkbox"
              value="AC Recharge"
            />
            AC Recharge
          </label>
          <label>
            <Field
              type="checkbox"
              name="Service Requested"
              value="Wheel Alignment"
              className="checkbox"
            />
            Wheel Alignment
          </label>
          <label>
            <Field
              type="checkbox"
              name="Service Requested"
              value="Car Detailing"
              className="checkbox"
            />
            Car Detailing
          </label>
          <label>
            <Field
              type="checkbox"
              name="Service Requested"
              value="Windshield Replacement"
              className="checkbox"
            />
            Windshield Replacement
          </label>
          <label>
            <Field
              type="checkbox"
              name="Service Requested"
              value="Mechanical Repairs"
              className="checkbox"
            />
            Mechanical Repairs
          </label>
          <label>
            <Field
              type="checkbox"
              name="Service Requested"
              value="Car Service"
              className="checkbox"
            />
            Car Service
          </label>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactUs;
