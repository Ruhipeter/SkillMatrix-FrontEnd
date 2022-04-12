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

function Feeds() {
  const [feed, setFeeds] = useState("");
  const [feedsDB, setFeedsDB] = useState([]);
  console.log(feedsDB.length);

  var feedBox = document.getElementById("feedBox")
  const AddFeed = (e) => {
    e.preventDefault();
    let obj = [...feedsDB];
    obj.push(feed);
    setFeedsDB(obj);
    e.target.reset();
  };

  return (
    <>
      <div className="container" style={{ padding: "20px" }}>
        <h3 style={{ fontWeight: "400" }}>Basic Employee Details</h3>
        <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Card.Body>
            <h1 style={{fontFamily: "Georgia, serif"}}>Ruhi Peter</h1>
            <div>
              <div className="row">
                <div className="col-3 col-md-4">
                  <LocationOnIcon/> Gurugram
                </div>
                <div className="col-3 col-md-4">
                 <MailOutlineIcon/> <a href='mailto:ruhi.peter@mail.vinove.com' className='email'>ruhi.peter@mail.vinove.com</a>
                </div>
                <div className="col-3 col-md-4">
                 <CallIcon/> 7589308743
                </div>

              </div>
              <hr/>
              <div className="row">
                <div className=" col-6 col-md-3 ">
                 <label classname ="job title" style ={{color:"#b0b0b3"}}>JOB TITLE</label>
                 <p>Jr. Associate Software Developer</p>
                </div>
                <div className="col-6 col-md-3  ">
                <label classname ="DEPARTMENT" style ={{color:"#b0b0b3"}}>DEPARTMENT</label>
                <p>Operations {'>'} MS -Xam...</p>
                </div>
                <div className="col-6 col-md-3 ">
                <label classname ="bussiness unit"  style ={{color:"#b0b0b3"}}>BUSSINESS UNIT</label>
                <p>Services</p>
                </div>
                <div className="col-6 col-md-3">
                <label classname ="reporting" style ={{color:"#b0b0b3"}}>REPORTING TO</label>
                <p>VIkas Kaushik</p>
                </div>
                <div className="col-6 col-md-3 mt-md-3 ">
                <label classname ="EmpNo" style ={{color:"#b0b0b3"}}>EMP NO</label>
                <p>V5998</p>
                </div>
                <div className="col-6 col-md-3  mt-md-3">
                <label classname ="team" style ={{color:"#b0b0b3"}}>Team</label>
                <p>.NET</p>
                </div>
                <div className="col-6 col-md-3 mt-md-3 ">
                <label classname ="band" style ={{color:"#b0b0b3"}}>Band</label>
                <p>L1</p>
                </div>
               
                <hr style={{marginTop:"15px"}}/>
             
               
                
                
              </div>
            </div>
          </Card.Body>
        </Card>

        {feedsDB.length < 1 ? (
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
        )}
      </div>
    </>
  );
}

export default Feeds;
