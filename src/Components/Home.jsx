import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll/modules'
const Home = () => {
  return (
    <div name='home' className='w-full min-h-screen h-full bg-[#0a192f] flex items-center pb-2'>
      <div className='w-[1450px] mx-auto lg:pl-32 px-8 flex justify-center flex-col h-full'>
        <p className='text-pink-600 text-xl' >Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-slate-100'>Vitalii Shubnik</h1>
        <h2 className='text-3xl sm:text-5xl font-bold text-slate-300'>I am front-end developer</h2>
        <p className='text-slate-400 text-lg py-4'>
          I code client side web applications using React.js. Currently, I work on several pet-projects and develop my programming skills.
        </p>
        <div>
          <Link to='experience' smooth={true} duration={500}>
            <button className='flex items-center group text-white border-white border-2 py-3 px-6 my-2 gap-3 hover:bg-pink-600 hover:border-pink-600'>
              View my projects
              <span>
                <HiArrowNarrowRight className='group-hover:rotate-90 duration-300' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home