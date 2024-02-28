import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Edit.css";
import dash from "../images/dashboard.jpg";
import dep from "../images/dep.jpg";
import wd from "../images/wd.jpg";
import ep from "../images/ep.png";
import axios from 'axios';

const Editprofile = () => {
  

  return (
    <div>
      <div className="left">
        <Link to="/Student"><img src={dash} alt="" /> Dashboard</Link>
        <Link to="/Deposit"><img src={dep} alt="" /> Deposit</Link>
        <Link to="/Withdraw"><img src={wd} alt="" /> Withdraw</Link>
        <Link to="/Profile"><img src={ep} alt="" /> Profile</Link>
      </div>
      <form className="rightedit" >
        <label>Name:</label>
        <input
          className='reditboxes'
          type="text"
          name="name"
          value="name"
          
        />
        <label>Account Number:</label>
        <input
          className='reditboxes'
          type="text"
          name="accountNumber"
          value="accountNumber"
          
        />
        <label>Phone Number:</label>
        <input
          className='reditboxes' type="text" name="phone"
          value="phone"
          />
        <label>Email:</label>
        <input
          className='reditboxes'
          type="email"
          name="email"
          value="email"
          
        />
        <label>Address:</label>
        <input
          className='reditboxes'
          type="text"
          name="address"
          value="address"
          
        />
        <label htmlFor="filebtn" id='uploadbtn'>Upload Profile-pic</label>
        <input
          type="file"
          className='reditboxes'
          id='filebtn'
          name="profilePic"
        />
        <input
          className='updatebtn'
          type="submit"
          value="Update profile"
        />
      </form>
    </div>
  );
};

export default Editprofile;

