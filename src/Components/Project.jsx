import React, { useState } from 'react'

const Project = ({ rep, demo, src, text }) => {
  const [projectHovered, setProjectHovered] = useState(false)

  return (
    <div
      className='border-2 max-w-fit  shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-slate-200 '
      onMouseEnter={() => setProjectHovered(true)}
      onMouseLeave={() => setProjectHovered(false)}
    >
      <div className='relative'>
        <img
          className={(projectHovered && 'ease-in duration-300 opacity-20 ') + ' w-full h-full object-cover'}
          src={src}
          alt="Project"
          style={{
            maxHeight: 340,
            maxWidth: 340
          }} />
        <div className={(projectHovered ? 'ease-in duration-700 opacity-100' : 'opacity-0') + ' absolute top-0 w-full h-full flex flex-col justify-center items-center gap-2'}>
          <div className='transition ease-in delay-300 opacity-100'>
            <span className='text-2xl font-bold flex items-center justify-center mb-4 text-center'>
              {text}
            </span>
            {projectHovered && (<div className='flex flex-row gap-2 text-lg items-center justify-center '>
              <a target='_blank' href={demo} className=''>
                <button className='p-2 border-2 hover:border-pink-600 border-slate-300 rounded-lg bg-opacity-30 bg-black '>View site</button>
              </a>
              <a target='_blank' href={rep} className='' >
                <button className='p-2 border-2 hover:border-pink-600 border-slate-300 rounded-lg bg-opacity-30 bg-black'>View code</button>
              </a>
            </div>)}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Project