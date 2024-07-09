import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../Assets/semikart-logo.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add any additional logout logic here
  };

  return (
    <div>
      <nav className='navBar'>
        <img src={logo} alt="Logo" />
        <div className='navBar-btn'>
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <button><Link to='login'>Login</Link></button>
              <button><Link to='signup'>Sign Up</Link></button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
