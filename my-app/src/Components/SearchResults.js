import React, { useState, useEffect } from 'react';
import Movie from './Movie';


function SearchResults({ searchQuery, setSearchResults }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const API = "69e6b179";
    fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=${API}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data?.Search || []);
        setIsLoading(false);
        setSearchResults(data?.Search || []);
      })
      .catch(error => console.log(error));
  }, [searchQuery, setSearchResults]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {movies && movies.map(movie => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default SearchResults;
