import React, { useState } from 'react';
import './LoginOtp.css';

const LoginOtp = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpGenerated, setIsOtpGenerated] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleGenerateOtp = () => {
    if (!validateEmail(email)) {
      setErrors({ email: 'Please enter a valid email address' });
      return;
    }
    setIsOtpGenerated(true);
    // Logic to generate and send OTP to the email
    console.log('OTP generated and sent to:', email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
    if (!validateEmail(email)) {
      formErrors.email = 'Please enter a valid email address';
    }
    if (!otp) {
      formErrors.otp = 'Please enter the OTP';
    }
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    // Logic to handle form submission
    console.log('Form submitted with email:', email, 'and OTP:', otp);
  };

  return (
    <div className='login-otp'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors({});
            }}
          />
          {errors.email && <p style={{fontSize:'15px'}} className='error'>{errors.email}</p>}
        </div>
          <div className='form-group'>
            <label htmlFor='otp'>OTP</label>
            <input
              type='text'
              id='otp'
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
                setErrors({});
              }}
            />
            {errors.otp && <p style={{fontSize:'15px'}} className='error'>{errors.otp}</p>}
          </div>
        
        <div className='form-group buttons'>
          <button
            type='button'
            onClick={handleGenerateOtp}
            disabled={isOtpGenerated}
          >
            Generate OTP
          </button>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginOtp;
