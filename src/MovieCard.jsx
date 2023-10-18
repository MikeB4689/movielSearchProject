import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="move">
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt=""
        />
      </div>
      <dir>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </dir>
    </div>
  );
}

export default MovieCard;
