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
    const data = await response.json();
    console.log(data.hasOwnProperty("email"));
    if (data.hasOwnProperty("email")) { // non-error json 
        window.location.href = "../../"
    } else {
        setError(data.message)
        setErrorLink(data.link)
    }
  }

  return (
    <>
        <section className='text-center'>
            <h1 className="my-7 text-7xl font-lato">Login</h1>
            <form onSubmit={onSubmit}>
                <div className=''>
                    <input type='email' className='p-5 w-[50%] my-3 border' id='email' name='email' 
                    value={email} placeholder='Enter your email' onChange={onChange}/>
                </div>
                <div className=''>
                    <input type='password' className='p-5 w-[50%] my-3 border' id='password' name='password' 
                     value={password} placeholder='Enter your password' onChange={onChange}/>
                </div>
                <div className='p-5 w-[50%] bg-yellow-200 rounded-xl my-3 mx-auto shadow-2xl justify-self-center'>
                    <button type='submit' className='justify-self-center'>Submit</button>
                </div>
            </form>
        </section>

        {error && (errorLink ? <Link href={errorLink}>{error}</Link> : <p>{error}</p>)}
    </>
  )
}

export default page