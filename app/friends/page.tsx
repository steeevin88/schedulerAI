"use client";

import { useState } from 'react'

const Page = () => {
  const [friendEmail, setFriendEmail] = useState('')
  const [error, setError] = useState('')

  const onSubmit = async (e: any) => {
    e.preventDefault()

    // Construct the fetch request
    const request = new Request(`../../api/friends`, {
      method: "POST",
      body: JSON.stringify({"email": friendEmail})
    });

    // Make the fetch call and handle the response
    const response = await fetch(request);
    console.log(response)
    const data = await response.json();
    setError(data.message)
  }

  return (
    <>
        <section className='text-center'>
            <h1 className="my-7 text-7xl font-lato">Add a Friend</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input type='email' className='p-5 bg-blue-100 w-[50%] my-3 border' id='email' name='email' 
                    placeholder='Enter the email address of your friend' onChange={e => setFriendEmail(e.target.value)}/>
                </div>
                <div className='p-5 w-[50%] bg-yellow-200 rounded-xl my-3 mx-auto shadow-2xl justify-self-center'>
                    <button type='submit' className='justify-self-center'>Submit</button>
                </div>
                {error && <p>{error}</p>}
            </form>
        </section>
    </>
  )
}

export default Page