import React from 'react'
import './Reset.css'
import { MdMail } from "react-icons/md";
import Link from 'next/link';


const Reset = () => {
    
  return (
    <div>
      <div className='frikhy'>
        <div className='Wrapper'>
            <form action="">
                <h1>Reset You Password</h1>
                <div className="input-Box">
                <input type="email" placeholder='Email' required />
                <MdMail className='iconn' />
                </div>
                <Link href="/Code"><button> Reset Password</button></Link>
                
            </form>  
        </div>
        </div>
    </div>
   
  )
}

export default Reset