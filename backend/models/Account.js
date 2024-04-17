const mongoose = require('mongoose');

// Define the schema for the account collection
const accountSchema = new mongoose.Schema({
    phonenumber:{
        type:Number,
        required:true
    },
   
    amount: {
        type: Number,
        required: true,
        default: 0
    },
    
});
// createdAt: {
    //     type: Date,
    //     default: Date.now
    // }
// Create a model using the schema
const Account = mongoose.model('Account', accountSchema);

module.exports=Account;