import React, { useState } from "react";
import { Button, FormControl, InputGroup, ToastContainer } from "react-bootstrap";
import bgImg from "../images/vinoveBg.jpg";
import logo from "../images/logo.jpg";
import { Password } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from './login';
import homeCss from '../css/home.css'
import ToastComp from "../HomePage/ToastComp";
import { Toast } from "bootstrap";



function ForgotPasswordPage({loggedIn,setLoggedIn}) {
  let navigate = useNavigate(); 
  

  const [username , setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [inputStyle, setInputStyle] = useState("inputBox")
  const [show, setShow] = useState(true);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
        setInputStyle('setInputBox')
        return (
            alert("Password and Confirm Password Should be same")
        )
    }
    let formData={
      "username":username,
      "password":password
    }
   
    e.preventDefault()
    axios
    .put("https://localhost:7074/api/User/ForgotPassword", formData)
    .then(res => {
      const data = res.data;
      console.log(data)
      if(data.responseCode == 200){
      console.log("Password Updated Successfully")
      navigate('/home');
    }
    })
    .catch(err => console.log(err));
  };

  return (
    <>
      <div className="container-fluid" style={{backgroundColor:'white'}}>
        <div className="row">
          <div className="col-md-9" style={{ marginLeft: "inherit" }}>
            <img src={bgImg} />
          </div>
          <div className="col-md-3">
            <img
              src={logo}
              style={{
                height: "100px",
                width: "200px",
                marginTop: "150px",
                marginLeft: "10px",
              }}
            />
            <form onSubmit={handleSubmit}>
              <div style={{ marginTop: "10%", padding: "5%" }}>
                <h3 className="mb-1">Forgot Password</h3>
                <p className="mb-4">Please Update your Password</p>
                <InputGroup size="lg" className="mb-3">
                  <FormControl
                    aria-label="Large" onChange={e => setUsername(e.target.value)} 
                    placeholder="Username"
                    style={{ padding: "15px" }}
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
                <InputGroup size="lg" className="mb-3">
                  <FormControl type="password" 
                    aria-label="Large" onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    className={inputStyle}
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
                <InputGroup size="lg" className="mb-3">
                  <FormControl type="password"
                    aria-label="Large" onChange={e => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    className={inputStyle}
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
                <Button onSubmit={ (e) => {handleSubmit(e)}}
                  style={{ width: "220px", fontSize: "20px" , float:'left' }}
                  variant="primary"
                  type="submit"
                >
                  Update Password
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPasswordPage;
