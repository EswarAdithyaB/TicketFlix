import React from 'react'
import './times.css'
import { Link, useNavigate } from 'react-router-dom'
export default function Times({show}) {
  const navigate = useNavigate();
  const handelBooking =(() =>{
    localStorage.setItem('occupiedSeats',JSON.stringify(show.seates));
    localStorage.setItem('selectedSeats',JSON.stringify(""));
    navigate(`./show/${show._id}`);
  })
  console.log(show)
  return (
    <div className='times' onClick={()=>handelBooking()}>
      <span className='time'>{show.showtime}</span>
      <span className='type'>{show.typeofScreen}</span>
    </div>
  )
}
