import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter} from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <div className='header'>
      <img id='logo' src={process.env.PUBLIC_URL + '/banklogo.jpg'} alt="" />
      <h2 id='name'>NetFinanceHub</h2>
      <div className='links'>
        <Link className='routes' to="/">Home</Link>
        <Link className='routes' to="/contact">Contact</Link>
        <Link className='routes' to="/about">About</Link>
        
      </div>
    </div>
  )
}

export default Header
