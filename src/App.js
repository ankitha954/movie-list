import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';

const FeaturedApi="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
 const SearchApi="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

  
const App=()=> {
  const   [movies,setMovies]=useState([])
  const   [searchTerm,setSearchTerm]=useState("")
  useEffect(()=>{
    fetch(FeaturedApi)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setMovies(data.results)
    });
  },[])
    
  const handleSubmitchange=(e)=>{
      e.preventDefault();
      fetch(SearchApi+searchTerm)
    .then((res)=>res.json())
    .then((data)=>{
     setMovies(data.results)
     setSearchTerm("")
    });
    }
  const handlechange=(e)=>{
      setSearchTerm(e.target.value)
  }
    return (
      <>
      <h1 className='tag'>Movie List</h1>

      <header>
        <form onSubmit={handleSubmitchange}>
        <input  type="search"
         className='search' 
         placeholder='Search...'
         value={searchTerm}
         onChange={handlechange}
         ></input>
        </form>
      </header>
    <div className='movie-container'>
      {movies.map((movie)=><Movie key={movie.id} {...movie}/>)}
    </div>
    </>
    )
}

export default App;
