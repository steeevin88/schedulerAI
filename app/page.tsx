// Main page hosting the calendar view
"use client";

import { useState } from 'react'

const page = () => {

  

  const myEventsPromise = fetch('/api/calendar', )
  const request = new Request(`/api/calendar`, {
    method: "GET",
    headers: {
      "email": email,
    },
  });

  return (
    <>
        <section className=''>
            <h1 className=' bg-red-950'>
                Login
            </h1>
            <p>Enter your account credentials, upload your calendar</p>
        </section>

        <section className=''>
            <h1> home </h1>
        </section>
    </>
  )
}

export default page