import React from 'react';
import ShowTimes from './showTimming';
import { v4 as uuidv4 } from 'uuid';
import './theater.css'
export default function Theater({data}) {
  let keyCounter = 0;
  return (
    <div className='Theater'>
      <div className='theaterName'>
        <span>{data.Theatername}</span>
      </div>
      <div className='showTimes'>
      {data.languages.map((l, index) => {
          // Create a unique composite key using index and language
          keyCounter++;
          return <ShowTimes key={keyCounter} shows={data.shows} lang={l} />;
        })}
      </div>
    </div>
  )
}
