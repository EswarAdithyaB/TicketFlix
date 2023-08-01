import "./sidebar.css";
import React,{useState} from "react";
import {BiSolidDownArrow,BiSolidRightArrow} from "react-icons/bi";
export default function Sidebar({changeLang,lang,changeGenere,genere}) {
    
const [clicked,setCklicked]=useState(false);
    const handelClick = () =>{
        setCklicked(!clicked);
    }
    const [clicked1,setCklicked1]=useState(false);
        const handelClick1 = () =>{
            setCklicked1(!clicked1);
        }
  return (
    <div className="sidebar">
        <span className="sidebarTitlemain">Filters</span>
      <div className="sidebarItem">
        <span className="sidebarTitle">Select Language</span>
        <div className="option" onClick={handelClick}>{clicked ?<BiSolidDownArrow/>:<BiSolidRightArrow/> }</div>
        </div>
    <div className={clicked?"lanes act":"lanes"}>
        
        {lang.map((item) => (
            <div className="lan">
            <label> {item.label}</label>
            <input type="checkbox" id={item.id} onChange={()=>changeLang(item.id)}/>
            </div>
         ))}
    </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">Genres</span>
        <div className="option" onClick={handelClick1}>{clicked1 ?<BiSolidDownArrow/>:<BiSolidRightArrow/> }</div>
    </div>
    <div className={clicked1?"lanes act1":"lanes"}>
        {genere.map((item) =>(
        <div className="lan">
            <label> {item.label}</label>
            <input type="checkbox" id={item.id} onChange={()=>changeGenere(item.id)}/>
        </div>
        ))}
    </div>
    </div>
  );
}