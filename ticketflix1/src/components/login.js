import React, { useState } from 'react';
import { FaFacebook , FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../context/Context";
import Background from './background';
import './login.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {  
const navigate = useNavigate();
const [isSignUpActive, setIsSignUpActive] = useState(false);
const userRef = useRef();
const passwordRef = useRef();
const { user, dispatch, isFetching } = useContext(Context);
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(false);



const handleSubmitregis = async (e) => {
  e.preventDefault();
  setError(false);
  try {
    const res = await axios.post("http://localhost:5000/api/auth/register", {
      username,
      email,
      password,
    });
    res.data && console.log("Success");
    alert("Successfully Registered");
    handleLogInClick();
  } catch (err) {
    setError(true);
    console.log("fail")
  }
};


const handleSubmit = async (e) => {
  e.preventDefault();
  dispatch({ type: "LOGIN_START" });
  try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
      username: userRef.current.value,
      password: passwordRef.current.value,
    });
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    console.log(res.data);
    navigate('/');
    
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE" });
    console.log(user);
  }
};
  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleLogInClick = () => {
    setIsSignUpActive(false);
  };
  return (
    <>
    <div className='mainpage'>
    <Background/>
    <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
      
      <div className="form-container sign-up-container">
        <form onSubmit={handleSubmitregis}>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
            <FaFacebook size={'2.5em'} color="#0165E1"/>
            </a>
            <a href="#" className="social">
              <FcGoogle size={'2.5em'}/>
            </a>
            <a href="#" className="social">
            <FaTwitter size={'2.5em'} color='#00acee'/>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="UserName" 
          onChange={(e) => setUsername(e.target.value)}/>
          <input 
            type="text" 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)}
            />
          <input 
            type="password" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}
            />
          <button type="submit">Sign Up</button>
        </form>
        
        <div className="ghost-min">
          <p>Do you have a account</p>
          <button onClick={handleLogInClick}>Log In</button>
          </div>
          {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
      </div>




      <div className="form-container log-in-container">
      <form className="loginForm" onSubmit={handleSubmit}>
          <h1>Log in</h1>
          <div className="social-container">
            <a href="#" className="social">
            <FaFacebook size={'2.5em'} color="#0165E1"/>
            </a>
            <a href="#" className="social">
            <FcGoogle size={'2.5em'}/>
            </a>
            <a href="#" className="social">
            <FaTwitter size={'2.5em'} color='#00acee'/>
            </a>
          </div>
          <span>or use your account</span>
          
          <input type="text" placeholder="Username" ref={userRef}/>
          <input type="password" placeholder="Password" ref={passwordRef}/>
          <a href="#">Forgot your password?</a>
          <button type='submit' disabled={isFetching}>Log In</button>
          <div className='ghost-min'>
            <p>Don't have account</p>
          <button onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </form>
      </div>




      <div className="overlay-container">
        <div className={`overlay ${isSignUpActive ? 'right-panel-active' : ''}`}>
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>Already have an account? Log In</p>
            <button className="ghost" onClick={handleLogInClick}>Log In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, There!</h1>
            <p>Don't have an account? Sign Up Free</p>
            <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
 export  default Login;
