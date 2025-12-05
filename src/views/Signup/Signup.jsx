import React from 'react'
import Button from "../../components/Button/Button.jsx"
import './Signup.css'

function Signup() {
  return (
    <div className='signup-bg'>
       <form className='forms-container'>
      <input className='usename-input input-box' type="text" placeholder='Enter UserName' />
       <input className='password-input input-box' type="text" placeholder='Enter Password' />
        <input className='confirm-pasword-input input-box' type="text" placeholder='Confirm Password' />
        <Button text='signup'/>

        
    </form>
    </div>
  )
}

export default Signup