import React from 'react';
import './NavBar.css'
import logo from '../../Assets/semikart-logo.svg'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <nav className='navBar'>
            <img src={logo} alt="" />
            <div className='navBar-btn'>
                <button><Link to='login'>Login</Link></button>
                <button><Link to='signup'>Sign Up</Link></button>
            </div>
        </nav>
    </div>
  )
}

export default NavBar