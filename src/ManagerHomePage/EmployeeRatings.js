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
import { listUserSkills } from "../Redux/actions/userSkillsActions";
import { useDispatch, useSelector } from "react-redux";
import EmployeeSkillRatings from "./EmployeeSkillRatings";

export default function EmpRatingPage() {
  const [skillsDB, setSkillsDB] = useState([]);
  const [empDB , setEmpDB] = useState([])
  const dispatch=useDispatch();
  const userSkills = useSelector(state =>state.rootReducer.userSkill.userSkills);

  const skillsURL = "https://localhost:7074/api/SubSkills/GetAllSubSkills";
  const empId = localStorage.getItem('ApprovalEmpId')
  const empURL = `https://localhost:7074/api/Employee/GetEmployeeByEmpId?empId=${empId}`

  useEffect(() => {
    dispatch(listUserSkills(empId))
  }, []);
  console.log(userSkills)
  useEffect(() => {
    async function empAPI() {
      await axios.get(empURL).then((response) => {
        setEmpDB(response.data);
      });
    }
    empAPI();
  }, []);

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
            <Card style={{ marginTop: "20px", marginBottom: "20px" }} >
            {empDB.map((data)=>(
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
                      <label className="job title" style={{ color: "#41464b" }}>
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
                      <p>Operations {">"} {data.team}</p>
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
                      <label className="reporting" style={{ color: "#41464b" }}>
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
            
                      {userSkills.map((data) => (
                        <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
                        <Card.Body>
                          <h3 style={{fontSize:'40px',fontWeight:'400'}}>{data.questionName}</h3>
                          <br/>
                          <div>
                            <EmployeeSkillRatings SkillId={data.questionId} empId={empId}/>
                </div>
              </Card.Body>
            </Card>
                      ))}
                    
          </div>
        </div>
      </div>
    </>
  );
}
