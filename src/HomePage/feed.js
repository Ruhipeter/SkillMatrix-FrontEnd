import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, FormControl, InputGroup, Form } from "react-bootstrap";
import navCss from "../css/nav.css";
import homeCss from "../css/home.css";
import Card from "react-bootstrap/Card";
import defaultPost from "../images/defaultPost.svg";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import '../css/feed.css'
import { useDispatch, useSelector } from "react-redux";
import { listUserDetails } from "../Redux/actions/userActions";
import { listUserSkills } from "../Redux/actions/userSkillsActions";

function Feeds() {
  const [feed, setFeeds] = useState("");
  const [feedsDB, setFeedsDB] = useState([]);
  const [userInformation, setUserinformation] = useState({})
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.rootReducer.user.users)
  const userSkills = useSelector(state => state.rootReducer.userSkill.userSkills);

  useEffect(() => {
    const userId = localStorage.getItem("UserId");
    const empId = localStorage.getItem("EmpId");
    if (userId && empId) {
      dispatch(listUserDetails(userId));
      dispatch(listUserSkills(empId));
    }
  }, [])

  useEffect(() => {
    if (userInfo) {
      setUserinformation(userInfo)
      localStorage.setItem("rmId", userInfo.rmId)
      localStorage.setItem("teamId", userInfo.teamId)
    }
  }, [userInfo])
  const fillForm = () => {
    console.log("hello")
    navigate(`/${userSkills[0].questionName}/${userSkills[0].questionId}`)
  }
  console.log(userInformation)
  return (
    <>
      <div className="container" style={{ padding: "20px" }}>
        <h3 style={{ fontWeight: "400" }}>Basic Employee Details</h3>
        <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Card.Body>
            <h1>{userInformation.name}</h1>
            <div>
              <div className="row">
                <div className="col-3 col-md-4">
                  <LocationOnIcon /> {userInformation.location}
                </div>
                <div className="col-3 col-md-4">
                  <MailOutlineIcon /> <a href='mailto:ruhi.peter@mail.vinove.com' className='email'>{userInformation.userName}</a>
                </div>

              </div>
              <hr />
              <div className="row">
                <div className=" col-6 col-md-3 ">
                  <label className="job title" style={{ color: "#41464b" }}>JOB TITLE</label>
                  <p>{userInformation.designation}</p>
                </div>
                <div className="col-6 col-md-3  ">
                  <label className="DEPARTMENT" style={{ color: "#41464b" }}>DEPARTMENT</label>
                  <p>{userInformation.department}</p>
                </div>
                <div className="col-6 col-md-3 ">
                  <label className="bussiness unit" style={{ color: "#41464b" }}>BUSSINESS UNIT</label>
                  <p>Services</p>
                </div>
                <div className="col-6 col-md-3">
                  <label className="reporting" style={{ color: "#41464b" }}>REPORTING TO</label>
                  <p>{userInformation.reportingManager}</p>
                </div>
                <div className="col-6 col-md-3 mt-md-3 ">
                  <label className="EmpNo" style={{ color: "#41464b" }}>EMP NO</label>
                  <p>{userInformation.employeeCode}</p>
                </div>
                <div className="col-6 col-md-3  mt-md-3">
                  <label className="team" style={{ color: "#41464b" }}>Team</label>
                  <p>{userInformation.team}</p>
                </div>
                <div className="col-6 col-md-3 mt-md-3 ">
                  <label className="band" style={{ color: "#41464b" }}>Band</label>
                  <p>{userInformation.band}</p>
                </div>

                <hr style={{ marginTop: "15px" }} />




              </div>
            </div>
          </Card.Body>
        </Card>
        <h4 style={{ fontWeight: "400" }}>Skills To Be Filled </h4>
        <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Card.Body>
            <button className="learn-more" onClick={(e)=>fillForm(e)}>
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Fill Form</span>
            </button>
            {userSkills.map((ele) => {
              //  <h5>{ele.questionName}</h5>

              return <Card
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  backgroundColor: "#0d2c48",
                  color: "white",
                  width: '450px'
                }}
              >
                <Card.Body style={{ padding: '10px' }}>
                  <Card.Title style={{ fontSize: "22px" }}> {ele.questionName}
                    <img style={{ height: "30px", width: "40px", float: "right" }}
                      src="https://img.icons8.com/external-outline-astudio/132/ffffff/external-arrow-arrow-outline-astudio-25.png" />
                  </Card.Title>
                </Card.Body>
              </Card>
            })}
          </Card.Body>

        </Card>
      </div>
    </>
  );
}

export default Feeds;
