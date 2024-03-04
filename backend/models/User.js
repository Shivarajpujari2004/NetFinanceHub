const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {     //email,phonenor,accnor,username
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  accnor: {
    type: Number,
    required: true,
  },
  ifsc: {
    type: String,
    required: true,
  },
  phonenor: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
 
  
});

const User = mongoose.model('users', userSchema);

module.exports = User;
