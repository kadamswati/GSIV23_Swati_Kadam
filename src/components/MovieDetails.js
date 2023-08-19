import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function MovieDetails() {
   // Get ID from URL
   const params = useParams();
   const movieApiURL = "https://www.omdbapi.com/?apikey=a2526df0";
   let [movieDetails, setMovieDetails] = useState({});
   
   // function to fetch data
   function fetchData() {
   
      // fetch movie details according to id
      axios(movieApiURL + "&i=" + params.id).then(({ data }) => {
         let result = data;
         setMovieDetails(result);
      });
   }
   fetchData();
   return (
      // show movie details with image, title, year, rating, type and plot
      <div className = "movieDetail">
         <div className = "description">
            {/* show poster */}
            <img src = {movieDetails.Poster} alt = "Movie poster" />
            <div className = "details">
               <h2> {movieDetails.Title} </h2>
               <p> Year : {movieDetails.Year} </p>
               <p className = "rating"> Rating: {movieDetails.imdbRating} </p>
               <p> Type: {movieDetails.Type} </p>
               <p> {movieDetails.Plot} </p>
               <button className = "back">
                  {/* link to home page */}
                  <Link to = {`/`}> Go back </Link>
               </button>
            </div>
         </div>
      </div>
   );
}

export default MovieDetails;