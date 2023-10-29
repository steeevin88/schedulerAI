'use client';
import Link from 'next/link';
import { redirect } from 'next/navigation'
import React, { useState } from 'react'

const Page = () => {
  const [error, setError] = useState('')
  const [errorLink, setErrorLink] = useState('')
  const [signUpInfo, setSignUpInfo] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    icsUrl: '',
    preferences: '',
  })
  function handleChange(e: any) {
    setSignUpInfo((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }))
  }

  async function handleClick(e: any) {
    e.preventDefault()
    const { email, password, confirmPassword, icsUrl, preferences } = signUpInfo;
    if (password !== confirmPassword) {
        setError("Passwords do not match")
        return
    }
    console.log('passwords matched')
    const userData = {
      email, 
      password,
      icsUrl,
      preferences,
    }
    // Construct the fetch request
    const request = new Request(`../../api/users`, {
      method: "POST",
      body: JSON.stringify(userData)
    });
    // Make the fetch call and handle the response
    const response = await fetch(request);
    const data = await response.json();
    if (data.message) { // error message
      setError(data.message)
      if (data.link) {setErrorLink(data.link)}
      return;
    }
    // redirect to home page
    redirect('/')
  }

  return (
    <div className='w-full h-[80vh] justify-center content-centers flex flex-grow'>
      <form className='rounded mx-[10%] mt-[10%]  p-5 flex flex-col bg-blue-50 flex-grow'>
          <input className='p-2 my-2 rounded bg-blue-100' name="email" type="email" placeholder="Email" onChange={handleChange} />
          <input className='p-2 my-2 rounded bg-blue-100' name="password" type="password" placeholder="Password" onChange={handleChange} />
          <input className='p-2 my-2 rounded bg-blue-100' name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} />
          <input className='p-2 my-2 rounded bg-blue-100' name="icsUrl" type="text" placeholder="Link to ICS file" onChange={handleChange} />
          <input className='p-2 my-2 rounded bg-blue-100' name="preferences" type="text" placeholder="What type of events do you enjoy? ('Clubbing, sports, dancing, etc')" onChange={handleChange} />
          <button className='bg-blue-500 rounded p-5' onClick={handleClick} >Sign Up</button>
          {error && (errorLink ? <Link href={errorLink}>{error}</Link>: <p className='text-red-500'>{error}</p>)}
      </form>
    </div>
  )
}

export default Page