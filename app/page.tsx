'use client';
import { useState } from 'react'

const page = () => {
  const usernameCookie = document.cookie.match('(^|;)\\s?username\\s?=\\s?([^;]+)');
  const username = usernameCookie ? usernameCookie[2] : null;

  if (!username) {
    window.location.href = "../login"
  }


  return (
    <>
      test
    </>
  )
}

export default page