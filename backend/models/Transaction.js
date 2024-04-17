const mongoose = require('mongoose');

// Define the schema for the account collection
const transaction = new mongoose.Schema({
    Sendernumber: {
        type: String,
        required: true
    },
    Receivernumber:{
        type: String,
        required: true
    },

    amount: {
        type: Number,
        required: true,
        default: 0
    },
    Date:{
        type:Date,
        required:true,
        default:new Date()
    }
});

// Create a model using the schema
const Transaction = mongoose.model('Transaction', transaction);

module.exports=Transaction;