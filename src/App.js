import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';

const FeaturedApi="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const ImagesApi="https://image.tmdb.org/t/p/w1280";
 const SearchApi="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  
const App=()=> {
  const[movies,setMovies]=useState([])
  useEffect(()=>{
    fetch(FeaturedApi)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setMovies(data.results)
    });
  },[])
    return (
      <>
    <div className='movie-container'>
      {movies.map((movie)=><Movie key={movie.id} {...movie}/>)}
    </div>
    </>
    )
}

export default App;
