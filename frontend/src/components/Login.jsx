import React from 'react'
import "./Login.css";
import "./Student"
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
const Login = () => {
  return (
    <div className='logform'>
        <div className='form' >
        <form >
        <label htmlFor="username">USERNAME:</label>
        <input type="text" 
        placeholder='username'
        name='username'
        />
       <label htmlFor="phonenor">PHONE-NUMBER:</label>
        <input type="tel" 
        placeholder='phonenor' 
        name="phonenor"
       />
         <label htmlFor="password">PASSWORD:</label>
        <input type="password" 
        placeholder='password' 
        name="password"
       />
        <Link className='sub' to="/Student" >Login</Link>
        <p id='regtext'>Don't have an netbanking account?</p>
        <Link to="/Register" id='regbtn'>Create your account</Link>
       
        </form>
    
        </div>
      
    </div>
  )
}

export default Login
