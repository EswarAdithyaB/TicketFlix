import React, {useContext, useState, useEffect } from 'react';
import './movieseat.css'
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Context } from '../context/Context'
const MovieSeatBooking = () => {
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);
  const [selectedMoviePrice, setSelectedMoviePrice] = useState(100);
  const [ticketPrice, setTicketPrice] = useState(100);
  const [showdetails,setShowdetails]= useState([]);
  const location= useLocation();
  const {user}= useContext(Context);
  const [seats,setSeats]= useState( [
    [false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false,false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false,false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false,false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false,false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false,false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false,false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false,false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false,false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false,false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false,false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false,false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false,false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false,false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false,false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false,false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false,false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false,false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false,false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false,false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false, false, false, false, false, false,false, false, false,false, false, false, false, false, false, false, false],
  ]);

  useEffect(() => {
    const storedSelectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if (storedSelectedSeats && storedSelectedSeats.length > 0) {
      setSelectedSeats(storedSelectedSeats);
    }

    const storedSelectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (storedSelectedMovieIndex !== null) {
      setSelectedMovieIndex(parseInt(storedSelectedMovieIndex));
    }

    const storedSelectedMoviePrice = localStorage.getItem('selectedMoviePrice');
    if (storedSelectedMoviePrice !== null) {
      setSelectedMoviePrice(parseInt(storedSelectedMoviePrice));
    }
  }, []);

  useEffect(() =>{
    const screenId=(location.pathname.split("/")[4]);
    const getScreendetails = async() =>{
      try{
        const res = await axios.get(`https://movieuniverseapi.onrender.com/api/theater/screen/${screenId}`);
        setShowdetails(res.data)
      }
      catch(err){
        console.log("fail");
        console.log(err.response);
      }
      }
      getScreendetails();
  },[]);

  useEffect(() =>{
    let newSeates = seats;
    if(showdetails !== undefined && showdetails.seates !== undefined){
      console.log(showdetails.seates);
      showdetails.seates.forEach((s) =>{
      const temp=s.split('-')
      newSeates[parseInt(temp[0])][parseInt(temp[1])]=true;
    });
    setSeats(newSeates);
    }
  },[showdetails]);
  
  useEffect(() => {
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
    
  }, [selectedSeats]);

  useEffect(() => {
    if(selectedSeats.length!==0)
    {
    const p=parseInt(selectedSeats[0].split('-')[0]);
    if(p>=10){
      setSelectedMoviePrice(150);
      setTicketPrice(150);
    }
    else{
      setSelectedMoviePrice(100);
      setTicketPrice(100);
    }
    localStorage.setItem('selectedMoviePrice', selectedMoviePrice);
    }
  }, [selectedSeats]);

  const handleBooking = async() => {
    const screenId=(location.pathname.split("/")[4]);
    try{
      const res = await axios.post(`https://movieuniverseapi.onrender.com/api/theater/ticket/${screenId}`,
      {
        selectedseates:selectedSeats,
        user: user
      });
      setSelectedSeats([]);
      console.log(res.data);
      alert(`pls pay the amount of ${calculateTotalPrice()}`);
      alert("Booking confromed");
      navigate("/");
    }catch(err){
      console.log("fail");
    }

  }

  const handleSeatClick = (rowIndex, seatIndex) => {
    if (!seats[rowIndex][seatIndex]) {
      console.log(rowIndex,seatIndex);
      const newSelectedSeats = [...selectedSeats];
      const seatIdentifier = `${rowIndex}-${seatIndex}`;
      const seatIndexInSelectedSeats = newSelectedSeats.indexOf(seatIdentifier);

      if (seatIndexInSelectedSeats > -1) {
        newSelectedSeats.splice(seatIndexInSelectedSeats, 1);
      } else {
        newSelectedSeats.push(seatIdentifier);
      }

      setSelectedSeats(newSelectedSeats);
    }
  };

  const calculateSelectedSeatsCount = () => {
    return selectedSeats.length;
  };

  const calculateTotalPrice = () => {
    return calculateSelectedSeatsCount() * ticketPrice;
  };

  return (
    <>
    <div className='movieseatbooking'>
      <ul className="showcase">
        <li>
          <div className="seat"></div>
          <small>N/A</small>
        </li>

        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>

        <li>
          <div className="seat occupied"></div>
          <small>Occupied</small>
        </li>
      </ul>

      <div className="container1">
        <div className="screen1"></div>
        
        <div className='seates'>
        {seats.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((seat, seatIndex) => (
              <div
                className={`seat ${selectedSeats.includes(`${rowIndex}-${seatIndex}`) ? 'selected' : ''} ${
                  seat ? 'occupied' : ''
                }`}
                key={seatIndex}
                onClick={() => handleSeatClick(rowIndex, seatIndex)}
              ></div>
            ))}
          </div>
        ))}
        </div>
      </div>
    
      <p className="text">
        You have selected <span id="count">{calculateSelectedSeatsCount()}</span> seats for a price of Rs
        <span id="total">{calculateTotalPrice()}</span>
      </p>
      
    
    <div className="neon-button" onClick={() => handleBooking()}>Book Now</div>
    </div>
    </>
  );
};

export default MovieSeatBooking