import { useContext, useEffect } from "react";

import "./movie.css";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

export default function Movie({movie}) {
  const navigate = useNavigate();
  const {user,dispath, city} = useContext(Context);
  const handleClick =((name)=>{
    if(!user)
    {
      alert("Please login before booking your ticktes");
    }
    else if(!city)
    {
      alert("Please select city");
    }
    else{
      navigate(`/movie/${name}`);
    }
  })
  return (
    <div className="post">      
    <img src={movie.photo1} alt="Movie" />
      <div className="postInfo">
        <div className="postCats">
          {
            movie.genere.map((g) =>(
          <span className="postCat">
              {g}
          </span>
            ))
          }
        </div>
        <div className="postTitle">
            <h1>{movie.moviename}</h1>
            <button onClick={()=>handleClick(movie.moviename)}>Book Now</button>
        </div>
        <hr />
        <div className="languages">
          {
            movie.languages.map((l)=>
        <span className="language">
            {l}
        </span>
            )}
        </div>
      </div>
      <p className="postDesc">
        {movie.decs}
      </p>
    </div>
  );
}