import Login from './components/login';
import Home from "./components/home";
import MovieBooking from './components/movieBooking';
import MovieSeatBooking from './components/movieSeat';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
