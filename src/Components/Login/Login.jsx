import './Login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginVia from './LoginVia/LoginVia';
import LoginOtp from './LoginOTP/LoginOtp';
import { signInWithGoogle } from '../firebase'; // Adjust path if necessary

const Login = () => {
  const [showLoginVia, setShowLoginVia] = useState(true);

  return (
    <div className='login'>
      <div className='login-flex'>
        <div className='login-right'>
          <h1>Welcome Back to Semikart</h1>
          <p>All Your Electronic Needs Are Here And Classified!</p>
        </div>

        <div className='login-left'>
          <div className='login-form'>
            <p>Log in to continue to your account.</p>
            <div className='login-form-btn'>
              <button onClick={() => setShowLoginVia(true)}>Via Password</button>
              <button onClick={() => setShowLoginVia(false)}>Via OTP</button>
            </div>
            {/* Conditionally render LoginVia or LoginOtp */}
            {showLoginVia ? <LoginVia /> : <LoginOtp />}
          </div>

          <div className='login-google-sign'>
            <p>OR</p>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <p>Don’t have an account? Click here to <Link to="/signup">create</Link> one now!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
