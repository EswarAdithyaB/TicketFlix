import React, { useState, useEffect } from 'react';
import './movieseat.css'
const MovieSeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);
  const [selectedMoviePrice, setSelectedMoviePrice] = useState(10);
  const [ticketPrice, setTicketPrice] = useState(10);

  const seats = [
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
  ];

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

  useEffect(() => {
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
  }, [selectedSeats]);

  useEffect(() => {
    localStorage.setItem('selectedMovieIndex', selectedMovieIndex);
    localStorage.setItem('selectedMoviePrice', selectedMoviePrice);
  }, [selectedMovieIndex, selectedMoviePrice]);

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
        You have selected <span id="count">{calculateSelectedSeatsCount()}</span> seats for a price of $
        <span id="total">{calculateTotalPrice()}</span>
      </p>
      
    
    <a href="#" className="neon-button">Book Now</a>
    </div>
    </>
  );
};

export default MovieSeatBooking