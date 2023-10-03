import React, { useState, useEffect } from "react";
import axios from "axios";
import DonationForm from "./blood_donation";
  
// EditDonor Component
const EditDonor = (props) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",  
    blood_type: "", 
    number_of_packets: ""
  });
    
  //onSubmit handler
  const onSubmit = (donorObject) => {
    axios
      .put(
        "http://localhost:4000/donors/update-donor/" +
          props.match.params.id,
          donorObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Donor successfully updated");
          props.history.push("/donor-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  // Load data from server and reinitialize donor form
  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/donors/update-donor/" 
        + props.match.params.id
      )
      .then((res) => {
        const { firstName,lastName, email, blood_type, number_of_packets } = res.data;
        setFormValues({ firstName,lastName, email, blood_type, number_of_packets});
      })
      .catch((err) => console.log(err));
  }, []);
  
  // Return Donor form
  return (
    <DonationForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Student
    </DonationForm>
  );
};
  
// Export EditStudent Component
export default EditDonor;