const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
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
  fullname: {
    type: String,
    required: true,
  },
  ifsc: {
    type: String,
    required: true,
  },
  accnor: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  //Add reference to Profile (if needed)
//   profile: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Profile',
//   },
//   username:String,
//   password:String,
//   email:String,
//   phonenor:String,
//   accnor:Number,
//   ifsc:String,
//   fullname:String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
