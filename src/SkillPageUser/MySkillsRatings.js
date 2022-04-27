import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Badge, Card } from 'react-bootstrap';
import { AiFillExclamationCircle } from "react-icons/ai";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import ReactStars from 'react-rating-stars-component';

function MySkillsRatings(props) {
    const [subSkills,setSubSkills]=useState([]);

    useEffect(()=>{
        axios.get(`https://localhost:7074/api/SubSkillsRatings/GetSubSkillRatingBySkillIdAndEmpId?skillId=${props.id}&empId=${props.empId}&month=${props.month}`).then((res)=>{
            setSubSkills(res.data);
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })

    },[props])
  return (
    <div>
        {subSkills.map((ele, i) => {
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
                       <hr/>
                          </div>
                
                          
           
        );
      })}
    </div>
  )
}

export default MySkillsRatings