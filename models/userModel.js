// Import Packages
const mongoose = require('mongoose');

// Initiate Mongoose Schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String
    },
    email:{
        type: String
    },
    name:{
        type: String
    },
    password:{
        type: String
    },
}, {timestamp: true});

// Bind schema to model
const  User = mongoose.model('userModel', userSchema);

// Export model
module.exports = User;
