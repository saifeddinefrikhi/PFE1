import React from 'react'
import './Code.css'
import { TbNumbers } from "react-icons/tb";
import Link from 'next/link';




const Code = () => {
  return (
    <div>
      <div className='frikhy'>
        <div className='Wrapper'>
            <form action="">
                <h1>Put Your Code Here</h1>
                <div className="input-Box">
                <input type="number" placeholder='Code' required />
                <TbNumbers className='iconn'/>
                </div>
                <Link href='/NewPsw'><button  type='submit'>Continue</button></Link>
            </form>  
        </div>
    </div>
    </div>
  )
}

export default Code