import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const imageNotFound =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext(); // movies === array of movies returned inside finalResponse object.

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="movies">
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie; // renaming properties

        return (
          <Link to={`/movies/${id}`} key={id} className="movie">
            {" "}
            {/* displaying movie component */}
            <article>
              <img
                src={poster === "N/A" ? imageNotFound : poster} // providing different image if poster === image not found.
                alt={title}
              />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
