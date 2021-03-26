import { useEffect, useState } from "react";

// GENERATE API_ACCESS_KEY AND PASTE IT BELOW
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const useFetch = (params) => {
  // STATE VARIABLES
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [movies, setMovies] = useState(null);

  const fetchMovies = async (url) => {
    // passing argument in context.js
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const finalResponse = await response.json();
      //   console.log(finalResponse);
      if (finalResponse.Response === "True") {
        setMovies(finalResponse.Search || finalResponse); // finalResponse.Search === list of movies and finalResponse === single movie info.
      }
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${params}`); // url to fetching.
  }, [params]); //runs on every key stroke

  return { isLoading, isError, movies }; // returning state variables
};

export default useFetch;
