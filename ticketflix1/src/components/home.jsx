import React, { useEffect,useState } from 'react'
import { useContext, useRef } from "react";
import { Context } from "../context/Context";
import Movies from './movies';
import Sidebar from './sidebar';
import Navbar from './navbar';
import ParallaxComponent from './hero';
import Offers from './offers';
import axios from "axios";
import './home.css'
export default function Home() {
    const [lang, setLang] = useState([
      { id: 1, checked: false, label: 'Telugu' },
      { id: 2, checked: false, label: 'Hindi' },
      { id: 3, checked: false, label: 'English' },
    ]);
    const [gener, setGener] = useState([
      { id: 1, checked: false, label: 'Action' },
      { id: 2, checked: false, label: 'Sci-FI' },
      { id: 3, checked: false, label: 'Frictional' },
      { id: 4, checked: false, label: 'Horror' },
      { id: 5, checked: false, label: 'Thriller' },
    ]);
    const handleChangeChecked = (id) => {
      const cusinesStateList = lang;
      const changeCheckedLang = cusinesStateList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setLang(changeCheckedLang);
    };
    const handleChangeChecked2 = (id) => {
      const generStateList = gener;
      const changeCheckedgener = generStateList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setGener(changeCheckedgener);
    };
    const[list,SetList]=useState([])
    const[data,setData]=useState([]);
    useEffect(()=>{
      const feachPost = async() =>{
      try{
      const res = await axios.get("http://localhost:5000/api/movie/f/featured");
      setData(res.data);
      } catch(err) {
        console.log("fail");
        console.log(err.response);
      }}
      feachPost();

    },[]);
    useEffect(()=>{
    SetList(data);
    },[data])
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

      
      

      const applyfilter=() => {
        let moviedata=data;
        const langChecked = lang
        .filter((item) => item.checked)
        .map((item) => item.label);
  
      if (langChecked.length) {
          moviedata=moviedata.filter((item) =>
          item.languages.some((lang) => langChecked.includes(lang)))
      }

      const generChecked = gener
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (generChecked.length) {
        moviedata=moviedata.filter((item) =>
        item.genere.some((genere) => generChecked.includes(genere)))
    }
    SetList(moviedata);
      };

    useEffect(()=>{
      applyfilter();
    },[gener,lang])

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
          <Movies data={list}/>
          <Sidebar 
              lang={lang}
              changeLang={handleChangeChecked}
              genere={gener}
              changeGenere={handleChangeChecked2}
          />
        </div>
        
      </>
  )
}
