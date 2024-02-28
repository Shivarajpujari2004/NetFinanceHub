import React, { useState } from 'react';
import "./Student"
import "./Register.css";
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
const Register = () => {
  // const[username,setUserName] = useState("");
  // const[email,setEmail] = useState("");
  // const[fullname,setFullname ] = useState("");
  // const[accnor,setAccnor ] = useState("");
  // const[ifsc,setIfsc ] = useState("");
  // const[phonenor,setPhonenor ] = useState("");
  // const[password,setPassword ] = useState("");
  // const  navigate = useNavigate();
  return (
    <div className='register-form'>
      <form className='reg-form' >
      <label htmlFor="username">USERNAME:</label>
        <input type="text" 
        placeholder='username'
        name='username'
        
        />
        <label htmlFor="fullname" >FULLNAME:</label>
        <input type="text" 
        placeholder='fullname'
        name='fullname'
        
        />
        <label htmlFor="email">EMAIL:</label>
        <input type="email"
         placeholder='email' 
         name="email" 
         
          />
        <label htmlFor="accnor">ACCOUNT NUMBER:</label>
        <input type="text" 
        placeholder='account-nor' 
        name="accnor" 
         />
        <label htmlFor="ifsc">IFSC CODE:</label>
        <input type="text"
        placeholder='ifsc' 
        name="ifsc" 
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
        <label htmlFor="confirmPassword">CONFIRM PASSWORD:</label>
        <input type="password" 
        placeholder='confirmPassword' 
        name="confirmPassword"  /><br/>
        <input className='sub' type="submit" value="Register" />
      </form>
      <p id='regpara'>Already have an account?</p>
      <Link id='reglog' to="/Login">Login</Link>
    </div>
  )
}

export default Register
