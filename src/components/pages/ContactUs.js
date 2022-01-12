import React from "react";
import { Formik, Field, Form } from "formik";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div>
      <h1>Contact Us</h1>
      <Formik
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
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="" />
          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="" />
          <label htmlFor="lastName">Mobile Number</label>
          <Field
            id="mobilenumber"
            name="mobilenumber"
            placeholder=""
            type="tel"
          />
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="" type="email" />
          <label>
            <Field
              type="checkbox"
              name="Service Requested"
              value="Oil Change"
            />
            Oil Change
          </label>
          <label>
            <Field
              type="checkbox"
              name="Service Requested"
              value="Tire Change"
            />
            Tire Change
          </label>
          <label>
            <Field
              type="checkbox"
              name="Service Requested"
              value="AC Recharge"
            />
            AC Recharge
          </label>
          <label>
            <Field
              type="checkbox"
              name="Service Requested"
              value="Wheel Alignment"
            />
            Wheel Alignment
          </label>
          <label>
            <Field
              type="checkbox"
              name="Service Requested"
              value="Car Detailing"
            />
            Car Detailing
          </label>
          <label>
            <Field
              type="checkbox"
              name="Service Requested"
              value="Windshield Replacement"
            />
            Windshield Replacement
          </label>
          <label>
            <Field
              type="checkbox"
              name="Service Requested"
              value="Mechanical Repairs"
            />
            Mechanical Repairs
          </label>
          <label>
            <Field
              type="checkbox"
              name="Service Requested"
              value="Car Service"
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
