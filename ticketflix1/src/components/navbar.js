import React, { useEffect, useState } from 'react';
import './navbar.css';
import { RxAvatar} from "react-icons/rx";
import {RxCross2} from "react-icons/rx";
import { useContext, useRef } from "react";
import { Context } from "../context/Context";
import { Link } from 'react-router-dom';
import {LiaBarsSolid} from "react-icons/lia";
function Navbar() {
  const { user, dispatch, isFetching } = useContext(Context);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    
    console.log(user === null ? "yes" : "no");
    // JavaScript for navigation bar effect on scroll
    window.addEventListener("scroll", function () {
      setIsSticky(window.scrollY > 0);
    });
  }, []);
  const[clicked,setClicked]=useState(false);
  const[clicked1,setClicked1]=useState(false);
  const handleClick = () => {
      setClicked(!clicked);
      setClicked1(false);
  };
  
  const handleClick1 = () => {
    setClicked1(!clicked1);
    console.log(clicked1);
};

const handleSubmit2 = async (e) => {
  e.preventDefault();
    dispatch({ type: "LOGOUT" });
    console.log(user);
};
  return (
    <div>
   <header className={isSticky?"sticky":""}>
      <a href="#" className="brand">Brand</a>
      <div className={clicked ? "menu active" : "menu"}>
        <div className='btn close-btn' onClick={handleClick}>
        <RxCross2 size={30}/>
        </div>
        <a href="#">Home</a>
        <a href="#">About</a>
        {
          user === null ?
        <Link to="login">Login/SignUp</Link>:
        <>
        <div className='profile'> 
          {user.username}
          <div className='btn1' onClick={handleClick1}>
            <RxAvatar size={30}/>
          </div>
        </div>
            <div className={clicked1 ? "m active" : "m"}>
              <div className={clicked? "am" : "a"}>
                <div className='p'>Tickets</div>
                <div className='p'>Edit profile</div>
                <div className='p' onClick={handleSubmit2}>Logout</div>
              </div>
            </div>
            </>
        }
        </div>
      <div className='btn' onClick={handleClick}>
        <LiaBarsSolid size={30}/>
      </div>
    </header>
    </div>
  );
};

export default Navbar;
