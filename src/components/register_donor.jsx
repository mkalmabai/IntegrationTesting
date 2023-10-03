import React, { useState, useEffect } from "react";
import axios from 'axios';
import DonationForm from "./blood_donation";
  
// RegisterDonation Component
const RegisterDonation = () => {
  const [formValues, setFormValues] = useState({ firstName: '',lastName: '',email: '',  blood_type: '', number_of_packets: ''})
  // onSubmit handler
  const onSubmit = donationObject => {
    axios.post('http://localhost:4000/donors/create-donor', donationObject)
      .then(res => {
        if (res.status === 200)
          alert('Donor successfully registered')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    
  // Return Donation form
  return(
    <DonationForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Register Donor
    </DonationForm>
  )
}
  

export default RegisterDonation 