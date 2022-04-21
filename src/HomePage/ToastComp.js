import React, { useEffect, useState } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap';
import Checkmark from 'react-typescript-checkmark';
import './ToastComp.css'
 


function ToastComp(props) {
    const [show, setShow] = useState(props.setShow);
    const[data,setData]=useState("");

    useEffect(()=>{
        setData(props.data)
    },[props.data])
  return (
    <div>
        {[
  'Success',
].map((variant, idx) => (
  <ToastContainer key={Math.random()} className="p-3" position="bottom-end">
  <Toast className="d-inline-block m-1 " bg={variant.toLowerCase()}  key={Math.random()} onClose={() => setShow(false)} show={show} delay={3000} autohide>
    <Toast.Body className='text-white content' >
    <Checkmark
      size={40}
      backgroundColor='green'
      animationDuration={0.8}
      explosion={1.2}
    />
      <h6 className="content">{data} Submitted Successfully</h6>
    </Toast.Body>
  </Toast>
  </ToastContainer>
))}

    </div>
  )
}

export default ToastComp