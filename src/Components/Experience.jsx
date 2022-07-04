import React, { useEffect, useState } from 'react'
import Project from './Project'

import { db } from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

const Experience = () => {
  const [projects, setProjects] = useState([])
  const projectsCollectionRef = collection(db, "projects")

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsCollection = await getDocs(projectsCollectionRef)
      setProjects(projectsCollection.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }

    fetchProjects()
  }, [])

  return (
    <div name='experience' className='w-full min-h-screen h-full flex items-center bg-[#292b3d] text-slate-300 md:py-2 py-20'>
      <div className='w-[1450px] lg:pl-32 h-full px-8 flex flex-col justify-center mx-auto'>
        <div className='pb-8'>
          <p className='text-4xl border-b-4 font-bold inline border-pink-600'>Experience</p>
          <p className='pt-4 text-lg pl-4'>Some of my projects</p>
        </div>
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
          {projects?.sort((a, b) => b.priority- a.priority ).map(proj => <Project src={proj.src} demo={proj.demo} rep={proj.rep} text={proj.text} />)}
        </div>
      </div>
    </div>
  )
}

export default Experience