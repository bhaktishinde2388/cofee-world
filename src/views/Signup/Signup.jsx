import React from 'react'
import './Signup.css'

function Signup() {
  return (
       <div className='forms-container'>
      <input className='usename-input input-box' type="text" placeholder='Enter UserName' />
       <input className='password-input input-box' type="text" placeholder='Enter UserName' />
        <input className='confirm-pasword-input input-box' type="text" placeholder='Enter UserName' />
    </div>
  )
}

export default Signup