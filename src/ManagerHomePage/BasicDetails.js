import React, { useState, useEffect } from "react";
import Feeds from "../ManagerHomePage/feed";
import QuickAccess from "../ManagerHomePage/quickAccess";
import Sidebar from "../ManagerHomePage/sidebar";
import TopBar from "../ManagerHomePage/topBar";
import indexCss from "../css/index.css";
import basicDetailsCss from "../css/BasicDetails.css";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  InputGroup,
  Form,
  Row,
  Col,
} from "react-bootstrap";

export default function BasicDetails() {
  let navigate = useNavigate();

  const [empName, setEmpName] = useState("");
  const [empEmail, setEmpMail] = useState("");
  const [empCode, setEmpCode] = useState("");
  const [empBand, setEmpBand] = useState("");
  const [empDesig, setEmpDesig] = useState("");
  const [empDept, setEmpDept] = useState("");
  const [empLocation, setEmpLocation] = useState("");
  const [empPassword, setEmpPassword] = useState("");
  const [empTeam, setEmpTeam] = useState("");
  const [empManager, setEmpManager] = useState("");

  const [teamDB, setTeamDB] = useState([]);
  const [ManagerDB, setManagerDB] = useState([]);
  const teamURL = "https://localhost:7074/api/Team/GetAllTeams";
  const managerURL = "https://localhost:7074/api/Manager/GetAllManagers";
  const empDataURL = "https://localhost:7074/api/Employee/CreateEmployee";

  const [validated, setValidated] = useState(false);

  useEffect(() => {
    async function teamAPI() {
      await axios.get(teamURL).then((response) => {
        setTeamDB(response.data);
      });
    }
    teamAPI();
  }, []);

  useEffect(() => {
    async function managerAPI() {
      await axios.get(managerURL).then((response) => {
        setManagerDB(response.data);
      });
    }
    managerAPI();
  }, []);

  const handleSubmitBtn = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

    // empAPI();
    if (validated == true) {
      e.preventDefault();
      const empData = {
        id: 0,
        name: empName,
        email: empEmail,
        password: "string",
        employeeCode: empCode,
        reportingManager: empManager,
        location: empLocation,
        department: empDept,
        team: empTeam,
        band: empBand,
        designation: empDesig,
        status: true,
      };

      axios
        .post(empDataURL, empData)
        .then((response) => {
          console.log(response);
          localStorage.setItem("NewEmpId", response.data.id);
          localStorage.setItem("TeamId", response.data.team);
          const timer = setTimeout(() => {
            navigate("/SkillMatrix");
          }, 100);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <TopBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 col-md-1 col-sm-1 sideNav">
            <Sidebar />
          </div>

          <div
            className="col-11 col-md-7 col-sm-11"
            style={{ marginLeft: "20px" }}
          >
            <h4 style={{ marginTop: "20px" }}>Employee Basic Details</h4>
            <Card
              style={{
                marginTop: "30px",
                marginBottom: "20px",
                padding: "10px",
              }}
            >
              <Card.Body>
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmitBtn}
                >
                  <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label style={{ display: "flex" }}>
                        Employee Name{" "}
                        <p
                          style={{
                            color: "red",
                            fontSize: "18px",
                            marginLeft: "3px",
                          }}
                        >
                          *
                        </p>
                      </Form.Label>
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Enter Name"
                        required
                        onChange={(e) => setEmpName(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label style={{ display: "flex" }}>
                        Enter Email{" "}
                        <p
                          style={{
                            color: "red",
                            fontSize: "18px",
                            marginLeft: "3px",
                          }}
                        >
                          *
                        </p>
                      </Form.Label>
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Enter Email"
                        required
                        onChange={(e) => setEmpMail(e.target.value)}
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label style={{ display: "flex" }}>
                        Employee Code{" "}
                        <p
                          style={{
                            color: "red",
                            fontSize: "18px",
                            marginLeft: "3px",
                          }}
                        >
                          *
                        </p>
                      </Form.Label>
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Enter Employee Code"
                        required
                        onChange={(e) => setEmpCode(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Employee Band</Form.Label>
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Enter Employee Band"
                        onChange={(e) => setEmpBand(e.target.value)}
                      />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-4" controlId="formGridAddress1">
                    <Form.Label>Employee Designation</Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Enter Employee Designation"
                      onChange={(e) => setEmpDesig(e.target.value)}
                    />
                  </Form.Group>

                  <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label style={{ display: "flex" }}>
                        Reporting Manager{" "}
                        <p
                          style={{
                            color: "red",
                            fontSize: "18px",
                            marginLeft: "3px",
                          }}
                        >
                          *
                        </p>
                      </Form.Label>
                      <Form.Select
                        size="lg"
                        defaultValue="Select Reporting Managers"
                        onChange={(e) => setEmpManager(e.target.value)}
                      >
                        <option>Select Reporting Manager</option>
                        {ManagerDB.map((data) => (
                          <option value={data.id} key={data.id}>
                            {data.name}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Department</Form.Label>
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Enter Employee Department"
                        onChange={(e) => setEmpDept(e.target.value)}
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label style={{ display: "flex" }}>
                        Employee Team{" "}
                        <p
                          style={{
                            color: "red",
                            fontSize: "18px",
                            marginLeft: "3px",
                          }}
                        >
                          *
                        </p>
                      </Form.Label>
                      <Form.Select
                        size="lg"
                        defaultValue="Select Employee Team"
                        required
                        onChange={(e) => setEmpTeam(e.target.value)}
                      >
                        <option>Select Team </option>
                        {teamDB.map((data) => (
                          <option value={data.id} key={data.id}>
                            {data.name}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Location</Form.Label>
                      <Form.Select
                        size="lg"
                        defaultValue="Select Employee Team"
                        required
                        onChange={(e) => setEmpLocation(e.target.value)}
                      >
                        <option>Select Employee Location</option>
                        <option>Gurugram</option>
                        <option>Noida</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>

                  <Button
                    type="submit"
                    onClick={(e) => handleSubmitBtn(e)}
                    className="submitBtn"
                  >
                    Submit Details
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
          <div className="col-11 col-md-3 col-sm-11 m-sm-5 m-md-0">
            <div style={{ marginTop: "150px" }}>
              <h5>Steps To Follow </h5>
              <Card
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  backgroundColor: "#0d6efd",
                  color: "white",
                }}
              >
                <Card.Body style={{ padding: "10px" }}>
                  <Card.Title style={{ fontSize: "23px", lineHeight: "2" }}>
                    Employee Basic Details{" "}
                    <img
                      style={{ height: "45px", width: "45px", float: "right" }}
                      src="https://img.icons8.com/ios-glyphs/170/ffffff/ok--v1.png"
                    />
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                <Card.Body>
                  <Card.Title style={{ fontSize: "22px" }}>
                    Skill Matrix Details
                  </Card.Title>
                </Card.Body>
              </Card>

              <Card
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                <Card.Body>
                  <Card.Title style={{ fontSize: "22px" }}>
                    Team Skill Details
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
