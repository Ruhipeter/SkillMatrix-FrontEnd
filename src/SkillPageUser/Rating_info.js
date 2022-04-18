import React, { useEffect, useState } from "react";
import navCss from "../css/nav.css";
import homeCss from "../css/home.css";
import questionsCss from "../css/questions.css";
import { Card, Button } from "react-bootstrap";
import Buttons from "@mui/material/Button";
import { BsPencilSquare } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
import '../css/Profile.css'
import { GrLinkNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Rating_info from "./Rating_info";

export default function (props) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const [profile, setProfile] = useState([]);
  const [editform, setEditform] = useState(false);
  const changeComp = () => {
    setEditform(true);
  };
  const cancelEdit = () => {
    setEditform(false);
  };
  const navigate = useNavigate();
  const moveNext = (e, next) => {
    console.log(next);
    // navigate(next);
    const PostObj =Object.fromEntries(props.quesKeys)
    props.apiCall(PostObj);
  };

  const movePrev = (e, prev) => {
    navigate(prev);
  };

  return (
    <div className="rating_info">
      <h2>Rating info</h2>
      <Card style={{ border: "none" }}>
        <Card.Body>
          <div className="info">
            <div className="info_rating">
              <h6>Not Required</h6>
            </div>
            <div>
              <ReactStars
                count={6}
                value={1}
                edit={false}
                size={35}
                activeColor="#0073e6"
              />
            </div>
            <div className="info_rating">
              <h6>No Capability</h6>
            </div>
            <div>
              <ReactStars
                count={6}
                value={2}
                edit={false}
                size={35}
                activeColor="#0073e6"
              />
            </div>
            <div className="info_rating">
              <h6>Basic Level</h6>
            </div>
            <div>
              <ReactStars
                count={6}
                value={3}
                edit={false}
                size={35}
                activeColor="#0073e6"
              />
            </div>
            <div className="info_rating">
              <h6>Intermediate Level</h6>
            </div>
            <div>
              <ReactStars
                count={6}
                value={4}
                edit={false}
                size={35}
                activeColor="#0073e6"
              />
            </div>
            <div className="info_rating">
              <h6>Advanced Level</h6>
            </div>
            <div>
              <ReactStars
                count={6}
                value={5}
                edit={false}
                size={35}
                activeColor="#0073e6"
              />
            </div>
            <div className="info_rating">
              <h6>Expert/SME</h6>
            </div>
            <div>
              <ReactStars
                count={6}
                value={6}
                edit={false}
                size={35}
                activeColor="#0073e6"
              />
            </div>
          </div>
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
          )}
          <Button
            className="nextBtn"
            type="button"
            onClick={(e) => moveNext(e, props.next)}
            variant="primary"
          >
            Next Section <ArrowRight />
          </Button>{" "} */}
        </Card.Body>
      </Card>

      <>
        {/* <div className="editbutton">
          <Buttons
            variant={"outlined"}
            color={"warning"}

          >
            <BsPencilSquare size={30} />
            &nbsp;&nbsp;Edit
          </Buttons>
          <br />
          <br />
          <Buttons
            variant={"outlined"}
            color={"info"}

          >
            <GrLinkNext color={"#1976d2"} size={30} />
            &nbsp;&nbsp;Next
          </Buttons>
        </div> */}
      </>

      {/* {editform === true && (
      <>
        <hr />
        <br />
        <div className="editbutton">
          <Buttons
            variant={"outlined"}
            color={"error"}
            onClick={cancelEdit}
          >
            <MdOutlineCancelPresentation size={30} />
            &nbsp;&nbsp;Cancel Edit
          </Buttons>
          <br />
          <br />
          <Buttons variant={"outlined"} color={"success"}>
            <MdSend size={30} />
            &nbsp;&nbsp;Submit
          </Buttons>
          <br />
          <br />
        </div>
      </>
    )} */}
    </div>
  );
}
