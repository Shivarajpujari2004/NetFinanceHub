// Student.jsx
import React from 'react';
import './Student.css';
import { Link } from 'react-router-dom';
import dash from "../images/dashboard.jpg";
import dep from "../images/dep.jpg";
import wd from "../images/wd.jpg";
import ep from "../images/ep.png";
import trc from "../images/trc.png";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Student = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const userDataString = localStorage.getItem("userData");

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUser(userData);
    }
  }, []);
  return (
    <>
      <div className="left">
        <Link to="/Student"><img src={dash} alt="" /> Dashboard</Link>
        <Link to="/Deposit"><img src={dep} alt="" /> Deposit</Link>
        <Link to="/Withdraw"><img src={wd} alt="" /> Withdraw</Link>
        <Link to="/Profile"><img src={ep} alt="" /> Profile</Link>
        <Link to="/Transfer"><img src={trc} alt="" /> Transfer Amt</Link>
      </div>

      <div className="upper">
        <div className='bb lb'>
          <h2 className='ach'>Hi  {user.username}</h2>
          <div className="ub">
            <div className='tl'>
              <h3>Account Number: {user.accnor}</h3>
              <h4></h4>
              <h3>Phone No: {user.phonenor}</h3>
              <h4></h4>
            </div>
            <div className='rl'>
              <h3>Email: {user.email}</h3>
              <h4></h4>
              <h3>Address:</h3>
              <h4></h4>
            </div>
          </div>
        </div>
        <div className='bb rb'>
          <h2 className='ach'>${}</h2>
          <div className="ub">
            <div className='tl'>
              <h3>Account Type</h3>
              <h4>Savings</h4>
              <h3>Account Number: {user.accnor}</h3>
              <h4></h4>
            </div>
            <div className='rl'>
              <h3>Branch</h3>
              <h4>bangalore</h4>
              <h3>IFSC code {user.ifsc}</h3>
              <h4></h4>
            </div>
          </div>
        </div>
      </div>

      <div className="lower">
        <caption>Transaction history</caption>
        <table border={1} className='tab'>
          <thead>
            <tr>
              <th>Transaction Id</th>
              <th>Amount</th>
              <th>Transaction type</th>
              <th>Transaction date</th>
              <th>Source account number</th>
              <th>Target account number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              <tr >
                
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            
              </tr>
        
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Student;
