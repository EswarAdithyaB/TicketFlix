import { useEffect } from "react";
import "./movie.css";

export default function Movie({movie}) {

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
            <button>Book Now</button>
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