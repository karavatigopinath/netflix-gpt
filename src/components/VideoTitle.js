import React from 'react'

const VideoTitle = ({title,overView}) => {
  return (
    <div className='w-screen aspect-video pt-[10%] md:px-20 px-2 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-4xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/3'>{overView}</p>
        <div className='md:my-0 my-4'>
        <button className=' bg-white md:px-12 px-2 text-black md:p-2 py-2 text-xl rounded-lg hover:bg-opacity-40'>▶️ Play</button>
        <button className='hidden md:inline-block bg-gray-500 px-10 mx-2 text-white p-2 text-xl rounded-lg bg-opacity-50'>ℹ️ More Info</button> 
        </div>
        
    </div>
  )
}

export default VideoTitle
