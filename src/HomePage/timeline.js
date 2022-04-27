import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import TopBar from "./topBar";
import indexCss from "../css/index.css";
import ratingsCss from "../css/ratings.css";
import axios from "axios";
import { Button, FormControl, InputGroup, Form, Table } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Navigate, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function TimelinePage() {
  const [timelineDB, setTimelineDB] = useState([]);
  const navigate= useNavigate();
  const empId = localStorage.getItem("EmpId");
  useEffect(() => {
    axios
      .get(
        `https://localhost:7074/api/UpdatedOn/GetUpdateTimeByEmpId?EmpId=${empId}`
      )
      .then((res) => {
        console.log(res.data);
        setTimelineDB(res.data);
      });
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
            style={{ marginLeft: "20px", marginTop: "20px" }}
          >
            <h3 style={{ marginBottom: "20px" }}>Ratings Timeline</h3>
            <Card>
              <Card.Body>
                <Table >
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th>Assessment Month</th>
                      <th>Submitted On</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timelineDB.map((data,i) => (
                      <tr key={data.id}>
                        <td>{i+1}</td>
                        <td>{data.assessmentMonth}</td>
                        <td>{data.submittedOn}</td>
                        <td>  <Button 
                                  variant="primary" 
                                  style={{float:'left',fontWeight:'500'}}
                                  onClick={()=>navigate(`/ReviewRatings`,{ state: { month: data.assessmentMonth} })}>View Data</Button>{' '}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
