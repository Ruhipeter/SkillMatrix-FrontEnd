import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import indexCss from '../css/index.css'
import { listUserSkills } from "../Redux/actions/userSkillsActions";


function Sidebar() {
  const dispatch=useDispatch();
  const userSkills = useSelector(state =>state.rootReducer.userSkill.userSkills);
  // const route='/'+ userSkills[0].questionName+'/'+userSkills[0].questionId;

  useEffect(()=>{
    const empId=localStorage.getItem("EmpId");
    dispatch(listUserSkills(empId));
  },[])
 console.log(userSkills[0])
  return (
    <>
      <ul>
      <NavLink to="/home" as="li" >
          <li>
            <img
              style={{ height: "30px", width: "30px" }}
              src="https://img.icons8.com/material-rounded/148/ffffff/home.png"
            />
            <h6>Home</h6>
          </li>
        </NavLink>
      
           { userSkills[0] && 
           <NavLink to={`/${userSkills[0].questionName}/${userSkills[0].questionId}`} as="li" >
              <li>
                <img
                  style={{ height: "30px", width: "30px" }}
                  src={userSkills[0].questionLogo}
                />
                <h6>Skills</h6>
              </li>
            </NavLink>
        }

     
      </ul>
      {/* <ul>
        <NavLink to="/home" as="li" >
          <li>
            <img
              style={{ height: "30px", width: "30px" }}
              src="https://img.icons8.com/material-rounded/148/ffffff/home.png"
            />
            <h6>Home</h6>
          </li>
        </NavLink>

        <NavLink to="/GenericSkills" as="li">
          <li>
            <img
              style={{ height: "30px", width: "30px" }}
              src="https://img.icons8.com/pastel-glyph/148/ffffff/person-male--v3.png"
            />
            <h6>General Skills</h6>
          </li>
        </NavLink>
        <NavLink to="/BasicFoundation" as="li">
          <li>
            <img
              style={{ height: "30px", width: "30px" }}
              src="https://img.icons8.com/fluency-systems-filled/148/ffffff/github.png"
            />
            <h6>Basic Foundation</h6>
          </li>
        </NavLink>
        <NavLink to="/Testing" as="li">
          <li>
            <img
              style={{ height: "30px", width: "30px" }}
              src="https://img.icons8.com/external-itim2101-fill-itim2101/164/ffffff/external-coding-engineering-itim2101-fill-itim2101.png"
            />
            <h6>Testing</h6>
          </li>
        </NavLink>
        <NavLink to="/SdlcPractices" as="li">
          <li>
            <img
              style={{ height: "30px", width: "30px" }}
              src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/164/ffffff/external-coding-coding-kiranshastry-solid-kiranshastry-1.png"
            />
            <h6>SDLC Practices</h6>
          </li>
        </NavLink>
        <NavLink to="/JsAndFrontend" as="li">
          <li>
            <img
              style={{ height: "30px", width: "30px" }}
              src="https://img.icons8.com/ios-filled/150/ffffff/javascript.png"
            />
            <h6>JS & Frontend</h6>
          </li>
        </NavLink>
        <NavLink to="/TeamSkills" as="li">
          <li>
            <img
              style={{ height: "30px", width: "30px" }}
              src="https://img.icons8.com/ios-filled/150/ffffff/cloud-sync--v1.png"
            />
            <h6>Team Skills</h6>
          </li>
        </NavLink>
        <NavLink to="/SqlServer" as="li">
          <li>
            <img
              style={{ height: "30px", width: "30px" }}
              src="https://img.icons8.com/external-outline-juicy-fish/160/ffffff/external-sql-coding-and-development-outline-outline-juicy-fish.png"
            />
            <h6>SQL Server</h6>
          </li>
        </NavLink>
        <NavLink to="/WebServices" as="li">
          <li>
            <img
              style={{ height: "30px", width: "30px" }}
              src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/132/ffffff/external-web-web-hosting-kmg-design-glyph-kmg-design.png"
            />
            <h6>Web Services/Web APIs</h6>
          </li>
        </NavLink>
        <NavLink to="/CloudAndDevops" as="li">
          <li>
            <img
              style={{ height: "30px", width: "30px" }}
              src="https://img.icons8.com/ios-filled/150/ffffff/cloud-sync--v1.png"
            />
            <h6>Cloud And Devops</h6>
          </li>
        </NavLink>



      </ul> */}
    </>
  );
}

export default Sidebar;
