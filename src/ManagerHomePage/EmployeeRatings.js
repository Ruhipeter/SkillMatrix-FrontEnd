import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import TopBar from "./topBar";
import indexCss from "../css/index.css";
import ratingsCss from "../css/ratings.css";
import axios from "axios";
import { Button, FormControl, InputGroup, Form, Table } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import defaultPost from "../images/defaultPost.svg";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { listUserSkills } from "../Redux/actions/userSkillsActions";
import { useDispatch, useSelector } from "react-redux";
import EmployeeSkillRatings from "./EmployeeSkillRatings";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { listUserTeamSkills } from "../Redux/actions/userTeamSkillsAction";
import EmployeeTeamSkillRating from "./EmployeeTeamSkillRating";

export default function EmpRatingPage() {
  const [skillsDB, setSkillsDB] = useState([]);
  const [count, setCount] = useState(0);
  const [tcount, setTCount] = useState(0);
  const [empDB, setEmpDB] = useState([]);
  const dispatch = useDispatch();
  const userSkills = useSelector(
    (state) => state.rootReducer.userSkill.userSkills
  );
  const userTeamSkills = useSelector(
    (state) => state.rootReducer.userTeamSkill.userTeamSkills
  );
  const navigate = useNavigate();
  const skillsURL = "https://localhost:7074/api/SubSkills/GetAllSubSkills";
  const empId = localStorage.getItem("ApprovalEmpId");
  const empURL = `https://localhost:7074/api/Employee/GetEmployeeByEmpId?empId=${empId}`;
  const teamId=localStorage.getItem("ApprovalTeamId");
  const assessmentMonth = localStorage.getItem("AssessmentMonth");

  useEffect(() => {
    dispatch(listUserSkills(empId));
    dispatch(listUserTeamSkills(empId,teamId));
  }, []);
  useEffect(() => {
    async function empAPI() {
      await axios.get(empURL).then((response) => {
        setEmpDB(response.data);
      });
    }
    empAPI();
  }, []);
console.log(count)
  return (
    <>
      <TopBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 col-md-1 col-sm-1 sideNav">
            <Sidebar />
          </div>

          <div
            className="col-11 col-md-8 col-sm-11"
            style={{ marginLeft: "20px" }}
          >
            <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
              {empDB.map((data) => (
                <Card.Body key={data.empId}>
                  <h1>{data.name}</h1>
                  <div>
                    <div className="row">
                      <div className="col-3 col-md-4">
                        <LocationOnIcon /> {data.location}
                      </div>
                      <div className="col-3 col-md-4">
                        <MailOutlineIcon />{" "}
                        <a
                          href={data.userName}
                          style={{ color: "black" }}
                          className="email"
                        >
                          {data.userName}
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
                        <p>{data.designation}</p>
                      </div>
                      <div className="col-6 col-md-3  ">
                        <label
                          className="DEPARTMENT"
                          style={{ color: "#41464b" }}
                        >
                          DEPARTMENT
                        </label>
                        <p>
                          Operations {">"} {data.team}
                        </p>
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
                        <p>{data.reportingManager}</p>
                      </div>
                      <div className="col-6 col-md-3 mt-md-3 ">
                        <label className="EmpNo" style={{ color: "#41464b" }}>
                          EMP NO
                        </label>
                        <p>{data.employeeCode}</p>
                      </div>
                      <div className="col-6 col-md-3  mt-md-3">
                        <label className="team" style={{ color: "#41464b" }}>
                          Team
                        </label>
                        <p>{data.team}</p>
                      </div>
                      <div className="col-6 col-md-3 mt-md-3 ">
                        <label className="band" style={{ color: "#41464b" }}>
                          Band
                        </label>
                        <p>{data.band}</p>
                      </div>

                      <hr style={{ marginTop: "15px" }} />
                    </div>
                  </div>
                </Card.Body>
              ))}
            </Card>
            <h4>Skill Matrix Ratings</h4>
            {userSkills.length>0 && count<userSkills.length && <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
                <Card.Body>
                  <h3 style={{ fontSize: "40px", fontWeight: "400" }}>
                    {userSkills[count].questionName}{" "}
                    {/* {userSkills.length-(count+1)>0 &&
                    <Button className="nextBtn" type="button" variant="primary" onClick={()=>count<userSkills.length-1 && setCount(p=>p+1)}>
                      Next Section <ArrowRight />
                    </Button>
                    }{" "} */}
                    {count > 0 && 
                    <Button className="prevBtn2" type="button" variant="outline-primary" onClick={()=>count>0 && setCount(p=>p-1)}>
                     <ArrowLeft /> Prev Section
                    </Button>}
                  </h3>
                  <br /> <br />
                  <Card className="border-0">
                    <Card.Body>
                      <div className="row">
                        <div className="col-md-6">
                          <h6>Skill Name</h6>
                        </div>
                        <div className="col-md-2">
                          <h6>Status</h6>
                        </div>
                        <div className="col-md-1">
                          <h6>Ratings</h6>
                        </div>
                        <div className="col-md-3">
                          <h6>Reject/Approve</h6>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                  <div>
                    <EmployeeSkillRatings
                      SkillId={userSkills[count].questionId}
                      empId={empId}
                      assessmentMonth={assessmentMonth}
                    />
                     {/* {userSkills.length-(count+1)==0 && 
                    <Button className="nextBtn" type="button" variant="primary" onClick={()=>{
                      axios.delete(`https://localhost:7074/api/Approvals/DeleteApprovalsByEmpId?empId=${empId}`)
                      navigate('/ApprovalPage')}}>
                    Send Response
                   </Button>
                    } */}
                  </div>
                  <h3>
                  {userSkills.length-(count+1)>0 &&
                    <Button className="nextBtn" type="button" variant="primary" onClick={()=>setCount(p=>p+1)}>
                      Next Section <ArrowRight />
                    </Button>
                  }
                  {userSkills.length-(count+1)==0 &&
                    <Button className="nextBtn" type="button" variant="primary" onClick={()=>{setCount(p=>p+1); setTCount(0)}}>
                      Next Section <ArrowRight />
                    </Button>
                  }
                  </h3>
                </Card.Body>
              </Card>
              }
              {userTeamSkills.length>0 && count>=userSkills.length && tcount<userTeamSkills.length && <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
                <Card.Body>
                  <h3 style={{ fontSize: "40px", fontWeight: "400" }}>
                    {userTeamSkills[tcount].teamSkillName}{" "}
                    {/* {userSkills.length-(count+1)>0 &&
                    <Button className="nextBtn" type="button" variant="primary" onClick={()=>count<userSkills.length-1 && setCount(p=>p+1)}>
                      Next Section <ArrowRight />
                    </Button>
                    }{" "} */}
                    {tcount > 0 && 
                    <Button className="prevBtn2" type="button" variant="outline-primary" onClick={()=>setTCount(p=>p-1)}>
                     <ArrowLeft /> Prev Section
                    </Button>}
                    {tcount == 0 && 
                    <Button className="prevBtn2" type="button" variant="outline-primary" onClick={()=>setCount(p=>p-1)}>
                     <ArrowLeft /> Prev Section
                    </Button>}
                  </h3>
                  <br /> <br />
                  <Card className="border-0">
                    <Card.Body>
                      <div className="row">
                        <div className="col-md-6">
                          <h6>Skill Name</h6>
                        </div>
                        <div className="col-md-2">
                          <h6>Status</h6>
                        </div>
                        <div className="col-md-1">
                          <h6>Ratings</h6>
                        </div>
                        <div className="col-md-3">
                          <h6>Reject/Approve</h6>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                  <div>
                  <EmployeeTeamSkillRating
                      SkillId={userTeamSkills[tcount].teamSkillId}
                      empId={empId}
                    />
                     {/* {userSkills.length-(count+1)==0 && 
                    <Button className="nextBtn" type="button" variant="primary" onClick={()=>{
                      axios.delete(`https://localhost:7074/api/Approvals/DeleteApprovalsByEmpId?empId=${empId}`)
                      navigate('/ApprovalPage')}}>
                    Send Response
                   </Button>
                    } */}
                  </div>
                  <h3>
                  {userTeamSkills.length-(tcount+1)>0 &&
                    <Button className="nextBtn" type="button" variant="primary" onClick={()=>tcount<userTeamSkills.length-1 && setTCount(p=>p+1)}>
                      Next Section <ArrowRight />
                    </Button>
                  }
                   {userTeamSkills.length-(tcount+1)==0 && 
                    <Button className="nextBtn" type="button" variant="primary" onClick={()=>{
                      axios.delete(`https://localhost:7074/api/Approvals/DeleteApprovalsByEmpId?empId=${empId}`)
                      navigate('/ApprovalPage')}}>
                    Send Response
                   </Button>
                    }
                  </h3>
                </Card.Body>
              </Card>
              }
          </div>
        </div>
      </div>
    </>
  );
}
