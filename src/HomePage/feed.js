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
import { NavLink } from "react-router-dom";
import '../css/feed.css'
import { useDispatch, useSelector } from "react-redux";
import { listUserDetails } from "../Redux/actions/userActions";
import { listUserSkills } from "../Redux/actions/userSkillsActions";

function Feeds() {
  const [feed, setFeeds] = useState("");
  const [feedsDB, setFeedsDB] = useState([]);
  const [userInformation,setUserinformation]=useState({})
  const dispatch=useDispatch();
  const userInfo = useSelector(state=>state.rootReducer.user.users)
  const userSkills = useSelector(state =>state.rootReducer.userSkill.userSkills);

useEffect(()=>{
  const userId=localStorage.getItem("UserId");
  const empId=localStorage.getItem("EmpId");
  if(userId && empId){
    dispatch(listUserDetails(userId));
    dispatch(listUserSkills(empId));
  }
},[])

useEffect(()=>{
  if(userInfo){
    setUserinformation(userInfo)
  }
},[userInfo])

 console.log(userInformation)
  return (
    <>
      <div className="container" style={{ padding: "20px" }}>
        <h3 style={{ fontWeight: "400" }}>Basic Employee Details</h3>
        <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Card.Body>
            <h1 style={{fontFamily: "Georgia, serif"}}>{userInformation.name}</h1>
            <div>
              <div className="row">
                <div className="col-3 col-md-4">
                  <LocationOnIcon/> {userInformation.location}
                </div>
                <div className="col-3 col-md-4">
                 <MailOutlineIcon/> <a href='mailto:ruhi.peter@mail.vinove.com' className='email'>{userInformation.userName}</a>
                </div>
              
              </div>
              <hr/>
              <div className="row">
                <div className=" col-6 col-md-3 ">
                 <label classname ="job title" style ={{color:"#b0b0b3"}}>JOB TITLE</label>
                 <p>{userInformation.designation}</p>
                </div>
                <div className="col-6 col-md-3  ">
                <label classname ="DEPARTMENT" style ={{color:"#b0b0b3"}}>DEPARTMENT</label>
                <p>{userInformation.department}</p>
                </div>
                <div className="col-6 col-md-3 ">
                <label classname ="bussiness unit"  style ={{color:"#b0b0b3"}}>BUSSINESS UNIT</label>
                <p>Services</p>
                </div>
                <div className="col-6 col-md-3">
                <label classname ="reporting" style ={{color:"#b0b0b3"}}>REPORTING TO</label>
                <p>{userInformation.reportingManager}</p>
                </div>
                <div className="col-6 col-md-3 mt-md-3 ">
                <label classname ="EmpNo" style ={{color:"#b0b0b3"}}>EMP NO</label>
                <p>{userInformation.employeeCode}</p>
                </div>
                <div className="col-6 col-md-3  mt-md-3">
                <label classname ="team" style ={{color:"#b0b0b3"}}>Team</label>
                <p>{userInformation.team}</p>
                </div>
                <div className="col-6 col-md-3 mt-md-3 ">
                <label classname ="band" style ={{color:"#b0b0b3"}}>Band</label>
                <p>{userInformation.band}</p>
                </div>
               
                <hr style={{marginTop:"15px"}}/>
             
               
                
                
              </div>
            </div>
          </Card.Body>
        </Card>   

        {/* {feedsDB.length < 1 ? (
          <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Card.Body>
              <img
                src={defaultPost}
                style={{
                  height: "150px",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              />
              <br />
              <p style={{ textAlign: "center" }}>
                {" "}
                There are no announcements here{" "}
              </p>
            </Card.Body>
          </Card>
        ) : (
          feedsDB.map((data, index) => (
            <Card
              key={index}
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              <Card.Body>
                <h6> {data} </h6>
              </Card.Body>
            </Card>
          ))
        )} */}
        <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Card.Body>
            <h2 style={{fontFamily: "Georgia, serif"}}>Skills:</h2>
              <br />
              {userSkills.map((ele,i)=>{
                return(
                  <h5 style={{fontFamily: "Georgia, serif"}}>{i+1}. {ele.questionName}</h5>
                )

              })}
              

            </Card.Body>
          </Card> 
      </div> 
    </>
  );
}

export default Feeds;
