// Import Packages
const mongoose = require('mongoose');

// Initiate Mongoose Schema
const Schema = mongoose.Schema;

// Create employee schema
// Add Timestap with data entry
const employeeSchema = new Schema({
    name:{
        type:String
    },
    designation:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    age:{
        type:String
    },
    avatar:{
        type:String
    }
}, {timestamps: true});

// Bind schema to model
const employee = mongoose.model('employeeModel', employeeSchema);

// Export model
module.exports = employee;