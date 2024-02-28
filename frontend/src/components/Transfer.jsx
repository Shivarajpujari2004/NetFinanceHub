// Transaction.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import dash from "../images/dashboard.jpg";
import dep from "../images/dep.jpg";
import wd from "../images/wd.jpg";
import ep from "../images/ep.png";

const Transaction = () => {
  const [formData, setFormData] = useState({
    amount: '',
    transactionType: '',
    transactionDate: '',
    sourceAccountNumber: '',
    targetAccountNumber: '',
  });
  const [error, setError] = useState(null);
  const location = useLocation();
  const totalBalance = location.state ? location.state.totalBalance : 0;
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    try {
      // Validate form data
      if (!formData.amount || !formData.transactionType || !formData.transactionDate || !formData.sourceAccountNumber || !formData.targetAccountNumber) {
        setError('Please fill in all fields.');
        return;
      }

      // Check if there is enough balance for the transaction
      const amount = parseFloat(formData.amount);
      if (isNaN(amount) || amount <= 0 || amount > totalBalance) {
        setError('Invalid amount or insufficient balance for the transaction.');
        return;
      }

      // Fetch existing transactions from localStorage
      const existingTransactions = JSON.parse(localStorage.getItem('transactionHistory')) || [];

      // Create a new transaction
      const newTransaction = {
        id: new Date().getTime(),
        ...formData,
      };

      // Update local storage with recent 5 transactions
      const updatedTransactions = [newTransaction, ...existingTransactions.slice(0, 4)];
      localStorage.setItem('transactionHistory', JSON.stringify(updatedTransactions));

      // Update withdrawal balance in localStorage
      const updatedWithdrawalBalance = parseFloat(localStorage.getItem('withdrawalBalance')) + parseFloat(formData.amount);
      localStorage.setItem('withdrawalBalance', updatedWithdrawalBalance);

      setFormData({
        amount: '',
        transactionType: '',
        transactionDate: '',
        sourceAccountNumber: '',
        targetAccountNumber: '',
      });
      setError(null);

      // Navigate to Student page after successful transaction
      navigate('/Student', { state: { withdrawalBalance: updatedWithdrawalBalance } });
    } catch (error) {
      console.error('Error submitting transaction:', error);
      setError('Failed to submit transaction. Please try again.');
    }
  };

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
        <label>
          Amount:
          <input type="text" name="amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
        </label>

        <label>
          Transaction Type:
          <input type="text" name="transactionType" value={formData.transactionType} onChange={(e) => setFormData({ ...formData, transactionType: e.target.value })} />
        </label>

        <label>
          Transaction Date:
          <input type="text" name="transactionDate" value={formData.transactionDate} onChange={(e) => setFormData({ ...formData, transactionDate: e.target.value })} />
        </label>

        <label>
          Source Account Number:
          <input type="text" name="sourceAccountNumber" value={formData.sourceAccountNumber} onChange={(e) => setFormData({ ...formData, sourceAccountNumber: e.target.value })} />
        </label>

        <label>
          Target Account Number:
          <input type="text" name="targetAccountNumber" value={formData.targetAccountNumber} onChange={(e) => setFormData({ ...formData, targetAccountNumber: e.target.value })} />
        </label>

        <button type="submit">Submit Transaction</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Transaction;
