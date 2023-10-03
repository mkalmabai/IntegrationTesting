import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
  
const DonationForm = (props) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string()
      .email("You have enter an invalid email address")
      .required("Required"),
    blood_type: Yup.string()
      .required("Required"),
    number_of_packets: Yup.number()
      .positive("Invalid roll number_of_packets")
      .integer("Invalid roll number_of_packets")
      .required("Required"),
      
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
        <FormGroup>
          <label htmlFor="">First Name</label>
            <Field name="firstName" type="text" 
                className="form-control" />
            <ErrorMessage
              name="firstName"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <label htmlFor="">Last Name</label>
            <Field name="lastName" type="text" 
                className="form-control" />
            <ErrorMessage
              name="lastName"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <label htmlFor="">Email</label>
            <Field name="email" type="text" 
                className="form-control" />
            <ErrorMessage
              name="email"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <label htmlFor="">Blood Type</label>
            <Field name="blood_type" type="text" 
                className="form-control" />
            <ErrorMessage
              name="blood_type"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <label htmlFor="">Number of packets</label>
            <Field name="number_of_packets" type="number" 
                className="form-control" />
            <ErrorMessage
              name="number_of_packets"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button variant="danger" size="lg" 
            block="block" type="submit" className="my-4">
            {props.children} 
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
  
export default DonationForm;