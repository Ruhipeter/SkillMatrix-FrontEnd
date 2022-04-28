import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Rating_info from "./Rating_info";
import { listUserSkills } from "../Redux/actions/userSkillsActions";
import axios from "axios";
import { AiFillExclamationCircle } from "react-icons/ai";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import TopBar from "../HomePage/topBar";
import Sidebar from "../HomePage/sidebar";
import MySkillsRatings from "./MySkillsRatings";
import TeamSkillsRatings from "./TeamSkillsRatings";

function SubSkillsWithRatings(props) {
  const navigate = useNavigate();
  const location= useLocation();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [tcount, setTCount] = useState(0);
  const empId = localStorage.getItem("EmpId");
  const team= localStorage.getItem("team");
  const userSkills = useSelector(
    (state) => state.rootReducer.userSkill.userSkills
  );
  const userTeamSkills = useSelector(
    (state) => state.rootReducer.userTeamSkill.userTeamSkills
  );
 
    console.log(team)
 

  return (
    <>
    <TopBar/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 col-md-1 col-sm-1 sideNav">
            <Sidebar />
          </div>
      <div className="col-md-7">
        <div>
          <br />
          <div>
            <h1>{props.skill}</h1>
          </div>{" "}
          <br />
          <div>
          {userSkills.length>0 && count<userSkills.length && <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
                <Card.Body>
                  <h3 style={{ fontSize: "40px", fontWeight: "400" }}>
                    {userSkills[count].questionName}{" "}
                    {/* {userSkills.length-(count+1)>0 &&
                    <Button className="nextBtn" type="button" variant="primary" onClick={()=>count<userSkills.length-1 && setCount(p=>p+1)}>
                      Next Section <ArrowRight />
                    </Button>
                    }{" "} */}
                    {userSkills.length-(count+1)>0 &&
                    <Button className="nextBtn" type="button" variant="primary" onClick={()=>setCount(p=>p+1)}>
                      Next Section <ArrowRight />
                    </Button>
                  }
                  {userTeamSkills.length>0 && userSkills.length-(count+1)==0 &&
                    <Button className="nextBtn" type="button" variant="primary" onClick={()=>{setCount(p=>p+1); setTCount(0)}}>
                      Next Section <ArrowRight />
                    </Button>
                  }{' '}
                  {userTeamSkills.length==0 && userSkills.length-(count+1)==0 &&
                    <Button className="nextBtn" type="button" variant="primary" onClick={()=>{navigate('/timeline')}}>
                      Next Section <ArrowRight />
                    </Button>
                  }{' '}
                    {count > 0 && 
                    <Button className="prevBtn2" type="button" variant="outline-primary" onClick={()=>count>0 && setCount(p=>p-1)}>
                     <ArrowLeft /> Prev Section
                    </Button>}
                    
                  </h3>
                  <br /> <br />
                  
                  <MySkillsRatings id={userSkills[count].questionId} month={location.state.month} empId={empId}/>
                  
                </Card.Body>
              </Card>
              }
            {/* <Card className="questionsCard">
              <div className="row">
                <div className="col-md-12">
                  <Card.Body>
                    <div>
                      {props.subSkill.map((ele, i) => {
                        console.log(ele);
                        return (
                          <div key={i}>
                            <div className="wrapper">
                              <div className="skill">
                                <h4>{ele.subSkillName}</h4>
                              </div>
                              <div>
                                <ReactStars
                                  count={5}
                                  value={ele.ratings}
                                  edit={false}
                                  size={50}
                                  activeColor="#0073e6"
                                />
                                {ele.isApproved == 0 ? (
                                  <p style={{ paddingLeft: "60%" }}>
                                    {" "}
                                    <AiFillExclamationCircle
                                      color={"#FFA500"}
                                      size={25}
                                    />{" "}
                                    Pending for approval
                                  </p>
                                ) : ele.isApproved == 1 ? (
                                  <p style={{ paddingLeft: "60%" }}>
                                    {" "}
                                    <BsCheckCircleFill
                                      size={22}
                                      color={"green"}
                                    />{" "}
                                    Approved{" "}
                                  </p>
                                ) : (
                                  <p style={{ paddingLeft: "60%" }}>
                                    {" "}
                                    <BsXCircleFill
                                      size={22}
                                      color={"#ce2029"}
                                    />{" "}
                                    Request Declined{" "}
                                  </p>
                                )}
                                
                              </div>
                            </div>
                            <hr />
                          </div>
                        );
                      })}
                    </div>
                  </Card.Body>
                </div>
              </div>
            </Card> */}
            {userTeamSkills.length>0 && count>=userSkills.length && tcount<userTeamSkills.length && <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
                <Card.Body>
                  <h3 style={{ fontSize: "40px", fontWeight: "400" }}>
                    {team} {'>'} {userTeamSkills[tcount].teamSkillName}{" "}
                    {userTeamSkills.length-(tcount+1)>0 &&
                    <Button className="nextBtn" type="button" variant="primary" onClick={()=>tcount<userTeamSkills.length-1 && setTCount(p=>p+1)}>
                      Next Section <ArrowRight />
                    </Button>
                  }{' '}
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
                  
                  <TeamSkillsRatings id={userTeamSkills[tcount].teamSkillId} month={location.state.month} empId={empId}/>
                  
                </Card.Body>
              </Card>
              }
          </div>
          <br />
        </div>
      </div>

      <div className="col-md-1"></div>

      <div className="col-md-3">
        <Rating_info />
        
      </div>
      </div>
      </div>
    </>
  );
}

export default SubSkillsWithRatings;
