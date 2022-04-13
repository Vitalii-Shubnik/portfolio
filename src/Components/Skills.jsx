import React, { useState, useEffect } from 'react'


import Skill from './Skill'

import { db } from '../firebase-config'
import {collection, getDocs} from 'firebase/firestore'

const Skills = () => {

  const [skills, setSkills] = useState([])
  const skillsCollectionRef = collection(db, "skills")
  
  useEffect(() => {
    const fetchSkills = async () =>{
      const skillsCollection = await getDocs(skillsCollectionRef)
      setSkills(skillsCollection.docs.map(doc=> ({...doc.data(), id: doc.id})))
    }

    fetchSkills()
  }, [])

  return ( 
    <div name='skills' className='w-full min-h-screen h-full flex items-center bg-[#0a192f] text-slate-300 md:py-2 py-20'>
      <div className='w-[1450px] lg:pl-32 h-full px-8 flex flex-col justify-center mx-auto'>
        <div>
          <p className='text-4xl border-b-4 font-bold inline border-pink-600'>Skills</p>
          <p className='pt-4 text-lg pl-4'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 md:grid-cols-4 text-center py-8 gap-2'>
          {skills?.sort((a,b) =>a.priority-b.priority).map((el) => <Skill src={el.src} alt={el.alt} text={el.text} />)}
        </div>
      </div>
    </div>
  )
}

export default Skills