import React, { useState, useEffect } from "react";
import axios from "axios";
import appCss from "../css/App.css";
import navCss from "../css/nav.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import vinoveLogo from "../images/vinoveLogo.webp";
import { useNavigate } from "react-router-dom";

function TopBar() {
  let navigate = useNavigate();

  const [empDB, setEmpDB] = useState([]);
  const empId = localStorage.getItem("EmpId");
  const empURL = `https://localhost:7074/api/Employee/GetEmployeeByEmpId?empId=${empId}`;

  useEffect(() => {
    async function empAPI() {
      await axios.get(empURL).then((response) => {
        setEmpDB(response.data[0]);
      });
    }
    empAPI();
  }, []);
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="p-1"
      expand="md"
      style={{ position: "sticky" }}
      fixed="top"
    >
      <Navbar.Brand style={{ fontWeight: "500" }}>
        <Link to="/home">
          <img
            style={{ height: "40px", width: "180px", marginLeft: "10px" }}
            src={vinoveLogo}
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavDropdown title={empDB.name} id="basic-nav-dropdown">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logout}> Logout</NavDropdown.Item>
          </NavDropdown>
          <img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-7--v2.png" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopBar;
