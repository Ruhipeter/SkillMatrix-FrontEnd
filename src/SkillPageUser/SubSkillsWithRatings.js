import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Rating_info from "./Rating_info";
import { listUserSkills } from "../Redux/actions/userSkillsActions";
import axios from "axios";
import { AiFillExclamationCircle } from "react-icons/ai";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";

function SubSkillsWithRatings(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const empId = localStorage.getItem("EmpId");
  const userSkills = useSelector(
    (state) => state.rootReducer.userSkill.userSkills
  );
  const userTeamSkills = useSelector(
    (state) => state.rootReducer.userTeamSkill.userTeamSkills
  );
  const obj = {
    subskillRatingArr: [],
    empId: empId,
    skillId: props.qId,
  };

  useEffect(() => {
    const empId = localStorage.getItem("EmpId");
    if (empId) {
      dispatch(listUserSkills(empId));
    }
  }, []);
  // useEffect(() => {

  //     axios.get(`https://localhost:7074/api/SubSkillsRatings/GetSubSkillRatingBySkillIdAndEmpId?skillId=${props.qId}&empId=${empId}`).then((res) => {
  //         setData(res.data)
  //         console.log(res.data)
  //     }).catch((err) => {
  //         console.log(err);
  //     })

  // }, [props.qId])

  const moveNext = (e) => {
    let NextRoute = "";
    userSkills.map((ele, i) => {
      if (ele.questionId == props.qId && userSkills[i + 1]) {
        NextRoute = `/Skills/${userSkills[i + 1].questionName}/${
          userSkills[i + 1].questionId
        }`;}
      if(NextRoute==="")
      {
        NextRoute="/home";

      }
      
    });

    navigate(NextRoute);
  };
  const movePrev = (e) => {
    let NextRoute = "";
    userSkills.map((ele, i) => {
      if (ele.questionId == props.qId && userSkills[i - 1]) {
        NextRoute = `/${userSkills[i - 1].questionName}/${
          userSkills[i - 1].questionId
        }`;}
      if(NextRoute==="")
      {
        NextRoute="/home";

      }
      
    });

    navigate(NextRoute);
  };


  return (
    <>
      <div className="col-md-7">
        <div>
          <br />
          <div>
            <h1>{props.skill}</h1>
          </div>{" "}
          <br />
          <div>
            <Card className="questionsCard">
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
            </Card>
          </div>
          <br />
        </div>
      </div>

      <div className="col-md-1"></div>

      <div className="col-md-3">
        <Rating_info />
        <div style={{position:"fixed"}}>
        <ButtonGroup className="me-2" aria-label="First group" >
        <Button
          className="prevBtn"
          onClick={(e) => movePrev(e)}
          type="button"
          variant="outline-primary"
        ><ArrowLeft />Previous Section</Button>      

        </ButtonGroup>{' '}
        <ButtonGroup className="me-2" aria-label="First group">
        <Button
          className="nextBtn"
          onClick={(e) => moveNext(e)}
          type="button"
          variant="primary"
        >
          Next Section <ArrowRight />
        </Button>{" "}
        </ButtonGroup></div>
      </div>
    </>
  );
}

export default SubSkillsWithRatings;
