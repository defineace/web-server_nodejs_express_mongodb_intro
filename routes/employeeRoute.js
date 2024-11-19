// Import Packages
const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');
const avatar_upload = require('../middleware/avatar_upload');
const avatar_update = require('../middleware/avatar_update');
const authenticate = require('../middleware/authenticate');

router.get('/', authenticate, employeeController.index);
router.post('/show', authenticate, employeeController.show);
router.post('/store', authenticate, avatar_upload.single('avatar'), employeeController.store);
router.post('/update', authenticate, avatar_update.single('avatar'), employeeController.update);
router.post('/delete', authenticate, employeeController.destroy);

module.exports = router
