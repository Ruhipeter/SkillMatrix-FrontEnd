import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import Sidebar from '../HomePage/sidebar'
import TopBar from '../HomePage/topBar'
import Rating_info from './Rating_info'
import {useParams} from "react-router-dom";
import axios from 'axios'
import ReactStars from 'react-rating-stars-component'
import SubSkills from './SubSkills'
import { useDispatch, useSelector } from 'react-redux'
import { listUserSkills } from '../Redux/actions/userSkillsActions'
import SubSkillsWithRatings from './SubSkillsWithRatings'

export default function Skills() {
  let id = useParams();
  const [subSkill,setSubSkills]=useState([]);
  
  const [subSkillWithRatings,setSubSkillsWithRatings]=useState([]);
  useEffect(()=>{
      axios.get(`https://localhost:7074/api/SubSkills/GetSubSkillsBySkillId?skillId=${id.qid}`).then((res)=>{
            setSubSkills(res.data);
      }).catch((err)=>{
        console.log(err);
      })
  },[id.qid])
  useEffect(()=>{
    const empId=localStorage.getItem("EmpId");
    setSubSkillsWithRatings([])
    axios.get(`https://localhost:7074/api/SubSkillsRatings/GetSubSkillRatingBySkillIdAndEmpId?skillId=${id.qid}&empId=${empId}`).then((res)=>{
      setSubSkillsWithRatings(res.data)
    }).catch((err)=>{
    })
},[id.qid])
  
  return (
    <>
    <TopBar/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 col-md-1 col-sm-1 sideNav">
            <Sidebar />
          </div>
          {/* {subSkillWithRatings && <SubSkills subSkill={subSkill} skill={id.skill} qId={id.qid}/>  }        */}
          <SubSkills subSkill={subSkill} skill={id.skill} qId={id.qid}/>
          {/* {subSkillWithRatings.length > 0 &&<SubSkillsWithRatings subSkill={subSkillWithRatings}skill={id.skill} qId={id.qid}/>} */}
        </div>
      </div>
    </>
  )
}
