import React from 'react'

const VideoTitle = ({title,overView}) => {
  return (
    <div className='w-screen aspect-video pt-[14%] px-20 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overView}</p>
        <div className=''>
        <button className='bg-white px-12 text-black p-2 text-xl rounded-lg hover:bg-opacity-40'>▶️ Play</button>
        <button className='bg-gray-500 px-10 mx-2 text-white p-2 text-xl rounded-lg bg-opacity-50'>ℹ️ More Info</button> 
        </div>
        
    </div>
  )
}

export default VideoTitle
