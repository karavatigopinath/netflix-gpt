import React from 'react'
import { IMG_CDN_URL } from '../constants'

const MovieCart = ({poster_path}) => { 
  return (
    <div className='w-52 pr-4'>
         <img alt='movie-cart' src={IMG_CDN_URL+poster_path} />
    </div>
  )
}

export default MovieCart
