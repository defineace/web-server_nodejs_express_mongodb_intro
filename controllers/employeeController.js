// Import model from employeeModel
const EMPLOYEE = require('../models/employeeModel');

// Show list of employees
const index = (req, res, next) => {
    EMPLOYEE.find()
    .then(response => {
        res.json({
            response: response,
            status: true
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured'
        })
    })
}

// Show Single Employee
const show = (req, res, next) => {
    let employeeID = req.body.employeeID

    console.log('SHOW');
    
    EMPLOYEE.findById(employeeID)
    .then(response => {
        res.json({
            response: response
        })
    })
    .catch(errpr => {
        res.json({
            message: 'An Error Occured'
        })
    })
}

///////////////////////////////////////////////////////////////////

// Store New Employee Entry
const store = (req, res, next) => {

    let newEmployee = new EMPLOYEE({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone, 
        age: req.body.age
    })

    if( req.file){
        newEmployee.avatar = req.file.path
    }
    
    newEmployee.save()
    .then(response => {
        res.json({
            message: 'Employee Added Successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured'
        })
    })
}

///////////////////////////////////////////////////////////////////

// Update Employee
const update = (req, res, next) => {
    let employeeID = req.body.employeeID
    
    let updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone, 
        age: req.body.age,
        avatar: req.file.path
    }

    EMPLOYEE.findByIdAndUpdate(employeeID, {$set: updateData})
    .then(() => {
        res.json({
            message: 'Employee Updated Successfully'
        })
    })
    .catch(() => {
        res.json({
            message: 'An Error Occured'
        })
    })
}

// Delete Employee
const destroy = (req, res, next) => {
    let employeeID = req.body.employeeID

    EMPLOYEE.findOneAndDelete(employeeID)
    .then(() => {
        res.json({
            message: 'Employee Deleted Successfully'
        })
    })
    .catch(() => {
        res.json({
            message: 'An Error Occured'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}