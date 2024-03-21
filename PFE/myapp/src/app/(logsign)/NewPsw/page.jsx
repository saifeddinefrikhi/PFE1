import React from 'react'
import './NewPsw.css'
import {FaLock } from "react-icons/fa";



const NewPsw = () => {
  return (
    <div className='frikhy'>
        <div className='Wrapper'>
          <form action="">
            <h1>New Password</h1>
            <div className="input-Box">
              <input type="password" placeholder='New Password' required />
              <FaLock className='iconn' />
            </div>
            <div className="input-Box">
              <input type="password" placeholder='Repeat Password' required />
              <FaLock className='iconn' />
            </div>
            <button type='submit'>Done</button>
            </form>  
        </div>
    </div>
  )
}

export default NewPsw