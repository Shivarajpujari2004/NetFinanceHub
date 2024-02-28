import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dash from "../images/dashboard.jpg";
import dep from "../images/dep.jpg";
import wd from "../images/wd.jpg";
import ep from "../images/ep.png";

const Withdraw = () => {
  const [withdrawalHistory, setWithdrawalHistory] = useState([]);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ amount: '' });
  const [depositHistory, setDepositHistory] = useState([]);

  useEffect(() => {
    // Fetch deposit history from localStorage on component mount
    const storedDeposits = JSON.parse(localStorage.getItem('depositHistory')) || [];
    setDepositHistory(storedDeposits);
  }, []);

  useEffect(() => {
    // Fetch withdrawal history from localStorage on component mount
    const storedWithdrawals = JSON.parse(localStorage.getItem('withdrawalHistory')) || [];
    setWithdrawalHistory(storedWithdrawals);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    try {
      const amount = parseFloat(formData.amount);
      if (isNaN(amount) || amount <= 0) {
        setError('Please enter a valid and positive amount.');
        return;
      }

      // Check if there is enough balance for withdrawal
      const totalDeposit = depositHistory.reduce((sum, deposit) => sum + deposit.amount, 0);
      const totalWithdrawal = withdrawalHistory.reduce((sum, withdrawal) => sum + withdrawal.amount, 0);
      const currentBalance = totalDeposit - totalWithdrawal;

      if (amount > currentBalance) {
        setError('Insufficient balance for withdrawal.');
        return;
      }

      const newWithdrawal = {
        id: new Date().getTime(),
        amount,
        date: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
      };

      // Update local storage
      const updatedWithdrawals = [...withdrawalHistory, newWithdrawal];
      localStorage.setItem('withdrawalHistory', JSON.stringify(updatedWithdrawals));

      setWithdrawalHistory(updatedWithdrawals);
      setFormData({ amount: '' });
      setError(null);
    } catch (error) {
      console.error('Error submitting withdrawal:', error);
      setError('Failed to submit withdrawal. Please try again.');
    }
  };

  const handleDeleteWithdrawal = (id) => {
    const updatedWithdrawals = withdrawalHistory.filter((withdrawal) => withdrawal.id !== id);
    localStorage.setItem('withdrawalHistory', JSON.stringify(updatedWithdrawals));
    setWithdrawalHistory(updatedWithdrawals);
  };

  const calculateTotalWithdrawal = () => {
    return withdrawalHistory.reduce((total, withdrawal) => total + withdrawal.amount, 0).toFixed(2);
  };

  return (
    <div>
      <div className="left">
        <Link to="/Student"><img src={dash} alt="" /> Dashboard</Link>
        <Link to="/Deposit"><img src={dep} alt="" /> Deposit</Link>
        <Link to="/Withdraw"><img src={wd} alt="" /> Withdraw</Link>
        <Link to="/Profile"><img src={ep} alt="" /> Profile</Link>
      </div>
      <div>
        <h1>Withdraw History</h1>

        <form onSubmit={handleFormSubmit}>
          <label>
            Amount:
            <input type="text" name="amount" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
          </label>
          <button type="submit">Submit Withdrawal</button>
        </form>

        {error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <div>
            <ul>
              {withdrawalHistory.map((withdrawal) => (
                <li key={withdrawal.id}>
                  <h2>Amount: </h2>
                  {withdrawal.amount}, Date: {withdrawal.date}
                  <button onClick={() => handleDeleteWithdrawal(withdrawal.id)}>Delete</button>
                </li>
              ))}
            </ul>
            <p> <h3>Total Withdrawal:</h3> {calculateTotalWithdrawal()}</p>
            <p><h3>Total Balance: </h3>{depositHistory.reduce((sum, deposit) => sum + deposit.amount, 0) - withdrawalHistory.reduce((sum, withdrawal) => sum + withdrawal.amount, 0)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Withdraw;
