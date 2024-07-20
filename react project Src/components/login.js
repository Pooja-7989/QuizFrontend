import React, { useState } from 'react';
import './register.css'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.success){
        alert("Login Successfully")
        navigate('/dashboard');
      }else{
        
      setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An Error Occured during Login')
    }
  };

  return (
        <div className='full1'>
        <form className="Form1" onSubmit={handleSubmit}>
        <h3><img src='https://media.licdn.com/dms/image/C560BAQHkva4bpIKz3A/company-logo_200_200/0/1668671643491/ramanasoftware_logo?e=2147483647&v=beta&t=lSHe-hhGyi-3Ps4SnL5lS92as2lKJbG_Wxc6Tanj5tg' width={"25px"} /><b>RamanaSoft</b></h3>
      

          <div className='mb-3'>
            <input type='email' placeholder='Enter email' className='form-control' value={email} required onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='mb-3'>
            <input type='password' placeholder='Enter password' className='form-control' value={password} required onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type='submit' className='btn btn-success' ><Link to={'/btn'} style={{color:'whitesmoke'}}>Login</Link></button>
          <div className='mt-2'>
            <p>
              Don't have an account ? <Link to='/'>Register</Link>
            </p>
            <p>
              Forgot password ? <Link to='/reset'>Reset</Link>
            </p>
          </div>
        </form>
        </div>
  );
}

export default Login;