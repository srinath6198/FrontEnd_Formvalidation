import React, { useState } from 'react';
import './SignForm.css';

const SignForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    companyName: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let formErrors = {};

    if (!formData.firstName) formErrors.firstName = 'First name is required';
    if (!formData.lastName) formErrors.lastName = 'Last name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.mobileNumber) formErrors.mobileNumber = 'Mobile number is required';
    if (!formData.password) formErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) formErrors.confirmPassword = 'Passwords do not match';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className='sign-form'>
      <div className='sign-form-header'>
        <button>Sign in with Google</button>
        <p>OR</p>
      </div>
      <div className="sign-form-register">
        <form onSubmit={handleSubmit}>
          <div className='sign-form-register-flex'>
            <span>
              <label>First Name *</label> <br />
              <input
                type="text"
                name="firstName"
                className='register-name'
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className='error'>{errors.firstName}</p>}
            </span>
            <span>
              <label>Last Name *</label> <br />
              <input
                type="text"
                name="lastName"
                className='register-name'
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className='error'>{errors.lastName}</p>}
            </span>
            <span>
              <label>Email *</label> <br />
              <input
                type="text"
                name="email"
                className='register-width'
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className='error'>{errors.email}</p>}
            </span>
            <span>
              <label>Mobile Number *</label> <br />
              <input
                type="text"
                name="mobileNumber"
                className='register-width'
                value={formData.mobileNumber}
                onChange={handleChange}
              />
              {errors.mobileNumber && <p className='error'>{errors.mobileNumber}</p>}
            </span>
            <span>
              <label>Company Name (Optional)</label> <br />
              <input
                type="text"
                name="companyName"
                className='register-width'
                value={formData.companyName}
                onChange={handleChange}
              />
            </span>
            <span>
              <label>Password *</label> <br />
              <input
                type="password"
                name="password"
                className='register-width'
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className='error'>{errors.password}</p>}
            </span>
            <span>
              <label>Confirm Password *</label> <br />
              <input
                type="password"
                name="confirmPassword"
                className='register-width'
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
            </span>
          </div>
          <div className='signin-form-btn'><button type="submit">Create Account</button></div>
        </form>
      </div>
    </div>
  );
};

export default SignForm;
