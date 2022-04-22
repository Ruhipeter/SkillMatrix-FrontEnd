import React, { useEffect, useState } from 'react'
import Feeds from './feed'
import QuickAccess from './quickAccess'
import Sidebar from './sidebar'
import TopBar from './topBar'
import { useSelector } from 'react-redux'
import ToastComp from './ToastComp'
import { useLocation } from 'react-router-dom'
import axios from 'axios'


export default function HomePage() {
  const EmpId=localStorage.getItem('EmpId')
  const [updateDate, setUpdateDate] = React.useState([]);
  const [empUpdatedOn , setEmpUpdatedOn]= React.useState()
  const [empUpdateOnTime , setEmpUpdatedOnTime] = useState()


  const location = useLocation();
  useEffect(()=>{
    axios.get(`https://localhost:7074/api/UpdatedOn/GetUpdateTimeByEmpId?EmpId=${EmpId}`).then((response)=>{
      setUpdateDate(response.data);
      console.log(response.data)
      const udate = new Date(`${response.data[0].updated_On}`);
      setEmpUpdatedOn(`${udate.toDateString()} `)
      let onlyTime = (`${udate.toTimeString()} `).toString()
      setEmpUpdatedOnTime(onlyTime.slice(0,9));
      
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  console.log(location)
  
  return (
    <>
    <TopBar/>
    
      <div className="container-fluid" key={Math.random()}>
        <div className="row">
          <div className="col-1 col-md-1 col-sm-1 sideNav">
            <Sidebar />
          </div>

          <div className="col-11 col-md-4 col-sm-11" style={{marginLeft:"20px"}} key={Math.random()}>
              <QuickAccess updateDate={updateDate} empUpdatedOn={empUpdatedOn} empUpdateOnTime={empUpdateOnTime} />
          </div>
          <div className="col-11 col-md-7 col-sm-11 m-sm-5 m-md-0"  >
              <Feeds />
              {location.state?
        <ToastComp setShow={location.state.setShow} data={"All Skills"}/>:""}
          </div>
          
        </div>
        
      </div>
    </>
  )
}
