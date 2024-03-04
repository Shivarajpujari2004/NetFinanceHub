const express = require("express")
const User = require("./models/User")
const cors = require("cors")
const app = express()
const mongoose = require('mongoose');
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken');
const Account=require('./models/Account')

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
  const {username} = req.body;
  Account.create({name:username})
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



//gpt
app.post('/deposit', async (req, res) => {
  const { username, amount } = req.body;
  try {
    // Use $inc to increment the current amount by the new deposit amount
    await Account.updateOne({ name: username }, { $inc: { amount: amount } });
    const amt= await Account.findOne({ name: username });
    res.json({acc:amt});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/withdraw', async (req, res) => {
  const { username, amount } = req.body;
  try {
    // Use $inc to increment the current amount by the new deposit amount
    await Account.updateOne({ name: username }, { $inc: { amount: -amount } });
    const amt= await Account.findOne({ name: username });
   
    res.json({acc:amt});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//gpt

app.listen(8000, () => {
  console.log("Server running");
})




