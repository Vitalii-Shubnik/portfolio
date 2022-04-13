import React from 'react'
import WordAnimation from './WordAnimation'

const text = 'I am a fast-learning generalist with a strong background in computer science and growing experience. Sociability, high personal standards and attention to detail, teamwork, interest in my progress - these are the qualities that I possess.'

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen h-full flex items-center bg-[#292b3d] text-slate-300 py-2'>
      <div className='w-[1450px] mx-auto lg:pl-32 px-8 flex justify-center flex-col h-full'>
        <div>
          <p className='text-4xl border-b-4 font-bold inline border-pink-600'>About</p>
        </div>
        <div className='w-full flex flex-col items-center md:flex-row gap-8 pt-4'>
          <div className='md:text-right text-4xl font-bold'>
            <p>
              Briefly about me. Please take a look around!
            </p>
          </div>
          <div className='flex flex-wrap items-center text-lg h-full'>
            {text.split(' ').map((el)=><WordAnimation word={el} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About