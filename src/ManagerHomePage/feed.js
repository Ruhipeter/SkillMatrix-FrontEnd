import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, FormControl, InputGroup, Form } from "react-bootstrap";
import navCss from "../css/nav.css";
import homeCss from "../css/home.css";
import indexCss from "../css/index.css";
import Card from "react-bootstrap/Card";
import defaultPost from "../images/defaultPost.svg";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import { NavLink } from "react-router-dom";
import '../css/feed.css'

function Feeds() {
  const [empDB , setEmpDB] = useState([])
  const empId = localStorage.getItem('EmpId')
  const empURL = `https://localhost:7074/api/Manager/GetManagerByEmpId?empId=${empId}`


  useEffect(() => {
    async function empAPI() {
      await axios.get(empURL).then((response) => {
        setEmpDB(response.data);
        console.log(response.data)
      });
    }
    empAPI();
  }, []);
  console.log(empDB)

  return (
    <>
      <div className="container" style={{ padding: "20px" }}>
        <h4 style={{ fontWeight: "400" }}>Basic Details</h4>
        <Card style={{ marginTop: "20px", marginBottom: "20px" }} >
            {/* {empDB && empDB.map((data)=>( */}
            <Card.Body key={empDB.id}>
                <h1>{empDB.name}</h1>
                <div>
                  <div className="row">
                    <div className="col-3 col-md-4">
                      <LocationOnIcon /> Gurugram
                    </div>
                    <div className="col-3 col-md-4">
                      <MailOutlineIcon />{" "}
                      <a
                        href='vikas@gmail.com'
                        style={{ color: "black" }}
                        className="email"
                      >
                        vikas@gmail.com
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className=" col-6 col-md-3 ">
                      <label className="job title" style={{ color: "#41464b" }}>
                        JOB TITLE
                      </label>
                      <p>{empDB.designation}</p>
                    </div>
                    <div className="col-6 col-md-3  ">
                      <label
                        className="DEPARTMENT"
                        style={{ color: "#41464b" }}
                      >
                        DEPARTMENT
                      </label>
                      <p>Operations {">"} MS .NET</p>
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
                      <p>{empDB.reportingManager}</p>
                    </div>
                    <div className="col-6 col-md-3 mt-md-3 ">
                      <label className="EmpNo" style={{ color: "#41464b" }}>
                        EMP NO
                      </label>
                      <p>V3370</p>
                    </div>
                    <div className="col-6 col-md-3  mt-md-3">
                      <label className="team" style={{ color: "#41464b" }}>
                        Team
                      </label>
                      <p>MS .NET</p>
                    </div>
                    <div className="col-6 col-md-3 mt-md-3 ">
                      <label className="band" style={{ color: "#41464b" }}>
                        Band
                      </label>
                      <p>L1</p>
                    </div>

                    <hr style={{ marginTop: "15px" }} />
                  </div>
                </div>
              </Card.Body>
                                 {/* ))} */}
            </Card>

        <h4 style={{ fontWeight: "400" }}>Notifications</h4>
        <div className="col-md-8">
        <Card
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            backgroundColor: "#0d2c48",
            color: "white",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontSize: "15px" }}>Today </Card.Title>
            <Card.Title style={{ fontSize: "26px" }}> Pending Approvals 
            <span style={{float:'right', fontSize:'35px'}}>+3</span>         
            </Card.Title>
          </Card.Body>
        </Card>
        </div>

      </div>
    </>
  );
}

export default Feeds;
