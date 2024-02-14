import React from 'react'
import './Student.css'
import dash from "../images/dashboard.jpg";
import dep from "../images/dep.jpg";
import wd from "../images/wd.jpg";
import ep from "../images/ep.png";
const Student = () => {
  return (
    <>
     <div className="left">
        <a  href=""><img src={dash} alt="" /> Dashboard</a>
        <a  href=""><img src={dep} alt="" /> Deposit</a>
        <a  href=""><img src={wd} alt="" /> Withdraw</a>
        <a  href=""><img src={ep} alt="" /> Edit profile</a>
    </div>

    <div className="upper">
        <div className='bb lb'>
            <h2 className='ach'>Hi Shivu</h2>
            <div className="ub">
            <div className='tl'>
                <h3>Account Number:</h3>
                <h4>1234</h4>
                <h3>Phone No:</h3>
                <h4>1324</h4>
            </div> 
            <div className='rl'>
                <h3>Email:</h3>
                <h4>Abc@gmail.com</h4>
                <h3>Address:</h3>
                <h4>bglore</h4>
            </div>
            </div>
        </div>
        <div className='bb rb'>
        <h2 className='ach'>$200</h2>
            <div className="ub">
            <div className='tl'>
                <h3>Account Type</h3>
                <h4>Savings</h4>
                <h3>Account Number:</h3>
                <h4>1324</h4>
            </div> 
            <div className='rl'>
                <h3>Branch</h3>
                <h4>bangalore</h4>
                <h3>IFSC code</h3>
                <h4>GD5464Gf</h4>
            </div>
            </div>
        </div>
    </div>

    <div className="lower">
        <caption>Transaction history</caption>
       <table border={1} className='tab' >
        <tr>
            <td>Transaction Id</td>
            <td>Amount</td>
            <td>Transaction type</td>
            <td>Transactoin date</td>
            <td>Source account number</td>
            <td>Target account number</td>
        </tr>
        <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>2</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>3</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>4</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>5</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
       </table>
    </div>
    </>
   
  )
}

export default Student
