import React, { useState } from 'react';
import Button from "../../components/Button/Button.jsx";
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signupUser = (e) => {
    e.preventDefault();

    if (!user.name || !user.password || !user.confirmPassword || !user.email) {
      setError("All fields are required!");
      return;
    }

    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    if (!usernameRegex.test(user.name)) {
      setError("Username must be 3–16 characters and contain only letters, numbers, or underscore.");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
    if (!passwordRegex.test(user.password)) {
      setError("Password must include uppercase, lowercase, number & special symbol.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(user.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (existingUsers.some((u) => u.email === user.email)) {
      setError("User already exists! Please login.");
      return;
    }

    existingUsers.push(user);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    setError("");
    alert("Signup Successful!");
    navigate("/login");
  };

  return (
    <div className='signup-bg'>
      <form className='signup-form'>
        <h2>Create Your Account</h2>
        <input
          type="text"
          placeholder='Username'
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="email"
          placeholder='Email'
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder='Password'
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <input
          type="password"
          placeholder='Confirm Password'
          value={user.confirmPassword}
          onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
        />
        <Button type="submit" text='Signup' onClick={signupUser} />
        {error && <p className="error-msg">{error}</p>}
        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
