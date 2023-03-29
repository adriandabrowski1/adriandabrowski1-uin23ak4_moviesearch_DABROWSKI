import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import MovieList from './Components/MovieList';
import SearchResults from './Components/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchQuery) => {
    const API = "69e6b179";
    if (searchQuery.length >= 3) {
      fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=${API}`)
        .then(response => response.json())
        .then(data => {
          if (data.Response === "True") {
            setSearchResults(data.Search);
          } else {
            console.log(data.Error);
            // show error message to user
          }
        })
        .catch(error => {
          console.log(error);
          // show error message to user
        });
    }
  };
  

  const handleReset = () => {
    setSearchResults([]);
  };

  function JamesBondMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const API = "69e6b179";
      fetch(`http://www.omdbapi.com/?s=james%20bond&apikey=${API}`)
        .then(response => response.json())
        .then(data => setMovies(data.Search.slice(0, 10)))
        .catch(error => console.log(error));
    }, []);

    return (
      <>
        <h2>Top 10 James Bond Movies</h2>
        <MovieList movies={movies} />
      </>
    );
  }

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <SearchBar onSearch={handleSearch} onReset={handleReset} />
      {searchResults.length === 0 ? <JamesBondMovies /> : <MovieList movies={searchResults} />}
      <SearchResults searchQuery={searchResults} />
    </div>
  );
}

export default App;
