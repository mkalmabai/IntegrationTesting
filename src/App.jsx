import React from "react";
  
// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } 
        from "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Routes,
    Route, Link } from "react-router-dom";
  
// Import other React Component
import EditDonor from "./components/edit_donor";
import RegisterDonation from "./components/register_donor";
import DonorsList from "./components/donors_list";
  
// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-donor"} 
                  className="nav-link">
                  Blood Bank
                </Link>
              </Navbar.Brand>
  
              <Nav className="justify-content-end">
                <Nav>
                  <Link to="/create-donor"
                    className="nav-link">
                    Register Donor
                  </Link>
                </Nav>
  
                <Nav>
                  <Link to="/donors-list"
                    className="nav-link">
                    Donors List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
  
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                <Route exact path="/" element={<RegisterDonation/>} />
                  <Route path="/create-donor" element={<RegisterDonation/>} />
                  <Route path="/edit-donor/:id" element={<EditDonor/>} />
                  <Route path="/donors-list" element={<DonorsList/>} />
                </Routes>
           
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};
  
export default App;