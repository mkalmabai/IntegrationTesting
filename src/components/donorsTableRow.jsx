import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
  
const DonorsTableRow = (props) => {
  const { _id,firstName,lastName, email, blood_type, number_of_packets } = props.obj;
  
  const deleteDonor = () => {
    axios
      .delete(
"http://localhost:4000/students/delete-donor/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("Donor successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  return (
    <tr>
  <td>{firstName}</td>
  <td>{lastName}</td>
  <td>{email}</td>
  <td>{blood_type}</td>
  <td>{number_of_packets}</td>
      <td>
        <Link className="edit-link" 
          to={"/edit-donor/" + _id}>
          Edit
        </Link>
        <Button onClick={deleteDonor} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
  
export default DonorsTableRow;