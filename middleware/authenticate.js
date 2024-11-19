const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    try {
        const TOKEN = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(TOKEN, 'verySercretiveValue');
        
        req.user = decode;
        
        // console.log('Token: ', TOKEN);
        // console.log('Verify: ', decode);
        // console.log('Request User: ', req.user);
        // console.log('----------------------------------------------');


        next();
    }
    catch(error){
        res.json({
            message: 'Authentication Failed!',
            status: false
        })
    }
}

module.exports = authenticate;