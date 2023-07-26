import React, { useEffect, useState } from 'react';
import './showTiming.css';
import Times from './times';
export default function ShowTimes(props) {
  const { shows, lang } = props;
  const[showlist,setShowlist]=useState([]);
  useEffect(() =>{
    let langshows=shows;
    langshows= langshows.filter((item)=>
      item.language===lang
    );
    console.log(lang,langshows);
    setShowlist(langshows);
  },[]);
  return (
    <div className='showTimes'>
      <span className='lang'>{lang}</span>
    <div className='Times'>
        {showlist.map((show)=>(
        <Times show={show}/>
        ))}
      </div>
    </div>
  )
}
