import React, { useState } from "react";
import AllMovies from "./AllMovies";
import axios from "axios";
import "../App.css";

function Home() {
  // create a state to store fetched data
  const [initial, setStateValues] = useState({
    searchValue: "sherlock",
    allMovies: [],
  });
  // movie api url with api key
  const movieApiURL = "https://www.omdbapi.com/?apikey=a2526df0";

  //  function to handle search input
  function handleSearchInput(event) {
    // get search value
    let searchValue = event.target.value;

    // set search value to the state
    setStateValues((rest) => {
      return { ...rest, searchValue: searchValue };
    });
  }

  //  function to execute a search
  async function executeSearch(event) {
    // check if enter key is pressed
    if (event.key === "Enter") {
      // fetch movies
      let movies = await axios(movieApiURL + "&s=" + initial.searchValue);

      // get results
      let results = movies.data.Search;

      // set results to state
      setStateValues((prevState) => {
        return { ...prevState, allMovies: results };
      });
    }
  }

  return (
    <div className="App">
      <main>
        {/* show search bar */}
        <div className="search-div">
          <input
            type="text"
            placeholder="Search movie name..."
            className="search-input"
            onChange={handleSearchInput}
            onKeyPress={executeSearch}
          />
        </div>

        {/* show resultant movies */}
        <AllMovies movies={initial.allMovies} />
      </main>
    </div>
  );
}

export default Home;
