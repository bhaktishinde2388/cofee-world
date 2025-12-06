import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'


function Login() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const login = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find((u) => u.name === user.name);

    if (!foundUser) {
      toast.error("User not found!")
      return;
    }

    if (foundUser.password !== user.password) {
      toast.error("Incorrect password!");
      return;
    }


    localStorage.setItem("currentUser", JSON.stringify(foundUser));

    toast.success("Login Successful!");
    toast.loading("Redirecting...");

  

  setTimeout(() => {
    window.location.href = '/';
  }, 2000);
};



return (
  <div className='signup-bg'>
    <form className='forms-container' onSubmit={(e) => e.preventDefault()}>
      <input className='usename-input input-box' type="text" placeholder='Enter UserName'
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })} />

      <input className='password-input input-box' type="password" placeholder='Enter Password'
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })} />


      <Button text='login' onClick={login} />

      <p className="login-text">
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </form>
    <Toaster />
  </div>
)
}

export default Login;