import React from 'react'
import Navbar from './navbar'
import Theater from './theater'
import './movieBooking.css'
export default function MovieBooking() {
  return (
    <>
    <div className="bodyMovieBooking">
     <Navbar/>
     <div className='movieBooking'>
        <div className='poster'>
          <img
            className="moviePoster"
            src='https://assets-in.bmscdn.com/discovery-catalog/events/et00137196-kbnftcgzps-landscape.jpg'  
            alt=""
            height="400px"
            />
        </div>
            <Theater/>
            <Theater/>
         .
        </div>
    </div>
    </>
  )
}
