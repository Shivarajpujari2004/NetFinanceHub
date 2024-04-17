// Transaction.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import dash from "../images/das4.png";
import dep from "../images/d1.png";
import wd from "../images/w2.png";
import ep from "../images/ep.png";
import "./Student"
import axios from 'axios'

const Transaction = () => {

  const navigate = useNavigate();
  const [amount, setamount] = useState()
  const [snumber, setsnumber] = useState()
  const [rnumber, setrnumber] = useState()
  const [password,setpassword]=useState()
  const[error,seterror] = useState()
  const handleFormSubmit=(e)=>{
    e.preventDefault();

    axios.post('http://localhost:8000/transaction',{amount,snumber,rnumber,password})
    .then(result=>{console.log(result)
      
      const account = result.data.acc;
      const transactions = result.data.transactions;
      if(result.data.message==="password is incorrect"){
      seterror(result.data.message)
      }else{
      localStorage.setItem("useraccount", JSON.stringify(account));      
      localStorage.setItem("usertransactions", JSON.stringify(transactions));

    navigate('/Student')
      }
    })
   
    .catch(err=>alert(err));
  }

  return (
    <div>
      <div className="left">
        <Link to="/Student"><img src={dash} alt="" /> Dashboard</Link>
        <Link to="/Deposit"><img src={dep} alt="" /> Deposit</Link>
        <Link to="/Withdraw"><img src={wd} alt="" /> Withdraw</Link>
        <Link to="/Profile"><img src={ep} alt="" /> Profile</Link>
      </div>
      <h1>Transaction Page</h1>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="amount">Amount:</label>
        <input type="number" name="amount" id="" value={amount} onChange={(e)=>setamount(e.target.value)} />
        <label htmlFor="snumber">Sender Phone-number</label>
        <input type="text" name="snumber" id="" value={snumber} onChange={(e)=>setsnumber(e.target.value)}/>
        <label htmlFor="rnumber">Receiver  Phone-number:</label>
        <input type="text" name="rnumber" id="" value={rnumber} onChange={(e)=>setrnumber(e.target.value)}/>
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" id="" value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button type="submit">Submit Transaction</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Transaction;
