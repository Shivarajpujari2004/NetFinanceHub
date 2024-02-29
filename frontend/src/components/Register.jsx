import React, { useState } from 'react';
import "./Student"
import "./Register.css";
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
const Register = () => {
  const[username,setusername] = useState("");
  const[email,setemail] = useState("");
  const[fullname,setfullname ] = useState("");
  const[accnor,setaccnor ] = useState("");
  const[ifsc,setifsc ] = useState("");
  const[phonenor,setphonenor ] = useState("");
  const[password,setpassword ] = useState("");
  const  navigate = useNavigate();

 const handlesubmit=(e)=>{
  e.preventDefault()
  axios.post('http://localhost:8000/Register',{username,fullname,email,accnor,ifsc,phonenor,password})
  .then(result=>{console.log(result)
  navigate('/Login')
  })
  .catch(err=>alert(err));
 }

  return (
    <div className='register-form'>
      <form className='reg-form' onSubmit={handlesubmit}>
      <label htmlFor="username">USERNAME:</label>
        <input type="text" 
        placeholder='username'
        name='username'
        onChange={(e)=>{setusername(e.target.value)}}
        />
        <label htmlFor="fullname" >FULLNAME:</label>
        <input type="text" 
        placeholder='fullname'
        name='fullname'
        onChange={(e)=>{setfullname(e.target.value)}}
        />
        <label htmlFor="email">EMAIL:</label>
        <input type="email"
         placeholder='email' 
         name="email" 
         onChange={(e)=>{setemail(e.target.value)}}
          />
        <label htmlFor="accnor">ACCOUNT NUMBER:</label>
        <input type="text" 
        placeholder='account-nor' 
        name="accnor" 
         onChange={(e)=>{setaccnor(e.target.value)}}     
         />
        <label htmlFor="ifsc">IFSC CODE:</label>
        <input type="text"
        placeholder='ifsc' 
        name="ifsc" 
        onChange={(e)=>{setifsc(e.target.value)}}
        />
        <label htmlFor="phonenor">PHONE-NUMBER:</label>
        <input type="tel" 
        placeholder='phonenor' 
        name="phonenor"
        onChange={(e)=>{setphonenor(e.target.value)}}
        />
        <label htmlFor="password">PASSWORD:</label>
        <input type="password" 
        placeholder='password' 
        name="password"
        onChange={(e)=>{setpassword(e.target.value)}}
         />
        <label htmlFor="confirmPassword">CONFIRM PASSWORD:</label>
        <input type="password" 
        placeholder='confirmPassword' 
        name="confirmPassword" /><br/>

        <input className='sub' type="submit" value="Register" />
      </form>
      <p id='regpara'>Already have an account?</p>
      <Link id='reglog' to="/Login">Login</Link>
    </div>
  )
}

export default Register
