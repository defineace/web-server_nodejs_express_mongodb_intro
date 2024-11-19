const USER = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = (req, res, next) => {
    // Encrypt submitted password
    bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
        if(err) {
            res.json({
                error: err
            })
        }

        let user = new USER ({
            username: req.body.username,
            email: req.body.email,
            name: req.body.name,
            password: hashedPass
        })
        
        // Save to database
        user.save()
        .then( user => {
            res.json({
                message: 'User Added Successfully'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured'
            })
        })
    })
}


const login = (req, res, next) => {
    var USERNAME = req.body.username;
    var password =  req.body.password;


    // Check database is username or email exists
    USER.findOne({$or: [{username: USERNAME}, {email: USERNAME}]})
    .then( user => {
        if(user){

            // Compare "submitted password" with "database encrypted password"
            bcrypt.compare( password, user.password, (err, result) => {
                if(err){
                    res.json({
                        error: err
                    })
                }if(result){
                    let token = jwt.sign({username: user.username}, 'verySercretiveValue', {expiresIn: '1h'});

                    res.json({
                        message: 'Login Successful',
                        status: true,
                        token: token
                    })
                }else{
                    res.json({
                        message: 'Password Incorrect'
                    })
                }
            })
        }else{
            res.json({
                message: 'No User Found'
            })
        }
    })
}


module.exports = {
    register, login
};