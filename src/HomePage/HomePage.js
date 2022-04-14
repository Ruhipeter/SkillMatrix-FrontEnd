import React from 'react'
import Feeds from './feed'
import QuickAccess from './quickAccess'
import Sidebar from './sidebar'
import TopBar from './topBar'
import { useSelector } from 'react-redux'


export default function HomePage() {

 

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
              <Feeds />
          </div>
        </div>
      </div>
    </>
  )
}
