// Import Packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const employeeRoute = require('./routes/employeeRoute');
const authRoute = require('./routes/authRoute');

// Using mongoose to interface with MongoDB
mongoose.connect('mongodb://localhost:27017/testDB', {useNewUrlParser: true, useUnifiedTopology: true});

// Connnecting to Mongodb 
const db = mongoose.connection

// Mongoose Failed to connect
db.on('error', (err)=> {
    console.log(err)
});

// Mongoose Success to connect
db.once('open', ()=> {
    console.log('[Server]Database Connection Established!');
})

// initiate express app
const app = express();

// Register View Engine
app.set('view engine','ejs');

// Declare 'public' folder for CSS and JS
app.use(express.static('public'));

// Use morgan development tools
app.use(morgan('dev')) ;


////////////////////////////////////////////////////////////////////////////////////
// #### formData is sent correctly on client side need to parse incomming data correctly
// #### on server side


// Parse Header URL-Encoded Content-Type: applicaton/UTF-8
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb'}));

// Parse Header JSON Content-Type: application/json
app.use(bodyParser.json({ limit: '100mb'}));


// parse application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: false, limit: '50mb' }));

// Parse Header JSON Content-Type: application/json
// app.use(bodyParser.json({ limit: '50mb'}));




////////////////////////////////////////////////////////////////////////////////////



// Multer Exchange for file upload to uploads folder
app.use('/uploads', express.static('uploads'));

// Enviroment Variable for Port
const PORT = process.env.PORT || 3000;

// Start Server
app.listen(PORT, ()=> {
    console.log('\n')
    console.log("[Server]Server Started");
    console.log("[Server]Port: ", PORT);
    console.log("--------------------------------------------------");
});


app.use('/api/employee', employeeRoute);
app.use('/api', authRoute);

// Home Link Redirect
app.get('/',(req,res)=>{ 

    console.log("--------------------------------------------------");
    console.log('[Client]');
    res.status(200).render('index');

});

// Home Link Redirect
app.get('/registration',(req,res)=>{ 

    console.log("--------------------------------------------------");
    console.log('[Client]');
    res.status(200).render('registration');

});

// Home Link Redirect
app.get('/home',(req,res)=>{ 

    console.log("--------------------------------------------------");
    console.log('[Client]');
    res.status(200).render('home');

});

// Home Link Redirect
app.get('/employee',(req,res)=>{ 

    console.log("--------------------------------------------------");
    console.log('[Client]');
    res.status(200).render('employee');

});


