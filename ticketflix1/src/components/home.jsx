import React, { useEffect,useState } from 'react';
import { useContext} from "react";
import { Context } from "../context/Context";
import Movies from './movies';
import Sidebar from './sidebar';
import Navbar from './navbar';
import ParallaxComponent from './hero';
import Offers from './offers';
import axios from "axios";
import './home.css';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
  root: {
    width: '100%',
    justifyContent: 'space-between',
    marginTop:'20px',
  },
  toggle: {
    fontFamily: `'Raleway', sans-serif`,
    fontSize: '4rem',
    border: '1px solid rgb(60, 60, 60)',
    borderRadius: '10px',
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

export default function Home() {
  
  
const { dispatch, city } = useContext(Context);
  
  const classes = useStyles();



  const [selectedCity, setSelectedCity] = useState(null);
    const [lang, setLang] = useState([
      { id: 1, checked: false, label: 'Telugu' },
      { id: 2, checked: false, label: 'Hindi' },
      { id: 3, checked: false, label: 'English' },
    ]);
    const [gener, setGener] = useState([
      { id: 1, checked: false, label: 'Action' },
      { id: 2, checked: false, label: 'Sci-FI' },
      { id: 3, checked: false, label: 'Fictional' },
      { id: 4, checked: false, label: 'Horror' },
      { id: 5, checked: false, label: 'Thriller' },
    ]);



    const handleChangeChecked = (id) => {
      const cusinesStateList = lang;
      const changeCheckedLang = cusinesStateList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setLang(changeCheckedLang);
    };
    const handleChangeChecked2 = (id) => {
      const generStateList = gener;
      const changeCheckedgener = generStateList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setGener(changeCheckedgener);
    };
    const handleSelectCity = (event, value) => 
    !value ? null : setSelectedCity(value);
    const[list,setList]=useState([]);
    const[data,setData]=useState([]);

    useEffect(() => {
    dispatch({ type: "UPDATE_CITY",payload: selectedCity})
    console.log(city);
    },[selectedCity]);

    useEffect(()=>{
      const feachPost = async() =>{
      try{
      const res = await axios.get("http://localhost:5000/api/movie/");
      setData(res.data);
      } catch(err) {
        console.log("fail");
        console.log(err.response);
      }}
      feachPost();
    },[]);



    useEffect(()=>{
      let moviedata=data;
      if (selectedCity === null) {
        moviedata = moviedata.filter((item)=>
          item.featured===true
        );
        console.log(moviedata)
      }
    setList(moviedata);
    },[data])

    
    useEffect(() => {
        const handleScroll = () => {
          let pos = window.scrollY;
          let l1 = document.querySelector(".right");
          let l2 = document.querySelector(".left");
          var x = window.matchMedia("(max-width: 700px)");
          var y=0;
          var z=1;
          if(x.matches){
            y=980;
            z=0.4;
          }
          else
          {
            y=670
            z=1;
          }
          if (l1) {
            pos-=y;
            l1.style.right = `${pos*z}px`;
            l2.style.left = `${pos*z}px`;
          }
        };

        
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      
      

      const applyfilter=() => {
        let moviedata=data;
        console.log(selectedCity);
        const langChecked = lang
        .filter((item) => item.checked)
        .map((item) => item.label);
  
        if (langChecked.length) {
            moviedata=moviedata.filter((item) =>
            item.languages.some((lang) => langChecked.includes(lang)))
        }

        const generChecked = gener
        .filter((item) => item.checked)
        .map((item) => item.label);

        if (generChecked.length) {
            moviedata=moviedata.filter((item) =>
            item.genere.some((genere) => generChecked.includes(genere)))
        }
        if (selectedCity === null) {
          moviedata = moviedata.filter((item)=>
            item.featured===true
          );
          console.log(moviedata)
        }
        else if (selectedCity) {
          moviedata = moviedata.filter((item)=>
            item.cities.includes(selectedCity)
          );
        }
        console.log("movie",moviedata);
        setList(moviedata);
        console.log(list);
    };
    useEffect(()=>{
      applyfilter();
    },[gener,lang,selectedCity])

  return (
    <>
    <Navbar/>
      <ParallaxComponent/>
      <Offers/>
        <div className='city-container'>
            <span className="titleCity">Select City</span>
            <ToggleButtonGroup
              value={selectedCity}
              exclusive
              onChange={handleSelectCity}
              className={classes.root}
            >
            <ToggleButton className={classes.toggle} key="1" value="Vijayawada">Vijayawada</ToggleButton>
            <ToggleButton className={classes.toggle} key="2" value="Guntur">Guntur</ToggleButton>
            <ToggleButton className={classes.toggle} key="3" value="Bangalore">Bangalore</ToggleButton>
            <ToggleButton className={classes.toggle} key="4" value="Hyderabad">Hyderabad</ToggleButton>
            <ToggleButton className={classes.toggle} key="5" value="Delhi">Delhi</ToggleButton>
            </ToggleButtonGroup>
        </div>
        <div className='popularTitle'>
            <span className="left">Popular</span>
            <span className="right">Movies</span>
        </div>
        
      <div className="home">
          <Movies data={list}/>
          <Sidebar 
              lang={lang}
              changeLang={handleChangeChecked}
              genere={gener}
              changeGenere={handleChangeChecked2}
          />
        </div>
        
      </>
  )
}
