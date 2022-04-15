import React from "react";
import { Link , NavLink } from "react-router-dom";
import indexCss from '../css/index.css'



function Sidebar() {
  return (
    <>
      <ul>
        <NavLink to="/ManagerHomePage" as="li" >
          <li>
          <img
            style={{ height: "30px", width: "30px" }}
            src="https://img.icons8.com/material-rounded/148/ffffff/home.png"
          />
          <h6>Home</h6>
          </li>
          </NavLink>

          <NavLink to="/ApprovalPage" as="li" >
          <li>
          <img
            style={{ height: "30px", width: "30px" }}
            src="https://img.icons8.com/ios-filled/150/ffffff/double-tick.png"
          />
          <h6>Approvals</h6>
          </li>
          </NavLink>
          <NavLink to="/BasicDetails" as="li" >
          <li>
          <img
            style={{ height: "30px", width: "30px" }}
            src="https://img.icons8.com/ios-filled/150/ffffff/add-user-male.png"
          />
          <h6>Add Employee</h6>
          </li>
          </NavLink>
          {/* <NavLink to="/Employees" as="li" >
          <li>
          <img
            style={{ height: "30px", width: "30px" }}
            src="https://img.icons8.com/ios-glyphs/130/ffffff/group.png"
          />
          <h6>Employee Directory</h6>
          </li>
          </NavLink> */}
      </ul>
    </>
  );
}

export default Sidebar;
