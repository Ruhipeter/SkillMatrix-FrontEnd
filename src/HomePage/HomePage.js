import React, { useState } from 'react'
import Feeds from './feed'
import QuickAccess from './quickAccess'
import Sidebar from './sidebar'
import TopBar from './topBar'
import { useSelector } from 'react-redux'
import ToastComp from './ToastComp'
import { useLocation } from 'react-router-dom'


export default function HomePage() {

  const location = useLocation();
  if(location.state){
    console.log(location)
  }
  
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
              {location.state &&
        <ToastComp setShow={true}/>}
          </div>
          
        </div>
        
      </div>
    </>
  )
}
