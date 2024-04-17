import React from 'react'
import './Student.css';
import { Link } from 'react-router-dom';
import dash from "../images/das4.png";
import dep from "../images/d1.png";
import wd from "../images/w2.png";
import ep from "../images/ep.png";
import trc from "../images/trc.png";
import scp from "../images/scp.png"
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Student2 = () => {
  const [user, setUser] = useState("");
  const [amount,setamount]=useState({amount:0});
  
  return (
    <div className="STUDENT">
          <div className="left">
        <Link to="/Student2"><img src={dash} alt="" /> Dashboard</Link>
        <Link to="/Deposit2"><img src={dep} alt="" /> Deposit</Link>
        <Link to="/Withdraw2"><img src={wd} alt="" /> Withdraw</Link>
        <Link to="/Profile2"><img src={ep} alt="" /> Profile</Link>
        <Link to="/Scholarship"><img src={scp} alt="" /> Scholarship</Link>
      </div>

      <div className="upper">
        <div className='bb lb'>
          <h2 className='ach'>Hi</h2>
          <div className="ub">
            <div className='tl'>
              <h3>Account Number: </h3>
              <h4>{user.accnor}</h4>
              <h3>Phone No: </h3>
              <h4>{user.phonenor}</h4>
            </div>
            <div className='rl'>
              <h3>Email:</h3>
              <h4> </h4>
              <h3>Address:</h3>
              <h4></h4>
            </div>
          </div>
        </div>
        <div className='bb rb'>
          <h2 className='ach'>Rs {amount.amount}</h2>
          <div className="ub">
            <div className='tl'>
              <h3>Account Type</h3>
              <h4>Savings</h4>
              <h3>Account Number: </h3>
              <h4>{user.accnor}</h4>
            </div>
            <div className='rl'>
              <h3>Branch</h3>
              <h4>bangalore</h4>
              <h3>IFSC code </h3>
              <h4>{user.ifsc}</h4>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Student2
