// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import "./Profile.css";
// import api from '../api';
// import dash from "../images/dashboard.jpg";
// import dep from "../images/dep.jpg";
// import wd from "../images/wd.jpg";
// import ep from "../images/ep.png";
// import axios from 'axios';

// const Profile = () => {
//   const storedData = JSON.parse(localStorage.getItem('userData')) || {};
//   return (
//     <div className='profile'>
//       <div className="left">
//         <Link to="/Student"><img src={dash} alt="" /> Dashboard</Link>
//         <Link to="/Deposit"><img src={dep} alt="" /> Deposit</Link>
//         <Link to="/Withdraw"><img src={wd} alt="" /> Withdraw</Link>
//         <Link to="/Profile"><img src={ep} alt="" /> Profile</Link>
//       </div>
//       <div className='right'>
//         {/* Display profile information */}
//         <img id='prof-img' src={``} alt="Profile Picture" />
//         <p className='prof-det'>Name: {storedData.name}</p>
//         <p className='prof-det'>Account Number: {storedData.accountNumber}</p>
//         <p className='prof-det'>Phone Number: {storedData.phone}</p>
//         <p className='prof-det'>Email: {storedData.email}</p>
//         <p className='prof-det'>Address: {storedData.address}</p>
//         {/* Optionally, you can display the profile picture */}
        
//         <Link to="/Editprofile" className='editbtn'>Edit Profile</Link>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from 'react';
import { Link ,useLocation} from 'react-router-dom';
import "./Profile.css";

import dash from "../images/dashboard.jpg";
import dep from "../images/dep.jpg";
import wd from "../images/wd.jpg";
import ep from "../images/ep.png";
import axios from 'axios';

const Profile = () => {
  return (
    <div className='profile'>
      <div className="left">
        <Link to="/Student"><img src={dash} alt="" /> Dashboard</Link>
        <Link to="/Deposit"><img src={dep} alt="" /> Deposit</Link>
        <Link to="/Withdraw"><img src={wd} alt="" /> Withdraw</Link>
        <Link to="/Profile"><img src={ep} alt="" /> Profile</Link>
      </div>
      <div className='right'>
        {/* Display profile information */}
        <img id='prof-img' src={``} alt="Profile Picture" />
        <p className='prof-det'>Name: </p>
        <p className='prof-det'>Account Number: </p>
        <p className='prof-det'>Phone Number: </p>
        <p className='prof-det'>Email: </p>
        <p className='prof-det'>Address: </p> 
        {/* Optionally, you can display the profile picture */}
        
        <Link to="/Editprofile" className='editbtn'>Edit Profile</Link>
      </div>
    </div>
  );
};

export default Profile;