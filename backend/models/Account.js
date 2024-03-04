const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the account collection
const accountSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    amount: {
        type: Number,
        required: true,
        default: 0
    },
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // }
});

// Create a model using the schema
const Account = mongoose.model('Account', accountSchema);

module.exports=Account;