import React from 'react'
import Feeds from './feed'
import QuickAccess from './quickAccess'
import Sidebar from './sidebar'
import TopBar from './topBar'
import { useSelector } from 'react-redux'
import indexCss from "../css/index.css";
import ApprovalDataTable from './EmployeeApprovalTable'
import Card from "react-bootstrap/Card";



export default function ApprovalPage() {

  return (
    <>
    <TopBar/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 col-md-1 col-sm-1 sideNav">
            <Sidebar />
          </div>

          <div className="col-11 col-md-10 col-sm-11" style={{marginLeft:"20px"}}>
            <h2 style={{marginTop:'20px',marginBottom:'20px'}}>Employee Rating Approval Requests</h2>
          <Card
              style={{
                marginTop: "30px",
                marginBottom: "20px",
                padding: "10px",
                border:"none",

              }}
            >
              <Card.Body>
              <ApprovalDataTable/>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
