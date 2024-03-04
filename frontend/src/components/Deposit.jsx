import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dash from "../images/dashboard.jpg";
import dep from "../images/dep.jpg";
import wd from "../images/wd.jpg";
import ep from "../images/ep.png";

const Deposit = () => {

  return (
    <div>
      <div className="left">
        <Link to="/Student"><img src={dash} alt="" /> Dashboard</Link>
        <Link to="/Deposit"><img src={dep} alt="" /> Deposit</Link>
        <Link to="/Withdraw"><img src={wd} alt="" /> Withdraw</Link>
        <Link to="/Profile"><img src={ep} alt="" /> Profile</Link>
      </div>
      <div>
        <h1>Transaction History</h1>

        <form onSubmit>
          <label>
            Amount:
            <input type="text" name="amount"  />
          </label>
          <button type="submit">Submit Transaction</button>
        </form>

  
          <p style={{ color: 'red' }}></p>
       
          <div>
            <h2>Deposit History</h2>
            <ul>
            
                <li >
                  
                  <button >Delete</button>
                </li>
              
            </ul>
            <p>Total Deposit Amount: </p>

            <h2>Withdrawal History</h2>
            <p>Total Withdrawal Amount: </p>

            <h2>Net Balance</h2>
            <p></p>
          </div>
        
      </div>
    </div>
  );
};

export default Deposit;

// const [depositHistory, setDepositHistory] = useState([]);
  // const [withdrawalHistory, setWithdrawalHistory] = useState([]);
  // const [error, setError] = useState(null);
  // const [formData, setFormData] = useState({ amount: '' });

  // useEffect(() => {
  //   // Fetch deposit history from localStorage on component mount
  //   const storedDeposits = JSON.parse(localStorage.getItem('depositHistory')) || [];
  //   setDepositHistory(storedDeposits);

  //   // Fetch withdrawal history from localStorage on component mount
  //   const storedWithdrawals = JSON.parse(localStorage.getItem('withdrawalHistory')) || [];
  //   setWithdrawalHistory(storedWithdrawals);
  // }, []);

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   try {
  //     const amount = parseFloat(formData.amount);
  //     if (isNaN(amount) || amount <= 0) {
  //       setError('Please enter a valid and positive amount.');
  //       return;
  //     }

  //     const newDeposit = {
  //       id: new Date().getTime(),
  //       amount,
  //       date: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
  //     };

  //     // Update local storage for deposits
  //     const updatedDeposits = [...depositHistory, newDeposit];
  //     localStorage.setItem('depositHistory', JSON.stringify(updatedDeposits));
  //     setDepositHistory(updatedDeposits);

  //     // Update total amount
  //     setError(null);
  //     setFormData({ amount: '' });
  //   } catch (error) {
  //     console.error('Error submitting deposit:', error);
  //     setError('Failed to submit deposit. Please try again.');
  //   }
  // };

  // const handleDelete = (id, type) => {
  //   // Delete a specific deposit or withdrawal from local storage based on type
  //   const updatedData = type === 'deposit'
  //     ? depositHistory.filter((deposit) => deposit.id !== id)
  //     : withdrawalHistory.filter((withdrawal) => withdrawal.id !== id);

  //   type === 'deposit'
  //     ? localStorage.setItem('depositHistory', JSON.stringify(updatedData))
  //     : localStorage.setItem('withdrawalHistory', JSON.stringify(updatedData));

  //   type === 'deposit'
  //     ? setDepositHistory(updatedData)
  //     : setWithdrawalHistory(updatedData);
  // };

  // const calculateTotalAmount = (data) => {
  //   return data.reduce((total, item) => total + item.amount, 0).toFixed(2);
  // };

  // const totalDepositAmount = calculateTotalAmount(depositHistory);
  // const totalWithdrawalAmount = calculateTotalAmount(withdrawalHistory);
  // const netBalance = (totalDepositAmount - totalWithdrawalAmount).toFixed(2);