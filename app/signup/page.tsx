'use client';
import Link from 'next/link';
import { redirect } from 'next/navigation'
import React, { useState } from 'react'
// const ical = require('node-ical');

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

  const { email, password } = signUpInfo;

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
    try { // error (has JSON response)
      const data = await response.json();
      setError(data.message)
      if (data.link) setErrorLink(data.link)
    } catch { // successful account sign up
      // convert icf link to icf via fetch
      // await ical.async.fromURL(icsUrl, function(err: any, data: any) { console.log(data); });


      // redirect to upload calendar
      window.location.href = "../../calendar"
    }
  }

  return (
    <section className='text-center'>
    <h1 className="my-7 text-7xl font-lato">Sign Up</h1>
      <form className='w-full justify-center content-centers flex flex-col'>
        <div>
          <input className='p-5 bg-blue-100 w-[50%] h-[5vh] my-3 border' name="email" type='email' placeholder="Email" value={email} onChange={handleChange} />
        </div>
        <div>
          <input className='p-5 bg-blue-100 w-[50%] h-[5vh] my-3 border' name="password" type="password" placeholder="Password" value={password} onChange={handleChange} />
        </div>
        <div>
          <input className='p-5 bg-blue-100 w-[50%] h-[5vh] my-3 border' name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} />
        </div>
        <div>
          <input className='p-5 bg-blue-100 w-[50%] h-[5vh] my-3 border' name="icsUrl" type="text" placeholder="Link to ICS file" onChange={handleChange} />
        </div>
        <div>
          <input className='p-5 bg-blue-100 w-[50%] h-[5vh] my-3 border' name="preferences" type="text" placeholder="What type of events do you enjoy? ('Clubbing, sports, dancing, etc')" onChange={handleChange} />
        </div>
        <div>
          <button className='p-5 bg-blue-100 w-[50%] my-3 border rounded-xl' onClick={handleClick}>Sign Up</button>
          {error && (errorLink ? <div><Link href={errorLink} className='underline'>{error}. Click here to Log In</Link></div>: <p className='text-red-500'>{error}</p>)} 
        </div>
      </form>
    </section>
  )
}

export default Page