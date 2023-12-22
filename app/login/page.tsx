"use client";

import { useState } from 'react';
import Link from 'next/link';

const page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onChange = (e: any) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    // get request to verify login information
    const request = new Request(`../../api/users`, {
      method: "GET",
      headers: {
        'email': email,
        'password': password,
      }
    });

    // login --> if successfully, redirect to homepage
    const response = await fetch(request);
    try {
      const data = await response.json();
      setError(data.message);
    } catch {
      window.location.href = "../../";
    }
  };

  return (
    <>
      <section className='text-center'>
        <h1 className="my-7 text-7xl font-lato">Login</h1>
          <form onSubmit={onSubmit}>
            <div>
              <input type='email' className='p-5 bg-blue-100 w-[50%] my-3 border rounded-md' id='email' name='email' 
              value={email} placeholder='Enter your email' onChange={onChange}/>
            </div>
            <div>
              <input type='password' className='p-5 bg-blue-100 w-[50%] my-3 border rounded-md' id='password' name='password' 
              value={password} placeholder='Enter your password' onChange={onChange}/>
            </div>
            <div className='p-5 w-[50%] bg-yellow-200 rounded-xl my-3 mx-auto shadow-2xl justify-self-center'>
              <button type='submit' className='justify-self-center'>Submit</button>
            </div>
            {error && 
              <>
                {/* <p>{error}</p> */}
                <p> Error with login. Click <Link href="../signup" rel="noopener noreferrer" className='font-bold'>HERE</Link> to register an account.</p>
              </>
            }
          </form>  
      </section>
    </>
  )
}

export default page;