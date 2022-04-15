<<<<<<< HEAD
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Rating_info from "./Rating_info";
import { listUserSkills } from "./Redux/actions/userSkillsActions";
import axios from "axios";

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
  };

  useEffect(() => {
    const empId = localStorage.getItem("EmpId");
    if (empId) {
      dispatch(listUserSkills(empId));
    }
  }, []);

  const moveNext = (e) => {
    console.log("skills", userSkills);
    let NextRoute = "";
    userSkills.map((ele, i) => {
      if (ele.questionId == props.qId) {
        NextRoute = `/${userSkills[i + 1].questionName}/${
          userSkills[i + 1].questionId
        }`;
        console.log(NextRoute);
=======
import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Rating_info from './Rating_info'
import { listUserSkills } from './Redux/actions/userSkillsActions'
import axios from 'axios'

function SubSkills(props) {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const val={
        "values": [],
      }
    const empId=localStorage.getItem("EmpId");
    const userSkills = useSelector(state =>state.rootReducer.userSkill.userSkills);
    const obj={
        "subskillRatingArr": [],
        "empId": empId,
        "skillId": props.qId
>>>>>>> 4dd555787ead6779dc1bfebfa9331b42aec4919b
      }
    });

<<<<<<< HEAD
    navigate(NextRoute);
  };

  const ratingChanged = (newRating, id) => {
    const index = obj.subskillRatingArr.findIndex((object) => object[0] === id);
    {
      index > -1
        ? (obj.subskillRatingArr[index] = [id, newRating])
        : obj.subskillRatingArr.push([id, newRating]);
    }
  };
=======
    useEffect(()=>{
        const empId=localStorage.getItem("EmpId");
        if(empId){
            dispatch(listUserSkills(empId));
        }
    },[])
    const moveNext = (e) => {
        console.log("skills",userSkills)
        let NextRoute="";
        userSkills.map((ele,i)=>{
            if(ele.questionId==props.qId){
                NextRoute=`/${userSkills[i+1].questionName}/${userSkills[i+1].questionId}`
                console.log(NextRoute)
            }
>>>>>>> 4dd555787ead6779dc1bfebfa9331b42aec4919b

  const Submit = (e) => {
    axios
      .post(
        `https://localhost:7074/api/SubSkillsRatings/PostEmpSubSkillRatings`,
        obj
      )
      .then((res) => {
        console.log(res.data);
      });
    moveNext(e);
  };

<<<<<<< HEAD
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
                                <h4>{ele.subSkillName}:</h4>
                              </div>
                              <div className="ReactStars">
                                <ReactStars
                                  count={6}
                                  value={0}
                                  edit={true}
                                  size={50}
                                  onChange={(e, name) =>
                                    ratingChanged(e, ele.subSkillId)
                                  }
                                  activeColor="#0073e6"
                                />
                              </div>
=======
    const ratingChanged = (newRating,id) => {
        const index = obj.subskillRatingArr.findIndex(object => object[0]=== id);        
        {(index > -1)? obj.subskillRatingArr[index] = [id,newRating]:obj.subskillRatingArr.push([id,newRating])};
      };

      const Submit = (e) => {
        axios.post(`https://localhost:7074/api/SubSkillsRatings/PostEmpSubSkillRatings`,obj).then((res)=>{
            console.log(res.data)
        })
        moveNext(e);
      };
     console.log(val.values) 
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
                                                val.values.push(0);
                                                return (
                                                    <div key={i}>
                                                        <div className="wrapper" >

                                                            <div className="skill">
                                                                <h4>{ele.subSkillName}:</h4>
                                                            </div>
                                                            <div className="ReactStars">
                                                                
                                                                <ReactStars
                                                                    count={6}
                                                                    value={val.values[i]?0:0}
                                                                    edit={true}
                                                                    size={50}
                                                                    onChange={(e,name) => ratingChanged(e,ele.subSkillId)}
                                                                    activeColor="#0073e6"
                                                                />
                                                            </div>
                                                        </div>
                                                        <hr /></div>
                                                )

                                            })}
                                        </div>
                                    </Card.Body>
                                </div>
>>>>>>> 4dd555787ead6779dc1bfebfa9331b42aec4919b
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
          <Button
            className="SubmitBtn"
            type="button"
            variant="primary"
            onClick={(e) => Submit(e)}
          >
            Submit & Next <ArrowRight />
          </Button>{" "}
        </div>
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
        <Button
          className="nextBtn"
          onClick={(e) => moveNext(e)}
          type="button"
          variant="primary"
        >
          Next Section <ArrowRight />
        </Button>{" "}
      </div>
    </>
  );
}

export default SubSkills;
