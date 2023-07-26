import React, { useContext, useEffect, useState } from 'react'
import Navbar from './navbar'
import Theater from './theater'
import axios from 'axios';
import './movieBooking.css'
import { Context } from '../context/Context'
import { useLocation } from 'react-router-dom'
import moment from 'moment';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    justifyContent: 'space-between',
    marginTop:'20px',
    alignItems:'center',
  },
  toggle: {
    fontFamily: `'Raleway', sans-serif`,
    fontSize: '4rem',
    border: '1px solid rgb(60, 60, 60)',
    borderRadius: '10px',
    margin: ' 0px 20px',
    alignItems:'center',
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)': {
      borderRadius: '10px',
    },
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)': {
      borderRadius: '10px',
      border: '1px solid rgb(60, 60, 60)',
    },
    '&.Mui-selected': {
      borderRadius: '10px',
      background: '#000',
      color: '#fff',
    },
    '&.MuiToggleButton-root': {
      '&:hover': {
        background: '#000',
        color: '#fff',
      },
    },
  },
});
export default function MovieBooking() {
  
  const [selectedDate, setSelectedDate] = useState(null);
  const classes = useStyles();
  const location= useLocation();
  const movie=(location.pathname.split("/")[2]);
  const {user,dispatch,city}= useContext(Context);
  const [theatersData, setTheatersData]=useState([]);
  const[data,setData]=useState([]);
  useEffect(()=>{
    const feachPost = async() =>{
      try{
      const res = await axios.get(`http://localhost:5000/api/movie/${movie}`,{city: city});
      setData(res.data);
      } catch(err) {
        console.log("fail");
        console.log(err.response);
      }}
      feachPost();
      console.log(data);
  },[]);
  const [nextThreeDays, setNextThreeDays] = useState([]);

  const getNextThreeDays = () => {
    const today = moment();
    const nextThreeDays = [];

    for (let i = 0; i < 5; i++) {
      const nextDate = today.clone().add(i, 'days');
      const dayOfWeek = nextDate.format('MMM Do yyyy');
      nextThreeDays.push(dayOfWeek);
    }

    return nextThreeDays;
  };

  const getTheaters = async() =>{
    const today = moment();
    const date=today.clone().add(selectedDate, 'days').format('yyyy MM DD');
    console.log("date -d:",date);
    try{
      const res = await axios.get(`http://localhost:5000/api/theater/${movie}`,        
      {params:{
        city:city,
        date:date,
      }});
      console.log(res.data)
      setTheatersData(res.data);
    }catch(err) {
      console.log("fail");
      console.log(err.response);
    }
  };
  const handleSelectDate = (event, value) =>
  { 
    const today = moment(); 
    const date=(selectedDate==value) ? null : setSelectedDate(value);
    console.log(selectedDate);
  }

  // temp
  useEffect(() =>{
    getTheaters();
    console.log(selectedDate);
  },[selectedDate]);
  useEffect(() => {
    const handleRefresh = async () => {
      const today = moment();
      setNextThreeDays(getNextThreeDays());
      setSelectedDate(0);
    };
  handleRefresh();
}, []);

useState(() =>{
  console.log(theatersData);
},[theatersData]);

  return (
    <>
    <div className="bodyMovieBooking">
     <Navbar/>
     <div className='movieBooking'>
        <div className='poster'>
          <img
            className="moviePoster"
            src={data.photo2}  
            alt=""
            height="400px"
            />
        </div>
        <div className='date-container'>
            <span className="titleDate">Select Date</span>
            <div className='toggle'>
            <ToggleButtonGroup
            value={selectedDate}
              className={classes.root}
              exclusive
              onChange={handleSelectDate}
            >
              {nextThreeDays.map((day, index) => (
                <ToggleButton className={classes.toggle} key={index} value={index}>{day}</ToggleButton>
        ))}
            </ToggleButtonGroup>
            </div>
        </div>
            { theatersData.map((d) => (
            <Theater data={d}/>
            ))}
            .
        </div>
        <div>
    </div>
    </div>
    </>
  )
}
