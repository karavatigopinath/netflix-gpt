import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  return (
    <div className='bg-black'>
       <div className='md:-mt-40 mt-0 md:pl-10 pl-0 relative z-20'>
       <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
       <MovieList title={"Top Rated"} movies={movies?.topRatedMovies}/>
       <MovieList title={"Popular"} movies={movies?.nowPlayingMovies}/>
       <MovieList title={"Upcoming Movies"} movies={movies?.nowPlayingMovies}/>
       <MovieList title={"Horror"} movies={movies?.nowPlayingMovies}/>
       </div>
    </div>
  )
}

export default SecondaryContainer
