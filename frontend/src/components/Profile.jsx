import React, { useState, useEffect } from 'react';
import { Link ,useLocation,useNavigate} from 'react-router-dom';
import "./Profile.css";
import dash from "../images/dashboard.jpg";
import dep from "../images/dep.jpg";
import wd from "../images/wd.jpg";
import ep from "../images/ep.png";
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';


// const Profile = () => {
//   const [user, setUser] = useState("");
//   const [loggedIn,setLoggedin]=useState("");

//   useEffect(() => {
//     const username = localStorage.getItem("user");

//     // Fetch user data after the component mounts
//     axios.get(`http://localhost:8000/api/user/${username}`)
//       .then((response) => {
//         const { success, user } = response.data;

//         if (success) {
//           setUser(user);
//         } else {
//           // Handle error (user not found or other issues)
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching user data:", error);
//       });
//   }, []);

//   // const handleLogin = (loginData)=>{
//   //   if(loginData.username==='admin' && loginData.password==='admin'){
//   //     setLoggedin(true);
//   //     setUser(loginData.username);
//   //   }
//   //   else{
//   //     alert("invalid username");
//   //   }
//   // }



//   return (

   
   
//     <div className='profile'>
//       <div className="left">
//          <Link to="/Student"><img src={dash} alt="" /> Dashboard</Link>
//          <Link to="/Deposit"><img src={dep} alt="" /> Deposit</Link>
//          <Link to="/Withdraw"><img src={wd} alt="" /> Withdraw</Link>
//          <Link to="/Profile"><img src={ep} alt="" /> Profile</Link>
//        </div>
//       <div className='right'>
//           <img id='prof-img' src={``} alt="Profile Picture" />
//             <p className='prof-det'>Name:{user.username} </p>
//             <p className='prof-det'>Account Number: </p>
//             <p className='prof-det'>Phone Number: </p>
//             <p className='prof-det'>Email: </p>
//             <p className='prof-det'>Address: </p>
//         <Link to="/Editprofile" className='editbtn'>Edit Profile</Link>
//       </div>
//     </div>
//   );
// };

// export default Profile;





//  // const [userData, setUserData] = useState([]);
//   // const navigate = useNavigate();
//   // const fetchUserData = async() => {
//   //   const token = localStorage.getItem('token');

//   //   if (!token) {
//   //     console.error('No token found');
//   //     // Handle the absence of a token
//   //     return;
//   //   }

//   //   try {
//   //     // Decode the JWT token to get user information
//   //     // const decodedToken = jwtDecode(token);
//   //     // const user = localStorage.getItem("user");
//   //   //   console.log(2);
//   //   //  console.log(decodedToken);
    
   
//   //     // const parsedPayload = JSON.parse(decodedToken);
//   //     // const userId = parsedPayload.username;
//   //     // const userName = parsedPayload.password;
//   //     // console.log()
//   //     // const u = JSON.parsee
      
//   //       // setUserData([u[0],u[1]]);
      
   
   
//   //     } catch (error) {
//   //     console.error('Error decoding JWT token:', error);
//   //     // Handle decoding error
//   //   }
//   // };


//   // useEffect(() => {
//   //   fetchUserData();
//   // }, []);


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
          {/* <h2>Welcome, {user.username}!</h2>
          <p>Phone Number: {user.phonenor}</p>
          Display other user details as needed */}
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
