import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import Movie from './components/Movie';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


const App = () => {
  const defaultMovies = ([
    {
      "Title": "The Batman",
      "Year": "2022",
      "imdbID": "tt1877830",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
      "Title": "Spider-Man",
      "Year": "2002",
      "imdbID": "tt0145487",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "The Shawshank Redemption",
    "Year": "1994",
    "imdbID": "tt0111161",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Spider-Man: Into the Spider-Verse",
    "Year": "2018",
    "imdbID": "tt4633694",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg"
  },
  {
    "Title": "Green Book",
    "Year": "2018",
    "imdbID": "tt6966692",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDU5YTNmMmItN2QxNy00OGQ0LTg5MTctNzFmYjEzZjcwN2UwXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Parasite",
    "Year": "2019",
    "imdbID": "tt6751668",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "Dragon Ball Super",
    "Year": "2015–2018",
    "imdbID": "tt4644488",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTgyMzA5MjEtNDY3Ny00ZDkyLWJhYzEtYzI2Nzk5Mzc3ZDk1XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    "Title": "The Conjuring",
    "Year": "2013",
    "imdbID": "tt1457767",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg"
  }
  ]);
  
  const[movies, setMovies] = useState(defaultMovies);
  const [search, setSearch] = useState('');

  const getMovies = async () => {
    if (search.trim() === '') {
      setMovies(defaultMovies);
      return;
    }

    const url = `http://www.omdbapi.com/?s=${search}&apikey=f33b70c7`
  
    const response = await fetch(url);
    const responseJSON = await response.json();

    if(responseJSON.Search) {
      setMovies(responseJSON.Search); 
    }
  }

  useEffect(() => {
    getMovies(search)
  }, [search]);

  return (
    <>
    <div className='container movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Header/>
        <Search search={search} setSearch={setSearch}/>
      </div>

      <div className='row'>
        <Movie movies={movies}/>
      </div>
    </div>
    </>
  )
}

export default App;
