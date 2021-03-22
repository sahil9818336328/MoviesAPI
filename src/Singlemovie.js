import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  //   console.log(useParams());
  const { id } = useParams(); // accessing url params named id
  const { isLoading, movies: movie } = useFetch(`&i=${id}`); // getting single movie info based on id
  //   console.log(movie);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  //DESTRUCTURING
  const {
    Actors,
    Director,
    Language,
    Plot,
    Poster,
    Title,
    Year,
    imdbRating,
  } = movie;

  return (
    <section className="single-movie">
      <img src={Poster} alt={Title} />
      <div className="single-movie-info">
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <h4>{Year}</h4>
        <p>
          <span>Actors :- </span>
          {Actors}
        </p>
        <p>
          <span>Director :- </span>
          {Director}
        </p>
        <p>
          <span>Language :- </span>
          {Language}
        </p>
        <p>
          <span>Ratings :- </span>
          {imdbRating}
        </p>

        <Link to="/" className="btn">
          {" "}
          {/* navigate to home component */}
          back to movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
