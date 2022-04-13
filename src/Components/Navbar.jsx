import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaGoogleDrive } from 'react-icons/fa'
import logo from '../assets/logowhite.png'
import { Link } from 'react-scroll/modules'

import { db } from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
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
      <div className='fixed z-50 w-full h-[6rem] flex justify-between items-center px-4 bg-[#292b3d] text-slate-300 shadow-sm shadow-slate-300'>
        <div className='flex items-center justify-center'>
          <img src={logo} alt='Logo' className='h-[5rem]' ></img>
        </div>
        <ul className='hidden md:flex gap-4 hover:shadow-slate-300'>
          <Link to='home' smooth={true} duration={500}>
            <li>
              Home
            </li>
          </Link>
          <Link to='about' smooth={true} duration={500}>
            <li>
              About
            </li>
          </Link>
          <Link to='skills' smooth={true} duration={500}>
            <li>
              Skills
            </li>
          </Link>
          <Link to='experience' smooth={true} duration={500}>
            <li>
              Experience
            </li>
          </Link>
          <Link to='contact' smooth={true} duration={500}>
            <li>
              Contact
            </li>
          </Link>
        </ul>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 h-screen w-full flex flex-col justify-center items-center gap-8 bg-[#0a192f]'}>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            <li className='text-3xl'>
              Home
            </li>
          </Link>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            <li className='text-3xl'>
              About
            </li>
          </Link>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            <li className='text-3xl'>
              Skills
            </li>
          </Link>
          <Link onClick={handleClick} to='experience' smooth={true} duration={500}>
            <li className='text-3xl'>
              Experience
            </li>
          </Link>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            <li className='text-3xl'>
              Contact
            </li>
          </Link>
        </ul>

        {links && (<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[125px] h-[60px] flex justify-between items-center ml-[-85px] hover:ml-0 pl-1 pr-2 duration-300'>
              <a
                target='_blank'
                className='flex justify-between items-center w-full'
                href={links.linkedin}
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[125px] h-[60px] flex justify-between items-center ml-[-85px] hover:ml-0 pl-1 pr-2 duration-300'>
              <a
                target='_blank'
                className='flex justify-between items-center w-full'
                href={links.github}
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className='w-[125px] h-[60px] flex justify-between items-center ml-[-85px] hover:ml-0 pl-1 pr-2 duration-300'>
              <a
                target='_blank'
                className='flex justify-between items-center w-full'
                href={links.cv}
              >
                View CV <FaGoogleDrive size={30} />
              </a>
            </li>
          </ul>
        </div>
        )}
      </div>
      <div className='h-[6rem] bg-[#0a192f] w-full z-1'></div>
    </>
  )
}

export default Navbar