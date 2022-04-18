import React, { useState } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap';
import Checkmark from 'react-typescript-checkmark';
import './ToastComp.css'
 


function ToastComp(props) {
    const [show, setShow] = useState(props.setShow);
  return (
    <div>
        {[
  'Success',
].map((variant, idx) => (
  <ToastContainer className="p-3" position="bottom-end">
  <Toast className="d-inline-block m-1 " bg={variant.toLowerCase()} key={idx} onClose={() => setShow(false)} show={show} delay={3000} autohide>
    <Toast.Body className='text-white content' >
    <Checkmark
      size={40}
      backgroundColor='green'
      animationDuration={0.8}
      explosion={1.2}
    />
      <h6 className="content">Data Submitted Successfully</h6>
    </Toast.Body>
  </Toast>
  </ToastContainer>
))}

    </div>
  )
}

export default ToastComp