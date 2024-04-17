const express = require("express")
const User = require("./models/User")
const cors = require("cors")
const app = express()
const mongoose = require('mongoose');
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken');
const Account=require('./models/Account')
const Transaction=require('./models/Transaction');
const Student = require("./models/Student")

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://shivukp333:1M2iWLCYyF2dXcFm@netfinancehub.tqsl92p.mongodb.net/?retryWrites=true&w=majority&appName=NetFinanceHub")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

  
// mongoose.connect("mongodb://localhost:27017/NETFINANCEHUB", { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {y

//     console.error("MongoDB connection error:", err);
//   });

//routes

// app.post('/Register',(req,res)=>{
//   User.create(req.body)
//   .then(User=>res.json(User))
//   .catch(err=>res.json(err))
  
// })

// app.post('/account',(req,res)=>{
//   Account.create(req.body)
//   .then(account=>{res.json(account)})
//   .catch(err=>res.json(err))
// })
app.post('/Register',(req,res)=>{
  const name = req.body.username;
  const fullname = req.body.fullname;
  const email =req.body.email;
  const accnor =req.body.accnor;
  const ifsc =req.body.ifsc;
  const phoneno=req.body.phonenor;
  const password =req.body.password;

if (!name || !fullname || !email || !accnor || !ifsc || !phoneno || !password) {
  return res.json({ error: "Enter all the details" });
}

// Email validation
const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!validEmail.test(email)) {
  return res.json({ error: "Enter a valid email" });
}

// Phone number validation
if (phoneno.length !== 10 || isNaN(phoneno)) {
  return res.json({ error: "Enter a valid phone number" });
}

// Password validation (example: at least 6 characters)
if (password.length < 6) {
  return res.json({ error: "Password should be at least 6 characters long" });
}

  User.create(req.body)
  const {phonenor} = req.body;
  Account.create({phonenumber:phonenor})
  .then(User=>res.json(User))
  .catch(err=>res.json(err))
})

app.post('/Register2',(req,res)=>{
  const name = req.body.username;
  const fullname = req.body.fullname;
  const email =req.body.email;
  const accnor =req.body.accnor;
  const ifsc =req.body.ifsc;
  const phoneno=req.body.phonenor;
  const password =req.body.password;
  const schoolname2=req.body.schoolname;

if (!name || !fullname || !email || !accnor || !ifsc || !phoneno || !password || !schoolname2) {
  return res.json({ error: "Enter all the details" });
}

// Email validation
const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!validEmail.test(email)) {
  return res.json({ error: "Enter a valid email" });
}

// Phone number validation
if (phoneno.length !== 10 || isNaN(phoneno)) {
  return res.json({ error: "Enter a valid phone number" });
}

// Password validation (example: at least 6 characters)
if (password.length < 6) {
  return res.json({ error: "Password should be at least 6 characters long" });
}

  Student.create(req.body)
  const {phonenor} = req.body;
  Account.create({phonenumber:phonenor})
  .then(User=>res.json(User))
  .catch(err=>res.json(err))
})

app.post("/Login",async (req, res) => {
  const name = req.body.username;
  const phoneno=req.body.phonenor;
  const passWord =req.body.password;

  if( name=="" || phoneno=="" || passWord=="" ){
    res.status(500).json({ error: "Internal Server Error", details: " Enter all the details" });
    
  }
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

app.post("/Login2",async (req, res) => {
  const { username, password } = req.body;
  try{
 const user = await Student.findOne({ username: username })
   
      if (user) {
        if (user.password === password) {
          const {_id, email, phonenor,password,fullname,ifsc,schoolname,accnor,username } = user;
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
  const { phonenor, amount } = req.body;
  try {
    // Use $inc to increment the current amount by the new deposit amount
    await Account.updateOne({ phonenumber: phonenor }, { $inc: { amount: amount } });
    const amt= await Account.findOne({ phonenumber: phonenor });
    res.json({acc:amt});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/withdraw', async (req, res) => {
  const { phonenor, amount } = req.body;
  try {
    // Use $inc to increment the current amount by the new deposit amount
    await Account.updateOne({ phonenumber  : phonenor }, { $inc: { amount: -amount } });
    const amt= await Account.findOne({ phonenumber: phonenor });
   
    res.json({acc:amt});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/transaction', async (req, res) => {

  const { amount, snumber, rnumber ,password} = req.body;
  try {

    const senderAccount = await Account.findOne({ phonenumber: snumber });
    const sender = await User.findOne({ phonenor: snumber });

    if (!senderAccount) {
      return res.status(404).json({ message: 'Sender account not found' });
    }
    if(password !== sender.password){
      res.json({message:"password is incorrect"})
    }else{

    if (senderAccount.amount < amount) {
      return res.status(401).json({ message: 'Insufficient balance' });
    }
    await Transaction.create({ amount: amount, Sendernumber: snumber, Receivernumber: rnumber });
    await Account.updateOne({ phonenumber: snumber }, { $inc: { amount: -amount } });
    await Account.updateOne({ phonenumber: rnumber }, { $inc: { amount: amount } });
    const amt= await Account.findOne({ phonenumber: snumber });

   
    res.status(200).json({ message: 'Transaction successful',acc:amt });
  }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  
  }
});

app.get('/transactionDetails',async(req,res)=>{
  const transactions = await  Transaction.find().sort({Date:-1}).limit(15);
  res.json(transactions);
});


app.get('/transactionDetails2',async(req,res)=>{
  const transactions = await  Transaction.find().sort({Date:-1});
  res.json(transactions);
})


app.listen(8000, () => {
  console.log("Server running");
})




