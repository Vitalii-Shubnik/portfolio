import React from 'react'

const Skill = ({ src, alt, text }) => {
  return (
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 my-4 mx-1 xl:mx-6 md:px-8 lg:px-12 xl:px-16 lg:max-w-fit'>
      <img src={src} className=' w-24 mx-auto' alt={alt} />
      <p className='my-2 text-lg'>{text}</p>
    </div>
  )
}

export default Skill