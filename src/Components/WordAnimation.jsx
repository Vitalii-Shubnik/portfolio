import React from 'react'

const WordAnimation = ({ word }) => {
  return (
    <div className='hover:scale-110 hover:text-pink-600 ease-in-out duration-500 px-1'>{word}</div>
  )
}

export default WordAnimation