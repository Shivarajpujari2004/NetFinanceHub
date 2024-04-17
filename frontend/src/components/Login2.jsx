import React from 'react'
import "./Login.css";
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
const Login2 = () => {
    const [username, setusername] = useState("");
    const [phonenor, setphonenor] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handlesubmit = (e) => {
      e.preventDefault();
  
      axios.post('http://localhost:8000/Login2', { username, phonenor, password })
        .then((result) => {
          console.log(result);
          if (result.data.success===true) {
            const userData=result.data.userData;
            localStorage.setItem("userData", JSON.stringify(userData));
  
            // Navigate to the Profile route
            navigate('/Profile2');
          }
         
        })
        .catch(err => {
          setError(err.response.data.details);
        });
    };
  

  return (
    <div className='logform log2'>
    <div className='form form2' >
      <form className='f2' onSubmit={handlesubmit}>
        <label htmlFor="username">USERNAME:</label>
        <input
          type="text"
          placeholder='username'
          name='username'
          onChange={(e) => { setusername(e.target.value) }}
        />
        <label htmlFor="phonenor">PHONE-NUMBER:</label>
        <input
          type="tel"
          placeholder='phonenor'
          name="phonenor"
          onChange={(e) => { setphonenor(e.target.value) }}
        />
        <label htmlFor="password">PASSWORD:</label>
        <input
          type="password"
          placeholder='password'
          name="password"
          onChange={(e) => { setpassword(e.target.value) }}
        />
        <input className='sub' type="submit" value="Login" />
        
        <p id='regtext'>Don't have an netbanking account?</p>
        <Link to="/Register2" id='regbtn'>Create your account</Link>
        <p className="error-message">{error}</p>
      </form>
    </div>
  </div>
  )
}

export default Login2
