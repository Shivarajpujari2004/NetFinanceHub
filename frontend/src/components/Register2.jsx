import React, { useState } from 'react';
import "./Register.css";
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register2 = () => {
  const[username,setusername] = useState("");
  const[email,setemail] = useState("");
  const[fullname,setfullname ] = useState("");
  const[accnor,setaccnor ] = useState("");
  const[ifsc,setifsc ] = useState("");
  const[schoolname,setschoolname ] = useState("");
  const[phonenor,setphonenor ] = useState("");
  const[password,setpassword ] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true); // State to track password match
  const [error2,seterror2] = useState(""); 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    axios.post('http://localhost:8000/Register2',{username,fullname,email,accnor,ifsc,schoolname,phonenor,password})
    .then(result => {
      if (result.data.error) {
        seterror2(result.data.error); // Update state with the error message
      } else {
        seterror2(""); // Clear error message if there's no error
        navigate('/Login');
      }
    })
    .catch(err => {
      console.error("Registration error:", err);
      seterror2(); // Update state with a generic error message
    });
  };
  const  navigate = useNavigate();
  return (
    <div className='register-form reg2'>
      <form className='reg-form reg-2' onSubmit={handleSubmit}>
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
         <label htmlFor="school">School/College name</label>
        <input type="text"
        placeholder='School/College name' 
        name="schoolname" 
        onChange={(e)=>{setschoolname(e.target.value)}}
        />
        <label htmlFor="password">PASSWORD:</label>
        <input type="password" 
        placeholder='password' 
        name="password"
        onChange={(e)=>{setpassword(e.target.value)}}
         />
       <label htmlFor="confirmPassword">CONFIRM PASSWORD:</label>
         <input
          type="password"
          placeholder='confirmPassword'
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        
        <br/>
        <input className='sub' type="submit" value="Register" />
        <p id='regpara2'>Already have an account?</p>
      <Link id='reglog2' to="/Login2">Login</Link>
      {!passwordMatch && <p className="error-message reg-error reg-2-error">Passwords do not match!</p>}
      <p className="error-message reg-error reg-2-error" >{error2}</p>
      </form>
    </div>
  )
}

export default Register2

