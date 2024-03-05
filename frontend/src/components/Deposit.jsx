import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dash from "../images/dashboard.jpg";
import dep from "../images/dep.jpg";
import wd from "../images/wd.jpg";
import ep from "../images/ep.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import "./Deposit.css"

const Deposit = () => {

  const [user, setUser] = useState("");
  const [amount, setamount] = useState("");//input
  const [balance,setbalance]=useState("");

  const  navigate = useNavigate();
  const username = user.username;
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
      if (userAccount && userAccount.amount !== undefined) {
        setbalance(userAccount);
      }
    }
  },[]);

  const handlesubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:8000/deposit',{username,amount})
    .then(result=>{console.log(result)
      const account = result.data.acc;
     
      localStorage.setItem("useraccount", JSON.stringify(account));
      setbalance(account);
    navigate('/Student');
    
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
      <div>
        <h1>Deposit History</h1>

        <form className='withdraw' onSubmit={handlesubmit}>
          <label>
            Amount:
            <input type="text" name="amount" onChange={(e)=>{setamount(e.target.value)}} />
          </label>
          <input className='sub with' type="submit" value="Deposit" />
        </form>
          <div>
           <h2 className='withamt'>Total amount: {balance.amount}</h2>

          </div>
        
      </div>
    </div>
  );
};

export default Deposit;

