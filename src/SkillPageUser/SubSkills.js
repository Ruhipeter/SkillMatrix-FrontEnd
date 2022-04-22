import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Rating_info from "./Rating_info";
import { listUserSkills } from "../Redux/actions/userSkillsActions";
import axios from "axios";
import ToastComp from "../HomePage/ToastComp";

function SubSkills(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const empId = localStorage.getItem("EmpId");
  const userSkills = useSelector(
    (state) => state.rootReducer.userSkill.userSkills
  );
  const obj = {
    subskillRatingArr: [],
    empId: empId,
    skillId: props.qId,
    submittedOn:new Date(),
    assessmentMonth:'string'
  };

  useEffect(() => {
    const empId = localStorage.getItem("EmpId");
    if (empId) {
      dispatch(listUserSkills(empId));
    }
  }, []);
  const location = useLocation();
//  console.log(location.state)
//   const moveNext = (e) => {
//     let NextRoute =``;
//     let data="";
//     userSkills.map((ele, i) => {
//       if (ele.questionId == props.qId && userSkills[i + 1]) {
//         NextRoute = `/${userSkills[i + 1].questionName}/${
//           userSkills[i + 1].questionId }`;
//           data=userSkills[i].questionName;
//       }
//       else if(ele.questionId == props.qId)
//       {
//         NextRoute="/home";
//         data=userSkills[i].questionName;

//       }
      
      
//     });

//     navigate(NextRoute,{ state: {setShow:true,data:data,} });
//   };
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
  const moveNextwithSubmit = (e) => {
    let NextRoute = "";
    let data="";
    userSkills.map((ele, i) => {
      if (ele.questionId == props.qId && userSkills[i + 1]) {
        NextRoute = `/${userSkills[i + 1].questionName}/${
          userSkills[i + 1].questionId}`;
        data=userSkills[i].questionName;
        
      }
      else if(ele.questionId == props.qId)
      {
        NextRoute="/home";
        data=userSkills[i].questionName;
        let rmId=localStorage.getItem("rmId");
        let getApproval={
          "id": 0,
          "empId": empId,
          "managerId": rmId,
        }
        console.log(getApproval);
        axios.post(`https://localhost:7074/api/Approvals/AddApprovals`,getApproval).then((response)=>{
              console.log(response.data);
              console.log(getApproval);
              axios.post(`https://localhost:7074/api/UpdatedOn/CreateUpdates?empId=${empId}`)
        })

      }
      
    });

    navigate(NextRoute,{ state: {setShow:true,data:data,} });
  };

  const ratingChanged = (newRating, id) => {
    const index = obj.subskillRatingArr.findIndex((object) => object[0] === id);
    {
      index > -1
        ? (obj.subskillRatingArr[index] = [id, newRating])
        : obj.subskillRatingArr.push([id, newRating]);
    }
  };

  const Submit = (e) => {
    axios
      .post(
        `https://localhost:7074/api/SubSkillsRatings/PostEmpSubSkillRatings`,
        obj
      )
      .then((res) => {
      });
    moveNextwithSubmit(e);
  };
console.log(obj)
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
                        obj.subskillRatingArr.push([ele.subSkillId, 0]);
                        return (
                          <div key={i}>
                            <div className="wrapper">
                              <div className="skill">
                                <h4>{ele.subSkillName}</h4>
                                
                              </div>
                              <div className="ReactStars" >
                              <ReactStars
                                  count={5}
                                  value={0}
                                  key={Math.random()}
                                  edit={true}
                                  size={50}
                                  onChange={(e, name) =>
                                    ratingChanged(e, ele.subSkillId)
                                  }
                                  activeColor="#0073e6"
                                />
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
        <Button
            className="SubmitBtn"
            size='lg'
            type="button"
            variant="primary"
            onClick={(e) => Submit(e)}
            style={{marginLeft:'82%'}}
          >
            Submit & Next <ArrowRight />
          </Button>{" "}
      </div>

      <div className="col-md-1"></div>

      <div className="col-md-3">
        <Rating_info />
        {/* {props.prev != false && (
            <>
              <Button
                className="prevBtn"
                variant="outline-primary"
                onClick={(e) => movePrev(e, props.prev)}
              >
                <ArrowLeft /> Prev Section
              </Button>{" "}
            </>
          )} */}
          <div style={{position:"fixed"}}>
          <ButtonGroup className="me-2"  aria-label="First group">
        <Button
          className="prevBtn"
          onClick={(e) => movePrev(e)}
          type="button"
          variant="outline-primary"
        ><ArrowLeft />Previous Section</Button>      

        </ButtonGroup>
        <ButtonGroup className="me-2" aria-label="First group">
        <Button
          className="nextBtn"
          onClick={(e) => Submit(e)}
          type="button"
          variant="primary"
        >
          Submit and Next <ArrowRight />
        </Button>{" "}
        </ButtonGroup> 
        </div>
        {location.state?
        <ToastComp key={Math.random()} setShow={location.state.setShow} data={location.state.data}/>:""}
   
      </div>
      
    </>
  );
}

export default SubSkills;
