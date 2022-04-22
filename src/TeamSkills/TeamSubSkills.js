import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Rating_info from '../SkillPageUser/Rating_info';

function TeamSubSkills(props) {
    const [subSkills, setSubSkills] = useState([]);
    const navigate= useNavigate();
    const userTeamSkills = useSelector(
        (state) => state.rootReducer.userTeamSkill.userTeamSkills
      );
    // const [id,setId]=useState(props.teamSkillId);

    // useEffect(() => {
    //     const empId = localStorage.getItem("EmpId");
    //     const teamId = localStorage.getItem("teamId");
    //     if (empId) {
    //       dispatch(listUserTeamSkills(empId,teamId));
    //     }
    //   }, []);

    const moveNext = (e) => {
        let NextRoute = "";
        let sname="";
        let id=0;
        userTeamSkills.map((ele, i) => {
          if (ele.teamSkillId == props.qId && userTeamSkills[i + 1]) {
            NextRoute = `/TeamSkills/${userTeamSkills[i + 1].teamSkillName}`;
            sname=userTeamSkills[i+1].teamSkillName;
            id=userTeamSkills[i+1].teamSkillId;
        }
          else if(ele.teamSkillId == props.qId)
          {
            NextRoute="/home";
    
          }
          
        });
        console.log(NextRoute);
        navigate(NextRoute, {state:{id:id,sname:sname}} );
      };

    const ratingChanged = (newRating) => {
        console.log(newRating)
      };
      console.log(userTeamSkills)
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
                      
                      return (
                        <div key={i}>
                          <div className="wrapper">
                            <div className="skill">
                              <h4>{ele.teamSubskillsName}</h4>
                              
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
        type="button"
        variant="outline-dark"
      ><ArrowLeft />Previous Section</Button>      

      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="First group">
      <Button
        className="nextBtn"
        type="button"
        variant="primary"
        onClick={moveNext}
      >
        Submit and Next <ArrowRight />
      </Button>{" "}
      </ButtonGroup> 
      </div>
      {/* {location.state?
      <ToastComp key={Math.random()} setShow={location.state.setShow} data={location.state.data}/>:""} */}
 
    </div>
    
  </>

  )

  }
export default TeamSubSkills;