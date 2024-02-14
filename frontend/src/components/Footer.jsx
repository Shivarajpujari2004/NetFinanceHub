import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
        <div className="foot">
            <ul>
                <li><a href="">About us</a></li>
                <li><a href="">Contact us</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms of Service</a></li>
                <li><a href="">Address</a></li>
            </ul>
            <ul>
                <li><a href="">Social Media</a></li>
                <li><a href="">Sitenavigation</a></li>
                <li><a href="">Feedback</a></li>
                <li><a href="">Report unauthorized transactions</a></li>
                <li><a href="">Careers</a></li>
            </ul>
            <ul>
                <li><a href="">Latest Blog posts</a></li>
                <li><a href="">Customer support</a></li>
                <li><a href="">Related links</a></li>
                <li><a href="">Resources</a></li>
                <li><a href="">FAQ</a></li>
            </ul>
            
        </div>
        <Link to="./" id='btp'>Back to Home☝️</Link>
        
    <p id='ft'>&#169;2024 NetFinanceHub All Rights Reserved.</p>
    <hr />
   </footer>
  )
}

export default Footer
