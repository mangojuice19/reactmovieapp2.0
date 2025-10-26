import React from 'react'
import { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.jpg'

const Login = () => {
  const [signState, setSignState] = useState("Sign In")
   return (
    <div className='login'>
      <img src={logo} alt="Logo" className='login-logo' />
      <div className='login-form'>
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"?<input type="text" placeholder='Username'  required />:<></>}
          <input type="email" placeholder='Email or phone number' required />
          <input type="password" placeholder='Password' required />
          <button type='submit' className='login-btn'>{signState}</button>
          <div className='form-help'>
            <div className='remember'>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"?<p>New to Movieverse? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up</span></p>:
          <p>Already have an account? <span onClick={()=>{setSignState("Sign In")}}>Log In</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login