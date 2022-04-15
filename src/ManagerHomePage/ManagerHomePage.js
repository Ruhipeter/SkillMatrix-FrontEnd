import React from 'react'
import Feeds from '../ManagerHomePage/feed'
import QuickAccess from '../ManagerHomePage/quickAccess'
import Sidebar from '../ManagerHomePage/sidebar'
import TopBar from '../ManagerHomePage/topBar'
import { useSelector } from 'react-redux'
import indexCss from "../css/index.css";


export default function ManagerHomePage() {

  return (
    <>
    <TopBar/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 col-md-1 col-sm-1 sideNav">
            <Sidebar />
          </div>

          <div className="col-11 col-md-4 col-sm-11" style={{marginLeft:"20px"}}>
              <QuickAccess/>
          </div>
          <div className="col-11 col-md-7 col-sm-11 m-sm-5 m-md-0"  >
              <Feeds/>
          </div>
        </div>
      </div>
    </>
  )
}
