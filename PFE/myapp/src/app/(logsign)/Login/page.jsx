import React from 'react'
import './LoginForm.css'
import { FaUser,FaLock } from "react-icons/fa";
import Link from 'next/link';
import Reset from '../Reset/page';
import Header from '@/components/Header';


const Login = () => {
  return (
    
    <div>
      <div className='frikhy'>
        <div className='Wrapper'>
          <form action="">
            <h1>Login</h1>
            <div className="input-Box">
              <input type="text" placeholder='Username' required />
              <FaUser className='iconn' />
            </div>
            <div className="input-Box">
              <input type="password" placeholder='Password' required />
              <FaLock className='iconn' />
            </div>
            <div className="remember-forgot">
              <label> <input type="checkbox" /> Remember me  </label>
              <Link href='/Reset'>Forgot password?</Link>
            </div>
            <button type='submit'>Login</button>
            <div className="Register-link">
              <p>I Don't have an account? <Link href='/SignUp'>Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login