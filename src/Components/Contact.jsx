import React, { useRef, useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase-config'

const Contact = () => {
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const messageRef = useRef(null)
  const emailRef = useRef(null)
  const nameRef = useRef(null)

  const clearForm = () => {
    messageRef.current.value = ''
    emailRef.current.value = ''
    nameRef.current.value = ''
    setMessage('')
    setEmail('')
    setName('')
  }
  const emailsCollectionRef = collection(db, 'emails')

  const sendEmail = async () => {
    if (message && name && email) {
      await addDoc(emailsCollectionRef, { message, email, name })
      clearForm()
    }
    else
      alert('Fill all the fields')
  }

  return (
    <div name='contact' className='w-full min-h-screen h-full flex items-center bg-[#0a192f] text-slate-300 py-2'>
      <div className='w-[1450px] lg:pl-32 h-full px-8 flex flex-col justify-center mx-auto'>
        <div className='pb-4'>
          <p className='text-4xl border-b-4 font-bold inline border-pink-600'>Contact</p>
          <p className='py-4 text-lg pl-4'>Send me an email</p>
        </div>
        <form className='max-w-[900px] w-full mx-auto flex flex-col p-4 appearance-none text-black'>
          <input
            ref={nameRef}
            className='my-2 p-2 border border-pink-600 rounded-lg '
            name='name'
            type="text"
            placeholder='Name'
            onChange={e => { setName(e.target.value) }}
          />
          <input
            ref={emailRef}
            className='my-2 p-2 border border-pink-600 rounded-lg'
            name='email'
            type="text"
            placeholder='Email'
            onChange={e => { setEmail(e.target.value) }}
          />
          <textarea
            ref={messageRef}
            className='my-2 p-2 border border-pink-600 rounded-lg'
            name='message'
            rows="10"
            placeholder='Message'
            onChange={e => { setMessage(e.target.value) }}
          >
          </textarea>
          <div className='w-full flex flex-row-reverse'>
            <button
              type='button'
              className='my-2 p-2 px-8 border border-white hover:border-pink-600 hover:bg-pink-600 mr-1 text-slate-300'
              onClick={sendEmail}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact