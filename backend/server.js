const express = require("express")
const User = require("./models/User")
const cors = require("cors")
const app = express()
const mongoose = require('mongoose');
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken');

app.use(express.json())
app.use(cors())

// mongoose.connect("mongodb://localhost:27017/NETFINANCEHUB");
mongoose.connect("mongodb://localhost:27017/NETFINANCEHUB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

//routes

app.post('/Register',(req,res)=>{
  User.create(req.body)
  .then(User=>res.json(User))
  .catch(err=>res.json(err))
})

app.post("/Login",async (req, res) => {
  const { username, password } = req.body;
  try{
 const user = await User.findOne({ username: username })
   
      if (user) {
        if (user.password === password) {
          const {_id, email, phonenor,password,fullname,ifsc,accnor,username } = user;
          res.json({ success: true, userData:{_id, email, phonenor,password,fullname,ifsc,accnor,username } });
          
        } else {
          
          res.status(401).json({ error: "Incorrect Password", details: "Password or Username is incorrect" });
        }
      } else {
        res.status(404).json({ error: "No Account Found", details: "No Account Found..!" });
      }
    }
    catch(err)  {
      console.error(err);
      res.status(500).json({ error: "Login failed", details: "Internal Server Error" });
    }
});


app.get("/api/user/:username", (req, res) => {
  const username = req.params.username;
  // Fetch user data based on the username
  User.findOne({ username })
    .then((user) => {
      if (user) {
        res.json({ success: true, user });
      } else {
        res.status(404).json({ success: false, error: "User not found" });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    });
});
//gpt

app.listen(8000, () => {
  console.log("Server running");
})



//routes

//gpt
// Add a new route to get user data after login
// app.post("/GetUserData", (req, res) => {
//   const { username } = req.body;
//   User.findOne({ username: username })
//     .then((user) => {
//       if (user) {
//         res.json({ user });
//       } else {
//         res.status(404).json({ error: "No Account Found", details: "No Account Found..!" });
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).json({ error: "Failed to fetch user data", details: "Internal Server Error" });
//     });
// });
