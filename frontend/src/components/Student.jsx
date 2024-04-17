// Student.jsx
import React from 'react';
import './Student.css';
import { Link } from 'react-router-dom';
import dash from "../images/das4.png";
import dep from "../images/d1.png";
import wd from "../images/w2.png";
import ep from "../images/ep.png";
import trc from "../images/trc.png";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

const Student = () => {
  const [user, setUser] = useState("");
  const [balance,setbalance]=useState({amount:0});
  const [transactions,setTransactions]=useState([]);
  let count=1;

  const snumber = user.username;
  useEffect(() => {
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUser(userData);
    }
    
  }, []);

  useEffect(()=>{
    const useAccount = localStorage.getItem("useraccount");
    if (useAccount) {
      const userAccount = JSON.parse(useAccount);
      if (userAccount && userAccount.amount!== undefined) {
        setbalance(userAccount);
      }
    }
  },[]);
  useEffect(()=>{
   
    
    axios.get(`http://localhost:8000/transactionDetails?Sendernumber:${snumber}`)
    .then(result=>{console.log(result)
      const transactions = result.data;
      setTransactions(transactions)
    })
    .catch((err)=>console.log(err))

  },[]);

  const Show=()=>{
    axios.get(`http://localhost:8000/transactionDetails2?Sendernumber:${snumber}`)
    .then(result=>{console.log(result)
      const transactions = result.data;
      setTransactions(transactions)
    })
    .catch((err)=>console.log(err))
  }


  return (
    <div className="STUDENT">
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
              <h3>Account Number: </h3>
              <h4>{user.accnor}</h4>
              <h3>Phone No: </h3>
              <h4>{user.phonenor}</h4>
            </div>
            <div className='rl'>
              <h3>Email:</h3>
              <h4> {user.email}</h4>
              <h3>Address:</h3>
              <h4></h4>
            </div>
          </div>
        </div>
        <div className='bb rb'>
          <h2 className='ach'>Rs {balance?.amount}</h2>
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

      <div className="lower">
        <caption >Transaction history</caption>
        <table border={1} className='tab'>
          <thead>
            <tr>
              <th>id</th>
              <th>Transaction Date & Time</th>
              <th>Amount</th>
              <th>Source phone number</th>
              <th>Target phone number</th>
            </tr>
          </thead>
          <tbody>
          {transactions.map(transaction => (
              <tr >
                <td>{count++}</td>
                <td>{new Date(transaction.Date).toLocaleString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' })}</td>


                <td>{transaction.amount}</td>
               

                <td>{transaction.Sendernumber}</td>
                <td>{transaction.Receivernumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br></br>
        <button onClick={Show}>Show all transactions</button>
      </div>
    </div>
  );
};

export default Student;
