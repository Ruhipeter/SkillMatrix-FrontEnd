import React, { useState , useEffect} from "react";
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

    const [empName,setEmpName] = useState("")
    const [empEmail,setEmpMail] = useState("")
    const [empCode,setEmpCode] = useState("")
    const [empBand,setEmpBand] = useState("")
    const [empDesig,setEmpDesig] = useState("")
    const [empDept,setEmpDept] = useState("")
    const [empLocation,setEmpLocation] = useState("")
    const [empPassword,setEmpPassword] = useState("")
    const [empTeam,setEmpTeam] = useState("")
    const [empManager,setEmpManager] = useState("")

    const [teamDB, setTeamDB] = useState([])
    const [ManagerDB , setManagerDB] = useState([])
    const teamURL = "https://localhost:7074/api/Team/GetAllTeams"
    const managerURL = "https://localhost:7074/api/Manager/GetAllManagers"
    const empDataURL = "https://localhost:7074/api/Employee/CreateEmployee" 

    useEffect(()=>{
      async function teamAPI() {
        await axios.get(teamURL).then((response) => {
          setTeamDB(response.data)
        });
      }
      teamAPI();
    },[])

    useEffect(()=>{
      async function managerAPI() {
        await axios.get(managerURL).then((response) => {
          setManagerDB(response.data)
        });
      }
      managerAPI();
    },[])


    const handleSubmit =(e)=>{
      e.preventDefault()
      const empData={
        "id": 0,
        "name": empName,
        "email": empEmail,
        "password": empPassword,
        "employeeCode": empCode,
        "reportingManager": empManager,
        "location": empLocation,
        "department": empDept,
        "team": empTeam,
        "band": empBand,
        "designation": empDesig,
        "status": true
      }
      console.log(empData)
      localStorage.setItem("TeamId", empTeam);
        
          axios.post(empDataURL, empData)
            .then((response) => {
              console.log(response);
              localStorage.setItem("EmpId", response.data.id);
            })
            .catch((err) => console.log(err));
        
        // empAPI();
        navigate('/SkillMatrix');
  }
  
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
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Employee Name</Form.Label>
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Enter Name" onChange={e => setEmpName(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Enter Email</Form.Label>
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Enter Email" onChange={e => setEmpMail(e.target.value)}
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Employee Code</Form.Label>
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Enter Employee Code" onChange={e => setEmpCode(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Employee Band</Form.Label>
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Enter Employee Band" onChange={e => setEmpBand(e.target.value)}
                      />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-4" controlId="formGridAddress1">
                    <Form.Label>Employee Designation</Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Enter Employee Designation" onChange={e => setEmpDesig(e.target.value)}
                    />
                  </Form.Group>

                  <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Reporting Manager</Form.Label>
                      <Form.Select
                        size="lg"
                        defaultValue="Select Reporting Managers"  onChange={e => setEmpManager(e.target.value)}
                      >
                        <option >Select Reporting Manager</option>
                        {ManagerDB.map((data)=>(
                          <option value={data.id} key={data.id}>{data.name}</option>
                        ))}

                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Department</Form.Label>
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Enter Employee Department"   onChange={e => setEmpDept(e.target.value)}
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Employee Team</Form.Label>
                      <Form.Select
                        size="lg"
                        defaultValue="Select Employee Team" onChange={e => setEmpTeam(e.target.value)}
                      >
                        <option >Select Team</option>
                        {teamDB.map((data)=>(
                          <option value={data.id} key={data.id}>{data.name}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Location</Form.Label>
                      <Form.Select
                        size="lg"
                        defaultValue="Select Employee Team"  onChange={e => setEmpLocation(e.target.value)}
                      >
                        <option>Select Employee Location</option>
                        <option>Gurugram</option>
                        <option>Noida</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>

                  <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Col xs={6}>
                      <Form.Label>Employee Login Password </Form.Label> 
                      <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Enter Login Password"  onChange={e => setEmpPassword(e.target.value)}
                      />
                      </Col>
                    </Form.Group>
                  </Row> 

                  <Button type="submit" onClick={(e)=>handleSubmit(e)} className="submitBtn">
                    Submit Details
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
          <div className="col-11 col-md-3 col-sm-11 m-sm-5 m-md-0">
            <div style={{marginTop:'150px'}}>
              <h5>Steps To Follow </h5>
              <Card
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  backgroundColor: "#0d6efd",
                  color: "white",
                }}
              >
                <Card.Body style={{padding:'10px'}}>
                  <Card.Title style={{ fontSize: "23px" , lineHeight:'2'}}>
                    Employee Basic Details <img style={{height:'45px',width:'45px',float:"right"}} src="https://img.icons8.com/ios-glyphs/170/ffffff/ok--v1.png"/>
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
