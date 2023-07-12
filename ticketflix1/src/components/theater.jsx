import React from 'react';
import ShowTimes from './showTimming';
import './theater.css'
export default function Theater() {
  return (
    <div className='Theater'>
      <div className='theaterName'>
        <span>Cinepolis: PVP Square Mall, Vijayawada</span>
      </div>
      <div className='showTimes'>
        <ShowTimes/>
        <ShowTimes/>
      </div>
    </div>
  )
}
