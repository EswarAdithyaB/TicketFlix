import React from 'react';
import ShowTimes from './showTimming';
import './theater.css'
export default function Theater({data}) {
  return (
    <div className='Theater'>
      <div className='theaterName'>
        <span>{data.Theatername}</span>
      </div>
      <div className='showTimes'>
        {console.log(data.languages)}
      {data.languages.map((l)=>(  
        <ShowTimes shows={data.shows} lang={l}/>
      ))}
      </div>
    </div>
  )
}
