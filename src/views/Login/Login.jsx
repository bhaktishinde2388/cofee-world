import React from 'react'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'


function Login() {
  
  return (
     <div className='signup-bg'>
       <form className='forms-container'>
      <input className='usename-input input-box' type="text" placeholder='Enter UserName' />
       <input className='password-input input-box' type="text" placeholder='Enter Password' />
        <Button text='login'/>

           <p className="login-text">
         Don't have an account? <Link to="/signup">Signup</Link>
        </p>
    </form>
    </div>
  )
}

export default Login