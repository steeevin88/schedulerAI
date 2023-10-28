"use client";

import { useState } from 'react'

const page = () => {
  const [loginInfo, setloginInfo] = useState({
    email: '',
    password: '',
  })

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
        console.log(data);
    }
  }

  return (
    <>
        <section className=''>
            <h1>
                Login
            </h1>
            <p>Enter your account credentials, upload your calendar</p>
        </section>

        <section className=''>
            <form onSubmit={onSubmit}>
                <div className=''>
                    <input type='email' className='input' id='email' name='email' 
                    value={email} placeholder='Enter your email' onChange={onChange}/>
                </div>
                <div className=''>
                    <input type='password' className='input' id='password' name='password' 
                     value={password} placeholder='Enter your password' onChange={onChange}/>
                </div>
                <div className=''>
                    <button type='submit' className='btn'>Submit</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default page