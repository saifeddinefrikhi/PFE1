import React from 'react'
import './SignUp.css'
import { FaUser,FaLock } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className='saif'>
    <div className='frikhy'>
        <div className='Wrapper'>
            <form action="">
                <h1>Create account</h1>
                <div className="input-Box">
                <input type="text" placeholder='Username' required />
                <FaUser className='iconn' />
                </div>
                <div className="input-Box">
                <input type="email" placeholder='Email' required />
                <MdMail className='iconn' />
                </div>
                <div className="input-Box">
                <input type="password" placeholder='Password' required />
                <FaLock className='iconn' />
                </div>
                <button type='submit'>Register</button>
                <div className="Login-link">
                <p>I have an account <Link href='/Login'>Login</Link></p>
                </div>
            </form>  
        </div>
    </div>
    </div>
   
  )
}

export default SignUp