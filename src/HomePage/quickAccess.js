import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import navCss from "../css/nav.css";
import homeCss from "../css/home.css";
import indexCss from "../css/index.css";
import Card from "react-bootstrap/Card";
import inboxImg from "../images/inboxImg.svg";

function QuickAccess(props) {

  const months = [
    "Jan", "Feb", 
    "March", "April", "May", 
    "June", "July", "Aug",
    "Sept", "Oct", 
    "Nov", "Dec"
];
const days = [
  "Mon", "Tues", 
  "Wed", "Thu", "Fri", 
  "Sat", "Sun"
];

  const date = new Date();
  let today = date.toDateString();
  let day = days[date.getDay()]
  let year = date.getFullYear();
  let month = months[date.getMonth()]
  let daydate = date.getDate();
  const EmpId=localStorage.getItem('EmpId')
  const [time, setTime] = React.useState("");
  const [updateDate, setUpdateDate] = React.useState(props.updateDate);
  const [event, setEvent] = React.useState("");
  const [empUpdatedOn , setEmpUpdatedOn]= React.useState(props.empUpdatedOn)
  const [empUpdateOnTime , setEmpUpdatedOnTime] = useState(props.empUpdateOnTime)


  useEffect(()=>{
    axios.get(`https://localhost:7074/api/UpdatedOn/GetLatestUpdateTimeByEmpId?EmpId=${EmpId}`).then((response)=>{
      console.log(response.data.data)
      setEmpUpdatedOn(response.data.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[])



  React.useEffect(() => {
    const myInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <>
      <div className="container" style={{ padding: "20px" }} key={Math.random()}>
        <h5 style={{fontWeight:'400'}}>Quick Access</h5>
        <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Card.Body>
            <Card.Title style={{ fontSize: "15px" , marginBottom:'20px' }}>Inbox </Card.Title>
            <div className="row ">
              <div className="col-md-4">
                <Card.Text style={{ fontSize: "15px" }}>
                  <img
                    src={inboxImg}
                    style={{ height: "70px", width: "110px" }}
                  />
                </Card.Text>
              </div>
              <div className="col-md-8">
                <Card.Text style={{fontSize:'14px',marginTop:'20px'}}>Good Job ! <br/> You Have no Pending Tasks</Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            backgroundColor: "#307bc1",
            color: "white",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontSize: "15px" }}>Time Today </Card.Title>
            <Card.Title style={{ fontSize: "22px" , display:'flex'}}>
            <img style={{height:'50px',width:'50px',marginRight:'6px',marginTop:'5px'}} src="https://img.icons8.com/ios/50/ffffff/clock--v1.png"/>
            {day} , {month} {daydate} , {year} <br/>{time} </Card.Title>
            {/* <Card.Title style={{ fontSize: "26px" }}> {time} </Card.Title> */}
          </Card.Body>
        </Card>

        {/* <Card
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            backgroundColor: "#36a2b2",
            color: "white",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontSize: "15px" }}>Holidays</Card.Title>
            <Card.Title style={{ fontSize: "26px" }}> {event} </Card.Title>
            <Card.Title style={{ fontSize: "26px" }}> {today} </Card.Title>
          </Card.Body>
        </Card> */}
         {empUpdatedOn ?<Card 
         key={Math.random()}
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            backgroundColor: "#36a2b2",
            color: "white",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontSize: "15px" }}>Last Assessment Month</Card.Title>
            <Card.Title style={{ fontSize: "22px" , display:'flex' }}>
            <img style={{height:'60px',width:'60px',marginRight:'6px'}} src="https://img.icons8.com/nolan/64/ffffff/planner.png"/>
               {empUpdatedOn && empUpdatedOn.submittedOn}  <br/>
               {empUpdatedOn && empUpdatedOn.assessmentMonth} 
            </Card.Title>
            {/* <Card.Title style={{ fontSize: "26px" }}> {empUpdatedOn && empUpdatedOn.assessmentMonth}  </Card.Title> */}
          </Card.Body>
        </Card>:''}
      </div>
    </>
  );
}

export default QuickAccess;
