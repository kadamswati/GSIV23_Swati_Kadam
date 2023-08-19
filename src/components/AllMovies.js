import React from "react";
import { Link } from "react-router-dom";

function AllMovies({ movies: movies }) {
   return (
      <div className = "allMovies">
         {/* show all movies using map method */}
         {typeof movies != "undefined" ? (
            movies.map((result) => (
               // render single movie
               <div className = "movie">
                  {/* set link for movie card */}
                  <Link to = {`/movie/${result.imdbID}`}>
                     {/* show movie poster and title */}
                     <img src = {result.Poster} alt = "movie poster" />
                     <h3> {result.Title} </h3>
                  </Link>
               </div>
            ))
         ) : (
            <div className = "no-movie">
               <h2>
                  Oops! We haven't listed the movie yet, or it might not exist in the
                  database. {" "}
               </h2>
               <h2> Kindly check the movie name once. </h2>
            </div>
         )}
      </div>
   );
}

export default AllMovies;