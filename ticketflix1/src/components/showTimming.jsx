import React, { useEffect, useState } from 'react';
import './showTiming.css';
import Times from './times';
export default function ShowTimes(props) {
  const [shows,setShows]= useState(props.shows)
  const [lang,setLang]= useState(props.lang);
  const[showlist,setShowlist]=useState([]);
  
  useEffect(() =>{
    setShows(props.shows);
    setLang(props.lang);
  },[props])
  useEffect(() =>{
    let langshows=shows;
    langshows= langshows.filter((item)=>
      item.language===lang
    );
    setShowlist(langshows);
  },[shows]);
  return (
    <div className='showTimes'>
      <span className='lang'>{lang}</span>
    <div className='Times'>
        {showlist.map((show)=>{
        return <Times key={show.id} show={show}/>
})}
      </div>
    </div>
  )
}
