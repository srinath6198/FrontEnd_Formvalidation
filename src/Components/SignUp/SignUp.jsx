import React from 'react'
import './SignUp.css'
import SignForm from './SignForm/SignForm'

const SignUp = () => {
  return (
    <div className='signup'>
      <div className='signup-flex'>
        <div className='signup-right'>
          <h1>Welcome Back to Semikart</h1>
          <p style={{fontSize:'20px',fontWeight:600}}>Semikart Account Features</p> <br />
       <div>
       <ul>
            <li>Faster Checkouts</li>
            <li>Saved shopping baskets for repeat or planned orders</li>
            <li>Order tracking and order history</li>
            <li>Import a Bill Of Material (BOM)</li>
            <li>Download invoice & order COC of your order</li>
        </ul>
       </div>
       <div className='signup-left-btn'>
        <p>Already Registered?</p>
        <button>Resend Activation Link</button>
       </div>
        </div>

        <div className='signup-left'>
         <SignForm/>
        </div>
      </div>
    </div>
  )
}

export default SignUp