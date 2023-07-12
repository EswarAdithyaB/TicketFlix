import { Link } from "react-router-dom";
import "./sidebar.css";
import React,{useState} from "react";
import {BiSolidDownArrow,BiSolidRightArrow} from "react-icons/bi";
export default function Sidebar() {
    
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
        <div className="lan">
            <label> Telugu</label>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        </div>
        <div  className="lan">
            <label > Hindi</label>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
            
        </div>
        <div className="lan">
            <label> English</label>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
        </div>
    </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">Genres</span>
        <div className="option" onClick={handelClick1}>{clicked1 ?<BiSolidDownArrow/>:<BiSolidRightArrow/> }</div>
    </div>
    <div className={clicked1?"lanes act1":"lanes"}>
        <div className="lan">
            <label> Drama</label>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        </div>

        <div  className="lan">
            <label > Action</label>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
            
        </div>

        <div className="lan">
            <label> Adveture</label>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
        </div>
        
        <div className="lan">
            <label> Comedy</label>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
        </div>
        
        <div className="lan">
            <label> Thriller</label>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
        </div>
    </div>
    </div>
  );
}