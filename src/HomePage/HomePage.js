import React, { useState } from 'react'
import Feeds from './feed'
import QuickAccess from './quickAccess'
import Sidebar from './sidebar'
import TopBar from './topBar'
import { useSelector } from 'react-redux'
import Toast from 'react-bootstrap/Toast'
import { ToastContainer } from 'react-bootstrap'


export default function HomePage() {
  const [show, setShow] = useState(false);

  return (
    <>
    <TopBar/>
    {[
  'Success',
].map((variant, idx) => (
  <ToastContainer  position='bottom-end'>
  <Toast className="d-inline-block m-1" bg={variant.toLowerCase()} key={idx} onClose={() => setShow(false)} show={show} delay={3000} autohide>
    <Toast.Body className='text-white'>
      Data Submitted Successfully
    </Toast.Body>
  </Toast>
  </ToastContainer>
))}
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
