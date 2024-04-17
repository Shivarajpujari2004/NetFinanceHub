import React, { useState, useEffect } from 'react';
import { Link ,useLocation,useNavigate} from 'react-router-dom';
import "./Profile.css";
import dash from "../images/das4.png";
import dep from "../images/d1.png";
import wd from "../images/w2.png";
import ep from "../images/ep.png";
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';


const Profile2 = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const userDataString = localStorage.getItem("userData");

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUser(userData);
    }
  }, []);

  const handleLogout = () =>{
    localStorage.removeItem("userData");
    localStorage.removeItem("useraccount");
    
    navigate("/");
  }

  return (
    <div className='prof-main'>
      {user ? (
        <>
          <div className='profile'>
       <div className="left">
          <Link to="/Student2"><img src={dash} alt="" /> Dashboard</Link>
          <Link to="/Deposit2"><img src={dep} alt="" /> Deposit</Link>
          <Link to="/Withdraw2"><img src={wd} alt="" /> Withdraw</Link>
          <Link to="/Profile2"><img src={ep} alt="" /> Profile</Link>
        </div>
        <h1 className='prof'>PROFILE</h1>
       <div className='right'>
           {/* <img id='prof-img' src={``} alt="Profile Picture" /> */}
             <p className='prof-det'>Name:{user.username} </p>
             <p className='prof-det'>Account Number: {user.accnor}</p>
             <p className='prof-det'>Phone Number: {user.phonenor}</p>
             <p className='prof-det'>Email: {user.email}</p>
             {/* <p className='prof-det'>Address: </p>
         <Link to="/Editprofile" className='editbtn'>Edit Profile</Link> */}
         <form onSubmit={handleLogout} className='logout'>
          <input type="submit" value="Logout" className='sub logoutbtn' />
         </form>
       </div>
     </div>

        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile2;
