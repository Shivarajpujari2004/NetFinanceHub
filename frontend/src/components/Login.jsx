import React from 'react'
import "./Login.css";
import "./Student"
const Login = () => {
  return (
    <div className='logform'>
        <div className='form' >
        <form action="./Student">
        <label htmlFor="Username">USERNAME:</label>
        <input type="text"/>
        <label htmlFor="EMAIL">EMAIL:</label>
        <input type="email" name="" id="" />
        <label htmlFor="Phone-Number">PHONE-NUMBER:</label>
        <input type="tel" name="" id="" />
        <label htmlFor="Password">PASSWORD:</label>
        <input type="password" name="" id="" />
        <input className='sub' type="submit" value="Submit" />
        </form>
        </div>
      
    </div>
  )
}

export default Login
