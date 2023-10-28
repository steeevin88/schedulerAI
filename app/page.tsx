'use-client';

import NavBar from '../public/components/Navbar';

const page = () => {

  return (
    <>
        <section className=''>
            <h1>
                Login
            </h1>
            <p>Enter your account credentials, upload your calendar</p>
        </section>

        <section className=''>
            <form>
                <div className=''>
                    <input type='email' className='input' id='email' name='email' 
                    placeholder='Enter your email'/>
                </div>
                <div className=''>
                    <input type='password' className='input' id='password' name='password' 
                     placeholder='Enter your password'/>
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