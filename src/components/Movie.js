import React from 'react'
  
const ImagesApi="https://image.tmdb.org/t/p/w1280";


const Movie = ({title,vote_average,overview,poster_path,popularity}) => {
  return (
    <div className='movie'>
      <img src={ImagesApi+poster_path} alt={title}/>
      <div className='movie-info'>
        <h3>{title}</h3>
        <span>Rating:{vote_average}</span>
        <br></br>
        <h4>Collection:${popularity}2301</h4> 
        <div className='movie-over'>
          <h2>OverView:</h2>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  )
}

export default Movie

