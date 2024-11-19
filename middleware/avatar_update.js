
const path = require('path');
const fs = require('fs');
const multer = require('multer');

// Create template for Storage Header containing folder path and filename
var storageHeader = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads/');
    },
    filename: (req, file, callback) => {
        let ext = path.extname(file.originalname);
        callback(null, Date.now() + ext);
    }
})


var upload = multer({
    // Set Storage Header
    storage: storageHeader,
    
    
    fileFilter: (req, file, callback) => {

        // ###################################
        // CURRENT WORK
        // Delete Old Avatar

        // console.log('RECIEVING');
        // console.log();
        // console.log(req.body.oldAvatar);
        // console.log();
        // console.log(file);
        // // 

        // ###################################


        // Check file format
        if(file.mimetype == "image/png" || file.mimetype == "image/jpg"){
            
            // Delete Old Avatar
            fs.rmSync(req.body.oldAvatar);

            // Callback function true accept file
            callback(null, true);
        }else{

            // Callback function false accept file
            console.log("Only jpg and png file supported!");
            callback(null, false);
        }

    }, limits: {

        // Set File Size
        // 1024 Bytes * 1024 Bytes * 2 Bytes
        //  2 Megabytes
        
        fileSize: 1024 * 1024 * 2
    }
})

module.exports = upload;