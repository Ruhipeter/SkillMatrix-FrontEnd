import React, { useEffect, useState } from "react";
import Feeds from "./feed";
import QuickAccess from "./quickAccess";
import Sidebar from "./sidebar";
import TopBar from "./topBar";
import indexCss from "../css/index.css";
import basicDetailsCss from "../css/BasicDetails.css";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import {
  Button,
  FormControl,
  InputGroup,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import axios from "axios";

export default function TeamSkillDetails() {
  let navigate = useNavigate();
  const teamId = localStorage.getItem("TeamId");

  const skillsURL = `https://localhost:7074/api/TeamSkills/GetTeamSkillsByTeamId?teamId=${teamId}`;
  const quesURL =
    "https://localhost:7074/api/EmployeeTeamQuestions/PostEmployeeTeamQuestions";
  const [skillDB, setSkillsDB] = useState([]);
  const [quesDB, setQuesDB] = useState([]);

  useEffect(() => {
    async function skillsAPI() {
      await axios.get(skillsURL).then((response) => {
        setSkillsDB(response.data);
      });
    }
    skillsAPI();
  }, []);

  const addQues = (e, data) => {
    const obj = [...quesDB];
    obj.push(data);
    setQuesDB(obj);
  };

  const removeQues = (e, skillId) => {
    let obj = [...quesDB];
    const filtered = obj.filter((item) => item != skillId);
    setQuesDB(filtered);
  };

  const handleSubmit = () => {
    async function quesAPI() {
      const empQues = {
        array: quesDB,
        empId: localStorage.getItem("NewEmpId"),
        teamId: localStorage.getItem("TeamId"),
      };
      await axios
        .post(quesURL, empQues)
        .then((response) => {
          console.log(response);
          navigate("/ReviewDetails");
        })
        .catch((err) => console.log(err));
    }
    quesAPI();
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
            className="col-11 col-md-7 col-sm-11"
            style={{ marginLeft: "20px" }}
          >
            <h4 style={{ marginTop: "20px" }}>
              {skillDB.length > 0 && skillDB[0].teamName} &nbsp;
              Skills
            </h4>
            <Card
              style={{
                marginTop: "30px",
                marginBottom: "20px",
                padding: "10px",
              }}
            >
              <Card.Body>
                {/* {skillDB.map((data)=>{
                      return(
                        <h3 key={data.skillId}>
                        {data.skillName}
                    </h3>
                      )
                  })} */}
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <h6> Skill Name </h6>
                        </TableCell>
                        <TableCell align="right">
                          <h6>Edit</h6>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {skillDB.map((data) => (
                        <TableRow
                          key={data.teamSkillId}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <h5>{data.teamSkillName} </h5>
                          </TableCell>
                          <TableCell align="right">
                            {!quesDB.includes(data.teamSkillId) && (
                              <IconButton
                                aria-label="add"
                                onClick={(e) => addQues(e, data.teamSkillId)}
                              >
                                <AddBoxIcon
                                  color="primary"
                                  sx={{ fontSize: 40 }}
                                />
                              </IconButton>
                            )}
                            {quesDB.includes(data.teamSkillId) && (
                              <IconButton
                                aria-label="remove"
                                onClick={(e) => removeQues(e, data.teamSkillId)}
                              >
                                <RemoveCircleIcon
                                  sx={{ fontSize: 40, color: "#c72130" }}
                                />
                              </IconButton>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className="submitBtn"
                >
                  Submit Details
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-11 col-md-3 col-sm-11 m-sm-5 m-md-0">
            <div style={{ marginTop: "150px" }}>
              <h5>Steps To Follow </h5>

              <Card
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  backgroundColor: "White",
                  color: "Black",
                }}
              >
                <Card.Body style={{ padding: "10px" }}>
                  <Card.Title style={{ fontSize: "23px", lineHeight: "2" }}>
                    Employee Basic Details
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
                  backgroundColor: "#0d6efd",
                  color: "white",
                }}
              >
                <Card.Body style={{ padding: "10px" }}>
                  <Card.Title style={{ fontSize: "23px", lineHeight: "2" }}>
                    Team Skill Details
                    <img
                      style={{ height: "45px", width: "45px", float: "right" }}
                      src="https://img.icons8.com/ios-glyphs/170/ffffff/ok--v1.png"
                    />
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
