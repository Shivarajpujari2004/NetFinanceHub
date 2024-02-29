const express = require("express")
const User = require("./models/User")
const cors = require("cors")
const app = express()
const mongoose = require('mongoose');

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

// app.post("/Login",(req,res)=>{
//   const[username,phonenor,password]=req.body;
//   User.findOne({username:username})
//   .then(user=>{
//     if(user){
//       if(user.password===password){
//         res.json("success")
//       }
//       else{
//         res.json("Password or Username is incorrect")
//       }
//     }
//     else{
//       res.json("No Account Found..!")
//     }
//   })
// })

app.post("/Login", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username: username })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("success");
        } else {
          res.status(401).json({ error: "Incorrect Password", details: "Password or Username is incorrect" });
        }
      } else {
        res.status(404).json({ error: "No Account Found", details: "No Account Found..!" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Login failed", details: "Internal Server Error" });
    });
});


//routes

app.listen(8000, () => {
  console.log("Server running");
})


