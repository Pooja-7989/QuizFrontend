// Registration.js
import React, { useState } from 'react';
import './register.css'
import logo from '../styles/images/logo.jpeg'
import { Link} from 'react-router-dom';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8081/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    if (data.success) {
      setMessage('Registration successful, verify your account.');
    } else {
      setMessage(data.message || 'Registration failed.');
    }
  };


  return (
    <div className='full1'>
    <form onSubmit={handleSubmit} className="Form1">
    <h3 className='head'><img src={logo} width={"25px"} /><b>RamanaSoft</b></h3>
      
        <div>
          <input type="text" placeholder=' name :' value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <input type="email" placeholder=' email :' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <input type="password" placeholder='password :' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
      </form>
      <div className='mt-2'>
            <p className='para'>
              Already have an account ? <Link to='/login'>login</Link>
            </p>
          </div>
      {message && <p className='para'>{message}</p>}
    </div>

  );
};

export default Registration;