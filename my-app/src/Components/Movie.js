import React from 'react';

function Movie({ movie }) {
  return (
    <div>
      <img src={movie.Poster === 'N/A' ? 'placeholder.jpg' : movie.Poster} alt={movie.Title} />
      <h2>{movie.Title} ({movie.Year})</h2>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Awards:</strong> {movie.Awards}</p>
    </div>
  );
}

export default Movie;
