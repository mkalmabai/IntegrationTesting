import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import DonorsTableRow from "./DonorsTableRow";

const DonorsList = () => {
  const [donors, setDonors] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:4000/donors/")
      .then(({ data }) => {
        setDonors(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return donors.map((res, i) => {
      return <DonorsTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
          <th>First Name</th>
  <th>Last Name</th>
  <th>Email</th>
  <th>Blood type</th>
  <th>Number of packets</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default DonorsList;