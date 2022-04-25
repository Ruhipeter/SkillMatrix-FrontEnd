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
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Button,
  FormControl,
  InputGroup,
  Form,
  Row,
  Col,
} from "react-bootstrap";

export default function ReviewDetails() {
  let navigate = useNavigate();
  const empId = localStorage.getItem("NewEmpId");
  const teamId = localStorage.getItem("TeamId");

  const empDataURL = `https://localhost:7074/api/Employee/GetEmployeeByEmpId?empId=${empId}`;
  const empQuesURL = `https://localhost:7074/api/EmployeeQuestions/GetQuestionsByEmpId?empId=${empId}`;
  const empTeamQuesURL = `https://localhost:7074/api/EmployeeTeamQuestions/GetQuestionsByEmpIdandTeamId?empId=${empId}&teamId=${teamId}`;

  const [empDB, setEmpDB] = useState([]);
  const [empQuesDB, setEmpQuesDB] = useState([]);
  const [empTeamQuesDB, setEmpTeamQuesDB] = useState([]);

  useEffect(() => {
    async function empAPI() {
      await axios.get(empDataURL).then((response) => {
        setEmpDB(response.data);
      });
    }
    async function empQuesAPI() {
      await axios.get(empQuesURL).then((response) => {
        setEmpQuesDB(response.data);
      });
    }
    async function empTeamQuesAPI() {
      await axios.get(empTeamQuesURL).then((response) => {
        setEmpTeamQuesDB(response.data);
      });
    }
    empAPI();
    empQuesAPI();
    empTeamQuesAPI();
  }, []);

  console.log(empDB);
  console.log(empQuesDB);
  console.log(empTeamQuesDB);

  const handleSubmitBtn = (e) => {
    console.log("Done");
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
            className="col-11 col-md-9 col-sm-11"
            style={{ marginLeft: "20px" }}
          >
            <h4 style={{ marginTop: "20px" }}>Employee Basic Details</h4>
            <Card
              style={{
                marginTop: "20px",
                marginBottom: "10px",
                padding: "10px",
              }}
            >
              <div className="row">
                <div className="col-md-2">
                  <img
                    src="https://img.icons8.com/bubbles/160/000000/user.png"
                    style={{
                      height: "220px",
                      width: "250px",
                      marginRight: "10px",
                    }}
                  />
                </div>
                <div className="col-md-8">
                  {empDB.length > 0 && (
                    <Card.Body>
                      <h1>{empDB[0].name}</h1>
                      <div>
                        <div className="row">
                          <div className="col-3 col-md-4">
                            <LocationOnIcon /> {empDB[0].location}
                          </div>
                          <div className="col-3 col-md-4">
                            <MailOutlineIcon />{" "}
                            <a
                              href="mailto:ruhi.peter@mail.vinove.com"
                              className="email"
                            >
                              {empDB[0].userName}
                            </a>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className=" col-6 col-md-3 ">
                            <label
                              className="job title"
                              style={{ color: "#41464b" }}
                            >
                              JOB TITLE
                            </label>
                            <p>{empDB[0].designation}</p>
                          </div>
                          <div className="col-6 col-md-3  ">
                            <label
                              className="DEPARTMENT"
                              style={{ color: "#41464b" }}
                            >
                              DEPARTMENT
                            </label>
                            <p>{empDB[0].department}</p>
                          </div>
                          <div className="col-6 col-md-3 ">
                            <label
                              className="bussiness unit"
                              style={{ color: "#41464b" }}
                            >
                              BUSSINESS UNIT
                            </label>
                            <p>Services</p>
                          </div>
                          <div className="col-6 col-md-3">
                            <label
                              className="reporting"
                              style={{ color: "#41464b" }}
                            >
                              REPORTING TO
                            </label>
                            <p>{empDB[0].reportingManager}</p>
                          </div>
                          <div className="col-6 col-md-3 mt-md-3 ">
                            <label
                              className="EmpNo"
                              style={{ color: "#41464b" }}
                            >
                              EMP NO
                            </label>
                            <p>{empDB[0].employeeCode}</p>
                          </div>
                          <div className="col-6 col-md-3  mt-md-3">
                            <label
                              className="team"
                              style={{ color: "#41464b" }}
                            >
                              Team
                            </label>
                            <p>{empDB[0].team}</p>
                          </div>
                          <div className="col-6 col-md-3 mt-md-3 ">
                            <label
                              className="band"
                              style={{ color: "#41464b" }}
                            >
                              Band
                            </label>
                            <p>{empDB[0].band}</p>
                          </div>

                          <hr style={{ marginTop: "15px" }} />
                        </div>
                      </div>
                    </Card.Body>
                  )}
                </div>
                <div className="col-md-2">
                <Card style={{marginTop:'10px',marginBottom:'10px',width:'100%'}}>
                          <Card.Body style={{padding:'10px',backgroundColor:'#273143',borderRadius:'6px'}}>
                            <span style={{color:'white',fontSize:'18px',fontWeight:'600'}}>Employee Created</span>
                            <img style={{height:'30px',width:'30px',float:'right'}} src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/124/ffffff/external-approved-tick-mark-button-to-choose-correct-basic-bold-tal-revivo.png"/>
                          </Card.Body>
                        </Card>
                </div>
              </div>
            </Card>

            <div className="col-md-8">
              <h4 style={{ marginTop: "20px" }}>General Skills</h4>
              <Card
                style={{
                  marginTop: "20px",
                  marginBottom: "10px",
                  padding: "10px",
                }}
              >
                <div className="row">
                  <div className="col-md-12">
                    {empQuesDB.length > 0 && (
                      <Card.Body>
                        <h6>Assigned Questionnaire</h6> <hr />
                        {empQuesDB.map((data) => (
                          <Card key={data.questionId} style={{marginTop:'10px',marginBottom:'10px',width:'50%'}}>
                            <Card.Body style={{padding:'10px',backgroundColor:'#273143',borderRadius:'6px'}}>
                              <span style={{color:'white',fontSize:'23px',fontWeight:'600'}}>{data.questionName}</span>
                              <img style={{height:'30px',width:'30px',float:'right'}} src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/124/ffffff/external-approved-tick-mark-button-to-choose-correct-basic-bold-tal-revivo.png"/>
                            </Card.Body>
                          </Card>
                        ))}
                      </Card.Body>
                    )}
                  </div>
                </div>
              </Card>
            </div>

            <div className="col-md-8">
              <h4 style={{ marginTop: "20px" }}>Team Skills</h4>
              <Card
                style={{
                  marginTop: "20px",
                  marginBottom: "10px",
                  padding: "10px",
                }}
              >
                <div className="row">
                  <div className="col-md-12">
                    {empTeamQuesDB.length > 0 && (
                      <Card.Body>
                        <h6>Assigned Questionnaire</h6> <hr />
                        {empTeamQuesDB.map((data) => (
                          <Card key={data.teamSkillId} style={{marginTop:'10px',marginBottom:'10px',width:'50%'}}>
                          <Card.Body style={{padding:'10px',backgroundColor:'#273143',borderRadius:'6px'}}>
                            <span style={{color:'white',fontSize:'23px',fontWeight:'600'}}>{data.teamSkillName}</span>
                            <img style={{height:'30px',width:'30px',float:'right'}} src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/124/ffffff/external-approved-tick-mark-button-to-choose-correct-basic-bold-tal-revivo.png"/>
                          </Card.Body>
                        </Card>
                        ))}
                      </Card.Body>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
