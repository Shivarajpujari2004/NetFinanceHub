import React, { useState, useEffect } from 'react';
import { Link ,useLocation,useNavigate} from 'react-router-dom';
import "./Profile.css";
import dash from "../images/dashboard.jpg";
import dep from "../images/dep.jpg";
import wd from "../images/wd.jpg";
import ep from "../images/ep.png";
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';


const Profile = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUser(userData);
    }
  }, []);

  return (
    <div>
      {user ? (
        <>
          <div className='profile'>
       <div className="left">
          <Link to="/Student"><img src={dash} alt="" /> Dashboard</Link>
          <Link to="/Deposit"><img src={dep} alt="" /> Deposit</Link>
          <Link to="/Withdraw"><img src={wd} alt="" /> Withdraw</Link>
          <Link to="/Profile"><img src={ep} alt="" /> Profile</Link>
        </div>
       <div className='right'>
           <img id='prof-img' src={``} alt="Profile Picture" />
             <p className='prof-det'>Name:{user.username} </p>
             <p className='prof-det'>Account Number: {user.accnor}</p>
             <p className='prof-det'>Phone Number: {user.phonenor}</p>
             <p className='prof-det'>Email: {user.email}</p>
             <p className='prof-det'>Address: </p>
         <Link to="/Editprofile" className='editbtn'>Edit Profile</Link>
       </div>
     </div>

        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
