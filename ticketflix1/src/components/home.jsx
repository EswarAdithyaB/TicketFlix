import React, { useEffect } from 'react'
import { useContext, useRef } from "react";
import { Context } from "../context/Context";
import Movies from './movies';
import Sidebar from './sidebar';
import Navbar from './navbar';
import ParallaxComponent from './hero';
import Offers from './offers';
import './home.css'
export default function Home() {
  
    const { user, dispatch, isFetching } = useContext(Context);
    console.log(user);
    useEffect(() => {
        const handleScroll = () => {
          let pos = window.scrollY;
          let l1 = document.querySelector(".right");
          let l2 = document.querySelector(".left");
          var x = window.matchMedia("(max-width: 700px)");
          var y=0;
          var z=1;
          if(x.matches){
            y=980;
            z=0.4;
          }
          else
          {
            y=670
            z=1;
          }
          if (l1) {
            pos-=y;
            l1.style.right = `${pos*z}px`;
            l2.style.left = `${pos*z}px`;
          }
        };
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <>
    <Navbar/>
      <ParallaxComponent/>
      <Offers/>
        <div className='city-container'>
            <span className="titleCity">Select City</span>
            <div className='city'>Vijayawada</div>
            <div className='city'>Guntur</div>
            <div className='city'>Banglore</div>
            <div className='city'>Hyderabad</div>
            <div className='city'>Delhi</div>
        </div>
        <div className='popularTitle'>
            <span className="left">Popular</span>
            <span className="right">Movies</span>
        </div>
        
      <div className="home">
          <Movies />
          <Sidebar />
        </div>
        
      </>
  )
}
