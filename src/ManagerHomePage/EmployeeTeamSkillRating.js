import React, { useEffect, useState } from 'react'
import { Badge, Button, Card } from 'react-bootstrap';
import {
    BsFillExclamationTriangleFill,
    BsFillCheckSquareFill,
    BsCheckLg,
    BsXCircle,
    BsXLg,
    BsFillStarFill,
    BsCheckCircleFill,
    BsFillXCircleFill,
  } from "react-icons/bs";
  import { AiFillStar } from "react-icons/ai";
import axios from 'axios';

function EmployeeTeamSkillRating(props) {
    const [subSkillWithRatings, setSubSkillsWithRatings] = useState([]);
    useEffect(() => {
      axios
        .get(
          `https://localhost:7074/api/TeamSubSkillsRatings/GetTeamSubSkillRatingBySkillIdAndEmpId?skillId=${props.SkillId}&empId=${props.empId}`
        )
        .then((res) => {
          setSubSkillsWithRatings(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [props.SkillId]);

    const approveRating = (e, ratingId) => {
        console.log(ratingId);
        const empId = parseInt(localStorage.getItem("ApprovalEmpId"));
        async function ChangeRatingsAPI() {
          const empRating = {
            TeamSubSkillsRatingsId: ratingId,
            empId: empId,
            isApproved: 1,
          };
          await axios
            .put(
              "https://localhost:7074/api/TeamSubSkillsRatings/ChangeTeamSkillRatingStatus",
              empRating
            )
            .then((response) => {
              console.log(response);
              setSubSkillsWithRatings(
                subSkillWithRatings.map((data) => {
                  return data.empSubSkillsRatingsId === ratingId
                    ? {
                        ...data,
                        isApproved: response.data.isApproved,
                      }
                    : { ...data };
                })
              );
            })
            .catch((err) => console.log(err));
        }
        ChangeRatingsAPI();
      };
    
      const declineRating = (e, ratingId) => {
        console.log(ratingId);
        const empId = parseInt(localStorage.getItem("ApprovalEmpId"));
        async function ChangeRatingsAPI() {
          const empRating = {
            TeamSubSkillsRatingsId: ratingId,
            empId: empId,
            isApproved: 2,
          };
          await axios
            .put(
              "https://localhost:7074/api/TeamSubSkillsRatings/ChangeTeamSkillRatingStatus",
              empRating
            )
            .then((response) => {
              console.log(response);
              setSubSkillsWithRatings(
                subSkillWithRatings.map((data) => {
                  return data.empSubSkillsRatingsId === ratingId
                    ? {
                        ...data,
                        isApproved: response.data.isApproved,
                      }
                    : { ...data };
                })
              );
            })
            .catch((err) => console.log(err));
        }
        ChangeRatingsAPI();
      };
  return (
    <div>
      {subSkillWithRatings.map((data, i) => {
        return (
          <Card
            key={data.empSubSkillsRatingsId}
            className="col-md-12 mb-4"
            style={{ border: "none", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}
          >
            <Card.Body>
              <div className="row">
                <div className="col-md-6">
                  <h4> {data.subSkillName} </h4>{" "}
                </div>
                <div className="col-md-2">
                  {data.isApproved == 1 && (
                    <div>
                      <Badge bg="primary">Approved</Badge>{" "}
                    </div>
                  )}
                  {data.isApproved == 0 && (
                    <div>
                      <BsFillExclamationTriangleFill
                        color={"#cda220"}
                        size={25}
                      />{" "}
                      <p>Pending For Approval</p>
                    </div>
                  )}
                  {data.isApproved == 2 && (
                    <div>
                      <Badge bg="danger">Declined</Badge>{" "}
                    </div>
                  )}
                </div>
                <div className="col-md-1">
                  <h4
                    style={{
                      color: "#024fbf",
                      fontWeight: "700",
                      marginLeft: "8px",
                    }}
                  >
                    {" "}
                    {data.ratings} <AiFillStar />{" "}
                  </h4>
                </div>
                <div className="col-md-3">
                  {data.isApproved == 0 && (
                    <div>
                      <Button
                        variant="success"
                        style={{ marginLeft: "15px" }}
                        onClick={(e) =>
                            approveRating(e, data.empSubSkillsRatingsId)
                          }
                        
                      >
                        <BsCheckLg />
                      </Button>
                      <Button
                        variant="danger"
                        style={{ marginLeft: "15px" }}
                        onClick={(e) =>
                            declineRating(e, data.empSubSkillsRatingsId)
                          }
                        
                        
                        
                      >
                        <BsXLg />
                      </Button>
                    </div>
                  )}
                  {data.isApproved == 1 && (
                    <div style={{ marginLeft: "42px" }}>
                      <BsCheckCircleFill color={"#0d6efd"} size={35} />
                    </div>
                  )}
                  {data.isApproved == 2 && (
                    <div style={{ marginLeft: "42px" }}>
                      <BsFillXCircleFill color={"#dc3545"} size={35} />
                    </div>
                  )}
                </div>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  )
}

export default EmployeeTeamSkillRating