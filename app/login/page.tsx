"use client";

import { useState } from 'react'
import Link from 'next/link'

const page = () => {
  const [loginInfo, setloginInfo] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [errorLink, setErrorLink] = useState('')

  const { email, password } = loginInfo;

  const onChange = (e: any) => {
    setloginInfo((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }))
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()

    const userData = {
      email, 
      password,
    }

    // Construct the fetch request
    const request = new Request(`../../api/users`, {
      method: "GET",
      headers: {
        "email": email,
        "password": password,
      },
    });

    // Make the fetch call and handle the response
    const response = await fetch(request);
    try { // error (has JSON response)
      const data = await response.json();
      setError(data.message)
      if (data.link) setErrorLink(data.link)
    } catch {
      window.location.href = "../../"
    }
  }

  return (
    <>
        <section className='text-center'>
            <h1 className="my-7 text-7xl font-lato">Login</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input type='email' className='p-5 bg-blue-100 w-[50%] my-3 border' id='email' name='email' 
                    value={email} placeholder='Enter your email' onChange={onChange}/>
                </div>
                <div>
                    <input type='password' className='p-5 bg-blue-100 w-[50%] my-3 border' id='password' name='password' 
                     value={password} placeholder='Enter your password' onChange={onChange}/>
                </div>
                <div className='p-5 w-[50%] bg-yellow-200 rounded-xl my-3 mx-auto shadow-2xl justify-self-center'>
                    <button type='submit' className='justify-self-center'>Submit</button>
                </div>
                {error && (errorLink ? <Link href={errorLink} className='text-blue underline'>{error} Click here for Sign Up</Link> : <p>{error}</p>)}
            </form>
        </section>
    </>
  )
}

export default page