import React, { useEffect, useState } from 'react'
import { FaGithub, FaGoogleDrive, FaLinkedin } from 'react-icons/fa'

import { db } from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

const Footer = () => {

  const [links, setLinks] = useState([])
  const linksCollectionRef = collection(db, "links")

  useEffect(() => {
    const fetchLinks = async () => {
      const linksCollection = await getDocs(linksCollectionRef)
      setLinks(linksCollection.docs.map(doc => ({ ...doc.data(), id: doc.id }))[0])
    }

    fetchLinks()
  }, [])

  return (
    <>
      {links && (<div name='home' className='lg:hidden w-full h-full bg-[#0a192f] flex flex-wrap items-center justify-center py-8 text-slate-300'>
        <ul className='flex flex-row gap-2'>
          <li className='text-base'>
            <a
              target='_blank'
              className='flex justify-between items-center w-full gap-1'
              href={links.linkedin}
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='text-base'>
            <a
              target='_blank'
              className='flex justify-between items-center w-full gap-1'
              href={links.github}
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='text-base'>
            <a
              target='_blank'
              className='flex justify-between items-center w-full gap-1'
              href={links.cv}
            >
              View CV <FaGoogleDrive size={30} />
            </a>
          </li>
        </ul>
      </div>)}
    </>
  )
}

export default Footer