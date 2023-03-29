import React from 'react';
import Movie from './Movie';

function MovieList({ movies, isLoading }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.imdbID}>
          <Movie movie={movie} />
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
