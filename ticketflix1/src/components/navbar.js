import React, { useEffect, useState } from 'react';
import './navbar.css';
import {RxCross2} from "react-icons/rx";
import {LiaBarsSolid} from "react-icons/lia";
function Navbar() {
  useEffect(() => {
    // JavaScript for navigation bar effect on scroll
    window.addEventListener("scroll", function () {
      var header = document.querySelector("header");
      header.classList.toggle('sticky', window.scrollY > 0);
    });
  }, []);
  const[clicked,setClicked]=useState(false);
  const handleClick = () => {
      setClicked(!clicked);
  };
  return (
    <div>
   <header>
      <a href="#" className="brand">Brand</a>
      <div className={clicked ? "menu active" : "menu"}>
        <div className='btn close-btn' onClick={handleClick}>
        <RxCross2 size={30}/>
        </div>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Login/SignUp</a>
      </div>
      <div className='btn' onClick={handleClick}>
        <LiaBarsSolid size={30}/>
      </div>
    </header>
    </div>
  );
};

export default Navbar;
