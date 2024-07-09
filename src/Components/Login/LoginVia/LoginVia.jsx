import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './LoginVia.css';

const LoginVia = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let hasErrors = false;
    let newErrors = { email: '', password: '' };

    if (email.trim() === '') {
      newErrors.email = 'Email is required';
      hasErrors = true;
    }

    if (password.trim() === '') {
      newErrors.password = 'Password is required';
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors) {
      // Proceed with form submission
      alert('Login successfully');
      navigate('/')
      console.log('Form submitted:', { email, password });
    }
  };

  return (
    <div>
      <div className='loginvia-form-field'>
        <form onSubmit={handleSubmit}>
          <label>Enter Email</label>
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{fontSize:'15px'}} className="error">{errors.email}</p>}

          <div className='loginvia-form-forget'>
            <label>Password</label>
            <Link to="/forgot-password">Forgot Password</Link>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p style={{fontSize:'15px'}} className="error">{errors.password}</p>}
          <br />
          <button className='loginvia-tbn' type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginVia;
