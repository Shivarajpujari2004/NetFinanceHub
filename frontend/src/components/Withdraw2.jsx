import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dash from "../images/das4.png";
import dep from "../images/d1.png";
import wd from "../images/w2.png";
import ep from "../images/ep.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import "./Deposit.css"

const Withdraw2 = () => {


  const [balance,setbalance]=useState({amount:0});
  const [user, setUser] = useState("");
  const [amount, setamount] = useState("");
  const  navigate = useNavigate();
  const phonenor = user.phonenor;

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
    axios.post('http://localhost:8000/withdraw',{phonenor,amount})
    .then(result=>{console.log(result)
      const account = result.data.acc;
      localStorage.setItem("useraccount", JSON.stringify(account));
      setbalance(account);
    navigate('/Student');
    })
    .catch(err=>alert(err));
   }

  return (
    <div className='WITHDRAW'>
      <div className="left">
        <Link to="/Student2"><img src={dash} alt="" /> Dashboard</Link>
        <Link to="/Deposit2"><img src={dep} alt="" /> Deposit</Link>
        <Link to="/Withdraw2"><img src={wd} alt="" /> Withdraw</Link>
        <Link to="/Profile2"><img src={ep} alt="" /> Profile</Link>
      </div>
      <div>
        <h1>Withdraw History</h1>

        <form className='withdraw' onSubmit={handlesubmit}>
          <label>
            Amount:
            <input type="text" name="amount" onChange={(e)=>{setamount(e.target.value)}} />
          </label>
          <input className='sub with' type="submit" value="Submit Withdrawl" />
        </form>

        <div>
           <h2 className='withamt'>Total amount: {balance.amount}</h2>

          </div>
      </div>
    </div>
  );
};

export default Withdraw2;
