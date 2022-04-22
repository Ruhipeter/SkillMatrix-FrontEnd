import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Card } from 'react-bootstrap'
import { useLocation, useParams } from 'react-router-dom'
import Sidebar from '../HomePage/sidebar'
import TopBar from '../HomePage/topBar'
import Rating_info from '../SkillPageUser/Rating_info'
import axios from 'axios'
import ReactStars from 'react-rating-stars-component'
import { useDispatch, useSelector } from 'react-redux'
import { listUserSkills } from '../Redux/actions/userSkillsActions'
import TeamSubSkills from './TeamSubSkills'
import SkillMatrix from '../ManagerHomePage/skillMatrix'
import { ArrowLeft, ArrowRight } from '@mui/icons-material'


function TeamSkills() {
  let location=useLocation();
  let id=location.state;
  const [subSkill,setSubSkills]=useState([]);
  useEffect(()=>{
    axios.get(`https://localhost:7074/api/TeamSubSkills/GetAllTeamSubSkillsbySkillId?skillId=${id.id}`).then((res)=>{
          setSubSkills(res.data);
    }).catch((err)=>{
      console.log(err);
    })
},[id.id])
  return (
    <>
    <TopBar/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 col-md-1 col-sm-1 sideNav">
            <Sidebar />
          </div>
          {/* <div className="col-md-7">
            <br/>
          { skills.length>=1 && <div>
                    <Card className="questionsCard">
                        <div className="row"><div>
                <br />
                  <div className="col-md-6"><h2>{skills[count].teamSkillName}</h2>
                  
                  </div> 
                <br />
                <TeamSubSkills teamSkillId={skills[count].teamSkillId}/> 
                <br />
              </div><ButtonGroup >
              {count>0?
                      <Button className="nextBtn" type="button" variant="primary" style={{float:"right" , width:"10%"}} onClick={()=>setCount(count-1)}><ArrowLeft />Prev Section </Button>
                    :"" } 
              {count<skills.length-1?
                      <Button className="nextBtn" type="button" variant="primary" style={{float:"right"}} onClick={()=>setCount(count+1)}>Next Section <ArrowRight /></Button>
                    :"" } </ButtonGroup>
              </div>
            </Card>
            <br/> <br/>
        </div>}
           
         
        </div> */}
        <TeamSubSkills subSkill={subSkill} skill={id.sname} qId={id.id}/>
        
          {/* {subSkillWithRatings.length === 0 &&<SubSkills subSkill={subSkill} skill={id.skill} qId={id.qid}/>}
          {subSkillWithRatings.length > 0 &&<SubSkillsWithRatings subSkill={subSkillWithRatings}skill={id.skill} qId={id.qid}/>} */}
        </div>
      </div>
    </>
  )
}

export default TeamSkills